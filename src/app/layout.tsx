import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { LanguageProvider } from '@/lib/i18n'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Analytix Code Groove',
  description: 'Where data meets flow.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg text-text antialiased flex min-h-screen flex-col">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
        <Analytics />
        <Script id="lang-init" strategy="beforeInteractive">
          {`document.documentElement.lang = localStorage.getItem('lang') || 'en';`}
        </Script>
      </body>
    </html>
  )
}
