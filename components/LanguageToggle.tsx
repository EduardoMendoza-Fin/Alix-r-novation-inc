'use client'

import { useLanguage } from './LanguageProvider'
import clsx from 'clsx'

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
      {(['fr', 'en'] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className={clsx(
            'px-3 py-1 text-sm font-semibold rounded-full transition-colors',
            locale === code ? 'bg-navy text-white shadow' : 'text-charcoal hover:text-navy'
          )}
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
