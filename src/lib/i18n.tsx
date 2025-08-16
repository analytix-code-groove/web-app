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
    aboutIntro:
      'At Analytix Code Groove, we partner with you, blending structured engineering with inventive thinking to craft technology that moves with precision and style. Tough challenges become polished, scalable solutions that let you innovate faster, stay resilient, and make smarter decisions.',
    missionHeading: 'Our Mission',
    missionBody:
      "As your dedicated partner—whether you're modernizing infrastructure, harnessing the power of AI, or turning data into insight—we deliver expert solutions engineered for performance, fueled by creativity, and built for what's next—where data meets flow.",
    valuesHeading: 'What We Value',
    valuesBody:
      'We champion innovation, creativity, dedication, and expertise. Energetic and modern, developer-focused and committed, Code Groove is the trusted crosspoint where technology meets imagination and data meets business.',
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
    llmAppsTitle: 'LLM Apps',
    llmAppsDesc: 'Chatbots and copilots that accelerate your teams.',
    aiAutomationFeatureTitle: 'Automation',
    aiAutomationFeatureDesc: 'Event-driven workflows that eliminate busywork.',
    aiMonitoringTitle: 'Monitoring',
    aiMonitoringDesc: 'Track drift and performance to keep automation on target.',
    frontendsTitle: 'Frontends',
    frontendsDesc: 'Responsive interfaces built with modern frameworks.',
    apisTitle: 'APIs',
    apisDesc: 'Secure, documented endpoints for internal or public use.',
    operationsTitle: 'Operations',
    operationsDesc: 'Observability and SRE practices to keep services healthy.',
    workflowAutomationTitle: 'Workflow Automation',
    workflowAutomationDesc: 'Eliminate manual steps with tailored scripts and bots.',
    testAutomationTitle: 'Test Automation',
    testAutomationDesc: 'Unit, integration, and end-to-end suites that catch regressions.',
    qualityGatesTitle: 'Quality Gates',
    qualityGatesDesc: 'Policy checks and approvals baked into your pipelines.',
    iacTitle: 'IaC',
    iacDesc: 'Provision reproducible environments with Terraform or CloudFormation.',
    cicdTitle: 'CI/CD',
    cicdDesc: 'Automated testing and deployments for rapid, safe releases.',
    devopsSecurityTitle: 'Security',
    devopsSecurityDesc: 'Policy-as-code and guardrails baked into every pipeline.',
    strategyTitle: 'Strategy',
    strategyDesc: 'Assess your landscape to uncover opportunities and risks.',
    architectureTitle: 'Architecture',
    architectureDesc: 'Blueprint resilient, scalable systems aligned to goals.',
    roadmapsTitle: 'Roadmaps',
    roadmapsDesc: 'Prioritized technology paths that keep teams aligned.',
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
    recoverPassword: 'Recover password',
    sendResetLink: 'Send reset link',
    backToLogin: 'Back to log in',
    signUp: 'Sign up',
    sendMagicLink: 'Send magic link',
    signUpWithGoogle: 'Sign up with Google',
    signUpWithGithub: 'Sign up with GitHub',
    checkEmailForLink: 'Check your email for the signup link.',
    alreadyHaveAccount: 'Already have an account?',
    bookmarks: 'Bookmarks',
    add: 'Add',
    noBookmarksYet: 'No bookmarks yet.',
    settings: 'Settings',
    signOut: 'Sign Out',
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
    aboutIntro:
      'En Analytix Code Groove nos asociamos contigo, fusionando ingeniería estructurada y pensamiento inventivo para crear tecnología que se mueve con precisión y estilo. Los desafíos difíciles se convierten en soluciones pulidas y escalables que te permiten innovar más rápido, mantenerte resiliente y tomar decisiones más inteligentes.',
    missionHeading: 'Nuestra Misión',
    missionBody:
      'Como tu socio dedicado—ya sea modernizando infraestructura, aprovechando la IA o convirtiendo datos en conocimiento—entregamos soluciones expertas diseñadas para el rendimiento, impulsadas por la creatividad y construidas para lo que viene, donde los datos se encuentran con el flujo.',
    valuesHeading: 'Lo que Valoramos',
    valuesBody:
      'Impulsamos la innovación, la creatividad, la dedicación y la experiencia. Enérgico y enfocado en los desarrolladores, Code Groove es el punto de cruce confiable donde la tecnología se encuentra con la imaginación y los datos con el negocio.',
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
    warehousesLakesTitle: 'Almacenes y Lakes',
    warehousesLakesDesc:
      'Diseñamos e implementamos almacenes y lakes de datos escalables en cualquier plataforma — AWS, Azure, GCP o on-premises — optimizados para rendimiento, gobernanza y analítica.',
    pipelinesIntegrationTitle: 'Pipelines e Integración',
    pipelinesIntegrationDesc:
      'Construimos pipelines ETL/ELT robustos usando herramientas como Airflow, dbt o orquestadores nativos de la nube. Manejamos datos batch y streaming, integraciones de API y procesamiento orientado a eventos a cualquier escala.',
    qualityReliabilityTitle: 'Calidad y Confiabilidad',
    qualityReliabilityDesc:
      'Implementamos validación, monitoreo y seguimiento de linaje para que tus datos permanezcan exactos, confiables y en conformidad. Aseguramos que cada conjunto de datos cumpla con tus SLOs.',
    dashboardsTitle: 'Dashboards',
    dashboardsDesc: 'Dashboards en tiempo real para operaciones y KPIs.',
    visualizationTitle: 'Visualización',
    visualizationDesc: 'Gráficos personalizados que muestran tendencias y anomalías.',
    insightsTitle: 'Insights',
    insightsDesc: 'Guía para convertir métricas en acciones decisivas.',
    llmAppsTitle: 'Apps LLM',
    llmAppsDesc: 'Chatbots y copilotos que aceleran a tus equipos.',
    aiAutomationFeatureTitle: 'Automatización',
    aiAutomationFeatureDesc:
      'Flujos de trabajo orientados a eventos que eliminan tareas repetitivas.',
    aiMonitoringTitle: 'Monitoreo',
    aiMonitoringDesc:
      'Supervisa drift y rendimiento para mantener la automatización en el objetivo.',
    frontendsTitle: 'Frontends',
    frontendsDesc: 'Interfaces responsivas construidas con frameworks modernos.',
    apisTitle: 'APIs',
    apisDesc: 'Endpoints seguros y documentados para uso interno o público.',
    operationsTitle: 'Operaciones',
    operationsDesc: 'Observabilidad y prácticas SRE para mantener servicios saludables.',
    workflowAutomationTitle: 'Automatización de flujos',
    workflowAutomationDesc: 'Elimina pasos manuales con scripts y bots a medida.',
    testAutomationTitle: 'Automatización de pruebas',
    testAutomationDesc:
      'Suites unitarias, de integración y end-to-end que detectan regresiones.',
    qualityGatesTitle: 'Quality Gates',
    qualityGatesDesc:
      'Revisiones de políticas y aprobaciones integradas en tus pipelines.',
    iacTitle: 'IaC',
    iacDesc: 'Provisiona entornos reproducibles con Terraform o CloudFormation.',
    cicdTitle: 'CI/CD',
    cicdDesc: 'Pruebas y despliegues automatizados para lanzamientos rápidos y seguros.',
    devopsSecurityTitle: 'Seguridad',
    devopsSecurityDesc:
      'Política como código y guardrails integrados en cada pipeline.',
    strategyTitle: 'Estrategia',
    strategyDesc: 'Evalúa tu panorama para descubrir oportunidades y riesgos.',
    architectureTitle: 'Arquitectura',
    architectureDesc: 'Diseña sistemas resilientes y escalables alineados a objetivos.',
    roadmapsTitle: 'Roadmaps',
    roadmapsDesc: 'Rutas tecnológicas priorizadas que mantienen a los equipos alineados.',
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
    recoverPassword: 'Recuperar contraseña',
    sendResetLink: 'Enviar enlace de restablecimiento',
    backToLogin: 'Volver a iniciar sesión',
    signUp: 'Registrarse',
    sendMagicLink: 'Enviar enlace mágico',
    signUpWithGoogle: 'Registrarse con Google',
    signUpWithGithub: 'Registrarse con GitHub',
    checkEmailForLink: 'Revisa tu correo para el enlace de registro.',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    bookmarks: 'Marcadores',
    add: 'Agregar',
    noBookmarksYet: 'Aún no hay marcadores.',
    settings: 'Configuración',
    signOut: 'Cerrar sesión',
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
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null
    if (stored) {
      setLangState(stored)
    } else {
      const browser = navigator.language.slice(0, 2)
      if (browser === 'es') setLangState('es')
    }
  }, [])

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

