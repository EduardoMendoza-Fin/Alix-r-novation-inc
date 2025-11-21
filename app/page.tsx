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
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink px-3 py-1 text-xs font-semibold text-gold">
            RBQ · CCQ · CNESST — Québec
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl">{dictionary.hero.title}</h1>
          <p className="text-lg leading-relaxed text-bone/80">{dictionary.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {dictionary.hero.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gold/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
            >
              {dictionary.hero.secondaryCta}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[15, 250, 5].map((metric, idx) => (
              <div key={metric} className="card p-4 text-center bg-gradient-to-b from-charcoal to-ink">
                <p className="text-3xl font-black text-white">{metric}{idx === 0 ? '+' : ''}</p>
                <p className="text-xs uppercase tracking-wide text-bone/60">
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
        <div className="card relative overflow-hidden border-gold/40 bg-gradient-to-br from-charcoal to-ink p-8">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative space-y-4 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.experience.title}</p>
            <h2 className="text-3xl font-black">{dictionary.experience.years}</h2>
            <p className="text-bone/70 leading-relaxed">{dictionary.experience.description}</p>
            <div className="space-y-3">
              {dictionary.experience.timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-gold" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.year}</p>
                    <p className="text-sm text-bone/70">{item.label}</p>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.services}</p>
            <h2 className="text-3xl font-black text-white">{dictionary.services.title}</h2>
            <p className="text-bone/80">{dictionary.services.subtitle}</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-gold underline">
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
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.experience}</p>
            <h2 className="text-3xl font-black text-white">{dictionary.experience.projectsTitle}</h2>
          </div>
          <Link href="/experience" className="text-sm font-semibold text-gold underline">
            {dictionary.hero.primaryCta}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title.en} className="card overflow-hidden border-gold/30">
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-5 space-y-2 bg-gradient-to-b from-charcoal to-ink">
                <h3 className="text-lg font-semibold text-white">{project.title[locale]}</h3>
                <p className="text-sm text-bone/70 leading-relaxed">{project.description[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container space-y-6" id="reviews">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.reviews}</p>
          <h2 className="text-3xl font-black text-white">{dictionary.reviews.title}</h2>
          <p className="text-bone/80">{dictionary.reviews.subtitle}</p>
        </div>
        <ReviewCarousel />
      </section>

      <section className="section-container space-y-6" id="team">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.team}</p>
            <h2 className="text-3xl font-black text-white">{dictionary.team.title}</h2>
            <p className="text-bone/80">{dictionary.team.subtitle}</p>
          </div>
          <Link href="/team" className="text-sm font-semibold text-gold underline">
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
        <div className="card flex flex-col gap-4 overflow-hidden bg-gradient-to-r from-ink via-charcoal to-ink px-8 py-10 text-white md:flex-row md:items-center md:justify-between border-gold/50">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">RBQ • CCQ • CNESST</p>
            <h3 className="text-2xl font-black">{dictionary.footer.cta}</h3>
            <p className="text-bone/70">{dictionary.contact.subtitle}</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/40 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </section>
    </div>
  )
}
