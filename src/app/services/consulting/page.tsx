'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiMap, FiLayers, FiCompass } from 'react-icons/fi'

export default function ItConsultingPage() {
  const features = [
    {
      icon: FiMap,
      title: 'Strategy',
      description: 'Assess your landscape to uncover opportunities and risks.',
    },
    {
      icon: FiLayers,
      title: 'Architecture',
      description: 'Blueprint resilient, scalable systems aligned to goals.',
    },
    {
      icon: FiCompass,
      title: 'Roadmaps',
      description: 'Prioritized technology paths that keep teams aligned.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="itConsulting"
      descKey="itConsultingDesc"
      features={features}
    />
  )
}

