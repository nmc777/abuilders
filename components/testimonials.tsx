import { Star, Quote } from "lucide-react"

const reviews = [
  {
    quote:
      "Driveway done, just as promised! We are so happy with how quickly this project was completed. What a transformation!",
    name: "Windsor Homeowner",
    role: "Driveway Replacement",
  },
  {
    quote:
      "The team turned our plain garage into something that looks like a showroom. The epoxy floor is gorgeous and easy to clean.",
    name: "Essex County Client",
    role: "Epoxy Garage Floor",
  },
  {
    quote:
      "Professional, on time and fair pricing. Our stamped patio completely changed the backyard. Highly recommend A+ Builders.",
    name: "Local Customer",
    role: "Stamped Patio",
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
            <blockquote key={review.name} className="relative rounded-lg border border-border bg-card p-5 sm:p-6 md:p-7">
              <Quote className="h-6 w-6 text-brand sm:h-8 sm:w-8" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-card-foreground sm:mt-4 md:text-base">{review.quote}</p>
              <footer className="mt-4 border-t border-border pt-3 md:mt-6 md:pt-4">
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-card-foreground sm:text-base">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground md:text-sm">{review.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
