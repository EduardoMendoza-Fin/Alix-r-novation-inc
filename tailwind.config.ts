import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b0b0b',
        charcoal: '#111111',
        accent: '#C9A227',
        gold: '#C9A227',
        ink: '#000000',
        bone: '#f7f4ec',
      },
      boxShadow: {
        card: '0 18px 38px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}

export default config
