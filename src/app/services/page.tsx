import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services | AnalytiX',
  description: 'Explore the range of technology services offered by AnalytiX.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
