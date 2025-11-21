'use client'

import ServiceCard from '@/components/ServiceCard'
import { useLanguage } from '@/components/LanguageProvider'

const serviceIcons = ['🛠️', '🏠', '📋', '🪚', '🏢', '⚡']

export default function ServicesPage() {
  const { dictionary } = useLanguage()

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.services}</p>
        <h1 className="text-4xl font-black text-navy">{dictionary.services.title}</h1>
        <p className="max-w-3xl text-lg text-slate-700">{dictionary.services.subtitle}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dictionary.services.list.map((service, index) => (
          <ServiceCard
            key={service.name}
            icon={serviceIcons[index % serviceIcons.length]}
            title={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}
