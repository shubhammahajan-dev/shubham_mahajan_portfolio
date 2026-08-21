"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { brandWorkItems, brandWorkCategories, BrandWorkItem } from '@/data/brandingWork'
import { VideoModal } from '@/components/branding/VideoModal'
import { FadeIn } from '@/components/ui/FadeIn'

export function BrandWorkGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedVideo, setSelectedVideo] = useState<BrandWorkItem | null>(null)
  const [activeTapId, setActiveTapId] = useState<string | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return brandWorkItems
    return brandWorkItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-section-desktop border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-tertiary mb-3 block">
                03 / Creative Works & Commercials
              </span>
              <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
                Selected Campaigns & Direction
              </h2>
            </div>

            <div className="text-on-surface-variant max-w-md text-sm md:text-base font-body">
              <p>
                A curated archive of commercial brand films, celebrity campaigns, and viral performance formats directed and strategized across D2C brands.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12 pb-6 border-b border-border-subtle">
            {brandWorkCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              const count = cat.id === 'all' 
                ? brandWorkItems.length 
                : brandWorkItems.filter((i) => i.category === cat.id).length

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-label-caps text-xs md:text-sm uppercase tracking-widest px-4 py-2.5 transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-surface-container text-on-surface border-tertiary'
                      : 'bg-transparent text-text-secondary border-border-subtle hover:text-on-surface hover:border-tertiary/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-tertiary/20 text-tertiary' : 'bg-surface text-text-secondary'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Grid of Work Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => {
            const isTapped = activeTapId === item.id

            return (
              <FadeIn key={item.id} delay={Math.min(idx * 0.05, 0.3)}>
                <div
                  className="group relative flex flex-col bg-surface border border-border-subtle hover:border-tertiary/60 transition-all duration-500 overflow-hidden cursor-pointer h-full"
                  onClick={() => {
                    setSelectedVideo(item)
                    setActiveTapId(item.id)
                  }}
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full aspect-video bg-surface-container-low overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isTapped ? 'scale-105' : ''
                      }`}
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                    {/* Top Tag Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      {item.tag && (
                        <span className="font-label-caps text-[9px] uppercase tracking-widest px-2 py-1 bg-background/80 backdrop-blur-sm text-tertiary border border-tertiary/30">
                          {item.tag}
                        </span>
                      )}
                      {item.year && (
                        <span className="font-label-caps text-[9px] uppercase tracking-widest px-2 py-1 bg-background/80 backdrop-blur-sm text-text-secondary">
                          {item.year}
                        </span>
                      )}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-[2px]">
                      <div className="w-14 h-14 rounded-full bg-tertiary/90 text-background flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile Tap Indicator */}
                    <div className="md:hidden absolute bottom-3 right-3 z-10">
                      <div className="w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-tertiary border border-border-subtle">
                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content Meta */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-surface">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary">
                          {item.brand}
                        </span>
                        {item.metrics && (
                          <span className="font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                            {item.metrics}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-lg md:text-xl text-on-surface group-hover:text-tertiary transition-colors duration-300 line-clamp-2 mb-3">
                        {item.title}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between mt-auto">
                      <span className="font-body text-xs text-on-surface-variant line-clamp-1">
                        {item.role}
                      </span>
                      <span className="font-nav text-[11px] text-tertiary uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Watch <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Global Playlist Direct Link */}
        <FadeIn>
          <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs md:text-sm text-text-secondary text-center sm:text-left">
              Showing 45 commercial works, campaigns, and formats produced and directed by Shubham Mahajan.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLE-OX6F6FSWkaqhLJlFybfIPTNIrbXAwh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nav text-xs uppercase tracking-widest text-tertiary hover:text-on-surface transition-colors flex items-center gap-2 border-b border-tertiary pb-1"
            >
              View Complete YouTube Playlist ({brandWorkItems.length} Videos) ↗
            </a>
          </div>
        </FadeIn>

      </div>

      {/* Lightbox Video Modal */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        videoId={selectedVideo?.videoId || null}
        title={selectedVideo?.title}
        brand={selectedVideo?.brand}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  )
}
