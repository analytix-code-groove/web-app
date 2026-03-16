# GEO Audit Report: Analytix Code Groove

**URL:** https://www.analytixcg.com/
**Date:** March 10, 2026
**Business Type:** Technology Agency (Data, AI, Cloud Consulting)
**Framework:** Next.js 15 (App Router), React 19, TailwindCSS 4, Vercel

---

## Composite GEO Score: 39/100 (Poor)

| Category | Weight | Score | Weighted | Status |
|----------|--------|-------|----------|--------|
| AI Citability & Visibility | 25% | 38/100 | 9.5 | Poor |
| Brand Authority Signals | 20% | 15/100 | 3.0 | Critical |
| Content Quality & E-E-A-T | 20% | 38/100 | 7.6 | Poor |
| Technical Foundations | 15% | 72/100 | 10.8 | Good |
| Structured Data | 10% | 38/100 | 3.8 | Poor |
| Platform Optimization | 10% | 38/100 | 3.8 | Poor |
| **TOTAL** | **100%** | | **38.5** | **Poor** |

**Score Interpretation:**
- 0-20: Critical -- Virtually invisible to AI search
- 21-40: **Poor -- Minimal AI discoverability** (current)
- 41-60: Fair -- Some AI visibility but significant gaps
- 61-80: Good -- Solid AI presence with room for improvement
- 81-100: Excellent -- Strong AI search visibility

---

## Executive Summary

Analytix Code Groove has solid technical foundations -- Next.js SSR, clean URL structure, proper robots.txt, and an existing llms.txt file. However, the site is **nearly invisible to AI search engines** due to three critical gaps:

1. **Zero brand recognition** in AI knowledge sources (no Wikipedia, no Reddit mentions, no reviews, no press coverage)
2. **No case studies, statistics, or original data** -- the content AI models need to cite
3. **Critical technical bugs** (canonical tags pointing to homepage, double-slash URLs in schema) that actively harm indexability

The strongest asset is the blog post "How to Ensure Your Data is Ready for AI," which contains the site's only genuinely citable content. The weakest area is brand authority -- AI models essentially don't know the company exists.

---

## 1. AI Citability & Visibility (38/100)

### Citability Score: 48/100

**Top 5 Citable Passages:**

| Passage | Score | Location |
|---------|-------|----------|
| "AI amplifies whatever data you give it" | 72/100 | Blog: Data Ready for AI |
| Five Foundational Traits framework | 68/100 | Blog: Data Ready for AI |
| Golden Data Layers concept | 65/100 | Blog: Data Ready for AI |
| 6-Phase AI Implementation Methodology | 62/100 | /services/ai |
| Four-Stage Data Transformation | 58/100 | /services/data-analytics |

**Critical Weaknesses:**
- Zero hard statistics anywhere on the site (no percentages, dollar figures, or benchmark data)
- Zero case studies with measurable outcomes
- Service pages use generic marketing language interchangeable with thousands of competitors
- Homepage hero ("Where Data Meets Flow") has zero information density for AI citation

### AI Crawler Access: 90/100

All AI crawlers are allowed via wildcard `User-Agent: *` with `Allow: /`. No critical crawlers are blocked.

| Crawler | Status |
|---------|--------|
| GPTBot | Allowed (implicit) |
| OAI-SearchBot | Allowed (implicit) |
| ChatGPT-User | Allowed (implicit) |
| ClaudeBot | Allowed (implicit) |
| PerplexityBot | Allowed (implicit) |
| Google-Extended | Allowed (implicit) |
| Amazonbot | Allowed (implicit) |
| CCBot | Allowed (implicit) |
| Applebot-Extended | Allowed (implicit) |

**Issue:** Sitemap URL in robots.txt uses `analytixcg.com` (no www) while canonical is `www.analytixcg.com`.

### llms.txt: 70/100

The file exists and follows the specification correctly. Includes an explicit Permissions section (Crawling, Training, Summarization, Citation all allowed).

**Issues:**
- Service items are not hyperlinked to their pages
- Blog posts not individually listed
- No `/llms-full.txt` companion file
- **BUG:** LinkedIn URL is wrong -- references `/company/analytix-code-groove` (404), actual URL is `/company/analytixcg`

---

