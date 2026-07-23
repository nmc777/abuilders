"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-ink"
          aria-label="A+ Builders home"
        >
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
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-ink-foreground/80 transition-colors hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+15198906268"
            className="flex items-center gap-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand rounded-sm px-2 py-1"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            519-890-6268
          </a>
          <a
            href="#contact"
            className="rounded-sm bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-brand"
          >
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-sm p-2 text-ink-foreground lg:hidden focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 lg:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 px-2 text-sm font-semibold uppercase tracking-wide text-ink-foreground/85 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-inset rounded-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 rounded-sm bg-brand px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-brand-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ink focus:ring-brand"
            >
              Free Estimate
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
