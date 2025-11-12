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
    title: 'Charleston Millhouse',
    type: 'Historic Hotel, Hospitality, Common Areas & 212 rooms',
    location: 'Charleston, SC',
    date: 'August 2022',
    gc: 'Nix-Unger Construction',
    image: '/images/unnamed (1).jpg',
  },
  {
    title: 'World of Coca-Cola',
    type: 'Soft / Selective Demo, Concrete Removal',
    location: 'Marietta, GA',
    date: 'December 2024',
    gc: 'CA South LLC',
    image: '/images/unnamed (12).jpg',
  },
  {
    title: 'Digital Realty - Google',
    type: 'Soft Demo, 4ft computer flooring',
    location: 'Marietta, GA',
    date: 'November 2017',
    gc: 'LEL International Inc',
    image: '/images/unnamed (10).jpg',
  },
  {
    title: 'Nalley Infinity of Marietta',
    type: 'Car Dealership, Complete face lift, Interior and Exterior, 2 story curtain wall',
    location: 'Marietta, GA',
    date: 'June 2013',
    gc: 'Choate Construction Company',
    image: '/images/unnamed (15).jpg',
  },
  {
    title: 'Roswell Highschool',
    type: 'School System, Mechanical Upgrade, Selective Demo',
    location: 'Roswell, GA',
    date: 'June 2015',
    gc: 'Evergreen Construction Company',
    image: '/images/unnamed (8).jpg',
  },
  {
    title: 'HL Green Discovery',
    type: 'Concrete Cutting, Slab Removal 15,000sqft',
    location: 'Atlanta, GA',
    date: 'October 2025',
    gc: 'Leapley Construction Group',
    image: '/images/HLGREENproject.jpg',
  },
  {
    title: 'UTI Atlanta',
    type: 'Soft Demo, Industrial, 150,000 sqft, 110,000sqft of raised computer flooring, Floor Grinding',
    location: 'Atlanta, GA',
    date: 'August 2025',
    gc: 'Humphries and Company',
    image: '/images/UTIprojectpic.JPG',
  },
  {
    title: '999 Peachtree St – Project Patriot',
    type: 'Class A Office Tower. Interior, Selective Demo, Exterior Selective Demo, Concrete Removal',
    location: 'Atlanta, GA',
    date: 'April 2024',
    gc: 'HITT Contracting Inc',
    image: '/images/unnamed (25).jpg',
  },
  {
    title: 'FISERV',
    type: '2 – 6 story buildings, Soft Demo, Selective Salvage of all carpet for recycling for LEEDS Certified Project',
    location: 'Atlanta, GA',
    date: 'July 2015',
    gc: 'Choate Construction Company',
    image: '/images/FISERVproject.jpg',
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

