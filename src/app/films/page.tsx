import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { ShortFilmsGrid } from '@/components/films/ShortFilmsGrid'
import { ExhibitionShowcase } from '@/components/films/ExhibitionShowcase'
import { BtsGrid } from '@/components/films/BtsGrid'

const cameraSystems = [
  { name: 'ARRI Alexa', img: '/images/films/cameras/arri-alexa.jpg', desc: 'Large Format & 35mm Cinema' },
  { name: 'Canon C300', img: '/images/films/cameras/canon-c300.jpg', desc: 'Narrative & Broadcast Rig' },
  { name: 'Canon C70', img: '/images/films/cameras/canon-c70.jpg', desc: 'Compact Gimbal & A-Cam' },
  { name: 'Blackmagic URSA', img: '/images/films/cameras/blackmagic.jpg', desc: 'High Dynamic Range Cinema' },
]

const editingSuites = [
  {
    name: 'Premiere Pro',
    lines: ['Adobe', 'Premiere Pro'],
    desc: 'Editorial & Dynamic Link Workflow',
    svg: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-tertiary fill-current overflow-visible" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="44" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="5" y="5" width="38" height="38" rx="6" fill="currentColor" fillOpacity="0.12" />
        <text x="24" y="32" textAnchor="middle" fontFamily="'DM Sans', 'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5" fill="currentColor">
          Pr
        </text>
      </svg>
    )
  },
  {
    name: 'DaVinci Resolve',
    lines: ['DaVinci', 'Resolve'],
    desc: 'Colour Grading & Finishing',
    svg: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-tertiary fill-current overflow-visible" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        <g transform="translate(24, 24)">
          <path d="M0 0 L-10 -16 A18 18 0 0 1 10 -16 Z" fill="currentColor" opacity="0.9" />
          <path d="M0 0 L16 4 A18 18 0 0 1 6 18 Z" fill="currentColor" opacity="0.75" />
          <path d="M0 0 L-6 18 A18 18 0 0 1 -16 4 Z" fill="currentColor" opacity="0.6" />
          <circle cx="0" cy="0" r="4.5" fill="#111010" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>
    )
  },
  {
    name: 'Final Cut Pro',
    lines: ['Final Cut', 'Pro'],
    desc: 'Rapid Narrative Assembly',
    svg: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-tertiary fill-current overflow-visible" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="16" width="40" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 8 L44 8 L44 14 L4 14 Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8 L16 14 M20 8 L26 14 M30 8 L36 14 M40 8 L44 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 23 L26 27 L30 29 L26 31 L24 35 L22 31 L18 29 L22 27 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Media Composer',
    lines: ['Avid', 'Media Composer'],
    desc: 'Industry Standard Feature Cuts',
    svg: (
      <svg className="w-12 h-12 md:w-14 md:h-14 text-tertiary fill-current overflow-visible" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="44" height="44" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4" />
        <g transform="translate(6, 12)">
          <path d="M4 22 L10 2 L16 22 L12 22 L10 15 L6 15 L4 22 Z M7 12 L9 6 L11 12 Z" fill="currentColor" />
          <path d="M16 10 L21 22 L26 10 L22 10 L21 16 L20 10 Z" fill="currentColor" />
          <path d="M28 8 L32 8 L32 22 L28 22 Z" fill="currentColor" />
          <path d="M34 8 L38 8 C42 8 43 11 43 15 C43 19 42 22 38 22 L34 22 Z M37 11 L37 19 C39 19 40 18 40 15 C40 12 39 11 37 11 Z" fill="currentColor" />
        </g>
      </svg>
    )
  },
]

