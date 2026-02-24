import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login',
        '/signup',
        '/settings',
        '/bookmarks',
        '/blog/new',
        '/auth',
        '/forgot-password',
        '/api/',
      ],
    },
    sitemap: 'https://analytixcg.com/sitemap.xml',
  }
}
