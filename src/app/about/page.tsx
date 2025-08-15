"use client"

import { useLanguage } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{t('about')}</h1>
        <p className="mt-4 text-muted">{t('aboutIntro')}</p>
        <div className="mt-8 space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text">
              {t('missionHeading')}
            </h2>
            <p className="mt-2 text-muted">{t('missionBody')}</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-text">
              {t('valuesHeading')}
            </h2>
            <p className="mt-2 text-muted">{t('valuesBody')}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
