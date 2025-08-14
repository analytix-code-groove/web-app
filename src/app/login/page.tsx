'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGoogle, FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import supabaseConfig from '../../../supabase.local.json'
import logo from '@/images/logos/desktop/logo_login.png'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const { t } = useLanguage()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient() // init on action
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMessage(error ? error.message : '')
  }

  const handleProviderLogin = (provider: 'google' | 'github') => async () => {
    const supabase = createSupabaseBrowserClient() // init on action
    const clientId =
      provider === 'github'
        ? supabaseConfig.GITHUB_CLIENT_ID
        : supabaseConfig.GOOGLE_CLIENT_ID
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: supabaseConfig.SUPABASE_CALLBACK_URL,
        queryParams: { client_id: clientId },
      },
    })
    if (error) setMessage(error.message)
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-bg px-4">
      {/* Close */}
      <button
        onClick={() => router.back()}
        className="absolute right-6 top-6 text-text hover:opacity-70"
        aria-label="Close"
      >
        <FaTimes className="h-6 w-6" />
      </button>

      {/* Logo and Card */}
      <div className="flex items-center gap-12">
        <Image
          src={logo}
          alt="Analytix Code Groove"
          width={160}
          height={40}
          priority
          className="h-8 w-auto"
        />

        {/* Card */}
        <div className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 text-center shadow-soft">
        {/* Heading to match screenshot */}
        <h1 className="text-3xl font-semibold tracking-tight text-text">{t('welcomeBack')}</h1>
        <p className="mt-2 mb-10 text-sm text-muted">{t('signInToAccount')}</p>

        {/* Social buttons */}
        <div className="mb-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleProviderLogin('github')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGithub className="h-5 w-5" />
            <span>{t('continueWithGithub')}</span>
          </button>
          <button
            type="button"
            onClick={handleProviderLogin('google')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGoogle className="h-5 w-5" />
            <span>{t('continueWithGoogle')}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="mb-6 flex items-center">
          <span className="h-px flex-1 bg-stroke/40" />
          <span className="px-2 text-sm tracking-wide text-muted">{t('or')}</span>
          <span className="h-px flex-1 bg-stroke/40" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3 text-left">
          <label htmlFor="email" className="text-xs text-muted">{t('email')}</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
            required
          />

          <div className="mt-2 flex items-end justify-between">
            <label htmlFor="password" className="text-xs text-muted">{t('password')}</label>
            <Link href="/forgot-password" className="text-xs font-medium text-mint hover:opacity-90">
              {t('forgotPassword')}
            </Link>
          </div>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('passwordPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
            required
          />

          <button
            type="submit"
            className="mt-4 rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('signIn')}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-text" role="alert">{message}</p>}

        <p className="mt-8 text-sm text-muted">
          {t('dontHaveAccount')}{' '}
          <Link href="/signup" className="font-medium text-mint hover:opacity-90">{t('signUpNow')}</Link>
        </p>

        <p className="mt-16 text-xs leading-relaxed text-muted">
          {t('termsAgreement')}
        </p>
        </div>
      </div>
    </main>
  )
}
