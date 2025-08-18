import type { SupabaseClient, User } from '@supabase/supabase-js'

/**
 * Ensure a profile exists for the given user by syncing auth metadata to the
 * `api.profiles` table.
 */
export async function ensureProfile(
  supabase: SupabaseClient,
  user: User
): Promise<void> {
  const fullName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.user_metadata?.user_name ||
    user.email
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture || null
  const {
    data: { session },
  } = await supabase.auth.getSession()
  await fetch('/api/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.access_token ?? ''}`,
    },
    body: JSON.stringify({ full_name: fullName, avatar_url: avatarUrl }),
  })
}

