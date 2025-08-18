import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Analytix Code Groove',
  description: 'Get in touch with the Analytix team to discuss your next project.',
}

export default function ContactPage() {
  return <ContactClient />
}
