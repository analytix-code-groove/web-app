'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { createSupabaseBrowserClient } from '../../lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createSupabaseBrowserClient() // init on action
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMessage(error ? error.message : '')
  }

  const handleProviderLogin = (provider: 'google' | 'github') => async () => {
    const supabase = createSupabaseBrowserClient() // init on action
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) setMessage(error.message)
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-bg px-4">
      {/* Logo */}
      <div className="absolute left-6 top-6">
        <Image
          src="/images/logo.png"
          alt="Analytix Code Groove"
          width={160}
          height={40}
          priority
          className="h-8 w-auto"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 text-center shadow-soft">
        {/* Heading to match screenshot */}
        <h1 className="text-3xl font-semibold tracking-tight text-text">Welcome back</h1>
        <p className="mt-2 mb-6 text-sm text-muted">Sign in to your account</p>

        {/* Social buttons */}
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

        {/* Divider */}
        <div className="mb-6 flex items-center">
          <span className="h-px flex-1 bg-stroke/40" />
          <span className="px-2 text-xs uppercase tracking-wide text-muted">or</span>
          <span className="h-px flex-1 bg-stroke/40" />
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3 text-left">
          <label htmlFor="email" className="text-xs text-muted">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
            required
          />

          <div className="mt-2 flex items-end justify-between">
            <label htmlFor="password" className="text-xs text-muted">Password</label>
            <Link href="/forgot-password" className="text-xs font-medium text-mint hover:opacity-90">
              Forgot Password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
            required
          />

          <button
            type="submit"
            className="mt-4 rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Sign In
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-text" role="alert">{message}</p>}

        <p className="mt-6 text-sm text-muted">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="font-medium text-mint hover:opacity-90">Sign Up Now</Link>
        </p>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          By continuing, you agree to Analytix&apos;s Terms of Service and Privacy Policy,
          and to receive periodic emails with updates.
        </p>
      </div>
    </main>
  )
}
