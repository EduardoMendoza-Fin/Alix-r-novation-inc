'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useLanguage } from './LanguageProvider'
import LanguageToggle from './LanguageToggle'

const navItems = [
  { href: '/', key: 'home' },
  { href: '/services', key: 'services' },
  { href: '/experience', key: 'experience' },
  { href: '/reviews', key: 'reviews' },
  { href: '/contact', key: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { dictionary } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-gold/30 bg-ink/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-white">
          <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-gold to-amber-500 text-ink grid place-items-center font-black shadow-lg shadow-gold/30">
            AR
          </span>
          <span className="tracking-wide">Alix Rénovation Inc</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={clsx(
                'px-3 py-2 rounded-lg font-semibold text-sm transition-colors border border-transparent',
                pathname === item.href
                  ? 'text-white border-gold/40 bg-charcoal'
                  : 'text-bone/80 hover:text-white hover:border-gold/30'
              )}
            >
              {dictionary.nav[item.key as keyof typeof dictionary.nav]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-lg shadow-gold/40 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  )
}
