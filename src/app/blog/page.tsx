import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on data engineering, cloud, and automation from the Analytix team.',
}

const BASE = 'https://www.analytixcg.com'

export default function BlogPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Blog', url: `${BASE}/blog` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <BlogClient />
    </>
  )
}
