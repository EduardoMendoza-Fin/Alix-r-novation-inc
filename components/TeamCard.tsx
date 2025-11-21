import Image from 'next/image'
import type { TeamMember } from '@/content/data/team'
import { useLanguage } from './LanguageProvider'

export default function TeamCard({ member }: { member: TeamMember }) {
  const { locale } = useLanguage()
  return (
    <div className="card overflow-hidden">
      <div className="relative h-56 w-full bg-slate-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
        <p className="text-sm font-medium text-accent">{member.role[locale]}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{member.bio[locale]}</p>
      </div>
    </div>
  )
}
