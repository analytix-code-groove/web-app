import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Auth Redirect',
  description: 'Redirecting to the login page.',
  robots: { index: false },
}

export default function AuthPage() {
  redirect('/login')
}

