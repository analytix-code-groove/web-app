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
    dataHeroTitle: 'Data & Analytics Services',
    dataHeroDesc: 'From raw data to real results — faster, smarter, and at scale.',
    dataWhyHeading: 'Why Strong Data Foundations Matter',
    dataWhyOpsHeading: 'Streamlined Operations –',
    dataWhyOpsText:
      ' Keep data accurate, accessible, and ready to use, reducing wasted time on searching, cleaning, and reconciling information.',
    dataWhyCostHeading: 'Cost Optimization & Risk Reduction –',
    dataWhyCostText:
      ' Apply smart governance to uncover inefficiencies, cut storage costs, and maintain compliance with confidence.',
    dataWhyFuelHeading: 'Fuel for Innovation –',
    dataWhyFuelText:
      ' Harness clean, scalable data infrastructure to power analytics, AI, and ML—enabling faster insights and sharper decision-making.',
    dataCapabilitiesHeading: 'Core Capabilities',
    dataCapabilityWarehousesTitle: 'Warehouses & Lakes',
    dataCapabilityWarehousesDesc:
      'Scalable, optimized storage for analytics-ready data on AWS, Azure, GCP, or on-prem.',
    dataCapabilityPipelinesTitle: 'ETL / ELT Pipelines',
    dataCapabilityPipelinesDesc:
      'Batch, streaming, and event-driven ingestion—reliable data delivered where it’s needed.',
    dataCapabilityQualityTitle: 'Quality & Governance',
    dataCapabilityQualityDesc:
      'Validation, lineage, monitoring, and policies that keep data trustworthy and compliant.',
    dataApproachHeading: 'Our Approach — From Data Chaos to Data Confidence',
    dataApproachIntro:
      'Our proven methodology transforms your data operations in a clear, strategic progression—ensuring every step delivers measurable business value.',
    dataStepBreakDownTitle: 'Break Down Silos',
    dataStepBreakDownDesc:
      'Eliminate data fragmentation by consolidating critical information into a unified, governed environment, giving teams fast, reliable access to trusted data.',
    dataStepModernizeTitle: 'Modernize Infrastructure',
    dataStepModernizeDesc:
      'Implement scalable architectures and adopt DataOps best practices to enable predictive analytics and self-service reporting.',
    dataStepActivateTitle: 'Activate Intelligence',
    dataStepActivateDesc:
      'Integrate real-time analytics, AI, and machine learning to embed decision-making power directly into daily operations.',
    dataStepAutomateTitle: 'Automate for Speed',
    dataStepAutomateDesc:
      'Achieve a state where insights trigger instant actions, allowing your business to operate with unmatched precision, agility, and speed.',
    dataOutcomeHeading: 'What Our Service Enables',
    dataOutcomeIntro:
      'When you partner with us, you don’t just get better data — you get a business that runs on insight.',
    dataOutcomeFasterHeading: 'Faster Decisions:',
    dataOutcomeFasterText: ' Eliminate delays caused by manual data prep.',
    dataOutcomeAgilityHeading: 'Greater Agility:',
    dataOutcomeAgilityText:
      ' Respond instantly to market changes with real-time intelligence.',
    dataOutcomeCostsHeading: 'Lower Costs:',
    dataOutcomeCostsText:
      ' Reduce inefficiencies, avoid compliance penalties, and cut data storage waste.',
    dataOutcomeInnovationHeading: 'Innovation at Scale:',
    dataOutcomeInnovationText:
      ' Enable advanced analytics, AI, and automation across teams without bottlenecks.',
    dataOutcomeFinalLead:
      'Engage your data. Empower your people. Outpace your competition.',
    dataOutcomeFinalBody:
      'With a strong data foundation and modern analytics capabilities, every decision you make becomes sharper, faster, and more impactful — driving measurable growth and sustainable advantage.',

    aiHeroTitle: 'Generative AI Services',
    aiHeroDesc: 'Where automation meets creativity to solve real-world challenges.',
    aiUseCasesHeading: 'Sample Use Cases',
    aiUseCaseDocTitle: 'Document Summarization',
    aiUseCaseDocDesc: 'Turn dense reports into bite-sized insights instantly.',
    aiUseCaseCodeTitle: 'Secure Code Generation',
    aiUseCaseCodeDesc: 'Speed up development with AI that respects your guardrails.',
    aiWhyHeading: 'Why Generative AI Matters for Your Business',
    aiWhyText:
      'Generative AI blends creativity with reasoning to drive meaningful efficiency gains. It can rapidly process vast datasets, distill complex documents into clear summaries, and automate multi-step workflows—cutting turnaround from days to minutes. Its multimodal capabilities go beyond text, transforming images, audio, and handwritten notes into structured, actionable insights your team can use immediately.',
    aiApproachHeading: 'Our Practical, Value-First Approach',
    aiApproachText:
      'We embed Generative AI into your existing operations in ways that deliver measurable impact. Drawing on our hands-on experience with both internal and client deployments, we design solutions that elevate accuracy, streamline processes, and unlock creative potential—avoiding the pitfalls of short-lived tech experiments.',
    aiJourneyHeading: 'Our Generative Implementation Journey',
    aiStepIdentifyTitle: 'Identify Opportunities',
    aiStepIdentifyDesc:
      'Pinpoint the AI use cases with the greatest potential to drive business impact.',
    aiStepAssessTitle: 'Assess Feasibility',
    aiStepAssessDesc:
      'Review scalability, security, and costs to select the most suitable models and approaches.',
    aiStepValidateTitle: 'Validate with a Pilot',
    aiStepValidateDesc:
      'Test architecture, integrations, and tools to confirm performance and fit.',
    aiStepBuildTitle: 'Build & Integrate',
    aiStepBuildDesc:
      'Develop and embed AI solutions seamlessly into your existing workflows.',
    aiStepOptimizeTitle: 'Optimize Results',
    aiStepOptimizeDesc:
      'Enhance outcomes through prompt engineering, retrieval-augmented generation, and fine-tuning.',
    aiStepEvolveTitle: 'Go Live & Evolve',
    aiStepEvolveDesc:
      'Launch with minimal disruption and refine to sustain and grow value over time.',
    aiFutureHeading: 'Engage the Future of Work',
    aiFutureIntro:
      'Generative AI isn’t just about smarter models — it’s about unlocking new possibilities for your business. We partner with you to:',
    aiFutureFreeHeading: 'Free your team from repetitive work –',
    aiFutureFreeText:
      ' Automate document-heavy processes so people can focus on high-value decisions.',
    aiFutureAskHeading: 'Ask and get answers instantly –',
    aiFutureAskText:
      ' Explore enterprise data in plain language, no SQL required.',
    aiFutureChaosHeading: 'Turn chaos into clarity –',
    aiFutureChaosText:
      ' Convert unstructured files, images, and text into insights you can act on.',
    aiFutureInnovateHeading: 'Innovate with peace of mind –',
    aiFutureInnovateText:
      ' Rely on AI that understands your context and delivers consistent, trustworthy results.',

    appsHeroTitle: 'Apps & APIs Services',
    appsHeroDesc:
      'From prototype to production — applications and integrations that scale with your business.',
    appsWhyHeading: 'Why Modern Apps & APIs Matter for Your Business',
    appsWhyText1:
      'Your applications and APIs are the backbone of digital operations. Well-designed systems don’t just run your processes—they create new opportunities.',
    appsWhyText2:
      'From automating manual tasks to enabling seamless integration with partners and platforms, modern apps and APIs improve efficiency, enhance user experiences, and reduce operational risk.',
    appsWhyText3:
      'With the right architecture, they can adapt and grow with your business instead of holding it back.',
    appsApproachHeading: 'Our Practical, Value-First Approach',
    appsApproachText1:
      'We build software that solves real problems, not just showcases technology. Whether you need a custom business app, a secure public API, or seamless integration between systems, we focus on solutions that deliver measurable impact.',
    appsApproachText2:
      'Drawing from experience in multiple industries, we align every build with your performance, security, and scalability requirements—so your technology remains an asset, not a liability.',
    appsJourneyHeading: 'Our Implementation Journey',
    appsStepDefineTitle: 'Define Requirements',
    appsStepDefineDesc:
      'Collaborate with stakeholders to clarify goals, user needs, and success metrics.',
    appsStepArchitectTitle: 'Architect the Solution',
    appsStepArchitectDesc:
      'Design scalable, secure, and maintainable application or API architectures.',
    appsStepPrototypeTitle: 'Prototype & Validate',
    appsStepPrototypeDesc:
      'Build functional prototypes to confirm usability, workflows, and feasibility.',
    appsStepDevelopTitle: 'Develop & Integrate',
    appsStepDevelopDesc:
      'Implement the solution and integrate with existing systems and third-party services.',
    appsStepTestTitle: 'Test & Secure',
    appsStepTestDesc:
      'Conduct rigorous QA, performance testing, and security hardening.',
    appsStepDeployTitle: 'Deploy & Launch',
    appsStepDeployDesc:
      'Roll out with minimal disruption, ensuring smooth adoption and clear documentation.',
    appsStepMonitorTitle: 'Monitor & Evolve',
    appsStepMonitorDesc:
      'Track performance, gather feedback, and implement enhancements to keep pace with your needs.',
    appsFutureHeading: 'Engage the Future of Digital Operations',
    appsFutureIntro: 'We partner with you to:',
    appsFutureAccelerateHeading: 'Accelerate Development –',
    appsFutureAccelerateText:
      ' Deliver production-ready apps and APIs in weeks, not months.',
    appsFutureIntegrateHeading: 'Enhance Integration –',
    appsFutureIntegrateText:
      ' Connect internal and external systems for frictionless data exchange.',
    appsFutureReliabilityHeading: 'Improve Reliability –',
    appsFutureReliabilityText:
      ' Build with quality and performance in mind, reducing downtime and support costs.',
    appsFutureScaleHeading: 'Scale with Confidence –',
    appsFutureScaleText:
      ' Architect solutions that can grow as your user base and data volumes expand.',

    autoHeroTitle: 'Automation & QA Services',
    autoHeroDesc: 'Smarter processes. Higher quality. Fewer headaches.',
    autoWhyHeading: 'Why Automation & QA Matter for Your Business',
    autoWhyText:
      'Manual, repetitive processes slow teams down and introduce errors. By automating workflows and embedding quality assurance into every stage, you can deliver faster, reduce costs, and maintain consistent performance. From robotic process automation (RPA) to continuous testing pipelines, Automation & QA ensure your systems run reliably, your teams focus on high-value work, and your customers get a better experience every time.',
    autoApproachHeading: 'Our Practical, Value-First Approach',
    autoApproachText1:
      'We see automation and QA as enablers, not afterthoughts. Every process we automate and every test we design has a clear business outcome—whether it’s reducing processing time, improving defect detection, or ensuring regulatory compliance.',
    autoApproachText2:
      'By combining modern automation frameworks with rigorous QA practices, we create solutions that are fast, reliable, and built to last.',
    autoCapabilitiesHeading: 'Core Capabilities',
    autoCapWorkflowTitle: 'Workflow Automation',
    autoCapWorkflowDesc: 'Eliminate repetitive tasks with smart orchestration.',
    autoCapTestingTitle: 'Test Automation',
    autoCapTestingDesc: 'Increase coverage and catch regressions early.',
    autoCapQualityTitle: 'Quality Gates',
    autoCapQualityDesc: 'Enforce standards before changes reach production.',
    autoJourneyHeading: 'Our Implementation Journey',
    autoStepTargetTitle: 'Target what matters',
    autoStepTargetDesc:
      'We pinpoint the highest-leverage processes and failure points where automation and QA will move the needle.',
    autoStepDesignTitle: 'Design for scale',
    autoStepDesignDesc:
      'We architect maintainable workflows, test suites, and data flows that grow with your product and team.',
    autoStepBuildTitle: 'Build where it counts',
    autoStepBuildDesc:
      'RPA for repetitive tasks, API/UI test automation for coverage, and CI/CD hooks to keep quality continuous.',
    autoStepHardenTitle: 'Harden reliability',
    autoStepHardenDesc:
      'Performance, security, and regression testing ensure releases are predictable—not hopeful.',
    autoStepMeasureTitle: 'Measure and improve',
    autoStepMeasureDesc:
      'Dashboards, SLIs/SLOs, and feedback loops keep the system honest and getting better over time.',
    autoFutureHeading: 'Engage the Future of Reliable Operations',
    autoFutureIntro: 'We partner with you to:',
    autoFutureEliminateHeading: 'Eliminate Repetitive Work –',
    autoFutureEliminateText:
      ' Free up staff from manual tasks with RPA and workflow automation.',
    autoFutureReleaseHeading: 'Improve Release Speed –',
    autoFutureReleaseText:
      ' Implement continuous testing to shorten development cycles without sacrificing quality.',
    autoFutureReliabilityHeading: 'Enhance Product Reliability –',
    autoFutureReliabilityText:
      ' Catch and fix issues earlier with automated functional and regression testing.',
    autoFutureRiskHeading: 'Reduce Operational Risk –',
    autoFutureRiskText:
      ' Enforce consistent processes and quality checks that minimize costly errors.',

    consultHeroTitle: 'IT Consulting',
    consultHeroDesc: 'Clarity, architecture, and momentum—when you need it.',
    consultBringHeading: 'When to Bring Us In',
    consultBringScalingTitle: 'Scaling Fast',
    consultBringScalingDesc: 'Architecture or costs can’t keep up.',
    consultBringStuckTitle: 'Stuck Initiatives',
    consultBringStuckDesc: 'Critical projects are caught between options or teams.',
    consultBringRiskTitle: 'Rising Risk',
    consultBringRiskDesc: 'Compliance or security concerns are piling up.',
    consultBringRoadmapTitle: 'Need a Roadmap',
    consultBringRoadmapDesc: 'You want a pragmatic plan—not another 80-page deck.',
    consultGetHeading: 'What You Get (Tangible in Weeks, Not Months)',
    consultGetBriefHeading: 'Current-State Brief:',
    consultGetBriefText: ' systems, risks, bottlenecks, and cost drivers.',
    consultGetArchitectureHeading: 'Target Architecture:',
    consultGetArchitectureText:
      ' cloud, data, and integration blueprint aligned to your goals.',
    consultGetRoadmapHeading: 'Execution Roadmap:',
    consultGetRoadmapText: ' phased plan, owners, KPIs, and budget.',
    consultGetCostHeading: 'Cost & Risk Model:',
    consultGetCostText: ' where to save, what to defer, what to fix now.',
    consultGetSecurityHeading: 'Security & Compliance Baseline:',
    consultGetSecurityText: ' practical guardrails that won’t slow delivery.',
    consultEngageHeading: 'How We Engage (Pick What Fits)',
    consultEngageStrategy: 'Strategy Sprint',
    consultEngageStrategyDesc: 'Sharpen goals, kill bad options, back the right bets.',
    consultEngageArchitecture: 'Architecture & Roadmap',
    consultEngageArchitectureDesc: 'Design the path and the plan.',
    consultEngageFractional: 'Fractional Leadership',
    consultEngageFractionalDesc: 'Interim CTO/Head of Data/DevOps to steer execution.',
    consultEngageDelivery: 'Delivery Oversight',
    consultEngageDeliveryDesc:
      'Governance, QA, and vendor management to keep outcomes on track.',
    consultEngageRfp: 'Vendor-Neutral RFP Support',
    consultEngageRfpDesc:
      'Requirements, scoring, and selection without bias.',
    consultPovHeading: 'Our Consulting POV (No Theater, Just Value)',
    consultPovText:
      'We prioritize measurable impact over tool-of-the-day hype. Expect clear decisions, lightweight artifacts, and fast iteration—grounded in Cloud architecture best practices, FinOps discipline, DataOps/DevSecOps principles, and “build only what matters” product thinking.',
    consultReadyHeading: 'Ready to Move?',
    consultReadyText:
      'Let’s turn ambiguity into action. Schedule a 30-minute discovery call—bring your goals and top blockers; we’ll bring clear options, trade-offs, and an actionable next step. If there’s a fit, we’ll kick off a two-week Strategy Sprint to build momentum fast.',
    consultReadyCta: 'Get in touch',

    devHeroTitle: 'Cloud & DevOps Services',
    devHeroDesc: 'Build, deploy, and scale with confidence.',
    devWhyHeading: 'Why Cloud & DevOps Matter for Your Business',
    devWhyText1:
      'Modern businesses can’t afford slow deployments, fragile infrastructure, or scaling bottlenecks. Cloud and DevOps practices transform how you deliver technology—shortening release cycles, improving reliability, and enabling cost-efficient growth.',
    devWhyText2:
      'From infrastructure-as-code to automated CI/CD pipelines, Cloud & DevOps keep your systems resilient, secure, and ready to adapt to changing business demands.',
    devApproachHeading: 'Our Practical, Value-First Approach',
    devApproachText1:
      'We focus on DevOps and cloud strategies that deliver measurable outcomes, not just tool adoption. Whether migrating to the cloud, optimizing an existing environment, or embedding DevOps culture into your teams, our goal is to create infrastructure and workflows that scale without adding complexity.',
    devApproachText2:
      'We combine cloud architecture best practices with automation to ensure performance, security, and cost-effectiveness—so your technology works harder for you, not the other way around.',
    devDeliverHeading: 'How We Deliver (Clear, Actionable Focus)',
    devDeliverAssessTitle: 'Assess & Align',
    devDeliverAssessDesc:
      'Understand your infrastructure, delivery challenges, and business priorities.',
    devDeliverDesignTitle: 'Design for Scale',
    devDeliverDesignDesc:
      'Architect cloud-native or hybrid solutions built for resilience and compliance.',
    devDeliverAutomateTitle: 'Automate Delivery',
    devDeliverAutomateDesc:
      'Implement CI/CD pipelines, automated testing, and deployment workflows.',
    devDeliverIacTitle: 'Infrastructure as Code',
    devDeliverIacDesc:
      'Use tools like Terraform or Pulumi for repeatable, reliable provisioning.',
    devDeliverOptimizeTitle: 'Optimize & Monitor',
    devDeliverOptimizeDesc:
      'Leverage observability and cost analysis to ensure your environment evolves with your needs.',
    devDeliverCultureTitle: 'Embed DevOps Culture',
    devDeliverCultureDesc:
      'Coach teams to adopt practices that sustain long-term agility and quality.',
    devOutcomesHeading: 'Outcomes You Can Count On',
    devOutcomesIntro: 'We partner with you to:',
    devOutcomeReleaseHeading: 'Accelerate Releases –',
    devOutcomeReleaseText:
      ' Ship features faster without compromising stability.',
    devOutcomeReliabilityHeading: 'Improve Reliability –',
    devOutcomeReliabilityText:
      ' Design systems that self-heal and recover quickly from failures.',
    devOutcomeCostHeading: 'Control Costs –',
    devOutcomeCostText:
      ' Optimize resource usage with right-sizing, automation, and governance.',
    devOutcomeAgilityHeading: 'Increase Agility –',
    devOutcomeAgilityText:
      ' Enable teams to adapt quickly to market and customer needs.',
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
    dataHeroTitle: 'Servicios de Datos y Analítica',
    dataHeroDesc: 'De datos crudos a resultados reales: más rápido, más inteligente y a escala.',
    dataWhyHeading: 'Por qué importan las bases de datos sólidas',
    dataWhyOpsHeading: 'Operaciones optimizadas –',
    dataWhyOpsText:
      ' Mantén los datos precisos, accesibles y listos para usar, reduciendo el tiempo perdido en buscar, limpiar y reconciliar información.',
    dataWhyCostHeading: 'Optimización de costos y reducción de riesgos –',
    dataWhyCostText:
      ' Aplica gobernanza inteligente para descubrir ineficiencias, reducir costos de almacenamiento y mantener el cumplimiento con confianza.',
    dataWhyFuelHeading: 'Combustible para la innovación –',
    dataWhyFuelText:
      ' Aprovecha una infraestructura de datos limpia y escalable para potenciar analítica, IA y ML, obteniendo insights más rápidos y decisiones más acertadas.',
    dataCapabilitiesHeading: 'Capacidades clave',
    dataCapabilityWarehousesTitle: 'Almacenes y Lakes',
    dataCapabilityWarehousesDesc:
      'Almacenamiento escalable y optimizado para datos listos para analítica en AWS, Azure, GCP o on-prem.',
    dataCapabilityPipelinesTitle: 'Pipelines ETL / ELT',
    dataCapabilityPipelinesDesc:
      'Ingesta batch, streaming y basada en eventos: datos confiables entregados donde se necesitan.',
    dataCapabilityQualityTitle: 'Calidad y Gobernanza',
    dataCapabilityQualityDesc:
      'Validación, linaje, monitoreo y políticas que mantienen los datos confiables y cumplidos.',
    dataApproachHeading: 'Nuestro enfoque: del caos de datos a la confianza en los datos',
    dataApproachIntro:
      'Nuestra metodología probada transforma tus operaciones de datos en una progresión estratégica clara, asegurando que cada paso entregue valor medible.',
    dataStepBreakDownTitle: 'Eliminar silos',
    dataStepBreakDownDesc:
      'Consolida información crítica en un entorno unificado y gobernado, dando acceso rápido y confiable a los equipos.',
    dataStepModernizeTitle: 'Modernizar infraestructura',
    dataStepModernizeDesc:
      'Implementa arquitecturas escalables y adopta prácticas DataOps para habilitar analítica predictiva y reportes de autoservicio.',
    dataStepActivateTitle: 'Activar inteligencia',
    dataStepActivateDesc:
      'Integra analítica en tiempo real, IA y aprendizaje automático para incorporar la toma de decisiones en las operaciones diarias.',
    dataStepAutomateTitle: 'Automatizar para la velocidad',
    dataStepAutomateDesc:
      'Logra que los insights desencadenen acciones instantáneas, permitiendo operar con precisión, agilidad y velocidad inigualables.',
    dataOutcomeHeading: 'Lo que habilita nuestro servicio',
    dataOutcomeIntro:
      'Cuando trabajas con nosotros, no solo obtienes mejores datos: obtienes un negocio impulsado por el insight.',
    dataOutcomeFasterHeading: 'Decisiones más rápidas:',
    dataOutcomeFasterText: ' Elimina retrasos causados por la preparación manual de datos.',
    dataOutcomeAgilityHeading: 'Mayor agilidad:',
    dataOutcomeAgilityText:
      ' Responde al instante a los cambios del mercado con inteligencia en tiempo real.',
    dataOutcomeCostsHeading: 'Costos más bajos:',
    dataOutcomeCostsText:
      ' Reduce ineficiencias, evita penalizaciones por cumplimiento y disminuye el desperdicio de almacenamiento.',
    dataOutcomeInnovationHeading: 'Innovación a escala:',
    dataOutcomeInnovationText:
      ' Habilita analítica avanzada, IA y automatización en equipos sin cuellos de botella.',
    dataOutcomeFinalLead:
      'Involucra tus datos. Empodera a tu gente. Supera a la competencia.',
    dataOutcomeFinalBody:
      'Con una base de datos sólida y capacidades analíticas modernas, cada decisión se vuelve más precisa, rápida e impactante, impulsando crecimiento medible y una ventaja sostenible.',

    aiHeroTitle: 'Servicios de IA Generativa',
    aiHeroDesc: 'Donde la automatización se encuentra con la creatividad para resolver desafíos reales.',
    aiUseCasesHeading: 'Casos de uso',
    aiUseCaseDocTitle: 'Resumen de documentos',
    aiUseCaseDocDesc: 'Convierte informes densos en insights en segundos.',
    aiUseCaseCodeTitle: 'Generación de código segura',
    aiUseCaseCodeDesc: 'Acelera el desarrollo con IA que respeta tus límites.',
    aiWhyHeading: 'Por qué la IA generativa es clave para tu negocio',
    aiWhyText:
      'La IA generativa combina creatividad y razonamiento para impulsar eficiencia. Procesa grandes volúmenes de datos, resume documentos complejos y automatiza flujos multietapa, reduciendo tiempos de días a minutos. Sus capacidades multimodales van más allá del texto, transformando imágenes, audio y notas en información estructurada y accionable.',
    aiApproachHeading: 'Nuestro enfoque práctico y orientado a valor',
    aiApproachText:
      'Insertamos IA generativa en tus operaciones para generar impacto medible. Con experiencia en despliegues internos y de clientes, diseñamos soluciones que elevan la precisión, agilizan procesos y desbloquean creatividad, evitando experimentos de corta vida.',
    aiJourneyHeading: 'Nuestra ruta de implementación generativa',
    aiStepIdentifyTitle: 'Identificar oportunidades',
    aiStepIdentifyDesc:
      'Detectamos los casos de uso con mayor potencial para impulsar impacto empresarial.',
    aiStepAssessTitle: 'Evaluar viabilidad',
    aiStepAssessDesc:
      'Revisamos escalabilidad, seguridad y costos para elegir los modelos y enfoques adecuados.',
    aiStepValidateTitle: 'Validar con un piloto',
    aiStepValidateDesc:
      'Probamos arquitectura, integraciones y herramientas para confirmar desempeño y encaje.',
    aiStepBuildTitle: 'Construir e integrar',
    aiStepBuildDesc:
      'Desarrollamos e integramos soluciones de IA en tus flujos existentes.',
    aiStepOptimizeTitle: 'Optimizar resultados',
    aiStepOptimizeDesc:
      'Mejoramos resultados con prompt engineering, RAG y fine-tuning.',
    aiStepEvolveTitle: 'Lanzar y evolucionar',
    aiStepEvolveDesc:
      'Liberamos con mínima disrupción y afinamos para sostener y crecer el valor en el tiempo.',
    aiFutureHeading: 'Activa el futuro del trabajo',
    aiFutureIntro:
      'La IA generativa no es solo modelos más inteligentes, es desbloquear nuevas posibilidades. Te ayudamos a:',
    aiFutureFreeHeading: 'Liberar al equipo de lo repetitivo –',
    aiFutureFreeText:
      ' Automatiza procesos pesados en documentos para que se enfoquen en decisiones de alto valor.',
    aiFutureAskHeading: 'Preguntar y obtener respuestas al instante –',
    aiFutureAskText:
      ' Explora datos empresariales en lenguaje natural, sin SQL.',
    aiFutureChaosHeading: 'Convertir el caos en claridad –',
    aiFutureChaosText:
      ' Transforma archivos, imágenes y texto no estructurado en insights accionables.',
    aiFutureInnovateHeading: 'Innovar con tranquilidad –',
    aiFutureInnovateText:
      ' Confía en IA que entiende tu contexto y ofrece resultados consistentes y confiables.',

    appsHeroTitle: 'Servicios de Apps y APIs',
    appsHeroDesc:
      'Del prototipo a la producción: aplicaciones e integraciones que escalan con tu negocio.',
    appsWhyHeading: 'Por qué las Apps y APIs modernas importan',
    appsWhyText1:
      'Tus aplicaciones y APIs son la columna vertebral de las operaciones digitales. Los sistemas bien diseñados no solo ejecutan procesos: crean nuevas oportunidades.',
    appsWhyText2:
      'Desde automatizar tareas hasta integrarse con socios y plataformas, las apps y APIs modernas mejoran la eficiencia, la experiencia del usuario y reducen el riesgo operativo.',
    appsWhyText3:
      'Con la arquitectura adecuada, pueden crecer con tu negocio en lugar de frenarlo.',
    appsApproachHeading: 'Nuestro enfoque práctico y orientado a valor',
    appsApproachText1:
      'Construimos software que resuelve problemas reales, no solo exhibe tecnología. Ya sea una app de negocio, un API público seguro o una integración fluida, nos enfocamos en soluciones que entregan impacto medible.',
    appsApproachText2:
      'Con experiencia en múltiples industrias, alineamos cada desarrollo con tus requisitos de rendimiento, seguridad y escalabilidad para que la tecnología sea un activo, no una carga.',
    appsJourneyHeading: 'Nuestra ruta de implementación',
    appsStepDefineTitle: 'Definir requisitos',
    appsStepDefineDesc:
      'Colaboramos con las partes interesadas para aclarar objetivos, necesidades de usuarios y métricas de éxito.',
    appsStepArchitectTitle: 'Arquitectar la solución',
    appsStepArchitectDesc:
      'Diseñamos arquitecturas escalables, seguras y mantenibles.',
    appsStepPrototypeTitle: 'Prototipar y validar',
    appsStepPrototypeDesc:
      'Construimos prototipos funcionales para confirmar usabilidad, flujos y viabilidad.',
    appsStepDevelopTitle: 'Desarrollar e integrar',
    appsStepDevelopDesc:
      'Implementamos la solución e integramos con sistemas existentes y servicios de terceros.',
    appsStepTestTitle: 'Probar y asegurar',
    appsStepTestDesc:
      'Realizamos QA rigurosa, pruebas de desempeño y endurecimiento de seguridad.',
    appsStepDeployTitle: 'Desplegar y lanzar',
    appsStepDeployDesc:
      'Implementamos con mínima disrupción, asegurando adopción fluida y documentación clara.',
    appsStepMonitorTitle: 'Monitorear y evolucionar',
    appsStepMonitorDesc:
      'Seguimos el desempeño, recolectamos feedback y realizamos mejoras para mantener el ritmo de tus necesidades.',
    appsFutureHeading: 'Impulsa el futuro de las operaciones digitales',
    appsFutureIntro: 'Te ayudamos a:',
    appsFutureAccelerateHeading: 'Acelerar el desarrollo –',
    appsFutureAccelerateText:
      ' Entregar apps y APIs listas para producción en semanas, no meses.',
    appsFutureIntegrateHeading: 'Mejorar la integración –',
    appsFutureIntegrateText:
      ' Conectar sistemas internos y externos para un intercambio de datos sin fricción.',
    appsFutureReliabilityHeading: 'Mejorar la fiabilidad –',
    appsFutureReliabilityText:
      ' Construir con calidad y desempeño en mente, reduciendo caídas y costos de soporte.',
    appsFutureScaleHeading: 'Escalar con confianza –',
    appsFutureScaleText:
      ' Arquitectar soluciones que crecen con tu base de usuarios y volúmenes de datos.',

    autoHeroTitle: 'Servicios de Automatización y QA',
    autoHeroDesc: 'Procesos más inteligentes. Mayor calidad. Menos dolores de cabeza.',
    autoWhyHeading: 'Por qué la Automatización y el QA importan para tu negocio',
    autoWhyText:
      'Los procesos manuales y repetitivos retrasan a los equipos e introducen errores. Al automatizar flujos e incorporar QA en cada etapa, puedes entregar más rápido, reducir costos y mantener un desempeño consistente. Desde RPA hasta pipelines de pruebas continuas, Automatización y QA aseguran sistemas confiables, equipos enfocados y mejores experiencias para los clientes.',
    autoApproachHeading: 'Nuestro enfoque práctico y orientado a valor',
    autoApproachText1:
      'Vemos la automatización y el QA como habilitadores, no como ideas posteriores. Cada proceso automatizado y cada prueba diseñada tienen un resultado claro, ya sea reducir tiempos de proceso, mejorar la detección de defectos o asegurar el cumplimiento.',
    autoApproachText2:
      'Combinando frameworks modernos con prácticas rigurosas de QA, creamos soluciones rápidas, confiables y duraderas.',
    autoCapabilitiesHeading: 'Capacidades clave',
    autoCapWorkflowTitle: 'Automatización de flujos',
    autoCapWorkflowDesc: 'Elimina tareas repetitivas con orquestación inteligente.',
    autoCapTestingTitle: 'Automatización de pruebas',
    autoCapTestingDesc: 'Aumenta la cobertura y detecta regresiones temprano.',
    autoCapQualityTitle: 'Quality Gates',
    autoCapQualityDesc: 'Aplica estándares antes de que los cambios lleguen a producción.',
    autoJourneyHeading: 'Nuestra ruta de implementación',
    autoStepTargetTitle: 'Apuntar a lo que importa',
    autoStepTargetDesc:
      'Identificamos los procesos y puntos de falla de mayor impacto donde la automatización y el QA moverán la aguja.',
    autoStepDesignTitle: 'Diseñar para escalar',
    autoStepDesignDesc:
      'Arquitectamos flujos, suites de pruebas y flujos de datos mantenibles que crecen con tu producto y equipo.',
    autoStepBuildTitle: 'Construir donde cuenta',
    autoStepBuildDesc:
      'RPA para tareas repetitivas, automatización de pruebas API/UI y hooks de CI/CD para mantener la calidad continua.',
    autoStepHardenTitle: 'Fortalecer la confiabilidad',
    autoStepHardenDesc:
      'Pruebas de desempeño, seguridad y regresión garantizan lanzamientos predecibles.',
    autoStepMeasureTitle: 'Medir y mejorar',
    autoStepMeasureDesc:
      'Dashboards, SLIs/SLOs y retroalimentación continua mantienen el sistema honesto y en mejora.',
    autoFutureHeading: 'Impulsa el futuro de operaciones fiables',
    autoFutureIntro: 'Te ayudamos a:',
    autoFutureEliminateHeading: 'Eliminar trabajo repetitivo –',
    autoFutureEliminateText:
      ' Libera al personal de tareas manuales con RPA y automatización de flujos.',
    autoFutureReleaseHeading: 'Mejorar la velocidad de liberación –',
    autoFutureReleaseText:
      ' Implementa pruebas continuas para acortar ciclos sin sacrificar calidad.',
    autoFutureReliabilityHeading: 'Aumentar la confiabilidad del producto –',
    autoFutureReliabilityText:
      ' Detecta y corrige problemas antes con pruebas funcionales y de regresión automatizadas.',
    autoFutureRiskHeading: 'Reducir el riesgo operativo –',
    autoFutureRiskText:
      ' Aplica procesos consistentes y controles de calidad que minimizan errores costosos.',

    consultHeroTitle: 'Consultoría IT',
    consultHeroDesc: 'Claridad, arquitectura y momentum cuando lo necesitas.',
    consultBringHeading: 'Cuándo llamarnos',
    consultBringScalingTitle: 'Escalando rápido',
    consultBringScalingDesc: 'La arquitectura o los costos no dan abasto.',
    consultBringStuckTitle: 'Iniciativas estancadas',
    consultBringStuckDesc: 'Proyectos críticos atrapados entre opciones o equipos.',
    consultBringRiskTitle: 'Riesgo en aumento',
    consultBringRiskDesc: 'Preocupaciones de cumplimiento o seguridad se acumulan.',
    consultBringRoadmapTitle: 'Necesitas un roadmap',
    consultBringRoadmapDesc: 'Quieres un plan pragmático, no otra presentación eterna.',
    consultGetHeading: 'Lo que obtienes (tangible en semanas, no meses)',
    consultGetBriefHeading: 'Brief del estado actual:',
    consultGetBriefText: ' sistemas, riesgos, cuellos de botella y costos.',
    consultGetArchitectureHeading: 'Arquitectura objetivo:',
    consultGetArchitectureText:
      ' nube, datos y plan de integración alineado a tus metas.',
    consultGetRoadmapHeading: 'Roadmap de ejecución:',
    consultGetRoadmapText: ' plan por fases, responsables, KPIs y presupuesto.',
    consultGetCostHeading: 'Modelo de costo y riesgo:',
    consultGetCostText: ' dónde ahorrar, qué diferir y qué arreglar ahora.',
    consultGetSecurityHeading: 'Base de seguridad y cumplimiento:',
    consultGetSecurityText: ' guardrails prácticos que no frenan la entrega.',
    consultEngageHeading: 'Cómo nos involucramos (elige lo que se ajuste)',
    consultEngageStrategy: 'Strategy Sprint',
    consultEngageStrategyDesc: 'Afinamos objetivos, eliminamos malas opciones y apostamos por las correctas.',
    consultEngageArchitecture: 'Arquitectura y Roadmap',
    consultEngageArchitectureDesc: 'Diseñamos el camino y el plan.',
    consultEngageFractional: 'Liderazgo fraccional',
    consultEngageFractionalDesc: 'CTO/Head de Data/DevOps interino para guiar la ejecución.',
    consultEngageDelivery: 'Supervisión de entrega',
    consultEngageDeliveryDesc:
      'Gobernanza, QA y gestión de proveedores para mantener los resultados en rumbo.',
    consultEngageRfp: 'Soporte RFP neutral',
    consultEngageRfpDesc:
      'Requerimientos, evaluación y selección sin sesgos.',
    consultPovHeading: 'Nuestro POV de consultoría (sin teatro, solo valor)',
    consultPovText:
      'Priorizamos el impacto medible sobre la moda tecnológica. Decisiones claras, artefactos livianos y iteración rápida, basados en buenas prácticas de arquitectura en la nube, disciplina FinOps, principios DataOps/DevSecOps y pensar en “solo construir lo que importa”.',
    consultReadyHeading: '¿Listo para avanzar?',
    consultReadyText:
      'Convirtamos la ambigüedad en acción. Agenda una llamada de descubrimiento de 30 minutos: trae tus metas y bloqueadores, nosotros llevamos opciones claras, trade-offs y un siguiente paso accionable. Si hay fit, arrancamos un Strategy Sprint de dos semanas para generar momentum.',
    consultReadyCta: 'Contáctanos',

    devHeroTitle: 'Servicios de Nube y DevOps',
    devHeroDesc: 'Construye, despliega y escala con confianza.',
    devWhyHeading: 'Por qué la Nube y DevOps son clave para tu negocio',
    devWhyText1:
      'Las empresas modernas no pueden permitirse despliegues lentos, infraestructura frágil o cuellos de botella de escalado. Las prácticas de Nube y DevOps transforman la entrega tecnológica: ciclos más cortos, mayor confiabilidad y crecimiento rentable.',
    devWhyText2:
      'Desde infraestructura como código hasta pipelines CI/CD automatizados, Nube y DevOps mantienen tus sistemas resilientes, seguros y listos para adaptarse a las demandas del negocio.',
    devApproachHeading: 'Nuestro enfoque práctico y orientado a valor',
    devApproachText1:
      'Nos enfocamos en estrategias de DevOps y nube que entregan resultados medibles, no solo adopción de herramientas. Ya sea migrando a la nube, optimizando un entorno existente o incorporando cultura DevOps en tus equipos, buscamos infraestructura y flujos que escalen sin añadir complejidad.',
    devApproachText2:
      'Combinamos buenas prácticas de arquitectura en la nube con automatización para garantizar rendimiento, seguridad y eficiencia de costos, haciendo que tu tecnología trabaje más por ti.',
    devDeliverHeading: 'Cómo entregamos (enfoque claro y accionable)',
    devDeliverAssessTitle: 'Evaluar y alinear',
    devDeliverAssessDesc:
      'Entiende tu infraestructura, desafíos de entrega y prioridades del negocio.',
    devDeliverDesignTitle: 'Diseñar para escalar',
    devDeliverDesignDesc:
      'Arquitecta soluciones cloud-native o híbridas resilientes y conformes.',
    devDeliverAutomateTitle: 'Automatizar la entrega',
    devDeliverAutomateDesc:
      'Implementa pipelines CI/CD, pruebas automatizadas y flujos de despliegue.',
    devDeliverIacTitle: 'Infraestructura como código',
    devDeliverIacDesc:
      'Usa herramientas como Terraform o Pulumi para aprovisionamiento repetible y confiable.',
    devDeliverOptimizeTitle: 'Optimizar y monitorear',
    devDeliverOptimizeDesc:
      'Aprovecha observabilidad y análisis de costos para que tu entorno evolucione con tus necesidades.',
    devDeliverCultureTitle: 'Inculcar cultura DevOps',
    devDeliverCultureDesc:
      'Entrena equipos para adoptar prácticas que sostengan agilidad y calidad a largo plazo.',
    devOutcomesHeading: 'Resultados en los que puedes confiar',
    devOutcomesIntro: 'Te ayudamos a:',
    devOutcomeReleaseHeading: 'Acelerar los lanzamientos –',
    devOutcomeReleaseText:
      ' Entregar funcionalidades más rápido sin comprometer la estabilidad.',
    devOutcomeReliabilityHeading: 'Mejorar la confiabilidad –',
    devOutcomeReliabilityText:
      ' Diseñar sistemas que se autorrecuperan y toleran fallas.',
    devOutcomeCostHeading: 'Controlar costos –',
    devOutcomeCostText:
      ' Optimizar recursos con dimensionamiento adecuado, automatización y gobernanza.',
    devOutcomeAgilityHeading: 'Incrementar la agilidad –',
    devOutcomeAgilityText:
      ' Permitir que los equipos se adapten rápidamente a las necesidades del mercado y del cliente.',
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

