import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Services | Analytix Code Groove',
  description: 'Explore the range of technology services offered by Analytix.',
}

export default function ServicesPage() {
  return <ServicesClient />
}
