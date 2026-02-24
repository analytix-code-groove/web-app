'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import { ensureProfile, getCurrentUser } from '@/lib/profile'
import logoDesktop from '@/images/logos/desktop/logo_navbar.png'
import logoMobile from '@/images/logos/mobile/logo_navbar.png'
import avatarPlaceholder from '@/images/avatar-placeholder.svg'
import { FiSettings, FiLogOut, FiDatabase, FiCloud, FiCpu, FiSmartphone, FiMap } from 'react-icons/fi'

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
        icon: <FiDatabase className="h-5 w-5" />,
      },
      {
        href: '/services/devops',
        label: 'cloudDevops',
        description: 'cloudDevopsDesc',
        icon: <FiCloud className="h-5 w-5" />,
      },
      {
        href: '/services/ai',
        label: 'aiAutomation',
        description: 'aiAutomationDesc',
        icon: <FiCpu className="h-5 w-5" />,
      },
      {
        href: '/services/automation-qa',
        label: 'automationQa',
        description: 'automationQaDesc',
        icon: <FiSettings className="h-5 w-5" />,
      },
      {
        href: '/services/apps',
        label: 'appsApis',
        description: 'appsApisDesc',
        icon: <FiSmartphone className="h-5 w-5" />,
      },
      {
        href: '/services/consulting',
        label: 'itConsulting',
        description: 'itConsultingDesc',
        icon: <FiMap className="h-5 w-5" />,
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
    const loadUser = async () => {
      const user = await getCurrentUser(supabase)
      setUser(user)
    }
    loadUser()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const u = session?.user ?? null
      if (u) await ensureProfile(supabase, u)
      setUser(u)
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
