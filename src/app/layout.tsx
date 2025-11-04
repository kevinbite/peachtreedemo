import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { LoadingWrapper } from '@/components/loading/LoadingWrapper'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Peachtree Construction | Professional Construction Services',
    template: '%s | Peachtree Construction',
  },
  description:
    'Professional construction services delivering quality craftsmanship and exceptional results. Commercial and residential construction experts.',
  keywords: [
    'construction',
    'commercial construction',
    'residential construction',
    'building services',
    'contractors',
  ],
  authors: [{ name: 'Peachtree Construction' }],
  creator: 'Peachtree Construction',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://peachtree-construction.com',
    siteName: 'Peachtree Construction',
    title: 'Peachtree Construction | Professional Construction Services',
    description:
      'Professional construction services delivering quality craftsmanship and exceptional results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peachtree Construction | Professional Construction Services',
    description:
      'Professional construction services delivering quality craftsmanship and exceptional results.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <LoadingWrapper>
          <Header />
          <main className="pt-20">{children}</main>
          <FloatingCTA />
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  )
}

