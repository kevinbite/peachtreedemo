'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { useScrollThreshold } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

export function FloatingCTA() {
  const isScrolled = useScrollThreshold(300)

  return (
    <Link
      href="/contact"
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl lg:hidden',
        isScrolled ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      )}
      aria-label="Get a quote"
    >
      <Phone className="h-6 w-6" />
    </Link>
  )
}

