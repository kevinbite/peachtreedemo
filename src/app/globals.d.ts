/**
 * Global type declarations and augmentations
 */

// Extend Window interface if needed
declare global {
  interface Window {
    // Add any custom window properties here
    gtag?: (...args: unknown[]) => void
  }
}

export {}

