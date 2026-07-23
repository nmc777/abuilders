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
    <section id="reviews" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Reviews</p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-balance md:text-5xl">
            What our customers say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" />
              ))}
            </div>
            <span className="text-sm font-semibold text-muted-foreground">100% recommend (5 reviews)</span>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="relative rounded-lg border border-border bg-card p-7">
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 leading-relaxed text-card-foreground">{review.quote}</p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-heading font-bold uppercase tracking-wide text-card-foreground">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
