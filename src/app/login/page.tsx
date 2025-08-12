'use client'

import { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { createSupabaseBrowserClient } from '../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMessage(error ? error.message : 'Check your email for the login link.')
  }

  const handleProviderLogin = (provider: 'google' | 'github') => async () => {
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) setMessage(error.message)
  }

  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 text-center shadow-soft">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleProviderLogin('github')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGithub className="h-5 w-5" />
            <span>Sign in with GitHub</span>
          </button>
          <button
            type="button"
            onClick={handleProviderLogin('google')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGoogle className="h-5 w-5" />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="my-6 flex items-center">
          <span className="h-px flex-1 bg-stroke/40" />
          <span className="px-2 text-xs uppercase text-muted">or</span>
          <span className="h-px flex-1 bg-stroke/40" />
        </div>

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
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
        </form>

        {message && <p className="mt-4 text-sm text-text">{message}</p>}
      </div>
    </main>
  )
}

