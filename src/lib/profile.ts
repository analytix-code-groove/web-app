import type { SupabaseClient, User } from '@supabase/supabase-js'

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
    .from('api.profiles')
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
