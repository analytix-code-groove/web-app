import type { Metadata } from 'next'
import Link from 'next/link'
import { FiList, FiCpu, FiBox, FiCode, FiShield, FiUpload, FiTrendingUp } from 'react-icons/fi'
import StepTimeline from '@/components/StepTimeline'
import CodeToggle from '@/components/CodeToggle'
import { useLanguage } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Apps & APIs Services | AnalytiX',
  description:
    'From prototype to production — applications and integrations that scale with your business.',
}

export default function AppsServicePage() {
  const { lang } = useLanguage()

  const journeyEn = [
    {
      icon: FiList,
      title: 'Define Requirements',
      description: 'Collaborate with stakeholders to clarify goals, user needs, and success metrics.',
    },
    {
      icon: FiCpu,
      title: 'Architect the Solution',
      description: 'Design scalable, secure, and maintainable application or API architectures.',
    },
    {
      icon: FiBox,
      title: 'Prototype & Validate',
      description: 'Build functional prototypes to confirm usability, workflows, and feasibility.',
    },
    {
      icon: FiCode,
      title: 'Develop & Integrate',
      description: 'Implement the solution and integrate with existing systems and third-party services.',
    },
    {
      icon: FiShield,
      title: 'Test & Secure',
      description: 'Conduct rigorous QA, performance testing, and security hardening.',
    },
    {
      icon: FiUpload,
      title: 'Deploy & Launch',
      description: 'Roll out with minimal disruption, ensuring smooth adoption and clear documentation.',
    },
    {
      icon: FiTrendingUp,
      title: 'Monitor & Evolve',
      description: 'Track performance, gather feedback, and implement enhancements to keep pace with your needs.',
    },
  ]

  const journeyEs = [
    {
      icon: FiList,
      title: 'Definir requisitos',
      description: 'Colabora con las partes interesadas para aclarar objetivos, necesidades de usuarios y métricas de éxito.',
    },
    {
      icon: FiCpu,
      title: 'Arquitectar la solución',
      description: 'Diseña arquitecturas de aplicaciones o APIs escalables, seguras y mantenibles.',
    },
    {
      icon: FiBox,
      title: 'Prototipar y validar',
      description: 'Construye prototipos funcionales para confirmar usabilidad, flujos y viabilidad.',
    },
    {
      icon: FiCode,
      title: 'Desarrollar e integrar',
      description: 'Implementa la solución e intégrala con sistemas existentes y servicios de terceros.',
    },
    {
      icon: FiShield,
      title: 'Probar y asegurar',
      description: 'Realiza QA riguroso, pruebas de rendimiento y endurecimiento de seguridad.',
    },
    {
      icon: FiUpload,
      title: 'Desplegar y lanzar',
      description: 'Implementa con mínima interrupción, asegurando adopción fluida y documentación clara.',
    },
    {
      icon: FiTrendingUp,
      title: 'Monitorizar y evolucionar',
      description: 'Sigue el rendimiento, recopila feedback e implementa mejoras para mantener el ritmo de tus necesidades.',
    },
  ]

  const journey = lang === 'es' ? journeyEs : journeyEn

  const bulletsEn = [
    {
      bold: 'Accelerate Development –',
      text: ' Deliver production-ready apps and APIs in weeks, not months.',
    },
    {
      bold: 'Enhance Integration –',
      text: ' Connect internal and external systems for frictionless data exchange.',
    },
    {
      bold: 'Improve Reliability –',
      text: ' Build with quality and performance in mind, reducing downtime and support costs.',
    },
    {
      bold: 'Scale with Confidence –',
      text: ' Architect solutions that can grow as your user base and data volumes expand.',
    },
  ]

  const bulletsEs = [
    {
      bold: 'Acelera el desarrollo –',
      text: ' Entrega apps y APIs listas para producción en semanas, no meses.',
    },
    {
      bold: 'Mejora la integración –',
      text: ' Conecta sistemas internos y externos para un intercambio de datos sin fricción.',
    },
    {
      bold: 'Incrementa la confiabilidad –',
      text: ' Construye con calidad y rendimiento en mente, reduciendo el tiempo de inactividad y los costos de soporte.',
    },
    {
      bold: 'Escala con confianza –',
      text: ' Arquitecta soluciones que puedan crecer a medida que aumenten tus usuarios y volúmenes de datos.',
    },
  ]

  const bullets = lang === 'es' ? bulletsEs : bulletsEn

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-28">
        <h1 className="font-heading text-4xl font-semibold text-text">
          {lang === 'es' ? 'Servicios de Apps y APIs' : 'Apps & APIs Services'}
        </h1>
        <p className="mt-6 text-lg text-muted">
          {lang === 'es'
            ? 'Del prototipo a la producción: aplicaciones e integraciones que crecen con tu negocio.'
            : 'From prototype to production — applications and integrations that scale with your business.'}
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-mint px-6 py-3 font-medium text-bg shadow-soft"
          >
            {lang === 'es' ? 'Hablemos' : 'Let’s talk'}
          </Link>
        </div>
        <CodeToggle />
      </section>

      {/* Why Modern Apps */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-semibold text-text">
            {lang === 'es'
              ? 'Por qué las Apps y APIs modernas importan para tu negocio'
              : 'Why Modern Apps & APIs Matter for Your Business'}
          </h2>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Tus aplicaciones y APIs son la columna vertebral de las operaciones digitales. Los sistemas bien diseñados no solo ejecutan tus procesos, también crean nuevas oportunidades.'
              : 'Your applications and APIs are the backbone of digital operations. Well-designed systems don’t just run your processes—they create new opportunities.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Desde automatizar tareas manuales hasta permitir integración sin fricciones con socios y plataformas, las apps y APIs modernas mejoran la eficiencia, la experiencia del usuario y reducen el riesgo operativo.'
              : 'From automating manual tasks to enabling seamless integration with partners and platforms, modern apps and APIs improve efficiency, enhance user experiences, and reduce operational risk.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Con la arquitectura adecuada, pueden adaptarse y crecer con tu negocio en lugar de frenarlo.'
              : 'With the right architecture, they can adapt and grow with your business instead of holding it back.'}
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
              ? 'Construimos software que resuelve problemas reales, no solo muestra tecnología. Ya sea que necesites una app empresarial personalizada, una API pública segura o integración sin fricciones entre sistemas, nos enfocamos en soluciones que aporten impacto medible.'
              : 'We build software that solves real problems, not just showcases technology. Whether you need a custom business app, a secure public API, or seamless integration between systems, we focus on solutions that deliver measurable impact.'}
          </p>
          <p className="mt-4 text-muted">
            {lang === 'es'
              ? 'Con experiencia en múltiples industrias, alineamos cada desarrollo con tus requisitos de rendimiento, seguridad y escalabilidad, para que tu tecnología siga siendo un activo y no una carga.'
              : 'Drawing from experience in multiple industries, we align every build with your performance, security, and scalability requirements—so your technology remains an asset, not a liability.'}
          </p>
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
            {lang === 'es' ? 'Impulsa el futuro de las operaciones digitales' : 'Engage the Future of Digital Operations'}
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

