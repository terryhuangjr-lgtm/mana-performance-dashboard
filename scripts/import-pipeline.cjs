#!/usr/bin/env node
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nwbghufnuoblblcafzxt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53YmdodWZudW9ibGJsY2Fmenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTE4MTQsImV4cCI6MjA5OTc4NzgxNH0.p3IMNRh8hrD_RSalUELUL80Asuof6X2otinml60y8C8'
);

// ─── PASTE NEW ROWS BELOW ───
// Format: { first_name, last_initial, eval_date, contacted, converted, program, notes }
// converted: true/false/null (null = unknown)
// contacted: true/false

const ROWS = [
  // May (already imported — keep for reference, will skip duplicates)
  // April
  // July
];
// ─── END PASTE ───

async function main() {
  if (ROWS.length === 0) {
    console.log('No rows to import. Paste data into the ROWS array above.');
    process.exit(0);
  }

  let imported = 0, skipped = 0, errors = 0;

  for (const row of ROWS) {
    const [year, month] = row.eval_date.split('-').map(Number);

    // Check if already exists (same name + date)
    const { data: existing } = await supabase
      .from('mana_pipeline')
      .select('id')
      .eq('first_name', row.first_name)
      .eq('last_initial', row.last_initial)
      .eq('eval_date', row.eval_date)
      .maybeSingle();

    if (existing) {
      // Update instead of skip
      const { error } = await supabase
        .from('mana_pipeline')
        .update({ contacted: row.contacted, converted: row.converted, program: row.program || null, notes: row.notes || null })
        .eq('id', existing.id);

      if (error) { console.error(`✗ Update ${row.first_name}: ${error.message}`); errors++; }
      else { console.log(`~ ${row.first_name} ${row.last_initial}. — updated`); imported++; }
    } else {
      const { error } = await supabase
        .from('mana_pipeline')
        .insert({ ...row, month, year, needs_followup: false });

      if (error) { console.error(`✗ ${row.first_name}: ${error.message}`); errors++; }
      else { console.log(`✓ ${row.first_name} ${row.last_initial}. — ${row.eval_date} (${row.converted === true ? 'converted' : row.converted === false ? 'declined' : 'new'})`); imported++; }
    }
  }

  console.log(`\nDone: ${imported} processed, ${errors} errors`);
}

main().catch(console.error);
