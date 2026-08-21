'use client'
import { useState } from 'react'
import Image from 'next/image'

export function VideoEmbed({ 
  thumbnailSrc, 
  videoUrl, 
  label = "Watch Video" 
}: { 
  thumbnailSrc: string
  videoUrl?: string
  label?: string 
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="w-full flex flex-col gap-4">
      {label && (
        <span className="font-label-caps text-label-caps text-text-secondary border-b border-border-subtle pb-2 w-max">
          {label}
        </span>
      )}
      <div 
        className="relative w-full aspect-video bg-surface-container border border-border-subtle cursor-pointer group"
        onClick={() => {
          if (videoUrl) setIsPlaying(true)
        }}
      >
        {!isPlaying ? (
          <>
            <Image 
              src={thumbnailSrc} 
              alt="Video thumbnail" 
              fill 
              sizes="100vw"
              className="object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-surface-container-lowest" 
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-20 h-20 border border-border-subtle bg-surface/80 backdrop-blur-md flex items-center justify-center group-hover:border-tertiary group-hover:text-tertiary transition-colors duration-300">
                {/* Play icon (Material Symbols equivalent) */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe 
            src={videoUrl} 
            title="Video player"
            className="w-full h-full" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen 
          />
        )}
      </div>
    </div>
  )
}
