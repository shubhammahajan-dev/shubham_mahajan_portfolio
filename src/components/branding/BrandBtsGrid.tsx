"use client"

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

const brandBtsImages = [
  { src: '/images/branding/bts/dsc_0512.jpg', alt: 'Commercial Production Lighting & Camera Rig' },
  { src: '/images/branding/bts/dsc_0657.jpg', alt: 'Directing High-Conversion Commercial Shoot' },
  { src: '/images/branding/bts/dsc_0752.jpg', alt: 'Brand Storytelling On Set' },
  { src: '/images/branding/bts/dsc_0862.jpg', alt: 'Studio Monitoring and Focus Pulling' },
  { src: '/images/branding/bts/dsc_0957.jpg', alt: 'Cinematography Setup for D2C Brand' },
  { src: '/images/branding/bts/dsc_0962.jpg', alt: 'Actor Direction and Set Staging' },
  { src: '/images/branding/bts/dsc_0140.jpg', alt: 'On-Location Camera & Monitoring Rig' },
  { src: '/images/branding/bts/dsc_0145.jpg', alt: 'Field Directing & Live Monitoring' },
  { src: '/images/branding/bts/dsc_0152.jpg', alt: 'Cinematography & Natural Light Staging' },
  { src: '/images/branding/bts/dsc_0329.jpg', alt: 'Commercial Production Talent & Crew Direction' },
  { src: '/images/branding/bts/dsc_0460.jpg', alt: 'Studio Lighting Setup & Gaffer Operations' },
  { src: '/images/branding/bts/dsc_0488.jpg', alt: 'Portrait Cinematography Setup' },
  { src: '/images/branding/bts/img_7758.jpg', alt: 'Production Management & Creative Direction' },
  { src: '/images/branding/bts/img_7811.jpg', alt: 'Studio Frame Composition and Framing' },
  { src: '/images/branding/bts/img_7978.jpg', alt: 'Commercial Sound and Camera Department' },
  { src: '/images/branding/bts/oi7a8967.jpg', alt: 'Brand Film Production Stage' },
  { src: '/images/branding/bts/oi7a9326.jpg', alt: 'Technical Camera Rigging on Location' },
  { src: '/images/branding/bts/oi7a9421.jpg', alt: 'Studio Lighting Arrangement' },
]

export function BrandBtsGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-section-desktop border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-tertiary mb-3 block">
                04 / Behind the Scenes
              </span>
              <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
                On Set &amp; In Production
              </h2>
            </div>
            <div className="text-on-surface-variant max-w-md text-sm md:text-base font-body">
              <p>
                Behind the camera across commercial sets, studio setups, lighting rigs, and creative directing sessions for GlobalBees and premier brand campaigns.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Masonry / Responsive Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {brandBtsImages.map((img, idx) => (
            <FadeIn key={`${img.src}-${idx}`} delay={Math.min(idx * 0.02, 0.3)} className="break-inside-avoid">
              <div className="relative w-full group overflow-hidden bg-surface border border-border-subtle hover:border-tertiary/60 transition-all duration-500">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
