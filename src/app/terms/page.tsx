import type { Metadata } from 'next'
import TermsClient from './TermsClient'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Analytix Code Groove website and services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return <TermsClient />
}
