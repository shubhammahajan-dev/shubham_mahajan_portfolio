import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { VideoEmbed } from '@/components/ui/VideoEmbed'

export default function DocumentaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ======================= HERO SECTION ======================= */}
      <section className="relative w-full h-[100dvh] flex items-end pb-section-desktop overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/documentary/hero.png" 
            alt="Documentary Storytelling" 
            fill 
            sizes="100vw"
            className="object-cover object-center" 
            priority 
          />
        </div>
        
        {/* Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent z-0" />
        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl">
            <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-tertiary mb-4 md:mb-6 font-medium">
              Documentary Production · Cultural Observation · Unscripted Storytelling
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display text-on-surface leading-[1.08] tracking-tight mb-6">
              Observational cinema rooted in human truth.
            </h1>
            <p className="font-body text-sm sm:text-base md:text-body text-on-surface-variant max-w-reading-max opacity-90">
              Documentary and non-fiction projects across institutional, cultural and music environments.
            </p>
          </div>
        </div>
      </section>


      {/* ======================= PRACTICE INTRODUCTION ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-4 mb-6 lg:mb-0">
                <span className="font-label-caps text-label-caps text-text-secondary uppercase tracking-[0.15em] mb-4 block">01 / Overview</span>
                <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">The Observational Method</h2>
              </div>
              <div className="lg:col-span-8 lg:col-start-5 max-w-reading-max font-body text-body text-text-secondary flex flex-col gap-6">
                <p className="leading-relaxed">
                  Documentary filmmaking requires a different kind of discipline. It demands patience, acute observation, and the ability to find narrative structure within unscripted reality.
                </p>
                <p className="leading-relaxed">
                  My documentary work spans institutional productions for the BBC, large-scale music and cultural festival documentaries, and independent observational projects. Across all of them, the approach remains consistent: enter the environment with sensitivity, build trust with subjects, and let the truth of the situation guide the lens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= CASE STUDY 01: BBC DOCUMENTARY (HeART) ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-low py-section-desktop border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center mb-intra-section">
              
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 mb-8 lg:mb-0">
                <div className="border-b border-border-subtle pb-6">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-3 block">Case Study 01</span>
                  <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface leading-tight">HeART &mdash; BBC Documentary</h2>
                </div>
                <p className="font-body text-sm sm:text-body text-text-secondary leading-relaxed">
                  HeART follows a UK based award winning professor who, after surviving multiple heart attacks, chose to document his journey through sketches. Rather than surrendering to grief or fear, he transformed his experiences into art, capturing the moments, emotions and realities of life after trauma.
                </p>
                <div className="flex flex-col gap-2 border-l border-tertiary pl-4">
                  <span className="font-label-caps text-label-caps text-on-surface">Role &mdash; Production Manager</span>
                  <span className="font-label-caps text-label-caps text-text-secondary">Network &mdash; BBC</span>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-video border border-border-subtle p-2">
                <div className="w-full h-full border border-border-subtle overflow-hidden relative">
                  <Image 
                    src="/images/documentary/heART.jpeg" 
                    alt="HeART Documentary Still" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-all duration-700 ease-in-out hover:scale-105" 
                  />
                </div>
              </div>

            </div>

            <div className="w-full mt-12 md:mt-16 flex flex-col gap-4">
              <h3 className="font-label-caps text-label-caps text-text-secondary uppercase tracking-[0.15em] border-b border-border-subtle pb-2">
                Documentary Production Reel
              </h3>
              <VideoEmbed 
                thumbnailSrc="/images/documentary/bbc-reel-thumb.jpg" 
                label="BBC Production Reel" 
                videoUrl="https://youtube.com/shorts/xD2TU89cu5s?si=Wp3nQW-zVq7701Lz"
              />
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= CASE STUDY 02: GOA SUNSPLASH ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center mb-intra-section">
              
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 mb-8 lg:mb-0">
                <div className="border-b border-border-subtle pb-6">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-3 block">Case Study 02</span>
                  <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface leading-tight">Goa Sunsplash</h2>
                </div>
                <p className="font-body text-sm sm:text-body text-text-secondary leading-relaxed">
                  Goa Sunsplash is an international reggae festival in Goa, India. As South Asia&apos;s premier sound system gathering, Sunsplash consolidates musicians, artists and audience culture into a united movement celebrating peace, unity and consciousness through reggae music.
                </p>
                <div className="flex flex-col gap-2 border-l border-tertiary pl-4">
                  <span className="font-label-caps text-label-caps text-on-surface">Role &mdash; Editor</span>
                  <span className="font-label-caps text-label-caps text-text-secondary">Category &mdash; Cultural Documentary &amp; Music Festival</span>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-video border border-border-subtle p-2">
                <div className="w-full h-full border border-border-subtle overflow-hidden relative">
                  <Image 
                    src="/images/documentary/goa-sunsplash-01.jpg" 
                    alt="Goa Sunsplash" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-all duration-700 ease-in-out hover:scale-105" 
                  />
                </div>
              </div>

            </div>
            
            <div className="w-full mt-12 md:mt-16 flex flex-col gap-4">
              <h3 className="font-label-caps text-label-caps text-text-secondary uppercase tracking-[0.15em] border-b border-border-subtle pb-2">
                Goa Sunsplash Film / Recap
              </h3>
              <VideoEmbed 
                thumbnailSrc="/images/documentary/goa-sunsplash-reel-thumb.jpg" 
                label="Festival Recap Video" 
                videoUrl="https://drive.google.com/file/d/1mQEQGsXdhgBYo8zy9htYDT1Ws9htCyK5/preview"
              />
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= CASE STUDY 03: AAZAD AWAAZ ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-low py-section-desktop border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center mb-intra-section">
              
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 mb-8 lg:mb-0">
                <div className="border-b border-border-subtle pb-6">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-3 block">Case Study 03</span>
                  <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface leading-tight">Aazad Awaaz</h2>
                </div>
                <p className="font-body text-sm sm:text-body text-text-secondary leading-relaxed">
                  Aazad Awaaz was India&apos;s first fringe festival, bringing the spirit of independent art and expression to the heart of Pune across celebrated cultural venues including Hard Rock Cafe, Unwind, and FC Social. Bringing together artists such as Sushant Divgikar, Encore, and MC Altaf, the festival created a vibrant platform celebrating Music, Dance, Film, Art, and Food.
                </p>
                <div className="flex flex-col gap-2 border-l border-tertiary pl-4">
                  <span className="font-label-caps text-label-caps text-on-surface">Role &mdash; Director of Photography &amp; Editor</span>
                  <span className="font-label-caps text-label-caps text-text-secondary">Category &mdash; Independent Cultural Fringe Festival</span>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-video border border-border-subtle p-2 bg-surface-container-lowest">
                <div className="w-full h-full border border-border-subtle overflow-hidden relative bg-surface-container-lowest flex items-center justify-center">
                  <Image 
                    src="/images/events/aazad_awaaz.jpeg" 
                    alt="Aazad Awaaz Fringe Festival" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain transition-all duration-700 ease-in-out hover:scale-105" 
                  />
                </div>
              </div>

            </div>
            
            <div className="w-full mt-12 md:mt-16 flex flex-col gap-4">
              <h3 className="font-label-caps text-label-caps text-text-secondary uppercase tracking-[0.15em] border-b border-border-subtle pb-2">
                Aazad Awaaz Festival Aftermovie
              </h3>
              <VideoEmbed 
                thumbnailSrc="/images/events/aazad_awaaz.jpeg" 
                label="Fringe Festival Aftermovie" 
                videoUrl="https://drive.google.com/file/d/1DpJurTwlgC1hEPXmVHxAO9O0uSBiTvgz/preview"
              />
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= STILLS GALLERY ======================= */}
      <FadeIn>
        <section className="w-full border-t border-border-subtle bg-surface-container-low py-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-16 flex justify-between items-end border-b border-border-subtle pb-6">
            <h2 className="font-headline-md text-3xl md:text-[48px] text-on-surface">Curated Stills</h2>
            <span className="font-label-caps text-xs md:text-label-caps text-text-secondary uppercase tracking-[0.15em]">Archive 001 &mdash; 005</span>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-12 md:gap-16">
            
            {/* Row 1: 2-item split on desktop, responsive stack on mobile/tablet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-8 flex flex-col gap-4 group">
                <div className="aspect-video border border-border-subtle overflow-hidden bg-background relative">
                  <Image 
                    src="/images/documentary/stills/dsc_0140.jpg" 
                    alt="Aazad Awaaz Documentary Still" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 66vw" 
                    className="object-cover grayscale opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-[1.02]" 
                  />
                </div>
                <div className="border-t border-border-subtle pt-3 flex justify-between items-center">
                  <span className="font-label-caps text-xs md:text-label-caps text-text-secondary uppercase tracking-[0.15em]">001 &mdash; Cultural Observational</span>
                  <span className="font-caption text-caption text-outline">35mm</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4 group">
                <div className="aspect-video lg:aspect-auto lg:h-[calc(100%-48px)] border border-border-subtle overflow-hidden bg-background relative">
                  <Image 
                    src="/images/documentary/stills/dsc_0145.jpg" 
                    alt="Observational Portrait" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 33vw" 
                    className="object-cover grayscale opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-[1.02]" 
                  />
                </div>
                <div className="border-t border-border-subtle pt-3 flex justify-between items-center">
                  <span className="font-label-caps text-xs md:text-label-caps text-text-secondary uppercase tracking-[0.15em]">002 &mdash; Human Portrait</span>
                  <span className="font-caption text-caption text-outline">50mm</span>
                </div>
              </div>
            </div>

            {/* Row 2: 3-column equal split on desktop & tablet, 1-col on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
              {[
                { num: '003', type: 'Subculture Gathering', lens: '24mm', img: '/images/documentary/stills/dsc_0152.jpg' },
                { num: '004', type: 'Live Expression', lens: '85mm', img: '/images/documentary/stills/dsc_0329.jpg' },
                { num: '005', type: 'Community & Dialogue', lens: '50mm', img: '/images/documentary/stills/dsc_0460.jpg' },
              ].map((item) => (
                <div key={item.num} className="flex flex-col gap-4 group">
                  <div className="aspect-video border border-border-subtle overflow-hidden bg-background relative">
                    <Image 
                      src={item.img} 
                      alt={item.type} 
                      fill 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                      className="object-cover grayscale opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-[1.02]" 
                    />
                  </div>
                  <div className="border-t border-border-subtle pt-3 flex justify-between items-center">
                    <span className="font-label-caps text-xs md:text-label-caps text-text-secondary uppercase tracking-[0.15em]">{item.num} &mdash; {item.type}</span>
                    <span className="font-caption text-caption text-outline">{item.lens}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

    </div>
  )
}
