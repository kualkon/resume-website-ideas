import { tiers } from "@/lib/resume-data"
import { SectionHeader } from "@/components/features"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader
          kicker="Тарифы"
          title="Выберите свой уровень (но он уже выбран)"
        />


        <div className="mt-8 grid gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative rounded-2xl border p-5 transition-colors",
                tier.highlighted
                  ? "border-primary bg-card ring-1 ring-primary"
                  : "border-border bg-card opacity-70",
              )}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {tier.badge}
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <div className="text-right">
                  <span className="font-mono text-sm text-muted-foreground">
                    {tier.price}
                  </span>{" "}
                  <span className="font-mono text-sm font-semibold text-primary">
                    {tier.period}
                  </span>
                </div>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <ul className="mt-4 grid gap-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        tier.highlighted
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          План «Enterprise» — звоните, договоримся.
        </p>
      </div>
    </section>
  )
}
