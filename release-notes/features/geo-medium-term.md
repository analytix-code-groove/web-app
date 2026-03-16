# Feature: GEO Medium-Term Technical Fixes

## What was built and why

Addresses the remaining technical Medium-Term items (7-24) from the GEO audit that scored the site 42/100. These are code-only changes that improve AI search visibility, structured data, and security posture without requiring content rewrites.

### Changes

1. **Security Headers** (`next.config.ts`) — Added `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` headers on all routes.

2. **AI Crawler Rules** (`robots.ts`) — Added explicit `Allow: /` rules for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended.

3. **Sitemap lastmod** (`sitemap.ts`) — All static and service pages now include `lastModified` dates (deploy date: 2026-03-16). Blog posts already had this from `published_at`.

4. **Enhanced WebSite Schema** (`layout.tsx`) — Added `@id`, `publisher` reference, and `inLanguage: ['en', 'es']` to the WebSite JSON-LD block.

5. **Enhanced BlogPosting Schema** (`blog/[slug]/page.tsx`) — Added `wordCount`, `dateModified`, `inLanguage`, `speakable` specification, `@id`, `isPartOf`, enriched author with `@id`/`jobTitle`/`image`/`worksFor`/`sameAs`, and linked publisher/mainEntityOfPage by reference.

6. **Service Schema** (all 7 service pages + `[slug]` fallback) — Added `Service` JSON-LD blocks with `@id`, `name`, `description`, `url`, `provider`, `serviceType`, and `areaServed`. Created shared helper `buildServiceJsonLd()` in `src/lib/schema.ts`.

7. **Services Index Schemas** (`services/page.tsx`) — Added `BreadcrumbList` and `ItemList` JSON-LD enumerating all 7 services with positions and URLs.

8. **Upgraded llms.txt** (`llms.txt/route.ts`) — Hyperlinked all 7 services, added dynamic blog section fetched from Supabase, fixed founding date from "2024" to "2025".

9. **New llms-full.txt** (`llms-full.txt/route.ts`) — Comprehensive version including expanded service descriptions, blog posts with dates and excerpts, leadership info, and technology stack summary.

## New files

- `src/lib/schema.ts` — Shared schema builder helpers
- `src/app/llms-full.txt/route.ts` — Full llms.txt API route

## Breaking changes

None.

## Migration steps

None required.
