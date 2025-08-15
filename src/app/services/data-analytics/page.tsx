import Link from 'next/link'

export default function DataAnalyticsServicePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-24">
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

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Why Strong Data Foundations Matter
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
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

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            Our Approach — From Data Chaos to Data Confidence
          </h2>
          <p className="mt-4 text-muted">
            Our proven methodology transforms your data operations in a clear, strategic progression—ensuring every step delivers measurable business value.
          </p>
          <ol className="mt-6 list-decimal space-y-6 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Break Down Silos –</span> Eliminate data fragmentation by consolidating critical information into a unified, governed environment, giving teams fast, reliable access to trusted data.
            </li>
            <li>
              <span className="font-medium text-text">Modernize Infrastructure –</span> Implement scalable architectures and adopt DataOps best practices to enable predictive analytics and self-service reporting.
            </li>
            <li>
              <span className="font-medium text-text">Activate Intelligence –</span> Integrate real-time analytics, AI, and machine learning to embed decision-making power directly into daily operations.
            </li>
            <li>
              <span className="font-medium text-text">Automate for Speed –</span> Achieve a state where insights trigger instant actions, allowing your business to operate with unmatched precision, agility, and speed.
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">What Our Service Enables</h2>
          <p className="mt-4 text-muted">
            When you partner with us, you don’t just get better data — you get a business that runs on insight.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
            <li>Faster Decisions: Eliminate delays caused by manual data prep.</li>
            <li>Greater Agility: Respond instantly to market changes with real-time intelligence.</li>
            <li>Lower Costs: Reduce inefficiencies, avoid compliance penalties, and cut data storage waste.</li>
            <li>Innovation at Scale: Enable advanced analytics, AI, and automation across teams without bottlenecks.</li>
          </ul>
          <p className="mt-8 text-lg text-text">
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

