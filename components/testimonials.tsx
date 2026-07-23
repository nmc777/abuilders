import Image from "next/image"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Christina Marie",
    quote: "Very satisfied customer! Very professional and hard working! Fast replies! Amazing communication! Definitely recommend this company! 5 stars",
    date: "August 23, 2025",
    image: "/images/review-christina.jpg",
  },
  {
    name: "Rick Cosyn",
    quote: "Very good work. On time and very fair pricing. Highly recommended.",
    date: "April 21",
    image: "/images/review-rick.jpg",
  },
  {
    name: "Tina Vance",
    quote: "Absolutely amazing to work with. Very professional! We are definitely one happy customer 😊 our driveway and walkway look incredible! 100% recommend A+ Builders in company! 5 stars!",
    date: "August 23, 2025",
    image: "/images/review-tina.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">Reviews</p>
          <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-balance sm:text-3xl md:text-5xl">
            What our customers say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-brand text-brand sm:h-5 sm:w-5" />
              ))}
            </div>
            <span className="text-xs font-semibold text-muted-foreground sm:text-sm">100% recommend (5 reviews)</span>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="relative rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] relative bg-muted">
                <p className="p-4 text-sm leading-relaxed text-card-foreground h-full flex flex-col justify-between">
                  <span>
                    <div className="flex gap-1 mb-3">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
                      ))}
                    </div>
                    "{review.quote}"
                  </span>
                  <footer className="border-t border-border pt-3">
                    <p className="font-heading text-xs font-bold uppercase tracking-wide text-card-foreground">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{review.date}</p>
                  </footer>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
