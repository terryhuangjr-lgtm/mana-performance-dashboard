#!/usr/bin/env node
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nwbghufnuoblblcafzxt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53YmdodWZudW9ibGJsY2Fmenh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTE4MTQsImV4cCI6MjA5OTc4NzgxNH0.p3IMNRh8hrD_RSalUELUL80Asuof6X2otinml60y8C8'
);

const ROWS = [
  { first_name: 'Julie', last_initial: 'M', eval_date: '2026-05-05', contacted: false, converted: null, program: 'MANA 6', notes: 'Eval with Russ. No follow-up recorded.' },
  { first_name: 'Mark', last_initial: 'T', eval_date: '2026-05-06', contacted: true, converted: false, program: null, notes: 'Declined. Temperato, Mark — said no.' },
  { first_name: 'Molly', last_initial: 'P', eval_date: '2026-05-06', contacted: true, converted: false, program: null, notes: 'Declined. Pettis-Gordon, Molly — said no.' },
  { first_name: 'Kellie', last_initial: 'H', eval_date: '2026-05-18', contacted: true, converted: false, program: null, notes: 'Declined. Hawks, Kellie — said no.' },
  { first_name: 'Nate', last_initial: 'S', eval_date: '2026-05-26', contacted: true, converted: true, program: 'MANA 10', notes: 'Converted! Sucese, Nate — signed for MANA 10.' },
  { first_name: 'Trevor', last_initial: 'H', eval_date: '2026-05-28', contacted: true, converted: true, program: 'BK weekly', notes: 'Converted! Hunt, Trevor — signed for BK weekly.' },
  { first_name: 'Max', last_initial: 'B', eval_date: '2026-05-29', contacted: true, converted: true, program: 'MANA 20', notes: 'Converted! Bobrov, Max — signed for MANA 20.' },
];

async function main() {
  for (const row of ROWS) {
    const { month, year } = { month: parseInt(row.eval_date.split('-')[1]), year: parseInt(row.eval_date.split('-')[0]) };
    const { error } = await supabase.from('mana_pipeline').insert({ ...row, month, year, needs_followup: false });
    if (error) {
      console.error(`✗ ${row.first_name}: ${error.message}`);
    } else {
      console.log(`✓ ${row.first_name} ${row.last_initial}. — ${row.eval_date} (${row.converted === true ? 'converted' : row.converted === false ? 'declined' : 'new'})`);
    }
  }
  console.log('\nDone!');
}

main().catch(console.error);
