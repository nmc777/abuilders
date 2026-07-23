import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "All finishes available — from smooth to decorative",
  "Free, no-obligation estimates",
  "Fast turnaround, clean job sites",
  "Built to survive Windsor winters",
]

export function About() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/job-commercial-1.png"
              alt="A+ Builders crew on site with a freshly finished concrete pour"
              width={720}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-ink px-8 py-6 text-ink-foreground shadow-xl sm:block">
            <p className="font-heading text-4xl font-bold text-brand">100%</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-foreground/80">
              Customer recommended
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Who We Are</p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-balance md:text-5xl">
            Concrete done right, the first time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A+ Builders is a Windsor-based concrete coating and contracting team specializing in
            driveways, garages, patios and decorative surfaces. We take plain, worn concrete and
            transform it into finishes that look incredible and hold up for years.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether it's a brand-new driveway or a garage floor makeover, we treat every project like
            it's our own home — with honest pricing and workmanship you can stand on.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
