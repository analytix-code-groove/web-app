'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n'

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
const RECAPTCHA_ACTION = 'contact_form'

declare global {
  interface Window {
    grecaptcha?: {
      ready(cb: () => void): void
      execute(siteKey: string, options: { action: string }): Promise<string>
    }
  }
}

function loadRecaptcha() {
  if (!RECAPTCHA_SITE_KEY) return
  const existing = document.querySelector(`script[src="https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}"]`)
  if (existing) return

  const script = document.createElement('script')
  script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
  script.async = true
  script.defer = true
  document.head.appendChild(script)
}

async function getRecaptchaToken() {
  if (!RECAPTCHA_SITE_KEY) return null

  return new Promise<string | null>(resolve => {
    const start = Date.now()
    const timeoutMs = 5000

    const checkReady = () => {
      if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION })
            resolve(token)
          } catch (err) {
            console.error('reCAPTCHA execution failed', err)
            resolve(null)
          }
        })
        return
      }

      if (Date.now() - start > timeoutMs) {
        resolve(null)
        return
      }

      setTimeout(checkReady, 150)
    }

    checkReady()
  })
}

export function ContactClient() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('general')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return
    loadRecaptcha()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage(null)
    try {
      const recaptchaToken = await getRecaptchaToken()

      if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
        setStatus('error')
        setErrorMessage(t('messageVerificationError') || t('messageError'))
        return
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, reason, message, recaptchaToken }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setReason('general')
        setMessage('')
      } else {
        const data = await res.json().catch(() => null)
        setStatus('error')
        if (res.status === 400) {
          setErrorMessage(t('messageVerificationError') || data?.error)
        } else if (data?.error) {
          setErrorMessage(data.error)
        } else {
          setErrorMessage(t('messageError'))
        }
      }
    } catch {
      setStatus('error')
      setErrorMessage(t('messageError'))
    } finally {
      setIsSubmitting(false)
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
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
            required
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
            required
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('sending') || t('sendMessage') : t('sendMessage')}
          </button>
          {status === 'success' && (
            <p className="text-sm text-green-600">{t('messageSent')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMessage || t('messageError')}</p>
          )}
        </form>
      </section>
    </main>
  )
}

export default ContactClient

