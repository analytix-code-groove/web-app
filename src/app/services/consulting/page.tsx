import type { Metadata } from 'next'
import Link from 'next/link'
import { FiTrendingUp, FiLayers, FiShield, FiFileText } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'

export const metadata: Metadata = {
  title: 'IT Consulting | AnalytiX',
  description: 'Clarity, architecture, and momentum—when you need it.',
}

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
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <CoreCapability
              icon={FiTrendingUp}
              title="Scaling Fast"
              description="Architecture or costs can’t keep up."
            />
            <CoreCapability
              icon={FiLayers}
              title="Stuck Initiatives"
              description="Critical projects are caught between options or teams."
            />
            <CoreCapability
              icon={FiShield}
              title="Rising Risk"
              description="Compliance or security concerns are piling up."
            />
            <CoreCapability
              icon={FiFileText}
              title="Need a Roadmap"
              description="You want a pragmatic plan—not another 80-page deck."
            />
          </div>
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
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">Strategy Sprint</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">2 weeks</span>
              <p className="mt-3 text-sm text-muted">Sharpen goals, kill bad options, back the right bets.</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">Architecture & Roadmap</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">4–6 weeks</span>
              <p className="mt-3 text-sm text-muted">Design the path and the plan.</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">Fractional Leadership</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">Ongoing</span>
              <p className="mt-3 text-sm text-muted">Interim CTO/Head of Data/DevOps to steer execution.</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">Delivery Oversight</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">As needed</span>
              <p className="mt-3 text-sm text-muted">Governance, QA, and vendor management to keep outcomes on track.</p>
            </div>
            <div className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
              <h3 className="font-medium text-text">Vendor-Neutral RFP Support</h3>
              <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">Project-based</span>
              <p className="mt-3 text-sm text-muted">Requirements, scoring, and selection without bias.</p>
            </div>
          </div>
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

