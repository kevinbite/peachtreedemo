import { Container } from '@/components/ui/Container'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container size="md" className="text-center">
        <div className="inline-flex h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </Container>
    </div>
  )
}

