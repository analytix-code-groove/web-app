import type { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { getService } from '@/data/services'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Data & Analytics Services | AnalytiX',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

export default function DataAnalyticsServicePage() {
  const service = getService('data-analytics')
  if (!service) notFound()
  return <ServiceLayout {...service} />
}
