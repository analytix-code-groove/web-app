import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

// Extract the authenticated user from the request Authorization header.
async function getUser(req: Request) {
  const authHeader = req.headers.get('Authorization')
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice(7)
    : undefined
  const supabase = createSupabaseServerClient(token)
  if (!token) return { supabase, user: null }
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return { supabase, user }
}

// GET /api/profiles - return the current user's profile
export async function GET(req: Request) {
  const { supabase, user } = await getUser(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { data, error } = await supabase
    .schema('api')
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

// POST /api/profiles - create or update the current user's profile
export async function POST(req: Request) {
  const { supabase, user } = await getUser(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const { data, error } = await supabase
    .schema('api')
    .from('profiles')
    .upsert({ id: user.id, ...body }, { onConflict: 'id' })
    .select()
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data, { status: 201 })
}

// PUT /api/profiles - update fields on the current user's profile
export async function PUT(req: Request) {
  const { supabase, user } = await getUser(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const { data, error } = await supabase
    .schema('api')
    .from('profiles')
    .update(body)
    .eq('id', user.id)
    .select()
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

// DELETE /api/profiles - remove the current user's profile
export async function DELETE(req: Request) {
  const { supabase, user } = await getUser(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { error } = await supabase
    .schema('api')
    .from('profiles')
    .delete()
    .eq('id', user.id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
