'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroSlide {
  id: string
  tag: string
  title: string
  impact: string
  description: string
  ctaText: string
  href: string
  image: string
  imageAlt: string
}

const slides: HeroSlide[] = [
  {
    id: 'films',
    tag: '01 / CINEMATIC NARRATIVES',
    title: 'Films & Direction',
    impact: 'BFI London Screening · Directorial & Production Design Leadership',
    description: 'Directorial leadership, world-building production design, and nuanced soundscapes for award-winning narrative short films.',
    ctaText: 'Explore Films',
    href: '/films',
    image: '/images/films/hero.png',
    imageAlt: 'Cinematic film camera production set'
  },
  {
    id: 'branding',
    tag: '02 / STRATEGY & IMPACT',
    title: 'Branding & Campaigns',
    impact: '900M+ Organic Views · 45+ High-Conversion Commercials',
    description: 'Translating cultural tension and audience psychology into high-retention commercial campaigns for GlobalBees and premier D2C brands.',
    ctaText: 'View Brand Work',
    href: '/branding',
    image: '/images/branding/hero.png',
    imageAlt: 'High-end studio commercial production'
  },
  {
    id: 'events',
    tag: '03 / LIVE ORCHESTRATION',
    title: 'Events & Press Junkets',
    impact: 'Global Theatrical Premieres · Hollywood Talent Orchestration',
    description: 'High-stakes production, luxury hospitality, and press junket orchestration for global theatrical releases and top-tier talent.',
    ctaText: 'Discover Events',
    href: '/events',
    image: '/images/events/hero.png',
    imageAlt: 'Theatrical red carpet and press junket orchestration'
  },
  {
    id: 'documentary',
    tag: '04 / DOCUMENTARIES',
    title: 'Documentaries',
    impact: 'BBC Doc HeART · Goa Sunsplash · Independent Subcultures',
    description: 'Immersive non-fiction storytelling capturing grassroots music movements, subcultures, and raw human narratives with visceral truth.',
    ctaText: 'Explore Documentaries',
    href: '/documentary',
    image: '/images/documentary/hero.png',
    imageAlt: 'Documentary filmmaking and cultural movement cinematography'
  },
  {
    id: 'record',
    tag: '05 / CREDENTIALS & METHOD',
    title: 'The Record & Practice',
    impact: 'UCA London Postgraduate · Endorsements by Vishal Bhardwaj & Hansal Mehta',
    description: 'A structural engineering foundation fused with cinema craft, postgraduate training in London, and formal industry recognition.',
    ctaText: 'View The Record',
    href: '/acknowledgments',
    image: '/images/home/hero-landscape.jpg',
    imageAlt: 'Shubham Mahajan - Filmmaker & Creative Strategist'
  }
]

const SLIDE_DURATION = 4000 // 4 seconds per slide

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const goToSlide = useCallback((newIndex: number, newDirection?: number) => {
    const dir = newDirection ?? (newIndex > currentIndex ? 1 : -1)
    setDirection(dir)
    setCurrentIndex(newIndex)
    setProgress(0)
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    const nextIdx = (currentIndex + 1) % slides.length
    goToSlide(nextIdx, 1)
  }, [currentIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const prevIdx = (currentIndex - 1 + slides.length) % slides.length
    goToSlide(prevIdx, -1)
  }, [currentIndex, goToSlide])

  // Automatic progression timer
  useEffect(() => {
    if (isPaused) return

    const interval = 50 // update progress every 50ms
    const step = (interval / SLIDE_DURATION) * 100

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + step
      })
    }, interval)

    return () => clearInterval(progressInterval)
  }, [isPaused, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }
    touchStartX.current = null
    setIsPaused(false)
  }

  const currentSlide = slides[currentIndex]

  // Snappy slide variants with enhanced cinematic Ken Burns zoom-out drift
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.12
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30, duration: 0.5 },
        opacity: { duration: 0.4 },
        scale: { duration: 4, ease: 'easeOut' as const }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-40%' : '40%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { duration: 0.4, ease: 'easeInOut' as const },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }
    })
  }

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.15, ease: 'easeOut' as const }
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
  }

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-background select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Portfolio Hero Showcase"
    >
      {/* Background Image Carousel with Parallax & Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Scrims: Top for Navbar, Bottom for Hero Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 w-full h-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col justify-end pb-24 md:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-3xl"
          >
            {/* Tag / Pillar Indicator */}
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-1.5 h-1.5 bg-tertiary rounded-none" />
              <span className="font-label-caps text-xs md:text-label-caps text-tertiary uppercase tracking-[0.15em] font-medium">
                {currentSlide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-on-surface leading-[1.08] tracking-tight mb-4">
              {currentSlide.title}
            </h1>

            {/* Impact Subtitle */}
            <p className="font-nav text-xs sm:text-sm md:text-nav uppercase tracking-[0.12em] text-[#E5C992] mb-4 md:mb-5 font-medium leading-relaxed">
              {currentSlide.impact}
            </p>

            {/* Description */}
            <p className="font-body text-sm sm:text-base md:text-body text-on-surface-variant max-w-2xl leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
              {currentSlide.description}
            </p>

            {/* Direct CTA Link */}
            <div className="flex items-center gap-6">
              <Link
                href={currentSlide.href}
                className="inline-flex items-center gap-3 px-6 py-3 bg-tertiary text-surface-container-lowest font-nav text-xs md:text-nav uppercase tracking-[0.12em] font-semibold hover:bg-[#E5C992] transition-colors duration-300 group"
              >
                <span>{currentSlide.ctaText}</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Lowkey Dotted Page Indicators & Arrow Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-30 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between pointer-events-none">
        
        {/* Minimalist Dotted Page Indicators */}
        <div className="flex items-center gap-3.5 pointer-events-auto">
          <div className="flex items-center gap-1.5">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  className="py-2.5 px-0.5 cursor-pointer flex items-center group"
                >
                  <div
                    className={`relative overflow-hidden transition-all duration-300 rounded-none ${
                      isActive 
                        ? 'w-5 sm:w-6 h-[2px] bg-white/15' 
                        : 'w-1.5 h-[2px] bg-white/25 group-hover:bg-white/50'
                    }`}
                  >
                    {/* Active progress fill */}
                    {isActive && (
                      <div 
                        className="absolute left-0 top-0 bottom-0 bg-tertiary transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <span className="font-label-caps text-[11px] text-text-secondary tracking-widest">
            0{currentIndex + 1}&nbsp;/&nbsp;0{slides.length}
          </span>
        </div>

        {/* Minimalist Arrow Navigation */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="text-text-secondary hover:text-on-surface transition-colors cursor-pointer text-sm font-label-caps uppercase tracking-widest flex items-center gap-1 group py-1"
          >
            <span className="transform transition-transform duration-300 group-hover:-translate-x-0.5">&larr;</span>
            <span className="hidden sm:inline text-xs">PREV</span>
          </button>
          
          <span className="text-border-subtle select-none">/</span>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="text-text-secondary hover:text-on-surface transition-colors cursor-pointer text-sm font-label-caps uppercase tracking-widest flex items-center gap-1 group py-1"
          >
            <span className="hidden sm:inline text-xs">NEXT</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  )
}