const disciplineDepartments = [
  {
    dept: 'Direction & Creative Leadership',
    disciplines: [
      { no: '01', title: 'Direction', desc: 'Guiding creative vision, character psychology, visual rhythm, and on-set performance.' },
      { no: '02', title: 'Creative Direction', desc: 'Shaping the overall creative language, visual identity, storytelling approach, and audience experience.' },
      { no: '03', title: 'Associate Direction', desc: 'Bridging creative intent with production execution, managing shot continuity, pacing, and on-set coordination.' },
    ]
  },
  {
    dept: 'Art & Acoustic Architecture',
    disciplines: [
      { no: '04', title: 'Production Design', desc: 'Building visual worlds through sets, props, colour palettes, spatial design, and period detail.' },
      { no: '05', title: 'Sound Design', desc: 'Sculpting acoustic atmosphere, dialogue texture, foley, and emotional soundscapes.' },
      { no: '06', title: 'Cinematography', desc: 'Designing camera movement, lighting, lens choices, composition, and visual texture.' },
    ]
  },
  {
    dept: 'Supervision & Post Pipeline',
    disciplines: [
      { no: '07', title: 'Script Supervision', desc: 'Maintaining continuity, dialogue accuracy, coverage tracking, and editorial slating.' },
      { no: '08', title: 'Post-Production', desc: 'Shaping the final film through editing, colour grading, sound mixing, finishing, and delivery.' },
      { no: '09', title: 'Editorial Supervision', desc: 'Managing cuts, footage organisation, proxies, film length, and collaboration with editors, colourists, and sound designers.' },
    ]
  }
]

