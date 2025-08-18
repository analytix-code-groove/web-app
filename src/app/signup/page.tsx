import type { Metadata } from 'next'
import SignupClient from './SignupClient'

export const metadata: Metadata = {
  title: 'Sign Up | Analytix Code Groove',
  description: 'Create your Analytix account to access services and bookmarks.',
}

export default function SignupPage() {
  return <SignupClient />
}

