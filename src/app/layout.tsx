import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supabase Style Web App",
  description: "Simple app with Supabase-inspired design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="bg-[#0d0d0d] border-b border-emerald-500">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4 text-white">
            <Link href="/" className="text-emerald-400 font-bold">
              Web App
            </Link>
            <div className="space-x-4">
              <Link href="/auth" className="hover:text-emerald-400">
                Auth
              </Link>
              <Link href="/solutions" className="hover:text-emerald-400">
                Solutions
              </Link>
              <Link href="/blog" className="hover:text-emerald-400">
                Blog
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
