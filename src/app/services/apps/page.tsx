import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Apps & APIs Services | AnalytiX',
  description:
    'From prototype to production — applications and integrations that scale with your business.',
}

export default function AppsServicePage() {
  const service = getService('apps')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
