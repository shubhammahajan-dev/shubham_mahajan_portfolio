"use client"

import { useState } from 'react'
import Image from 'next/image'
import { VideoModal } from '@/components/branding/VideoModal'

interface ExhibitionFilm {
  id: string
  number: string
  badge: string
  title: string
  italicTitle?: string
  role: string
  paragraphs: string[]
  thumb: string
  thumbAlt: string
  bottomLabel: string
  videoId: string
  videoTitle: string
  videoRole: string
}

const exhibitionFilms: ExhibitionFilm[] = [
  {
    id: 'your_closet',
    number: '01',
    badge: '03 / Exhibition · 01',
    title: 'Selected Work Screened at BFI London',
    italicTitle: 'Your Closet',
    role: 'Associate Direction · Production Design · Sound Design',
    paragraphs: [
      'Selected work (Your Closet) was screened at the prestigious British Film Institute (BFI London) on Southbank—an institutional recognition of narrative ambition and technical craftsmanship.',
      'Co-produced during postgraduate studies at the University for the Creative Arts, London, the work represents a deep commitment to the cinematic medium, combining meticulous production design, nuanced sound design, and focused associate direction.'
    ],
    thumb: '/images/films/bfi-trailer-thumb.jpg',
    thumbAlt: 'Your Closet - BFI London Screening Trailer',
    bottomLabel: 'BFI London · Southbank Premiere',
    videoId: 'r8-QtSf7MvA',
    videoTitle: 'Your Closet — BFI London Screened Short Film',
    videoRole: 'Associate Direction · Production Design · Sound Design'
  },
  {
    id: 'vikram',
    number: '02',
    badge: '03 / Exhibition · 02',
    title: 'VIKRAM',
    italicTitle: 'Narrative Drama & Cultural Friction',
    role: 'Script Supervision · Production Design',
    paragraphs: [
      'A young boy finds himself caught between his personal conviction and a religious tradition being imposed upon him. As his internal resistance escalates into rebellion, family tensions intensify into a poignant struggle over faith and belonging.',
      'Serving as Script Supervisor and Production Designer in London, Shubham orchestrated visual continuity, authentic period set dress, and narrative rhythm for this tense coming-of-age drama.'
    ],
    thumb: '/images/films/vikram-trailer-thumb.jpg',
    thumbAlt: 'VIKRAM Short Film Trailer',
    bottomLabel: 'VIKRAM · London Short Film',
    videoId: 'qbziKZK9g6Y',
    videoTitle: 'VIKRAM — Narrative Short Film',
    videoRole: 'Script Supervision · Production Design'
  },
  {
    id: 'beyond_broken_threads',
    number: '03',
    badge: '03 / Exhibition · 03',
    title: 'Beyond Broken Threads',
    italicTitle: 'Tactile Memory & Grief',
    role: 'Art Direction · Production Design',
    paragraphs: [
      'A grieving widower discovers an old suit carrying the tactile memories of his departed partner. As he revisits the poignant moments woven into its fabric, his journey becomes a bittersweet struggle between holding on and letting go.',
      'Leading the Art Direction and Production Design, Shubham sculpted the emotional color palette, prop symbolism, and textural world that anchor the film’s atmospheric visual poetry.'
    ],
    thumb: '/images/films/beyond-broken-threads-thumb.jpg',
    thumbAlt: 'Beyond Broken Threads Trailer',
    bottomLabel: 'Beyond Broken Threads · UCA London',
    videoId: 'Fy77JET8hZE',
    videoTitle: 'Beyond Broken Threads — Narrative Short Film',
    videoRole: 'Art Direction · Production Design'
  }
]

export function ExhibitionShowcase() {
  const [activeModal, setActiveModal] = useState<ExhibitionFilm | null>(null)

  return (
    <div className="flex flex-col gap-16 md:gap-24 w-full">
      {exhibitionFilms.map((film, index) => {
        // Alternating logic:
        // index 0 (1st) => Text LHS (col-span-4), Video RHS (col-span-8)
        // index 1 (2nd) => Video LHS (col-span-8), Text RHS (col-span-4)
        // index 2 (3rd) => Text LHS (col-span-4), Video RHS (col-span-8)
        const isVideoOnLeft = index % 2 === 1

        return (
          <div 
            key={film.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-center border-b border-border-subtle/60 pb-16 md:pb-24 last:border-b-0 last:pb-0"
          >
            {/* TEXT COLUMN */}
            <div 
              className={`col-span-1 md:col-span-12 lg:col-span-4 mb-8 lg:mb-0 ${
                isVideoOnLeft ? 'lg:order-2 lg:col-start-9' : 'lg:order-1'
              }`}
            >
              <span className="font-nav text-label-caps uppercase tracking-[0.15em] text-tertiary mb-3 block">
                {film.badge}
              </span>
              
              <h3 className="font-display-mobile text-[32px] md:text-display-mobile text-on-surface leading-tight mb-2">
                {film.title}
              </h3>

              <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-[#E5C992] mb-6 font-medium">
                {film.role}
              </p>

              <div className="font-body text-body text-on-surface-variant flex flex-col gap-4 opacity-90 text-sm md:text-base leading-relaxed">
                {film.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center gap-4">
                <button
                  onClick={() => setActiveModal(film)}
                  className="inline-flex items-center gap-2 font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-tertiary hover:text-on-surface transition-colors"
                >
                  <span>Watch Trailer</span>
                  <span>▶</span>
                </button>
              </div>
            </div>

            {/* VIDEO COLUMN */}
            <div 
              className={`col-span-1 md:col-span-12 lg:col-span-8 relative ${
                isVideoOnLeft ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <div 
                onClick={() => setActiveModal(film)}
                className="aspect-video w-full bg-surface border border-border-subtle relative group cursor-pointer overflow-hidden"
              >
                <Image 
                  src={film.thumb} 
                  alt={film.thumbAlt} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover:bg-background/10 transition-colors duration-500">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-on-surface flex items-center justify-center group-hover:border-tertiary group-hover:scale-110 transition-all duration-300 backdrop-blur-md bg-background/50 text-on-surface group-hover:text-tertiary">
                    <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface">
                    {film.bottomLabel}
                  </span>
                  <span className="font-nav text-[11px] uppercase tracking-widest text-tertiary">
                    Watch Trailer ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Lightbox Video Modal */}
      <VideoModal
        isOpen={Boolean(activeModal)}
        videoId={activeModal?.videoId || null}
        title={activeModal?.videoTitle}
        brand={activeModal?.videoRole}
        onClose={() => setActiveModal(null)}
      />
    </div>
  )
}
