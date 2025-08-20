import type { SupabaseClient, User } from '@supabase/supabase-js'
import { createSupabaseServerClient } from './supabase'

/**
 * Avoid calling ensureProfile multiple times for the same user in a session.
 */
const ensuredProfiles = new Set<string>()

/**
 * Ensure a profile row exists and is populated with basic metadata.
 * - Uses RLS (user must be signed in)
 * - Idempotent: upsert on (id)
 * - Safe: never throws; logs errors for diagnostics
 */
export async function ensureProfile(
  supabase: SupabaseClient,
  user: User
): Promise<void> {
  if (!user?.id) return
  if (ensuredProfiles.has(user.id)) return

  // Make sure we have a session so RLS applies
  const { data: sessionData } = await supabase.auth.getSession()
  if (!sessionData?.session) {
    console.debug('[ensureProfile] No session; skipping profile sync')
    return
  }

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    (user.user_metadata?.user_name as string | undefined) ??
    user.email ??
    null

  const avatarUrl =
    (user.user_metadata?.avatar_url as string | undefined) ??
    (user.user_metadata?.picture as string | undefined) ??
    null

  // Upsert guarantees the row exists and updates fields if present.
  // Requires an RLS policy like:
  //   CREATE POLICY "own profile"
  //   ON api.profiles FOR ALL
  //   USING (id = auth.uid()) WITH CHECK (id = auth.uid());
  const { error } = await supabase
    .schema('api')
    .from('profiles')
    .upsert(
      {
        id: user.id,
        full_name: fullName,
        avatar_url: avatarUrl,
      },
      { onConflict: 'id' }
    )

  if (error) {
    console.error(
      '[ensureProfile] Upsert failed:',
      (error as { message?: string })?.message ?? error
    )
    return
  }

  ensuredProfiles.add(user.id)
}

/**
 * Retrieve the current authenticated user and ensure their profile exists.
 * - Uses supabase.auth.getUser()
 * - Calls ensureProfile for the returned user
 */
export async function getCurrentUser(
  supabase: SupabaseClient
): Promise<User | null> {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) await ensureProfile(supabase, user)
  return user
}

/**
 * Parse the Authorization header of a Request and return the Supabase client
 * alongside the authenticated user (if any).
 */
export async function getUserFromRequest(req: Request) {
  const authHeader = req.headers.get('Authorization')
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice(7)
    : undefined
  const supabase = createSupabaseServerClient(token)
  const user = token ? await getCurrentUser(supabase) : null
  return { supabase, user }
}
