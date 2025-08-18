import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import fs from 'node:fs'
import path from 'node:path'

function loadLocalEnv(): Record<string, string> {
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'supabase.local.json'), 'utf8')
    return JSON.parse(file) as Record<string, string>
  } catch {
    return {}
  }
}

/**
 * Create a Supabase client with the service-role key. This should only be used
 * for trusted server-side jobs and must never run in the browser.
 */
export function createSupabaseAdminClient(): SupabaseClient {
  const localEnv = loadLocalEnv()
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? localEnv['SUPABASE_URL']
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? localEnv['SUPABASE_SERVICE_ROLE_KEY']

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}
