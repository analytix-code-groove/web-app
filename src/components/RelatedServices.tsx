'use client'

import { services } from '@/data/services'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const { t } = useLanguage()
  const related = services.filter(s => s.slug !== currentSlug).slice(0, 3)

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-text">
          {t('relatedServices')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map(s => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft transition hover:border-mint/60"
            >
              <h3 className="font-heading text-lg font-semibold text-text group-hover:text-mint">
                {t(s.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted">{t(s.cardBlurbKey)}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
