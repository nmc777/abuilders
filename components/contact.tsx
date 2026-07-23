"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Check } from "lucide-react"

const details = [
  { icon: Phone, label: "Call or Text", value: "519-890-6268", href: "tel:+15198906268" },
  { icon: Mail, label: "Email", value: "abuildersinc@hotmail.com", href: "mailto:abuildersinc@hotmail.com" },
  { icon: MapPin, label: "Service Area", value: "Windsor & Essex County, ON", href: undefined },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Get In Touch</p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-balance md:text-5xl">
            Request a free estimate
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-foreground/75">
            Tell us about your project and we'll get back to you fast with honest, upfront pricing.
            Free, no-obligation quotes across Windsor-Essex.
          </p>

          <ul className="mt-10 space-y-5">
            {details.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-foreground/60">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-lg font-bold hover:text-brand">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-bold">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-card p-6 text-card-foreground md:p-8">
          {submitted ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Check className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold uppercase">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">
                We've received your request and will be in touch shortly. For anything urgent, call{" "}
                <a href="tel:+15198906268" className="font-semibold text-foreground underline">
                  519-890-6268
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="519-000-0000" required />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                >
                  <option>Driveway</option>
                  <option>Epoxy Garage Floor</option>
                  <option>Stamped / Decorative Concrete</option>
                  <option>Patio / Walkway</option>
                  <option>Repair / Resurfacing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-brand px-6 py-4 text-sm font-bold uppercase tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Request My Free Estimate
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </div>
  )
}
