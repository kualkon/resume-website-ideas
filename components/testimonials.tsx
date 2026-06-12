import { testimonials } from "@/lib/resume-data"
import { SectionHeader } from "@/components/features"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader kicker="Отзывы" title="Что говорят те, кто видел код" />

        <div className="mt-8 grid gap-4">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <Quote className="size-5 text-primary/60" />
              <blockquote className="mt-3 text-pretty leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-bold text-primary">
                  {t.author.charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-medium">{t.author}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
