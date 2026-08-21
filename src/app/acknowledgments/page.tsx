import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { OperatingPrinciples } from '@/components/acknowledgments/OperatingPrinciples'
import { CertificationsLedger } from '@/components/acknowledgments/CertificationsLedger'

export default function AcknowledgmentsPage() {
  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      
      {/* ======================= HERO ======================= */}
      <section className="w-full min-h-[45vh] flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 pt-32 md:pt-40 border-b border-border-subtle bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-xs uppercase tracking-[0.15em] text-tertiary mb-3 block">05 / The Record</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-display text-on-surface mb-6 tracking-tight">
            The Record
          </h1>
          <div className="w-12 h-1 bg-tertiary mb-6"></div>
          <p className="font-body text-body text-text-secondary max-w-2xl leading-relaxed">
            Education, formal industry endorsements, technical certifications, and the unseen labor behind the frame. This is the scaffolding upon which the final image rests.
          </p>
        </div>
      </section>


      {/* ======================= 01 / EDUCATION ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 mb-8 lg:mb-0">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-2 block">01 / Foundation</span>
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">Education</h2>
              <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
              <p className="font-body text-body text-text-secondary mt-6 md:mt-8 max-w-sm text-sm md:text-base leading-relaxed">
                My structural engineering background provides a disciplined foundation that meets the creative language of filmmaking, allowing for a rigorous yet fluid approach to visual storytelling.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-0 border-t border-border-subtle">
              {[
                { degree: 'MA Filmmaking', institution: 'University for the Creative Arts, London' },
                { degree: 'Diploma in Filmmaking', institution: 'Film & Direction Studies' },
                { degree: "Bachelor's in Civil Engineering", institution: 'Structural & Systems Engineering' }
              ].map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-4 py-6 md:py-8 border-b border-border-subtle group hover:bg-surface-container-low transition-colors duration-300">
                  <div className="font-headline-md text-2xl md:text-[32px] leading-tight text-on-surface">{edu.degree}</div>
                  <div className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-text-secondary flex items-center">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>


      {/* ======================= 02 / FORMAL ACKNOWLEDGMENTS (PRIORITIZED) ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop py-section-desktop border-t border-border-subtle bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-12 md:mb-16 items-end">
              <div className="lg:col-span-6">
                <span className="font-label-caps text-label-caps text-tertiary mb-3 block">
                  02 / Industry Recognition
                </span>
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface mb-4">Formal Acknowledgments</h2>
                <p className="font-body text-body text-text-secondary">
                  Direct social shares and public endorsements from acclaimed Indian filmmakers Vishal Bhardwaj and Hansal Mehta.
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


      {/* ======================= 03 / TECHNICAL CERTIFICATIONS & SISO AUTHORIZATIONS ======================= */}
      <CertificationsLedger />


      {/* ======================= 04 / PERFORMANCE BACKGROUND ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-16 md:mb-24 bg-surface-container-lowest py-16 md:py-24 border-y border-border-subtle">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 mb-6 lg:mb-0">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-2 block">04 / Background</span>
              <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">Performance<br className="hidden md:block"/>Background</h2>
              <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
            </div>
            <div className="lg:col-span-8">
              <div>
                <p className="font-body text-body text-text-secondary mb-8 md:mb-12 max-w-reading-max text-sm md:text-base leading-relaxed">
                  A decade of movement practice and one year of Theatre experience deeply influence my understanding of rhythm, blocking, and the physical language of cinema.
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

      {/* ======================= 05 / INTERNATIONAL RECOGNITION ======================= */}
      <FadeIn>
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-4 mb-6 lg:mb-0">
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-2 block">05 / Recognition</span>
                <h2 className="font-headline-md text-3xl md:text-headline-md text-on-surface">International Recognition</h2>
                <div className="w-8 h-px bg-tertiary mt-4 md:mt-6"></div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-surface-container-low p-8 md:p-12 border border-border-subtle">
                  <div className="font-label-caps text-label-caps text-tertiary mb-3">South Korea Nomination</div>
                  <h3 className="font-headline-md text-2xl md:text-[32px] mb-4 text-on-surface">International Youth Fellowship</h3>
                  <p className="font-body text-body text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">Recognized for cultural contribution and leadership potential within the global creative community.</p>
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
