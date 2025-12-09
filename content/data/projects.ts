export type Project = {
  slug: string
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  images: string[]
}

export const projects: Project[] = [
  {
    slug: "loft-vieux-montreal",
    title: {
      en: "Old Montréal chicken renovation",
      fr: "Rénovation d'une cuisine au Vieux-Montréal"
    },
    description: {
      en: "Modernized kitchen with custom cabinetry, durable countertops, and upgraded lighting. Perfect for daily use and hosting.",
      fr: "Cuisine modernisée avec armoires sur mesure, comptoirs durables et éclairage amélioré. Parfaite pour le quotidien et la réception."
    },
    images: [
      "/projects/vmtl1.jpg",
      "/projects/vmtl2.jpg",
      "/projects/vmtl3.jpg",
      "/projects/vmtl4.jpg",
      "/projects/vmtl5.jpg"
    ]
  },
  {
    slug: "renovation cuisine laval",
    title: {
      en: "Kitchen renovation in Laval",
      fr: "Rénovation d'une cusine à Laval"
    },
    description: {
      en: "Full transformation with updated work surfaces and professional finishing. A functional and elegant kitchen.",
      fr: "Transformation complète : nouvelles surfaces de travail et finition professionnelle. Une cuisine fonctionnelle et élégante."
    },
    images: [
      "/projects/lavalch1.jpg",
      "/projects/lavalch2.jpg",
      "/projects/lavalch3.jpg",
      "/projects/lavalch4.jpg",
      "/projects/lavalch5.jpg",
    ]
  },
  {
    slug: "Rénovation salle de bain rive sud",
    title: {
      en: "Bathroom renovation on the South Shore",
      fr: "Rénovation d'une salle de bain à la Rive-Sud"
    },
    description: {
      en: "Full remodel featuring modern tiles, upgraded plumbing, and premium finishing. A transformed space built for comfort and elegance.",
      fr: "Rénovation complète avec céramique moderne, nouvelle plomberie et finition haut de gamme. Un espace transformé pour davantage de confort et d’élégance."
    },
    images: [
      "/projects/rvsud1.jpg",
      "/projects/rvsud2.jpg",
      "/projects/rvsud3.jpg",
      "/projects/rvsud4.jpg",
      "/projects/rvsud5.jpg",
      "/projects/rvsud6.jpg",
      "/projects/rvsud7.jpg"
    ]
  },
  {
    slug: "salle-de-bain-plateau",
    title: {
      en: "Bathroom renovation in the Plateau",
      fr: "Rénovation de salle de bain au Plateau"
    },
    description: {
      en: "Bathroom redesigned with a glass shower, recessed lighting, and durable materials. Clean, bright, and highly functional.",
      fr: "Salle de bain repensée avec douche vitrée, éclairage encastré et matériaux durables. Résultat propre, lumineux et fonctionnel."
    },
    images: [
      "/projects/bathroom1.jpg",
      "/projects/bathroom2.jpg",
      "/projects/bathroom3.jpg"
    ]
  },
  {
    slug: "cuisine-rosemont",
    title: {
      en: "Bathroom renovation in Rosemont",
      fr: "Rénovation de salle de bain à Rosemont"
    },
    description: {
      en: "Modern bathroom redesign with tiling, plumbing and lighting upgrades.",
      fr: "Rénovation élégante avec nouvelle douche vitrée, éclairage intégré et rangement sur mesure."
    },
    images: [
      "/projects/rvnr1.jpg",
      "/projects/rvnr2.jpg",
      "/projects/rvnr3.jpg",
      "/projects/rvnr4.jpg",
      "/projects/rvnr5.jpg",
    ]
  },
  {
    slug: "sous-sol -st-laurent",
    title: {
      en: "Basement renovation in St-Laurent",
      fr: "Rénovation d'un sous-sol à Saint-Laurent"
    },
    description: {
      en: "Full basement remodel with insulation, framing, new flooring, and warm lighting. A comfortable, versatile living space.",
      fr: "Réaménagement complet du sous-sol avec isolation, divisions, nouveaux planchers et éclairage chaleureux. Un espace confortable et polyvalent."
    },
    images: [
      "/projects/stla1.jpg",
      "/projects/stla2.jpg",
      "/projects/stla3.jpg",
      "/projects/stla4.jpg",
      "/projects/stla5.jpg",
      "/projects/stla6.jpg"
    ]
  }
]