import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ServicesTicker } from "@/components/services-ticker"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesTicker />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
