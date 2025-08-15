import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AnalytiX',
  description: 'Build, deploy, and scale with confidence.',
}

export default function CloudDevOpsServicePage() {
  const service = getService('devops')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
