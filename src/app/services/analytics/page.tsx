'use client'

import ServiceLayout from '@/components/ServiceLayout'
import { FiPieChart, FiBarChart, FiTrendingUp } from 'react-icons/fi'

export default function AnalyticsPage() {
  const features = [
    {
      icon: FiPieChart,
      title: 'Dashboards',
      description: 'Real-time dashboards for operations and KPIs.',
    },
    {
      icon: FiBarChart,
      title: 'Visualization',
      description: 'Custom charts that surface trends and anomalies.',
    },
    {
      icon: FiTrendingUp,
      title: 'Insights',
      description: 'Guidance to turn metrics into decisive action.',
    },
  ]

  return (
    <ServiceLayout
      titleKey="analytics"
      descKey="analyticsDesc"
      features={features}
      imageSrc="https://images.unsplash.com/photo-1556157382-97eda2c9f7e9?auto=format&fit=crop&w=800&q=80"
    />
  )
}

