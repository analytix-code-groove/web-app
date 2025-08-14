'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'es'

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: 'About',
    dataEngineering: 'Data Engineering',
    dataEngineeringDesc:
      'We design and implement robust data pipelines that ensure your information flows seamlessly from source to destination. Our expertise covers ETL/ELT processes, orchestration frameworks, and data quality checks to keep your systems running reliably. With a focus on SLOs, scalability, and maintainability, we help you build a foundation that supports real-time analytics, machine learning, and business intelligence without downtime or data loss.',
    dataEngineeringCard: 'Pipelines, orchestration, quality, SLOs.',
    cloudDevops: 'Cloud & DevOps',
    cloudDevopsDesc:
      'We help you leverage cloud platforms like AWS to deploy, scale, and optimize your infrastructure. From Infrastructure as Code (IaC) and CI/CD automation to security best practices and cost optimization, we ensure your systems run efficiently and securely. Our DevOps approach bridges development and operations, enabling faster releases, better reliability, and continuous improvement without compromising performance.',
    cloudDevopsCard: 'AWS, IaC, CI/CD, cost-safe scaling.',
    blog: 'Blog',
    company: 'Company',
    Resources: 'Resources',
    services: 'Services',
    contact: 'Contact',
    login: 'Log in',
    letsTalk: "Let’s talk",
    seeServices: 'See services',
    readBlog: 'Read the blog',
    whereData: 'Where Data',
    meets: 'Meets',
    flow: 'Flow',
    heroParagraph:
      'We build reliable data platforms and production-grade apps—fast, observable, secure. Less friction, more groove.',
    analytics: 'Analytics',
    analyticsDesc:
      'Turn data into insight with interactive dashboards and analytics solutions designed to drive decision-making. We combine advanced visualization tools with well-structured data models to deliver accurate, timely, and actionable insights. Whether it’s business performance monitoring, trend analysis, or KPI tracking, our solutions empower teams to make informed choices with confidence.',
    analyticsCard: 'Dashboards that drive decisions.',
    aiAutomation: 'AI / Automation',
    aiAutomationDesc:
      'Harness the power of AI to streamline processes and boost productivity. We build intelligent workflows using Large Language Models (LLMs), autonomous agents, and task automation frameworks. From customer service bots to process orchestration and document processing, our solutions free up time, reduce errors, and enable your team to focus on high-value work.',
    aiAutomationCard: 'LLMs, agents, workflow automation.',
    appsApis: 'Apps & APIs',
    appsApisDesc:
      'We turn your vision into reality — from concept to fully operational applications. Our team develops secure, scalable web and mobile apps, along with APIs that integrate seamlessly with your existing systems. Whether you need a proof of concept or a production-grade product, we follow best practices in architecture, testing, and deployment to ensure long-term success.',
    appsApisCard: 'From prototype to production.',
    itConsulting: 'IT Consulting',
    itConsultingDesc:
      'We provide strategic guidance to align your technology with your business goals. Our consulting services cover IT architecture design, digital transformation roadmaps, system modernization, and vendor selection. By combining technical expertise with a deep understanding of business operations, we help you make decisions that reduce risk, optimize costs, and position you for growth.',
    itConsultingCard: 'Strategy, architecture, roadmaps.',
    learnMore: 'Learn more →',
    rights: 'All rights reserved.',
    welcomeBack: 'Welcome back',
    signInToAccount: 'Sign in to your account',
    continueWithGithub: 'Continue with GitHub',
    continueWithGoogle: 'Continue with Google',
    or: 'or',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    password: 'Password',
    passwordPlaceholder: '••••••••••',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    dontHaveAccount: "Don't have an account?",
    signUpNow: 'Sign Up Now',
    termsAgreement:
      "By continuing, you agree to Analytix's Terms of Service and Privacy Policy, and to receive periodic emails with updates.",
  },
  es: {
    about: 'Acerca de',
    dataEngineering: 'Ingeniería de Datos',
    dataEngineeringDesc:
      'Diseñamos e implementamos pipelines de datos robustos que garantizan que tu información fluya sin interrupciones desde el origen hasta el destino. Nuestra experiencia abarca procesos ETL/ELT, frameworks de orquestación y controles de calidad de datos para mantener tus sistemas funcionando de forma confiable. Con un enfoque en SLOs, escalabilidad y mantenibilidad, te ayudamos a construir una base que soporta analítica en tiempo real, aprendizaje automático e inteligencia de negocios sin interrupciones ni pérdida de datos.',
    dataEngineeringCard: 'Pipelines, orquestación, calidad, SLOs.',
    cloudDevops: 'Nube y DevOps',
    cloudDevopsDesc:
      'Te ayudamos a aprovechar plataformas en la nube como AWS para desplegar, escalar y optimizar tu infraestructura. Desde Infraestructura como Código (IaC) y automatización CI/CD hasta buenas prácticas de seguridad y optimización de costos, aseguramos que tus sistemas funcionen de manera eficiente y segura. Nuestro enfoque DevOps conecta desarrollo y operaciones, permitiendo lanzamientos más rápidos, mayor confiabilidad y mejora continua sin comprometer el rendimiento.',
    cloudDevopsCard: 'AWS, IaC, CI/CD, escalado rentable.',
    blog: 'Blog',
    company: 'Compañía',
    Resources: 'Recursos',
    services: 'Servicios',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    letsTalk: 'Hablemos',
    seeServices: 'Ver servicios',
    readBlog: 'Leer el blog',
    whereData: 'Where Data',
    meets: 'Meets',
    flow: 'Flow',
    heroParagraph:
      'Construimos plataformas de datos confiables y aplicaciones de producción: rápidas, observables y seguras. Menos fricción, más ritmo.',
    analytics: 'Analítica',
    analyticsDesc:
      'Convierte datos en información con paneles interactivos y soluciones analíticas diseñadas para impulsar la toma de decisiones. Combinamos herramientas de visualización avanzadas con modelos de datos bien estructurados para entregar insights precisos, oportunos y accionables. Ya sea monitoreo del desempeño del negocio, análisis de tendencias o seguimiento de KPIs, nuestras soluciones permiten a los equipos tomar decisiones informadas con confianza.',
    analyticsCard: 'Paneles que impulsan decisiones.',
    aiAutomation: 'IA / Automatización',
    aiAutomationDesc:
      'Aprovecha el poder de la IA para simplificar procesos y aumentar la productividad. Construimos flujos de trabajo inteligentes usando modelos de lenguaje grande (LLMs), agentes autónomos y frameworks de automatización de tareas. Desde bots de atención al cliente hasta orquestación de procesos y procesamiento de documentos, nuestras soluciones liberan tiempo, reducen errores y permiten que tu equipo se concentre en el trabajo de mayor valor.',
    aiAutomationCard: 'LLMs, agentes, automatización de flujos.',
    appsApis: 'Apps y APIs',
    appsApisDesc:
      'Convertimos tu visión en realidad, desde el concepto hasta aplicaciones totalmente operativas. Nuestro equipo desarrolla aplicaciones web y móviles seguras y escalables, junto con APIs que se integran sin problemas con tus sistemas existentes. Ya sea que necesites un proof of concept o un producto listo para producción, seguimos las mejores prácticas de arquitectura, pruebas y despliegue para asegurar el éxito a largo plazo.',
    appsApisCard: 'Del prototipo a la producción.',
    itConsulting: 'Consultoría IT',
    itConsultingDesc:
      'Brindamos orientación estratégica para alinear tu tecnología con tus objetivos de negocio. Nuestros servicios de consultoría abarcan diseño de arquitectura IT, roadmaps de transformación digital, modernización de sistemas y selección de proveedores. Al combinar experiencia técnica con un profundo entendimiento de las operaciones del negocio, te ayudamos a tomar decisiones que reducen riesgos, optimizan costos y te posicionan para el crecimiento.',
    itConsultingCard: 'Estrategia, arquitectura y roadmaps.',
    learnMore: 'Aprender más →',
    rights: 'Todos los derechos reservados.',
    welcomeBack: 'Bienvenido de nuevo',
    signInToAccount: 'Inicia sesión en tu cuenta',
    continueWithGithub: 'Continuar con GitHub',
    continueWithGoogle: 'Continuar con Google',
    or: 'o',
    email: 'Correo electrónico',
    emailPlaceholder: 'tu@ejemplo.com',
    password: 'Contraseña',
    passwordPlaceholder: '••••••••••',
    forgotPassword: '¿Olvidaste tu contraseña?',
    signIn: 'Iniciar sesión',
    dontHaveAccount: '¿No tienes una cuenta?',
    signUpNow: 'Regístrate ahora',
    termsAgreement:
      'Al continuar, aceptas los Términos de Servicio y la Política de Privacidad de Analytix, y autorizas el envío de correos electrónicos periódicos con actualizaciones.',
  },
}

interface LanguageContextProps {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang') as Language | null
      if (stored) return stored
      const browser = navigator.language.slice(0, 2)
      if (browser === 'es') return 'es'
    }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const t = (key: string) => translations[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

