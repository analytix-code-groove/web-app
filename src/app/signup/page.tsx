'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'

import { createSupabaseBrowserClient } from '../../lib/supabase'


export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { t } = useLanguage()

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMessage(error ? error.message : t('checkEmailForLink'))
  }

  const handleProviderSignup = (provider: 'google' | 'github') => async () => {
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) setMessage(error.message)
  }

  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleEmailSignup} className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-text">{t('signUp')}</h1>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('sendMagicLink')}
          </button>
          <button
            type="button"
            onClick={handleProviderSignup('google')}
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('signUpWithGoogle')}
          </button>
          <button
            type="button"
            onClick={handleProviderSignup('github')}
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('signUpWithGithub')}
          </button>
          {message && <p className="text-sm text-text">{message}</p>}
        </div>
        <p className="mt-4 text-sm">
          {t('alreadyHaveAccount')}{' '}
          <Link href="/login" className="text-mint hover:underline">
            {t('login')}
          </Link>
        </p>
      </form>
    </main>
  )
}

