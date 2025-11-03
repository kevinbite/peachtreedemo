/**
 * Site-wide configuration
 */

export const siteConfig = {
  name: 'Peachtree Construction',
  description:
    'Professional construction services delivering quality craftsmanship and exceptional results.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/peachtree',
    facebook: 'https://facebook.com/peachtree',
    linkedin: 'https://linkedin.com/company/peachtree',
    instagram: 'https://instagram.com/peachtree',
  },
  contact: {
    email: 'info@peachtree-construction.com',
    phone: '(555) 123-4567',
    address: '123 Construction Way, Building City, ST 12345',
  },
}

export const navigationConfig = {
  mainNav: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
}

