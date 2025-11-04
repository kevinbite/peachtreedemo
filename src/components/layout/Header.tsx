'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useScrollThreshold } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Commercial', href: '/services/commercial' },
      { name: 'Residential', href: '/services/residential' },
    ],
  },
  {
    name: 'Projects',
    href: '/projects',
    dropdown: [
      { name: 'Commercial', href: '/projects/commercial' },
      { name: 'Residential', href: '/projects/residential' },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const isScrolled = useScrollThreshold(20)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 bg-black transition-all duration-300',
        isScrolled && 'shadow-md'
      )}
    >
      <nav className="container-custom">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center -my-6">
            <Image
              src="/images/PDEMO LOGO.png"
              alt="Peachtree Demolition"
              width={600}
              height={200}
              className="h-40 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center space-x-1 py-6 text-sm font-medium text-white transition-colors hover:text-orange-500">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full z-50 w-48 rounded-lg border border-gray-200 bg-black py-2 shadow-lg">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white transition-colors hover:bg-gray-900 hover:text-orange-500"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white transition-colors hover:text-orange-500"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="flex items-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              style={{
                boxShadow: '0 0 30px rgba(229, 124, 61, 0.6), 0 0 60px rgba(229, 124, 61, 0.4)',
              }}
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-28 z-50 bg-black lg:hidden">
          <div className="container-custom py-8">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className="flex w-full items-center justify-between text-lg font-medium text-white transition-colors hover:text-orange-500"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-base text-gray-300 transition-colors hover:text-orange-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white transition-colors hover:text-orange-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center rounded-lg bg-orange-500 px-6 py-4 text-lg font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  boxShadow: '0 0 30px rgba(229, 124, 61, 0.6), 0 0 60px rgba(229, 124, 61, 0.4)',
                }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

