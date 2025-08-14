'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiPieChart, FiBarChart, FiTrendingUp } from 'react-icons/fi'

export default function AnalyticsPage() {
  const features = [
    {
      icon: FiPieChart,
      title: 'Dashboards',
      description: 'Interactive dashboards in real time.',
    },
    {
      icon: FiBarChart,
      title: 'Visualization',
      description: 'Visuals that highlight trends.',
    },
    {
      icon: FiTrendingUp,
      title: 'Insights',
      description: 'Metrics that drive decisions.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="analytics"
      descKey="analyticsDesc"
      features={features}
    />
  )
}

