import type { MetadataRoute } from 'next'
import { createSupabaseServerClient } from '@/lib/supabase'
import { services } from '@/data/services'

const BASE_URL = 'https://www.analytixcg.com'
const DEPLOY_DATE = new Date('2026-03-16')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: DEPLOY_DATE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: DEPLOY_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: DEPLOY_DATE, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: DEPLOY_DATE, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: DEPLOY_DATE, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: DEPLOY_DATE, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: DEPLOY_DATE, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: DEPLOY_DATE,
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
