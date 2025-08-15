import { NextResponse } from 'next/server'
import { createSupabaseBrowserClient } from '@/lib/supabase'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const supabase = createSupabaseBrowserClient()
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, excerpt, content')
    .eq('id', params.id)
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }
  return NextResponse.json(data)
}
