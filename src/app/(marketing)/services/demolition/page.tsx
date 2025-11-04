import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Complete Demolition Services | Peachtree Demolition',
  description:
    'Professional structural demolition services for residential, commercial, and industrial properties. Licensed, insured, and experienced.',
}

const features = [
  'Residential & Commercial Demolition',
  'Industrial Structure Removal',
  'High-Rise Demolition',
  'Controlled Implosion',
  'Interior Gutting',
  'Hazardous Material Handling',
  'Debris Removal & Recycling',
  'Site Restoration',
]

export default function DemolitionPage() {
  return (
    <>
      <Hero
        title="Complete Demolition Services"
        subtitle="Professional structural demolition for properties of all sizes. Safe, efficient, and environmentally responsible."
        backgroundImage="https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=2070"
      />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Expert Demolition Services
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  With over 20 years of experience, Peachtree Demolition provides comprehensive structural demolition services for residential, commercial, and industrial properties throughout Georgia. Our team of certified professionals uses state-of-the-art equipment and follows strict safety protocols to ensure every project is completed efficiently and responsibly.
                </p>
                <p>
                  We handle everything from small residential teardowns to large commercial building demolitions. Our expertise includes traditional mechanical demolition, selective demolition for renovations, and specialized services like controlled implosions for high-rise structures.
                </p>
                <p>
                  Every project begins with a thorough site assessment and detailed planning. We handle all necessary permits, utility disconnections, and environmental considerations. Our commitment to safety means we maintain zero-accident worksites while completing projects on time and within budget.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
                alt="Demolition site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              What's Included
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Our comprehensive demolition services cover every aspect of your project from start to finish.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start space-x-3 rounded-lg bg-white p-6"
              >
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Project Gallery
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See examples of our completed demolition projects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
              'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
              'https://images.unsplash.com/photo-1590496793573-558b73619c77?q=80&w=800',
              'https://images.unsplash.com/photo-1632320323139-d46c206edfbf?q=80&w=800',
              'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800',
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`Demolition project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

