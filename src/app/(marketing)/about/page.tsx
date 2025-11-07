import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Award, Users, ThumbsUp, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Peachtree Demolition | Atlanta Commercial Interior Demolition',
  description:
    'Founded in Atlanta by Gavin Johnson, Peachtree Demolition specializes in Class A office, retail, and institutional interiors. Modern, professional approach with ownership opportunities for field leaders.',
}

const stats = [
  { icon: Award, label: 'Years in Business', value: '20+' },
  { icon: Users, label: 'Projects Completed', value: '500+' },
  { icon: ThumbsUp, label: 'Satisfied Clients', value: '100%' },
  { icon: TrendingUp, label: 'Safety Record', value: 'Excellent' },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Precision. Speed. Accountability."
        subtitle="A modern, professional approach to commercial interior demolition—built for Class A offices, adaptive reuse, and selective structural removal. Trusted by top-tier general contractors across the Southeast."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
        ctaText="Get a Free Quote"
        ctaLink="/contact"
      />

      {/* Stats Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
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
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="font-heading mb-2 text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Peachtree Demolition, we bring a modern, professional approach to the demolition industry—built for commercial interiors, adaptive reuse, and selective structural removal.
                </p>
                <p>
                  Founded in Atlanta by Gavin Johnson, Peachtree focuses exclusively on Class A office, retail, and institutional interiors, with a reputation for clean job sites, tight timelines, and seamless coordination with top-tier general contractors. From soft demo to concrete cutting and MEP support, we're known for getting in fast, getting out clean, and never holding up the schedule.
                </p>
                <p>
                  But we're not just breaking things down—we're building something up. Our company is structured to give field leaders ownership opportunities, investing in the people closest to the work. As we expand across the Southeast, Peachtree is creating a new model for trade contractors: performance-based, equity-minded, and built to scale.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="/images/who-we-are.png"
                alt="Construction team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image on Left */}
            <div className="relative h-96 overflow-hidden rounded-lg lg:h-auto">
              <Image
                src="/images/WhatsApp Image 2025-11-05 at 14.05.23_e323c5f5.jpg"
                alt="Gavin David Johnson - Founder of Peachtree Demolition"
                fill
                className="object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            {/* Text on Right */}
            <div>
              <h2 className="font-heading mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Meet Our Founder
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Gavin David Johnson is a native Atlantan who grew up in Sandy Springs, Georgia, during the 1980s and graduated from Riverwood High School in 1993. After spending his 20s performing in the Atlanta music scene, he transitioned into the residential construction industry, working alongside his father until the 2008 market crash.
                </p>
                <p>
                  Later that year, Gavin joined a local commercial demolition company, where he began learning the ins and outs of the industry. Drawing on his entrepreneurial spirit, he founded Peachtree Demolition in February 2012. Through relentless hard work and a dedication to building lasting client relationships, Gavin has grown Peachtree Demolition into one of the Southeast's leading selective demolition contractors.
                </p>
                <p>
                  Gavin has been married to his wife for 21 years and together they have two amazing teenage daughters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

