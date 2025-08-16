'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

export default function ContactClient() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('general')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, reason, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setReason('general')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="font-heading text-4xl font-semibold text-text">{t('contact')}</h1>
        <p className="mt-6 text-lg text-muted">{t('contactIntro')}</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:max-w-lg">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t('namePlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <select
            value={reason}
            onChange={e => setReason(e.target.value)}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text focus:border-mint focus:outline-none"
          >
            <option value="general">{t('general')}</option>
            <option value="support">{t('support')}</option>
          </select>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={t('messagePlaceholder')}
            rows={5}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            {t('sendMessage')}
          </button>
          {status === 'success' && (
            <p className="text-sm text-green-600">{t('messageSent')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">{t('messageError')}</p>
          )}
        </form>
      </section>
    </main>
  )
}

