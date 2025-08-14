'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiCpu, FiZap, FiActivity } from 'react-icons/fi'

export default function AiAutomationPage() {
  const features = [
    {
      icon: FiCpu,
      title: 'LLM Apps',
      description: 'Chatbots and copilots that accelerate your teams.',
    },
    {
      icon: FiZap,
      title: 'Automation',
      description: 'Event-driven workflows that eliminate busywork.',
    },
    {
      icon: FiActivity,
      title: 'Monitoring',
      description: 'Track drift and performance to keep automation on target.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="aiAutomation"
      descKey="aiAutomationDesc"
      features={features}
      imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    />
  )
}

