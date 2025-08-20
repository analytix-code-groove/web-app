// app/api/debug/whoami/route.ts

import { getUserFromRequest } from '@/lib/profile'

export const runtime = 'nodejs'
export async function GET(req: Request) {
  const { supabase, user } = await getUserFromRequest(req)
  const { data: u } = await supabase.auth.getUser()
  return Response.json({ headerUser: !!user, getUser: !!u, uid: u?.user?.id ?? user?.id ?? null })
}
