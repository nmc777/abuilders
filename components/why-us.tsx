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
    <section id="why-us" className="bg-secondary py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">Why A+ Builders</p>
          <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-balance sm:text-3xl md:text-5xl">
            Built on quality &amp; trust
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12 md:gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-card p-5 text-center shadow-sm sm:p-6 md:p-7">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground sm:h-14 sm:w-14">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-wide text-card-foreground sm:mt-5 sm:text-lg">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
