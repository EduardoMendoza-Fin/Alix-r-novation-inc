'use client'

import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ReviewCarousel from '@/components/ReviewCarousel'
import TeamCard from '@/components/TeamCard'
import { useLanguage } from '@/components/LanguageProvider'
import { teamMembers } from '@/content/data/team'
import { projects } from '@/content/data/projects'

const serviceIcons = ['🛠️', '🏠', '📋', '🪚', '🏢', '⚡']

export default function HomePage() {
  const { dictionary, locale } = useLanguage()

  return (
    <div className="space-y-16 pb-16">
      <section className="section-container grid gap-10 pb-6 pt-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-navy">
            RBQ · CCQ · CNESST — Québec
          </div>
          <h1 className="text-4xl font-black text-navy sm:text-5xl">{dictionary.hero.title}</h1>
          <p className="text-lg leading-relaxed text-slate-700">{dictionary.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {dictionary.hero.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-navy hover:text-white"
            >
              {dictionary.hero.secondaryCta}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[15, 250, 5].map((metric, idx) => (
              <div key={metric} className="card p-4 text-center">
                <p className="text-3xl font-black text-navy">{metric}{idx === 0 ? '+' : ''}</p>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {idx === 0
                    ? 'Ans'
                    : idx === 1
                    ? 'Chantiers livrés'
                    : 'Équipes dédiées'}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="card relative overflow-hidden border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />
          <div className="relative space-y-4 text-navy">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.experience.title}</p>
            <h2 className="text-3xl font-black">{dictionary.experience.years}</h2>
            <p className="text-slate-700 leading-relaxed">{dictionary.experience.description}</p>
            <div className="space-y-3">
              {dictionary.experience.timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.year}</p>
                    <p className="text-sm text-slate-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container space-y-8" id="services">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.services}</p>
            <h2 className="text-3xl font-black text-navy">{dictionary.services.title}</h2>
            <p className="text-slate-700">{dictionary.services.subtitle}</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-navy underline">
            {dictionary.hero.primaryCta}
          </Link>
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
      </section>

      <section className="section-container space-y-6" id="experience">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.experience}</p>
            <h2 className="text-3xl font-black text-navy">{dictionary.experience.projectsTitle}</h2>
          </div>
          <Link href="/experience" className="text-sm font-semibold text-navy underline">
            {dictionary.hero.primaryCta}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title.en} className="card overflow-hidden">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-navy">{project.title[locale]}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{project.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container space-y-6" id="reviews">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.reviews}</p>
          <h2 className="text-3xl font-black text-navy">{dictionary.reviews.title}</h2>
          <p className="text-slate-700">{dictionary.reviews.subtitle}</p>
        </div>
        <ReviewCarousel />
      </section>

      <section className="section-container space-y-6" id="team">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.team}</p>
            <h2 className="text-3xl font-black text-navy">{dictionary.team.title}</h2>
            <p className="text-slate-700">{dictionary.team.subtitle}</p>
          </div>
          <Link href="/team" className="text-sm font-semibold text-navy underline">
            {dictionary.nav.team}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="card flex flex-col gap-4 overflow-hidden bg-gradient-to-r from-navy to-slate-900 px-8 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">RBQ • CCQ • CNESST</p>
            <h3 className="text-2xl font-black">{dictionary.footer.cta}</h3>
            <p className="text-slate-200">{dictionary.contact.subtitle}</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
