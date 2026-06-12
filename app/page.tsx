import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}
