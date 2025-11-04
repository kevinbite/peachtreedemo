'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook to preload video
 * @param videoSrc - Path to video file
 * @returns Object with loading state and error
 */
export function useVideoPreloader(videoSrc: string) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    video.preload = 'auto'

    const handleCanPlayThrough = () => {
      setIsLoaded(true)
      setError(null)
    }

    const handleError = () => {
      setError('Failed to load video')
      setIsLoaded(false)
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('error', handleError)

    video.src = videoSrc

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('error', handleError)
      video.src = ''
    }
  }, [videoSrc])

  return { isLoaded, error }
}

