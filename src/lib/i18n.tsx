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

