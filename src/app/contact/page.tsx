"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { Container } from '@/components/layout/Container'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'hello@shubhammahajan.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      
      {/* ======================= § 6.1 — HERO ======================= */}
      <section className="w-full min-h-[55vh] flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 pt-36 md:pt-44 border-b border-border-subtle bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-label-caps text-xs uppercase tracking-[0.15em] text-tertiary">
              Available for Worldwide Directorial &amp; Production Engagements
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-display text-on-surface tracking-tight max-w-4xl mb-6">
            Let&apos;s Build Together
          </h1>
          <div className="w-12 h-1 bg-tertiary mb-6" />
          <p className="font-body text-base md:text-body text-text-secondary max-w-2xl leading-relaxed">
            Whether you are commissioning a cinematic narrative, structuring a high-conversion brand campaign, or requiring on-ground leadership for international talent junkets and festivals.
          </p>
        </div>
      </section>


      {/* ======================= § 6.2 — DIRECT INQUIRY & EMAIL CARD ======================= */}
      <FadeIn>
        <section className="w-full bg-surface py-section-desktop border-b border-border-subtle">
          <Container className="flex flex-col items-center text-center">
            
            <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-tertiary mb-4 block">
              Direct Communication
            </span>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
              <a 
                href={`mailto:${email}`}
                className="group relative inline-block font-display text-2xl sm:text-4xl md:text-5xl text-on-surface hover:text-tertiary transition-colors duration-300 tracking-tight"
              >
                {email}
                <span className="hidden sm:block absolute left-0 bottom-0 w-0 h-[2px] bg-tertiary group-hover:w-full transition-all duration-500" />
              </a>

              <button
                onClick={handleCopy}
                className="px-4 py-2 border border-border-subtle hover:border-tertiary bg-surface-container-low text-xs font-label-caps uppercase tracking-widest text-text-secondary hover:text-on-surface transition-all duration-300 flex items-center gap-2 shrink-0"
              >
                <span>{copied ? '✓ Copied' : 'Copy Email'}</span>
              </button>
            </div>

            <p className="font-body text-sm text-text-secondary max-w-md mt-4 leading-relaxed">
              Inquiries are typically reviewed within 24 hours. Confidentiality and NDA protocols strictly honored for unreleased IP and talent projects.
            </p>

          </Container>
        </section>
      </FadeIn>


      {/* ======================= § 6.3 — ENGAGEMENT SCOPE TILES ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-lowest py-section-desktop border-b border-border-subtle">
          <Container>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-subtle">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block mb-2">
                  Engagement Framework
                </span>
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                  Available Engagement Scopes
                </h2>
              </div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-text-secondary">
                London &middot; Mumbai &middot; Global
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border-subtle">
              
              {/* Pillar 1 */}
              <div className="p-8 sm:p-10 border-b border-r border-border-subtle bg-surface hover:bg-surface-container-low transition-colors flex flex-col justify-between group relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div>
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block mb-4">
                    Scope 01
                  </span>
                  <h3 className="font-display text-2xl text-on-surface mb-3 group-hover:text-tertiary transition-colors">
                    Cinema &amp; Narrative Films
                  </h3>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Directorial leadership, associate direction, production design, acoustic sound design, and full post-production supervision.
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                  Shorts &middot; Features &middot; BFI Collaborations
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 sm:p-10 border-b border-r border-border-subtle bg-surface hover:bg-surface-container-low transition-colors flex flex-col justify-between group relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div>
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block mb-4">
                    Scope 02
                  </span>
                  <h3 className="font-display text-2xl text-on-surface mb-3 group-hover:text-tertiary transition-colors">
                    Brand Strategy &amp; Commercials
                  </h3>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    Founder-led narrative development, high-conversion commercial production, organic YouTube growth, and end-to-end creative pipeline.
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                  D2C &middot; Corporate &middot; Performance Ads
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 sm:p-10 border-b border-r border-border-subtle bg-surface hover:bg-surface-container-low transition-colors flex flex-col justify-between group relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div>
                  <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block mb-4">
                    Scope 03
                  </span>
                  <h3 className="font-display text-2xl text-on-surface mb-3 group-hover:text-tertiary transition-colors">
                    Events &amp; International Junkets
                  </h3>
                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                    High-stakes press junket execution, camera &amp; audio technical riders, VIP talent movement, and live multi-stakeholder operational management.
                  </p>
                </div>
                <div className="pt-4 border-t border-border-subtle font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                  Theatrical Premieres &middot; Global Talent &middot; Festivals
                </div>
              </div>

            </div>

          </Container>
        </section>
      </FadeIn>


      {/* ======================= § 6.4 — SOCIALS & BASE OF OPERATIONS ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop">
          <Container className="flex flex-col sm:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary mb-1">
                Base of Operations
              </span>
              <p className="font-nav text-sm uppercase tracking-wider text-on-surface">
                London (UK) &middot; Mumbai (India) &middot; Remote Worldwide
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
              {[
                { name: 'Instagram', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Vimeo', url: '#' },
                { name: 'IMDb', url: '#' },
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-label-caps text-xs text-text-secondary hover:text-tertiary transition-colors uppercase tracking-widest"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>

          </Container>
        </section>
      </FadeIn>

    </div>
  )
}
