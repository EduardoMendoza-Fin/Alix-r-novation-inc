import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="card p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-ink text-2xl text-gold shadow-inner">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-bone/70 leading-relaxed">{description}</p>
    </div>
  )
}
