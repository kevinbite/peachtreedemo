import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Building2, Hammer, Wrench, Trash2 } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Commercial Interior Demolition Services | Peachtree Demolition',
  description:
    'Professional commercial interior demolition for Class A office, retail, and institutional spaces. Serving top-tier general contractors across Atlanta and the Southeast.',
}

const services = [
  {
    icon: Building2,
    title: 'Office Interior Demo',
    description: 'Complete interior demolition for Class A office buildings and corporate spaces.',
  },
  {
    icon: Hammer,
    title: 'Retail Demolition',
    description: 'Fast, clean demolition for retail spaces and shopping centers.',
  },
  {
    icon: Wrench,
    title: 'MEP Support',
    description: 'Mechanical, electrical, and plumbing system removal and disconnection.',
  },
  {
    icon: Trash2,
    title: 'Selective Demo',
    description: 'Precision demolition for adaptive reuse and renovation projects.',
  },
]

export default function CommercialServicesPage() {
  return (
    <>
      <Hero
        title="Commercial Interior Demolition"
        subtitle="Specialized demolition services for Class A office, retail, and institutional interiors. Fast, clean, and coordinated with your construction schedule."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
      />

      {/* Services Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Commercial Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Comprehensive interior demolition solutions for commercial properties across the Southeast.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-200/50 bg-white/60 p-8 text-center backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/80"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                }}
              >
                <div 
                  className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 text-orange-500 transition-all group-hover:scale-110"
                  style={{
                    boxShadow: '0 0 20px rgba(229, 124, 61, 0.4), 0 0 40px rgba(229, 124, 61, 0.2)',
                  }}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Commercial Project Types
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Peachtree Demolition specializes in high-end commercial interior demolition, serving general contractors and property owners throughout Atlanta and the Southeast.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Class A office buildings and corporate headquarters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Retail spaces and shopping centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Institutional facilities and educational buildings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Mixed-use developments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Adaptive reuse and historic renovations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
                alt="Commercial demolition project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Commercial Project?"
        description="Get a free consultation and quote for your commercial demolition needs."
      />
    </>
  )
}

