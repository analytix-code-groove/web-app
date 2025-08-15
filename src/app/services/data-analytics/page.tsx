import type { Metadata } from 'next'
import Link from 'next/link'
import { FiDatabase, FiGitBranch, FiCheckCircle, FiLayers, FiBarChart2, FiPlayCircle } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import StepTimeline from '@/components/StepTimeline'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Data & Analytics Services | AnalytiX',
  description: 'From raw data to real results — faster, smarter, and at scale.',
}

const capabilitiesEn = [
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

const capabilitiesEs = [
  {
    icon: FiDatabase,
    title: 'Almacenes y Lakes',
    description:
      'Almacenamiento escalable y optimizado para datos listos para analítica en AWS, Azure, GCP o local.',
  },
  {
    icon: FiGitBranch,
    title: 'Pipelines ETL / ELT',
    description:
      'Ingesta por lotes, en streaming y basada en eventos—datos confiables entregados donde se necesitan.',
  },
  {
    icon: FiCheckCircle,
    title: 'Calidad y Gobernanza',
    description:
      'Validación, linaje, monitoreo y políticas que mantienen los datos confiables y en cumplimiento.',
  },
]

const approachStepsEn = [
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

const approachStepsEs = [
  {
    icon: FiLayers,
    title: 'Romper los Silos',
    description:
      'Elimina la fragmentación de datos consolidando información crítica en un entorno unificado y gobernado, brindando a los equipos acceso rápido y confiable a datos confiables.',
  },
  {
    icon: FiGitBranch,
    title: 'Modernizar la Infraestructura',
    description:
      'Implementa arquitecturas escalables y adopta prácticas DataOps para habilitar analítica predictiva e informes de autoservicio.',
  },
  {
    icon: FiBarChart2,
    title: 'Activar la Inteligencia',
    description:
      'Integra analítica en tiempo real, IA y machine learning para incorporar el poder de la toma de decisiones directamente en las operaciones diarias.',
  },
  {
    icon: FiPlayCircle,
    title: 'Automatizar para la Velocidad',
    description:
      'Logra un estado donde los insights generen acciones instantáneas, permitiendo que tu negocio opere con precisión, agilidad y velocidad inigualables.',
  },
]

export default function DataAnalyticsServicePage() {
  const { lang } = useLanguage()
  const capabilities = lang === 'es' ? capabilitiesEs : capabilitiesEn
  const approachSteps = lang === 'es' ? approachStepsEs : approachStepsEn

  const foundationsEn = [
    {
      bold: 'Streamlined Operations –',
      text: ' Keep data accurate, accessible, and ready to use, reducing wasted time on searching, cleaning, and reconciling information.',
    },
    {
      bold: 'Cost Optimization & Risk Reduction –',
      text: ' Apply smart governance to uncover inefficiencies, cut storage costs, and maintain compliance with confidence.',
    },
    {
      bold: 'Fuel for Innovation –',
      text: ' Harness clean, scalable data infrastructure to power analytics, AI, and ML—enabling faster insights and sharper decision-making.',
    },
  ]

  const foundationsEs = [
    {
      bold: 'Operaciones simplificadas –',
      text: ' Mantén los datos precisos, accesibles y listos para usar, reduciendo el tiempo perdido en buscarlos, limpiarlos y reconciliarlos.',
    },
    {
      bold: 'Optimización de costos y reducción de riesgos –',
      text: ' Aplica una gobernanza inteligente para descubrir ineficiencias, reducir costos de almacenamiento y mantener la conformidad con confianza.',
    },
    {
      bold: 'Combustible para la innovación –',
      text: ' Aprovecha una infraestructura de datos limpia y escalable para impulsar analítica, IA y ML, permitiendo insights más rápidos y decisiones más acertadas.',
    },
  ]

  const foundations = lang === 'es' ? foundationsEs : foundationsEn

  const outcomesEn = [
    { bold: 'Faster Decisions:', text: ' Eliminate delays caused by manual data prep.' },
    { bold: 'Greater Agility:', text: ' Respond instantly to market changes with real-time intelligence.' },
    { bold: 'Lower Costs:', text: ' Reduce inefficiencies, avoid compliance penalties, and cut data storage waste.' },
    { bold: 'Innovation at Scale:', text: ' Enable advanced analytics, AI, and automation across teams without bottlenecks.' },
  ]

  const outcomesEs = [
    { bold: 'Decisiones más rápidas:', text: ' elimina los retrasos causados por la preparación manual de datos.' },
    { bold: 'Mayor agilidad:', text: ' responde al instante a los cambios del mercado con inteligencia en tiempo real.' },
    { bold: 'Menores costos:', text: ' reduce ineficiencias, evita sanciones de cumplimiento y corta el desperdicio de almacenamiento de datos.' },
    { bold: 'Innovación a escala:', text: ' habilita analítica avanzada, IA y automatización en los equipos sin cuellos de botella.' },
  ]

  const outcomes = lang === 'es' ? outcomesEs : outcomesEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Servicios de Datos y Analítica' : 'Data & Analytics Services'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'De datos crudos a resultados reales — más rápido, más inteligente y a escala.'
            : 'From raw data to real results — faster, smarter, and at scale.'}
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

      {/* Why Foundations */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Por qué importan las bases de datos sólidas'
              : 'Why Strong Data Foundations Matter'}
          </h2>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {foundations.map(f => (
              <li key={f.bold}>
                <span className="font-medium text-text">{f.bold}</span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Capabilities with Icons */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Capacidades Clave' : 'Core Capabilities'}
          </h2>
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
            {lang === 'es'
              ? 'Nuestro Enfoque — del Caos de Datos a la Confianza'
              : 'Our Approach — From Data Chaos to Data Confidence'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Nuestra metodología comprobada transforma tus operaciones de datos en una progresión clara y estratégica, asegurando que cada paso entregue valor empresarial medible.'
              : 'Our proven methodology transforms your data operations in a clear, strategic progression—ensuring every step delivers measurable business value.'}
          </p>
          <div className="mt-8 text-muted">
            <StepTimeline steps={approachSteps} />
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Lo que Nuestro Servicio Permite' : 'What Our Service Enables'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Al asociarte con nosotros, no solo obtienes mejores datos — obtienes un negocio que funciona con insights.'
              : 'When you partner with us, you don’t just get better data — you get a business that runs on insight.'}
          </p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {outcomes.map(o => (
              <li key={o.bold}>
                <span className="font-medium text-text">{o.bold}</span>
                {o.text}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-text">
            {lang === 'es'
              ? 'Involucra tus datos. Potencia a tu gente. Supera a tu competencia.'
              : 'Engage your data. Empower your people. Outpace your competition.'}
          </p>
          <p className="mt-2 text-muted">
            {lang === 'es'
              ? 'Con una base de datos sólida y capacidades modernas de analítica, cada decisión que tomas se vuelve más precisa, rápida e impactante, impulsando un crecimiento medible y una ventaja sostenible.'
              : 'With a strong data foundation and modern analytics capabilities, every decision you make becomes sharper, faster, and more impactful — driving measurable growth and sustainable advantage.'}
          </p>
        </div>
      </section>
    </main>
  )
}
