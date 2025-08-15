import Link from 'next/link'

export default function GenerativeAIServicePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">Generative AI Services</h1>
        <p className="mt-6 text-lg text-muted">
          Where automation meets creativity to solve real-world challenges.
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

      {/* Why Generative AI */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Why Generative AI Matters for Your Business</h2>
          <p className="mt-8 text-muted">
            Generative AI blends creativity with reasoning to drive meaningful efficiency gains. It can rapidly process vast datasets, distill complex documents into clear summaries, and automate multi-step workflows—cutting turnaround from days to minutes. Its multimodal capabilities go beyond text, transforming images, audio, and handwritten notes into structured, actionable insights your team can use immediately.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Practical, Value-First Approach</h2>
          <p className="mt-4 text-muted">
            We embed Generative AI into your existing operations in ways that deliver measurable impact. Drawing on our hands-on experience with both internal and client deployments, we design solutions that elevate accuracy, streamline processes, and unlock creative potential—avoiding the pitfalls of short-lived tech experiments.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Our Generative Implementation Journey</h2>
          <ol className="mt-8 list-decimal space-y-6 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Identify opportunities –</span> Pinpoint the AI use cases with the greatest potential to drive business impact.
            </li>
            <li>
              <span className="font-medium text-text">Assess feasibility –</span> Review scalability, security, and costs to select the most suitable models and approaches.
            </li>
            <li>
              <span className="font-medium text-text">Validate with a pilot –</span> Test architecture, integrations, and tools to confirm performance and fit.
            </li>
            <li>
              <span className="font-medium text-text">Build and integrate –</span> Develop and embed AI solutions seamlessly into your existing workflows.
            </li>
            <li>
              <span className="font-medium text-text">Optimize results –</span> Enhance outcomes through prompt engineering, retrieval-augmented generation, and fine-tuning.
            </li>
            <li>
              <span className="font-medium text-text">Go live –</span> Launch with minimal disruption and ensure strong user adoption.
            </li>
            <li>
              <span className="font-medium text-text">Evolve continuously –</span> Monitor, gather feedback, and refine to sustain and grow value over time.
            </li>
          </ol>
        </div>
      </section>

      {/* Future of Work */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">Engage the Future of Work</h2>
          <p className="mt-4 text-muted">
            Generative AI isn’t just about smarter models — it’s about unlocking new possibilities for your business. We partner with you to:
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">Free your team from repetitive work –</span> Automate document-heavy processes so people can focus on high-value decisions.
            </li>
            <li>
              <span className="font-medium text-text">Ask and get answers instantly –</span> Explore enterprise data in plain language, no SQL required.
            </li>
            <li>
              <span className="font-medium text-text">Turn chaos into clarity –</span> Convert unstructured files, images, and text into insights you can act on.
            </li>
            <li>
              <span className="font-medium text-text">Innovate with peace of mind –</span> Rely on AI that understands your context and delivers consistent, trustworthy results.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

