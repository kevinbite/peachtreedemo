'use client'

import { useState, useEffect } from 'react'
import { throttle } from '@/lib/utils'

interface ScrollPosition {
  x: number
  y: number
}

/**
 * Custom hook to track scroll position
 * @param throttleMs - Throttle delay in milliseconds (default: 100ms)
 * @returns Current scroll position {x, y}
 */
export function useScrollPosition(throttleMs = 100): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }, throttleMs)

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Set initial position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [throttleMs])

  return scrollPosition
}

/**
 * Hook to detect if user has scrolled past a certain threshold
 * @param threshold - Y position threshold in pixels
 * @returns boolean indicating if scrolled past threshold
 */
export function useScrollThreshold(threshold = 100): boolean {
  const { y } = useScrollPosition()
  return y > threshold
}

