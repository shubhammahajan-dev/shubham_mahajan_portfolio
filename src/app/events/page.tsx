import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { TalentCarousel } from '@/components/events/TalentCarousel'

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      
      {/* ======================= § 2.1 — HERO ======================= */}
      <section className="relative w-full h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/events/hero.png" 
            alt="High-Stakes Events and Press Junkets" 
            fill 
            sizes="100vw"
            className="object-cover object-center" 
            priority 
          />
        </div>
        
        {/* Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent z-0" />
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <span className="font-nav text-xs md:text-nav uppercase tracking-[0.15em] text-tertiary mb-4 block font-medium">
            02 / Events &amp; Press Junkets
          </span>
          <h1 className="max-w-5xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] text-on-surface uppercase tracking-tight">
            Global Talent.<br/>
            High Stake Productions.<br/>
            Seamless Execution.
          </h1>
        </div>
      </section>


      {/* ======================= § 2.2 — PRIMARY OVERVIEW ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop border-b border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              
              <div className="lg:col-span-4 flex flex-col gap-4 mb-8 lg:mb-0">
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block">
                  Production &amp; Operations
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface leading-tight">
                  High-Visibility Environments
                </h2>
                <div className="w-12 h-1 bg-tertiary mt-2" />
              </div>

              <div className="lg:col-span-8 lg:col-start-5 max-w-reading-max font-body text-body text-on-surface-variant flex flex-col gap-6 leading-relaxed">
                <p>
                  Experience across international talent, press junkets, branded productions and high visibility events, working at the intersection of production, operations and commercial execution. Coordinating with talent teams, production crews, agencies, brands and executive stakeholders across demanding, deadline driven environments.
                </p>
                <p>
                  Responsibilities span technical riders, camera and sound workflows, call sheets, crew coordination, run of show, rehearsals, talent movement, access management, vendor logistics and contingency planning. Alongside execution, managing budgets, production timelines, vendor billing, client requirements, marketing deliverables and stakeholder reporting.
                </p>
                <p className="text-on-surface font-medium pt-2 border-t border-border-subtle">
                  Every engagement requires precision, discretion and rapid decision making, ensuring technical, creative and commercial objectives remain aligned from pre production through final execution.
                </p>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= § 2.3 — TALENT, PREMIERES & GLOBAL DELEGATIONS (PRIORITIZED) ======================= */}
      <FadeIn>
        <section className="w-full bg-background py-section-desktop">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-subtle">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block mb-2">
                  01 / Portfolio &amp; Exposure
                </span>
                <h3 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                  International Talent &amp; Global Theatrical Premieres
                </h3>
              </div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-text-secondary">
                London &middot; Global Portfolio
              </span>
            </div>
            
            <div className="flex flex-col gap-16">
              
              {/* 1. FILM & ENTERTAINMENT TALENT (Left to Right) */}
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-8 block tracking-[0.15em]">
                  Film, Culture &amp; Global Talent
                </span>
                <TalentCarousel 
                  direction="left-to-right"
                  items={[
                    { name: 'Johnny Depp', img: '/images/events/talent-johnny-depp.jpg' },
                    { name: 'Diljit Dosanjh', img: '/images/events/talent-diljit-dosanjh.jpg' },
                    { name: 'Elizabeth Olsen', img: '/images/events/talent-elizabeth-olsen.jpg' },
                    { name: 'Cody Gakpo', img: '/images/events/talent-cody-gakpo.jpg' },
                    { name: 'Mohamed Salah', img: '/images/events/talent-mohamed-salah.jpg' },
                    { name: 'Jude Bellingham', img: '/images/events/talent-jude-bellingham.jpg' },
                    { name: 'Charles Roven', img: '/images/events/industry-charles-roven.jpg' },
                    { name: 'Bryan Cranston', img: '/images/events/talent-bryan-cranston.jpg' },
                    { name: 'Ryan Gosling', img: '/images/events/talent-ryan-gosling.jpg' },
                    { name: 'Tom Holland', img: '/images/events/talent-tom-holland.jpg' },
                    { name: 'Austin Butler', img: '/images/events/talent-austin-butler.jpg' },
                    { name: 'Beyoncé', img: '/images/events/talent-beyonce.jpg' },
                    { name: 'Justin Bieber', img: '/images/events/talent-justin-bieber.jpg' },
                    { name: 'Jennifer Lopez', img: '/images/events/talent-jennifer-lopez.jpg' },
                    { name: 'Travis Scott', img: '/images/events/talent-travis-scott.jpg' },
                    { name: 'Taylor Swift', img: '/images/events/talent-taylor-swift.jpg' },
                    { name: 'Khaby Lame', img: '/images/events/talent-khaby-lame.jpg' },
                    { name: 'MrBeast', img: '/images/events/talent-mrbeast.jpg' },
                    { name: 'Chris Hemsworth', img: '/images/events/talent-chris-hemsworth.jpg' },
                    { name: 'Andrew Garfield', img: '/images/events/talent-andrew-garfield.jpg' },
                    { name: 'Dev Patel', img: '/images/events/talent-dev-patel.jpg' },
                    { name: 'Henry Cavill', img: '/images/events/talent-henry-cavill.jpg' },
                    { name: 'Michael B. Jordan', img: '/images/events/talent-michael-b-jordan.jpg' },
                  ]} 
                />
              </div>

              {/* 2. FILM PROMOTIONS & PREMIERES (Right to Left) */}
              <div className="border-t border-border-subtle pt-8">
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-8 block tracking-[0.15em]">
                  Film Promotions &amp; Theatrical Premieres
                </span>
                <TalentCarousel 
                  direction="right-to-left"
                  items={[
                    { name: 'The Fall Guy', img: '/images/events/film-the-fall-guy.jpg' },
                    { name: 'The Sinners', img: '/images/events/film-the-sinners.jpg' },
                    { name: 'Karate Kid', img: '/images/events/film-karate-kid.jpg' },
                    { name: 'Mission Impossible', img: '/images/events/film-mission-impossible.jpg' },
                    { name: 'Superman', img: '/images/events/film-superman.jpg' },
                    { name: 'Unstoppable', img: '/images/events/film-unstoppable.jpg' },
                    { name: 'Dil-Luminati', img: '/images/events/film-dil-luminati.jpg' },
                  ]} 
                />
              </div>

              {/* 3. CREATIVE & DIRECTORIAL INDUSTRY (Left to Right - Prioritized above Sports) */}
              <div className="border-t border-border-subtle pt-8">
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-8 block tracking-[0.15em]">
                  Creative Direction &amp; Industry Filmmakers
                </span>
                <TalentCarousel 
                  direction="left-to-right"
                  items={[
                    { name: 'Ryan Coogler', img: '/images/events/industry-ryan-coogler.jpg' },
                    { name: 'Sam Raimi', img: '/images/events/industry-sam-raimi.jpg' },
                    { name: 'Charles Roven', img: '/images/events/industry-charles-roven.jpg' },
                    { name: 'Anna Maria Sieklucka', img: '/images/events/industry-anna-maria-sieklucka.jpg' },
                  ]} 
                />
              </div>

              {/* 4. SPORTS */}
              <div className="border-t border-border-subtle pt-8">
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-6 block tracking-[0.15em]">
                  Major Sports &amp; Athletes
                </span>
                <p className="font-body text-body text-on-surface-variant max-w-4xl leading-relaxed">
                  Liverpool FC · Mohamed Salah · Cody Gakpo · Novak Djokovic · Jude Bellingham · Wimbledon · FIFA
                </p>
              </div>

              {/* 5. BUSINESS, GOVERNMENT & DIGNITARIES */}
              <div className="border-t border-border-subtle pt-8">
                <span className="font-label-caps text-label-caps text-tertiary uppercase mb-6 block tracking-[0.15em]">
                  Government, Institutions &amp; International Dignitaries
                </span>
                <p className="font-body text-body text-on-surface-variant max-w-4xl leading-relaxed">
                  OpenAI · BFI · Keir Starmer · Emmanuel Macron · Rishi Sunak · Mohammed bin Salman · Mehmet Şimşek · Debbie Hewitt
                </p>
              </div>

            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= § 2.4 — CURATED ENGAGEMENTS LEDGER ======================= */}
      <FadeIn>
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-desktop w-full border-t border-border-subtle">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border-subtle">
            <div>
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block mb-2">
                02 / Curated Engagements
              </span>
              <h3 className="font-headline-md text-[32px] md:text-headline-md text-on-surface">
                Selected High-Stake Events
              </h3>
            </div>
            <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
              London &middot; Global Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border-subtle">
            {[
              { category: 'Sporting Event', event: 'Wimbledon Championships' },
              { category: 'Gala & Culture', event: 'Met Gala Pre-Events / British Museum Ball' },
              { category: 'Film Industry', event: 'International Film Junkets' },
              { category: 'Promotional', event: 'Film Promotional Tours' },
              { category: 'Brand Activation', event: 'Luxury Brand Activations' },
              { category: 'Major Sport', event: 'Major Sporting Events' },
              { category: 'Private Production', event: 'High-Profile Private Productions' },
              { category: 'Diplomatic', event: 'Diplomatic & Executive Engagements' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-6 border-b border-r border-border-subtle hover:bg-surface-container-low transition-colors bg-background flex flex-col justify-between min-h-[140px] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary">
                    {item.category}
                  </span>
                  <span className="font-label-caps text-[10px] text-text-secondary">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-display text-xl md:text-2xl leading-snug text-on-surface group-hover:text-tertiary transition-colors">
                  {item.event}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>


      {/* ======================= § 2.5 — CORE CAPABILITIES (DEPRIORITIZED LOWER) ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-lowest py-section-desktop border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4 border-b border-border-subtle pb-6">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] block mb-2">
                  03 / Operational Framework
                </span>
                <h3 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                  Core Capabilities
                </h3>
              </div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-text-secondary">
                End-to-End Production &amp; Commercial Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Pillar 1: Production & On-Ground Operations */}
              <div className="bg-surface border border-border-subtle p-8 sm:p-10 flex flex-col justify-between group hover:border-tertiary/60 transition-colors relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                      Pillar 01
                    </span>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                      On-Ground Operations
                    </span>
                  </div>

                  <h4 className="font-display text-2xl sm:text-3xl text-on-surface mb-6">
                    Production &amp; On-Ground Logistics
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      'Line Management',
                      'Talent Movement',
                      'Crew Logistics',
                      'Vendor Coordination',
                      'Access & Accreditation',
                      'Transport',
                      'On Ground Troubleshooting',
                      'Contingency Planning'
                    ].map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 bg-surface-container-low border border-border-subtle">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                        <span className="font-nav text-xs uppercase tracking-wider text-on-surface">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-body text-xs text-text-secondary border-t border-border-subtle pt-4 mt-4 leading-relaxed">
                  Direct oversight of talent safety, precision movement protocols, live stage run-of-show, and rapid crisis management.
                </p>
              </div>

              {/* Pillar 2: Commercial & Project Management */}
              <div className="bg-surface border border-border-subtle p-8 sm:p-10 flex flex-col justify-between group hover:border-tertiary/60 transition-colors relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                    <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary">
                      Pillar 02
                    </span>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-text-secondary">
                      Commercial Operations
                    </span>
                  </div>

                  <h4 className="font-display text-2xl sm:text-3xl text-on-surface mb-6">
                    Commercial &amp; Project Management
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      'Budget & Cost Coordination',
                      'Vendor Management',
                      'Client Servicing',
                      'Brand Deliverables',
                      'Production Timelines',
                      'Risk Management',
                      'Stakeholder Coordination',
                      'Post Event Reporting'
                    ].map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 bg-surface-container-low border border-border-subtle">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                        <span className="font-nav text-xs uppercase tracking-wider text-on-surface">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-body text-xs text-text-secondary border-t border-border-subtle pt-4 mt-4 leading-relaxed">
                  Aligning technical budgets, stakeholder deliverables, agency contracts, and high-level client expectations from pre-pro to wrap.
                </p>
              </div>

            </div>

          </div>
        </section>
      </FadeIn>


      {/* ======================= § 2.6 — CLOSING STATEMENT ======================= */}
      <FadeIn>
        <section className="w-full bg-surface-container-lowest py-section-desktop border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-center">
            <h4 className="font-headline-md text-2xl sm:text-3xl md:text-[40px] italic text-on-surface-variant font-light text-center max-w-3xl leading-snug">
              &quot;Every engagement requires precision, discretion and rapid decision making, ensuring technical, creative and commercial objectives remain aligned from pre-production through final execution.&quot;
              <span className="mt-6 block font-label-caps text-label-caps tracking-[0.15em] not-italic text-tertiary">
                PRODUCTION · OPERATIONS · EXECUTION
              </span>
            </h4>
          </div>
        </section>
      </FadeIn>

    </div>
  )
}
