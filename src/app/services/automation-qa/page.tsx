import type { Metadata } from 'next'
import Link from 'next/link'
import { FiRefreshCw, FiCheckCircle, FiShield, FiTarget, FiPenTool, FiBox, FiBarChart } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'

export const metadata: Metadata = {
  title: 'Automation & QA Services | AnalytiX',
  description:
    'Smarter processes. Higher quality. Fewer headaches.',
}

export default function AutomationQaServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">Automation & QA Services</h1>
        <p className="mt-6 text-lg text-muted">
          Smarter processes. Higher quality. Fewer headaches.
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

      {/* Why Automation & QA */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Why Automation & QA Matter for Your Business
          </h2>
          <p className="mt-4 text-muted">
            Manual, repetitive processes slow teams down and introduce errors. By automating workflows and embedding
            quality assurance into every stage, you can deliver faster, reduce costs, and maintain consistent
            performance. From robotic process automation (RPA) to continuous testing pipelines, Automation & QA ensure
            your systems run reliably, your teams focus on high-value work, and your customers get a better experience
            every time.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Practical, Value-First Approach</h2>
          <p className="mt-4 text-muted">
            We see automation and QA as enablers, not afterthoughts. Every process we automate and every test we design
            has a clear business outcome—whether it’s reducing processing time, improving defect detection, or ensuring
            regulatory compliance.
          </p>
          <p className="mt-4 text-muted">
            By combining modern automation frameworks with rigorous QA practices, we create solutions that are fast,
            reliable, and built to last.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Core Capabilities</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <CoreCapability
              icon={FiRefreshCw}
              title="Workflow Automation"
              description="Eliminate repetitive tasks with smart orchestration."
            />
            <CoreCapability
              icon={FiCheckCircle}
              title="Test Automation"
              description="Increase coverage and catch regressions early."
            />
            <CoreCapability
              icon={FiShield}
              title="Quality Gates"
              description="Enforce standards before changes reach production."
            />
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Implementation Journey</h2>
          <div className="mt-8 text-muted">
            <StepTimeline
              steps={[
                {
                  icon: FiTarget,
                  title: 'Target what matters',
                  description:
                    'We pinpoint the highest-leverage processes and failure points where automation and QA will move the needle.',
                },
                {
                  icon: FiPenTool,
                  title: 'Design for scale',
                  description:
                    'We architect maintainable workflows, test suites, and data flows that grow with your product and team.',
                },
                {
                  icon: FiBox,
                  title: 'Build where it counts',
                  description:
                    'RPA for repetitive tasks, API/UI test automation for coverage, and CI/CD hooks to keep quality continuous.',
                },
                {
                  icon: FiShield,
                  title: 'Harden reliability',
                  description:
                    'Performance, security, and regression testing ensure releases are predictable—not hopeful.',
                },
                {
                  icon: FiBarChart,
                  title: 'Measure and improve',
                  description:
                    'Dashboards, SLIs/SLOs, and feedback loops keep the system honest and getting better over time.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Engage the Future of Reliable Operations</h2>
          <p className="mt-4 text-muted">We partner with you to:</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Eliminate Repetitive Work –</span> Free up staff from manual tasks
              with RPA and workflow automation.
            </li>
            <li>
              <span className="font-medium text-text">Improve Release Speed –</span> Implement continuous testing to
              shorten development cycles without sacrificing quality.
            </li>
            <li>
              <span className="font-medium text-text">Enhance Product Reliability –</span> Catch and fix issues earlier with
              automated functional and regression testing.
            </li>
            <li>
              <span className="font-medium text-text">Reduce Operational Risk –</span> Enforce consistent processes and
              quality checks that minimize costly errors.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

