import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { LanguageProvider } from '@/lib/i18n'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.analytixcg.com'),
  title: {
    default: 'Analytix Code Groove',
    template: '%s | Analytix Code Groove',
  },
  description: 'Where data meets flow. We build reliable data platforms, AI workflows, and production-grade apps.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    siteName: 'Analytix Code Groove',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://www.analytixcg.com/#organization',
                name: 'Analytix Code Groove',
                url: 'https://www.analytixcg.com',
                logo: 'https://www.analytixcg.com/favicon.svg',
                description: 'We build reliable data platforms, AI workflows, and production-grade apps.',
                foundingDate: '2025-10-24',
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'hello@analytixcg.com',
                  contactType: 'customer service',
                },
                areaServed: 'Worldwide',
                knowsAbout: [
                  'Data & Analytics',
                  'Generative AI',
                  'Cloud & DevOps',
                  'Apps & APIs',
                  'IT Consulting',
                  'Automation & QA',
                  'Staff Augmentation',
                ],
                numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
                sameAs: [
                  'https://www.linkedin.com/company/analytixcg',
                  'https://x.com/analytixcg',
                  'https://github.com/analytix-code-groove',
                  'https://clutch.co/profile/analytix-code-groove',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://www.analytixcg.com/#website',
                name: 'Analytix Code Groove',
                url: 'https://www.analytixcg.com',
                publisher: { '@id': 'https://www.analytixcg.com/#organization' },
                inLanguage: ['en', 'es'],
              },
            ]),
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LP2YGD26S7"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LP2YGD26S7');`}
        </Script>
      </head>
      <body className="bg-bg text-text antialiased flex min-h-screen flex-col">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
        <Script id="lang-init" strategy="beforeInteractive">
          {`document.documentElement.lang = localStorage.getItem('lang') || 'en';`}
        </Script>
      </body>
    </html>
  )
}
