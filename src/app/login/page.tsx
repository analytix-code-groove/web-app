'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMessage(error ? error.message : 'Check your email for the login link.')
  }

  const handleProviderLogin = (provider: 'google' | 'github') => async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) setMessage(error.message)
  }

  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleEmailLogin} className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-text">Log in</h1>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Send magic link
          </button>
          <button
            type="button"
            onClick={handleProviderLogin('google')}
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={handleProviderLogin('github')}
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Sign in with GitHub
          </button>
          {message && <p className="text-sm text-text">{message}</p>}
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <Link href="/signup" className="text-mint hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </main>
  )
}

