import type { Metadata } from 'next'
import ForgotPasswordClient from './ForgotPasswordClient'

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Recover access to your Analytix account.',
  robots: { index: false },
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />
}

