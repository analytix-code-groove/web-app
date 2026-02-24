import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Access your Analytix account to manage services and bookmarks.',
  robots: { index: false },
}

export default function LoginPage() {
  return <LoginClient />
}
