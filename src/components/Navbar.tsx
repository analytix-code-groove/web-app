'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import logoDesktop from '@/images/logos/desktop/logo_navbar.png'
import logoMobile from '@/images/logos/mobile/logo_navbar.png'
import avatarPlaceholder from '@/images/avatar-placeholder.svg'
import { FiSettings, FiLogOut } from 'react-icons/fi'

const links = [
  { href: '/about', label: 'about' },
  {
    href: '/services',
    label: 'services',
    children: [
      {
        href: '/services/data-analytics',
        label: 'dataAnalytics',
        description: 'dataAnalyticsDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <ellipse cx="12" cy="6" rx="7" ry="3" />
            <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
            <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
          </svg>
        ),
      },
      {
        href: '/services/devops',
        label: 'cloudDevops',
        description: 'cloudDevopsDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M17 16a4 4 0 0 0 0-8 6 6 0 0 0-11.8 1.46A4 4 0 0 0 6 20h11" />
          </svg>
        ),
      },
      {
        href: '/services/ai',
        label: 'aiAutomation',
        description: 'aiAutomationDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3v3" />
            <path d="M12 18v3" />
            <path d="M3 12h3" />
            <path d="M18 12h3" />
            <path d="M5.6 5.6l2.1 2.1" />
            <path d="M16.3 16.3l2.1 2.1" />
            <path d="M5.6 18.4l2.1-2.1" />
            <path d="M16.3 7.7l2.1-2.1" />
          </svg>
        ),
      },
      {
        href: '/services/automation-qa',
        label: 'automationQa',
        description: 'automationQaDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ),
      },
      {
        href: '/services/apps',
        label: 'appsApis',
        description: 'appsApisDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path d="M8 4l-6 8 6 8" />
            <path d="M16 4l6 8-6 8" />
          </svg>
        ),
      },
      {
        href: '/services/consulting',
        label: 'itConsulting',
        description: 'itConsultingDesc',
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        ),
      },
    ],
  },
  { href: '/blog', label: 'blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const userTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { t, lang, setLang } = useLanguage()
  const supabase = useMemo(() => createSupabaseBrowserClient(), [])

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
  }

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 100)
  }

  const openUserMenu = () => {
    if (userTimeoutRef.current) clearTimeout(userTimeoutRef.current)
    setUserMenuOpen(true)
  }

  const closeUserMenu = () => {
    if (userTimeoutRef.current) clearTimeout(userTimeoutRef.current)
    userTimeoutRef.current = setTimeout(() => setUserMenuOpen(false), 100)
  }
  return (
    <header className="sticky top-0 z-50 border-b border-stroke/60 bg-surface/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="Analytix Code Groove" className="flex items-center">
          <Image
            src={logoMobile}
            alt="Analytix Code Groove"
            className="h-8 w-auto md:hidden"
            priority
          />
          <Image
            src={logoDesktop}
            alt="Analytix Code Groove"
            className="hidden h-8 w-auto md:block"
            priority
          />
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
          {links.map(l => {
            const active = pathname.startsWith(l.href)
            if (l.children) {
              return (
                <div
                  key={l.href}
                  className="relative flex items-center"
                  onMouseEnter={openMenu}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={l.href}
                    className={`text-sm font-bold transition-colors ${
                      active ? 'text-mint' : 'text-text/80 hover:text-text'
                    }`}
                  >
                    {t(l.label)}
                  </Link>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`ml-1 h-4 w-4 transition-transform ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  {servicesOpen && (
                    <div
                      onMouseEnter={openMenu}
                      onMouseLeave={closeMenu}
                      className="absolute left-1/2 top-full mt-4 w-[30rem] -translate-x-1/2 rounded-xl border border-stroke/60 bg-surface p-4 shadow-soft"
                    >
                      <div className="grid grid-flow-col grid-rows-3 gap-4">
                        {l.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-start gap-3 rounded-md p-2 hover:bg-mint/10"
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded bg-mint/20 text-mint">
                              {child.icon}
                            </span>
                            <span className="text-left">
                              <span className="block text-sm font-semibold text-text">
                                {t(child.label)}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-text/70">
                                  {t(child.description)}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-bold transition-colors ${
                  active ? 'text-mint' : 'text-text/80 hover:text-text'
                }`}
              >
                {t(l.label)}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-sm text-text/80 transition-colors hover:text-text"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft hover:opacity-90 sm:inline"
          >
            {t('letsTalk')}
          </Link>
          {user ? (
            <div
              className="relative"
              onMouseEnter={openUserMenu}
              onMouseLeave={closeUserMenu}
            >
              <Image
                src={user.user_metadata?.avatar_url || avatarPlaceholder}
                alt="User avatar"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
                {userMenuOpen && (
                  <div
                    onMouseEnter={openUserMenu}
                    onMouseLeave={closeUserMenu}
                    className="absolute right-0 mt-2 w-56 rounded-md border border-stroke/60 bg-surface p-2 text-xs shadow-soft"
                  >
                    <div className="px-4 py-1 text-left text-sm font-medium text-text">
                      {user.user_metadata?.full_name ||
                        user.user_metadata?.name ||
                        user.user_metadata?.user_name ||
                        user.email}
                    </div>
                    <div className="px-4 py-1 text-left text-text/80">{user.email}</div>
                    <div className="my-1 border-t border-stroke/60" />
                    <Link
                      href="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-text/80 hover:bg-mint/10 hover:text-text"
                    >
                      <FiSettings className="h-3 w-3" />
                      {t('accountPreferences')}
                    </Link>
                    <div className="my-1 border-t border-stroke/60" />
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-text/80 hover:bg-mint/10 hover:text-text"
                    >
                      <FiLogOut className="h-3 w-3" />
                      {t('signOut')}
                    </button>
                  </div>
                )}
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm text-text/80 transition-colors hover:text-text"
            >
              {t('login')}
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
