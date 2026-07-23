import { ShieldCheck, Clock, Paintbrush, Phone } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Durable Results",
    desc: "Finishes engineered to resist cracks, salt and freeze-thaw cycles year after year.",
  },
  {
    icon: Paintbrush,
    title: "All Finishes",
    desc: "Smooth, stamped, polished, epoxy or exposed aggregate — whatever look you want.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Projects finished quickly and exactly as promised, with a tidy site at the end.",
  },
  {
    icon: Phone,
    title: "Free Estimates",
    desc: "Honest, upfront pricing. Call or text and we'll get you a quote fast.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Why A+ Builders</p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-balance md:text-5xl">
            Built on quality &amp; trust
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-card p-7 text-center shadow-sm">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-wide text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
