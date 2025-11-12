import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { MapPin, Calendar, Building2, HardHat } from 'lucide-react'

interface ProjectCardProps {
  title: string
  type: string
  location: string
  date: string
  gc: string
  image: string
}

export function ProjectCard({
  title,
  type,
  location,
  date,
  gc,
  image,
}: ProjectCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading mb-3 text-xl font-bold text-gray-900">
          {title}
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start">
            <Building2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{type}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-start">
            <HardHat className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{gc}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

