import ServiceLayout from '@/components/ServiceLayout'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()
  return <ServiceLayout {...service} />
}

