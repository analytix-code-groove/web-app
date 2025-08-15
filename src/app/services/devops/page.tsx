import type { Metadata } from 'next'
import Link from 'next/link'
import { FiSearch, FiShield, FiRefreshCw, FiCodesandbox, FiServer, FiUsers } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AnalytiX',
  description: 'Build, deploy, and scale with confidence.',
}

export default function CloudDevOpsServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          Cloud & DevOps Services
        </h1>
        <p className="mt-6 text-lg text-muted">
          Build, deploy, and scale with confidence.
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

      {/* Why Cloud & DevOps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Why Cloud & DevOps Matter for Your Business
          </h2>
          <p className="mt-8 text-muted">
            Modern businesses can’t afford slow deployments, fragile infrastructure, or scaling bottlenecks. Cloud and DevOps practices transform how you deliver technology—shortening release cycles, improving reliability, and enabling cost-efficient growth.
          </p>
          <p className="mt-4 text-muted">
            From infrastructure-as-code to automated CI/CD pipelines, Cloud & DevOps keep your systems resilient, secure, and ready to adapt to changing business demands.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Our Practical, Value-First Approach
          </h2>
          <p className="mt-4 text-muted">
            We focus on DevOps and cloud strategies that deliver measurable outcomes, not just tool adoption. Whether migrating to the cloud, optimizing an existing environment, or embedding DevOps culture into your teams, our goal is to create infrastructure and workflows that scale without adding complexity.
          </p>
          <p className="mt-4 text-muted">
            We combine cloud architecture best practices with automation to ensure performance, security, and cost-effectiveness—so your technology works harder for you, not the other way around.
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            How We Deliver (Clear, Actionable Focus)
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <CoreCapability
              icon={FiSearch}
              title="Assess & Align"
              description="Understand your infrastructure, delivery challenges, and business priorities."
            />
            <CoreCapability
              icon={FiShield}
              title="Design for Scale"
              description="Architect cloud-native or hybrid solutions built for resilience and compliance."
            />
            <CoreCapability
              icon={FiRefreshCw}
              title="Automate Delivery"
              description="Implement CI/CD pipelines, automated testing, and deployment workflows."
            />
            <CoreCapability
              icon={FiCodesandbox}
              title="Infrastructure as Code"
              description="Use tools like Terraform or Pulumi for repeatable, reliable provisioning."
            />
            <CoreCapability
              icon={FiServer}
              title="Optimize & Monitor"
              description="Leverage observability and cost analysis to ensure your environment evolves with your needs."
            />
            <CoreCapability
              icon={FiUsers}
              title="Embed DevOps Culture"
              description="Coach teams to adopt practices that sustain long-term agility and quality."
            />
          </div>
          <div className="mt-10 flex justify-center">
            <svg
              className="h-32 w-48 text-stroke"
              viewBox="0 0 200 100"
              fill="none"
              stroke="currentColor"
            >
              <rect x="10" y="40" width="60" height="20" rx="4" />
              <rect x="130" y="40" width="60" height="20" rx="4" />
              <path d="M70 50H130" />
            </svg>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Outcomes You Can Count On</h2>
          <p className="mt-4 text-muted">We partner with you to:</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Accelerate Releases –</span> Ship features faster without compromising stability.
            </li>
            <li>
              <span className="font-medium text-text">Improve Reliability –</span> Design systems that self-heal and recover quickly from failures.
            </li>
            <li>
              <span className="font-medium text-text">Control Costs –</span> Optimize resource usage with right-sizing, automation, and governance.
            </li>
            <li>
              <span className="font-medium text-text">Increase Agility –</span> Enable teams to adapt quickly to market and customer needs.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

