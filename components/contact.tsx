import { profile } from "@/lib/resume-data"
import { buttonVariants } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, FileDown } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-primary/40 bg-card p-7 text-center ring-1 ring-primary/20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Готовы к интеграции?
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight">
            Пригласите {profile.name.split(" ")[0]} в вашу команду
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Деплой возможен уже в этом спринте. Поддержка человеческим языком включена.
          </p>

          <div className="mt-7 grid gap-3">
            <a
              href={profile.resumePdf}
              className={buttonVariants({ size: "lg", className: "h-12 text-base font-semibold" })}
            >
              <FileDown className="size-4" />
              Скачать PDF-резюме
            </a>

            <div className="grid grid-cols-4 gap-3">
              <ContactButton
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                icon={<Phone className="size-5" />}
                label="Позвонить"
              />
              <ContactButton
                href={`mailto:${profile.email}`}
                icon={<Mail className="size-5" />}
                label="Email"
              />
              <ContactButton
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                icon={<MessageCircle className="size-5" />}
                label="WhatsApp"
                external
              />
              <ContactButton
                href={profile.linkedin}
                icon={
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                }
                label="LinkedIn"
                external
              />
            </div>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">
            {profile.phone} · {profile.email}
          </p>
        </div>

        <footer className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            {profile.name} · {profile.product} {profile.version}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            Собрано с любовью и кофе. Все «отзывы» — художественное преувеличение.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/50 border-t border-border pt-4 leading-relaxed">
            Данный сайт — стилизованное резюме. Готов к стандартному найму, трудовому договору и всем обычным HR-процедурам.
          </p>
          <p className="mt-2 text-[11px] text-muted-foreground/35 leading-relaxed">
            📍 Ищу штатную позицию Field IT Engineer | Nürnberg/Bayern | Full-time | Разрешение на работу есть
          </p>
        </footer>
      </div>
    </section>
  )
}

function ContactButton({
  href,
  icon,
  label,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background/40 px-2 py-4 text-xs font-medium text-foreground/90 transition-colors hover:border-primary hover:text-primary"
    >
      {icon}
      {label}
    </a>
  )
}
