import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Analytix Code Groove — our mission, values, and the team behind the technology.',
}

export default function AboutPage() {
  return <AboutClient />
}
