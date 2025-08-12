'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'es'

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: 'About',
    solutions: 'Solutions',
    dataEngineering: 'Data Engineering',
    dataEngineeringDesc: 'ETL pipelines, warehouses & lakes',
    dataEngineeringCard: 'Pipelines, orchestration, quality, SLOs.',
    cloudDevops: 'Cloud & DevOps',
    cloudDevopsDesc: 'Infrastructure automation & reliability',
    cloudDevopsCard: 'AWS, IaC, CI/CD, cost-safe scaling.',
    blog: 'Blog',
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
    analyticsCard: 'Dashboards that drive decisions.',
    aiAutomation: 'AI / Automation',
    aiAutomationCard: 'LLMs, agents, workflow automation.',
    appsApis: 'Apps & APIs',
    appsApisCard: 'From prototype to production.',
    learnMore: 'Learn more →',
    rights: 'All rights reserved.',
  },
  es: {
    about: 'Acerca de',
    solutions: 'Soluciones',
    dataEngineering: 'Ingeniería de Datos',
    dataEngineeringDesc: 'Pipelines ETL, almacenes y lagos',
    dataEngineeringCard: 'Pipelines, orquestación, calidad, SLOs.',
    cloudDevops: 'Nube y DevOps',
    cloudDevopsDesc: 'Automatización de infraestructura y fiabilidad',
    cloudDevopsCard: 'AWS, IaC, CI/CD, escalado rentable.',
    blog: 'Blog',
    services: 'Servicios',
    contact: 'Contacto',
    login: 'Iniciar sesión',
    letsTalk: 'Hablemos',
    seeServices: 'Ver servicios',
    readBlog: 'Leer el blog',
    whereData: 'Donde los datos',
    meets: 'se encuentran con el',
    flow: 'flujo',
    heroParagraph:
      'Construimos plataformas de datos confiables y aplicaciones de producción: rápidas, observables y seguras. Menos fricción, más ritmo.',
    analytics: 'Analítica',
    analyticsCard: 'Paneles que impulsan decisiones.',
    aiAutomation: 'IA / Automatización',
    aiAutomationCard: 'LLMs, agentes, automatización de flujos.',
    appsApis: 'Apps y APIs',
    appsApisCard: 'Del prototipo a la producción.',
    learnMore: 'Aprender más →',
    rights: 'Todos los derechos reservados.',
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

