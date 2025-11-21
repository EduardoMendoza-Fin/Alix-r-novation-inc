import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl text-navy">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
