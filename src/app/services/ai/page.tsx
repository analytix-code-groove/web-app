import type { Metadata } from 'next'
import GenerativeAIServicePage from './GenerativeAIClient'

export const metadata: Metadata = {
  title: 'Generative AI Services',
  description: 'Where automation meets creativity to solve real-world challenges.',
}

export default function Page() {
  return <GenerativeAIServicePage />
}
