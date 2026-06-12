import { features, skills } from "@/lib/resume-data"
import { Check } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader
          kicker="Возможности"
          title="Что входит в стандартную поставку"
        />

        <div className="mt-8 grid gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                  <p className="mt-2 font-mono text-xs text-primary/80">
                    {f.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Поддерживаемые технологии
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  kicker,
  title,
}: {
  kicker: string
  title: string
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {kicker}
      </p>
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}
