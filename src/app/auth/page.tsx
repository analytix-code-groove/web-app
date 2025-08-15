import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Auth Redirect | AnalytiX',
  description: 'Redirecting to the login page.',
}

export default function AuthPage() {
  redirect('/login')
}

