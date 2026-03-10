import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using the Analytix Code Groove website and services.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-heading text-3xl font-semibold text-text">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

      <section className="mt-10 space-y-6 text-text/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-text">Use of the Site</h2>
          <p className="mt-2">
            By accessing and using the Analytix Code Groove website, you agree to comply with these terms. You may use this site for lawful purposes only. We reserve the right to modify or discontinue any part of the site at any time without notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Accounts</h2>
          <p className="mt-2">
            When you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Intellectual Property</h2>
          <p className="mt-2">
            All content on this site, including text, graphics, logos, and software, is the property of Analytix Code Groove or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Limitation of Liability</h2>
          <p className="mt-2">
            Analytix Code Groove provides this site and its services on an &quot;as is&quot; basis. We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Contact</h2>
          <p className="mt-2">
            If you have questions about these terms, please contact us at{' '}
            <a href="mailto:hello@analytixcg.com" className="text-mint hover:underline">
              hello@analytixcg.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  )
}
