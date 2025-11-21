'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { dictionary } = useLanguage()
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container grid gap-6 py-10 md:grid-cols-3 md:items-center">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold text-navy">
            <span className="h-10 w-10 rounded-xl bg-navy text-white grid place-items-center font-black">AR</span>
            <span>Alix Rénovation</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">{dictionary.footer.legal}</p>
        </div>
        <div className="space-y-2 text-sm text-slate-700">
          <p className="font-semibold text-navy">{dictionary.footer.rbq}</p>
          <p>{dictionary.footer.rbqNumber}</p>
          <p>CCQ & CNESST — Sécurité et conformité sur chaque chantier.</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-slate-600 mb-2">{dictionary.footer.cta}</p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  )
}
