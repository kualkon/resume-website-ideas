"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Loader } from "@/components/loader"

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <main
        className={`min-h-dvh bg-background transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </>
  )
}
