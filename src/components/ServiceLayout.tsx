'use client'

import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import * as Icons from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { useLanguage } from '@/lib/i18n'

export type Feature = {
  icon: string
  titleKey: string
  descKey: string
}

type Props = {
  titleKey: string
  descKey: string
  features: ReadonlyArray<Feature>
  imageSrc?: string | StaticImageData
  imageAlt?: string
  darkenImage?: boolean
}

export default function ServiceLayout({
  titleKey,
  descKey,
  features,
  imageSrc,
  imageAlt,
  darkenImage = true,
}: Props) {
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
            <>
              <Image
                src={imageSrc}
                alt={imageAlt ?? t(titleKey)}
                fill
                sizes="(min-width: 768px) 32rem, 100vw"
                className="rounded-xl object-cover shadow-soft"
                priority
              />
              {darkenImage && (
                <div
                  className="absolute inset-0 rounded-xl bg-black/55"
                  aria-hidden="true"
                />
              )}
            </>
          )}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-3">
          {features.map(({ icon, titleKey, descKey }) => {
            const Icon = (Icons as Record<string, IconType>)[icon]
            return (
              <div key={titleKey} className="text-center">
                {Icon && (
                  <Icon className="mx-auto h-12 w-12 text-mint" aria-hidden="true" />
                )}
                <h3 className="mt-4 font-semibold text-text">{t(titleKey)}</h3>
                <p className="mt-2 text-sm text-muted">{t(descKey)}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
