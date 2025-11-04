import { Hero } from '@/components/sections/Hero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata = {
  title: 'Commercial Projects | Peachtree Demolition',
  description:
    'Explore our completed commercial interior demolition projects across Atlanta and the Southeast. Class A office, retail, and institutional interiors.',
}

const projects = [
  {
    title: 'Downtown Atlanta Office Tower',
    location: 'Atlanta, GA',
    date: 'December 2024',
    description:
      'Complete interior demolition of 12-story Class A office building for full renovation.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    title: 'Buckhead Retail Center',
    location: 'Atlanta, GA',
    date: 'November 2024',
    description:
      '35,000 sq ft retail space demolition for adaptive reuse conversion to mixed-use development.',
    image: 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
  },
  {
    title: 'Midtown Corporate Headquarters',
    location: 'Atlanta, GA',
    date: 'October 2024',
    description:
      'Selective interior demolition for corporate office buildout across 4 floors.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    title: 'Perimeter Office Complex',
    location: 'Sandy Springs, GA',
    date: 'September 2024',
    description:
      'Multi-tenant office space demolition with MEP coordination for new tenant improvements.',
    image: 'https://images.unsplash.com/photo-1590496793573-558b73619c77?q=80&w=800',
  },
  {
    title: 'University Research Building',
    location: 'Athens, GA',
    date: 'August 2024',
    description:
      'Institutional building interior demo for laboratory and research space modernization.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    title: 'Historic Building Renovation',
    location: 'Savannah, GA',
    date: 'July 2024',
    description:
      'Careful selective demolition for historic adaptive reuse project in downtown district.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
]

export default function CommercialProjectsPage() {
  return (
    <>
      <Hero
        title="Commercial Project Portfolio"
        subtitle="Explore our completed commercial interior demolition projects across the Southeast. From Class A offices to adaptive reuse, we deliver precision and speed."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
      />

      {/* Projects Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Featured Commercial Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A selection of our recent commercial interior demolition projects showcasing our expertise and commitment to excellence.
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
        title="Have a Commercial Project in Mind?"
        description="Let's discuss your commercial demolition needs and timeline."
      />
    </>
  )
}

