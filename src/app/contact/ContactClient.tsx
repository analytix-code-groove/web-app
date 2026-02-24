'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = { name?: string; email?: string; message?: string }

export function ContactClient() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('general')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})

  const validate = (): FieldErrors => {
    const e: FieldErrors = {}
    if (!name.trim()) e.name = t('nameRequired')
    if (!email.trim()) e.email = t('emailRequired')
    else if (!EMAIL_RE.test(email)) e.email = t('emailInvalid')
    if (!message.trim()) e.message = t('messageRequired')
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fieldErrors = validate()
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, reason, message, website: honeypot }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setReason('general')
        setMessage('')
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'
  const inputClass =
    'w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none'
  const inputErrorClass =
    'w-full rounded-md border border-red-500 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none'

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="font-heading text-4xl font-semibold text-text">{t('contact')}</h1>
        <p className="mt-6 text-lg text-muted">{t('contactIntro')}</p>
        <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-4 md:max-w-lg">
          {/* Honeypot — hidden from real users, bots auto-fill it */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs text-muted">{t('name')}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('namePlaceholder')}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={errors.name ? inputErrorClass : inputClass}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs text-muted">{t('email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={errors.email ? inputErrorClass : inputClass}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="reason" className="text-xs text-muted">{t('reason')}</label>
            <select
              id="reason"
              value={reason}
              onChange={e => setReason(e.target.value)}
              className={inputClass}
            >
              <option value="general">{t('general')}</option>
              <option value="support">{t('support')}</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs text-muted">{t('message')}</label>
            <textarea
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder={t('messagePlaceholder')}
              rows={5}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={errors.message ? inputErrorClass : inputClass}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? t('sending') : t('sendMessage')}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-600" role="alert">{t('messageSent')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600" role="alert">{t('messageError')}</p>
          )}
        </form>
      </section>
    </main>
  )
}

export default ContactClient
