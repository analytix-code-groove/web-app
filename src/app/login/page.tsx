import type { Metadata } from 'next'
import LoginClient from './LoginClient'

export const metadata: Metadata = {
  title: 'Log In | Analytix Code Groove',
  description: 'Access your AnalytiX account to manage services and bookmarks.',
}

export default function LoginPage() {
  return <LoginClient />
}
