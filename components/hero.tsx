import { profile } from "@/lib/resume-data"
import { buttonVariants } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-12 sm:pt-24">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
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
          {profile.tagline}
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
          <Stat value={profile.experienceYears} label="лет в проде" />
          <Stat value={profile.shipped} label="фич в релизе" />
          <Stat value={profile.uptime} label="мой аптайм" />
        </div>

        <a
          href="#features"
          className="mt-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Смотреть возможности
          <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <p className="font-mono text-xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-xs leading-tight text-muted-foreground">{label}</p>
    </div>
  )
}
