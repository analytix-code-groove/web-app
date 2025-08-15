import type { Metadata } from 'next'
import Link from 'next/link'
import { FiSearch, FiShield, FiCheckCircle, FiBox, FiPlayCircle, FiRefreshCw, FiTrendingUp } from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Generative AI Services | AnalytiX',
  description: 'Where automation meets creativity to solve real-world challenges.',
}

export default function GenerativeAIServicePage() {
  const { lang } = useLanguage()

  const useCasesEn = [
    {
      icon: FiSearch,
      title: 'Document Summarization',
      description: 'Turn dense reports into bite-sized insights instantly.',
    },
    {
      icon: FiShield,
      title: 'Secure Code Generation',
      description: 'Speed up development with AI that respects your guardrails.',
    },
  ]

  const useCasesEs = [
    {
      icon: FiSearch,
      title: 'Resumen de documentos',
      description: 'Convierte informes densos en ideas concisas al instante.',
    },
    {
      icon: FiShield,
      title: 'Generación de código segura',
      description: 'Acelera el desarrollo con IA que respeta tus límites.',
    },
  ]

  const useCases = lang === 'es' ? useCasesEs : useCasesEn

  const journeyEn = [
    {
      icon: FiSearch,
      title: 'Identify Opportunities',
      description: 'Pinpoint the AI use cases with the greatest potential to drive business impact.',
    },
    {
      icon: FiCheckCircle,
      title: 'Assess Feasibility',
      description: 'Review scalability, security, and costs to select the most suitable models and approaches.',
    },
    {
      icon: FiBox,
      title: 'Validate with a Pilot',
      description: 'Test architecture, integrations, and tools to confirm performance and fit.',
    },
    {
      icon: FiPlayCircle,
      title: 'Build & Integrate',
      description: 'Develop and embed AI solutions seamlessly into your existing workflows.',
    },
    {
      icon: FiTrendingUp,
      title: 'Optimize Results',
      description: 'Enhance outcomes through prompt engineering, retrieval-augmented generation, and fine-tuning.',
    },
    {
      icon: FiRefreshCw,
      title: 'Go Live & Evolve',
      description: 'Launch with minimal disruption and refine to sustain and grow value over time.',
    },
  ]

  const journeyEs = [
    {
      icon: FiSearch,
      title: 'Identificar oportunidades',
      description: 'Detecta los casos de uso de IA con mayor potencial para impulsar el negocio.',
    },
    {
      icon: FiCheckCircle,
      title: 'Evaluar viabilidad',
      description: 'Revisa escalabilidad, seguridad y costos para elegir los modelos y enfoques adecuados.',
    },
    {
      icon: FiBox,
      title: 'Validar con un piloto',
      description: 'Prueba arquitectura, integraciones y herramientas para confirmar rendimiento y ajuste.',
    },
    {
      icon: FiPlayCircle,
      title: 'Construir e integrar',
      description: 'Desarrolla e incorpora soluciones de IA en tus flujos existentes sin fricción.',
    },
    {
      icon: FiTrendingUp,
      title: 'Optimizar resultados',
      description: 'Mejora resultados con prompt engineering, RAG y fine-tuning.',
    },
    {
      icon: FiRefreshCw,
      title: 'Lanzar y evolucionar',
      description: 'Pon en producción con mínima interrupción y refina para sostener y aumentar el valor en el tiempo.',
    },
  ]

  const journey = lang === 'es' ? journeyEs : journeyEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Servicios de IA Generativa' : 'Generative AI Services'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'Donde la automatización se une con la creatividad para resolver desafíos reales.'
            : 'Where automation meets creativity to solve real-world challenges.'}
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {lang === 'es' ? 'Hablemos' : 'Let’s talk'}
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Casos de uso' : 'Sample Use Cases'}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {useCases.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Generative AI */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Por qué la IA Generativa importa para tu negocio'
              : 'Why Generative AI Matters for Your Business'}
          </h2>
          <p className="mt-8 text-muted">
            {lang === 'es'
              ? 'La IA Generativa combina creatividad y razonamiento para impulsar ganancias de eficiencia significativas. Puede procesar rápidamente grandes volúmenes de datos, destilar documentos complejos en resúmenes claros y automatizar flujos de trabajo de múltiples pasos, reduciendo los tiempos de días a minutos. Sus capacidades multimodales van más allá del texto, transformando imágenes, audio y notas manuscritas en información estructurada y accionable que tu equipo puede usar de inmediato.'
              : 'Generative AI blends creativity with reasoning to drive meaningful efficiency gains. It can rapidly process vast datasets, distill complex documents into clear summaries, and automate multi-step workflows—cutting turnaround from days to minutes. Its multimodal capabilities go beyond text, transforming images, audio, and handwritten notes into structured, actionable insights your team can use immediately.'}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Nuestro enfoque práctico y orientado al valor'
              : 'Our Practical, Value-First Approach'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Incorporamos IA Generativa en tus operaciones existentes de manera que genere impacto medible. Basados en nuestra experiencia práctica con implementaciones internas y de clientes, diseñamos soluciones que elevan la precisión, agilizan procesos y desbloquean el potencial creativo, evitando las trampas de experimentos tecnológicos de corta duración.'
              : 'We embed Generative AI into your existing operations in ways that deliver measurable impact. Drawing on our hands-on experience with both internal and client deployments, we design solutions that elevate accuracy, streamline processes, and unlock creative potential—avoiding the pitfalls of short-lived tech experiments.'}
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Nuestra ruta de implementación en IA Generativa'
              : 'Our Generative Implementation Journey'}
          </h2>
          <div className="mt-8 text-muted">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      {/* Future of Work */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Adopta el futuro del trabajo' : 'Engage the Future of Work'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'La IA Generativa no se trata solo de modelos más inteligentes: se trata de desbloquear nuevas posibilidades para tu negocio. Nos asociamos contigo para:'
              : 'Generative AI isn’t just about smarter models — it’s about unlocking new possibilities for your business. We partner with you to:'}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            <li>
              <span className="font-medium text-text">
                {lang === 'es'
                  ? 'Libera a tu equipo del trabajo repetitivo –'
                  : 'Free your team from repetitive work –'}
              </span>
              {lang === 'es'
                ? ' Automatiza procesos cargados de documentos para que las personas se enfoquen en decisiones de alto valor.'
                : ' Automate document-heavy processes so people can focus on high-value decisions.'}
            </li>
            <li>
              <span className="font-medium text-text">
                {lang === 'es'
                  ? 'Pregunta y obtén respuestas al instante –'
                  : 'Ask and get answers instantly –'}
              </span>
              {lang === 'es'
                ? ' Explora los datos de la empresa en lenguaje natural, sin necesidad de SQL.'
                : ' Explore enterprise data in plain language, no SQL required.'}
            </li>
            <li>
              <span className="font-medium text-text">
                {lang === 'es'
                  ? 'Convierte el caos en claridad –'
                  : 'Turn chaos into clarity –'}
              </span>
              {lang === 'es'
                ? ' Transforma archivos, imágenes y texto no estructurados en insights accionables.'
                : ' Convert unstructured files, images, and text into insights you can act on.'}
            </li>
            <li>
              <span className="font-medium text-text">
                {lang === 'es'
                  ? 'Innova con tranquilidad –'
                  : 'Innovate with peace of mind –'}
              </span>
              {lang === 'es'
                ? ' Confía en una IA que entiende tu contexto y ofrece resultados consistentes y confiables.'
                : ' Rely on AI that understands your context and delivers consistent, trustworthy results.'}
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

