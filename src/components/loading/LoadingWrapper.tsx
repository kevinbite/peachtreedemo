'use client'

import { useState } from 'react'
import { VideoLoadingScreen } from './VideoLoadingScreen'

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [fadeOutBlack, setFadeOutBlack] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    
    // Show content immediately but keep black overlay
    setShowContent(true)
    
    // Fade out black overlay after brief delay
    setTimeout(() => {
      setFadeOutBlack(true)
    }, 100)
  }

  return (
    <>
      {isLoading && (
        <VideoLoadingScreen
          onLoadingComplete={handleLoadingComplete}
          videoSrc="/videos/PDEMO LOADING SCREEN V1.mp4"
          logoSrc="/images/PDEMO LOGO.png"
        />
      )}
      
      {/* Black overlay that fades out to reveal site */}
      {!isLoading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'black',
            opacity: fadeOutBlack ? 0 : 1,
            transition: 'opacity 1.0s ease-in-out',
            pointerEvents: fadeOutBlack ? 'none' : 'auto',
            zIndex: 40,
          }}
        />
      )}
      
      {showContent && (
        <div>
          {children}
        </div>
      )}
    </>
  )
}

