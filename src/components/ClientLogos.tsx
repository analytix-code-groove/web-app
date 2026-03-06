'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import roemmersLogo from '@/images/clients/roemmers-logo-white.png'
import rofinaLogo from '@/images/clients/rofina-logo.png'
import presuLogo from '@/images/clients/presu-logo.png'

const logos = [
  { src: roemmersLogo, alt: 'Roemmers', filter: 'opacity-40', scale: '', container: 'h-14 w-20 sm:h-16 sm:w-24' },
  { src: rofinaLogo, alt: 'Rofina', filter: 'brightness-0 invert opacity-40', scale: '', container: 'h-7 w-24 sm:h-8 sm:w-28' },
  { src: presuLogo, alt: 'Presu', filter: 'brightness-0 invert opacity-40', scale: 'scale-[3.0]', container: 'h-7 w-24 sm:h-8 sm:w-28' },
]

export default function ClientLogos() {
  const { t } = useLanguage()

  const logoSet = logos.map((logo, i) => (
    <div
      key={i}
      className={`flex shrink-0 items-center justify-center overflow-hidden ${logo.container}`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        className={`h-full w-full object-contain transition-all duration-300 hover:opacity-80 ${logo.filter} ${logo.scale}`}
      />
    </div>
  ))

  return (
    <section className="py-10 sm:py-14">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
        {t('trustedBy')}
      </p>

      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />

          <div
            className="flex items-center gap-20 sm:gap-28"
            style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}
          >
            {logoSet}
            {logoSet}
          </div>
        </div>
      </div>
    </section>
  )
}
