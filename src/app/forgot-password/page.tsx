import type { Metadata } from 'next'
import ForgotPasswordClient from './ForgotPasswordClient'

export const metadata: Metadata = {
  title: 'Forgot Password | AnalytiX',
  description: 'Recover access to your AnalytiX account.',
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />
}

