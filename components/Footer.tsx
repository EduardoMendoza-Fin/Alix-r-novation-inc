'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { dictionary } = useLanguage()
  return (
    <footer className="border-t border-gold/30 bg-ink">
      <div className="section-container grid gap-6 py-10 md:grid-cols-3 md:items-center">
        <div>
          <div className="flex items-center gap-3 text-lg font-bold text-white">
            <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold to-amber-500 text-ink grid place-items-center font-black shadow-md shadow-gold/40">AR</span>
            <span className="tracking-wide">Alix Rénovation</span>
          </div>
          <p className="mt-3 text-sm text-bone/80">{dictionary.footer.legal}</p>
        </div>
        <div className="space-y-2 text-sm text-bone/80">
          <p className="font-semibold text-gold">{dictionary.footer.rbq}</p>
          <p>{dictionary.footer.rbqNumber}</p>
          <p>CCQ & CNESST — Sécurité et conformité sur chaque chantier.</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-bone/80 mb-2">{dictionary.footer.cta}</p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink shadow-lg shadow-gold/40 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  )
}
