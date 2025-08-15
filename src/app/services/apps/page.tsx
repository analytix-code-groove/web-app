import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiList,
  FiCpu,
  FiBox,
  FiCode,
  FiShield,
  FiUpload,
  FiTrendingUp,
} from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CodeToggle from '@/components/CodeToggle'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Apps & APIs Services | AnalytiX',
  description:
    'From prototype to production — applications and integrations that scale with your business.',
}

const journeySteps = [
  {
    icon: FiList,
    titleKey: 'appsStepDefineTitle',
    descKey: 'appsStepDefineDesc',
  },
  {
    icon: FiCpu,
    titleKey: 'appsStepArchitectTitle',
    descKey: 'appsStepArchitectDesc',
  },
  {
    icon: FiBox,
    titleKey: 'appsStepPrototypeTitle',
    descKey: 'appsStepPrototypeDesc',
  },
  {
    icon: FiCode,
    titleKey: 'appsStepDevelopTitle',
    descKey: 'appsStepDevelopDesc',
  },
  {
    icon: FiShield,
    titleKey: 'appsStepTestTitle',
    descKey: 'appsStepTestDesc',
  },
  {
    icon: FiUpload,
    titleKey: 'appsStepDeployTitle',
    descKey: 'appsStepDeployDesc',
  },
  {
    icon: FiTrendingUp,
    titleKey: 'appsStepMonitorTitle',
    descKey: 'appsStepMonitorDesc',
  },
]

export default function AppsServicePage() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {t('appsHeroTitle')}
        </h1>
        <p className="mt-6 text-lg text-muted">{t('appsHeroDesc')}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {t('letsTalk')}
          </Link>
        </div>
        <CodeToggle />
      </section>

      {/* Why Modern Apps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsWhyHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('appsWhyText1')}</p>
          <p className="mt-4 text-muted">{t('appsWhyText2')}</p>
          <p className="mt-4 text-muted">{t('appsWhyText3')}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsApproachHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('appsApproachText1')}</p>
          <p className="mt-4 text-muted">{t('appsApproachText2')}</p>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsJourneyHeading')}
          </h2>
          <div className="mt-8 text-muted">
            <StepTimeline
              steps={journeySteps.map(s => ({
                icon: s.icon,
                title: t(s.titleKey),
                description: t(s.descKey),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {t('appsFutureHeading')}
          </h2>
          <p className="mt-4 text-muted">{t('appsFutureIntro')}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {t('appsFutureAccelerateHeading')}
              </span>
              {t('appsFutureAccelerateText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('appsFutureIntegrateHeading')}
              </span>
              {t('appsFutureIntegrateText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('appsFutureReliabilityHeading')}
              </span>
              {t('appsFutureReliabilityText')}
            </li>
            <li>
              <span className="font-medium text-text">
                {t('appsFutureScaleHeading')}
              </span>
              {t('appsFutureScaleText')}
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

