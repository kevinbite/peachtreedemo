import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Container size="md" className="text-center">
        <h1 className="font-heading text-9xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 font-heading text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button size="lg">Return Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

