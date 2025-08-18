import type { Metadata } from 'next'
import ForgotPasswordClient from './ForgotPasswordClient'

export const metadata: Metadata = {
  title: 'Forgot Password | Analytix Code Groove',
  description: 'Recover access to your Analytix account.',
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />
}

