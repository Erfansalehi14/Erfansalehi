# AGENTS.md — Padel Club (imported app)

Non-obvious setup and verification notes for this repository.

## What this is
A premium, single-page padel club marketing site built with **Vite 6 + React 18** (plain JSX, no TypeScript, no CSS framework — hand-written CSS in `src/styles/`). There is no backend; the booking flow is a UI engine with a swappable data layer (`src/data/booking.js`).

## Running (Base44 dev environment)
- `docker compose -f docker-compose.base44.yml up -d` — runs a `node:22` container with the repo bind-mounted at `/app`; on start it runs `npm install`, then `vite` dev server on **port 5173**, published as **host port 3000** (the preview entry point).
- Healthcheck: node `fetch` against `http://127.0.0.1:5173/` from inside the container.
- No external secrets are required; `.base44/environment.json` records an empty secrets list.
- Vite config sets `server.allowedHosts: true` and the compose passes `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` so the preview's public origin is accepted.

## Content & imagery
- ALL site copy/data lives in `src/data/site.js` (nav, facilities, courts, memberships, events, gallery, footer) and `src/data/booking.js` (slots, durations, pseudo-availability).
- Photography is downloaded from Wikimedia Commons into `public/images/` and committed; components reference `/images/<name>.jpg`. If an image is missing, the page shows a gap — check `public/images/` first.
- Availability is deterministic (hash of date+court+time) plus locally confirmed bookings persisted in `localStorage` under `padel-club-bookings`; to reset demo state, clear that key.

## Verification
- `npm run build` inside the web container (`docker compose -f docker-compose.base44.yml exec web npm run build`) is a fast smoke test of the whole bundle.
- Visual check: load `/`, verify hero, booking slot states (some slots are intentionally unavailable), gallery lightbox (keyboard: Esc/arrows), and mobile hamburger below 1024px.

## Hero video scrub
- The hero background is a scroll-scrubbed video (`src/components/Hero.jsx` + `src/data/heroVideo.js`): the whole site is Persian/RTL (`dir="rtl"`, Vazirmatn font).
- Video timeline maps 1:1 to scroll progress across a 300vh sticky track (100svh stage); never autoplays, never loops, paused at all times, driven by a rAF-lerped `currentTime`. `prefers-reduced-motion` shows a static first frame.
- The video URL is a placeholder Pexels clip; swap `HERO_VIDEO_URL` in `src/data/heroVideo.js` (H.264 MP4, faststart recommended).
