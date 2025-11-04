import Image from 'next/image'

const partnerLogos = [
  {
    name: 'Brasfield & Gorrie',
    src: '/images/Brasfield-Gorrie-logo-Blue-PNG.webp',
    scale: 1.3,
  },
  {
    name: 'Holder Construction',
    src: '/images/holderlogo.webp',
    scale: 2.0,
  },
  {
    name: 'JE Dunn',
    src: '/images/JEDunn.webp',
    scale: 2.0,
  },
  {
    name: 'Juneau Construction',
    src: '/images/juneaulogo.webp',
    scale: 2.5,
  },
  {
    name: 'KBD Group',
    src: '/images/kbdgroup.webp',
    scale: 1.3,
  },
  {
    name: 'New South Construction',
    src: '/images/newsouthconstructionlogos-primarywithmodifier-green.webp',
    scale: 1.0,
    offsetX: -35,
  },
  {
    name: 'Skanska',
    src: '/images/skanskalogo.png',
    scale: 1.0,
  },
  {
    name: 'Turner Construction',
    src: '/images/turnerlogo.webp',
    scale: 2.2,
  },
]

export function LogoCarousel() {
  // Duplicate logos twice for seamless infinite scroll
  // Each logo is exactly 240px wide (200px content + 40px padding)
  const duplicatedLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section className="border-b border-t border-gray-200 bg-white py-12">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 md:text-3xl">
            Trusted by
          </h2>
        </div>

        {/* Logo Carousel - Professional seamless infinite scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-fast items-center">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex flex-shrink-0 items-center justify-center"
                style={{ 
                  width: '240px',
                  height: '120px',
                  padding: '0 20px'
                }}
              >
                <div 
                  className="flex h-full w-full items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
                  style={{ 
                    transform: `scale(${logo.scale}) translateX(${logo.offsetX || 0}px)` 
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className="h-auto w-full object-contain"
                    style={{ maxHeight: '80px', maxWidth: '200px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


