# 💪 FitLog — Workout Library

> **Train with intent. Log every set.**

## 📝 Project Description

FitLog is my Programming Hero Assignment 6 project. It is a dark, no-nonsense gym companion website
where you can browse a library of 12 workouts, open any workout to see its details and instructions,
and build your own plan for today. I built it with **Next.js (App Router)** and **Tailwind CSS**, and all
the workout data comes from the FitLog API.

The idea is simple: pick a lift, lock it into today's plan, and watch the week's work add up.

🔗 **Live Link:** _coming soon_
📂 **GitHub Repo:** https://github.com/ssheikhs/fit-log

## 🛠️ Technologies Used

- **Next.js 16** (App Router) — pages, routing and fetching data from the API
- **React 19** — components and state
- **Tailwind CSS 4** — styling and responsive design
- **Lucide React** — icons
- **React Hot Toast** — toast notifications
- **Google Fonts (Oswald + Inter)** — headings and body text
- **Vercel** — deployment

## ✨ Features

1. **Workout Library** — all 12 workouts load from the API and show as cards in a 3×4 grid, with a loading animation while the data is being fetched.
2. **Workout Details Page** — each workout has its own page with a big image, a key specs table (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Add to Today's Plan & Save for Later** — both buttons show a toast message and update the Plan / Saved counters in the navbar right away.
4. **My Plan Page** — shows total exercises, minutes and calories, with Today's Plan and Saved tabs, a Sort By dropdown (Duration, Calories, Rating), and Mark as Done / Remove buttons.
5. **Data Stays After Reload** — my plan and saved workouts are stored in localStorage, and today's plan is capped at 5 lifts.
6. **Responsive Design** — works on mobile, tablet and desktop.
7. **Custom 404 Page** — any wrong URL shows a friendly "Missed the rep" page with a button back to the workouts.

## 🚀 How to Run Locally

```bash
git clone https://github.com/ssheikhs/fit-log.git
cd fit-log
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

---

© 2026 FitLog — Workout Library. Train hard, log honest.
