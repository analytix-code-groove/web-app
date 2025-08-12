type Card = { title: string; blurb: string; href: string }
const cards: Card[] = [
  { title: 'Data Engineering', blurb: 'Pipelines, orchestration, quality, SLOs.', href: '/services/data' },
  { title: 'Cloud & DevOps', blurb: 'AWS, IaC, CI/CD, cost-safe scaling.', href: '/services/devops' },
  { title: 'Analytics', blurb: 'Dashboards that drive decisions.', href: '/services/analytics' },
  { title: 'AI / Automation', blurb: 'LLMs, agents, workflow automation.', href: '/services/ai' },
  { title: 'Apps & APIs', blurb: 'From prototype to production.', href: '/services/apps' },
]

import Link from 'next/link'

export default function ServiceCards() {
  return (
    <section className="bg-bg py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(c => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl2 border border-stroke/70 bg-surface p-6 shadow-soft transition hover:border-mint/60"
          >
            <h3 className="font-heading text-lg font-semibold text-text group-hover:text-mint">{c.title}</h3>
            <p className="mt-2 text-sm text-muted">{c.blurb}</p>
            <span className="mt-4 inline-block text-sm text-mint">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
