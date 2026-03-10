'use client'

import { useLanguage } from '@/lib/i18n'

export default function PrivacyClient() {
  const { t } = useLanguage()

  const sections = [
    { heading: 'privacyInfoCollectHeading', body: 'privacyInfoCollectBody' },
    { heading: 'privacyHowWeUseHeading', body: 'privacyHowWeUseBody' },
    { heading: 'privacyCookiesHeading', body: 'privacyCookiesBody' },
    { heading: 'privacyRetentionHeading', body: 'privacyRetentionBody' },
  ]

  return (
    <main className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-heading text-3xl font-semibold text-text">{t('privacyPolicy')}</h1>
      <p className="mt-2 text-sm text-muted">{t('legalLastUpdated')}</p>

      <section className="mt-10 space-y-6 text-text/90 leading-relaxed">
        {sections.map(s => (
          <div key={s.heading}>
            <h2 className="text-xl font-semibold text-text">{t(s.heading)}</h2>
            <p className="mt-2">{t(s.body)}</p>
          </div>
        ))}

        <div>
          <h2 className="text-xl font-semibold text-text">{t('privacyContactHeading')}</h2>
          <p className="mt-2">
            {t('privacyContactBody')}{' '}
            <a href="mailto:info@analytixcg.com" className="text-mint hover:underline">
              info@analytixcg.com
            </a>.
          </p>
        </div>
      </section>
    </main>
  )
}
