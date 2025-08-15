import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export function generateStaticParams() {
  return services
    .filter(
      s =>
        s.slug !== 'data-analytics' &&
        s.slug !== 'ai' &&
        s.slug !== 'apps' &&
        s.slug !== 'consulting' &&
        s.slug !== 'devops'
    )
    .map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getService(params.slug)
  const name = service?.slug.replace(/-/g, ' ') ?? 'service'
  const title = `${name.charAt(0).toUpperCase() + name.slice(1)} | AnalytiX`
  const description = service
    ? `Learn more about our ${name} offering.`
    : 'Service details.'
  return { title, description }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return <ServiceLayout {...service} />
}

