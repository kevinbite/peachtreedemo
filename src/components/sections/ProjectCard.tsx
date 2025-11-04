import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

interface ProjectCardProps {
  title: string
  location: string
  date: string
  description: string
  image: string
  href?: string
}

export function ProjectCard({
  title,
  location,
  date,
  description,
  image,
  href = '/projects',
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-xl">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <h3 className="font-heading mb-3 text-xl font-bold text-gray-900">
            {title}
          </h3>
          <div className="mb-3 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {date}
            </div>
          </div>
          <p className="mb-4 text-gray-600">{description}</p>
          <div className="flex items-center text-sm font-semibold text-orange-500 transition-colors group-hover:text-orange-600">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

