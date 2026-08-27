"use client"

import { useState } from 'react'
import Image from 'next/image'
import { VideoModal } from '@/components/branding/VideoModal'

const shortFilms = [
  {
    id: 'your_closet',
    videoId: 'r8-QtSf7MvA',
    title: 'Your Closet',
    year: '2023',
    location: 'London, UK',
    role: 'Associate Director · Production Designer · Sound Designer',
    image: '/images/films/poster-your-closet.png',
    synopsis: 'A melancholic family drama set in the UK, Your Closet revolves around an old cupboard that a mother has carefully preserved as a vault of family memories. When the youngest daughter insists that the worn-out cupboard must finally go, a seemingly ordinary decision begins to uncover emotions, secrets, and memories long buried within the family.',
    link: 'https://youtu.be/r8-QtSf7MvA?si=RYa39q6fRVVcILp9',
  },
  {
    id: 'vikram',
    videoId: 'qbziKZK9g6Y',
    title: 'VIKRAM',
    year: '2022',
    location: 'London, UK',
    role: 'Script Supervisor · Production Designer',
    image: '/images/films/vikram.jpg',
    synopsis: 'A young boy finds himself caught between his own beliefs and a religious tradition being imposed upon him. As his resistance grows into anger and rebellion, tensions within the family escalate, turning a personal struggle into a deep conflict that challenges faith, tradition, and the bonds of family.',
    link: 'https://youtu.be/qbziKZK9g6Y?feature=shared',
  },
  {
    id: 'beyond_broken_threads',
    videoId: 'Fy77JET8hZE',
    title: 'Beyond Broken Threads',
    year: '2022',
    location: 'London, UK',
    role: 'Art Director · Production Designer',
    image: '/images/films/beyond_broken_threads.jpg',
    synopsis: 'A grieving widower discovers an old suit that carries the memories of the partner he has lost. As he revisits the moments woven into its fabric, he is forced to confront his grief and the life he left behind. What begins as a journey through memory becomes a struggle between holding on and letting go.',
    link: 'https://youtu.be/Fy77JET8hZE?feature=shared',
  }
]

export function ShortFilmsGrid() {
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null)
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; title: string; role: string } | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {shortFilms.map((film) => {
          const isActive = activeFilmId === film.id

          return (
            <div 
              key={film.id}
              className="group relative aspect-[2/3] border border-border-subtle hover:border-tertiary/80 transition-colors overflow-hidden cursor-pointer bg-background"
              onClick={() => setActiveFilmId(isActive ? null : film.id)}
            >
              <Image 
                src={film.image} 
                alt={film.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover object-center transition-transform duration-700 md:group-hover:scale-105 ${isActive ? 'scale-105' : ''}`} 
              />

              {/* Mobile Tap Indicator when inactive */}
              {!isActive && (
                <div className="md:hidden absolute top-3 right-3 z-10 font-label-caps text-[9px] uppercase tracking-widest bg-background/90 px-2.5 py-1 border border-border-subtle text-[#E5C992] pointer-events-none backdrop-blur-sm">
                  Tap to view
                </div>
              )}

              {/* Overlay on hover / tap */}
              <div 
                className={`absolute inset-0 bg-background/95 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 border-t-2 border-transparent md:group-hover:border-tertiary ${isActive ? 'opacity-100 border-tertiary' : 'opacity-0'} md:group-hover:opacity-100 overflow-y-auto custom-scrollbar`}
              >
                <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary mb-1">
                  {film.location} &middot; {film.year}
                </span>
                <h4 className="font-display-mobile text-2xl sm:text-display-mobile text-on-surface mb-2">{film.title}</h4>
                <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-tertiary mb-4 md:mb-6 pb-3 md:pb-4 border-b border-border-subtle">{film.role}</p>
                
                <div className={`flex flex-col gap-4 sm:gap-6 transform transition-all duration-500 delay-75 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                  <p className="font-body text-body text-on-surface-variant text-xs md:text-sm leading-relaxed">
                    {film.synopsis}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveVideo({ videoId: film.videoId, title: film.title, role: film.role })
                      }}
                      className="inline-flex items-center gap-2 font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-tertiary hover:text-on-surface transition-colors group/btn"
                    >
                      Watch Trailer
                      <span className="transform transition-transform group-hover/btn:translate-x-1">▶</span>
                    </button>
                    <a
                      href={film.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary hover:text-on-surface transition-colors"
                    >
                      YouTube ↗
                    </a>
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
