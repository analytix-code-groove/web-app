'use client'

import { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { createSupabaseBrowserClient } from '../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMessage(error ? error.message : '')
  }

  const handleProviderLogin = (provider: 'google' | 'github') => async () => {
    const supabase = createSupabaseBrowserClient()
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) setMessage(error.message)
  }

  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 text-center shadow-soft">
        <h1 className="text-xl font-semibold text-text">Welcome back</h1>
        <p className="mb-6 text-sm text-muted">Sign in to your account</p>

        <div className="mb-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={handleProviderLogin('github')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGithub className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </button>
          <button
            type="button"
            onClick={handleProviderLogin('google')}
            className="flex items-center justify-center gap-2 rounded-xl2 border border-stroke/60 bg-bg px-4 py-2 text-sm font-medium text-text transition hover:bg-bg/80"
          >
            <FaGoogle className="h-5 w-5" />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="mb-6 flex items-center">
          <span className="h-px flex-1 bg-stroke/40" />
          <span className="px-2 text-xs uppercase text-muted">or</span>
          <span className="h-px flex-1 bg-stroke/40" />
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Sign In
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-text">{message}</p>}

        <p className="mt-6 text-sm text-muted">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-mint">
            Sign Up Now
          </Link>
        </p>

        <p className="mt-6 text-xs text-muted">
          By continuing, you agree to Analytix&apos;s Terms of Service and Privacy Policy, and to receive periodic emails with updates.
        </p>
      </div>
    </main>
  )
}

