'use client'

import ReviewCarousel from '@/components/ReviewCarousel'
import reviews from '@/content/data/reviews.json'
import { useLanguage } from '@/components/LanguageProvider'

export default function ReviewsPage() {
  const { dictionary, locale } = useLanguage()

  return (
    <div className="section-container space-y-10 py-12">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{dictionary.nav.reviews}</p>
        <h1 className="text-4xl font-black text-navy">{dictionary.reviews.title}</h1>
        <p className="max-w-3xl text-lg text-slate-700">{dictionary.reviews.subtitle}</p>
      </div>

      <ReviewCarousel />

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.name} className="card space-y-3 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-navy">{review.name}</p>
                <p className="text-xs text-slate-500">{review.role}</p>
              </div>
              <div className="text-amber-500">{'★'.repeat(review.rating)}</div>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">{review.text[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
