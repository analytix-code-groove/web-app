import type { Metadata } from 'next'
import { createSupabaseServerClient } from '@/lib/supabase'
import BlogClient from './BlogClient'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on data engineering, cloud, and automation from the Analytix team.',
}

type Row = {
  slug: string
  cover_url: string | null
  published_at: string | null
  post_translations: { title: string; excerpt: string | null; body_md: string | null }[]
}

export default async function BlogPage() {
  let initialPosts: { slug: string; title: string; excerpt: string; readingMinutes: number }[] = []

  try {
    const supabase = createSupabaseServerClient()
    const { data } = await supabase
      .schema('content')
      .from('posts')
      .select('slug,cover_url,published_at,post_translations!inner(language_code,title,excerpt,body_md)')
      .eq('status', 'published')
      .eq('post_translations.language_code', 'en')
      .order('published_at', { ascending: false })

    const rows = (data ?? []) as Row[]
    initialPosts = rows
      .map(p => {
        const tr = p.post_translations[0]
        const words = tr?.body_md ? tr.body_md.trim().split(/\s+/).length : 0
        return {
          slug: p.slug,
          title: tr?.title ?? '',
          excerpt: tr?.excerpt ?? '',
          readingMinutes: Math.max(1, Math.ceil(words / 200)),
        }
      })
      .filter(p => p.title)
  } catch {
    // Blog still renders without initial posts
  }

  return <BlogClient initialPosts={initialPosts} />
}
