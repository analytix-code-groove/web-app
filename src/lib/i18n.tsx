'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'es'

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: 'About',
    dataAnalytics: 'Data & Analytics',
    dataAnalyticsDesc: 'Platforms, pipelines & dashboards',
    dataAnalyticsCard: 'Warehouses, ETL, visualization, insights.',
    cloudDevops: 'Cloud & DevOps',
    cloudDevopsDesc: 'Infra automation & reliability',
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
    comingSoon: 'Coming soon...',
    reachUsAt: 'Reach us at',
    moreInfoHeading: 'Why AnalytiX?',
    moreInfoBody:
      'From data foundations to AI, we guide you from idea to production with a battle-tested team.',
    latestPosts: 'Latest posts',
    readMore: 'Read more →',
    whereData: 'Where Data',
    meets: 'Meets',
    flow: 'Flow',
    heroParagraph:
      'We build reliable data platforms and production-grade apps—fast, observable, secure. Less friction, more groove.',
    aiAutomation: 'Generative AI',
    aiAutomationDesc: 'LLMs, agents & automation',
    aiAutomationCard: 'LLMs, agents, workflow automation.',
    automationQa: 'Automation & QA',
    automationQaDesc: 'Process automation and quality assurance',
    automationQaCard: 'Workflow automation and testing.',
    appsApis: 'Apps & APIs',
    appsApisDesc: 'Scalable apps & APIs',
    appsApisCard: 'From prototype to production.',
    itConsulting: 'IT Consulting',
    itConsultingDesc: 'Strategic tech guidance',
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
    aboutACGHeading: 'About Analytix Code Groove',
    aboutACGBody:
      'Analytix Code Groove helps teams transform data into action with a pragmatic, engineering-first mindset.',
    warehousesLakesTitle: 'Warehouses & Lakes',
    warehousesLakesDesc:
      'Design and implement scalable data warehouses and lakes on any major platform — AWS, Azure, GCP, or on-prem — optimized for performance, governance, and analytics readiness.',
    pipelinesIntegrationTitle: 'Pipelines & Integration',
    pipelinesIntegrationDesc:
      'Build robust ETL/ELT pipelines using tools like Airflow, dbt, or native cloud orchestrators. We handle batch and streaming data, API integrations, and event-driven ingestion at any scale.',
    qualityReliabilityTitle: 'Quality & Reliability',
    qualityReliabilityDesc:
      'Implement validation, monitoring, and lineage tracking so your data remains accurate, trustworthy, and compliant. We ensure every dataset meets your defined SLOs.',
    dashboardsTitle: 'Dashboards',
    dashboardsDesc: 'Real-time dashboards for operations and KPIs.',
    visualizationTitle: 'Visualization',
    visualizationDesc: 'Custom charts that surface trends and anomalies.',
    insightsTitle: 'Insights',
    insightsDesc: 'Guidance to turn metrics into decisive action.',
    aiLlmAppsTitle: 'LLM Apps',
    aiLlmAppsDesc: 'Chatbots and copilots that accelerate your teams.',
    aiAutomationFeatTitle: 'Automation',
    aiAutomationFeatDesc: 'Event-driven workflows that eliminate busywork.',
    aiMonitoringTitle: 'Monitoring',
    aiMonitoringDesc: 'Track drift and performance to keep automation on target.',
    appsFrontendsTitle: 'Frontends',
    appsFrontendsDesc: 'Responsive interfaces built with modern frameworks.',
    appsApisTitle: 'APIs',
    appsApisDesc: 'Secure, documented endpoints for internal or public use.',
    appsOperationsTitle: 'Operations',
    appsOperationsDesc: 'Observability and SRE practices to keep services healthy.',
    autoWorkflowTitle: 'Workflow Automation',
    autoWorkflowDesc: 'Eliminate manual steps with tailored scripts and bots.',
    autoTestingTitle: 'Test Automation',
    autoTestingDesc: 'Unit, integration, and end-to-end suites that catch regressions.',
    autoQualityTitle: 'Quality Gates',
    autoQualityDesc: 'Policy checks and approvals baked into your pipelines.',
    devopsIacTitle: 'IaC',
    devopsIacDesc: 'Provision reproducible environments with Terraform or CloudFormation.',
    devopsCicdTitle: 'CI/CD',
    devopsCicdDesc: 'Automated testing and deployments for rapid, safe releases.',
    devopsSecurityTitle: 'Security',
    devopsSecurityDesc: 'Policy-as-code and guardrails baked into every pipeline.',
    consultingStrategyTitle: 'Strategy',
    consultingStrategyDesc: 'Assess your landscape to uncover opportunities and risks.',
    consultingArchitectureTitle: 'Architecture',
    consultingArchitectureDesc: 'Blueprint resilient, scalable systems aligned to goals.',
    consultingRoadmapsTitle: 'Roadmaps',
    consultingRoadmapsDesc: 'Prioritized technology paths that keep teams aligned.',
  },
  es: {
    about: 'Acerca de',
    dataAnalytics: 'Datos y Analítica',
    dataAnalyticsDesc: 'Plataformas, pipelines y dashboards',
    dataAnalyticsCard: 'Almacenes, ETL, visualización e insights.',
    cloudDevops: 'Nube y DevOps',
    cloudDevopsDesc: 'Infra automatizada y confiable',
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
    comingSoon: 'Próximamente...',
    reachUsAt: 'Contáctanos en',
    moreInfoHeading: '¿Por qué AnalytiX?',
    moreInfoBody:
      'Desde bases de datos hasta IA, te ayudamos a llevar las ideas a producción con un equipo experimentado.',
    latestPosts: 'Últimas publicaciones',
    readMore: 'Leer más →',
    whereData: 'Where Data',
    meets: 'Meets',
    flow: 'Flow',
    heroParagraph:
      'Construimos plataformas de datos confiables y aplicaciones de producción: rápidas, observables y seguras. Menos fricción, más ritmo.',
    aiAutomation: 'IA Generativa',
    aiAutomationDesc: 'LLMs, agentes y automatización',
    aiAutomationCard: 'LLMs, agentes, automatización de flujos.',
    automationQa: 'Automatización y QA',
    automationQaDesc: 'Automatización de procesos y aseguramiento de calidad',
    automationQaCard: 'Automatización de flujos y pruebas.',
    appsApis: 'Apps y APIs',
    appsApisDesc: 'Apps y APIs escalables',
    appsApisCard: 'Del prototipo a la producción.',
    itConsulting: 'Consultoría IT',
    itConsultingDesc: 'Guía tecnológica estratégica',
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
    aboutACGHeading: 'Acerca de Analytix Code Groove',
    aboutACGBody:
      'Analytix Code Groove ayuda a los equipos a transformar datos en acción con una mentalidad pragmática y de ingeniería.',
    warehousesLakesTitle: 'Data Warehouses y Lakes',
    warehousesLakesDesc:
      'Diseñamos e implementamos almacenes y lakes de datos escalables en cualquier plataforma — AWS, Azure, GCP o on-prem — optimizados para rendimiento, gobernanza y preparación analítica.',
    pipelinesIntegrationTitle: 'Pipelines e Integración',
    pipelinesIntegrationDesc:
      'Construimos pipelines ETL/ELT robustos con herramientas como Airflow o dbt. Manejamos datos batch y streaming, integraciones API e ingestión basada en eventos a cualquier escala.',
    qualityReliabilityTitle: 'Calidad y Confiabilidad',
    qualityReliabilityDesc:
      'Implementamos validación, monitoreo y linaje para que tus datos sean precisos, confiables y cumplidos. Cada dataset cumple con tus SLOs definidos.',
    dashboardsTitle: 'Dashboards',
    dashboardsDesc: 'Dashboards en tiempo real para operaciones y KPIs.',
    visualizationTitle: 'Visualización',
    visualizationDesc: 'Gráficos personalizados que resaltan tendencias y anomalías.',
    insightsTitle: 'Insights',
    insightsDesc: 'Guía para convertir métricas en acciones decisivas.',
    aiLlmAppsTitle: 'Apps LLM',
    aiLlmAppsDesc: 'Chatbots y copilotos que aceleran a tus equipos.',
    aiAutomationFeatTitle: 'Automatización',
    aiAutomationFeatDesc: 'Flujos orientados a eventos que eliminan el trabajo repetitivo.',
    aiMonitoringTitle: 'Monitoreo',
    aiMonitoringDesc: 'Seguimiento de drift y desempeño para mantener la automatización en objetivo.',
    appsFrontendsTitle: 'Frontends',
    appsFrontendsDesc: 'Interfaces responsivas construidas con frameworks modernos.',
    appsApisTitle: 'APIs',
    appsApisDesc: 'Endpoints seguros y documentados para uso interno o público.',
    appsOperationsTitle: 'Operaciones',
    appsOperationsDesc: 'Observabilidad y prácticas SRE para mantener servicios saludables.',
    autoWorkflowTitle: 'Automatización de Flujos',
    autoWorkflowDesc: 'Elimina pasos manuales con scripts y bots a medida.',
    autoTestingTitle: 'Automatización de Pruebas',
    autoTestingDesc: 'Suites unitarias, de integración y end-to-end que detectan regresiones.',
    autoQualityTitle: 'Quality Gates',
    autoQualityDesc: 'Revisiones y aprobaciones integradas en tus pipelines.',
    devopsIacTitle: 'IaC',
    devopsIacDesc: 'Provisiona entornos reproducibles con Terraform o CloudFormation.',
    devopsCicdTitle: 'CI/CD',
    devopsCicdDesc: 'Pruebas y despliegues automatizados para lanzamientos rápidos y seguros.',
    devopsSecurityTitle: 'Seguridad',
    devopsSecurityDesc: 'Política como código y guardas integradas en cada pipeline.',
    consultingStrategyTitle: 'Estrategia',
    consultingStrategyDesc: 'Evalúa tu panorama para descubrir oportunidades y riesgos.',
    consultingArchitectureTitle: 'Arquitectura',
    consultingArchitectureDesc: 'Diseños resilientes y escalables alineados a los objetivos.',
    consultingRoadmapsTitle: 'Roadmaps',
    consultingRoadmapsDesc: 'Rutas tecnológicas priorizadas que mantienen a los equipos alineados.',
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

