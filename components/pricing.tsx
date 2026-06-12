"use client"

import { SectionHeader } from "@/components/features"
import { Zap, Clock, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function SalaryTicker() {
  const [count, setCount] = useState(0)
  const [blink, setBlink] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const target = 2500
        const duration = 1800
        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">KUZN · SALARY</p>
        <div className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-2.5 py-1">
          <TrendingUp className="size-3 text-green-400" />
          <span className="font-mono text-xs text-green-400">+20 YRS</span>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="font-mono text-4xl font-bold text-green-400 tabular-nums">
          {count.toLocaleString("de-DE")}
        </span>
        <span className="font-mono text-xl font-bold text-green-400">€</span>
        <span className={`font-mono text-2xl font-bold text-green-400 transition-opacity ${blink ? "opacity-100" : "opacity-0"}`}>▌</span>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="font-mono text-xs text-muted-foreground">/ месяц брутто · от</span>
        <span className="font-mono text-xs text-green-400/70">↑ открыт к переговорам</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
        {[
          { label: "ФОРМАТ", value: "Full-time" },
          { label: "РЕЖИМ", value: "Hybrid OK" },
          { label: "СТАТУС", value: "OPEN" },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="font-mono text-[10px] text-muted-foreground/60">{label}</p>
            <p className={`font-mono text-xs font-semibold ${value === "OPEN" ? "text-green-400" : "text-foreground"}`}>{value}</p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Полная занятость. Готов к переговорам — главное, чтобы задачи были интересными.
      </p>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader
          kicker="Условия"
          title="Зарплатные ожидания"
        />

        <div className="mt-8 grid gap-4">
          <SalaryTicker />

          {/* Шуточный блок срочности */}
          <div className="rounded-2xl border border-primary bg-card ring-1 ring-primary overflow-hidden">
            <div className="bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
              🔥 Ограниченное предложение
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Будьте первыми</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Экземпляр в единственном числе. Очередь уже формируется. Ранние партнёры получают повышенный приоритет в поддержке и лучший кофе на онбординге.*
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5">
                <Clock className="size-4 shrink-0 text-primary" />
                <p className="font-mono text-xs text-primary whitespace-nowrap">
                  Доступность: ограничена · Открыт к офферам
                </p>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/60">
                * кофе за свой счёт
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
