'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Container size="md" className="text-center">
        <h1 className="font-heading text-6xl font-bold text-gray-900">
          Oops!
        </h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-gray-800">
          Something went wrong
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={reset}>
            Try Again
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  )
}

