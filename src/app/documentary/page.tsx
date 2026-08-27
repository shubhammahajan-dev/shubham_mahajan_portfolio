import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { VideoEmbed } from '@/components/ui/VideoEmbed'

const curatedStills = [
  '/images/documentary/stills/dsc_0140.jpg',
  '/images/documentary/stills/dsc_0145.jpg',
  '/images/documentary/stills/dsc_0152.jpg',
  '/images/documentary/stills/dsc_0329.jpg',
  '/images/documentary/stills/dsc_0460.jpg',
  '/images/documentary/stills/dsc_0488.jpg',
  '/images/documentary/stills/dsc_0512.jpg',
  '/images/documentary/stills/dsc_0657.jpg',
  '/images/documentary/stills/dsc_0752.jpg',
  '/images/documentary/stills/dsc_0862.jpg',
  '/images/documentary/stills/dsc_0957.jpg',
  '/images/documentary/stills/dsc_0962.jpg',
  '/images/documentary/stills/img_7758.jpg',
  '/images/documentary/stills/img_7811.jpg',
  '/images/documentary/stills/img_7978.jpg',
]

export default function DocumentaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ======================= HERO SECTION ======================= */}
      <section className="w-full relative h-screen flex items-end">
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Landscape */}
          <Image 
            src="/images/documentary/hero.png" 
            alt="Documentary Storytelling" 
            fill 
            sizes="100vw"
            className="object-cover object-center hidden md:block" 
            priority 
          />
          {/* Mobile Portrait */}
          <Image 
            src="/images/home/mobile/documentaries_mobile.JPG" 
            alt="Documentary Storytelling" 
            fill 
            sizes="100vw"
            className="object-cover object-center block md:hidden" 
            priority 
          />
        </div>
        
        {/* Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-20 pb-section-mobile md:pb-section-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            <div className="col-span-1 md:col-span-10 lg:col-span-8">
              <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight mix-blend-difference mb-4">
                Documentaries
              </h1>
              <p className="font-nav text-nav text-on-surface uppercase tracking-[0.12em] mix-blend-difference opacity-80 border-b border-border-subtle inline-block pb-2">
                Realism &middot; Interviews &middot; Experiences
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ======================= PRACTICE INTRODUCTION ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-4 mb-6 lg:mb-0">
                <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">
                  The Observational Method
                </h2>
                <div className="w-12 h-1 bg-tertiary mt-4" />
              </div>
              <div className="lg:col-span-8 lg:col-start-5 max-w-reading-max font-body text-body text-text-secondary flex flex-col gap-6">
                <p className="leading-relaxed">
                  Documentary filmmaking demands patience, acute observation, rigorous research, and the ability to find narrative within unscripted reality. My work spans productions with BBC producers, large-scale music and cultural festival documentaries, and independent observational projects. Across these, I take a journalistic, reality-first approach, understanding the subject, researching context, questioning assumptions, and allowing the story to emerge naturally.
                </p>
                <p className="leading-relaxed">
                  I&apos;m particularly drawn to guerrilla-style filmmaking: working discreetly with real people in real environments, minimising the camera&apos;s presence so subjects remain natural and unselfconscious. But observation alone isn&apos;t enough; good documentary filmmaking also means asking uncomfortable questions, challenging what is presented, and pursuing what lies beneath the obvious story. The camera becomes a tool for access, investigation, and honest storytelling.
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

              <div className="lg:col-span-7 relative aspect-video border border-border-subtle p-2 bg-surface-container-lowest">
                <div className="w-full h-full border border-border-subtle overflow-hidden relative">
                  <Image 
                    src="/images/documentary/heART.jpeg" 
                    alt="HeART BBC Documentary" 
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

              <div className="lg:col-span-7 relative aspect-video border border-border-subtle p-2 bg-surface-container-lowest">
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
                thumbnailSrc="/images/documentary/goa-sunsplash-01.jpg" 
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
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            
            {/* Centered Section Header */}
            <div className="mb-12 md:mb-16 flex justify-center text-center pb-6 border-b border-border-subtle">
              <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
                Curated Stills
              </h2>
            </div>

            {/* Masonry Collage Grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {curatedStills.map((img, idx) => (
                <FadeIn key={`${img}-${idx}`} delay={Math.min(idx * 0.02, 0.3)} className="break-inside-avoid">
                  <div className="relative w-full group overflow-hidden bg-surface border border-border-subtle hover:border-tertiary/60 transition-all duration-500">
                    <Image 
                      src={img} 
                      alt={`Documentary and observational still ${idx + 1}`} 
                      width={800}
                      height={800}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                      className="w-full h-auto object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]" 
                    />
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

    </div>
  )
}