## 2. Brand Authority Signals (15/100)

This is the single largest obstacle to AI visibility.

| Platform | Status | Impact |
|----------|--------|--------|
| Wikipedia | Absent | Critical -- primary entity source for AI models |
| Reddit | Absent | High -- major source for Perplexity and ChatGPT |
| YouTube | Absent | High -- primary source for Google Gemini |
| Clutch | Unknown (403) | Medium -- key directory for IT agencies |
| Trustpilot | Absent | Medium |
| LinkedIn | Present (minimal) | Low -- exists but engagement unknown |
| GitHub | Present (minimal) | Low -- 2 repos, 1 star |
| X/Twitter | Present (minimal) | Low -- exists but activity unknown |
| Industry Publications | Absent | High -- no press, analyst mentions, or guest posts |

**Why this matters:** AI models build entity knowledge from external corpora. Without third-party mentions, AI systems have no way to validate that Analytix Code Groove exists or is authoritative. No amount of on-site optimization compensates for this gap.

---

## 3. Content Quality & E-E-A-T (38/100)

### E-E-A-T Breakdown

| Dimension | Score | Key Evidence |
|-----------|-------|-------------|
| Experience | 7/25 | No case studies, no client outcomes, no project walkthroughs |
| Expertise | 10/25 | Author named but no bio/credentials on site. Technical vocab correct but surface-level |
| Authoritativeness | 8/25 | Founded 2024, 3 client logos with zero testimonials, no awards/certifications |
| Trustworthiness | 12/25 | HTTPS present, contact email available. No physical address, no phone number |

### Content Metrics

| Page | Word Count | Assessment |
|------|-----------|------------|
| Homepage | ~300 words | Thin |
| About | ~200 words | Critically underdeveloped |
| Service pages | ~450-500 words | Short-form |
| Blog: Data Ready for AI | ~1,200-1,400 words | Strongest content on site |
| Blog: AI Companies Win | ~650-700 words | Too thin for the topic |
| Blog: Healthcare Modernization | ~850 words | Moderate |

### Critical Content Issues

1. **Multiple H1 tags in blog posts.** Blog Post 1 has 6 H1 tags instead of 1. Markdown content uses `#` for all sections instead of `##`.
2. **Zero inline internal links** in blog posts to service pages
3. **Zero external citations** -- no links to research, reports, or authoritative sources
4. **3 blog posts in 5+ months** -- insufficient publishing velocity for topical authority
5. **AI content signals** -- Blog Post 2 reads as generic AI-generated thought leadership with no original angle

### Content Gaps

- Case studies (most critical gap for an agency)
- Team member bios and credentials
- Industry-specific landing pages (Healthcare, Energy, Agriculture, Financial, Retail listed but no dedicated pages)
- Technical resources / whitepapers
- FAQ content
- Client testimonials (logos exist but zero quotes)
- Comparison/vs pages

---

## 4. Technical Foundations (72/100)

### Score Breakdown

| Category | Score | Status |
|----------|-------|--------|
| Server-Side Rendering | 75/100 | Medium Risk |
| Meta Tags & Indexability | 70/100 | Needs Work |
| Crawlability | 80/100 | Good |
| Security Headers | 45/100 | Poor |
| Core Web Vitals Risk | 65/100 | Medium Risk |
| Mobile Optimization | 85/100 | Good |
| URL Structure | 90/100 | Excellent |
| Response & Status | 85/100 | Good |

### Critical Technical Bugs

#### 1. Canonical Tags Pointing to Homepage (CRITICAL)

All service pages and the blog listing have `<link rel="canonical" href="https://www.analytixcg.com">` -- telling search engines they are duplicates of the homepage.

**Root cause:** `src/app/layout.tsx` line 21 sets `alternates.canonical: '/'` as a default, and service pages don't override it.

**Impact:** Search engines may de-index service pages entirely.

#### 2. Double-Slash URLs in Blog Schema (HIGH)

Blog post breadcrumbs and `mainEntityOfPage` generate URLs like `https://www.analytixcg.com//blog/...` (double slash).

**Root cause:** `src/app/blog/[slug]/page.tsx` uses `NEXT_PUBLIC_SITE_URL` with trailing slash + paths starting with `/`.

