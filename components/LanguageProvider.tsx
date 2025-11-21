'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from '@/content/i18n/en.json'
import fr from '@/content/i18n/fr.json'

export type Locale = 'en' | 'fr'

const dictionaries = { en, fr } as const

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionary: typeof en
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
    if (stored === 'en' || stored === 'fr') {
      setLocale(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
    }
  }, [locale])

  const dictionary = useMemo(() => dictionaries[locale], [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
