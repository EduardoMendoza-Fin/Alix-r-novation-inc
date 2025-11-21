'use client'

import TeamCard from '@/components/TeamCard'
import { teamMembers } from '@/content/data/team'
import { useLanguage } from '@/components/LanguageProvider'

export default function TeamPage() {
  const { dictionary, locale } = useLanguage()

  const founderBio = {
    fr: "Entrepreneur général, orchestrant la planification, la structure et les finitions pour des projets résidentiels et commerciaux haut de gamme à travers le Québec.",
    en: 'General contractor leading planning, structure, and finishes for luxury residential and commercial builds across Québec.',
  }

  const teamNote = {
    fr: 'Remplacez cette zone par une photo de groupe en haute résolution pour montrer la cohésion de vos équipes sur le terrain.',
    en: 'Replace this area with a high-resolution team photo to showcase the cohesion of your crews on site.',
  }

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.team}</p>
        <h1 className="text-4xl font-black text-white">{dictionary.team.title}</h1>
        <p className="max-w-3xl text-lg text-bone/80">{dictionary.team.subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-8 space-y-4 bg-gradient-to-br from-charcoal to-ink border-gold/40">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.team.founderTitle}</p>
          <div className="grid gap-6 sm:grid-cols-[1fr,1.3fr] sm:items-center">
            <div className="h-48 rounded-xl border border-dashed border-gold/50 bg-ink/60" aria-label="Portrait placeholder">
              <div className="flex h-full items-center justify-center text-bone/60 text-xs uppercase tracking-[0.2em]">
                Photo du fondateur / Founder photo
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Alexandre Roy</h3>
              <p className="text-bone/70 leading-relaxed">{founderBio[locale]}</p>
            </div>
          </div>
        </div>

        <div className="card p-8 space-y-4 bg-gradient-to-br from-ink to-charcoal border-gold/40">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.team.ourTeamTitle}</p>
          <div className="h-56 rounded-xl border border-gold/50 bg-ink/60" aria-label="Team photo placeholder">
            <div className="flex h-full items-center justify-center text-bone/60 text-xs uppercase tracking-[0.2em]">
              Photo d’équipe / Team photo
            </div>
          </div>
          <p className="text-bone/70 leading-relaxed">{teamNote[locale]}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