#### 3. Missing Security Headers (HIGH)

No CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy headers. Only HSTS is present.

#### 4. Missing Hreflang Tags (HIGH)

The site supports en/es via client-side `LanguageProvider`, but Spanish content is completely invisible to all crawlers. No URL-based language routing, no hreflang annotations.

#### 5. Non-www Redirect Uses 307 Instead of 308

`analytixcg.com` -> `www.analytixcg.com` uses a 307 Temporary Redirect instead of 308 Permanent, reducing link equity transfer.

### Positive Technical Signals

- Next.js SSR delivers full HTML content to crawlers (confirmed via curl)
- All JSON-LD structured data is server-rendered
- Clean URL structure with logical hierarchy
- Proper HTTP->HTTPS 308 redirect
- RSS feed available at `/rss.xml`
- Vercel edge caching with `x-nextjs-prerender: 1` on static pages
- Google Analytics script present (but should be `afterInteractive`, not `beforeInteractive`)

---

## 5. Structured Data (38/100)

### Current Schema Inventory

| Type | Present | Valid | Issues |
|------|---------|-------|--------|
| Organization | Yes (all pages) | Partial | Logo uses OG image instead of actual logo; `foundingDate` not ISO 8601; `sameAs` only 3 platforms |
| WebSite | Yes (all pages) | Partial | Missing `SearchAction`, `@id`, `publisher` reference |
| BreadcrumbList | Yes (subpages) | Bug | Double-slash URLs on blog posts |
| BlogPosting | Yes (blog posts) | Partial | Missing `dateModified`, `wordCount`, `inLanguage`, `speakable`; minimal author data |
| Service | **Missing** | N/A | Zero Service schemas on any of the 7 service pages |
| Person (standalone) | **Missing** | N/A | No author expertise schema |
| FAQPage | **Missing** | N/A | No FAQ structured data |
| ItemList | **Missing** | N/A | /services index has no list schema |

### sameAs Entity Linking (3/8+ platforms)

| Platform | Linked | Impact |
|----------|--------|--------|
| LinkedIn | Yes | |
| X/Twitter | Yes | |
| GitHub | Yes | |
| Wikipedia | No | Critical gap |
| Wikidata | No | High impact |
| Clutch | No | Medium impact (profile exists) |
| Crunchbase | No | Medium impact |
| YouTube | No | Low (no channel yet) |

---

## 6. Platform Optimization (38/100)

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 42/100 | No FAQ schema, no question-based headings on service pages, no comparison tables |
| Google Gemini | 35/100 | No YouTube presence, no Knowledge Panel, thin content footprint |
| ChatGPT Web Search | 32/100 | No Wikipedia/Wikidata entity, no explicit OpenAI bot rules, vague meta descriptions |
| Bing Copilot | 30/100 | No IndexNow, no Bing Webmaster Tools, sitemap URL mismatch, no Microsoft ecosystem signals |
| Perplexity AI | 28/100 | Zero community validation, no original research, client-side rendering risk for service pages |

---

## Priority Action Plan

### Quick Wins (1-2 days, high impact)

| # | Action | Impact | Files to Edit |
|---|--------|--------|---------------|
| 1 | **Fix canonical tags** -- Remove default canonical from layout.tsx, add self-referencing canonical to each page | Critical -- service pages may be de-indexed | `src/app/layout.tsx` (line 21), all page.tsx files |
| 2 | **Fix LinkedIn URL in llms.txt** -- Change `/company/analytix-code-groove` to `/company/analytixcg` | High -- broken entity link | `src/app/llms.txt/route.ts` |
| 3 | **Fix double-slash URLs** in blog breadcrumbs and schema | High -- invalid structured data | `src/app/blog/[slug]/page.tsx` (lines 21-22) |
| 4 | **Fix sitemap URL** in robots.txt -- add `www.` prefix | Medium -- crawler discovery | `src/app/robots.ts` (line 19) |
| 5 | **Change GA script** from `beforeInteractive` to `afterInteractive` | Medium -- performance | `src/app/layout.tsx` (lines 89-94) |
| 6 | **Fix Organization logo** -- point to actual logo, not OG cover image | Medium -- brand identity | `src/app/layout.tsx` (line 55) |
| 7 | **Fix `foundingDate`** format from `"2024"` to `"2024-01-01"` | Low -- schema validity | `src/app/layout.tsx` |

