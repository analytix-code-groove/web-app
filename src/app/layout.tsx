import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { LanguageProvider } from '@/lib/i18n'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL('https://analytixcg.com'),
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Analytix Code Groove',
              url: 'https://analytixcg.com',
              logo: 'https://analytixcg.com/images/email-cover.jpg',
              sameAs: [
                'https://www.linkedin.com/company/analytix-code-groove',
                'https://x.com/analytixcg',
              ],
            }),
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LP2YGD26S7"
          strategy="beforeInteractive"
        />
        <Script id="google-tag" strategy="beforeInteractive">
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
