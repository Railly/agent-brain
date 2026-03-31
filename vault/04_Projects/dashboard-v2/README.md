---
type: project
status: active
created: 2026-02-01
---
# Dashboard V2

Rebuild the analytics dashboard with real-time data and better UX.

## Goals
- [ ] Real-time event stream (WebSocket)
- [ ] Custom date range picker
- [x] Dark mode support
- [ ] Export to CSV/PDF
- [ ] Mobile-responsive layout

## Stack
- Next.js 15 + React 19
- Tailwind CSS
- Neon (Postgres)
- Vercel deployment

## Links
- Repo: github.com/example/dashboard
- Staging: dashboard-staging.example.com
- Linear project: ENG-42

## Notes
- Auth redirect bug fixed (2026-03-15), was losing query params
- Dark mode shipped (2026-03-15), system preference detection works
