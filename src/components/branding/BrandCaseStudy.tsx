"use client"

import { FadeIn } from '@/components/ui/FadeIn'

export function BrandCaseStudy() {
  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-mobile md:py-section-desktop">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
        
        {/* Left Column: Marker & Headline */}
        <div className="md:col-span-4 flex flex-col gap-4 mb-8 md:mb-0">
          <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest border-b border-border-subtle pb-4 w-max">
            02 / Brand Leadership
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Associate Director &mdash; GlobalBees
          </h2>
          <p className="font-nav text-nav uppercase tracking-[0.12em] text-text-secondary">
            UrbanGabru & UrbanYog · Unicorn D2C Portfolio
          </p>
        </div>

        {/* Right Column: Strategic Narrative & Dual Brand Showcase */}
        <div className="md:col-span-8 flex flex-col gap-12">
          
          <FadeIn>
            <div className="font-body text-body text-on-surface-variant flex flex-col gap-6 text-base md:text-lg leading-relaxed">
              <p>
                As Associate Director at GlobalBees, I led brand creative strategy and production across two key portfolio brands—<span className="text-on-surface font-medium">UrbanGabru</span> (Men&apos;s Grooming) and <span className="text-on-surface font-medium">UrbanYog</span> (Women&apos;s Personal Care).
              </p>
              <p>
                Leading a multidisciplinary 7-person team across creative ideation, scriptwriting, video production, post-supervision, and distribution, I transformed the brands&apos; digital architecture. We scaled the YouTube channel from zero to <span className="text-on-surface font-medium">500K+ subscribers in just 6–8 months</span>, architecting everything from short-form retention hooks to multi-million view celebrity commercials.
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
                      Flagship Brand
                    </span>
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
                      Men&apos;s Care
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3">UrbanGabru</h3>
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
                      Category Innovation
                    </span>
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
                      Women&apos;s Wellness
                    </span>
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-3">UrbanYog</h3>
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

          {/* Action Links */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="https://www.youtube.com/playlist?list=PLE-OX6F6FSWkaqhLJlFybfIPTNIrbXAwh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav text-nav uppercase text-tertiary hover:text-on-surface transition-colors flex items-center gap-2 border-b border-tertiary/30 hover:border-on-surface pb-1 w-fit"
              >
                Watch 45 Brand Campaign Films (YouTube) <span>→</span>
              </a>
            </div>
          </FadeIn>

          {/* Editorial Quote */}
          <FadeIn delay={0.4}>
            <blockquote className="font-pullquote text-pullquote text-on-surface pl-8 border-l border-tertiary/60 my-4 leading-tight">
              &quot;Brand communication should not feel like advertising. It should feel like a story worth watching.&quot;
            </blockquote>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
