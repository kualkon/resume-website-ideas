import { faq } from "@/lib/resume-data"
import { SectionHeader } from "@/components/features"

export function Faq() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader kicker="FAQ" title="Частые вопросы рекрутеров" />

        <div className="mt-8 grid gap-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 font-medium">
                {item.q}
                <span className="font-mono text-lg text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
