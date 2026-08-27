"use client"

import { useState } from 'react'
import Image from 'next/image'
import { VideoModal } from '@/components/branding/VideoModal'

interface ExhibitionFilm {
  id: string
  videoId: string
  link: string
  title: string
  role: string
  paragraphs: string[]
  thumb: string
  thumbAlt: string
  bottomLabel: string
}

const exhibitionFilms: ExhibitionFilm[] = [
  {
    id: 'your_closet',
    videoId: 'r8-QtSf7MvA',
    link: 'https://youtu.be/r8-QtSf7MvA?si=RYa39q6fRVVcILp9',
    title: 'Your Closet',
    role: 'Associate Director · Production Designer · Sound Designer',
    paragraphs: [
      'A melancholic family drama set in the UK, Your Closet revolves around an old cupboard that a mother has carefully preserved as a vault of family memories. When the youngest daughter insists that the worn-out cupboard must finally go, a seemingly ordinary decision begins to uncover emotions, secrets, and memories long buried within the family.'
    ],
    thumb: '/images/films/your-closet-still.png',
    thumbAlt: 'Your Closet - BFI London Screening Film Still',
    bottomLabel: 'BFI London · Southbank Premiere'
  },
  {
    id: 'vikram',
    videoId: 'qbziKZK9g6Y',
    link: 'https://youtu.be/qbziKZK9g6Y?feature=shared',
    title: 'VIKRAM',
    role: 'Script Supervisor · Production Designer',
    paragraphs: [
      'A young boy finds himself caught between his personal conviction and a religious tradition being imposed upon him. As his internal resistance escalates into rebellion, family tensions intensify into a poignant struggle over faith, tradition, and the bonds of family.'
    ],
    thumb: '/images/films/vikram-trailer-thumb.jpg',
    thumbAlt: 'VIKRAM Short Film Still',
    bottomLabel: 'BFI London · Southbank Premiere'
  },
  {
    id: 'beyond_broken_threads',
    videoId: 'Fy77JET8hZE',
    link: 'https://youtu.be/Fy77JET8hZE?feature=shared',
    title: 'Beyond Broken Threads',
    role: 'Art Director · Production Designer',
    paragraphs: [
      'A grieving widower discovers an old suit carrying the tactile memories of his departed partner. As he revisits the poignant moments woven into its fabric, his journey becomes a bittersweet struggle between holding on and letting go.'
    ],
    thumb: '/images/films/beyond-broken-threads-thumb.jpg',
    thumbAlt: 'Beyond Broken Threads Film Still',
    bottomLabel: 'BFI London · Southbank Premiere'
  }
]

export function ExhibitionShowcase() {
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; title: string; role: string } | null>(null)

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {exhibitionFilms.map((film, index) => {
          // Alternating layout:
          // index 0 (1st) => Text LHS (col-span-5), Image RHS (col-span-7)
          // index 1 (2nd) => Image LHS (col-span-7), Text RHS (col-span-5)
          // index 2 (3rd) => Text LHS (col-span-5), Image RHS (col-span-7)
          const isImageOnLeft = index % 2 === 1

          return (
            <div 
              key={film.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-center border-b border-border-subtle/60 pb-16 md:pb-24 last:border-b-0 last:pb-0"
            >
              {/* TEXT COLUMN */}
              <div 
                className={`col-span-1 md:col-span-12 lg:col-span-5 mb-8 lg:mb-0 ${
                  isImageOnLeft ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
                }`}
              >
                <h3 className="font-display text-3xl sm:text-4xl md:text-display-mobile text-on-surface leading-tight mb-2">
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

                {/* Watch Trailer Action Link Row */}
                <div className="flex items-center gap-5 mt-6 pt-2">
                  <button
                    onClick={() => setActiveVideo({ videoId: film.videoId, title: film.title, role: film.role })}
                    className="inline-flex items-center gap-2 font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-tertiary hover:text-on-surface transition-colors group/btn cursor-pointer"
                  >
                    Watch Trailer
                    <span className="transform transition-transform group-hover/btn:translate-x-1">▶</span>
                  </button>
                  <a
                    href={film.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary hover:text-on-surface transition-colors"
                  >
                    YouTube ↗
                  </a>
                </div>
              </div>

              {/* IMAGE COLUMN */}
              <div 
                className={`col-span-1 md:col-span-12 lg:col-span-7 relative ${
                  isImageOnLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div 
                  className="aspect-video w-full bg-surface border border-border-subtle relative group overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo({ videoId: film.videoId, title: film.title, role: film.role })}
                >
                  <Image 
                    src={film.thumb} 
                    alt={film.thumbAlt} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                  {/* Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-14 h-14 bg-background/85 border border-tertiary flex items-center justify-center text-tertiary backdrop-blur-sm shadow-lg">
                      <span className="text-lg ml-0.5">▶</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface bg-background/80 px-3 py-1 border border-border-subtle backdrop-blur-sm">
                      {film.bottomLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Embedded Video Modal for Trailers */}
      <VideoModal
        isOpen={Boolean(activeVideo)}
        videoId={activeVideo?.videoId || null}
        title={activeVideo?.title}
        brand={activeVideo?.role}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}
