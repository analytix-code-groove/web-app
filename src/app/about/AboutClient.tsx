"use client"

import Link from 'next/link'
import { FiHeart, FiTarget } from 'react-icons/fi'
import { useLanguage } from '@/lib/i18n'

export default function AboutClient() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="font-heading text-4xl font-semibold text-text">{t('about')}</h1>
        <p className="mt-6 text-lg text-muted">{t('aboutIntro')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2">
          <div className="text-center">
            <FiTarget className="mx-auto h-12 w-12 text-mint" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-text">
              {t('missionHeading')}
            </h2>
            <p className="mt-2 text-sm text-muted">{t('missionBody')}</p>
          </div>
          <div className="text-center">
            <FiHeart className="mx-auto h-12 w-12 text-mint" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-text">
              {t('valuesHeading')}
            </h2>
            <p className="mt-2 text-sm text-muted">{t('valuesBody')}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
