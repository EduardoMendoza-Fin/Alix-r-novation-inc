'use client'

import ReviewCarousel from '@/components/ReviewCarousel'
import reviews from '@/content/data/reviews.json'
import { useLanguage } from '@/components/LanguageProvider'

export default function ReviewsPage() {
  const { dictionary, locale } = useLanguage()

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold">{dictionary.nav.reviews}</p>
        <h1 className="text-4xl font-black text-white">{dictionary.reviews.title}</h1>
        <p className="max-w-3xl text-lg text-bone/80">{dictionary.reviews.subtitle}</p>
      </div>

      <ReviewCarousel />

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.name} className="card space-y-3 p-6 bg-gradient-to-br from-charcoal to-ink border-gold/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{review.name}</p>
                <p className="text-xs uppercase tracking-wide text-gold/80">{review.role}</p>
              </div>
              <div className="text-gold">{'★'.repeat(review.rating)}</div>
            </div>
            <p className="text-sm leading-relaxed text-bone/70">{review.text[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
