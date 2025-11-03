/**
 * Global type definitions for the application
 */

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  projectType?: string
}

// Project/Portfolio types
export interface Project {
  id: string
  title: string
  description: string
  category: string
  images: string[]
  completionDate?: string
  client?: string
  location?: string
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features?: string[]
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role?: string
  company?: string
  content: string
  rating?: number
  image?: string
}

// Team member types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  image?: string
  email?: string
  phone?: string
}

// SEO types
export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
}

