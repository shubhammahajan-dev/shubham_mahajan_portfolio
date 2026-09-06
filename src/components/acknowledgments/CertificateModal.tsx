"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Certification } from '@/data/certifications'

interface CertificateModalProps {
  certification: Certification | null
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  hasMultiple?: boolean
}

export function CertificateModal({
  certification,
  onClose,
  onNext,
  onPrev,
  hasMultiple = false,
}: CertificateModalProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [prevCertId, setPrevCertId] = useState(certification?.id)

  if (certification?.id !== prevCertId) {
    setPrevCertId(certification?.id)
    setIsZoomed(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  if (!certification) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-background/90 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-surface-container-lowest border border-border-subtle shadow-2xl flex flex-col overflow-hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-surface-container-low/60 shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary">
                    Official Verification Document
                  </span>
                  <span className="text-border-subtle">|</span>
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">
                    {certification.categoryLabel}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl text-on-surface line-clamp-1">
                  {certification.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-subtle hover:border-tertiary text-text-secondary hover:text-on-surface font-label-caps text-[10px] uppercase tracking-widest transition-colors"
                title="Toggle Zoom"
              >
                <span>{isZoomed ? 'Fit Screen' : 'Zoom Document'}</span>
              </button>

              <a
                href={certification.pdfDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 border border-tertiary/40 bg-tertiary/10 hover:bg-tertiary/20 text-tertiary font-label-caps text-[10px] uppercase tracking-widest transition-colors"
              >
                Open PDF ↗
              </a>

              <button
                onClick={onClose}
                className="p-2 -mr-2 text-text-secondary hover:text-on-surface transition-colors"
                aria-label="Close modal"
              >
                <div className="font-body text-2xl font-light leading-none">✕</div>
              </button>
            </div>
          </div>

          {/* Modal Body: Split Layout (Document Viewer + Metadata) */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 min-h-0">
            
            {/* Left: High-Res Document Preview */}
            <div className="lg:col-span-8 bg-surface-container/40 p-4 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border-subtle overflow-y-auto">
              <div 
                className={`relative bg-white shadow-2xl transition-all duration-300 ${
                  isZoomed ? 'w-full max-w-3xl scale-105' : 'w-full max-w-xl'
                }`}
                style={{ aspectRatio: '1 / 1.414' }}
              >
                <Image
                  src={certification.previewImage}
                  alt={certification.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            {/* Right: Technical Summary & Accreditation Details */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-surface-container-lowest">
              <div className="flex flex-col gap-6">
                
                {/* Apparatus & Authority Badge */}
                <div className="flex flex-col gap-2 border-b border-border-subtle pb-4">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">
                    Apparatus / System
                  </span>
                  <p className="font-nav text-sm font-medium text-on-surface">
                    {certification.apparatus}
                  </p>
                </div>

                {/* Issuing Authority */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-tertiary">
                    Issuing Institution &amp; System
                  </span>
                  <p className="font-body text-xs text-on-surface leading-relaxed">
                    {certification.issuingBody}
                  </p>
                  <p className="font-label-caps text-[11px] text-text-secondary">
                    {certification.verificationAuthority}
                  </p>
                </div>

                {/* Technical Competence */}
                <div className="flex flex-col gap-2">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">
                    Operational Scope
                  </span>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {certification.technicalSummary}
                  </p>
                </div>

                {/* Key Competencies Tags */}
                <div className="flex flex-col gap-2">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">
                    Verified Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {certification.keyCompetencies.map((comp, idx) => (
                      <span
                        key={idx}
                        className="font-label-caps text-[9px] uppercase tracking-wider px-2 py-1 bg-surface-container border border-border-subtle text-on-surface-variant"
                      >
                        ✓ {comp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Footer Nav Controls */}
              <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
                <span className="font-label-caps text-[10px] text-text-secondary uppercase tracking-widest">
                  Verified SISO Credential
                </span>
                
                {hasMultiple && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onPrev}
                      className="px-3 py-1 border border-border-subtle hover:border-tertiary text-on-surface hover:text-tertiary font-nav text-xs transition-colors"
                      aria-label="Previous certificate"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={onNext}
                      className="px-3 py-1 border border-border-subtle hover:border-tertiary text-on-surface hover:text-tertiary font-nav text-xs transition-colors"
                      aria-label="Next certificate"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  )
}
