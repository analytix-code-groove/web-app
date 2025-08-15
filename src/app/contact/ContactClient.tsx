'use client'

import { useLanguage } from '@/lib/i18n'

export default function ContactClient() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('contact')}</h1>
        <p className="mt-4 text-muted">
          {t('reachUsAt')}{' '}
          <a href="mailto:hello@example.com" className="text-mint">
            hello@example.com
          </a>
        </p>
      </div>
    </main>
  )
}
