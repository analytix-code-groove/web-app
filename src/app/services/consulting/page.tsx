'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiMap, FiLayers, FiCompass } from 'react-icons/fi'

export default function ItConsultingPage() {
  const features = [
    {
      icon: FiMap,
      title: 'Strategy',
      description: 'Identify opportunities and risks.',
    },
    {
      icon: FiLayers,
      title: 'Architecture',
      description: 'Design systems that scale.',
    },
    {
      icon: FiCompass,
      title: 'Roadmaps',
      description: 'Plan actionable technology paths.',
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

