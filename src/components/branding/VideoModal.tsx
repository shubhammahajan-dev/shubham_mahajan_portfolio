"use client"

import { useEffect, useCallback } from 'react'

interface VideoModalProps {
  videoId: string | null
  title?: string
  brand?: string
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ videoId, title, brand, isOpen, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !videoId) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-5xl bg-surface border border-border-subtle overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-surface-container-low">
          <div className="flex flex-col pr-4">
            {brand && (
              <span className="font-label-caps text-[11px] uppercase tracking-widest text-tertiary">
                {brand}
              </span>
            )}
            <h3 className="font-display text-lg md:text-xl text-on-surface line-clamp-1">
              {title || 'Campaign Video'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-2 text-on-surface-variant hover:text-tertiary transition-colors focus:outline-none focus:ring-1 focus:ring-tertiary rounded"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-surface-container-lowest flex items-center justify-between text-xs text-text-secondary border-t border-border-subtle">
          <span>Direction & Creative Strategy · Shubham Mahajan</span>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-on-surface transition-colors flex items-center gap-1 uppercase tracking-widest font-label-caps text-[10px]"
          >
            Open on YouTube ↗
          </a>
        </div>
      </div>
    </div>
  )
}
