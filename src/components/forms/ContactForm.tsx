'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Save form reference before async operation
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add Web3Forms access key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    
    if (!accessKey) {
      console.error('Web3Forms access key is missing')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }
    
    formData.append('access_key', accessKey)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      console.log('Web3Forms Response:', data) // Debug log

      if (response.ok && data.success) {
        setSubmitStatus('success')
        // Reset form using saved reference
        form.reset()
        // Reset status after 8 seconds
        setTimeout(() => setSubmitStatus('idle'), 8000)
      } else {
        console.error('Form submission failed:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div 
          className="rounded-lg bg-green-500/20 border-2 border-green-500 p-6 text-green-100 animate-in fade-in slide-in-from-top-2 duration-500"
          style={{
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2)',
          }}
        >
          <p className="text-lg font-bold mb-1">✓ Message Sent Successfully!</p>
          <p className="text-sm text-green-200">Thank you for contacting us. We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div 
          className="rounded-lg bg-red-500/20 border-2 border-red-500 p-6 text-red-100 animate-in fade-in slide-in-from-top-2 duration-500"
          style={{
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)',
          }}
        >
          <p className="text-lg font-bold mb-1">✗ Failed to Send Message</p>
          <p className="text-sm text-red-200">Please try again or call us directly at (678) 402-6288.</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400"
            placeholder="(678) 402-6288"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white"
        >
          <option value="" className="bg-gray-900 text-white">Select a service</option>
          <option value="commercial" className="bg-gray-900 text-white">Commercial Interior Demo</option>
          <option value="concrete" className="bg-gray-900 text-white">Concrete Cutting</option>
          <option value="selective" className="bg-gray-900 text-white">Selective Demolition</option>
          <option value="mep" className="bg-gray-900 text-white">MEP Support</option>
          <option value="other" className="bg-gray-900 text-white">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400"
          placeholder="Please describe your project, location, timeline, and any specific requirements..."
        />
      </div>

      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <Button 
        type="submit" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
        style={{
          boxShadow: '0 0 30px rgba(229, 124, 61, 0.6), 0 0 60px rgba(229, 124, 61, 0.4)',
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </Button>

      <p className="text-center text-sm text-gray-400">
        By submitting this form, you agree to our{' '}
        <a href="#" className="text-orange-500 hover:text-orange-400 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

