export const profile = {
  name: "Алексей Соколов",
  product: "Senior Developer",
  version: "v3.0",
  tagline: "Решение №1 для вашей инженерной команды",
  subtitle:
    "Production-ready разработчик. Пишет код, который собирается с первого раза (почти всегда). Совместим с любым стеком и кофемашиной.",
  status: "Доступен к найму",
  phone: "+7 999 123-45-67",
  email: "alex.sokolov.dev@example.com",
  telegram: "https://t.me/alex_dev",
  github: "https://github.com/",
  resumePdf: "#",
  uptime: "99.9%",
  experienceYears: "6+",
  shipped: "120+",
}

export const features = [
  {
    title: "Frontend без багов*",
    desc: "React, Next.js, TypeScript. Интерфейсы, которые не разваливаются при первом же ресайзе окна.",
    note: "*по будням",
  },
  {
    title: "Backend, который не падает",
    desc: "Node.js, PostgreSQL, REST и GraphQL. API с аптаймом выше, чем у моего режима сна.",
    note: "проверено в проде",
  },
  {
    title: "DevOps на минималках",
    desc: "Docker, CI/CD, Vercel и AWS. Деплою так, что даже пятница не страшна.",
    note: "git push --force иногда",
  },
  {
    title: "Code review-friendly",
    desc: "Читаемый код, понятные коммиты, минимум \"//TODO: пофиксить потом\".",
    note: "комментарии на русском и английском",
  },
]

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Git",
  "Figma",
  "Кофе ☕",
]

export const tiers = [
  {
    name: "Junior",
    price: "был",
    period: "2018",
    description: "Стартовая конфигурация. Уже задеприкейчена.",
    features: [
      "Heroку pet-проекты",
      "Stack Overflow по подписке",
      "Бесстрашный console.log",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Middle",
    price: "был",
    period: "2021",
    description: "Стабильная сборка. Закрывал спринты в срок.",
    features: [
      "Самостоятельные фичи end-to-end",
      "Менторил джунов",
      "Ревью без слёз",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Senior",
    price: "сейчас",
    period: "2024",
    description: "Актуальная версия. Рекомендуется к найму.",
    features: [
      "Архитектура и технические решения",
      "Лид небольших команд",
      "Договаривается с продактами",
      "Объясняет бизнесу, почему 'на это нужна неделя'",
    ],
    highlighted: true,
    badge: "Текущая версия",
  },
]

export const testimonials = [
  {
    quote:
      "Закрыл задачу, которая висела в бэклоге три квартала. До сих пор не понимаю как.",
    author: "Бывший тимлид",
    role: "видел всё",
  },
  {
    quote:
      "Единственный человек в команде, чьи PR я мерджил без страха.",
    author: "Коллега-бэкендер",
    role: "строгий ревьюер",
  },
  {
    quote:
      "Приходит на дейли вовремя. Это уже половина успеха.",
    author: "Scrum-мастер",
    role: "ценит дисциплину",
  },
]

export const faq = [
  {
    q: "Это правда резюме?",
    a: "Да. Просто оформленное как лендинг, потому что обычный PDF вы бы пролистали за 4 секунды. Кстати, PDF тоже есть — кнопка ниже.",
  },
  {
    q: "Есть ли пробный период?",
    a: "Конечно — он называется 'испытательный срок'. Стандартные условия, без скрытых платежей.",
  },
  {
    q: "А если что-то сломается?",
    a: "Техподдержка 24/7 в рабочее время. SLA: отвечаю быстрее, чем на собеседовании.",
  },
]
