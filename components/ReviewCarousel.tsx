'use client'

import reviews from '@/content/data/reviews.json'
import { useLanguage } from './LanguageProvider'

export default function ReviewCarousel() {
  const { locale } = useLanguage()

  return (
    <div className="card carousel">
      <div className="carousel-track">
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="mx-3 my-4 min-w-[260px] max-w-xs flex-none rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-navy">{review.name}</p>
                <p className="text-xs text-slate-500">{review.role}</p>
              </div>
              <div className="text-amber-500">{'★'.repeat(review.rating)}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{review.text[locale]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
