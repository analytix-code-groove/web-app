"use client"

import type { Metadata } from 'next'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'About | AnalytiX',
  description: 'Learn more about AnalytiX and our mission to align data with execution.',
}

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('about')}</h1>
        <p className="mt-4 text-muted">{t('comingSoon')}</p>
      </div>
    </main>
  )
}
