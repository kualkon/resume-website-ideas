"use client"

import { useEffect, useRef, useState } from "react"
import { profile, skills } from "@/lib/resume-data"
import { Phone, Mail, MessageCircle, FileDown, MapPin } from "lucide-react"

export function ClassicResume() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-blue-600 py-2 text-center text-sm font-medium text-white">
        Ищу полную занятость · IT Support · System Administration · Network Engineering · Technical Support
      </div>

      <main className="mx-auto max-w-2xl px-5 pb-20">
        {/* Hero */}
        <section className="py-12 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <img
              src="/avatar.png"
              alt={profile.name}
              className="size-32 rounded-full object-cover object-top ring-4 ring-blue-600/30 shadow-lg avatar-float"
            />
            <span className="absolute bottom-1 right-1 size-4 rounded-full bg-green-500 ring-2 ring-background" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-lg text-blue-500 font-medium">IT-специалист выездного обслуживания · Системный инженер</p>

          <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            <span>Nürnberg, Bayern · Разрешение на работу есть</span>
          </div>

          <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
            20 лет практического опыта в полевом IT-обслуживании. Диагностика, инфраструктура, сети — от ноутбука до серверной. Спокойно работаю в дедлайн и умею объяснять технические вещи нетехническим людям.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={profile.resumePdf}
              download="Oleksandr_Kuznietsov_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              <FileDown className="size-4" />
              Скачать резюме PDF
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-blue-500 transition-colors"
            >
              <Mail className="size-4" />
              Написать
            </a>
          </div>

          {/* About */}
          <div className="mt-5 w-full rounded-xl border border-blue-600/30 bg-card px-5 py-4 text-left text-sm text-muted-foreground leading-relaxed">
            Люблю сложные задачи — именно они дают рост. Быстро осваиваю новые технологии и инструменты: если не знаю — разберусь раньше, чем ожидают. Сейчас активно изучаю и внедряю AI-инструменты в повседневную работу.
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3 w-full">
            {[
              { value: "20+", label: "лет опыта" },
              { value: "500+", label: "проектов" },
              { value: "99.9%", label: "надёжность" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-blue-500">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Experience */}
        <Section title="Опыт работы">
          <div className="space-y-6 mt-4">
            {[
              {
                role: "Руководитель IT-отдела / Выездной специалист",
                company: "Qwertyshop",
                period: "2012 — 2024",
                location: "Одесса, Украина",
                points: [
                  "Полная IT-инфраструктура компании: серверы, сети, рабочие станции",
                  "Миграция критических систем в облако (AWS/Azure) в условиях военного времени",
                  "Настройка MikroTik, VPN, IP-телефонии (Asterisk/FreePBX)",
                  "Видеонаблюдение, кассовые системы, техподдержка сотрудников",
                ],
              },
              {
                role: "Менеджер по работе с корпоративными клиентами",
                company: "YUDIKOM",
                period: "2008 — 2012",
                location: "Одесса, Украина",
                points: [
                  "B2B продажи IT-оборудования и услуг",
                  "Составление коммерческих предложений и закупки",
                  "Проведение обучающих семинаров для клиентов",
                ],
              },
              {
                role: "Руководитель отдела продаж",
                company: "UNITRADE",
                period: "2002 — 2008",
                location: "Одесса, Украина",
                points: [
                  "Управление командой продаж",
                  "Кадровое планирование и сертификации",
                ],
              },
            ].map((job, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative pl-5 border-l-2 border-blue-600/30 hover:border-blue-600 transition-colors">
                  <div className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-blue-600" />
                  <div className="flex flex-wrap items-start justify-between gap-1">
                    <div>
                      <h3 className="font-semibold">{job.role}</h3>
                      <p className="text-sm text-blue-500">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{job.period}</p>
                      <p className="text-xs text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-blue-500 shrink-0">·</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Divider />

        {/* ERP / Accounting */}
        <Section title="Учётные и бухгалтерские системы">
          <p className="mt-2 text-sm text-muted-foreground">
            Более 15 лет работы с различными системами учёта — от развёртывания и настройки до интеграции с оборудованием и обучения сотрудников.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
{ name: "Системы учёта товаров", desc: "Складские и торговые решения: приход, расход, инвентаризация" },
              { name: "Кассовые системы", desc: "POS-терминалы, фискальные регистраторы, интеграция с учётом" },
              { name: "ERP-интеграции", desc: "Связка учётных систем с сетью, серверами и периферией" },
              { name: "Резервное копирование баз данных", desc: "Настройка автобэкапов, восстановление, мониторинг" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="rounded-xl border border-border bg-card p-4 hover:border-blue-500/50 transition-colors">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Skills */}
        <Section title="Технические навыки">
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-lg border border-blue-500 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-500 font-medium">
              🤖 AI-инструменты (активно внедряю)
            </span>
            {skills.filter(s => s !== "Кофе ☕" && s !== "AI-инструменты (активно)").map((skill, i) => (
              <FadeIn key={skill} delay={(i + 1) * 40}>
                <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm hover:border-blue-500 hover:text-blue-500 transition-colors cursor-default">
                  {skill}
                </span>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Сертификаты */}
        <Section title="Обучение и сертификаты">
          <div className="mt-4 space-y-3">
            {[
              { name: "MTCNA & MTCRE", org: "MikroTik" },
              { name: "AWS Cloud Essentials", org: "Amazon Web Services" },
              { name: "DevOps курс", org: "Hillel IT School" },
              { name: "Docker & Kubernetes", org: "Самообразование" },
            ].map((cert, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="rounded-xl border border-border bg-card px-4 py-3 hover:border-blue-500/50 transition-colors">
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.org}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Зарплата */}
        <Section title="Условия">
          <div className="mt-4 rounded-xl border border-blue-600/40 bg-card p-5">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-500">от 2 500 €</span>
              <span className="text-muted-foreground">/ месяц брутто</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Полная занятость. Возможен гибридный формат. Готов к переговорам.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Full-time", "Hybrid OK", "Nürnberg / Bayern", "Führerschein B"].map(tag => (
                <span key={tag} className="rounded-full bg-blue-600/10 px-3 py-1 text-xs text-blue-500">{tag}</span>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* Contact */}
        <Section title="Контакты">
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { href: `tel:${profile.phone}`, icon: <Phone className="size-5" />, label: "Позвонить" },
              { href: `mailto:${profile.email}`, icon: <Mail className="size-5" />, label: "Email" },
              { href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`, icon: <MessageCircle className="size-5" />, label: "WhatsApp" },
              {
                href: profile.linkedin, icon: (
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                ), label: "LinkedIn"
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card py-4 text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {icon}{label}
              </a>
            ))}
          </div>
        </Section>

        <footer className="mt-16 text-center space-y-2">
          <p className="text-sm text-muted-foreground">{profile.name} · IT-специалист · 2025</p>
          <p className="text-xs text-muted-foreground/50">
            Данный сайт — стилизованное резюме. Готов к стандартному найму, трудовому договору и всем обычным HR-процедурам.
          </p>
          <p className="text-[11px] text-muted-foreground/35">
            📍 Ищу полную занятость | IT Support · System Administration · Network Engineering · Technical Support | Nürnberg/Bayern | Full-time | Разрешение на работу есть
          </p>
        </footer>
      </main>

      <style>{`
        .avatar-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-bold tracking-tight border-l-4 border-blue-600 pl-3">{title}</h2>
      {children}
    </section>
  )
}

function Divider() {
  return <div className="border-t border-border/50" />
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium hover:text-blue-500 transition-colors"
      >
        {q}
        <ChevronDown className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
          {a}
        </div>
      )}
    </div>
  )
}
