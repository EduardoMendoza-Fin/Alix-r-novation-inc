import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b1f3a',
        charcoal: '#1f2933',
        accent: '#1e90ff',
      },
      boxShadow: {
        card: '0 10px 25px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
