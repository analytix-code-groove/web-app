"use client"

import { services } from '@/data/services'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function ServiceCards() {
  const { t } = useLanguage()
  return (
    <section className="bg-bg py-14 mb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  )
}
