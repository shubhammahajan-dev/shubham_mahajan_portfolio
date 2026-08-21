"use client"

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { certifications, certificationCategories, Certification } from '@/data/certifications'
import { CertificateModal } from '@/components/acknowledgments/CertificateModal'
import { FadeIn } from '@/components/ui/FadeIn'

export function CertificationsLedger() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  const filteredCertifications = useMemo(() => {
    if (activeCategory === 'all') return certifications
    return certifications.filter((cert) => cert.category === activeCategory)
  }, [activeCategory])

  const currentIndex = useMemo(() => {
    if (!selectedCert) return -1
    return filteredCertifications.findIndex((c) => c.id === selectedCert.id)
  }, [selectedCert, filteredCertifications])

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredCertifications.length - 1) {
      setSelectedCert(filteredCertifications[currentIndex + 1])
    } else if (filteredCertifications.length > 0) {
      setSelectedCert(filteredCertifications[0])
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCert(filteredCertifications[currentIndex - 1])
    } else if (filteredCertifications.length > 0) {
      setSelectedCert(filteredCertifications[filteredCertifications.length - 1])
    }
  }

  return (
    <section className="w-full border-t border-border-subtle bg-surface-container-lowest py-section-desktop">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 border-b border-border-subtle pb-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-[0.15em] mb-3 block">
                03 / Technical Authorizations &amp; SISO Qualifications
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface leading-tight">
                Equipment Mastery &amp; Industry Standards
              </h2>
              <div className="w-12 h-1 bg-tertiary mt-6 mb-4"></div>
              <p className="font-body text-body text-text-secondary leading-relaxed text-sm sm:text-base">
                Official technical qualifications and operational authorizations certified by the University for the Creative Arts (UCA London / Farnham), validating hands-on mastery across Tier-1 cinema systems, gaffer lighting grids, production sound recorders, and soundstages.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-surface-container-low p-4 sm:p-6 border border-border-subtle shrink-0">
              <div className="flex flex-col">
                <span className="font-metric-hero text-3xl sm:text-4xl text-tertiary">24</span>
                <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider text-text-secondary mt-1">
                  Certifications
                </span>
              </div>
              <div className="flex flex-col border-l border-border-subtle pl-3 sm:pl-6">
                <span className="font-display text-lg sm:text-2xl text-on-surface font-light leading-none pt-1">
                  UCA
                </span>
                <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider text-text-secondary mt-2">
                  London / SISO
                </span>
              </div>
              <div className="flex flex-col border-l border-border-subtle pl-3 sm:pl-6">
                <span className="font-display text-lg sm:text-2xl text-tertiary font-light leading-none pt-1">
                  Tier-1
                </span>
                <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-wider text-text-secondary mt-2">
                  ARRI / Sound Devices
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Category Filter Pills */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-6 border-b border-border-subtle">
            {certificationCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              const count = cat.id === 'all'
                ? certifications.length
                : certifications.filter((c) => c.category === cat.id).length

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-label-caps text-xs uppercase tracking-widest px-4 py-2.5 transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-surface-container text-on-surface border-tertiary shadow-sm'
                      : 'bg-transparent text-text-secondary border-border-subtle hover:text-on-surface hover:border-tertiary/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-tertiary/20 text-tertiary font-semibold' : 'bg-surface text-text-secondary'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* 3-Tier Grid of Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, idx) => (
            <FadeIn key={cert.id} delay={Math.min(idx * 0.04, 0.25)}>
              <div
                onClick={() => setSelectedCert(cert)}
                className="group relative flex flex-col justify-between bg-surface border border-border-subtle hover:border-tertiary/80 transition-all duration-500 p-6 cursor-pointer overflow-hidden h-full hover:bg-surface-container-low"
              >
                {/* Top Gold Hover Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-caps text-[10px] uppercase tracking-widest px-2 py-1 bg-surface-container-lowest text-tertiary border border-tertiary/30">
                      {cert.categoryLabel}
                    </span>
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary flex items-center gap-1 group-hover:text-on-surface transition-colors">
                      <span className="text-tertiary">✓</span> SISO Verified
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-on-surface group-hover:text-tertiary transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="font-nav text-xs uppercase tracking-wider text-text-secondary mb-4 pb-3 border-b border-border-subtle/60">
                    {cert.apparatus}
                  </p>

                  <p className="font-body text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                    {cert.technicalSummary}
                  </p>
                </div>

                {/* Card Bottom: Competencies & View Trigger */}
                <div className="pt-4 border-t border-border-subtle mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.keyCompetencies.slice(0, 2).map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-label-caps text-[9px] uppercase tracking-wider px-2 py-0.5 bg-surface-container-lowest text-text-secondary border border-border-subtle"
                      >
                        {comp}
                      </span>
                    ))}
                    {cert.keyCompetencies.length > 2 && (
                      <span className="font-label-caps text-[9px] uppercase tracking-wider px-1.5 py-0.5 text-text-secondary">
                        +{cert.keyCompetencies.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="font-label-caps text-[10px] text-text-secondary uppercase tracking-widest">
                      UCA London
                    </span>
                    <span className="font-nav text-[11px] text-tertiary uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                      View Certificate <span>→</span>
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Lightbox Verification Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredCertifications.length > 1}
      />
    </section>
  )
}
