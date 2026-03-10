# Release v0.3.0 — GEO Audit Quick-Wins

**Date:** 2026-03-10

This release implements quick-win improvements identified in the GEO (Generative Engine Optimization) audit, raising the site's technical SEO, structured data, and content quality scores for both traditional search engines and AI-powered search systems.

---

## Features Included

### 1. SEO Meta Fixes (`feature/seo-meta-fixes`)
- Canonical URLs using `www.analytixcg.com` across metadataBase, sitemap, and JSON-LD
- Default Open Graph image fallback (`/images/og-cover.jpg`)
- Enhanced Organization JSON-LD with `@id`, `description`, `foundingDate`, `contactPoint`, `areaServed`, `knowsAbout`, `numberOfEmployees`, and GitHub in `sameAs`
- Blog posts always use `summary_large_image` Twitter card

### 2. Counter SSR Fix (`feature/counter-ssr`)
- Homepage "Why Us?" counters now show real numbers (20+, 5, 7) in server-rendered HTML
- Animation still plays for users on scroll via post-hydration reset

### 3. LLMs.txt + RSS Fixes (`feature/llms-txt-rss`)
- New `/llms.txt` endpoint for AI crawlers with company info, services, and permissions
- RSS feed improved with `<pubDate>`, `<guid>`, `<language>`, and proper runtime exports

### 4. Blog SSR (`feature/blog-ssr`)
- Blog listing page now server-renders post titles and excerpts (ISR, 60s revalidation)
- Crawlers see real blog content in initial HTML

### 5. Legal Pages (`feature/legal-pages`)
- Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages
- Auth pages (login, signup, forgot-password) link to legal pages instead of plain text
- Footer includes Privacy and Terms links
- Pages added to sitemap

### 6. BreadcrumbList JSON-LD (`feature/breadcrumbs`)
- Breadcrumb structured data on all service pages, about, contact, blog listing, and blog posts
- New `src/lib/breadcrumbs.ts` utility

### 7. Author Bio (`feature/author-bio`)
- Blog posts display author card with avatar, bio, and LinkedIn link
- BlogPosting JSON-LD author includes LinkedIn URL
- SQL migration adds `bio` and `linkedin_url` to profiles

---

## Pre-deploy Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to `https://www.analytixcg.com` in Vercel
- [ ] Verify `/images/og-cover.jpg` dimensions (ideal: 1200x630)
- [ ] Run SQL migration `src/sql/add-author-profile-fields.sql` in Supabase (prod + local)
- [ ] Confirm GitHub org URL: `https://github.com/analytix-code-groove`
- [ ] Flag legal pages for professional review

## Breaking Changes

None.

## Source Feature Notes

See `release-notes/features/2026-03-10/` for individual feature documentation.
