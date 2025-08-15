import type { Metadata } from 'next'
import Link from 'next/link'
import { FiTrendingUp, FiLayers, FiShield, FiFileText } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'IT Consulting | AnalytiX',
  description: 'Clarity, architecture, and momentum—when you need it.',
}

const bringIn = [
  {
    icon: FiTrendingUp,
    titleKey: 'consultBringScalingTitle',
    descKey: 'consultBringScalingDesc',
  },
  {
    icon: FiLayers,
    titleKey: 'consultBringStuckTitle',
    descKey: 'consultBringStuckDesc',
  },
  {
    icon: FiShield,
    titleKey: 'consultBringRiskTitle',
    descKey: 'consultBringRiskDesc',
  },
  {
    icon: FiFileText,
    titleKey: 'consultBringRoadmapTitle',
    descKey: 'consultBringRoadmapDesc',
  },
]

export default function ITConsultingServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('consultHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('consultHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
      </section>

      {/* When to Bring Us In */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultBringHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {bringIn.map(c => (
              <CoreCapability
                key={c.titleKey}
                icon={c.icon}
                title={t(c.titleKey)}
                description={t(c.descKey)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultGetHeading')}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">{t('consultGetBriefHeading')}</span>
              {t('consultGetBriefText')}
            </li>
            <li>
              <span className="font-medium text-text">{t('consultGetArchitectureHeading')}</span>
              {t('consultGetArchitectureText')}
            </li>
            <li>
              <span className="font-medium text-text">{t('consultGetRoadmapHeading')}</span>
              {t('consultGetRoadmapText')}
            </li>
            <li>
              <span className="font-medium text-text">{t('consultGetCostHeading')}</span>
              {t('consultGetCostText')}
            </li>
            <li>
              <span className="font-medium text-text">{t('consultGetSecurityHeading')}</span>
              {t('consultGetSecurityText')}
            </li>
          </ul>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultEngageHeading')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">{t('consultEngageStrategy')}</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">2 weeks</span>
              <p className="mt-3 text-sm text-muted">{t('consultEngageStrategyDesc')}</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">{t('consultEngageArchitecture')}</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">4–6 weeks</span>
              <p className="mt-3 text-sm text-muted">{t('consultEngageArchitectureDesc')}</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">{t('consultEngageFractional')}</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">Ongoing</span>
              <p className="mt-3 text-sm text-muted">{t('consultEngageFractionalDesc')}</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">{t('consultEngageDelivery')}</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">As needed</span>
              <p className="mt-3 text-sm text-muted">{t('consultEngageDeliveryDesc')}</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">{t('consultEngageRfp')}</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">Project-based</span>
              <p className="mt-3 text-sm text-muted">{t('consultEngageRfpDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* POV */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('consultPovHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('consultPovText')}</p>
        </div>
      </section>

      {/* Ready to Move */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{t('consultReadyHeading')}</h2>
          <p className="mt-4 text-muted">{t('consultReadyText')}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
            >
              {t('consultReadyCta')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

