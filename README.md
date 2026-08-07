# Hover Business Services LLP — Website

A frontend-only Next.js website for **Hover Business Services LLP**, built strictly
from the provided website-structure PDF (menus, mega menu, industries, and the
three homepage banners). No backend, database, auth, or API routes are included —
this is presentation layer only.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first theme via `@theme` + CSS variables, light/dark themes)
- `next/font` (Space Grotesk for display, Inter for body, IBM Plex Mono for data/stats)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

> Note: `next/font` fetches Google Fonts at build time, so an internet connection
> is required for `npm run build` / `npm run dev` to succeed.

## Structure

- `src/data/navigation.ts` — the exact mega-menu structure from the PDF (single
  source of truth for the header nav, mobile nav, and footer).
- `src/data/banners.ts` — copy, stats, and CTAs for the three homepage banners.
- `src/components/layout` — Header (desktop mega menu + mobile drawer), Footer,
  pre-header bar.
- `src/components/hero`, `src/components/banners` — the three homepage banners
  (AI hero, marketing dashboard, trust & achievements).
- `src/app/*` — one page per top-level nav item: About, Digital Marketing,
  Web & App Development, Creative & Design, Industries, Contact.

## Design system

Colors, type scale, spacing, and radii are defined as CSS custom properties in
`src/styles/globals.css` and mapped into Tailwind via `@theme inline`. Dark mode
is toggled by setting `data-theme="dark"` on `<html>` (see `ThemeToggle.tsx`).

## What's intentionally not included

Per the project brief, this repo contains **no** backend/auth/database/CMS/API
routes/server actions. The contact form is a frontend-only form (no submission
endpoint wired up) — connect it to your preferred form backend or API route
separately.
