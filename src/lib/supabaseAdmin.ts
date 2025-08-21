// src/lib/supabase-admin.ts
import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import fs from 'node:fs'
import path from 'node:path'

// Detect Node (not edge, not browser)
function isNodeRuntime() {
  return typeof window === 'undefined' && process.env.NEXT_RUNTIME !== 'edge'
}

function loadLocalEnv(): Record<string, string> {
  if (process.env.NODE_ENV === 'production' || !isNodeRuntime()) return {}
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'supabase.local.json'), 'utf8')
    return JSON.parse(file) as Record<string, string>
  } catch {
    return {}
  }
}

/**
 * Server-only admin client using service-role key.
 * - Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in env on Vercel.
 * - Falls back to supabase.local.json only in local dev.
 */
export function createSupabaseAdminClient(): SupabaseClient {
  if (!isNodeRuntime()) {
    throw new Error('createSupabaseAdminClient must run in the Node runtime (server only).')
  }

  const local = loadLocalEnv()

  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    local['SUPABASE_URL']

  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || local['SUPABASE_SERVICE_ROLE_KEY']

  if (!supabaseUrl || !serviceKey) {
    throw new Error(
      'Missing Supabase envs. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (and NEVER expose the service key to the browser).'
    )
  }

  return createClient(supabaseUrl, serviceKey)
}
