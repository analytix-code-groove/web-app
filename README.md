<p align="center">
  <img src="public/images/email-cover.jpg" alt="Analytix Code Groove" width="700" />
</p>

<h1 align="center">acg-web</h1>

<p align="center">
  <strong>Where Data Meets Flow</strong><br/>
  Corporate website and blog for <a href="#">Analytix Code Groove</a> — a technology consultancy specializing in data, AI, cloud, and software engineering.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3fcf8e?logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel" alt="Vercel" />
</p>

---

## Overview

**acg-web** is the landing site, service pages, and blog platform for Analytix Code Groove. It's built with the Next.js 15 App Router, backed by Supabase for auth and content, and deployed on Vercel.

### What's inside

| Section | Description |
|---|---|
| **Home** | Hero with video background, client logos, service cards, and latest blog posts |
| **About** | Company story, values, industries served |
| **Services** | 7 dedicated service pages — Data & Analytics, Cloud & DevOps, Generative AI, Automation & QA, Apps & APIs, IT Consulting, Staff Augmentation |
| **Blog** | Markdown-powered bilingual blog with image uploads, tags, and bookmarks |
| **Contact** | Contact form with SMTP email delivery |
| **Auth** | Email/password + GitHub/Google OAuth, role-based access (admin, author, client) |

### Key features

- **Bilingual (EN/ES)** — full i18n via React Context with browser language detection
- **Dark theme** — mint accent (`#36E2B4`), custom CSS variables, utility-first Tailwind
- **Server + Client components** — pages are server components that delegate interactivity to paired `*Client.tsx` files
- **Role-based blog** — admins and authors can create/edit posts with Markdown + image uploads
- **Supabase backend** — PostgreSQL with Row Level Security, storage buckets for media

---

## Getting Started

### Prerequisites

- Node.js 20.x
- npm 10+
- A [Supabase](https://supabase.com) project

### Setup

```bash
git clone https://github.com/analytix-code-groove/acg-web.git
cd acg-web
npm install
```

Copy the example config files and fill in your credentials:

```bash
cp .env.example .env.local
cp supabase.local.example.json supabase.local.json
```

### Required environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `ADMIN_SECRET` | Secret token for the `/api/roles` endpoint |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | SMTP credentials for the contact form |
| `SMTP_FROM` | Sender address for outbound emails |

See `.env.example` for the full list. You can alternatively use `supabase.local.json` for local development.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
  app/              App Router pages and API routes
    api/            REST endpoints (posts, roles, contact)
    services/       7 individual service pages
    blog/           Blog list, detail, and new post pages
    ...
  components/       Shared React components (Navbar, Hero, Footer, etc.)
  lib/              Utilities — i18n, Supabase clients, profile helpers
  data/             Service definitions with translation keys
  images/           Logos and static assets
  sql/              Supabase SQL schemas and RLS policies
```

---

## Auth & Roles

Authentication is handled by Supabase with email/password and OAuth (GitHub, Google). A profile is auto-created on first login via `ensureProfile()`.

### Assigning roles

Users default to the `client` role. To promote a user to `author` or `admin`:

```bash
curl -X POST http://localhost:3000/api/roles \
  -H "Authorization: Bearer $ADMIN_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"user_id": "<user-uuid>", "role": "author"}'
```

---

## Blog

Posts are created from `/blog/new` with fields for title, excerpt, tags, Markdown body, and an optional cover image. Content is stored per-language in a `post_translations` table (EN/ES).

### Publishing via API

```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "my-first-post",
    "lang": "en",
    "title": "My First Post",
    "excerpt": "Short summary for the blog list",
    "tags": ["nextjs", "supabase"],
    "body_md": "# Hello\nThis is my first post!"
  }'
```

### Markdown support

Posts support GitHub Flavored Markdown: headings, bold/italic, lists, code blocks, and inline images via `![alt](url)`.

---

## Git Strategy

```
feature/* --> release/v*.*.* --> dev --> master
```

- Every change gets its own `feature/<short-description>` branch cut from `dev`
- Feature branches merge into `release/v*.*.*` branches
- Release branches are merged into `dev` (integration) and `master` (production) by maintainers
- Never commit directly to `dev` or `master`

---

## License

All rights reserved. &copy; Analytix Code Groove.
