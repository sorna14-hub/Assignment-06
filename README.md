<div align="center">

<img src="public/logo.png" alt="FitLog logo" width="56" />

# FitLog — Workout Library

**Train with intent. Log every set.**

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

[Live Site](#-links) · [Features](#-features) · [Tech Stack](#%EF%B8%8F-technologies-used) · [Getting Started](#-getting-started)

</div>

---

## 📖 About

FitLog is a responsive workout-library web app built with **Next.js (App Router)** and **Tailwind CSS**, implemented from a Figma design. It pulls twelve lifts from the FitLog API, shows them in a browsable library, gives each lift a detailed spec sheet, and lets you build a capped daily plan (or save lifts for later) that persists in your browser.

## ✨ Features

1. **Workout library** — all 12 lifts from the API in a responsive 3 × 4 grid (3 → 2 → 1 columns), each card showing an image, muscle-group tags, equipment, and duration / calories / rating stats. A skeleton loader with a spinner streams in while the data is fetched.
2. **Detailed workout pages** — `/workout/[id]` shows a large visual, description, tags, a key-specs panel (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Today's Plan & Saved lists** — "Add to today's plan" and "Save for later" update live navbar badges and show toast notifications. Adding something twice shows an "already added" toast instead of duplicating it.
4. **Five-lift daily cap** — the plan holds up to 5 unfinished lifts ("Finish them, then load more"); marking a lift done frees a slot.
5. **My Plan dashboard** — live Exercises / Minutes / Calories metrics, Today's Plan / Saved tabs, **Sort By** (Duration, Calories, Rating), **Mark as Done**, **Remove**, a loading state, and a friendly empty state.
6. **Persistent data** — plan and saved lists are stored in `localStorage` (and synced across tabs), so nothing is lost on reload.
7. **Robust routing** — custom 404 page for unknown routes and invalid workout ids, an error boundary with retry if the API is down, and safe page reloads on every route.
8. **Fully responsive** — mobile, tablet and desktop layouts, with a collapsible mobile navbar menu.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/) (App Router, Turbopack) | Framework, routing, server components, streaming |
| [React 19](https://react.dev/) + React Compiler | UI |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling & responsive design (design tokens from Figma) |
| [lucide-react](https://lucide.dev/) | Icons |
| [react-hot-toast](https://react-hot-toast.com/) | Toast notifications |
| `next/font` (Oswald + Inter) | Display and body typography |
| FitLog REST API | Workout data |

## 🗂️ Project Structure

```
├── public/                      # logo, banner, footer icon
└── src/
    ├── app/
    │   ├── page.tsx             # Home: hero + library (streamed with Suspense)
    │   ├── workout/[id]/        # Details page + loading skeleton
    │   ├── my-plan/             # My Plan page
    │   ├── not-found.tsx        # Custom 404
    │   ├── error.tsx            # Error boundary
    │   └── layout.tsx           # Navbar, footer, fonts, toaster
    ├── components/              # Navbar, Hero, WorkoutCard, PlanCard, SortSelect, …
    ├── context/PlanContext.tsx  # usePlan() hook
    └── lib/                     # API helpers, types, localStorage-backed plan store
```

## 🔌 API

| Endpoint | Description |
| --- | --- |
| `GET https://api.abcz.workers.dev/api/fitlog` | All workouts |
| `GET https://api.abcz.workers.dev/api/fitlog/:id` | A single workout |

## 🚀 Getting Started

```bash
git clone https://github.com/AtikHasanDev/Assignment_6.git
cd Assignment_6
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

### Deploying to Vercel

1. Import the GitHub repo on [vercel.com/new](https://vercel.com/new) (framework preset: Next.js).
2. Keep the default settings and click **Deploy** — no environment variables are needed.

## 🔗 Links

- **Live Site:** https://assignment-6-gamma-one.vercel.app
- **GitHub Repository:** https://github.com/AtikHasanDev/Assignment_6

---

<div align="center">

© 2026 FitLog — Workout Library. Train hard, log honest.

</div>
