import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CTABannerProps {
  title?: string
  description?: string
  primaryCTA?: string
  primaryLink?: string
}

export function CTABanner({
  title = 'Need Demo Done Right the First Time?',
  description = 'If you\'re a GC, developer, or facility owner who needs commercial interior demolition when "on time" and "on budget" actually matter—we\'re the partner you call.',
  primaryCTA = 'Get a Free Quote',
  primaryLink = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading mb-4 text-3xl font-bold text-white lg:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-white/90">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={primaryLink}>
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)',
                }}
              >
                {primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:678-402-6288">
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-orange-500 sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

