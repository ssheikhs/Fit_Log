<div align="center">

<img src="public/logo.png" alt="FitLog logo" width="56" />

# 💪 FitLog — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

[Live Site](#-live-link) · [Features](#-key-features) · [Tech Stack](#%EF%B8%8F-technologies-used) · [Run Locally](#-run-locally)

</div>

---

## 📖 About the Project

FitLog is a responsive workout-library web app built with **Next.js (App Router)** and **Tailwind CSS**.
It loads twelve lifts from the FitLog API, shows each one with its specs and step-by-step instructions,
and lets you build a daily training plan (max five lifts) or save workouts for later. Your plan is
stored in the browser, so it's still there after a page reload.

## 🔗 Live Link

- **Live site:** _add your Vercel link here_
- **GitHub repo:** https://github.com/ssheikhs/fit-log

## ✨ Key Features

1. **Workout Library from a live API** — 12 workouts fetched from the FitLog API and shown in a responsive 3×4 card grid with tags, equipment and duration / calories / rating stats, plus a loading spinner while data is fetched.
2. **Workout Details Page** — two-column layout with a large image, key specs table (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions.
3. **Today's Plan & Saved lists** — "Add to today's plan" and "Save for later" buttons with toast notifications and live navbar badge counters. The plan is capped at five lifts.
4. **My Plan dashboard** — live Exercises / Minutes / Calories summary, Today's Plan / Saved tabs, a Sort By dropdown (Duration, Calories, Rating), plus **Mark as Done** and **Remove** actions with toasts.
5. **Saved in the browser** — plan and saved workouts are kept in `localStorage`, so nothing is lost on reload.
6. **Fully responsive** — works on mobile, tablet and desktop (grid collapses, hero stacks, navbar stays usable).
7. **Friendly edge cases** — custom 404 page for unknown routes, "Nothing here yet" empty state, and an error page with a retry button if the API fails.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) (App Router) | Pages, routing, server-side data fetching |
| [React 19](https://react.dev/) | UI components and state |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling and responsive layout |
| [lucide-react](https://lucide.dev/) | Icons |
| [react-hot-toast](https://react-hot-toast.com/) | Toast notifications |
| `next/font` (Oswald + Inter) | Display and body fonts |
| [Vercel](https://vercel.com/) | Deployment |

## 🗂️ Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero banner + workout library |
| `/workout/[id]` | Workout details |
| `/my-plan` | My Plan — Today's Plan and Saved tabs |
| any other URL | Custom 404 page |

## 🔌 API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## 🚀 Run Locally

```bash
git clone https://github.com/ssheikhs/fit-log.git
cd fit-log
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
app/
  layout.js            # Navbar, footer, toasts, plan provider
  page.js              # Home: hero + library
  workout/[id]/page.js # Workout details
  my-plan/page.js      # My Plan
  not-found.js         # 404 page
  error.js             # Error fallback
components/            # Navbar, Hero, WorkoutCard, MyPlan, Footer, ...
context/PlanContext.js # Add / save / done / remove actions + toasts
lib/api.js             # API helpers
lib/planStore.js       # localStorage-backed plan store
```

---

<div align="center">

© 2026 FitLog — Workout Library. Train hard, log honest.

</div>
