const BASE = 'https://www.analytixcg.com'

const SERVICE_TYPES: Record<string, string> = {
  'data-analytics': 'Data Analytics',
  ai: 'Artificial Intelligence',
  apps: 'Software Development',
  'automation-qa': 'Quality Assurance and Automation',
  devops: 'Cloud Computing and DevOps',
  consulting: 'IT Consulting',
  'staff-augmentation': 'Staff Augmentation',
}

export function buildServiceJsonLd(slug: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE}/services/${slug}/#service`,
    name,
    description,
    url: `${BASE}/services/${slug}`,
    provider: { '@id': `${BASE}/#organization` },
    serviceType: SERVICE_TYPES[slug] ?? name,
    areaServed: 'Worldwide',
  }
}
