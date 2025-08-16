'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

export default function ContactClient() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('info')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const to = reason === 'support' ? 'support@analytixcg.com' : 'info@analytixcg.com'
    const subject =
      reason === 'support'
        ? `Support request from ${name}`
        : `Contact from ${name}`
    const body = `${message}\n\nFrom: ${name}${email ? ` <${email}>` : ''}`
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
            <option value="info">{t('general')}</option>
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
        </form>
      </section>
    </main>
  )
}

