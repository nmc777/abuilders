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
    <section className="bg-background py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:gap-12 md:grid-cols-2 md:px-6">
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
          <div className="absolute -bottom-4 -right-2 hidden rounded-lg bg-ink px-6 py-4 text-ink-foreground shadow-xl sm:-bottom-6 sm:-right-4 sm:px-8 sm:py-6">
            <p className="font-heading text-3xl font-bold text-brand sm:text-4xl">100%</p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-foreground/80 sm:text-xs">
              Customer recommended
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">Who We Are</p>
          <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-balance sm:text-3xl md:text-5xl">
            Concrete done right, the first time
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg">
            A+ Builders is a Windsor-based concrete coating and contracting team specializing in
            driveways, garages, patios and decorative surfaces. We take plain, worn concrete and
            transform it into finishes that look incredible and hold up for years.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:mt-4">
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
