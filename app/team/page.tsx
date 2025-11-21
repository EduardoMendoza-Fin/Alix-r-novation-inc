'use client'

import TeamCard from '@/components/TeamCard'
import { teamMembers } from '@/content/data/team'
import { useLanguage } from '@/components/LanguageProvider'

export default function TeamPage() {
  const { dictionary } = useLanguage()

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.team}</p>
        <h1 className="text-4xl font-black text-navy">{dictionary.team.title}</h1>
        <p className="max-w-3xl text-lg text-slate-700">{dictionary.team.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
