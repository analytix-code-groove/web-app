import type { Metadata } from 'next'
import Link from 'next/link'
import { FiRefreshCw, FiCheckCircle, FiShield, FiTarget, FiPenTool, FiBox, FiBarChart } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Automation & QA Services | AnalytiX',
  description:
    'Smarter processes. Higher quality. Fewer headaches.',
}

export default function AutomationQaServicePage() {
  const { lang } = useLanguage()

  const coreEn = [
    {
      icon: FiRefreshCw,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks with smart orchestration.',
    },
    {
      icon: FiCheckCircle,
      title: 'Test Automation',
      description: 'Increase coverage and catch regressions early.',
    },
    {
      icon: FiShield,
      title: 'Quality Gates',
      description: 'Enforce standards before changes reach production.',
    },
  ]

  const coreEs = [
    {
      icon: FiRefreshCw,
      title: 'Automatización de flujos',
      description: 'Elimina tareas repetitivas con orquestación inteligente.',
    },
    {
      icon: FiCheckCircle,
      title: 'Automatización de pruebas',
      description: 'Aumenta la cobertura y detecta regresiones temprano.',
    },
    {
      icon: FiShield,
      title: 'Quality Gates',
      description: 'Aplica estándares antes de que los cambios lleguen a producción.',
    },
  ]

  const core = lang === 'es' ? coreEs : coreEn

  const journeyEn = [
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
  ]

  const journeyEs = [
    {
      icon: FiTarget,
      title: 'Apuntar a lo que importa',
      description:
        'Identificamos los procesos y puntos de falla de mayor impacto donde la automatización y QA harán la diferencia.',
    },
    {
      icon: FiPenTool,
      title: 'Diseñar para escalar',
      description:
        'Arquitectamos flujos, suites de pruebas y movimientos de datos mantenibles que crecen con tu producto y equipo.',
    },
    {
      icon: FiBox,
      title: 'Construir donde cuenta',
      description:
        'RPA para tareas repetitivas, automatización de pruebas API/UI para cobertura y hooks CI/CD para mantener la calidad continua.',
    },
    {
      icon: FiShield,
      title: 'Reforzar la confiabilidad',
      description:
        'Pruebas de rendimiento, seguridad y regresión aseguran que los lanzamientos sean predecibles, no esperanzados.',
    },
    {
      icon: FiBarChart,
      title: 'Medir y mejorar',
      description:
        'Dashboards, SLIs/SLOs y bucles de retroalimentación mantienen el sistema honesto y en mejora continua.',
    },
  ]

  const journey = lang === 'es' ? journeyEs : journeyEn

  const bulletsEn = [
    {
      bold: 'Eliminate Repetitive Work –',
      text: ' Free up staff from manual tasks with RPA and workflow automation.',
    },
    {
      bold: 'Improve Release Speed –',
      text: ' Implement continuous testing to shorten development cycles without sacrificing quality.',
    },
    {
      bold: 'Enhance Product Reliability –',
      text: ' Catch and fix issues earlier with automated functional and regression testing.',
    },
    {
      bold: 'Reduce Operational Risk –',
      text: ' Enforce consistent processes and quality checks that minimize costly errors.',
    },
  ]

  const bulletsEs = [
    {
      bold: 'Elimina el trabajo repetitivo –',
      text: ' Libera al personal de tareas manuales con RPA y automatización de flujos.',
    },
    {
      bold: 'Mejora la velocidad de entrega –',
      text: ' Implementa pruebas continuas para acortar los ciclos de desarrollo sin sacrificar calidad.',
    },
    {
      bold: 'Aumenta la confiabilidad del producto –',
      text: ' Detecta y corrige problemas antes con pruebas funcionales y de regresión automatizadas.',
    },
    {
      bold: 'Reduce el riesgo operativo –',
      text: ' Aplica procesos y controles de calidad consistentes que minimizan errores costosos.',
    },
  ]

  const bullets = lang === 'es' ? bulletsEs : bulletsEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Servicios de Automatización y QA' : 'Automation & QA Services'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'Procesos más inteligentes. Mayor calidad. Menos dolores de cabeza.'
            : 'Smarter processes. Higher quality. Fewer headaches.'}
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

      {/* Why Automation & QA */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Por qué la Automatización y QA importan para tu negocio'
              : 'Why Automation & QA Matter for Your Business'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Los procesos manuales y repetitivos desaceleran a los equipos e introducen errores. Al automatizar flujos y aplicar aseguramiento de calidad en cada etapa, puedes entregar más rápido, reducir costos y mantener un desempeño consistente. Desde RPA hasta pipelines de pruebas continuas, la Automatización y QA garantizan sistemas confiables, equipos enfocados en trabajo de alto valor y clientes con mejor experiencia.'
              : 'Manual, repetitive processes slow teams down and introduce errors. By automating workflows and embedding quality assurance into every stage, you can deliver faster, reduce costs, and maintain consistent performance. From robotic process automation (RPA) to continuous testing pipelines, Automation & QA ensure your systems run reliably, your teams focus on high-value work, and your customers get a better experience every time.'}
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
              ? 'Vemos la automatización y QA como habilitadores, no como ideas tardías. Cada proceso que automatizamos y cada prueba que diseñamos tiene un resultado comercial claro: reducir tiempo de procesamiento, mejorar la detección de defectos o asegurar el cumplimiento regulatorio.'
              : 'We see automation and QA as enablers, not afterthoughts. Every process we automate and every test we design has a clear business outcome—whether it’s reducing processing time, improving defect detection, or ensuring regulatory compliance.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Al combinar frameworks modernos de automatización con prácticas rigurosas de QA, creamos soluciones rápidas, confiables y diseñadas para durar.'
              : 'By combining modern automation frameworks with rigorous QA practices, we create solutions that are fast, reliable, and built to last.'}
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Capacidades Clave' : 'Core Capabilities'}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {core.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Nuestra ruta de implementación' : 'Our Implementation Journey'}
          </h2>
          <div className="mt-8 text-muted">
            <StepTimeline steps={journey} />
          </div>
        </div>
      </section>

      {/* Engage the Future */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Impulsa el futuro de operaciones confiables' : 'Engage the Future of Reliable Operations'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es' ? 'Nos asociamos contigo para:' : 'We partner with you to:'}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {bullets.map(b => (
              <li key={b.bold}>
                <span className="font-medium text-text">{b.bold}</span>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

