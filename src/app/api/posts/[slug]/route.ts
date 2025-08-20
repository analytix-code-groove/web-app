// app/api/posts/[slug]/route.ts
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase'

type Ctx = { params: Promise<{ slug: string }> }

export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params

  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .schema('content')
    .from('posts')
    .select('slug,title,excerpt,body_md,cover_url,published_at,author_id,status')
    .eq('slug', slug)
    .eq('status', 'published')        // public endpoint: only published
    .single()

  if (error) {
    // return 404 for not found, otherwise 500
    const status = error.code === 'PGRST116' ? 404 : 500
    return NextResponse.json({ error: error.message }, { status })
  }

  return NextResponse.json(data)
}
