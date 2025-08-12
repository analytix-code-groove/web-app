import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export function createSupabaseBrowserClient(): SupabaseClient {
  let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  let supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Fallback to local JSON file in dev
  if ((!supabaseUrl || !supabaseAnonKey) && process.env.NODE_ENV === 'development') {
    try {
      // This file should be in your project root or /src/config, and .gitignore'd
      const localConfig = require('./supabase.local.json')
      supabaseUrl = localConfig.SUPABASE_URL
      supabaseAnonKey = localConfig.SUPABASE_ANON_KEY
    } catch {
      throw new Error('Missing Supabase environment variables and no supabase.local.json found')
    }
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
