'use client'

import { services } from '@/data/services'
import { useLanguage } from '@/lib/i18n'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesClient() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('services')}</h1>
      </div>

      <section className="mx-auto mb-24 max-w-5xl space-y-12 px-4">
        {services.map(s => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group overflow-hidden rounded-xl2 border border-stroke/70 bg-surface shadow-soft transition hover:border-mint/60"
          >
            {s.imageSrc && (
              <Image
                src={s.imageSrc}
                alt={s.imageAlt ?? ''}
                width={800}
                height={400}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="font-heading text-xl font-semibold text-text group-hover:text-mint">
                {t(s.titleKey)}
              </h2>
              <p className="mt-2 text-sm text-muted">{t(s.descKey)}</p>
              <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
