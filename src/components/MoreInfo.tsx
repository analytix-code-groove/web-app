"use client"

import { useLanguage } from '@/lib/i18n'
import {
  FiDatabase,
  FiCpu,
  FiSmartphone,
  FiSettings,
  FiCloud,
  FiMap,
} from 'react-icons/fi'

export default function MoreInfo() {
  const { t } = useLanguage()

  const offerings = [
    { Icon: FiDatabase, titleKey: 'dataAnalytics', descKey: 'dataAnalyticsCard' },
    { Icon: FiCpu, titleKey: 'aiAutomation', descKey: 'aiAutomationCard' },
    { Icon: FiSmartphone, titleKey: 'appsApis', descKey: 'appsApisCard' },
    { Icon: FiSettings, titleKey: 'automationQa', descKey: 'automationQaCard' },
    { Icon: FiCloud, titleKey: 'cloudDevops', descKey: 'cloudDevopsCard' },
    { Icon: FiMap, titleKey: 'itConsulting', descKey: 'itConsultingCard' },
  ]

  return (
    <section className="bg-bg py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 font-heading text-2xl font-semibold text-text">{t('moreInfoHeading')}</h2>
        <p className="max-w-3xl text-muted">{t('moreInfoBody')}</p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map(({ Icon, titleKey, descKey }) => (
            <li
              key={titleKey}
              className="flex items-start gap-3 rounded-xl2 border border-stroke/70 bg-surface p-4 shadow-soft"
            >
              <Icon className="mt-1 shrink-0 text-mint" />
              <div>
                <h3 className="font-heading text-base font-semibold text-text">
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-muted">{t(descKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
