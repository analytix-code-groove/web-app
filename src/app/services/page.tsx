import type { Metadata } from 'next'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { services } from '@/data/services'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the range of technology services offered by Analytix.',
  alternates: { canonical: '/services' },
}

const BASE = 'https://www.analytixcg.com'

const SERVICE_NAMES: Record<string, string> = {
  'data-analytics': 'Data & Analytics',
  ai: 'Generative AI',
  apps: 'Apps & APIs',
  'automation-qa': 'Automation & QA',
  devops: 'Cloud & DevOps',
  consulting: 'IT Consulting',
  'staff-augmentation': 'Staff Augmentation',
}

export default function ServicesPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
  ])

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Analytix Code Groove Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: SERVICE_NAMES[s.slug] ?? s.slug,
      url: `${BASE}/services/${s.slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <ServicesClient />
    </>
  )
}
