"use client"

import { useEffect, useState } from "react"

const lines = [
  { text: "⚠  КРИТИЧЕСКАЯ ОШИБКА: специалист не найден", color: "text-red-500 font-bold", delay: 200 },
  { text: "✗  резюме устарело... удаление...", color: "text-red-400", delay: 900 },
  { text: "— just kidding. Загружаю настоящего —", color: "text-muted-foreground italic", delay: 1600 },
  { text: "$ git clone kuznietsov.dev", color: "text-muted-foreground", delay: 2200 },
  { text: "Cloning... ████████████ 100%", color: "text-primary", delay: 2900 },
  { text: "✓ 20 years experience loaded", color: "text-green-400", delay: 3500 },
  { text: "✓ field service ready", color: "text-green-400", delay: 4000 },
  { text: "🚀 Ready to ship!", color: "text-primary font-bold", delay: 4600 },
]

export function Loader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState<boolean[]>(new Array(lines.length).fill(false))
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => {
        setVisible(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, line.delay)
    )

    const doneTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(onDone, 600)
    }, 5400)

    return () => { timers.forEach(clearTimeout); clearTimeout(doneTimer) }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card/90 shadow-2xl font-mono text-sm overflow-hidden mx-5">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-yellow-500/70" />
          <span className="size-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-muted-foreground/50 text-xs">kuznietsov@server ~ loading...</span>
        </div>
        <div className="px-4 py-4 space-y-2 min-h-[200px]">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`${line.color} transition-all duration-300 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {line.text}
              {i === lines.length - 1 && visible[i] && (
                <span className="animate-pulse ml-1">█</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
