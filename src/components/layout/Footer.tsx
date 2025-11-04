import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Commercial', href: '/services/commercial' },
    { name: 'Residential', href: '/services/residential' },
  ],
  projects: [
    { name: 'Commercial Projects', href: '/projects/commercial' },
    { name: 'Residential Projects', href: '/projects/residential' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container-custom py-8 lg:py-12">
        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info & Logo */}
          <div className="lg:col-span-2 -mt-8">
            <Link href="/" className="mb-0 inline-block">
              <Image
                src="/images/PDEMO LOGO.png"
                alt="Peachtree Demolition"
                width={400}
                height={160}
                className="h-40 w-auto"
              />
            </Link>
            <div className="max-w-sm -mt-4">
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Professional commercial interior demolition in Atlanta. Specializing in Class A office, retail, and institutional interiors.
              </p>
              <div className="space-y-2.5 text-sm">
                <a
                  href="tel:678-402-6288"
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(678) 402-6288</span>
                </a>
                <a
                  href="mailto:estimating@peachtreedemo.com"
                  className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-orange-500"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>estimating@peachtreedemo.com</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>2030 Powers Ferry Rd<br />Atlanta, GA 30339</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Projects
            </h3>
            <ul className="space-y-2.5">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <Link
              href="/contact"
              className="mb-6 inline-block w-full rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get a Free Quote
            </Link>
            <div className="mb-4 flex items-center space-x-3">
              <span className="text-sm text-gray-400">Follow us:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-800">
              <iframe
                src="https://maps.google.com/maps?q=2030+Powers+Ferry+Rd,+Atlanta,+GA+30339&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peachtree Demolition Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Peachtree Demolition. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

