import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | AnalytiX',
  description: 'Get in touch with the AnalytiX team to discuss your next project.',
}

export default function ContactPage() {
  return <ContactClient />
}
