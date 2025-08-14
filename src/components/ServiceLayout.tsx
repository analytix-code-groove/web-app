'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IconType } from 'react-icons'
import { useLanguage } from '@/lib/i18n'

interface Feature {
  icon: IconType
  title: string
  description: string
}

interface Props {
  titleKey: string
  descKey: string
  features: Feature[]
  imageSrc?: string
}

export default function ServiceLayout({ titleKey, descKey, features, imageSrc }: Props) {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen">
      <section className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-24 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-semibold text-text">{t(titleKey)}</h1>
          <p className="mt-6 text-lg text-muted">{t(descKey)}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
            >
              {t('letsTalk')}
            </Link>
          </div>
        </div>
        <div className="relative hidden h-72 md:block">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={t(titleKey)}
              fill
              className="rounded-xl object-cover shadow-soft"
            />
          )}
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto h-12 w-12 text-mint" />
              <h3 className="mt-4 font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

