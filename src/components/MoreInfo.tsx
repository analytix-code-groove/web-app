"use client"

import { useLanguage } from '@/lib/i18n'
import Link from 'next/link'
import { FiActivity, FiZap, FiFeather, FiDollarSign } from 'react-icons/fi'

export default function MoreInfo() {
  const { t } = useLanguage()

  const industries = [
    { Icon: FiActivity, titleKey: 'healthcareIndustry', descKey: 'healthcareIndustryDesc' },
    { Icon: FiZap, titleKey: 'energyIndustry', descKey: 'energyIndustryDesc' },
    { Icon: FiFeather, titleKey: 'agroIndustry', descKey: 'agroIndustryDesc' },
    { Icon: FiDollarSign, titleKey: 'financialIndustry', descKey: 'financialIndustryDesc' },
  ]

  return (
    <section className="bg-bg py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 font-heading text-2xl font-semibold text-text">{t('moreInfoHeading')}</h2>
        <p className="max-w-3xl text-muted">{t('moreInfoBody')}</p>
        <h3 className="mt-16 mb-4 font-heading text-xl font-semibold text-text">
          {t('industriesHeading')}
        </h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ Icon, titleKey, descKey }) => (
            <li
              key={titleKey}
              className="flex items-start gap-3 rounded-xl2 border border-stroke/70 bg-surface p-4 shadow-soft"
            >
              <Icon className="mt-1 shrink-0 text-mint" />
              <div>
                <h4 className="font-heading text-base font-semibold text-text">
                  {t(titleKey)}
                </h4>
                <p className="text-sm text-muted">{t(descKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
