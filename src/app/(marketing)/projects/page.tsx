import { Hero } from '@/components/sections/Hero'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { CTABanner } from '@/components/sections/CTABanner'

export const metadata = {
  title: 'Our Projects | Peachtree Demolition',
  description:
    'View our portfolio of completed demolition projects across Georgia. Residential, commercial, and industrial work.',
}

const projects = [
  {
    title: 'Downtown Office Complex Demolition',
    location: 'Atlanta, GA',
    date: 'November 2024',
    description:
      'Complete structural demolition of a 5-story office building in downtown Atlanta. Project included asbestos abatement, controlled demolition, and site preparation for new development.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
  },
  {
    title: 'Residential Home Teardown',
    location: 'Marietta, GA',
    date: 'October 2024',
    description:
      'Full residential demolition including foundation removal and site clearing. Recycled over 85% of materials including wood, metal, and concrete.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
  {
    title: 'Industrial Warehouse Demolition',
    location: 'Decatur, GA',
    date: 'September 2024',
    description:
      '45,000 square foot industrial warehouse demolished and site prepared for redevelopment. Completed 2 weeks ahead of schedule.',
    image: 'https://images.unsplash.com/photo-1590496793573-558b73619c77?q=80&w=800',
  },
  {
    title: 'Shopping Center Renovation',
    location: 'Roswell, GA',
    date: 'August 2024',
    description:
      'Selective interior demolition for major shopping center renovation. Removed 12 interior walls while maintaining structural integrity.',
    image: 'https://images.unsplash.com/photo-1632320323139-d46c206edfbf?q=80&w=800',
  },
  {
    title: 'Concrete Parking Lot Removal',
    location: 'Sandy Springs, GA',
    date: 'July 2024',
    description:
      'Removed 30,000 sq ft of deteriorated concrete parking lot. Recycled all materials for use as road base on new construction.',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=800',
  },
  {
    title: 'School Building Demolition',
    location: 'Alpharetta, GA',
    date: 'June 2024',
    description:
      'Safe demolition of outdated school building during summer break. Included hazardous material abatement and complete site restoration.',
    image: 'https://images.unsplash.com/photo-1590496793907-4c56b1c2f137?q=80&w=800',
  },
  {
    title: 'Bridge Demolition & Removal',
    location: 'Gwinnett County, GA',
    date: 'May 2024',
    description:
      'Controlled demolition of aging concrete bridge structure. Coordinated with DOT for safe execution with minimal traffic disruption.',
    image: 'https://images.unsplash.com/photo-1628182316384-c7dae12f1975?q=80&w=800',
  },
  {
    title: 'Restaurant Interior Renovation',
    location: 'Buckhead, GA',
    date: 'April 2024',
    description:
      'Complete interior demolition for upscale restaurant remodel. Careful removal of existing fixtures while preserving historic facade.',
    image: 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?q=80&w=800',
  },
  {
    title: 'Multi-Family Housing Demolition',
    location: 'Athens, GA',
    date: 'March 2024',
    description:
      'Demolished 8-unit apartment building for new mixed-use development. Recycled 90% of demolition materials.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Our Project Portfolio"
        subtitle="Explore our completed demolition projects across Georgia. From small residential teardowns to large commercial structures."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
      />

      {/* Stats Section */}
      <section className="bg-orange-500 py-16 text-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Years of Experience', value: '20+' },
              { label: 'Material Recycled', value: '85%' },
              { label: 'Customer Satisfaction', value: '100%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-heading mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Recent Projects
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Each project showcases our commitment to safety, quality, and customer satisfaction.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

