import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import ClientsCarousel from '@/components/ClientsCarousel'
import MoreInfo from '@/components/MoreInfo'
import LatestPosts from '@/components/LatestPosts'

export const metadata: Metadata = {
  title: 'Analytix Code Groove',
  description: 'Discover our data, AI, and cloud services designed to move your business forward.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <ClientsCarousel />
      <MoreInfo />
      <LatestPosts />
    </main>
  )
}
