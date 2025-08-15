import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apps & APIs Services | AnalytiX',
  description:
    'From prototype to production — applications and integrations that scale with your business.',
}

export default function AppsServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">Apps & APIs Services</h1>
        <p className="mt-6 text-lg text-muted">
          From prototype to production — applications and integrations that scale with your business.
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

      {/* Why Modern Apps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Why Modern Apps & APIs Matter for Your Business
          </h2>
          <p className="mt-4 text-muted">
            Your applications and APIs are the backbone of digital operations. Well-designed systems don’t just run your
            processes—they create new opportunities.
          </p>
          <p className="mt-4 text-muted">
            From automating manual tasks to enabling seamless integration with partners and platforms, modern apps and APIs
            improve efficiency, enhance user experiences, and reduce operational risk.
          </p>
          <p className="mt-4 text-muted">
            With the right architecture, they can adapt and grow with your business instead of holding it back.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Practical, Value-First Approach</h2>
          <p className="mt-4 text-muted">
            We build software that solves real problems, not just showcases technology. Whether you need a custom business app,
            a secure public API, or seamless integration between systems, we focus on solutions that deliver measurable impact.
          </p>
          <p className="mt-4 text-muted">
            Drawing from experience in multiple industries, we align every build with your performance, security, and
            scalability requirements—so your technology remains an asset, not a liability.
          </p>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Implementation Journey</h2>
          <ol className="mt-8 list-decimal space-y-6 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Define Requirements –</span> Collaborate with your stakeholders to
              clarify goals, user needs, and success metrics.
            </li>
            <li>
              <span className="font-medium text-text">Architect the Solution –</span> Design scalable, secure, and
              maintainable application or API architectures.
            </li>
            <li>
              <span className="font-medium text-text">Prototype & Validate –</span> Build functional prototypes to
              confirm usability, workflows, and technical feasibility.
            </li>
            <li>
              <span className="font-medium text-text">Develop & Integrate –</span> Implement the solution, integrating
              with existing systems and third-party services.
            </li>
            <li>
              <span className="font-medium text-text">Test & Secure –</span> Conduct rigorous QA, performance testing,
              and security hardening.
            </li>
            <li>
              <span className="font-medium text-text">Deploy & Launch –</span> Roll out with minimal disruption, ensuring
              smooth adoption and clear documentation.
            </li>
            <li>
              <span className="font-medium text-text">Monitor & Evolve –</span> Track performance, gather feedback, and
              implement enhancements to keep pace with your needs.
            </li>
          </ol>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Engage the Future of Digital Operations</h2>
          <p className="mt-4 text-muted">We partner with you to:</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Accelerate Development –</span> Deliver production-ready apps and
              APIs in weeks, not months.
            </li>
            <li>
              <span className="font-medium text-text">Enhance Integration –</span> Connect internal and external systems for
              frictionless data exchange.
            </li>
            <li>
              <span className="font-medium text-text">Improve Reliability –</span> Build with quality and performance in
              mind, reducing downtime and support costs.
            </li>
            <li>
              <span className="font-medium text-text">Scale with Confidence –</span> Architect solutions that can grow as your
              user base and data volumes expand.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

