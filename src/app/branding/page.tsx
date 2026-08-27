import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { CampaignMetrics } from '@/components/branding/CampaignMetrics'
import { BrandCaseStudy } from '@/components/branding/BrandCaseStudy'
import { BrandWorkGrid } from '@/components/branding/BrandWorkGrid'
import { BrandBtsGrid } from '@/components/branding/BrandBtsGrid'
import { CreativePipelineTabs } from '@/components/branding/CreativePipelineTabs'

export default function BrandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      
      {/* ======================= HERO SECTION ======================= */}
      <section className="w-full relative h-screen flex items-end">
        <div className="absolute inset-0 z-0">
          {/* Desktop Landscape */}
          <Image 
            src="/images/branding/hero.png" 
            alt="Branding and Creative Strategy" 
            fill 
            sizes="100vw"
            className="object-cover object-center hidden md:block" 
            priority 
          />
          {/* Mobile Portrait */}
          <Image 
            src="/images/home/mobile/branding_mobile.JPG" 
            alt="Branding and Creative Strategy" 
            fill 
            sizes="100vw"
            className="object-cover object-center block md:hidden" 
            priority 
          />
        </div>
        
        {/* Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-20 pb-section-mobile md:pb-section-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            <div className="col-span-1 md:col-span-10 lg:col-span-8">
              <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight mix-blend-difference mb-4">
                Branding &amp; Marketing
              </h1>
              <p className="font-nav text-nav text-on-surface uppercase tracking-[0.12em] mix-blend-difference opacity-80 border-b border-border-subtle inline-block pb-2">
                Campaigns &middot; Business &middot; Entrepreneurship
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ======================= CAMPAIGN SCALE METRICS ======================= */}
      <CampaignMetrics />


      {/* ======================= BRAND LEADERSHIP (FROM CONTENT TO COMMERCE) ======================= */}
      <BrandCaseStudy />


      {/* ======================= CREATIVE WORKS & COMMERCIALS GRID ======================= */}
      <BrandWorkGrid />


      {/* ======================= CORE CAPABILITIES GRID ======================= */}
      <FadeIn>
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-mobile md:py-24 border-t border-border-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-8">
            <div className="lg:col-span-3 mb-6 lg:mb-0">
              <h3 className="font-headline-md text-2xl md:text-3xl text-on-surface mb-2">
                Core Capabilities
              </h3>
              <div className="w-8 h-[1px] bg-tertiary mt-4 mb-4" />
              <p className="font-body text-xs md:text-sm text-text-secondary leading-relaxed max-w-xs">
                Comprehensive brand and content strategy from high-concept ideation to high-converting production.
              </p>
            </div>
            
            <div className="lg:col-span-9">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-border-subtle">
                {[
                  'Brand strategy', 'Creative strategy', 'Content strategy', 'Campaign ideation',
                  'Social media strategy', 'Video production', 'Performance creative', 'YouTube growth',
                  'Audience development', 'Creative team leadership', 'Founder-led content', 'Campaign execution',
                  'Storytelling & retention strategy'
                ].map((cap, i) => (
                  <div 
                    key={i} 
                    className="p-5 sm:p-6 md:p-8 border-b border-r border-border-subtle bg-surface hover:bg-surface-container transition-colors duration-300 flex items-center group relative"
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    <p className="font-label-caps text-[11px] md:text-label-caps uppercase tracking-[0.12em] text-on-surface leading-snug">
                      {cap}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= CREATIVE PIPELINE (METHODOLOGY TABS) ======================= */}
      <FadeIn>
        <CreativePipelineTabs />
      </FadeIn>


      {/* ======================= BEHIND THE SCENES (BTS COLLAGE) ======================= */}
      <BrandBtsGrid />


      {/* ======================= CTA SECTION ======================= */}
      <FadeIn>
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-mobile md:py-section-desktop border-t border-border-subtle text-center flex flex-col items-center justify-center gap-8">
          <h2 className="font-display text-display-mobile md:text-display text-on-surface">
            Let&apos;s Build a Campaign
          </h2>
          <p className="font-body text-body text-on-surface-variant max-w-reading-max">
            Looking for creative direction, campaign strategy, or high-conversion commercial production?
          </p>
          <Link
            href="/contact"
            className="font-label-caps text-label-caps text-tertiary border-b border-tertiary pb-1 hover:text-on-surface hover:border-on-surface transition-colors duration-300"
          >
            Start a Conversation &rarr;
          </Link>
        </section>
      </FadeIn>

    </div>
  )
}