### Medium-Term (1-4 weeks)

| # | Action | Impact | Category |
|---|--------|--------|----------|
| 8 | **Add Service schema** to all 7 service pages | Critical -- AI can't identify services | Schema |
| 9 | **Add security headers** (CSP, X-Frame-Options, X-Content-Type-Options, etc.) | High -- security | Technical |
| 10 | **Enhance BlogPosting schema** -- add `dateModified`, `wordCount`, `inLanguage`, `speakable` | High -- AI citability | Schema |
| 11 | **Add explicit AI crawler rules** to robots.txt (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) | Medium -- signal AI-friendliness | Technical |
| 12 | **Expand sameAs** to 5+ platforms (add Clutch, Wikidata when available) | High -- entity linking | Schema |
| 13 | **Fix heading hierarchy** in blog posts (multiple H1s -> single H1 + H2s) | High -- SEO fundamentals | Content |
| 14 | **Add inline internal links** in blog posts to service pages | High -- topical clustering | Content |
| 15 | **Improve meta descriptions** -- expand to 150-160 chars with keywords | Medium -- click-through | Technical |
| 16 | **Add `lastmod` dates** to all sitemap entries | Medium -- crawl efficiency | Technical |
| 17 | **Implement IndexNow** for instant Bing/Yandex indexing | Medium -- Bing visibility | Technical |
| 18 | **Upgrade llms.txt** with hyperlinked services and blog post references | Medium -- AI discovery | AI Visibility |
| 19 | **Create llms-full.txt** with comprehensive content | Medium -- AI context | AI Visibility |
| 20 | **Add Person schema** for blog authors with credentials | High -- E-E-A-T | Schema |

### Strategic (1-6 months)

| # | Action | Impact | Category |
|---|--------|--------|----------|
| 21 | **Create 3-5 case studies** with named clients, challenges, solutions, and measurable outcomes | Critical -- transforms E-E-A-T, citability, and brand authority simultaneously | Content |
| 22 | **Build About page** with team bios, credentials, founding story, specific numbers | High -- expertise signals | Content |
| 23 | **Add external citations** to all blog posts (Gartner, McKinsey, IDC reports) | High -- trustworthiness | Content |
| 24 | **Create industry landing pages** for Healthcare, Energy, Agriculture, Financial, Retail | High -- topical authority | Content |
| 25 | **Publish original research** (e.g., "2026 State of AI Readiness" based on client data) | Critical -- primary source for AI citation | Content |
| 26 | **Increase publishing** to 2-4 posts/month with topical clusters around each service | High -- topical authority | Content |
| 27 | **Implement URL-based i18n** (`/es/`, `/en/`) with hreflang tags | High -- Spanish content invisible to crawlers | Technical |
| 28 | **Create Wikidata entry** for entity recognition across AI platforms | High -- entity anchor | Brand |
| 29 | **Build community presence** -- Reddit, Clutch reviews, guest posts, industry forums | Critical -- brand authority | Brand |
| 30 | **Create YouTube channel** with educational videos matching blog content | High -- Google Gemini visibility | Brand |
| 31 | **Pursue press coverage** and industry recognition for Wikipedia notability path | Long-term -- strongest entity signal | Brand |

---

## Appendix: Scoring Methodology

| Category | Weight | What It Measures |
|----------|--------|-----------------|
| AI Citability & Visibility (25%) | Passage quality for AI quotation, AI crawler access, llms.txt compliance |
| Brand Authority Signals (20%) | External mentions on Wikipedia, Reddit, YouTube, LinkedIn, industry sources |
| Content Quality & E-E-A-T (20%) | Experience evidence, expertise depth, authoritativeness, trustworthiness |
| Technical Foundations (15%) | SSR, crawlability, security, Core Web Vitals, mobile, URL structure |
| Structured Data (10%) | Schema completeness, JSON-LD validation, AI discoverability schemas |
| Platform Optimization (10%) | Readiness for Google AIO, ChatGPT, Perplexity, Gemini, Bing Copilot |

---

*Report generated by GEO Audit Tool -- March 10, 2026*
