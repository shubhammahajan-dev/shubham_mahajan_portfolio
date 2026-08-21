"use client"

import { useState } from 'react'
import Image from 'next/image'

interface TalentItem {
  name: string
  img: string
}

interface TalentCarouselProps {
  items: TalentItem[]
  direction?: 'left-to-right' | 'right-to-left'
}

export function TalentCarousel({ items, direction = 'left-to-right' }: TalentCarouselProps) {
  // Track active tapped item on mobile/touch
  const [activeTalent, setActiveTalent] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate items array so the marquee can loop seamlessly
  const duplicatedItems = [...items, ...items]

  // Calculate speed so all carousels move at the exact same physical pixels/sec
  // ~3.5 seconds per card guarantees consistent luxury pacing across 5, 9, or 20 cards
  const durationSeconds = Math.max(items.length * 3.5, 14)

  const handleCardClick = (name: string) => {
    setActiveTalent((prev) => (prev === name ? null : name))
  }

  const animationClass = direction === 'right-to-left' ? 'animate-marquee' : 'animate-marquee-reverse'

  return (
    <div 
      className="relative w-full overflow-hidden bg-surface-container py-4 mt-6 select-none"
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        // Resume after short delay unless active card is selected
        if (!activeTalent) {
          setTimeout(() => setIsPaused(false), 2000)
        }
      }}
    >
      <div 
        className={`flex w-max ${animationClass} hover:[animation-play-state:paused] ${
          isPaused || activeTalent ? '[animation-play-state:paused]' : ''
        }`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {duplicatedItems.map((talent, index) => {
          const isActive = activeTalent === talent.name

          return (
            <div 
              key={`${talent.name}-${index}`} 
              onClick={() => handleCardClick(talent.name)}
              className={`group relative h-[300px] w-[200px] md:h-[400px] md:w-[266px] lg:h-[450px] lg:w-[300px] shrink-0 overflow-hidden bg-surface-container mx-2 cursor-pointer transition-all duration-300 ${
                isActive ? 'ring-2 ring-tertiary scale-[1.02]' : ''
              }`}
            >
              <Image 
                src={talent.img} 
                alt={talent.name} 
                fill 
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 266px, 300px"
                className={`object-cover transition-all duration-500 ${
                  isActive 
                    ? 'scale-105 grayscale-0 mix-blend-normal' 
                    : 'grayscale md:group-hover:grayscale-0 mix-blend-luminosity md:group-hover:mix-blend-normal md:group-hover:scale-105'
                }`}
              />

              {/* Gradient & Name Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
                  isActive ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                }`}
              >
                <span className="font-label-caps text-[10px] text-tertiary uppercase tracking-widest mb-1 block">
                  Talent Managed
                </span>
                <span className="font-nav text-[14px] md:text-[15px] uppercase tracking-wider text-on-surface font-medium">
                  {talent.name}
                </span>
              </div>

              {/* Mobile tap indicator icon when active */}
              {isActive && (
                <div className="absolute top-3 right-3 z-10 md:hidden bg-background/80 backdrop-blur-sm p-1 border border-tertiary text-tertiary">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
