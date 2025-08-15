"use client"

import { useEffect, useState } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post | AnalytiX',
}

type Post = {
  id: string
  title: string
  content?: string
  excerpt?: string
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then(r => r.json())
      .then(data => setPost(data))
      .catch(() => setPost(null))
  }, [params.id])

  if (!post) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="text-muted">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">{post.title}</h1>
        {post.content && <article className="prose mt-6 text-text">{post.content}</article>}
      </div>
    </main>
  )
}
