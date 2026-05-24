import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080C18',
        surface: '#0D1326',
        'surface-2': '#111827',
        border: '#1A2442',
        'border-light': '#243060',
        ink: '#FFFFFF',
        muted: '#B4C2D4',
        accent: '#3B82F6',
        'accent-dim': '#1D4ED8',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
