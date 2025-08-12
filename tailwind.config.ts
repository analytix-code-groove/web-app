import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        mint: 'var(--mint)',
        'mint-strong': 'var(--mint-strong)',
        stroke: 'var(--stroke)',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.25)',
        glow: '0 0 0 6px rgba(54,226,180,0.12)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
}
export default config
