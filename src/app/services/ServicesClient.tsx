'use client'

import { services } from '@/data/services'
import { useLanguage } from '@/lib/i18n'
import Link from 'next/link'
import * as Icons from 'react-icons/fi'
import type { IconType } from 'react-icons'

export default function ServicesClient() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('services')}</h1>
      </div>

      <section className="mx-auto mb-24 max-w-5xl space-y-12 px-4">
        {services.map((s, idx) => (
          <div key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-xl2 border border-stroke/70 bg-surface shadow-soft transition hover:border-mint/60"
            >
              <div
                className={`flex flex-col items-center gap-6 p-6 md:flex-row ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex shrink-0 gap-4">
                  {(s.cardIcons ?? s.features.slice(0, 3).map(f => f.icon)).map(iconName => {
                    const Icon = (Icons as Record<string, IconType>)[iconName]
                    return Icon ? (
                      <Icon key={iconName} aria-hidden="true" className="h-10 w-10 text-mint" />
                    ) : null
                  })}
                </div>
                <div className={`text-center md:flex-1 ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                  <h2 className="font-heading text-xl font-semibold text-text group-hover:text-mint">
                    {t(s.titleKey)}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{t(s.descKey)}</p>
                  <span className="mt-4 inline-block text-sm text-mint">{t('learnMore')}</span>
                </div>
              </div>
            </Link>
            {idx < services.length - 1 && (
              <div className="mx-auto mt-12 h-[1.2px] w-3/4 bg-gradient-to-r from-transparent via-mint to-transparent" />
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
