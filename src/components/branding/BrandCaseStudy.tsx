"use client"

import { FadeIn } from '@/components/ui/FadeIn'

export function BrandCaseStudy() {
  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-mobile md:py-section-desktop">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
        
        {/* Left Column: Headline */}
        <div className="md:col-span-4 flex flex-col gap-4 mb-8 md:mb-0">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            From Content to Commerce
          </h2>
          <div className="w-12 h-1 bg-tertiary mt-2" />
        </div>

        {/* Right Column: Strategic Narrative & Dual Brand Showcase */}
        <div className="md:col-span-8 flex flex-col gap-12">
          
          <FadeIn>
            <div className="font-body text-body text-on-surface-variant flex flex-col gap-6 text-base md:text-lg leading-relaxed">
              <p>
                As Associate Director of the GlobalBees creative team, Shubham Mahajan led creative strategy, production, and studio operations across two key portfolio brands: UrbanGabru (Men’s Grooming) and UrbanYog (Women’s Personal Care). Leading a multidisciplinary 7-person team across ideation, scripting, production, post-production, and distribution, he built and executed content systems that scaled the brands’ digital presence, from short-form retention-led formats to multi-million-view celebrity commercials.
              </p>
              <p>
                Alongside creative execution, he managed the operational and performance layer of the studio, developing KPI frameworks, Q4 and forecasting reports, production insights, performance reviews, and resource planning to regulate team output and align creative production with business goals. Shubham also collaborated with the product design and marketing teams on discount strategies, packaging and label design, offline campaigns, and in-store retail displays and stands, extending the creative function beyond digital into the physical brand experience. He oversaw studio management, workflows, production pipelines, and cross-functional coordination, helping scale the YouTube channel from zero to 500K+ subscribers within 6–8 months while maintaining a data-led approach to creative decision-making.
              </p>
            </div>
          </FadeIn>

          {/* Dual Brand Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: UrbanGabru */}
            <FadeIn delay={0.1}>
              <div className="p-8 bg-surface-container-low border border-border-subtle flex flex-col justify-between h-full hover:border-tertiary/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary">
                      UrbanGabru
                    </span>
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
                      Men&apos;s Care
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3">Associate Director</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Directed national commercial campaigns featuring Indian cricketer <strong className="text-on-surface">Suryakumar Yadav</strong>, created high-converting performance ads driving <strong className="text-on-surface">₹86 Crore in campaign revenue</strong>, and spearheaded viral lifestyle content.
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle/50 flex items-center justify-between text-xs text-text-secondary">
                  <span>Core Metrics: 900M+ Impressions</span>
                  <span className="text-tertiary">4.6x ROAS</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: UrbanYog */}
            <FadeIn delay={0.2}>
              <div className="p-8 bg-surface-container-low border border-border-subtle flex flex-col justify-between h-full hover:border-tertiary/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary">
                      UrbanYog
                    </span>
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
                      Women&apos;s Wellness
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3">Associate Director</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Crafted narrative-first empowerment campaigns tackling personal care taboos with sensitivity and cinematic nuance, building authentic community trust and strong social-first engagement.
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle/50 flex items-center justify-between text-xs text-text-secondary">
                  <span>Format: Narrative & Brand Films</span>
                  <span className="text-tertiary">D2C Community</span>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  )
}
