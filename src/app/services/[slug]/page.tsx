import ServiceLayout from '@/components/ServiceLayout'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return services
    .filter(
      s =>
        s.slug !== 'data-analytics' &&
        s.slug !== 'ai' &&
        s.slug !== 'apps' &&
        s.slug !== 'devops'
    )
    .map(s => ({ slug: s.slug }))
}

interface Params {
  slug: string
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return <ServiceLayout {...service} />
}

