import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <Image
        src="/images/job-driveway-modern.png"
        alt="Freshly poured concrete driveway by A+ Builders at a modern Windsor home"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-48">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand md:text-sm">
            <span className="h-px w-6 bg-brand md:w-8" />
            Windsor, Ontario
          </div>

          <h1 className="font-heading text-3xl font-bold uppercase leading-[0.95] text-balance sm:text-4xl md:text-7xl">
            Transforming concrete,
            <br />
            <span className="text-brand">one surface at a time</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-foreground/80 md:mt-6 md:text-lg">
            A+ Builders turns plain, tired concrete into stunning, durable surfaces. Driveways, patios,
            walkways, stamped and decorative finishes — built to last through every Ontario winter.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-brand sm:px-7 sm:py-4 sm:text-sm"
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-5 py-3 text-xs font-bold uppercase tracking-wide text-ink-foreground transition-colors hover:border-brand hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand sm:px-7 sm:py-4 sm:text-sm"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" />
              ))}
            </div>
            <p className="text-sm text-ink-foreground/75">
              <span className="font-bold text-ink-foreground">100% recommended</span> by our customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
