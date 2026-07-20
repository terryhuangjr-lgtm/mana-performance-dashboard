<h1 align="center">💪 MANA Performance Dashboard</h1>
<p align="center">
  <b>Physical Therapy Practice Management System</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.12-3776AB?logo=python" alt="Python"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Supabase-FF4438?logo=supabase" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Telegram_Bot-26A5E4?logo=telegram" alt="Telegram"/>
  <img src="https://img.shields.io/badge/Google_Calendar-4285F4?logo=googlecalendar" alt="Google Calendar"/>
  <img src="https://img.shields.io/badge/Status-Production_Deployed-22c55e" alt="Status"/>
</p>

---

## 📋 The Problem

Physical therapy practices run on scattered systems — Jane App for scheduling, Trainerize for exercise compliance, separate spreadsheets for patient pipeline tracking. No single view of practice health, and no way to get quick answers without logging into multiple platforms.

## 💡 The Solution

MANA Performance Dashboard unifies patient data, scheduling, exercise compliance, and business metrics into one platform with a Telegram AI agent — giving the practice owner a complete picture of their business from anywhere.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Patient Pipeline** | Visual pipeline showing patients from initial intake through active treatment to discharge |
| **Jane App iCal Sync** | Automatically syncs appointments from Jane App into the dashboard |
| **Trainerize Compliance** | Monitors patient exercise adherence — alerts when compliance drops below thresholds |
| **Business Metrics** | Revenue tracking, appointment volume, patient retention, and utilization rates |
| **24/7 Telegram AI Agent** | Ask about today's schedule, patient progress, revenue — get instant answers via chat |
| **Automated Reports** | Weekly practice performance summary delivered to Telegram |

## 🧱 Architecture

```
┌───────────────┐
│  Telegram     │◀────────┐
│  AI Agent     │         │
└───────────────┘         │
                          │
┌───────────────┐   ┌─────┴─────────┐   ┌──────────────┐
│  Web Dashboard│───▶│  API Layer    │───▶│  Supabase    │
│  (React)      │   │  (Python)     │   │  (Postgres)  │
└───────────────┘   └─────┬─────────┘   └──────────────┘
                          │
            ┌─────────────┼─────────────┐
            │             │             │
    ┌───────▼────┐ ┌──────▼─────┐ ┌────▼────────┐
    │  Jane App  │ │  Trainerize│ │  Google     │
    │  iCal Sync │ │  API       │ │  Calendar   │
    └────────────┘ └────────────┘ └─────────────┘
```

## 🛠 Tech Stack

- **Backend:** Python + Node.js
- **Database:** Supabase (PostgreSQL)
- **Frontend:** React + Tailwind CSS
- **Hosting:** Vercel
- **AI Agent:** Local LLM (Hermes Agent framework)
- **Integrations:** Jane App (iCal), Trainerize API, Google Calendar
- **Notifications:** Telegram Bot API

## 🚀 Status

**🟢 Production deployed** — actively serving a physical therapy practice.

## 📸 Screenshots

*Screenshots coming soon.*

---

## 🏁 Getting Started

```bash
git clone https://github.com/terryhuangjr-lgtm/mana-performance-dashboard.git
cd mana-performance-dashboard

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Start development
npm run dev
```
