import { posts } from '@/data/posts'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const items = posts
    .map(p => `    <item>\n      <title>${p.title}</title>\n      <link>${baseUrl}/blog/${p.slug}</link>\n      <description>${p.excerpt}</description>\n    </item>`)    
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>AnalytiX Blog</title>\n    <link>${baseUrl}/blog</link>\n    <description>Latest posts from the AnalytiX blog.</description>\n${items}\n  </channel>\n</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
