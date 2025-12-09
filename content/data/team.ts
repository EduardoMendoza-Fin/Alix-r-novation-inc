export type LocalizedText = {
  en: string
  fr: string
}

export type TeamMember = {
  name: string
  role: LocalizedText
  bio: LocalizedText
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Alexandre Lavoie',
    role: { en: 'Founder & Project Director', fr: 'Fondateur et directeur de projet' },
    bio: {
      en: '20+ years supervising residential and commercial builds with a focus on client communication.',
      fr: 'Plus de 20 ans à superviser des chantiers résidentiels et commerciaux avec une communication client exemplaire.',
    },
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mélanie Gagnon',
    role: { en: 'Lead Designer', fr: 'Designer principale' },
    bio: {
      en: 'Transforms plans into elegant layouts and ensures finishes match the vision.',
      fr: 'Transforme les plans en aménagements élégants et veille à la qualité des finis.',
    },
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Samuel Tremblay',
    role: { en: 'Site Superintendent', fr: 'Surintendant de chantier' },
    bio: {
      en: 'Coordinates crews, schedules, and safety to keep every site running smoothly.',
      fr: 'Coordonne les équipes, les horaires et la sécurité pour assurer la fluidité des chantiers.',
    },
    image: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=800&q=80',
  },
]
