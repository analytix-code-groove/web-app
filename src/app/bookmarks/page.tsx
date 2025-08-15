'use client'

import type { Metadata } from 'next'
import { useEffect, useState } from 'react'
import { createSupabaseBrowserClient } from '../../lib/supabase'

type Bookmark = {
  url: string
}

const merge = (local: Bookmark[], server: Bookmark[]): Bookmark[] => {
  const map = new Map(local.map(b => [b.url, b]))
  server.forEach(b => map.set(b.url, b))
  return Array.from(map.values())
}

export const metadata: Metadata = {
  title: 'Bookmarks | AnalytiX',
  description: 'Save and manage your favorite links in AnalytiX.',
}

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [url, setUrl] = useState('')
  const supabase = typeof window !== 'undefined' ? createSupabaseBrowserClient() : null

  const loadLocal = (): Bookmark[] => {
    try {
      return JSON.parse(localStorage.getItem('bookmarks') ?? '[]') as Bookmark[]
    } catch {
      return []
    }
  }

  const saveLocal = (items: Bookmark[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(items))
  }

  useEffect(() => {
    if (!supabase) return
    const sync = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('bookmarks')
          .select('url')
          .eq('user_id', user.id)
        if (data) {
          const merged = merge(loadLocal(), data)
          setBookmarks(merged)
          saveLocal(merged)
        }
      }
    }

    const local = loadLocal()
    setBookmarks(local)
    sync()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      sync()
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const addBookmark = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase || !url) return
    const newBookmarks = merge(bookmarks, [{ url }])
    setBookmarks(newBookmarks)
    saveLocal(newBookmarks)
    setUrl('')
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('bookmarks').upsert({ url, user_id: user.id })
    }
  }

  if (!supabase) return null

  return (
    <main className="bg-bg min-h-screen p-4 text-text">
      <h1 className="mb-4 text-2xl font-semibold">Bookmarks</h1>
      <form onSubmit={addBookmark} className="mb-4 flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="flex-1 rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
        >
          Add
        </button>
      </form>
      {bookmarks.length === 0 ? (
        <p className="text-sm text-text/80">No bookmarks yet.</p>
      ) : (
        <ul className="space-y-2">
          {bookmarks.map(b => (
            <li key={b.url}>
              <a href={b.url} className="text-mint hover:underline">
                {b.url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

