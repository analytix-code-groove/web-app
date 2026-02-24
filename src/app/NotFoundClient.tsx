'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function NotFoundClient() {
  const { t } = useLanguage()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-mint">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-text">
        {t('notFoundTitle')}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {t('notFoundBody')}
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
      >
        {t('backToHome')}
      </Link>
    </main>
  )
}
