import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | AnalytiX',
  description: 'Get in touch with the AnalytiX team to discuss your next project.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">Contact</h1>
        <p className="mt-4 text-muted">Reach us at <a href="mailto:hello@example.com" className="text-mint">hello@example.com</a></p>
      </div>
    </main>
  )
}
