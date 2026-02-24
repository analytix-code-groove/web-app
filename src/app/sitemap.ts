import type { MetadataRoute } from 'next'
import { createSupabaseServerClient } from '@/lib/supabase'
import { services } from '@/data/services'

const BASE_URL = 'https://analytixcg.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.8 },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts (dynamic)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const supabase = createSupabaseServerClient()
    const { data } = await supabase
      .schema('content')
      .from('posts')
      .select('slug, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    blogPages = (data ?? []).map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.published_at ? new Date(post.published_at) : undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {
    // Sitemap still works without blog posts
  }

  return [...staticPages, ...servicePages, ...blogPages]
}
