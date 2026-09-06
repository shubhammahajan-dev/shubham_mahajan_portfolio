"use client"

import { useState } from 'react'
import { FadeIn } from '@/components/ui/FadeIn'
import { Container } from '@/components/layout/Container'

const engagementScopes = [
  {
    scope: 'Scope 01',
    title: 'Cinema & Narrative Films',
    paragraphs: [
      'From the first spark of an idea to the final frame, Shubham Mahajan brings together research, creative development, crew, production design, technical planning, and post-production to turn ambitious ideas into cinematic reality. From concept to crew line-up, set to screen, and rough cut to final master, every moving part is designed to serve the story.',
      'From visionary concept to screen, Shubham orchestrates the creative world, the crew, and the production machinery to realize the film.'
    ],
    tags: 'Shorts \u00b7 Features \u00b7 Festivals'
  },
  {
    scope: 'Scope 02',
    title: 'Brand Strategy & Commercials',
    paragraphs: [
      'Every brand has a distinct audience, ambition, and reason to exist. Shubham starts with research—understanding consumers, culture, competition, and buying motivations. From there, he crafts tailored campaigns, founder stories, commercials, and content ecosystems designed to convert attention into intent. Strategy, storytelling, production, and distribution function as a unified system, building campaigns that generate authentic brand desire.'
    ],
    tags: 'D2C \u00b7 B2B \u00b7 B2C'
  },
  {
    scope: 'Scope 03',
    title: 'Events & International Junkets',
    paragraphs: [
      'High-profile events are remembered for the experience, not the logistics behind them. Shubham handles the critical details that make complex productions look effortless—from international travel, talent movement, rehearsals, technical riders, and production calls to VIP coordination and live stakeholder management.',
      'Every call, transit, camera, room, and rehearsal has a dedicated place, ensuring flawless execution so guests and talent experience nothing short of extraordinary.'
    ],
    tags: 'Culture \u00b7 Luxury \u00b7 Experiences'
  },
  {
    scope: 'Scope 04',
    title: 'Music, Theatre & Performance',
    paragraphs: [
      'Performance is rhythm, movement, and emotion. Drawing on over a decade of dance and theatre training, Shubham Mahajan brings a refined sense of musicality and spatial staging to musicals, music videos, live performances, and movement-led films. He translates rhythm into camera movement, spatial blocking, choreography, and narrative tension—creating work that doesn’t just capture performance, but moves with it.'
    ],
    tags: 'Music \u00b7 Performance \u00b7 Lifestyle'
  }
]

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'spmahajan229@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="flex flex-col min-h-screen text-on-surface">

      {/* ======================= § 6.1 — HERO ======================= */}
      <section className="w-full min-h-[50vh] flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 pt-36 md:pt-44 border-b border-border-subtle bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-label-caps text-xs uppercase tracking-[0.15em] text-tertiary">
              Available for Worldwide Directorial &amp; Production Engagements
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] text-on-surface uppercase tracking-tight mb-4">
            Let&apos;s Build Together
          </h1>
          <div className="w-12 h-1 bg-tertiary mb-6" />
          <p className="font-body text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
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
                className="px-4 py-2 border border-border-subtle hover:border-tertiary bg-surface-container-low text-xs font-label-caps uppercase tracking-widest text-text-secondary hover:text-on-surface transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer"
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


      {/* ======================= § 6.3 — ENGAGEMENT SCOPE TILES (4 SCOPES) ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-lowest py-section-desktop border-b border-border-subtle">
          <Container>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-subtle">
              <div>
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                  Available Engagement Scopes
                </h2>
              </div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-text-secondary mt-2 md:mt-0">
                London &middot; Mumbai &middot; Global
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-border-subtle">
              {engagementScopes.map((item) => (
                <div
                  key={item.scope}
                  className="p-8 sm:p-10 border-b border-r border-border-subtle bg-surface hover:bg-surface-container-low transition-colors flex flex-col justify-between group relative"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div>
                    <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest block mb-4">
                      {item.scope}
                    </span>
                    <h3 className="font-display text-2xl md:text-[26px] text-on-surface mb-4 group-hover:text-tertiary transition-colors">
                      {item.title}
                    </h3>
                    <div className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6 flex flex-col gap-3">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border-subtle font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                    {item.tags}
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </section>
      </FadeIn>

    </div>
  )
}
