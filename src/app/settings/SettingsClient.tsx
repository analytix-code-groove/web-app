"use client"

import { useEffect, useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import type { User } from '@supabase/supabase-js'
import { useLanguage } from '@/lib/i18n'
import { createSupabaseBrowserClient } from '@/lib/supabase'

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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const supabase = createSupabaseBrowserClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        const { first_name = '', last_name = '' } =
          (user.user_metadata as ProfileMetadata) || {}
        setFirstName(first_name)
        setLastName(last_name)
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
    <main className="min-h-screen bg-bg p-4 text-text">
      <h1 className="text-2xl font-semibold">{t('accountPreferences')}</h1>
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
            <p className="mt-4 text-sm text-text" role="alert">
              {message}
            </p>
          )}
        </div>

        {user?.identities && user.identities.length > 0 && (
          <div className="rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
            <h2 className="text-lg font-medium">{t('accountIdentities')}</h2>
            <ul className="mt-6 space-y-4">
              {user.identities.map(identity => {
                const data = identity.identity_data as IdentityData
                return (
                  <li
                    key={identity.id}
                    className="flex items-center gap-3 rounded-md border border-stroke/60 bg-bg px-4 py-3 text-sm text-text"
                  >
                    {identity.provider === 'github' && <FaGithub className="h-5 w-5" />}
                    {identity.provider === 'google' && <FaGoogle className="h-5 w-5" />}
                    <span>{data.email || data.user_name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}

