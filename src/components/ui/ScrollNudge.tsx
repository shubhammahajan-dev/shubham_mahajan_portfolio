'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollNudge() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Initial check with brief delay for luxury entrance
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const canScroll = document.documentElement.scrollHeight > window.innerHeight + 80
        if (window.scrollY < 40 && canScroll) {
          setIsVisible(true)
        }
      }
    }, 1100)

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsVisible(false)
      } else {
        const canScroll = document.documentElement.scrollHeight > window.innerHeight + 80
        if (canScroll) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to explore"
          className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 group cursor-pointer pointer-events-auto select-none bg-transparent border-0 p-0 m-0"
        >
          <span className="font-label-caps text-[9px] uppercase tracking-[0.25em] text-text-secondary/70 group-hover:text-tertiary transition-colors duration-300">
            Scroll
          </span>

          <div className="w-[1px] h-[30px] bg-white/15 relative overflow-hidden">
            <motion.div
              className="w-full h-3 bg-gradient-to-b from-transparent via-[#E5C992] to-transparent"
              animate={{ y: [-14, 30] }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
              }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
