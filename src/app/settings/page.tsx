"use client"

import type { Metadata } from 'next'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Settings | AnalytiX',
  description: 'User settings',
}

export default function SettingsPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-bg p-4 text-text">
      <h1 className="text-2xl font-semibold">{t('settings')}</h1>
      <p className="mt-4 text-sm text-text/80">{t('comingSoon')}</p>
    </main>
  )
}
