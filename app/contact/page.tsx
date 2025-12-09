'use client'

import ContactForm from '@/components/ContactForm'
import { useLanguage } from '@/components/LanguageProvider'

export default function ContactPage() {
  const { dictionary } = useLanguage()

  return (
    <div className="section-container space-y-8 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.contact}</p>
        <h1 className="text-4xl font-black text-white">{dictionary.contact.title}</h1>
        <p className="max-w-3xl text-lg text-bone/80">{dictionary.contact.subtitle}</p>
      </div>
      <ContactForm />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Montréal, Rive-Nord & Rive-Sud', detail: 'Déplacements rapides pour visites et urgences.' },
          { label: 'RBQ 5837-4190-01 • RBQ: 5860-4190-01', detail: 'Assurances responsabilité civile.' },
          { label: 'Disponibilité', detail: 'Réponse en 24h ouvrables.' },
        ].map((item) => (
          <div key={item.label} className="card p-4 bg-gradient-to-b from-charcoal to-ink border-gold/30">
            <p className="text-sm font-semibold text-white">{item.label}</p>
            <p className="text-sm text-bone/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
