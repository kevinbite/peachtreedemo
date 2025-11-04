import { Hero } from '@/components/sections/Hero'
import { LogoCarousel } from '@/components/sections/LogoCarousel'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTABanner } from '@/components/sections/CTABanner'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Hammer, Trash2, Truck, Recycle, Shield, Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Atlanta Commercial Interior Demolition | Peachtree Demolition',
  description:
    'Professional commercial interior demolition in Atlanta. Specializing in Class A office, retail, and institutional interiors. Fast, clean, on schedule. Serving top-tier GCs across the Southeast.',
}

const services = [
  {
    title: 'Interior Selective Demolition',
    description:
      'Precise removal for Class A office, retail, and institutional interiors. We protect what stays while efficiently removing what goes.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
    href: '/services/commercial',
  },
  {
    title: 'Soft Demo & High-Finish Removal',
    description:
      'Clean, dust-controlled removal of ceilings, drywall, fixtures, and finishes. Ideal for adaptive reuse and tenant improvements.',
    icon: Trash2,
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800',
    href: '/services/commercial',
  },
  {
    title: 'Concrete Cutting & Slab Demo',
    description:
      'Professional concrete sawing, coring, and removal. MEP support for mechanical, electrical, and plumbing coordination.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1632320323139-d46c206edfbf?q=80&w=800',
    href: '/services/commercial',
  },
]

const features = [
  {
    icon: Clock,
    title: 'Fast Mobilization',
    description: 'We get in fast, get out clean, and never hold up the schedule. Trusted by GCs who need demo done right the first time.',
  },
  {
    icon: Shield,
    title: 'Clean Job Sites',
    description: 'Professional, dust-controlled work environments with seamless coordination. Built for occupied buildings and high-finish spaces.',
  },
  {
    icon: Recycle,
    title: 'Performance-Based',
    description: 'Equity-minded structure with ownership opportunities for field leaders. We invest in the people closest to the work.',
  },
]

const projects = [
  {
    title: 'Class A Office Tower Interior Demo',
    location: 'Midtown Atlanta, GA',
    date: 'January 2025',
    description:
      '45,000 SF selective interior demolition for tenant improvement. Fast mobilization with zero schedule delays for tier-one GC partner.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    title: 'Retail Adaptive Reuse',
    location: 'Buckhead, GA',
    date: 'December 2024',
    description:
      'High-finish interior removal and MEP coordination for luxury retail conversion. Clean, dust-controlled work in occupied building.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
  {
    title: 'Corporate Headquarters Renovation',
    location: 'Sandy Springs, GA',
    date: 'November 2024',
    description:
      'Multi-floor interior selective demolition with concrete cutting and slab removal. Completed 2 weeks ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero
        title="Atlanta's Premier Commercial Interior Demolition Contractor"
        subtitle="Specializing in Class A office, retail, and institutional interiors. We deliver precision, speed, and accountability—getting in fast, getting out clean, and never holding up your schedule. Trusted by leading general contractors across the Southeast."
        backgroundImage="/images/pdemo-background-logo.jpeg"
        secondaryCtaText="About Us"
        secondaryCtaLink="/about"
        stats={[
          { value: '20+', label: 'Years of Experience' },
          { value: '100+', label: 'Projects Completed' },
          { value: '30+', label: 'Trusted Partners' },
          { value: '100%', label: 'Customer Satisfaction' },
        ]}
      />

      {/* Partner Logos Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white lg:text-4xl">
              Built for GCs, Developers & Facility Owners
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              A modern approach to commercial interior demolition—when "on time" and "on budget" actually matter.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-lg border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/10"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                }}
              >
                <div 
                  className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 text-orange-500 transition-all group-hover:scale-110"
                  style={{
                    boxShadow: '0 0 20px rgba(229, 124, 61, 0.5), 0 0 40px rgba(229, 124, 61, 0.3)',
                  }}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading mb-2 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              What We Deliver
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              From soft demo to concrete cutting and MEP support—specializing in Class A office, retail, and institutional interiors across metro Atlanta and the Southeast.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button 
                size="xl"
                style={{
                  boxShadow: '0 0 30px rgba(229, 124, 61, 0.6), 0 0 60px rgba(229, 124, 61, 0.4)',
                }}
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Recent Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Commercial interior demolition for top-tier general contractors across Atlanta and the Southeast.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />
    </>
  )
}

