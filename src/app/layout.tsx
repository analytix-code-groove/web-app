import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'AnalytiX | Code Groove',
  description: 'Where data meets flow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased flex min-h-screen flex-col">
        <LanguageProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
