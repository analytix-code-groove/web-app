import ServiceCards from '@/components/ServiceCards'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="font-heading text-3xl font-semibold text-text">Services</h1>
      </div>
      <ServiceCards />
    </main>
  )
}
