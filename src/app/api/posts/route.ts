import { NextResponse } from 'next/server'
import { createSupabaseBrowserClient } from '@/lib/supabase'

export async function GET() {
  const supabase = createSupabaseBrowserClient()
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, excerpt, content')
    .order('created_at', { ascending: false })
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const supabase = createSupabaseBrowserClient()
  const body = await request.json()
  const { data, error } = await supabase.from('posts').insert(body).select().single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data, { status: 201 })
}
