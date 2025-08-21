import { createSupabaseServerClient } from '@/lib/supabase'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const supabase = createSupabaseServerClient()

  const { data } = await supabase
    .schema('content')
    .from('posts')
    .select('slug,post_translations!inner(language_code,title,excerpt)')
    .eq('status', 'published')
    .eq('post_translations.language_code', 'en')
    .order('published_at', { ascending: false })
    // (optional) keep only 1 translation in the array
    .limit(1, { foreignTable: 'post_translations' })

  type Translation = { title: string; excerpt: string | null }
  type Row = { slug: string; post_translations: Translation[] }

  const rows = (data ?? []) as Row[]

  const items = rows
    .map(p => {
      const t = p.post_translations[0]
      if (!t) return null
      return `    <item>
      <title>${escapeXml(t.title)}</title>
      <link>${baseUrl}/blog/${p.slug}</link>
      <description>${escapeXml(t.excerpt ?? '')}</description>
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
${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}

// tiny helper to keep XML valid
function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
