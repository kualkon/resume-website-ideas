"use client"

import { profile } from "@/lib/resume-data"
import { buttonVariants } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-6 pb-12 sm:pt-10">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="relative mx-auto max-w-md text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {profile.status}
        </div>

        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {profile.product} {profile.version}
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          <TypewriterText text={profile.tagline} />
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {profile.subtitle}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={profile.resumePdf}
            className={buttonVariants({ size: "lg", className: "h-12 text-base font-semibold" })}
          >
            <Sparkles className="size-4" />
            Начать бесплатный пробный период
          </a>
          <p className="text-xs text-muted-foreground">
            Без карты. Без скрытых платежей. Испытательный срок по договорённости.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 text-left">
          <Stat value={profile.experienceYears} label="лет в IT-сфере" />
          <Stat value={profile.shipped} label="решений и проектов" />
          <Stat value={profile.uptime} label="мой аптайм" />
        </div>

        <a
          href="#features"
          className="mt-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Смотреть возможности
          <ArrowDown className="size-3.5 animate-bounce" />
        </a>
      </div>

      <style>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .orb-1 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #10b981, transparent 70%);
          top: -100px; left: -100px;
          animation: float1 8s ease-in-out infinite;
        }
        .orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #6366f1, transparent 70%);
          top: 50px; right: -80px;
          animation: float2 10s ease-in-out infinite;
        }
        .orb-3 {
          width: 250px; height: 250px;
          background: radial-gradient(circle, #10b981, transparent 70%);
          bottom: -50px; left: 50%;
          animation: float3 7s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(0.9); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, -20px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)
  const i = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (i.current < text.length) {
        setDisplayed(text.slice(0, i.current + 1))
        i.current++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [text])

  return (
    <>
      {displayed}
      {!done && <span className="animate-pulse">|</span>}
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const num = parseInt(value)
    if (isNaN(num)) { setCount(value); return }
    const suffix = value.replace(/[0-9]/g, "")

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        let start = 0
        const step = Math.ceil(num / 40)
        const timer = setInterval(() => {
          start = Math.min(start + step, num)
          setCount(start + suffix)
          if (start >= num) clearInterval(timer)
        }, 30)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="rounded-xl border border-border bg-card p-3">
      <p className="font-mono text-xl font-bold text-primary">{count}</p>
      <p className="mt-1 text-xs leading-tight text-muted-foreground">{label}</p>
    </div>
  )
}
