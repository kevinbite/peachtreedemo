'use client'

import { useEffect, useState, type RefObject } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

/**
 * Custom hook to observe element intersection with viewport
 * Useful for lazy loading, animations on scroll, etc.
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: UseIntersectionObserverOptions = {}
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      observerParams
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin, frozen])

  return entry
}

/**
 * Simplified hook that returns just visibility state
 */
export function useIsVisible(
  elementRef: RefObject<Element>,
  options?: UseIntersectionObserverOptions
): boolean {
  const entry = useIntersectionObserver(elementRef, options)
  return !!entry?.isIntersecting
}

