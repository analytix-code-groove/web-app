import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Create a Supabase client for use in the browser. Uses the public anon key.
 */
export function createSupabaseBrowserClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Create a Supabase client for server-side user requests. This uses the anon
 * key and optionally attaches the user's access token to the request headers so
 * that Row Level Security (RLS) policies apply per user.
 */
export function createSupabaseServerClient(accessToken?: string): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    },
  })
}
