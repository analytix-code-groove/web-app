import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
