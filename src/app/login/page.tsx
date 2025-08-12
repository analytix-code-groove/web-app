'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Provider } from '@supabase/supabase-js'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    setMessage(error ? error.message : 'Check your email for the login link')
  }

  function handleOAuth(provider: Provider) {
    supabase.auth.signInWithOAuth({ provider })
  }

  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-text">Log in</h1>
        <form onSubmit={handleMagicLink} className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Send magic link
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-mint">{message}</p>}
        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={() => handleOAuth('google')}
            className="w-full rounded-xl2 border border-stroke/70 bg-surface px-4 py-2 text-sm text-text hover:border-mint/60"
          >
            Continue with Google
          </button>
          <button
            onClick={() => handleOAuth('github')}
            className="w-full rounded-xl2 border border-stroke/70 bg-surface px-4 py-2 text-sm text-text hover:border-mint/60"
          >
            Continue with GitHub
          </button>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <a href="/signup" className="text-mint hover:underline">
            Sign up
          </a>
          <a href="/forgot-password" className="text-mint hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  )
}
