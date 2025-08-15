import type { Metadata } from 'next'
import Link from 'next/link'
import { FiTrendingUp, FiLayers, FiShield, FiFileText } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'IT Consulting | AnalytiX',
  description: 'Clarity, architecture, and momentum—when you need it.',
}

export default function ITConsultingServicePage() {
  const { lang } = useLanguage()

  const whenEn = [
    {
      icon: FiTrendingUp,
      title: 'Scaling Fast',
      description: 'Architecture or costs can’t keep up.',
    },
    {
      icon: FiLayers,
      title: 'Stuck Initiatives',
      description: 'Critical projects are caught between options or teams.',
    },
    {
      icon: FiShield,
      title: 'Rising Risk',
      description: 'Compliance or security concerns are piling up.',
    },
    {
      icon: FiFileText,
      title: 'Need a Roadmap',
      description: 'You want a pragmatic plan—not another 80-page deck.',
    },
  ]

  const whenEs = [
    {
      icon: FiTrendingUp,
      title: 'Creciendo rápido',
      description: 'La arquitectura o los costos no dan abasto.',
    },
    {
      icon: FiLayers,
      title: 'Iniciativas atascadas',
      description: 'Proyectos críticos atrapados entre opciones o equipos.',
    },
    {
      icon: FiShield,
      title: 'Riesgo en aumento',
      description: 'Preocupaciones de cumplimiento o seguridad se acumulan.',
    },
    {
      icon: FiFileText,
      title: 'Necesitas un roadmap',
      description: 'Quieres un plan pragmático, no otra presentación de 80 páginas.',
    },
  ]

  const when = lang === 'es' ? whenEs : whenEn

  const whatEn = [
    { bold: 'Current-State Brief:', text: ' systems, risks, bottlenecks, and cost drivers.' },
    { bold: 'Target Architecture:', text: ' cloud, data, and integration blueprint aligned to your goals.' },
    { bold: 'Execution Roadmap:', text: ' phased plan, owners, KPIs, and budget.' },
    { bold: 'Cost & Risk Model:', text: ' where to save, what to defer, what to fix now.' },
    { bold: 'Security & Compliance Baseline:', text: ' practical guardrails that won’t slow delivery.' },
  ]

  const whatEs = [
    { bold: 'Resumen del estado actual:', text: ' sistemas, riesgos, cuellos de botella y factores de costo.' },
    { bold: 'Arquitectura objetivo:', text: ' blueprint de nube, datos e integración alineado a tus metas.' },
    { bold: 'Hoja de ruta de ejecución:', text: ' plan por fases, responsables, KPIs y presupuesto.' },
    { bold: 'Modelo de costos y riesgos:', text: ' dónde ahorrar, qué aplazar y qué arreglar ahora.' },
    { bold: 'Base de seguridad y cumplimiento:', text: ' guardrails prácticos que no frenan la entrega.' },
  ]

  const what = lang === 'es' ? whatEs : whatEn

  const engageEn = [
    { title: 'Strategy Sprint', tag: '2 weeks', body: 'Sharpen goals, kill bad options, back the right bets.' },
    { title: 'Architecture & Roadmap', tag: '4–6 weeks', body: 'Design the path and the plan.' },
    { title: 'Fractional Leadership', tag: 'Ongoing', body: 'Interim CTO/Head of Data/DevOps to steer execution.' },
    { title: 'Delivery Oversight', tag: 'As needed', body: 'Governance, QA, and vendor management to keep outcomes on track.' },
    { title: 'Vendor-Neutral RFP Support', tag: 'Project-based', body: 'Requirements, scoring, and selection without bias.' },
  ]

  const engageEs = [
    { title: 'Sprint de estrategia', tag: '2 semanas', body: 'Afilamos metas, descartamos malas opciones y respaldamos las apuestas correctas.' },
    { title: 'Arquitectura y roadmap', tag: '4–6 semanas', body: 'Diseñamos el camino y el plan.' },
    { title: 'Liderazgo fraccional', tag: 'Continuo', body: 'CTO/Head de Data/DevOps interino para guiar la ejecución.' },
    { title: 'Supervisión de entregas', tag: 'Según necesidad', body: 'Gobernanza, QA y gestión de proveedores para mantener resultados.' },
    { title: 'Soporte RFP neutral', tag: 'Por proyecto', body: 'Requisitos, puntuación y selección sin sesgos.' },
  ]

  const engage = lang === 'es' ? engageEs : engageEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Consultoría IT' : 'IT Consulting'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'Claridad, arquitectura y momentum—cuando lo necesitas.'
            : 'Clarity, architecture, and momentum—when you need it.'}
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

      {/* When to Bring Us In */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Cuándo llamarnos' : 'When to Bring Us In'}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {when.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Lo que obtienes (tangible en semanas, no meses)'
              : 'What You Get (Tangible in Weeks, Not Months)'}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {what.map(w => (
              <li key={w.bold}>
                <span className="font-medium text-text">{w.bold}</span>
                {w.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Cómo nos involucramos (elige lo que encaje)' : 'How We Engage (Pick What Fits)'}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engage.map(e => (
              <div key={e.title} className="rounded-xl2 border border-stroke/70 bg-bg p-6 shadow-soft">
                <h3 className="font-medium text-text">{e.title}</h3>
                <span className="mt-1 inline-block rounded bg-mint px-2 py-1 text-xs text-bg">{e.tag}</span>
                <p className="mt-3 text-sm text-muted">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POV */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Nuestra postura consultora (sin teatro, solo valor)' : 'Our Consulting POV (No Theater, Just Value)'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Priorizamos el impacto medible sobre el hype de la herramienta del día. Espera decisiones claras, artefactos ligeros e iteración rápida, fundamentados en mejores prácticas de arquitectura en la nube, disciplina FinOps, principios de DataOps/DevSecOps y pensamiento de producto de “construir solo lo que importa”.'
              : 'We prioritize measurable impact over tool-of-the-day hype. Expect clear decisions, lightweight artifacts, and fast iteration—grounded in Cloud architecture best practices, FinOps discipline, DataOps/DevSecOps principles, and “build only what matters” product thinking.'}
          </p>
        </div>
      </section>

      {/* Ready to Move */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">{lang === 'es' ? '¿Listo para avanzar?' : 'Ready to Move?'}</h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Convirtamos la ambigüedad en acción. Agenda una llamada de descubrimiento de 30 minutos: trae tus objetivos y principales bloqueadores; nosotros llevamos opciones claras, trade-offs y un siguiente paso accionable. Si hay encaje, iniciamos un Sprint de Estrategia de dos semanas para ganar momentum rápido.'
              : 'Let’s turn ambiguity into action. Schedule a 30-minute discovery call—bring your goals and top blockers; we’ll bring clear options, trade-offs, and an actionable next step. If there’s a fit, we’ll kick off a two-week Strategy Sprint to build momentum fast.'}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
            >
              {lang === 'es' ? 'Contáctanos' : 'Get in touch'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

