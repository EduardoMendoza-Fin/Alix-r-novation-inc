'use client'

import reviews from '@/content/data/reviews.json'
import { useLanguage } from './LanguageProvider'

export default function ReviewCarousel() {
  const { locale } = useLanguage()

  return (
    <div className="card carousel bg-ink border-gold/40">
      <div className="carousel-track">
        {[...reviews.slice(0, 10), ...reviews.slice(0, 10)].map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="mx-3 my-4 min-w-[260px] max-w-xs flex-none rounded-xl border border-gold/30 bg-charcoal px-5 py-4 shadow-lg shadow-black/40 transition hover:-translate-y-1"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-xs uppercase tracking-wide text-gold/80">{review.role}</p>
              </div>
              <div className="text-gold text-sm">{'★'.repeat(review.rating)}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-bone/70">{review.text[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
