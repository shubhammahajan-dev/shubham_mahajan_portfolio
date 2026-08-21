import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'

const btsImages = [
  '/images/films/bts/bts-01.jpg',
  '/images/films/bts/dsc_0512.jpg',
  '/images/films/bts/bts-02.jpg',
  '/images/films/bts/dsc_0657.jpg',
  '/images/films/bts/bts-03.jpg',
  '/images/films/bts/dsc_0752.jpg',
  '/images/films/bts/bts-04.jpg',
  '/images/films/bts/dsc_0862.jpg',
  '/images/films/bts/bts-5.jpg',
  '/images/films/bts/dsc_0957.jpg',
  '/images/films/bts/bts-06.jpg',
  '/images/films/bts/dsc_0962.jpg',
  '/images/films/bts/bts-07.jpg',
  '/images/films/bts/img_7758.jpg',
  '/images/films/bts/bts-09.jpg',
  '/images/films/bts/img_7811.jpg',
  '/images/films/bts/bts-10.jpg',
  '/images/films/bts/img_7978.jpg',
  '/images/films/bts/bts-11.jpg',
  '/images/films/bts/oi7a8967.jpg',
  '/images/films/bts/bts-12.jpg',
  '/images/films/bts/oi7a9326.jpg',
  '/images/films/bts/bts-13.jpg',
  '/images/films/bts/oi7a9421.jpg',
  '/images/films/bts/bts-14.jpg',
  '/images/films/bts/dsc_0140.jpg',
  '/images/films/bts/bts-15.jpg',
  '/images/films/bts/dsc_0145.jpg',
  '/images/films/bts/bts-16.jpg',
  '/images/films/bts/dsc_0152.jpg',
  '/images/films/bts/bts-17.jpg',
  '/images/films/bts/dsc_0329.jpg',
  '/images/films/bts/dsc_0460.jpg',
  '/images/films/bts/dsc_0488.jpg',
];

export function BtsGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-section-mobile md:py-section-desktop border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        <FadeIn>
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <span className="font-nav text-label-caps uppercase tracking-[0.15em] text-text-secondary mb-4 block">05 / On Set</span>
            <h2 className="font-headline-md text-3xl sm:text-4xl md:text-headline-md text-on-surface">Behind The Scenes</h2>
            <div className="w-12 h-px bg-tertiary mt-8"></div>
          </div>
        </FadeIn>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {btsImages.map((src, idx) => (
            <FadeIn key={`${src}-${idx}`} className="break-inside-avoid">
              <div className="relative w-full group overflow-hidden bg-surface border border-border-subtle hover:border-tertiary/60 transition-all duration-500">
                <Image 
                  src={src} 
                  alt={`Behind the scenes production still ${idx + 1}`} 
                  width={800} 
                  height={800} 
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover grayscale opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]" 
                />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
