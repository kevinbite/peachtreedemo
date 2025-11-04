import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Home, Hammer, Trash2, Truck } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Residential Demolition Services | Peachtree Demolition',
  description:
    'Professional residential demolition services for homes, renovations, and residential properties. Safe, efficient, and environmentally responsible.',
}

const services = [
  {
    icon: Home,
    title: 'Full House Demo',
    description: 'Complete residential structure demolition for teardowns and rebuilds.',
  },
  {
    icon: Hammer,
    title: 'Interior Demo',
    description: 'Selective interior demolition for home renovations and remodels.',
  },
  {
    icon: Trash2,
    title: 'Garage & Shed Removal',
    description: 'Demolition and removal of garages, sheds, and outbuildings.',
  },
  {
    icon: Truck,
    title: 'Debris Removal',
    description: 'Complete cleanup and hauling of all demolition materials.',
  },
]

export default function ResidentialServicesPage() {
  return (
    <>
      <Hero
        title="Residential Demolition Services"
        subtitle="Professional demolition for homes, renovations, and residential properties. Safe, efficient, and respectful of your neighborhood."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      {/* Services Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Residential Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Comprehensive demolition solutions for residential properties of all sizes.
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
                Residential Project Types
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  From single-family homes to large residential renovations, we provide safe and efficient demolition services tailored to your project needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Single-family home demolition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Kitchen and bathroom renovations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Basement and attic conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Garage and outbuilding removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Pool removal and deck demolition</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800"
                alt="Residential demolition project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Residential Project?"
        description="Get a free consultation and quote for your residential demolition needs."
      />
    </>
  )
}

