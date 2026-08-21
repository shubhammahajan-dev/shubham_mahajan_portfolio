"use client"

import { FadeIn } from '@/components/ui/FadeIn'

const principles = [
  {
    number: '01',
    title: 'Systems Thinking & Structural Logic',
    origin: 'Civil Engineering Discipline',
    description:
      'Applying the analytical rigor of engineering to production architecture. Every film set, multi-camera shoot, or high-budget campaign is approached with systematic planning, structural discipline, and resource optimization.',
  },
  {
    number: '02',
    title: 'Rhythm, Movement & Blocking',
    origin: 'Dance & Theatre Background',
    description:
      'Over a decade of national-level dance training and theatre experience informs a visceral understanding of physical staging, scene pacing, and actor kinetics—ensuring visual storytelling flows with natural rhythm.',
  },
  {
    number: '03',
    title: 'Discretion & Forbes-Standard Execution',
    origin: 'Central London Luxury Operations',
    description:
      'Managing A-list talent, international film junkets, and diplomatic guests to Forbes-level luxury and LQA hospitality standards—executing high-pressure operations with absolute confidentiality and poise.',
  },
  {
    number: '04',
    title: 'Human-Centred Observation',
    origin: 'Documentary & Narrative Cinema',
    description:
      'Grounded in the core philosophy to observe, anticipate, and capture authentic human moments without artificial staging—bringing emotional authenticity to both independent films and high-scale commercial campaigns.',
  },
]

const institutions = [
  { name: 'British Film Institute', label: 'Screened & Supported' },
  { name: 'BBC Documentaries', label: 'Production Contribution' },
  { name: 'UCA London', label: 'Master of Arts in Filmmaking' },
  { name: 'Forbes / LQA Standards', label: 'Luxury Hospitality Protocol' },
  { name: 'International Youth Fellowship', label: 'India Nominee (South Korea)' },
]

export function OperatingPrinciples() {
  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-section-desktop border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-tertiary mb-3 block">
                Methodology &amp; Core Principles
              </span>
              <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
                The Multidisciplinary Framework
              </h2>
            </div>
            <div className="text-on-surface-variant max-w-md text-sm md:text-base font-body">
              <p>
                How disparate disciplines—engineering, cinema, movement, and luxury operations—converge into a unified, high-precision creative practice.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle mb-20">
          {principles.map((p, idx) => (
            <FadeIn key={p.number} delay={idx * 0.08} className="bg-surface p-8 md:p-12 flex flex-col justify-between group hover:bg-surface-container transition-colors duration-500 min-h-[260px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-label-caps text-label-caps text-tertiary">
                    {p.number}
                  </span>
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">
                    {p.origin}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl md:text-[28px] text-on-surface mb-4 group-hover:text-tertiary transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="font-body text-body text-on-surface-variant text-sm md:text-base leading-relaxed mt-4">
                {p.description}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Institutional Affiliations Banner */}
        <FadeIn delay={0.3}>
          <div className="border-t border-border-subtle pt-12">
            <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary block mb-8 text-center md:text-left">
              Institutional Affiliations &amp; Recognitions
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {institutions.map((inst, i) => (
                <div key={i} className="flex flex-col gap-1 border-l border-border-subtle pl-4 py-1">
                  <span className="font-display text-lg text-on-surface leading-snug">
                    {inst.name}
                  </span>
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary">
                    {inst.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
