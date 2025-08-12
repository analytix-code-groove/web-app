import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })

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
      <body className={`${inter.variable} ${sora.variable} bg-bg text-text antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
