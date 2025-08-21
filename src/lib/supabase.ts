// src/lib/supabase.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Reads Supabase public config from env.
 * - NEXT_PUBLIC_SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY
 */
function getPublicConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase config. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local or Vercel envs.'
    )
  }

  return { supabaseUrl, supabaseAnonKey }
}

/** Browser/client usage (always anon key) */
export function createSupabaseBrowserClient(): SupabaseClient {
  const { supabaseUrl, supabaseAnonKey } = getPublicConfig()
  return createClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Server-side usage with caller's JWT (RLS context).
 * Pass the user's access token if you want queries to run as that user.
 */
export function createSupabaseServerClient(token?: string): SupabaseClient {
  const { supabaseUrl, supabaseAnonKey } = getPublicConfig()
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    },
  })
}

/**
 * (Optional) Server-only admin client using the service-role key.
 * Never import or use this in client components.
 */
export function createSupabaseAdminClient(): SupabaseClient {
  if (typeof window !== 'undefined') {
    throw new Error('createSupabaseAdminClient must only run on the server.')
  }
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  if (!supabaseUrl || !serviceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY or URL.')
  }
  return createClient(supabaseUrl, serviceKey)
}
