import { SectionHeader } from "@/components/features"
import { Zap, Clock } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-14">
      <div className="mx-auto max-w-md">
        <SectionHeader
          kicker="Тарифы"
          title="Сколько стоит этот продукт"
        />

        <div className="mt-8 grid gap-4">
          {/* Зарплатные ожидания */}
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Базовая конфигурация</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold text-primary">от 2 500 €</span>
              <span className="text-sm text-muted-foreground">/ месяц брутто</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Полная занятость. Возможен удалённый или гибридный формат. Готов к переговорам — главное, чтобы задачи были интересными.
            </p>
          </div>

          {/* Шуточный блок срочности */}
          <div className="relative rounded-2xl border border-primary bg-card p-5 ring-1 ring-primary overflow-hidden">
            <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              🔥 Ограниченное предложение
            </span>
            <div className="mt-2 flex items-start gap-3">
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
              <p className="font-mono text-xs text-primary">
                Доступность: ограничена · Статус: открыт к офферам
              </p>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/60">
              * кофе за свой счёт
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
