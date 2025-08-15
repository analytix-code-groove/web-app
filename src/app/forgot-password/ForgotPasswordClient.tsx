'use client'

import { useLanguage } from '@/lib/i18n'

export default function ForgotPasswordClient() {
  const { t } = useLanguage()
  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-text">{t('recoverPassword')}</h1>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            placeholder={t('emailPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('sendResetLink')}
          </button>
        </div>
        <p className="mt-4 text-sm">
          <a href="/login" className="text-mint hover:underline">
            {t('backToLogin')}
          </a>
        </p>
      </form>
    </main>
  )
}

