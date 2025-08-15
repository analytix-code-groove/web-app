import type { Metadata } from 'next'
import Link from 'next/link'
import { FiDatabase, FiGitBranch, FiCheckCircle, FiLayers, FiBarChart2, FiPlayCircle } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'

export const metadata: Metadata = {
  title: 'Data & Analytics Services | AnalytiX',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

const capabilities = [
  {
    icon: FiDatabase,
    title: 'Warehouses & Lakes',
    description:
      'Scalable, optimized storage for analytics-ready data on AWS, Azure, GCP, or on-prem.',
  },
  {
    icon: FiGitBranch,
    title: 'ETL / ELT Pipelines',
    description:
      'Batch, streaming, and event-driven ingestion—reliable data delivered where it’s needed.',
  },
  {
    icon: FiCheckCircle,
    title: 'Quality & Governance',
    description:
      'Validation, lineage, monitoring, and policies that keep data trustworthy and compliant.',
  },
]

const approachSteps = [
  {
    icon: FiLayers,
    title: 'Break Down Silos',
    description:
      'Eliminate data fragmentation by consolidating critical information into a unified, governed environment, giving teams fast, reliable access to trusted data.',
  },
  {
    icon: FiGitBranch,
    title: 'Modernize Infrastructure',
    description:
      'Implement scalable architectures and adopt DataOps best practices to enable predictive analytics and self-service reporting.',
  },
  {
    icon: FiBarChart2,
    title: 'Activate Intelligence',
    description:
      'Integrate real-time analytics, AI, and machine learning to embed decision-making power directly into daily operations.',
  },
  {
    icon: FiPlayCircle,
    title: 'Automate for Speed',
    description:
      'Achieve a state where insights trigger instant actions, allowing your business to operate with unmatched precision, agility, and speed.',
  },
]

export default function DataAnalyticsServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">Data & Analytics Services</h1>
        <p className="mt-6 text-lg text-muted">
          From raw data to real results — faster, smarter, and at scale.
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

      {/* Why Foundations */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Why Strong Data Foundations Matter</h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Streamlined Operations –</span> Keep data accurate, accessible, and ready to use, reducing wasted time on searching, cleaning, and reconciling information.
            </li>
            <li>
              <span className="font-medium text-text">Cost Optimization & Risk Reduction –</span> Apply smart governance to uncover inefficiencies, cut storage costs, and maintain compliance with confidence.
            </li>
            <li>
              <span className="font-medium text-text">Fuel for Innovation –</span> Harness clean, scalable data infrastructure to power analytics, AI, and ML—enabling faster insights and sharper decision-making.
            </li>
          </ul>
        </div>
      </section>

      {/* Core Capabilities with Icons */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Core Capabilities</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Our Approach — From Data Chaos to Data Confidence
          </h2>
          <p className="mt-4 text-muted">
            Our proven methodology transforms your data operations in a clear, strategic progression—ensuring every step delivers measurable business value.
          </p>
          <div className="mt-8 text-muted">
            <StepTimeline steps={approachSteps} />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">What Our Service Enables</h2>
          <p className="mt-4 text-muted">
            When you partner with us, you don’t just get better data — you get a business that runs on insight.
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li><span className="font-medium text-text">Faster Decisions:</span> Eliminate delays caused by manual data prep.</li>
            <li><span className="font-medium text-text">Greater Agility:</span> Respond instantly to market changes with real-time intelligence.</li>
            <li><span className="font-medium text-text">Lower Costs:</span> Reduce inefficiencies, avoid compliance penalties, and cut data storage waste.</li>
            <li><span className="font-medium text-text">Innovation at Scale:</span> Enable advanced analytics, AI, and automation across teams without bottlenecks.</li>
          </ul>
          <p className="mt-10 text-lg text-text">
            Engage your data. Empower your people. Outpace your competition.
          </p>
          <p className="mt-2 text-muted">
            With a strong data foundation and modern analytics capabilities, every decision you make becomes sharper, faster, and more impactful — driving measurable growth and sustainable advantage.
          </p>
        </div>
      </section>
    </main>
  )
}
