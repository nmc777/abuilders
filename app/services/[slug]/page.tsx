import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const services: Record<string, {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  gallery: string[]
}> = {
  "concrete-driveways": {
    title: "Concrete Driveways",
    subtitle: "New pours and full replacements with crisp edges and a durable, weather-ready finish.",
    description: "Your driveway is one of the most visible parts of your home. A+ Builders specializes in creating beautiful, durable concrete driveways that enhance your property's curb appeal while standing up to Ontario's harsh winters.",
    image: "/images/job-driveway-modern.png",
    features: [
      "Professional site preparation and leveling",
      "High-quality concrete mix for durability",
      "Crisp, clean edges and finishing",
      "Weather-resistant and freeze-thaw protection",
      "Multiple finish options available",
      "Fast turnaround times",
    ],
    gallery: [
      "/images/job-driveway-modern.png",
      "/images/job-driveway-brick.png",
      "/images/new-driveway.png",
    ],
  },
  "commercial-concrete": {
    title: "Commercial Concrete",
    subtitle: "Large-format slabs, pads and floors for shops, farms and commercial buildings.",
    description: "From warehouse floors to commercial pads, A+ Builders handles large-scale concrete projects with precision and professionalism. We understand the demands of commercial spaces and deliver results that last.",
    image: "/images/job-commercial-1.png",
    features: [
      "Large-format slab expertise",
      "Commercial-grade materials",
      "Minimal downtime installation",
      "Professional project management",
      "Heavy-duty durability",
      "Custom specifications available",
    ],
    gallery: [
      "/images/job-commercial-1.png",
      "/images/job-commercial-2.png",
    ],
  },
  "stamped-decorative": {
    title: "Stamped & Decorative Concrete",
    subtitle: "Stamped patterns and colors that mimic stone, brick and slate for patios and walkways.",
    description: "Transform your outdoor spaces with decorative concrete that looks like high-end materials at a fraction of the cost. Our stamped concrete options include patterns mimicking stone, brick, slate, and more.",
    image: "/images/job-stamped-patio.png",
    features: [
      "Multiple pattern options",
      "Custom color choices",
      "Stone/brick/slate mimics",
      "Sealed for protection",
      "Long-lasting beauty",
      "Perfect for patios and walkways",
    ],
    gallery: [
      "/images/job-stamped-patio.png",
      "/images/stamped-patio.png",
    ],
  },
  "patios-walkways": {
    title: "Patios & Walkways",
    subtitle: "Custom patios, steps and pathways designed to fit your yard and lifestyle.",
    description: "Create the perfect outdoor entertaining space with a custom patio from A+ Builders. From simple concrete pads to elaborate stamped designs, we'll build exactly what you envision.",
    image: "/images/job-deck-patio.png",
    features: [
      "Custom design options",
      "Multiple style choices",
      "Professional installation",
      "Weather-resistant finishes",
      "ADA-compliant walkways available",
      "Safe, durable surfaces",
    ],
    gallery: [
      "/images/job-deck-patio.png",
      "/images/job-stamped-patio.png",
    ],
  },
  "sealing-coating": {
    title: "Sealing & Coating",
    subtitle: "Protective sealers and coatings that lock out moisture, salt and Ontario winters.",
    description: "Protect your concrete investment with professional sealing and coating services. Our products lock out moisture and salt while enhancing the appearance of your concrete surfaces.",
    image: "/images/epoxy-garage.png",
    features: [
      "Moisture protection",
      "Salt and de-icer resistance",
      "Enhanced appearance",
      "UV protection",
      "Long-lasting durability",
      "Multiple finish options",
    ],
    gallery: [
      "/images/epoxy-garage.png",
      "/images/polished-floor.png",
    ],
  },
  "repair-resurfacing": {
    title: "Repair & Resurfacing",
    subtitle: "Bring cracked or worn concrete back to life with expert repair and resurfacing.",
    description: "Don't replace that concrete yet. Our repair and resurfacing services can bring old, damaged concrete back to life at a fraction of replacement cost.",
    image: "/images/finishing-work.png",
    features: [
      "Crack repair and filling",
      "Surface resurfacing",
      "Concrete restoration",
      "Cost-effective alternative to replacement",
      "Expert diagnostics",
      "Professional results",
    ],
    gallery: [
      "/images/finishing-work.png",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug]
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }
  return {
    title: `${service.title} | A+ Builders`,
    description: service.subtitle,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]

  if (!service) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-32">
            <h1 className="text-4xl font-bold">Service Not Found</h1>
            <p className="mt-4 text-muted-foreground">The service you're looking for doesn't exist.</p>
            <a href="#services" className="mt-8 inline-block bg-brand px-6 py-3 font-bold text-brand-foreground">
              Back to Services
            </a>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-ink text-ink-foreground py-20 md:py-32">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="absolute inset-0 -z-10 object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-balance sm:text-5xl md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/80">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background py-16 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">What's Included</p>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-balance md:text-4xl">
                Why Choose A+ Builders
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-base leading-relaxed text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {service.gallery.length > 0 && (
          <section className="bg-ink py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="mb-12">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand md:text-sm">Gallery</p>
                <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-balance text-ink-foreground md:text-4xl">
                  Recent Projects
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.gallery.map((image, i) => (
                  <figure key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${service.title} project ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section id="contact" className="bg-brand py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="font-heading text-3xl font-bold uppercase text-brand-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-base text-brand-foreground/90 md:text-lg">
              Request your free estimate today. We'll assess your project and provide honest, upfront pricing.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-sm bg-brand-foreground px-8 py-4 font-bold uppercase tracking-wide text-brand transition-transform hover:-translate-y-0.5"
            >
              Free Estimate
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
