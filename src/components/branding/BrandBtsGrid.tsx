"use client"

import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

const brandBtsImages = [
  { src: '/images/branding/bts/IMG_1663.PNG', alt: 'GlobalBees Brand Commercial BTS' },
  { src: '/images/branding/bts/IMG_1665.PNG', alt: 'Studio Directing & Production Monitoring' },
  { src: '/images/branding/bts/IMG_1666.PNG', alt: 'Commercial Campaign Setup' },
  { src: '/images/branding/bts/IMG_1667.PNG', alt: 'On Set Brand Film Shoot' },
  { src: '/images/branding/bts/IMG_1668.PNG', alt: 'Talent & Crew Direction' },
  { src: '/images/branding/bts/IMG_1670.PNG', alt: 'Creative Directing Session' },
  { src: '/images/branding/bts/IMG_1673.PNG', alt: 'Studio Lighting & Rigging' },
  { src: '/images/branding/bts/IMG_1675.PNG', alt: 'Product Showcase & Commercial Cinematography' },
  { src: '/images/branding/bts/IMG_1676.PNG', alt: 'On Set Filming & Frame Composition' },
  { src: '/images/branding/bts/IMG_1677.JPG', alt: 'Brand Film Production Stage' },
  { src: '/images/branding/bts/IMG_1678.JPG', alt: 'High-Conversion Commercial Set' },
  { src: '/images/branding/bts/IMG_1679.JPG', alt: 'Field Directing & Live Monitoring' },
  { src: '/images/branding/bts/IMG_1680.JPG', alt: 'Behind the Scenes Camera Operations' },
  { src: '/images/branding/bts/IMG_1681.PNG', alt: 'Commercial Production Wrap' },
]

export function BrandBtsGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-section-desktop border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <FadeIn>
          <div className="mb-12 md:mb-16 flex justify-center text-center pb-6 border-b border-border-subtle">
            <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
              Behind the Scenes
            </h2>
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
