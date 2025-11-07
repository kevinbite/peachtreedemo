import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Building2, Hammer, Wrench, Trash2, Hospital, UtensilsCrossed, School, Hotel, Factory } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Commercial Interior Demolition Services | Peachtree Demolition',
  description:
    'Professional commercial interior demolition for Class A office, medical facilities, hospitality, schools, restaurants, and industrial spaces. Serving top-tier general contractors across Atlanta and the Southeast.',
}

const services = [
  {
    icon: Trash2,
    title: 'Soft Demo',
    description: 'Clean, dust-controlled removal of ceilings, drywall, fixtures, and finishes for occupied buildings and high-finish spaces.',
  },
  {
    icon: Hammer,
    title: 'Selective Demo',
    description: 'Precision demolition for adaptive reuse and renovation projects, protecting what stays while efficiently removing what goes.',
  },
  {
    icon: Building2,
    title: 'Class A Office',
    description: 'Complete interior demolition for Class A office buildings and corporate headquarters with seamless GC coordination.',
  },
  {
    icon: Wrench,
    title: 'Tenant Improvements (TI)',
    description: 'Interior demolition for tenant improvement projects, including MEP coordination and fast turnaround times.',
  },
  {
    icon: Hospital,
    title: 'Medical Facilities',
    description: 'Specialized demolition for medical offices, clinics, and healthcare facilities with strict compliance and cleanliness standards.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Interior demolition for hotels, resorts, and hospitality venues with minimal disruption to ongoing operations.',
  },
  {
    icon: School,
    title: 'Schools & Institutional',
    description: 'Safe, efficient demolition for educational facilities and institutional buildings during breaks and off-hours.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Fast-track restaurant interior demolition including kitchen equipment removal and dining area transformation.',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Heavy-duty demolition for industrial facilities, warehouses, and manufacturing spaces with equipment removal.',
  },
  {
    icon: Trash2,
    title: 'Exterior Demo',
    description: 'Exterior structure demolition, facade removal, and site preparation for commercial renovation projects.',
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
              Comprehensive interior and exterior demolition solutions for commercial properties across the Southeast.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-200/50 bg-white/60 p-6 text-center backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/80"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                }}
              >
                <div 
                  className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-orange-500 transition-all group-hover:scale-110"
                  style={{
                    boxShadow: '0 0 20px rgba(229, 124, 61, 0.4), 0 0 40px rgba(229, 124, 61, 0.2)',
                  }}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading mb-2 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Additional Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Specialized demolition support services to complement your project needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div
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
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                Floor Grinding / Adhesive Removal
              </h3>
              <p className="text-gray-700">Professional floor grinding and adhesive removal for clean, smooth surfaces ready for new finishes.</p>
            </div>

            <div
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
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                Concrete Cutting / Trenching
              </h3>
              <p className="text-gray-700">Precision concrete sawing, coring, and trenching for MEP installations and structural modifications.</p>
            </div>

            <div
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
                <Trash2 className="h-8 w-8" />
              </div>
              <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                Slab Removal
              </h3>
              <p className="text-gray-700">Complete concrete slab demolition and removal for site preparation and foundation work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="bg-white py-16 lg:py-24">
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
                    <span>Medical facilities and healthcare centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Hotels, resorts, and hospitality venues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Schools and educational institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Restaurants and food service establishments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Industrial facilities and warehouses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    <span>Retail spaces and shopping centers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="/images/commercial-page-pic.png"
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

