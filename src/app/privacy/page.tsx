import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Analytix Code Groove collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-heading text-3xl font-semibold text-text">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: March 2026</p>

      <section className="mt-10 space-y-6 text-text/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-text">Information We Collect</h2>
          <p className="mt-2">
            We collect information you provide directly, such as your name, email address, and message content when you use our contact form or create an account. We also collect basic usage data through analytics tools (e.g., page views, referral source) to improve our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">How We Use Your Information</h2>
          <p className="mt-2">
            We use the information we collect to respond to your inquiries, provide and improve our services, send periodic updates (if you have opted in), and ensure the security of our platform. We do not sell your personal information to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Cookies</h2>
          <p className="mt-2">
            Our site uses cookies for essential functionality (e.g., language preferences, authentication sessions) and analytics. You can control cookie settings through your browser preferences.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Data Retention</h2>
          <p className="mt-2">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or as required by law. You may request deletion of your data at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text">Contact</h2>
          <p className="mt-2">
            If you have questions about this privacy policy, please contact us at{' '}
            <a href="mailto:hello@analytixcg.com" className="text-mint hover:underline">
              hello@analytixcg.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  )
}
