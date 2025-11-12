import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Clock } from 'lucide-react'

export const metadata = {
  title: 'Residential Projects | Peachtree Demolition',
  description:
    'Residential project portfolio coming soon. Contact us to learn more about our residential demolition services.',
}

export default function ResidentialProjectsPage() {
  return (
    <>
      <Hero
        title="Residential Project Portfolio"
        subtitle="We provide professional residential demolition services across Georgia. From full home demolitions to selective interior work, we handle it all safely and efficiently."
        backgroundImage="/images/residential-services.jpg"
      />

      {/* Coming Soon Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">
              <Clock className="h-10 w-10 text-orange-500" />
            </div>
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Residential Projects Coming Soon
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              We're currently updating our residential project portfolio. While our focus is commercial interior demolition, 
              we also provide professional residential demolition services for homeowners and contractors across Georgia.
            </p>
            <p className="text-base text-gray-600">
              Interested in residential demolition services? Contact us today to discuss your project and receive a free quote.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Residential Project in Mind?"
        description="Let's discuss your residential demolition needs and provide a free quote."
      />
    </>
  )
}

