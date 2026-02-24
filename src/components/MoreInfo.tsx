"use client"

import { useLanguage } from '@/lib/i18n'
import { FiActivity, FiZap, FiFeather, FiDollarSign, FiShoppingCart } from 'react-icons/fi'

export default function MoreInfo() {
  const { t, lang } = useLanguage()

  const stats = [
    { value: '20+', labelKey: 'yearsExperience' },
    { value: '5', labelKey: 'industriesServed' },
    { value: '6', labelKey: 'serviceAreas' },
  ]

  const industries = [
    { Icon: FiActivity, titleKey: 'healthcareIndustry', descKey: 'healthcareIndustryDesc' },
    { Icon: FiZap, titleKey: 'energyIndustry', descKey: 'energyIndustryDesc' },
    { Icon: FiFeather, titleKey: 'agroIndustry', descKey: 'agroIndustryDesc' },
    { Icon: FiDollarSign, titleKey: 'financialIndustry', descKey: 'financialIndustryDesc' },
    { Icon: FiShoppingCart, titleKey: 'retailIndustry', descKey: 'retailIndustryDesc' },
  ]

  return (
    <section className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
          {lang === 'en' ? (
            <>Why <span className="text-mint">Us</span>?</>
          ) : (
            <>¿Por qué <span className="text-mint">nosotros</span>?</>
          )}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted">
          {t('moreInfoBody')}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map(({ value, labelKey }) => (
            <div key={labelKey}>
              <span className="text-4xl font-bold text-mint">{value}</span>
              <p className="mt-2 text-sm text-muted">{t(labelKey)}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 mb-8 font-heading text-xl font-semibold text-text">
          {t('industriesHeading')}
        </h3>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ Icon, titleKey, descKey }) => (
            <li
              key={titleKey}
              className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft transition hover:border-mint/60"
            >
              <Icon className="mx-auto mb-3 text-mint" size={32} />
              <h4 className="font-heading text-base font-semibold text-text">
                {t(titleKey)}
              </h4>
              <p className="mt-1 text-sm text-muted">{t(descKey)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
