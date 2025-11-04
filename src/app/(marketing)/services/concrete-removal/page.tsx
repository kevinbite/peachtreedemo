import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Concrete Removal Services | Peachtree Demolition',
  description:
    'Professional concrete breaking and removal services. Driveways, foundations, slabs, and more. Fast, efficient, and affordable.',
}

const features = [
  'Driveway Removal',
  'Foundation Breaking',
  'Concrete Slab Removal',
  'Sidewalk & Walkway Removal',
  'Parking Lot Demolition',
  'Patio & Pool Deck Removal',
  'Concrete Recycling',
  'Site Clean-Up',
]

export default function ConcreteRemovalPage() {
  return (
    <>
      <Hero
        title="Professional Concrete Removal"
        subtitle="Expert concrete breaking and removal services for residential and commercial properties. Fast, clean, and affordable."
        backgroundImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
      />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Concrete Demolition Experts
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Whether you're removing an old driveway, breaking up a concrete slab, or demolishing a parking lot, Peachtree Demolition has the equipment and expertise to handle your concrete removal project efficiently and safely.
                </p>
                <p>
                  Our team uses specialized concrete breaking equipment including hydraulic breakers, concrete saws, and excavators to remove concrete of any thickness. We can handle projects of all sizes, from small residential driveways to large commercial parking structures.
                </p>
                <p>
                  We're committed to environmentally responsible practices. Whenever possible, we recycle concrete materials, crushing them for use as aggregate or base material. This reduces landfill waste and can help lower your project costs.
                </p>
                <p>
                  All concrete removal projects include complete debris removal and site clean-up, leaving your property ready for the next phase of construction or landscaping.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800"
                alt="Concrete removal"
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
              Services Provided
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Complete concrete removal and disposal services for any project.
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

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Process
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Site Assessment',
                description: 'We evaluate the concrete and plan the safest removal method.',
              },
              {
                step: '2',
                title: 'Breaking',
                description: 'Using specialized equipment, we break up the concrete.',
              },
              {
                step: '3',
                title: 'Removal',
                description: 'All concrete pieces are loaded and hauled away.',
              },
              {
                step: '4',
                title: 'Clean-Up',
                description: 'Site is cleared and prepared for your next project.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

