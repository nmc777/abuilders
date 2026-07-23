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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
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
              <span className="font-heading text-lg font-bold uppercase tracking-wide">A+ Builders</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                Concrete Specialist
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">
            Turning plain concrete into stunning, durable surfaces across Windsor & Essex County, Ontario.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/abuilders_inc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A+ Builders on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/p/Abuilders-100087416740746/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A+ Builders on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-ink-foreground/70 hover:text-brand">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-ink-foreground/70 hover:text-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="tel:+15198906268" className="flex items-center gap-3 text-sm hover:text-brand">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                519-890-6268
              </a>
            </li>
            <li>
              <a
                href="mailto:abuildersinc@hotmail.com"
                className="flex items-center gap-3 text-sm hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                abuildersinc@hotmail.com
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-sm bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-foreground"
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
