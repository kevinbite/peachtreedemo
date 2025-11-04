import Link from 'next/link'
import { ArrowRight, Mail, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Stat {
  value: string
  label: string
  icon?: LucideIcon
}

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage?: string
  stats?: Stat[]
}

export function Hero({
  title,
  subtitle,
  ctaText = 'Get a Free Quote',
  ctaLink = '/contact',
  secondaryCtaText = 'Our Services',
  secondaryCtaLink = '/services',
  backgroundImage = 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=2070',
  stats,
}: HeroProps) {
  const isEmailLink = secondaryCtaLink.startsWith('mailto:')
  
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-900 lg:min-h-[90vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 pb-32 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="font-heading mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-gray-200 md:text-xl lg:text-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={ctaLink}>
              <Button 
                size="xl" 
                className="w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 30px rgba(229, 124, 61, 0.6), 0 0 60px rgba(229, 124, 61, 0.4)',
                }}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {isEmailLink ? (
              <a href={secondaryCtaLink}>
                <Button variant="outline" size="xl" className="w-full border-white text-white hover:bg-white hover:text-gray-900 sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  {secondaryCtaText}
                </Button>
              </a>
            ) : (
              <Link href={secondaryCtaLink}>
                <Button variant="outline" size="xl" className="w-full border-white text-white hover:bg-white hover:text-gray-900 sm:w-auto">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      {stats && stats.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/90 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading mb-1 text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

