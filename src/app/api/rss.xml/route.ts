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

  type Row = {
    slug: string
    post_translations: { title: string; excerpt: string | null }
  }
  const rows = (data ?? []) as Row[]
  const items = rows
    .map(p => {
      const t = p.post_translations
      return `    <item>\n      <title>${t.title}</title>\n      <link>${baseUrl}/blog/${p.slug}</link>\n      <description>${t.excerpt ?? ''}</description>\n    </item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Analytix Blog</title>\n    <link>${baseUrl}/blog</link>\n    <description>Latest posts from the Analytix blog.</description>\n${items}\n  </channel>\n</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
