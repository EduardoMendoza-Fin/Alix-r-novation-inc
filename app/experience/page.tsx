'use client'

import { projects } from '@/content/data/projects'
import { useLanguage } from '@/components/LanguageProvider'

export default function ExperiencePage() {
  const { dictionary, locale } = useLanguage()

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.experience}</p>
        <h1 className="text-4xl font-black text-white">{dictionary.experience.title}</h1>
        <p className="max-w-3xl text-lg text-bone/80">{dictionary.experience.description}</p>
      </div>

      <div className="card space-y-4 p-6 bg-gradient-to-br from-charcoal to-ink border-gold/40">
        {dictionary.experience.timeline.map((item) => (
          <div key={item.year} className="flex items-start gap-4">
            <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-gold" />
            <div>
              <p className="text-sm font-semibold text-white">{item.year}</p>
              <p className="text-sm text-bone/70">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-black text-white">{dictionary.experience.projectsTitle}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title.en} className="card overflow-hidden border-gold/30">
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6 space-y-2 bg-gradient-to-b from-charcoal to-ink">
                <h3 className="text-lg font-semibold text-white">{project.title[locale]}</h3>
                <p className="text-sm leading-relaxed text-bone/70">{project.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
