import type { Metadata } from 'next'
import Link from 'next/link'
import { FiSearch, FiShield, FiRefreshCw, FiCodesandbox, FiServer, FiUsers } from 'react-icons/fi'
import CoreCapability from '@/components/CoreCapability'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AnalytiX',
  description: 'Build, deploy, and scale with confidence.',
}

export default function CloudDevOpsServicePage() {
  const { lang } = useLanguage()

  const capabilitiesEn = [
    {
      icon: FiSearch,
      title: 'Assess & Align',
      description: 'Understand your infrastructure, delivery challenges, and business priorities.',
    },
    {
      icon: FiShield,
      title: 'Design for Scale',
      description: 'Architect cloud-native or hybrid solutions built for resilience and compliance.',
    },
    {
      icon: FiRefreshCw,
      title: 'Automate Delivery',
      description: 'Implement CI/CD pipelines, automated testing, and deployment workflows.',
    },
    {
      icon: FiCodesandbox,
      title: 'Infrastructure as Code',
      description: 'Use tools like Terraform or Pulumi for repeatable, reliable provisioning.',
    },
    {
      icon: FiServer,
      title: 'Optimize & Monitor',
      description: 'Leverage observability and cost analysis to ensure your environment evolves with your needs.',
    },
    {
      icon: FiUsers,
      title: 'Embed DevOps Culture',
      description: 'Coach teams to adopt practices that sustain long-term agility and quality.',
    },
  ]

  const capabilitiesEs = [
    {
      icon: FiSearch,
      title: 'Evaluar y alinear',
      description: 'Comprende tu infraestructura, desafíos de entrega y prioridades del negocio.',
    },
    {
      icon: FiShield,
      title: 'Diseñar para escalar',
      description: 'Arquitecturas cloud-native o híbridas construidas para resiliencia y cumplimiento.',
    },
    {
      icon: FiRefreshCw,
      title: 'Automatizar entregas',
      description: 'Implementa pipelines CI/CD, pruebas automatizadas y flujos de despliegue.',
    },
    {
      icon: FiCodesandbox,
      title: 'Infraestructura como código',
      description: 'Usa herramientas como Terraform o Pulumi para provisión repetible y confiable.',
    },
    {
      icon: FiServer,
      title: 'Optimizar y monitorear',
      description: 'Aprovecha observabilidad y análisis de costos para que tu entorno evolucione con tus necesidades.',
    },
    {
      icon: FiUsers,
      title: 'Incorporar cultura DevOps',
      description: 'Forma equipos para adoptar prácticas que mantengan agilidad y calidad a largo plazo.',
    },
  ]

  const capabilities = lang === 'es' ? capabilitiesEs : capabilitiesEn

  const outcomesEn = [
    { bold: 'Accelerate Releases –', text: ' Ship features faster without compromising stability.' },
    { bold: 'Improve Reliability –', text: ' Design systems that self-heal and recover quickly from failures.' },
    { bold: 'Control Costs –', text: ' Optimize resource usage with right-sizing, automation, and governance.' },
    { bold: 'Increase Agility –', text: ' Enable teams to adapt quickly to market and customer needs.' },
  ]

  const outcomesEs = [
    { bold: 'Acelera los lanzamientos –', text: ' libera funcionalidades más rápido sin comprometer la estabilidad.' },
    { bold: 'Mejora la confiabilidad –', text: ' diseña sistemas que se auto-recuperan rápidamente de las fallas.' },
    { bold: 'Controla los costos –', text: ' optimiza el uso de recursos con dimensionamiento adecuado, automatización y gobernanza.' },
    { bold: 'Incrementa la agilidad –', text: ' permite a los equipos adaptarse rápidamente a las necesidades del mercado y del cliente.' },
  ]

  const outcomes = lang === 'es' ? outcomesEs : outcomesEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Servicios de Cloud y DevOps' : 'Cloud & DevOps Services'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'Construye, despliega y escala con confianza.'
            : 'Build, deploy, and scale with confidence.'}
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

      {/* Why Cloud & DevOps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Por qué Cloud y DevOps importan para tu negocio'
              : 'Why Cloud & DevOps Matter for Your Business'}
          </h2>
          <p className="mt-8 text-muted">
            {lang === 'es'
              ? 'Las empresas modernas no pueden permitirse despliegues lentos, infraestructura frágil o cuellos de botella de escalado. Las prácticas de Cloud y DevOps transforman cómo entregas tecnología, acortando ciclos de lanzamiento, mejorando la confiabilidad y habilitando un crecimiento rentable.'
              : 'Modern businesses can’t afford slow deployments, fragile infrastructure, or scaling bottlenecks. Cloud and DevOps practices transform how you deliver technology—shortening release cycles, improving reliability, and enabling cost-efficient growth.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Desde infraestructura como código hasta pipelines CI/CD automatizados, Cloud y DevOps mantienen tus sistemas resilientes, seguros y listos para adaptarse a las demandas cambiantes del negocio.'
              : 'From infrastructure-as-code to automated CI/CD pipelines, Cloud & DevOps keep your systems resilient, secure, and ready to adapt to changing business demands.'}
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
              ? 'Nos enfocamos en estrategias de DevOps y Cloud que entregan resultados medibles, no solo adopción de herramientas. Ya sea migrando a la nube, optimizando un entorno existente o incorporando cultura DevOps, buscamos crear infraestructura y flujos que escalen sin añadir complejidad.'
              : 'We focus on DevOps and cloud strategies that deliver measurable outcomes, not just tool adoption. Whether migrating to the cloud, optimizing an existing environment, or embedding DevOps culture into your teams, our goal is to create infrastructure and workflows that scale without adding complexity.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Combinamos mejores prácticas de arquitectura en la nube con automatización para asegurar rendimiento, seguridad y eficiencia de costos, para que tu tecnología trabaje más duro por ti y no al revés.'
              : 'We combine cloud architecture best practices with automation to ensure performance, security, and cost-effectiveness—so your technology works harder for you, not the other way around.'}
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Cómo entregamos (enfoque claro y accionable)'
              : 'How We Deliver (Clear, Actionable Focus)'}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(c => (
              <CoreCapability key={c.title} {...c} />
            ))}
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
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es' ? 'Resultados en los que puedes confiar' : 'Outcomes You Can Count On'}
          </h2>
          <p className="mt-4 text-muted">{lang === 'es' ? 'Nos asociamos contigo para:' : 'We partner with you to:'}</p>
          <ul className="mt-8 list-disc space-y-4 pl-5 text-muted">
            {outcomes.map(o => (
              <li key={o.bold}>
                <span className="font-medium text-text">{o.bold}</span>
                {o.text}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

