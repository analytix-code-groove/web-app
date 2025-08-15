"use client"

import { useLanguage } from '@/lib/i18n'

export default function MoreInfo() {
  const { t } = useLanguage()
  return (
    <section className="bg-bg py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 font-heading text-2xl font-semibold text-text">{t('moreInfoHeading')}</h2>
        <p className="text-muted">{t('moreInfoBody')}</p>
      </div>
    </section>
  )
}
