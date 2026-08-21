import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { HeroCarousel } from '@/components/home/HeroCarousel'
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
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest border-b border-border-subtle pb-4 w-max">
                Shubham Mahajan
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-4">
                Craft at Every Scale
              </h2>
            </div>
            {/* Right — 6 cols, offset 1 */}
            <div className="col-span-4 md:col-span-6 md:col-start-7 flex flex-col gap-6 pt-12 md:pt-0">
              <div className="font-body text-body text-on-surface-variant flex flex-col gap-6">
                <p>
                  I work at the intersection of cinema, storytelling, luxury experiences, brand strategy and
                  high-profile productions.
                </p>
                <p>
                  With an MA in Filmmaking from the University for the Creative Arts, London, my experience
                  spans filmmaking, branded content, documentaries, creative direction, production, luxury
                  events, international film junkets and the management of globally recognised talent, athletes,
                  artists, executives and international dignitaries.
                </p>
                <p>
                  My work has taken me from film sets and edit suites to high-pressure international events,
                  luxury hospitality environments and large-scale brand campaigns, with a focus on storytelling,
                  precision, discretion and execution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* § 0.3 — Selected Work */}
      <section className="w-full py-section-mobile md:py-section-desktop overflow-hidden border-t border-border-subtle">
        
        {/* Work Item 1 — Layout A */}
        <FadeIn>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center mb-intra-section">
            <div className="lg:col-span-7">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-surface-container border border-border-subtle relative group overflow-hidden">
                <Image 
                  src="/images/home/work-narrative-films.jpg" 
                  alt="Films & BFI" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 mt-6 lg:mt-0">
              <span className="font-label-caps text-label-caps text-text-secondary border-b border-border-subtle pb-2 w-max">
                Films &amp; BFI
              </span>
              <h3 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">Narrative Short Films</h3>
              <p className="font-body text-body text-on-surface-variant">
                A curated selection of narrative works recognized for their visual ambition and emotional depth,
                including institutional support from the British Film Institute.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Work Item 2 — Layout B */}
        <FadeIn delay={0.1}>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center mb-intra-section">
            <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1 mt-6 lg:mt-0">
              <span className="font-label-caps text-label-caps text-text-secondary border-b border-border-subtle pb-2 w-max">
                Events &amp; Junkets
              </span>
              <h3 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">Press &amp; Talent Orchestration</h3>
              <p className="font-body text-body text-on-surface-variant">
                Producing seamless press junkets for global theatrical releases, featuring top-tier talent
                including Ryan Gosling, ensuring high-fidelity editorial output.
              </p>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="w-full aspect-[16/9] bg-surface-container border border-border-subtle relative group overflow-hidden">
                <Image 
                  src="/images/home/work-press-orchestration.jpg" 
                  alt="Events & Junkets" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Work Item 3 — Layout A */}
        <FadeIn delay={0.2}>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-7">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-surface-container border border-border-subtle relative group overflow-hidden">
                <Image 
                  src="/images/home/work-branding-views.jpg" 
                  alt="Branding & Insights" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 mt-6 lg:mt-0">
              <span className="font-label-caps text-label-caps text-text-secondary border-b border-border-subtle pb-2 w-max">
                Branding &amp; Insights
              </span>
              <h3 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">900M+ Views &amp; Counting</h3>
              <p className="font-body text-body text-on-surface-variant">
                Translating audience psychology into actionable brand strategies that have
                consistently delivered unprecedented digital engagement across platforms.
              </p>
            </div>
          </div>
        </FadeIn>

      </section>

      {/* § 0.4 — Selected Collaborators (Marquee Carousel) */}
      <FadeIn>
        <CollaborationsCarousel />
      </FadeIn>

      {/* § 0.5 — Quote */}
      <FadeIn>
        <section className="w-full bg-background py-section-mobile md:py-section-desktop">
          <div className="max-w-reading-max mx-auto px-margin-mobile md:px-0 text-center">
            <blockquote className="font-pullquote text-pullquote text-on-surface leading-tight">
              &quot;Brand communication should not feel like advertising. It should feel like a story worth watching.&quot;
            </blockquote>
          </div>
        </section>
      </FadeIn>

      {/* § 0.6 — Contact Teaser */}
      <FadeIn>
        <section className="w-full py-section-mobile md:py-section-desktop border-t border-border-subtle bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center justify-center gap-8">
            <h2 className="font-display text-display-mobile md:text-display text-on-surface">
              Let&apos;s Work Together
            </h2>
            <Link 
              href="mailto:hello@shubhammahajan.com"
              className="font-label-caps text-label-caps text-tertiary border-b border-tertiary pb-1 hover:text-on-surface hover:border-on-surface transition-colors duration-300"
            >
              hello@shubhammahajan.com
            </Link>
          </div>
        </section>
      </FadeIn>

    </div>
  )
}
