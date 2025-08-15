"use client"

import { useState } from 'react'

const frontendSnippet = `function Hello() {
  return <button className="btn">Click me</button>
}`

const apiSnippet = `GET /api/hello
{
  "message": "Hello World"
}`

export default function CodeToggle() {
  const [view, setView] = useState<'frontend' | 'api'>('frontend')

  return (
    <div className="mt-10">
      <div className="mb-2 flex gap-2">
        <button
          onClick={() => setView('frontend')}
          className={`rounded px-3 py-1 text-sm ${view === 'frontend' ? 'bg-mint text-bg' : 'bg-surface text-text'}`}
        >
          View frontend
        </button>
        <button
          onClick={() => setView('api')}
          className={`rounded px-3 py-1 text-sm ${view === 'api' ? 'bg-mint text-bg' : 'bg-surface text-text'}`}
        >
          View API
        </button>
      </div>
      <pre className="rounded-xl2 bg-surface p-4 text-sm text-text shadow-soft">
        <code>{view === 'frontend' ? frontendSnippet : apiSnippet}</code>
      </pre>
    </div>
  )
}
