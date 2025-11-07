import { Hero } from '@/components/sections/Hero'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Contact Us | Peachtree Demolition',
  description:
    'Get a free quote for your commercial interior demolition project. Call (678) 402-6288 or fill out our contact form. Serving Atlanta and the Southeast.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(678) 402-6288',
    link: 'tel:678-402-6288',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'Gavin@peachtreedemo.com',
    link: 'mailto:Gavin@peachtreedemo.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '2030 Powers Ferry Rd, Atlanta, GA 30339',
    link: 'https://maps.google.com/maps?q=2030+Powers+Ferry+Rd,+Atlanta,+GA+30339',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: '24/7',
    link: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get Your Free Quote Today"
        subtitle="Ready to start your demolition project? Contact us for a free, no-obligation quote. Our team responds within 24 hours."
        backgroundImage="/images/pdemo-background-logo.jpeg"
        ctaText="Call Now"
        ctaLink="tel:678-402-6288"
        secondaryCtaText="Email Us"
        secondaryCtaLink="mailto:Gavin@peachtreedemo.com"
      />

      {/* Contact Info Cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-gray-200/50 bg-white/60 p-6 text-center backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-white/80"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                }}
              >
                <div 
                  className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/20 text-orange-500 transition-all group-hover:scale-110"
                  style={{
                    boxShadow: '0 0 20px rgba(229, 124, 61, 0.4), 0 0 40px rgba(229, 124, 61, 0.2)',
                  }}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-700 transition-colors hover:text-orange-500"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-700">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-black py-16 lg:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold text-white lg:text-4xl">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <div
              className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              style={{
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 40px rgba(229, 124, 61, 0.3), 0 0 80px rgba(229, 124, 61, 0.15)',
              }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          src="https://maps.google.com/maps?q=2030+Powers+Ferry+Rd,+Atlanta,+GA+30339&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peachtree Demolition Location"
        ></iframe>
      </section>
    </>
  )
}

