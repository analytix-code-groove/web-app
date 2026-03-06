# CLAUDE.md

## Architecture

**Next.js 15 App Router**, React 19, TypeScript (strict), TailwindCSS 4, Supabase (PostgreSQL + Auth).

### Key Directories

- `src/app/` — App Router pages and API routes
- `src/components/` — Shared React components
- `src/lib/` — Utilities: i18n, Supabase clients, profile helpers
- `src/data/services.ts` — Service page definitions with translations
- `src/sql/` — Supabase SQL schemas and RLS policies

### Server/Client Component Pattern

Pages are server components that delegate interactivity to paired `*Client.tsx` files (e.g. `page.tsx` → `BlogClient.tsx`). `ClientLayout.tsx` wraps all pages with Navbar/Footer (hidden on `/login`).

### Internationalization

React Context via `LanguageProvider` in `src/lib/i18n.tsx`. Two languages: `en`, `es`. Use `useLanguage()` → `{ t(key), lang, setLang }`. Language persisted in localStorage.

### Database & Auth

Supabase with RLS. Schemas: `api`, `content`, `reference`, `app`, `work`, `marketing`, `contact`.

Key tables: `api.profiles` (roles: admin/author/client), `content.posts`, `content.post_translations` (en/es markdown), `content.tags`.

Auth: email/password + OAuth. Profile auto-created on first login via `ensureProfile()` in `src/lib/profile.ts`.

### API Routes

All routes under `src/app/api/` use `runtime = 'nodejs'` and `dynamic = 'force-dynamic'`.

### Styling

Dark-theme only. CSS variables in `src/app/globals.css`: `--bg`, `--surface`, `--text`, `--muted`, `--mint`, `--stroke`. Utility-first Tailwind.

## Git Strategy

Branch flow: `feature/*` → `release/*` → `dev` → `master` (production).

- **Every change** gets its own `feature/<short-description>` branch, cut from `dev`.
- When ready to ship, merge desired feature branches into a `release/v<major.minor.patch>` branch.
- Release branch is merged into `dev` for integration, then into `master` for production.
- Never commit directly to `dev` or `master`.

### Release Notes

**Per feature:** Every `feature/*` branch must include a `release-notes/features/<short-description>.md` documenting:
- What was built and why
- Breaking changes (if any)
- Migration steps (if any)

**Per release:** When creating a `release/*` branch, consolidate all included feature notes into `release-notes/v<major.minor.patch>/README.md`. Individual feature files are the source of truth — the release note is a curated summary of them.

## Environment Variables

See `.env.example`. Required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_SECRET`, `SMTP_*`. Local dev fallback: `supabase.local.json`.
