'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = { name?: string; email?: string; message?: string }

export function ContactClient() {
  const { t, lang } = useLanguage()
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
    'w-full rounded-xl2 border border-stroke/70 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none transition'
  const inputErrorClass =
    'w-full rounded-xl2 border border-red-500 bg-bg px-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none transition'

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-bg py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(60% 60% at 70% 20%, rgba(54,226,180,0.09) 0%, rgba(0,0,0,0) 60%)',
            maskImage:
              'radial-gradient(1200px 600px at 50% -10%, black 40%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background:repeating-linear-gradient(45deg,transparent,transparent_28px,_rgba(255,255,255,0.03)_30px,_rgba(255,255,255,0.03)_32px)]"
        />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {lang === 'en' ? (
              <>Get in <span className="text-mint">Touch</span></>
            ) : (
              <>Ponete en <span className="text-mint">Contacto</span></>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            {t('contactHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 lg:grid-cols-5">
          {/* Form Card */}
          <div className="rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft lg:col-span-3">
            <h2 className="font-heading text-xl font-semibold text-text">{t('contactIntro')}</h2>
            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
              {/* Honeypot */}
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-muted">{t('name')}</label>
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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-muted">{t('email')}</label>
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
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reason" className="text-xs font-medium text-muted">{t('reason')}</label>
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

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-muted">{t('message')}</label>
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
                className="rounded-xl2 bg-mint px-5 py-2.5 text-sm font-medium text-black shadow-glow transition hover:opacity-90 disabled:opacity-50"
              >
                {isLoading ? t('sending') : t('sendMessage')}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-500" role="alert">{t('messageSent')}</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500" role="alert">{t('messageError')}</p>
              )}
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft">
              <FiMail className="text-mint" size={28} />
              <h3 className="mt-4 font-heading text-lg font-semibold text-text">
                {t('contactInfoHeading')}
              </h3>
              <a
                href="mailto:info@analytixcg.com"
                className="mt-2 inline-block text-sm text-mint transition hover:opacity-80"
              >
                info@analytixcg.com
              </a>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.linkedin.com/company/Analytixcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke/70 text-muted transition hover:border-mint/60 hover:text-mint"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://x.com/analytixcg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke/70 text-muted transition hover:border-mint/60 hover:text-mint"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>

            <div className="rounded-xl2 border border-stroke/70 bg-bg p-8 shadow-soft">
              <h3 className="font-heading text-lg font-semibold text-text">
                {t('aboutCtaAccent')}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {t('aboutCtaSubtitle')}
              </p>
              <div className="mt-4">
                <Link
                  href="/services"
                  className="text-sm text-mint transition hover:opacity-80"
                >
                  {t('seeServices')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactClient
