import type { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Analytix Code Groove collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return <PrivacyClient />
}
