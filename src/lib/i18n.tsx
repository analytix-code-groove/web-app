'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'es'

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: 'About',
    dataEngineering: 'Data Engineering',
    dataEngineeringDesc:
      'Design resilient pipelines, warehouses, and lakes. Analytix applies cross-industry patterns to turn messy data into trusted assets.',
    dataEngineeringCard: 'Pipelines, orchestration, quality, SLOs.',
    cloudDevops: 'Cloud & DevOps',
    cloudDevopsDesc:
      'Automate infrastructure and delivery with confidence. Our engineers bring cloud know-how from finance, health, and SaaS.',
    cloudDevopsCard: 'AWS, IaC, CI/CD, cost-safe scaling.',
    blog: 'Blog',
    company: 'Company',
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
      'Turn raw metrics into dashboards and visuals that drive action, drawing on insights from many sectors.',
    analyticsCard: 'Dashboards that drive decisions.',
    aiAutomation: 'AI / Automation',
    aiAutomationDesc:
      'Deploy LLMs and automation that streamline operations. Analytix has shipped AI for support, marketing, and ops.',
    aiAutomationCard: 'LLMs, agents, workflow automation.',
    appsApis: 'Apps & APIs',
    appsApisDesc:
      'Build scalable applications and APIs with production readiness, reusing designs proven across industries.',
    appsApisCard: 'From prototype to production.',
    itConsulting: 'IT Consulting',
    itConsultingDesc:
      'Gain a technology partner for strategy and roadmaps. Our guidance reflects lessons from work with diverse organizations.',
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
      'Diseña pipelines, almacenes y lagos resilientes. Analytix aplica patrones de múltiples industrias para convertir datos en activos confiables.',
    dataEngineeringCard: 'Pipelines, orquestación, calidad, SLOs.',
    cloudDevops: 'Nube y DevOps',
    cloudDevopsDesc:
      'Automatiza infraestructura y entrega con confianza. Nuestro equipo aporta experiencia en la nube desde finanzas, salud y SaaS.',
    cloudDevopsCard: 'AWS, IaC, CI/CD, escalado rentable.',
    blog: 'Blog',
    company: 'Compañía',
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
      'Convierte métricas en paneles y visualizaciones que impulsan acciones, con insights de muchos sectores.',
    analyticsCard: 'Paneles que impulsan decisiones.',
    aiAutomation: 'IA / Automatización',
    aiAutomationDesc:
      'Despliega LLMs y automatización para agilizar operaciones. Analytix ha entregado IA para soporte, marketing y operaciones.',
    aiAutomationCard: 'LLMs, agentes, automatización de flujos.',
    appsApis: 'Apps y APIs',
    appsApisDesc:
      'Construye apps y APIs escalables listas para producción, reutilizando diseños probados en diversas industrias.',
    appsApisCard: 'Del prototipo a la producción.',
    itConsulting: 'Consultoría IT',
    itConsultingDesc:
      'Obtén un socio tecnológico para estrategia y roadmaps. Nuestra guía refleja lecciones de organizaciones de distintos ámbitos.',
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

