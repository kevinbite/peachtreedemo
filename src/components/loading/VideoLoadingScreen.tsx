'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface VideoLoadingScreenProps {
  onLoadingComplete: () => void
  videoSrc?: string
  logoSrc?: string
  minDisplayTime?: number
  maxLoadingTime?: number
}

export function VideoLoadingScreen({
  onLoadingComplete,
  videoSrc = '/videos/PDEMO LOADING SCREEN V1.mp4',
  logoSrc = '/images/PDEMO LOGO.png',
  minDisplayTime = 3000,
  maxLoadingTime = 10000,
}: VideoLoadingScreenProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [hideVideo, setHideVideo] = useState(false)
  const [showBlackScreen, setShowBlackScreen] = useState(false)
  const [fadeOutBlackScreen, setFadeOutBlackScreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const startTimeRef = useRef<number>(Date.now())
  const completedRef = useRef(false)

  // Maximum timeout fallback - force complete after maxLoadingTime
  useEffect(() => {
    const maxTimeout = setTimeout(() => {
      if (!completedRef.current) {
        console.log('Max loading time reached, completing...')
        completedRef.current = true
        onLoadingComplete()
      }
    }, maxLoadingTime)

    return () => clearTimeout(maxTimeout)
  }, [onLoadingComplete, maxLoadingTime])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlayThrough = () => {
      console.log('Video can play through')
      setIsVideoLoaded(true)
      video.play().catch((error) => {
        console.error('Video playback failed:', error)
        setHasError(true)
        // If video fails, complete after short delay
        setTimeout(() => {
          if (!completedRef.current) {
            completedRef.current = true
            onLoadingComplete()
          }
        }, 2000)
      })
    }

    const handleTimeUpdate = () => {
      // Trigger logo to appear 2.5 seconds before video ends
      const timeRemaining = video.duration - video.currentTime
      
      if (timeRemaining <= 2.5 && timeRemaining > 0 && !showLogo && video.duration > 0) {
        console.log(`Showing logo at ${timeRemaining.toFixed(2)}s remaining`)
        
        // IMMEDIATELY pause video and hide it to prevent any replay or glitches
        video.pause()
        video.currentTime = video.duration
        setHideVideo(true)
        setShowLogo(true)
        
        // Show black screen with logo sliding in from right after brief delay
        setTimeout(() => {
          console.log('Black screen with logo sliding in from right')
          setShowBlackScreen(true)
        }, 200)
        
        // Fade out black screen after it's visible for a moment
        setTimeout(() => {
          console.log('Fading out black screen')
          setFadeOutBlackScreen(true)
        }, 1400)
        
        // Complete transition after fade out
        setTimeout(() => {
          if (!completedRef.current) {
            completedRef.current = true
            onLoadingComplete()
          }
        }, 2200)
      }
    }

    const handleEnded = () => {
      console.log('Video ended - pausing to prevent replay')
      video.pause()
      video.currentTime = video.duration
      
      // Fallback if time-based trigger didn't work
      if (!showLogo) {
        setHideVideo(true)
        setShowLogo(true)
        setTimeout(() => setShowBlackScreen(true), 200)
        setTimeout(() => setFadeOutBlackScreen(true), 1400)
        setTimeout(() => {
          if (!completedRef.current) {
            completedRef.current = true
            onLoadingComplete()
          }
        }, 2200)
      }
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      setHasError(true)
      // If video has error, complete after short delay
      setTimeout(() => {
        if (!completedRef.current) {
          completedRef.current = true
          onLoadingComplete()
        }
      }, 2000)
    }

    const handleLoadedData = () => {
      console.log('Video loaded data')
      setIsVideoLoaded(true)
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // Preload video
    video.load()

    // Fallback: If video doesn't load in 5 seconds, try to play anyway
    const fallbackTimer = setTimeout(() => {
      if (!isVideoLoaded) {
        console.log('Video load timeout, attempting to play')
        video.play().catch(() => {
          setHasError(true)
        })
      }
    }, 5000)

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
      clearTimeout(fallbackTimer)
    }
  }, [onLoadingComplete, minDisplayTime, isVideoLoaded, showLogo])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ 
          opacity: hideVideo ? 0 : 1,
          transition: 'opacity 0.1s ease-out'
        }}
        muted
        playsInline
        preload="auto"
        loop={false}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Screen with Logo - Slides in from Right */}
      <AnimatePresence>
        {showBlackScreen && (
          <motion.div
            key="black-screen-container"
            className="fixed inset-0 z-20 bg-black"
            initial={{ 
              x: '100%'
            }}
            animate={
              fadeOutBlackScreen
                ? { 
                    x: 0,
                    opacity: 0
                  }
                : { 
                    x: 0,
                    opacity: 1
                  }
            }
            transition={
              fadeOutBlackScreen
                ? { 
                    opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                    x: { duration: 0 }
                  }
                : { 
                    x: { duration: 0.7, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0 }
                  }
            }
            style={{
              willChange: 'transform, opacity'
            }}
          >
            {/* Logo centered on the black screen */}
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={logoSrc}
                alt="Peachtree Demolition Logo"
                width={500}
                height={500}
                quality={100}
                className="h-auto w-80 select-none drop-shadow-2xl md:w-[28rem]"
                style={{
                  imageRendering: 'high-quality',
                  WebkitFontSmoothing: 'antialiased',
                }}
                priority
                unoptimized
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fallback Loading Spinner (if video fails) */}
      {!isVideoLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            <p className="mt-4 text-sm text-white">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Error message */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-white">Preparing your experience...</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

