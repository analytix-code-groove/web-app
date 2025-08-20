"use client"

import { useEffect, useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import type { User, UserIdentity } from '@supabase/supabase-js'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import { getCurrentUser } from '@/lib/profile'

type ProfileMetadata = {
  first_name?: string
  last_name?: string
}

type IdentityData = {
  email?: string
  user_name?: string
}

export default function SettingsClient() {
  const { t } = useLanguage()
  const [user, setUser] = useState<User | null>(null)
  const [identity, setIdentity] = useState<UserIdentity | null>(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadUser = async () => {
        const supabase = createSupabaseBrowserClient()
        const user = await getCurrentUser(supabase)
        if (user) {
          setUser(user)
          const { first_name = '', last_name = '' } =
            (user.user_metadata as ProfileMetadata) || {}
          setFirstName(first_name)
          setLastName(last_name)

          const provider = user.app_metadata?.provider
          if (provider === 'github' || provider === 'google') {
            const { data } = await supabase.auth.getUserIdentities()
            const linked = data.identities.find(
              i => i.provider === provider && i.user_id === user.id,
            )
            setIdentity(linked ?? null)
          }
        }
    }
    void loadUser()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.updateUser({
      data: { first_name: firstName, last_name: lastName },
    })
    setMessage(error ? error.message : '')
  }

  const handleCancel = () => {
    const { first_name = '', last_name = '' } =
      (user?.user_metadata as ProfileMetadata) || {}
    setFirstName(first_name)
    setLastName(last_name)
    setMessage('')
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-24 text-text">
        <h1 className="font-heading text-4xl font-semibold">{t('accountPreferences')}</h1>
        <div className="mt-8 space-y-8">
          <div className="rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
            <h2 className="text-lg font-medium">{t('profileInformation')}</h2>
            <form onSubmit={handleSave} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-xs text-muted">
                  {t('firstName')}
                </label>
                <input
                  id="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder={t('firstName')}
                  className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2 text-xs text-muted">
                  {t('lastName')}
                </label>
                <input
                  id="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  placeholder={t('lastName')}
                  className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
                />
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm text-text hover:bg-bg/80"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
                >
                  {t('save')}
                </button>
              </div>
            </form>
          {message && (
            <p className="mt-4 text-sm" role="alert">
              {message}
            </p>
          )}
        </div>

        {identity && (
          <div className="rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
            <h2 className="text-lg font-medium">{t('accountIdentities')}</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 rounded-md border border-stroke/60 bg-bg px-4 py-3 text-sm">
                {identity.provider === 'github' && <FaGithub className="h-5 w-5" />}
                {identity.provider === 'google' && <FaGoogle className="h-5 w-5" />}
                <span>
                  {
                    (identity.identity_data as IdentityData).email ||
                    (identity.identity_data as IdentityData).user_name
                  }
                </span>
              </li>
            </ul>
          </div>
        )}
        </div>
      </section>
    </main>
  )
}

