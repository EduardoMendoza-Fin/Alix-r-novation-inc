import Image from 'next/image'
import type { TeamMember } from '@/content/data/team'
import { useLanguage } from './LanguageProvider'

export default function TeamCard({ member }: { member: TeamMember }) {
  const { locale } = useLanguage()
  return (
    <div className="card overflow-hidden border-gold/30">
      <div className="relative h-56 w-full bg-gradient-to-br from-ink to-charcoal">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-2 bg-gradient-to-b from-charcoal to-ink">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm font-medium text-gold uppercase tracking-wide">{member.role[locale]}</p>
        <p className="text-sm text-bone/70 leading-relaxed">{member.bio[locale]}</p>
      </div>
    </div>
  )
}
