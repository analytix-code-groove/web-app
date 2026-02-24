import type { Metadata } from 'next'
import { getService, services } from '@/data/services'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

type Props = { params: Promise<Params> }

export function generateStaticParams() {
  return services
    .filter(
      s =>
        s.slug !== 'data-analytics' &&
        s.slug !== 'ai' &&
        s.slug !== 'apps' &&
        s.slug !== 'consulting' &&
        s.slug !== 'devops'
    )
    .map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  const name = service?.slug.replace(/-/g, ' ') ?? 'service'
  const title = `${name.charAt(0).toUpperCase() + name.slice(1)} | Analytix Code Groove`
  const description = service
    ? `Learn more about our ${name} offering.`
    : 'Service details.'
  return { title, description }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return notFound()
}
