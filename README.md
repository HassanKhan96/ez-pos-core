# EZ POS Core

Offline-first desktop POS for restaurants, kirana stores, grocery marts, and pharmacies.

## Tech stack

- Electron + React + TypeScript + Vite
- Tailwind CSS
- SQLite + Prisma
- Zustand + Zod
- Vitest

## Core screens included

- Inventory management
- Order screen (supports size + variation selection)
- Cart with fees, discount, tax, and place order
- Order history with date filters
- Settings (store name + printer settings stub)
- Sales report (daily/monthly totals + top products)

## Run locally

1. Install dependencies:
   - `npm install`
2. Configure env:
   - `cp .env.example .env`
   - ensure `DATABASE_URL` is `file:./prisma/dev.db`
3. Create database and client:
   - `npm run prisma:migrate`
4. Seed demo data:
   - `npm run prisma:seed`
5. Start app:
   - `npm run dev`

## Build checks

- Type check: `npm run typecheck`
- Tests: `npm run test`
- Build: `npm run build`
