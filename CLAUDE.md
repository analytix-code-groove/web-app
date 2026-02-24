# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

Node 20.x, npm 10.9.2. No test framework is configured.

## Architecture

**Next.js 15 App Router** with React 19, TypeScript (strict), TailwindCSS 4, and Supabase (PostgreSQL + Auth).

### Key Directories

- `src/app/` — App Router pages and API routes
- `src/components/` — Shared React components
- `src/lib/` — Utilities: i18n, Supabase clients, profile helpers
- `src/data/services.ts` — Service page definitions with translations
- `src/sql/` — Supabase SQL schemas and RLS policies

### Server/Client Component Pattern

Pages are server components that delegate interactivity to paired `*Client.tsx` files:
- `src/app/blog/page.tsx` → `BlogClient.tsx`
- `src/app/services/[service]/page.tsx` → `[service]Client.tsx`
- `src/app/login/page.tsx` → `LoginClient.tsx`

`ClientLayout.tsx` wraps all pages with Navbar/Footer (hidden on `/login`).

### Internationalization

React Context via `LanguageProvider` in `src/lib/i18n.tsx`. Two languages: `en`, `es`. Use `useLanguage()` hook → `{ t(key), lang, setLang }`. Language persisted in localStorage.

### Database & Auth

Supabase with RLS policies. Schemas: `api`, `content`, `reference`, `app`, `work`, `marketing`, `contact`.

Key tables: `api.profiles` (roles: admin/author/client), `content.posts`, `content.post_translations` (en/es markdown bodies), `content.tags`.

Auth: Supabase Auth (email/password, GitHub OAuth, Google OAuth). Profile auto-created on first login via `ensureProfile()` in `src/lib/profile.ts`.

### API Routes

- `GET/POST /api/posts` — List/create posts (auth + author/admin for POST)
- `GET/DELETE /api/posts/[slug]` — Single post operations
- `POST /api/contact` — Contact form email via Nodemailer
- `POST /api/roles` — Role management (requires `ADMIN_SECRET` bearer token)
- `GET /api/rss.xml` — RSS feed

API routes use `export const runtime = 'nodejs'` and `export const dynamic = 'force-dynamic'`.

### Styling

Dark-theme only. CSS variables defined in `src/app/globals.css` (`--bg`, `--surface`, `--text`, `--muted`, `--mint`, `--stroke`). Utility-first Tailwind with `@tailwindcss/typography` plugin. Path alias: `@/*` → `./src/*`.

## Environment Variables

Required in `.env.local` (see `.env.example` and `supabase.local.example.json`):

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Client-side Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — Server-side admin client
- `ADMIN_SECRET` — Role management endpoint auth
- `SMTP_*` variables — Contact form email delivery

Local dev fallback: `supabase.local.json` is loaded if env vars are not set.

## Deployment

Vercel-hosted. Uses Vercel Analytics and Speed Insights. Image remote patterns configured for Unsplash, GitHub avatars, Google, and Supabase storage.
