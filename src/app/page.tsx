import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { HeroCarousel } from '@/components/home/HeroCarousel'
import { AreasOfPractice } from '@/components/home/AreasOfPractice'
import { CollaborationsCarousel } from '@/components/home/CollaborationsCarousel'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* § 0.1 — Hero Showcase Carousel */}
      <HeroCarousel />

      {/* § 0.2 — Introduction */}
      <FadeIn>
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-mobile md:py-section-desktop">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter-desktop items-start">
            {/* Left — 5 cols */}
            <div className="col-span-4 md:col-span-5 flex flex-col gap-4">
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface">
                About Shubham Mahajan
              </h2>
              <div className="w-12 h-1 bg-tertiary mt-2" />
            </div>
            {/* Right — 6 cols, offset 1 */}
            <div className="col-span-4 md:col-span-6 md:col-start-7 flex flex-col gap-6 pt-6 md:pt-0">
              <div className="font-body text-on-surface-variant flex flex-col gap-6 text-base md:text-lg leading-relaxed">
                <p>
                  Shubham Mahajan works at the intersection of cinema, storytelling, luxury experiences, brand strategy, and high-profile productions.
                </p>
                <p>
                  With an MA in Filmmaking from the University for the Creative Arts, London, his experience spans filmmaking, branded content, documentaries, creative direction, production, luxury events, international film junkets, and the management of globally recognised talent, athletes, artists, executives, and international dignitaries.
                </p>
                <p>
                  His work has taken him from film sets and edit suites to high-pressure international events, luxury hospitality environments, and large-scale brand campaigns, with an unwavering focus on storytelling, precision, discretion, and execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* § 0.3 — Areas of Practice */}
      <AreasOfPractice />

      {/* § 0.4 — Selected Collaborators (Marquee Carousel) */}
      <FadeIn>
        <CollaborationsCarousel />
      </FadeIn>

      {/* § 0.5 — Contact Teaser */}
      <FadeIn>
        <section className="w-full py-section-mobile md:py-section-desktop border-t border-border-subtle bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center justify-center gap-8">
            <h2 className="font-display text-display-mobile md:text-display text-on-surface">
              Let&apos;s Work Together
            </h2>
            <Link 
              href="mailto:spmahajan229@gmail.com"
              className="font-label-caps text-label-caps text-tertiary border-b border-tertiary pb-1 hover:text-on-surface hover:border-on-surface transition-colors duration-300"
            >
              spmahajan229@gmail.com
            </Link>
          </div>
        </section>
      </FadeIn>

    </div>
  )
}
