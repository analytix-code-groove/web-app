import Link from 'next/link'

export default function ITConsultingServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">IT Consulting</h1>
        <p className="mt-6 text-lg text-muted">
          Clarity, architecture, and momentum—when you need it.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            Let’s talk
          </Link>
        </div>
      </section>

      {/* When to Bring Us In */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">When to Bring Us In</h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>You’re scaling—fast—and architecture or costs can’t keep up.</li>
            <li>Critical initiatives are stuck between options, vendors, or teams.</li>
            <li>Compliance, security, or data quality risks are piling up.</li>
            <li>You need a pragmatic roadmap (not another 80-page deck).</li>
          </ul>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            What You Get (Tangible in Weeks, Not Months)
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Current-State Brief:</span> systems, risks,
              bottlenecks, and cost drivers.
            </li>
            <li>
              <span className="font-medium text-text">Target Architecture:</span> cloud, data, and
              integration blueprint aligned to your goals.
            </li>
            <li>
              <span className="font-medium text-text">Execution Roadmap:</span> phased plan, owners,
              KPIs, and budget.
            </li>
            <li>
              <span className="font-medium text-text">Cost &amp; Risk Model:</span> where to save, what to
              defer, what to fix now.
            </li>
            <li>
              <span className="font-medium text-text">Security &amp; Compliance Baseline:</span> practical
              guardrails that won’t slow delivery.
            </li>
          </ul>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">How We Engage (Pick What Fits)</h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Strategy Sprint (2 weeks):</span> sharpen goals,
              kill bad options, back the right bets.
            </li>
            <li>
              <span className="font-medium text-text">Architecture &amp; Roadmap (4–6 weeks):</span>
              design the path and the plan.
            </li>
            <li>
              <span className="font-medium text-text">Fractional Leadership:</span> interim CTO/Head of
              Data/DevOps to steer execution.
            </li>
            <li>
              <span className="font-medium text-text">Delivery Oversight:</span> governance, QA, and
              vendor management to keep outcomes on track.
            </li>
            <li>
              <span className="font-medium text-text">Vendor-Neutral RFP Support:</span> requirements,
              scoring, and selection without bias.
            </li>
          </ul>
        </div>
      </section>

      {/* POV */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Our Consulting POV (No Theater, Just Value)
          </h2>
          <p className="mt-4 text-muted">
            We prioritize measurable impact over tool-of-the-day hype. Expect clear decisions,
            lightweight artifacts, and fast iteration—grounded in Cloud architecture best practices,
            FinOps discipline, DataOps/DevSecOps principles, and “build only what matters” product
            thinking.
          </p>
        </div>
      </section>

      {/* Ready to Move */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Ready to Move?</h2>
          <p className="mt-4 text-muted">
            Let’s turn ambiguity into action. Schedule a 30-minute discovery call—bring your goals and
            top blockers; we’ll bring clear options, trade-offs, and an actionable next step. If there’s
            a fit, we’ll kick off a two-week Strategy Sprint to build momentum fast.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

