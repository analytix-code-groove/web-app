export default function LoginPage() {
  return (
    <main className="bg-bg flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold text-text">Log in</h1>
        <div className="mt-4 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-stroke/60 bg-bg px-3 py-2 text-sm text-text placeholder:text-muted focus:border-mint focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl2 bg-mint px-4 py-2 text-sm font-medium text-black shadow-soft transition hover:opacity-90"
          >
            Log in
          </button>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <a href="/signup" className="text-mint hover:underline">
            Sign up
          </a>
          <a href="/forgot-password" className="text-mint hover:underline">
            Forgot password?
          </a>
        </div>
      </form>
    </main>
  )
}
