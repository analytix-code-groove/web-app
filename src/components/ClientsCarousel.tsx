'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import roemmersLogo from '@/images/clients/roemmers.svg'
import presuLogo from '@/images/clients/presu.svg'
import epuyenLogo from '@/images/clients/epuyen.svg'
import siegfriedLogo from '@/images/clients/siegfried.svg'

const clients = [
  {
    name: 'Roemmers',
    url: 'https://roemmers.com.ar/',
    logo: roemmersLogo,
  },
  {
    name: 'Presu',
    url: 'https://www.presu.com.ar/',
    logo: presuLogo,
  },
  {
    name: 'Epuyén Argentina',
    url: 'https://epuyenargentina.com/',
    logo: epuyenLogo,
  },
  {
    name: 'Siegfried',
    url: 'https://siegfried.com.ar/',
    logo: siegfriedLogo,
  },
]

export default function ClientsCarousel() {
  const { t } = useLanguage()
  const loopedClients = [...clients, ...clients]

  return (
    <section className="bg-bg py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mint">
            {t('clientsEyebrow')}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-text sm:text-4xl">
            {t('clientsHeading')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
            {t('clientsBody')}
          </p>
        </div>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
          <div className="marquee-track">
            <div className="marquee">
              {loopedClients.map((client, index) => (
                <a
                  key={`${client.name}-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mx-3 flex min-w-[180px] items-center justify-center rounded-xl2 border border-stroke/70 bg-surface/60 px-6 py-4 text-sm font-medium text-text/80 transition hover:border-mint/60"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={160}
                    height={48}
                    className="h-10 w-auto opacity-80 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
