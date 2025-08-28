export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'
import { createSupabaseAdminClient } from '@/lib/supabaseAdmin'

function loadAdminSecret(): string | undefined {
  if (process.env.ADMIN_SECRET) return process.env.ADMIN_SECRET
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'supabase.local.json'), 'utf8')
    const json = JSON.parse(file) as Record<string, string>
    return json['ADMIN_SECRET']
  } catch {
    return undefined
  }
}

export async function POST(req: Request) {
  const secret = loadAdminSecret()
  if (!secret) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }
  const auth = req.headers.get('authorization')
  if (!auth || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { user_id, role } = await req.json()
  if (typeof user_id !== 'string' || !['admin', 'author', 'client'].includes(role)) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }
  const supabase = createSupabaseAdminClient()
  const { error } = await supabase
    .schema('api')
    .from('profiles')
    .update({ role })
    .eq('id', user_id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
