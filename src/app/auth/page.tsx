export default function AuthPage() {
  return (
    <div className="max-w-md mx-auto mt-20 text-white">
      <h1 className="text-3xl font-bold mb-6 text-emerald-400">Sign in</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-[#1a1a1a] border border-emerald-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-[#1a1a1a] border border-emerald-500"
        />
        <button
          type="submit"
          className="w-full bg-emerald-500 text-black font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

