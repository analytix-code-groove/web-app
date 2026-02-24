import type { Metadata } from 'next'
import SignupClient from './SignupClient'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your AnalytiX account to access services and bookmarks.',
  robots: { index: false },
}

export default function SignupPage() {
  return <SignupClient />
}

