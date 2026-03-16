import type { Metadata } from 'next'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumbs'
import { buildServiceJsonLd } from '@/lib/schema'

interface Params {
  slug: string
}

type Props = { params: Promise<Params> }

export function generateStaticParams() {
  return services
    .filter(
      s =>
        s.slug !== 'data-analytics' &&
        s.slug !== 'ai' &&
        s.slug !== 'apps' &&
        s.slug !== 'consulting' &&
        s.slug !== 'devops' &&
        s.slug !== 'staff-augmentation'
    )
    .map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  const name = service?.slug.replace(/-/g, ' ') ?? 'service'
  const title = `${name.charAt(0).toUpperCase() + name.slice(1)} | Analytix Code Groove`
  const description = service
    ? `Learn more about our ${name} offering.`
    : 'Service details.'
  return { title, description, alternates: { canonical: `/services/${slug}` } }
}

const BASE = 'https://www.analytixcg.com'

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) notFound()

  const name = svc.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: 'Home', url: BASE },
    { name: 'Services', url: `${BASE}/services` },
    { name, url: `${BASE}/services/${slug}` },
  ])
  const serviceSchema = buildServiceJsonLd(slug, name, `Learn more about our ${name} offering.`)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  )
}
