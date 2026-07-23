import Image from "next/image"
import { Phone, Mail } from "lucide-react"

const services = [
  "Concrete Driveways",
  "Epoxy Garage Floors",
  "Stamped Concrete",
  "Patios & Walkways",
  "Sealing & Coating",
  "Repair & Resurfacing",
]

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:gap-10 md:px-6 md:py-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="A+ Builders Inc logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-sm object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold uppercase tracking-wide sm:text-lg">A+ Builders</span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-[10px]">
                Concrete Specialist
              </span>
            </span>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-foreground/70 sm:mt-4 sm:text-sm">
            Turning plain concrete into stunning, durable surfaces across Windsor & Essex County, Ontario.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/abuilders_inc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A+ Builders on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 transition-colors hover:bg-brand hover:text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/p/Abuilders-100087416740746/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A+ Builders on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 transition-colors hover:bg-brand hover:text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-brand sm:text-sm">Services</h3>
          <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-xs text-ink-foreground/70 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1 sm:text-sm">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-brand sm:text-sm">Company</h3>
          <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-xs text-ink-foreground/70 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1 sm:text-sm">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xs font-bold uppercase tracking-wide text-brand sm:text-sm">Contact</h3>
          <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
            <li>
              <a href="tel:+15198906268" className="flex items-center gap-3 text-xs text-ink-foreground/70 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1 sm:text-sm">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                519-890-6268
              </a>
            </li>
            <li>
              <a
                href="mailto:abuildersinc@hotmail.com"
                className="flex items-center gap-3 text-xs text-ink-foreground/70 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1 sm:text-sm"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                abuildersinc@hotmail.com
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-sm bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-brand sm:mt-5 sm:px-5 sm:py-3 sm:text-sm"
          >
            Free Estimate
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-ink-foreground/60 sm:flex-row md:px-6">
          <p>© {new Date().getFullYear()} A+ Builders. All rights reserved.</p>
          <p>Windsor, Ontario · Concrete Contractor</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeLinecap="round" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5H14z" />
    </svg>
  )
}