export default function FilmsPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">

      {/* § 1.1 — Hero */}
      <section className="w-full relative h-screen flex items-end">
        <div className="absolute inset-0 z-0">
          {/* Desktop Landscape */}
          <Image
            src="/images/films/hero.png"
            alt="Filmmaking hero image"
            fill
            sizes="100vw"
            className="object-cover object-center hidden md:block"
            priority
          />
          {/* Mobile Portrait */}
          <Image
            src="/images/home/mobile/films_mobile.JPG"
            alt="Filmmaking hero image"
            fill
            sizes="100vw"
            className="object-cover object-center block md:hidden"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-20 pb-section-mobile md:pb-section-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            <div className="col-span-1 md:col-span-10 lg:col-span-8">
              <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight mix-blend-difference mb-4">
                Filmmaking
              </h1>
              <p className="font-nav text-nav text-on-surface uppercase tracking-[0.12em] mix-blend-difference opacity-80 border-b border-border-subtle inline-block pb-2">
                Direction · Production · Post Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* § 1.2 — Practice Introduction */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-section-mobile md:py-section-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
            <div className="col-span-1 md:col-span-4 lg:col-span-4 flex flex-col gap-4">
              <h2 className="font-headline-md text-3xl sm:text-4xl md:text-headline-md text-on-surface">
                The Complete Craft
              </h2>
              <div className="w-12 h-1 bg-tertiary mt-1" />
            </div>
            <div className="col-span-1 md:col-span-8 lg:col-span-7 lg:col-start-6 mt-6 md:mt-0">
              <div className="max-w-reading-max flex flex-col gap-6 font-body text-sm sm:text-base md:text-body text-text-secondary leading-relaxed">
                <p>
                  Cinema is where Shubham Mahajan&apos;s creative practice began. His filmmaking experience spans direction, associate direction, production design, sound design, script supervision, cinematography, and post-production, allowing him to approach projects from both creative vision and operational execution.
                </p>
                <p>
                  With an MA in Filmmaking from the University for the Creative Arts, London, complemented by a Diploma in Filmmaking and a Bachelor&apos;s degree in Civil Engineering, he views the frame through narrative architecture and technical discipline.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* § 1.3 — Selected Work Screened at BFI London */}
      <FadeIn>
        <section className="w-full border-t border-border-subtle py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-intra-section text-center max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="font-headline-md text-3xl sm:text-[36px] md:text-headline-md text-on-surface">
                Selected Work Screened at BFI London
              </h2>
              <p className="font-body text-body text-on-surface-variant mt-4 max-w-reading-max leading-relaxed">
                Three narrative films co-produced in London during postgraduate studies at the University for the Creative Arts, London. Shubham&apos;s contributions span Associate Director, Production Designer, Sound Designer, and Script Supervisor.
              </p>
            </div>

            <ShortFilmsGrid />
          </div>
        </section>
      </FadeIn>

      {/* § 1.4 — Film Exhibition Showcases */}
      <FadeIn>
        <section className="w-full bg-surface-container-low py-section-mobile md:py-section-desktop border-y border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ExhibitionShowcase />
          </div>
        </section>
      </FadeIn>

      {/* § 1.5 — Technical Practice & Camera Systems */}
      <FadeIn>
        <section className="w-full bg-surface-container-low border-t border-border-subtle pt-section-mobile md:pt-section-desktop pb-section-mobile md:pb-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-intra-section text-center max-w-2xl mx-auto">
              <span className="font-nav text-label-caps uppercase tracking-[0.15em] text-tertiary mb-3 block">
                Technical Practice
              </span>
              <h2 className="font-headline-md text-[36px] md:text-headline-md text-on-surface">
                Systems &amp; Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop mb-section-desktop">

              {/* Camera Systems with Background Photos */}
              <div className="flex flex-col">
                <h4 className="font-nav text-nav uppercase tracking-[0.12em] text-text-secondary border-b border-border-subtle pb-4 mb-6">
                  Camera Systems
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {cameraSystems.map((cam) => (
                    <div
                      key={cam.name}
                      className="group relative aspect-square overflow-hidden bg-surface border border-border-subtle hover:border-tertiary transition-all duration-500 flex flex-col justify-end p-6"
                    >
                      <Image
                        src={cam.img}
                        alt={cam.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />

                      <div className="relative z-10">
                        <span className="font-label-caps text-[9px] uppercase tracking-widest text-tertiary mb-1 block">
                          {cam.desc}
                        </span>
                        <span className="font-nav text-nav uppercase tracking-[0.12em] text-on-surface font-medium block">
                          {cam.name}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Editing Suites */}
              <div className="flex flex-col mt-12 lg:mt-0">
                <h4 className="font-nav text-nav uppercase tracking-[0.12em] text-text-secondary border-b border-border-subtle pb-4 mb-6">
                  Editing Suites
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {editingSuites.map((suite) => (
                    <div
                      key={suite.name}
                      className="group relative aspect-square overflow-hidden bg-surface border border-border-subtle hover:border-tertiary transition-all duration-500 flex flex-col items-center justify-center text-center p-6 gap-3"
                    >
                      <div className="flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(200,169,110,0.2)] group-hover:drop-shadow-[0_0_18px_rgba(200,169,110,0.5)] transition-all duration-300 transform group-hover:scale-110">
                        {suite.svg}
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-on-surface font-medium block mb-1">
                          {suite.lines[0]} {suite.lines[1]}
                        </span>
                        <span className="font-label-caps text-[9px] uppercase tracking-widest text-text-secondary block">
                          {suite.desc}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Core Disciplines: Editorial Department Ledger */}
            <div className="w-full border-t border-border-subtle pt-16">
              <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-tertiary mb-2 block">
                  Complete Production Pipeline
                </span>
                <h3 className="font-headline-md text-2xl sm:text-[32px] md:text-headline-md text-on-surface">
                  Core Filmmaking Disciplines
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {disciplineDepartments.map((dept, dIdx) => (
                  <div key={dIdx} className="bg-surface border border-border-subtle p-6 flex flex-col justify-between">
                    <span className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary border-b border-border-subtle pb-3 mb-6 block">
                      {dept.dept}
                    </span>
                    <div className="flex flex-col gap-6">
                      {dept.disciplines.map((item) => (
                        <div key={item.no} className="group/item border-b border-border-subtle/50 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-display text-xl sm:text-2xl text-on-surface group-hover/item:text-tertiary transition-colors">
                              {item.title}
                            </h4>
                            <span className="font-label-caps text-[10px] text-text-secondary">
                              {item.no}
                            </span>
                          </div>
                          <p className="font-body text-body text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>
      </FadeIn>

      {/* § 1.6 — Behind The Scenes Grid */}
      <BtsGrid />

    </div>
  )
}
