import { Hero } from '@/components/sections/Hero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata = {
  title: 'Residential Projects | Peachtree Demolition',
  description:
    'Explore our completed residential demolition projects across Georgia. Safe, efficient demolition for homes and residential properties.',
}

const projects = [
  {
    title: 'Buckhead Home Renovation',
    location: 'Atlanta, GA',
    date: 'December 2024',
    description:
      'Complete interior demolition for luxury home renovation including kitchen, bathrooms, and master suite.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
  {
    title: 'Virginia Highland Teardown',
    location: 'Atlanta, GA',
    date: 'November 2024',
    description:
      'Full structure demolition for single-family home rebuild on historic lot.',
    image: 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
  },
  {
    title: 'Decatur Basement Conversion',
    location: 'Decatur, GA',
    date: 'October 2024',
    description:
      'Selective demolition for finished basement conversion to living space.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
  {
    title: 'Marietta Kitchen Remodel',
    location: 'Marietta, GA',
    date: 'September 2024',
    description:
      'Kitchen and dining room demolition for open-concept renovation.',
    image: 'https://images.unsplash.com/photo-1590496793573-558b73619c77?q=80&w=800',
  },
  {
    title: 'Roswell Pool Removal',
    location: 'Roswell, GA',
    date: 'August 2024',
    description:
      'In-ground pool demolition and yard restoration for backyard transformation.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
  {
    title: 'Sandy Springs Garage Demo',
    location: 'Sandy Springs, GA',
    date: 'July 2024',
    description:
      'Detached garage and shed removal for new construction preparation.',
    image: 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
  },
]

export default function ResidentialProjectsPage() {
  return (
    <>
      <Hero
        title="Residential Project Portfolio"
        subtitle="Explore our completed residential demolition projects across Georgia. From full home demolitions to selective interior work, we handle it all safely and efficiently."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
      />

      {/* Projects Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Featured Residential Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A selection of our recent residential projects showcasing our attention to detail and commitment to customer satisfaction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Residential Project in Mind?"
        subtitle="Let's discuss your residential demolition needs and provide a free quote."
      />
    </>
  )
}

