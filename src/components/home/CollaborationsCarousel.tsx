'use client'

import React from 'react'

// Large, Bold Authentic Vector SVGs in theme gold (#C8A96E)
const row1Logos = [
  {
    name: 'Universal Pictures',
    svg: (
      <svg className="h-12 md:h-16 lg:h-18 w-auto fill-current overflow-visible" viewBox="0 0 200 48" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="100" 
          y="28" 
          textAnchor="middle" 
          fontFamily="'Times New Roman', Times, serif" 
          fontSize="24" 
          fontWeight="bold" 
          letterSpacing="4" 
          fill="currentColor"
        >
          UNIVERSAL
        </text>
        <text 
          x="100" 
          y="40" 
          textAnchor="middle" 
          fontFamily="'DM Sans', sans-serif" 
          fontSize="8" 
          fontWeight="600" 
          letterSpacing="6" 
          fill="currentColor" 
          opacity="0.85"
        >
          PICTURES
        </text>
      </svg>
    )
  },
  {
    name: 'Warner Bros.',
    svg: (
      <svg className="h-14 md:h-20 lg:h-22 w-auto fill-current overflow-visible" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2, 2)">
          <path d="M30 2 C44 2 54 6.5 54 6.5 C54 6.5 54 36 30 58 C6 36 6 6.5 6 6.5 C6 6.5 16 2 30 2 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M30 5 C42 5 50.5 8.5 50.5 8.5 C50.5 8.5 50.5 34 30 54 C9.5 34 9.5 8.5 9.5 8.5 C9.5 8.5 18 5 30 5 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
          <path d="M17 18 L22 42 L25.5 42 L29 27 L31 27 L34.5 42 L38 42 L43 18 L38.5 18 L36 34 L33 18 L27 18 L24 34 L21.5 18 Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
  {
    name: 'Netflix',
    svg: (
      <svg className="h-11 md:h-15 lg:h-17 w-auto fill-current overflow-visible" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="75" 
          y="31" 
          textAnchor="middle" 
          fontFamily="'Bebas Neue', 'Impact', 'Arial Black', sans-serif" 
          fontSize="38" 
          fontWeight="900" 
          letterSpacing="3" 
          fill="currentColor"
        >
          NETFLIX
        </text>
      </svg>
    )
  },
  {
    name: 'BFI',
    svg: (
      <svg className="h-12 md:h-16 lg:h-18 w-auto fill-current overflow-visible" viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="35" 
          y="37" 
          fontFamily="'DM Sans', 'Helvetica Neue', Arial, sans-serif" 
          fontSize="40" 
          fontWeight="900" 
          letterSpacing="-1" 
          fill="currentColor"
        >
          bfi
        </text>
        <circle cx="98" cy="26" r="6" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Paramount Pictures',
    svg: (
      <svg className="h-12 md:h-17 lg:h-19 w-auto fill-current overflow-visible" viewBox="0 0 190 48" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="95" 
          y="30" 
          textAnchor="middle" 
          fontFamily="'Brush Script MT', 'Palatino Linotype', 'Cormorant Garamond', Georgia, serif" 
          fontStyle="italic" 
          fontSize="34" 
          fontWeight="bold" 
          fill="currentColor"
        >
          Paramount
        </text>
        <text 
          x="95" 
          y="42" 
          textAnchor="middle" 
          fontFamily="'DM Sans', sans-serif" 
          fontSize="8" 
          letterSpacing="5" 
          fill="currentColor" 
          opacity="0.85"
        >
          PICTURES
        </text>
      </svg>
    )
  },
  {
    name: 'Sony Pictures',
    svg: (
      <svg className="h-11 md:h-15 lg:h-17 w-auto fill-current overflow-visible" viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="80" 
          y="26" 
          textAnchor="middle" 
          fontFamily="'Times New Roman', Times, serif" 
          fontSize="26" 
          fontWeight="bold" 
          letterSpacing="4" 
          fill="currentColor"
        >
          SONY
        </text>
        <text 
          x="80" 
          y="37" 
          textAnchor="middle" 
          fontFamily="'DM Sans', sans-serif" 
          fontSize="7.5" 
          fontWeight="600" 
          letterSpacing="4" 
          fill="currentColor" 
          opacity="0.8"
        >
          PICTURES
        </text>
      </svg>
    )
  }
]

const row2Logos = [
  {
    name: 'OpenAI',
    svg: (
      <svg className="h-11 md:h-15 lg:h-17 w-auto fill-current overflow-visible" viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(8, 6) scale(0.68)">
          <path d="M43.3 20a11.5 11.5 0 0 0-.9-8.4 11.7 11.7 0 0 0-9.8-6.1 11.6 11.6 0 0 0-7.3 2.6 11.6 11.6 0 0 0-14 2.1 11.6 11.6 0 0 0-3.4 10.4 11.7 11.7 0 0 0-6.4 7.2 11.5 11.5 0 0 0 1.2 11.1 11.7 11.7 0 0 0 9.8 6.1 11.6 11.6 0 0 0 7.3-2.6 11.6 11.6 0 0 0 14-2.1 11.6 11.6 0 0 0 3.4-10.4 11.7 11.7 0 0 0 6.4-7.2c.2-.9.2-1.8-.3-2.7z" fill="none" stroke="currentColor" strokeWidth="3" />
        </g>
        <text 
          x="66" 
          y="29" 
          fontFamily="'DM Sans', sans-serif" 
          fontSize="24" 
          fontWeight="700" 
          letterSpacing="1" 
          fill="currentColor"
        >
          OpenAI
        </text>
      </svg>
    )
  },
  {
    name: 'BBC',
    svg: (
      <svg className="h-10 md:h-14 lg:h-16 w-auto fill-current overflow-visible" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 4)">
          <rect x="0" y="0" width="32" height="32" fill="currentColor" />
          <text x="16" y="24" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="21" fontWeight="900" fill="#111010">B</text>
          <rect x="38" y="0" width="32" height="32" fill="currentColor" />
          <text x="54" y="24" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="21" fontWeight="900" fill="#111010">B</text>
          <rect x="76" y="0" width="32" height="32" fill="currentColor" />
          <text x="92" y="24" textAnchor="middle" fontFamily="'DM Sans', Arial, sans-serif" fontSize="21" fontWeight="900" fill="#111010">C</text>
        </g>
      </svg>
    )
  },
  {
    name: 'Formula 1',
    svg: (
      <svg className="h-10 md:h-14 lg:h-16 w-auto fill-current overflow-visible" viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(6, 4)">
          <path d="M6 30 L22 6 H38 L22 30 Z" fill="currentColor" />
          <path d="M34 6 L26 16 H37 L44 6 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M42 6 L30 30 H40 L52 6 Z" fill="currentColor" opacity="0.65" />
          <text x="58" y="27" fontFamily="'DM Sans', sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" letterSpacing="1" fill="currentColor">F1</text>
        </g>
      </svg>
    )
  },
  {
    name: 'FIFA',
    svg: (
      <svg className="h-11 md:h-15 lg:h-17 w-auto fill-current overflow-visible" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="60" 
          y="30" 
          textAnchor="middle" 
          fontFamily="'Arial Black', 'Impact', sans-serif" 
          fontSize="30" 
          fontWeight="900" 
          fontStyle="italic" 
          letterSpacing="3" 
          fill="currentColor"
        >
          FIFA
        </text>
      </svg>
    )
  },
  {
    name: 'Forbes',
    svg: (
      <svg className="h-11 md:h-16 lg:h-18 w-auto fill-current overflow-visible" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="70" 
          y="29" 
          textAnchor="middle" 
          fontFamily="'Times New Roman', 'Cormorant Garamond', Georgia, serif" 
          fontSize="34" 
          fontWeight="bold" 
          letterSpacing="1" 
          fill="currentColor"
        >
          Forbes
        </text>
      </svg>
    )
  },
  {
    name: 'Liverpool FC',
    svg: (
      <svg className="h-12 md:h-17 lg:h-19 w-auto fill-current overflow-visible" viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 4)">
          <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="18" y="23" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="bold" fill="currentColor">LFC</text>
          <text x="44" y="18" fontFamily="'Times New Roman', serif" fontSize="15" fontWeight="bold" letterSpacing="1" fill="currentColor">LIVERPOOL</text>
          <text x="45" y="28" fontFamily="'DM Sans', sans-serif" fontSize="8" letterSpacing="2.5" fill="currentColor" opacity="0.8">FOOTBALL CLUB</text>
        </g>
      </svg>
    )
  },
  {
    name: 'UCA London',
    svg: (
      <svg className="h-11 md:h-15 lg:h-17 w-auto fill-current overflow-visible" viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 4)">
          <text x="0" y="26" fontFamily="'DM Sans', sans-serif" fontSize="26" fontWeight="900" letterSpacing="1" fill="currentColor">UCA</text>
          <text x="66" y="16" fontFamily="'DM Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="1" fill="currentColor">UNIVERSITY FOR THE</text>
          <text x="66" y="26" fontFamily="'DM Sans', sans-serif" fontSize="8" fontWeight="600" letterSpacing="1" fill="currentColor">CREATIVE ARTS</text>
        </g>
      </svg>
    )
  }
]

