export type Project = {
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  image: string
}

export const projects: Project[] = [
  {
    title: { en: 'Old Montréal loft redesign', fr: 'Réaménagement d’un loft du Vieux-Montréal' },
    description: {
      en: 'Full interior rebuild with custom millwork, engineered flooring, and acoustic upgrades.',
      fr: 'Reconstruction intérieure complète avec menuiserie sur mesure, planchers d’ingénierie et amélioration acoustique.',
    },
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: { en: 'Laval exterior modernization', fr: 'Modernisation extérieure à Laval' },
    description: {
      en: 'Fiber-cement siding, new roofing, and energy-efficient windows built to endure Québec winters.',
      fr: 'Revêtement en fibrociment, nouvelle toiture et fenêtres écoénergétiques conçues pour nos hivers.',
    },
    image: 'https://images.unsplash.com/photo-1484156818044-c040038b0710?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: { en: 'Downtown café fit-out', fr: 'Aménagement d’un café au centre-ville' },
    description: {
      en: 'Turnkey build including service bar, seating, and code-compliant back-of-house.',
      fr: 'Construction clé en main incluant le bar de service, l’aire clients et l’arrière-boutique conforme aux normes.',
    },
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  }
]
