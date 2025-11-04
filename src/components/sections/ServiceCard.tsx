import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

interface ServiceCardProps {
  title: string
  description: string
  icon?: LucideIcon
  image?: string
  href?: string
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  href = '/services',
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div 
        className="group h-full overflow-hidden rounded-lg border border-gray-200/50 bg-white/60 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/80"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        }}
      >
        {image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <div className="p-6">
          {Icon && (
            <div 
              className="mb-4 inline-flex rounded-lg bg-orange-500/20 p-3 text-orange-500 transition-all group-hover:scale-110"
              style={{
                boxShadow: '0 0 20px rgba(229, 124, 61, 0.4), 0 0 40px rgba(229, 124, 61, 0.2)',
              }}
            >
              <Icon className="h-6 w-6" />
            </div>
          )}
          <h3 className="font-heading mb-3 text-xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="mb-4 text-gray-700">{description}</p>
          <div className="flex items-center text-sm font-semibold text-orange-500 transition-colors group-hover:text-orange-600">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

