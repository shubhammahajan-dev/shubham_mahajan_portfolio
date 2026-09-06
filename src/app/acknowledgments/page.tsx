import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { OperatingPrinciples } from '@/components/acknowledgments/OperatingPrinciples'
import { CertificationsLedger } from '@/components/acknowledgments/CertificationsLedger'

const experiences = [
  {
    role: 'Front of House Associate',
    company: 'Rosewood London',
    location: 'London, UK',
    period: '04/2024 \u2013 Present',
    description: 'Forbes 5-Star luxury hospitality operations, managing high-profile international guests, A-list talent, and private events with absolute discretion and protocol.',
  },
  {
    role: 'Associate Video Director',
    company: 'GlobalBees Brands',
    location: 'Pune, India',
    period: '02/2022 \u2013 10/2022',
    description: 'Led creative strategy, studio production, and a 7-person team across D2C brands UrbanGabru and UrbanYog, scaling digital presence and producing national commercial campaigns.',
  },
  {
    role: 'Video Direction Strategies',
    company: 'UrbanGabru',
    location: 'Pune, India',
    period: '08/2021 \u2013 02/2022',
    description: 'Developed high-conversion performance creative, viral retention hooks, and directed celebrity ad campaigns driving substantial brand revenue.',
  },
  {
    role: 'Director of Photography and Editor',
    company: 'Zoinc Media',
    location: 'Pune, India',
    period: '03/2019 \u2013 01/2020',
    description: 'Led camera departments, lighting setups, and end-to-end post-production across commercial brand films, music videos, and digital content.',
  },
]

const educationList = [
  {
    degree: 'MA Filmmaking',
    institution: 'University for the Creative Arts, London',
    years: '2023 \u2013 2024',
  },
  {
    degree: 'Diploma in Filmmaking',
    institution: 'Design Media and Edutainment School, Pune',
    years: '2018 \u2013 2019',
  },
  {
    degree: "Bachelor's in Civil Engineering",
    institution: 'Savitribai Phule Pune University, India',
    years: '2016 \u2013 2020',
  },
]

