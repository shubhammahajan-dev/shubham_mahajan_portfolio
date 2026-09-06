'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PipelineStep {
  id: string
  no: string
  title: string
  category: string
  headline: string
  description: string
  deliverables: string[]
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'insight',
    no: '01',
    title: 'INSIGHT',
    category: 'Strategic Discovery',
    headline: 'Uncovering the authentic human and commercial tension',
    description: 'Data-driven cultural observation, audience psychology, and brand whitespace identification, uncovering the emotional truths and behavioral triggers that convert viewers into loyal brand advocates.',
    deliverables: [
      'Cultural White Space Mapping',
      'Audience Psychographics & Triggers',
      'Competitor Narrative Audit',
      'Core Value Proposition Definition'
    ]
  },
  {
    id: 'idea',
    no: '02',
    title: 'IDEA',
    category: 'Creative Ideation',
    headline: 'Crafting the single organizing conceptual premise',
    description: 'Developing high-concept creative hooks that cut through noise in crowded media landscapes, translating strategic discovery into bold creative premises that captivate from the first three seconds.',
    deliverables: [
      'Core Campaign Hook & Angle',
      'Creative Treatment & Pitch Deck',
      'Visual Mood & Tone Architecture',
      'Multi-Platform Angle Variations'
    ]
  },
  {
    id: 'story',
    no: '03',
    title: 'STORY',
    category: 'Narrative Architecture',
    headline: 'Structuring retention and emotional pacing',
    description: 'Crafting narrative arcs, cinematic scripts, character motivations, and shot-by-shot storyboards. Every second is designed for maximum emotional resonance, brand integration, and sustained audience retention.',
    deliverables: [
      'Full Cinematic Treatment Scripts',
      'Shot-by-Shot Storyboards',
      'Dialogue & Voiceover Direction',
      'Audio & Visual Pacing Maps'
    ]
  },
  {
    id: 'production',
    no: '04',
    title: 'PRODUCTION',
    category: 'Cinematic Execution',
    headline: 'High-fidelity execution with top-tier cinematography',
    description: 'Executing the vision with top-tier camera packages (ARRI / Canon Cinema), professional lighting crews, meticulous production design, and precise on-set directorial execution.',
    deliverables: [
      'Principal Photography Direction',
      'Lighting, Grip & Camera Rigging',
      'Set Architecture & Styling',
      'Multi-Format Framing (16:9, 9:16, 4:5)'
    ]
  },
  {
    id: 'distribution',
    no: '05',
    title: 'DISTRIBUTION',
    category: 'Go-To-Market Strategy',
    headline: 'Engineered for high conversion across digital & broadcast',
    description: 'Tailoring assets across organic and paid channels—including YouTube, Meta, Connected TV, and retail displays. Strategic format adaptation ensures native performance on every platform.',
    deliverables: [
      'Multi-Cut Asset Distribution Packs',
      'Performance Ad Cutdowns (6s, 15s, 30s, 60s)',
      'High-CTR Thumbnail Architecture',
      'Paid Media Creative Strategy'
    ]
  },
  {
    id: 'performance',
    no: '06',
    title: 'PERFORMANCE',
    category: 'Conversion Optimization',
    headline: 'Tracking ROI, ROAS, and retention metrics',
    description: 'Analyzing retention curves, CTR, CPC, CPA, and ROAS, extracting qualitative and quantitative insights from audience behavior to optimize active campaigns and inform future creative iterations.',
    deliverables: [
      'Creative Retention Analysis',
      'Benchmark Metric Tracking (CPM, CPA, ROAS)',
      'Iterative Creative Scaling',
      'Campaign Post-Mortem & Learnings'
    ]
  }
]

export function CreativePipelineTabs() {
  const [activeTab, setActiveTab] = useState<string>(pipelineSteps[0].id)

  const currentStep = pipelineSteps.find(s => s.id === activeTab) || pipelineSteps[0]

  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24 border-t border-border-subtle">
      
      {/* Section Header */}
      <div className="mb-16 pb-6 border-b border-border-subtle">
        <h2 className="font-headline-lg text-display-mobile md:text-headline-lg text-on-surface">
          Creative Pipeline
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-gutter-desktop items-start">
        
        {/* Process Flow with Dotted Continuity Line (Left Sidebar) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 relative mb-8 md:mb-0">
          <div className="flex flex-row md:flex-col justify-start overflow-x-auto md:overflow-visible pb-3 md:pb-0 gap-3 md:gap-0 relative select-none md:sticky md:top-28 custom-scrollbar">
            
            {/* Desktop Vertical Dotted Line connecting the steps */}
            <div className="hidden md:block absolute left-[3.5px] top-2 bottom-3 w-px border-l border-dashed border-border-subtle z-0" />

            {pipelineSteps.map((step, idx) => {
              const isActive = activeTab === step.id
              const isLast = idx === pipelineSteps.length - 1

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`relative z-10 flex items-center gap-2.5 md:gap-4 text-left transition-all duration-300 group cursor-pointer flex-shrink-0 px-3.5 py-2 md:p-0 border md:border-0 rounded-none ${
                    isActive 
                      ? 'bg-surface-container-low border-tertiary md:bg-transparent' 
                      : 'bg-surface border-border-subtle hover:border-text-secondary md:bg-transparent'
                  } ${!isLast ? 'md:mb-10' : ''}`}
                >
                  {/* Square indicator dot */}
                  <div 
                    className={`w-2 h-2 rounded-none shrink-0 transition-all duration-300 ${
                      isActive 
                        ? 'bg-tertiary shadow-[0_0_10px_rgba(200,169,110,0.6)] scale-110' 
                        : 'bg-border-subtle group-hover:bg-text-secondary'
                    }`} 
                  />
                  
                  {/* Step Title in Label-Caps */}
                  <span 
                    className={`font-label-caps text-xs md:text-label-caps tracking-[0.15em] transition-colors duration-300 ${
                      isActive 
                        ? 'text-on-surface font-semibold' 
                        : 'text-text-secondary group-hover:text-on-surface/80'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Spacious RHS Description Panel */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 border-t md:border-t-0 md:border-l border-border-subtle md:pl-14 pt-8 md:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex flex-col gap-8"
            >
              {/* In-depth Narrative */}
              <p className="font-body text-body text-on-surface-variant max-w-reading-max text-base md:text-lg leading-relaxed">
                {currentStep.description}
              </p>

              {/* Deliverables / Scope Grid */}
              <div className="border-t border-border-subtle pt-8">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.15em] text-text-secondary mb-6 block">
                  Key Scope &amp; Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-border-subtle">
                  {currentStep.deliverables.map((item, i) => (
                    <div 
                      key={i} 
                      className="p-5 md:p-6 border-b border-r border-border-subtle bg-surface hover:bg-surface-container transition-colors flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-tertiary rounded-none shrink-0" />
                      <span className="font-nav text-xs md:text-nav uppercase tracking-wider text-on-surface leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  )
}
