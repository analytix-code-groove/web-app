import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
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

export default function ServicePage({ params }: { params: Params }) {
  const service = getService(params.slug)
  if (!service) notFound()
  return <ServiceLayout {...service} />
}

