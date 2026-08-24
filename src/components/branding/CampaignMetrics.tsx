'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function CampaignMetrics() {
  return (
    <FadeIn>
      <section className="w-full bg-surface-container-low py-16 md:py-24 border-t border-border-subtle">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          {/* Section Header */}
          <div className="mb-12 md:mb-16 pb-4 border-b border-border-subtle">
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-headline-md text-on-surface mt-2">
              Campaign Scale &amp; Performance Metrics
            </h2>
          </div>
          
          {/* 3 Primary Headline Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-gutter-desktop mb-12 md:mb-16">
            <div className="border-l border-border-subtle pl-6 py-2">
              <div className="font-metric-hero text-5xl sm:text-6xl md:text-[80px] leading-none font-light text-on-surface mb-3">
                <AnimatedCounter value={900} suffix="M+" />
              </div>
              <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-text-secondary">
                Total Views Across Campaigns
              </p>
            </div>
            
            <div className="border-l border-border-subtle pl-6 py-2">
              <div className="font-metric-hero text-5xl sm:text-6xl md:text-[80px] leading-none font-light text-on-surface mb-3">
                <AnimatedCounter value={500} suffix="K+" />
              </div>
              <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-text-secondary">
                YouTube Subscribers Built from Zero
              </p>
            </div>
            
            <div className="border-l border-border-subtle pl-6 py-2">
              <div className="font-metric-hero text-5xl sm:text-6xl md:text-[80px] leading-none font-light text-on-surface mb-3">
                <AnimatedCounter value={86} prefix="₹" suffix=" Cr" />
              </div>
              <p className="font-nav text-xs md:text-nav uppercase tracking-[0.12em] text-text-secondary">
                Revenue from Advertising Campaign
              </p>
            </div>
          </div>
          
          {/* Secondary Unit Economics Grid (5-column on desktop, 3-col on tablet, 2-col on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-border-subtle bg-surface">
            <div className="p-5 sm:p-6 border-r border-b border-border-subtle">
              <p className="font-nav text-[11px] md:text-nav uppercase tracking-[0.12em] text-text-secondary mb-1">
                Benchmark CPM
              </p>
              <p className="font-headline-md text-2xl sm:text-3xl text-on-surface">
                <AnimatedCounter value={42} prefix="₹" />
              </p>
            </div>

            <div className="p-5 sm:p-6 border-r border-b border-border-subtle">
              <p className="font-nav text-[11px] md:text-nav uppercase tracking-[0.12em] text-text-secondary mb-1">
                Benchmark CTR
              </p>
              <p className="font-headline-md text-2xl sm:text-3xl text-on-surface">
                <AnimatedCounter value={2.8} suffix="%" decimals={1} />
              </p>
            </div>

            <div className="p-5 sm:p-6 border-r border-b border-border-subtle">
              <p className="font-nav text-[11px] md:text-nav uppercase tracking-[0.12em] text-text-secondary mb-1">
                Benchmark CPC
              </p>
              <p className="font-headline-md text-2xl sm:text-3xl text-on-surface">
                <AnimatedCounter value={1.5} prefix="₹" decimals={2} />
              </p>
            </div>

            <div className="p-5 sm:p-6 border-r border-b border-border-subtle">
              <p className="font-nav text-[11px] md:text-nav uppercase tracking-[0.12em] text-text-secondary mb-1">
                Benchmark CPA
              </p>
              <p className="font-headline-md text-2xl sm:text-3xl text-on-surface">
                <AnimatedCounter value={118} prefix="₹" />
              </p>
            </div>

            <div className="p-5 sm:p-6 border-r border-b border-border-subtle col-span-2 sm:col-span-1">
              <p className="font-nav text-[11px] md:text-nav uppercase tracking-[0.12em] text-text-secondary mb-1">
                Campaign ROAS
              </p>
              <p className="font-headline-md text-2xl sm:text-3xl text-on-surface">
                <AnimatedCounter value={4.6} suffix="x" decimals={1} />
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </FadeIn>
  )
}
