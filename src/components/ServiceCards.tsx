"use client"

import { services } from '@/data/services'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function ServiceCards() {
  const { t } = useLanguage()
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-semibold text-text sm:text-4xl">
          {t('whatWeDo')}
        </h2>
        <p className="mx-auto mt-3 mb-10 max-w-2xl text-center text-muted">
          {t('servicePortfolioSubtitle')}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft transition hover:border-mint/60"
            >
              <h3 className="font-heading text-lg font-semibold text-text group-hover:text-mint">{t(s.titleKey)}</h3>
              <p className="mt-2 text-sm text-muted">{t(s.cardBlurbKey)}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
