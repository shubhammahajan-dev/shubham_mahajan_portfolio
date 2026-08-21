'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2.2,
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Smooth exponential ease-out
        onUpdate: (latest) => {
          if (ref.current) {
            const formatted = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
            ref.current.textContent = `${prefix}${formatted}${suffix}`
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value, duration, prefix, suffix, decimals, motionValue])

  const initialFormatted = `${prefix}${decimals > 0 ? (0).toFixed(decimals) : '0'}${suffix}`

  return (
    <span ref={ref} className={className}>
      {initialFormatted}
    </span>
  )
}
