import Link from "next/link"
import { Truck, Sparkles, Layers, Ruler, Droplets, Hammer, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Concrete Driveways",
    desc: "New pours and full replacements with crisp edges and a durable, weather-ready finish.",
    slug: "concrete-driveways",
  },
  {
    icon: Sparkles,
    title: "Commercial Concrete",
    desc: "Large-format slabs, pads and floors for shops, farms and commercial buildings.",
    slug: "commercial-concrete",
  },
  {
    icon: Layers,
    title: "Stamped & Decorative",
    desc: "Stamped patterns and colors that mimic stone, brick and slate for patios and walkways.",
    slug: "stamped-decorative",
  },
  {
    icon: Ruler,
    title: "Patios & Walkways",
    desc: "Custom patios, steps and pathways designed to fit your yard and lifestyle.",
    slug: "patios-walkways",
  },
  {
    icon: Droplets,
    title: "Sealing & Coating",
    desc: "Protective sealers and coatings that lock out moisture, salt and Ontario winters.",
    slug: "sealing-coating",
  },
  {
    icon: Hammer,
    title: "Repair & Resurfacing",
    desc: "Bring cracked or worn concrete back to life with expert repair and resurfacing.",
    slug: "repair-resurfacing",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ink py-16 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">What We Do</p>
          <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-balance sm:text-3xl md:text-5xl">
            Complete concrete solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            From the ground up or a fresh coat over the old — we handle every kind of concrete surface
            for homes and businesses across Windsor-Essex.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-12 md:gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand focus-within:border-brand md:p-7 block focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-wide md:mt-5 md:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70 md:text-base">{service.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
