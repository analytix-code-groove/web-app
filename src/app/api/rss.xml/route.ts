export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { createSupabaseServerClient } from '@/lib/supabase'

export async function GET() {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.analytixcg.com'
  const baseUrl = rawBase.replace(/\/+$/, '')
  const supabase = createSupabaseServerClient()

  const { data } = await supabase
    .schema('content')
    .from('posts')
    .select('slug,published_at,post_translations!inner(language_code,title,excerpt)')
    .eq('status', 'published')
    .eq('post_translations.language_code', 'en')
    .order('published_at', { ascending: false })
    .limit(1, { foreignTable: 'post_translations' })

  type Translation = { title: string; excerpt: string | null }
  type Row = { slug: string; published_at: string | null; post_translations: Translation[] }

  const rows = (data ?? []) as Row[]

  const items = rows
    .map(p => {
      const t = p.post_translations[0]
      if (!t) return null
      const link = `${baseUrl}/blog/${p.slug}`
      const pubDate = p.published_at ? new Date(p.published_at).toUTCString() : ''
      return `    <item>
      <title>${escapeXml(t.title)}</title>
      <link>${link}</link>
      <description>${escapeXml(t.excerpt ?? '')}</description>
      <guid isPermaLink="true">${link}</guid>${pubDate ? `\n      <pubDate>${pubDate}</pubDate>` : ''}
    </item>`
    })
    .filter(Boolean)
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Analytix Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Latest posts from the Analytix blog.</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
