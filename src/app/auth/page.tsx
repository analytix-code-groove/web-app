import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Auth Redirect | Analytix Code Groove',
  description: 'Redirecting to the login page.',
}

export default function AuthPage() {
  redirect('/login')
}