export default function AcknowledgmentsPage() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      
      {/* ======================= HERO SECTION ======================= */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pt-32 md:pt-40 pb-16 md:pb-24 border-b border-border-subtle bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.05] text-on-surface uppercase tracking-tight mb-4">
              The Record
            </h1>
            <div className="w-12 h-1 bg-tertiary mb-6" />
            <p className="font-body text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Academics, Industrial Experience, formal industry endorsements, technical certifications, and the unseen labor behind the frame.
            </p>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full border border-border-subtle overflow-hidden bg-surface-container-low group">
              <Image 
                src="/images/acknowledgments/shubham.png" 
                alt="Shubham Mahajan - Filmmaker & Director" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                priority 
              />
            </div>
          </div>

        </div>
      </section>


      {/* ======================= FORMAL ACKNOWLEDGMENTS (PRIORITIZED ABOVE EDUCATION) ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop py-section-desktop border-b border-border-subtle bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-12 md:mb-16 items-end">
              <div className="lg:col-span-6">
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface mb-4">
                  Formal Acknowledgments
                </h2>
                <p className="font-body text-body text-text-secondary">
                  Direct social shares and public endorsements from acclaimed Indian filmmakers Vishal Bhardwaj and Hansal Mehta for Art of Persuasion (Research Paper).
                </p>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-end">
                <div className="border-t border-border-subtle pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-nav text-nav text-on-surface uppercase tracking-[0.12em]">Vishal Bhardwaj</span>
                    <span className="font-caption text-caption text-tertiary">@vishalrbhardwaj</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-nav text-nav text-on-surface uppercase tracking-[0.12em]">Hansal Mehta</span>
                    <span className="font-caption text-caption text-tertiary">@mehtahansal</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Endorsement Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border border-border-subtle bg-surface p-6 flex flex-col justify-between relative group hover:border-tertiary transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-caps text-[11px] text-tertiary uppercase tracking-widest">Instagram Share</span>
                  <span className="font-caption text-xs text-text-secondary">Director &middot; Composer</span>
                </div>
                <div className="relative w-full aspect-[4/5] my-2 bg-surface-container-lowest flex items-center justify-center overflow-hidden border border-border-subtle">
                  <Image 
                    src="/images/acknowledgments/ack-doc-01.jpg" 
                    alt="Vishal Bhardwaj Instagram mention" 
                    fill 
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="pt-4 border-t border-border-subtle mt-4 flex justify-between items-center">
                  <span className="font-nav text-nav text-on-surface">Vishal Bhardwaj</span>
                  <span className="font-label-caps text-[10px] text-text-secondary uppercase tracking-widest">Public Mention</span>
                </div>
              </div>
              
              <div className="border border-border-subtle bg-surface p-6 flex flex-col justify-between relative group hover:border-tertiary transition-colors">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-label-caps text-[11px] text-tertiary uppercase tracking-widest">Instagram Share</span>
                  <span className="font-caption text-xs text-text-secondary">Director &middot; Producer</span>
                </div>
                <div className="relative w-full aspect-[4/5] my-2 bg-surface-container-lowest flex items-center justify-center overflow-hidden border border-border-subtle">
                  <Image 
                    src="/images/acknowledgments/ack-doc-02.jpg" 
                    alt="Hansal Mehta Instagram mention" 
                    fill 
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="pt-4 border-t border-border-subtle mt-4 flex justify-between items-center">
                  <span className="font-nav text-nav text-on-surface">Hansal Mehta</span>
                  <span className="font-label-caps text-[10px] text-text-secondary uppercase tracking-widest">Public Mention</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeIn>


      {/* ======================= EDUCATION SECTION ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 border-b border-border-subtle">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            
            <div className="lg:col-span-4 mb-8 lg:mb-0">
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">Education</h2>
              <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
              <p className="font-body text-body text-text-secondary mt-6 md:mt-8 max-w-sm text-sm md:text-base leading-relaxed">
                Shubham Mahajan&apos;s structural engineering background provides a disciplined foundation that meets the creative language of filmmaking, allowing for a rigorous yet fluid approach to visual storytelling.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-0 border-t border-border-subtle">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 py-6 md:py-8 border-b border-border-subtle group hover:bg-surface-container-low transition-colors duration-300 px-2 sm:px-4"
                >
                  <div className="sm:col-span-7 font-headline-md text-2xl md:text-[30px] leading-tight text-on-surface">
                    {edu.degree}
                  </div>
                  <div className="sm:col-span-5 flex flex-col justify-center">
                    <span className="font-body text-xs md:text-sm text-text-secondary leading-snug">
                      {edu.institution}
                    </span>
                    <span className="font-label-caps text-[11px] text-tertiary mt-1 uppercase tracking-widest">
                      {edu.years}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>


      {/* ======================= EXPERIENCE SECTION (NEW) ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 border-b border-border-subtle bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            
            <div className="lg:col-span-4 mb-8 lg:mb-0">
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">Experience</h2>
              <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
              <p className="font-body text-body text-text-secondary mt-6 md:mt-8 max-w-sm text-sm md:text-base leading-relaxed">
                Career history spanning luxury hospitality operations in London to high-scale commercial video direction and digital brand architecture in India.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col border-t border-border-subtle">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="py-6 md:py-8 border-b border-border-subtle group hover:bg-surface-container-low transition-colors duration-300 px-2 sm:px-4 flex flex-col gap-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface group-hover:text-tertiary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-label-caps text-xs text-tertiary uppercase tracking-widest shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs md:text-sm font-nav uppercase tracking-wider text-text-secondary">
                    <span className="text-on-surface font-medium">{exp.company}</span>
                    <span>&middot;</span>
                    <span>{exp.location}</span>
                  </div>

                  <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </FadeIn>


      {/* ======================= TECHNICAL CERTIFICATIONS & SISO AUTHORIZATIONS ======================= */}
      <CertificationsLedger />


      {/* ======================= PERFORMANCE BACKGROUND ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-16 md:mb-24 bg-surface-container-lowest py-16 md:py-24 border-y border-border-subtle">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 mb-6 lg:mb-0">
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                Performance<br className="hidden md:block"/>Background
              </h2>
              <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
            </div>
            <div className="lg:col-span-8">
              <div>
                <p className="font-body text-body text-text-secondary mb-8 md:mb-12 max-w-reading-max text-sm md:text-base leading-relaxed">
                  A decade of movement practice and one year of Theatre experience deeply influence Shubham Mahajan&apos;s understanding of rhythm, blocking, and the physical language of cinema.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                  {['Contemporary', 'Freestyle', 'Lyrical', 'Hip-Hop', 'Indian Folk', 'Theatre (1 Year)'].map((style) => (
                    <div key={style} className="flex flex-col gap-2">
                      <span className="font-label-caps text-xs md:text-label-caps text-on-surface">{style}</span>
                      <div className="h-px w-full bg-border-subtle"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= INTERNATIONAL RECOGNITION ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-4 mb-6 lg:mb-0">
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">
                  International Recognition
                </h2>
                <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-surface-container-low p-8 md:p-12 border border-border-subtle">
                  <div className="font-label-caps text-label-caps text-tertiary mb-3">South Korea Nomination</div>
                  <h3 className="font-headline-md text-2xl md:text-[32px] mb-4 text-on-surface">International Youth Fellowship</h3>
                  <p className="font-body text-body text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
                    Recognized for cultural contribution and leadership potential within the global creative community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= METHODOLOGY & OPERATING PRINCIPLES ======================= */}
      <OperatingPrinciples />

    </div>
  )
}
