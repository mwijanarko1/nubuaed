---
last_mapped: 2026-04-19T16:51:57Z
---

# Codebase Map

## System Overview

This is a Next.js 16 App Router marketing site using React 19, TypeScript, Tailwind CSS v4, and Vitest with React Testing Library. The current app has three public marketing routes, a shared header/footer shell, global brand styling in `src/app/globals.css`, and centralized environment validation through `src/lib/env.ts`.

The nubuaed brand contract lives in `docs/brand-guidelines.json`. The authoritative visual mark is `public/logo.png`, a 500 x 500 PNG.

## Directory Guide

- `.cursor/plans/` contains implementation plans for agent work.
- `docs/` contains project guidance and brand documentation.
- `public/` contains static assets served from the site root.
- `src/app/` contains App Router routes, the root layout, and global CSS.
- `src/components/` contains shared React components and colocated component tests.
- `src/lib/` contains shared utilities, including environment validation.
- `src/test/` contains test setup for Vitest.

## Key Workflows

- `bun run test:run` or `npm run test:run` runs the Vitest suite once.
- `bun run build` or `npm run build` creates the production Next.js build.
- `src/app/layout.tsx` owns metadata, Montserrat font loading, skip link, and the shared page shell.
- `src/app/page.tsx` composes the home route.
- `src/app/contact/page.tsx` and `src/app/register/page.tsx` render form handoff pages driven by optional public form URLs.
- Contact and registration form URLs should be optional `NEXT_PUBLIC_*` values validated in `src/lib/env.ts`.

## Known Risks

- The repository has uncommitted and untracked files at mapping time, including `.gitignore`, `.cursor/`, and `public/`; do not revert them unless explicitly asked.
- `.env.example` is protected by local hooks, so read or edit attempts may be blocked.
- The app has no installed icon library; avoid adding one unless a design requirement justifies dependency churn.