export function CollaborationsCarousel() {
  const duplicatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos]
  const duplicatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos]

  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-24 border-y border-border-subtle overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center">
        <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block mb-3">
          Selected Collaborations
        </span>
        <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
          Entertainment, Sport &amp; Institutions
        </h2>
      </div>

      {/* Row 1: Entertainment Golden Logos */}
      <div className="relative w-full overflow-hidden py-8 border-y border-border-subtle bg-surface/40 select-none">
        <div 
          className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '32s' }}
        >
          {duplicatedRow1.map((item, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex items-center mx-6 sm:mx-8 md:mx-10 group cursor-default text-[#C8A96E] hover:text-[#E5C992] transition-all duration-300 transform hover:scale-108"
              title={item.name}
            >
              <div className="flex items-center justify-center filter drop-shadow-[0_0_16px_rgba(200,169,110,0.25)]">
                {item.svg}
              </div>
              <span className="ml-6 sm:ml-8 md:ml-10 text-[#C8A96E]/30 font-serif text-base">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sport & Institutional Golden Logos (Reverse Scroll) */}
      <div className="relative w-full overflow-hidden py-8 border-b border-border-subtle bg-surface-container-low/20 select-none mt-3">
        <div 
          className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]"
          style={{ 
            animationDuration: '36s',
            animationDirection: 'reverse'
          }}
        >
          {duplicatedRow2.map((item, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex items-center mx-6 sm:mx-8 md:mx-10 group cursor-default text-[#C8A96E] hover:text-[#E5C992] transition-all duration-300 transform hover:scale-108"
              title={item.name}
            >
              <div className="flex items-center justify-center filter drop-shadow-[0_0_16px_rgba(200,169,110,0.25)]">
                {item.svg}
              </div>
              <span className="ml-6 sm:ml-8 md:ml-10 text-[#C8A96E]/30 font-serif text-base">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
