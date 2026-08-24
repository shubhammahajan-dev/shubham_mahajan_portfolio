import { 
  Clapperboard, 
  Sparkles, 
  Layers, 
  Sliders, 
  Users, 
  Megaphone 
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

interface PracticeArea {
  id: string
  title: string
  description: string
  icon: typeof Clapperboard
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'production',
    title: 'Production',
    description: 'From planning to execution, bringing creative projects to life.',
    icon: Clapperboard
  },
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    description: 'Shaping ideas into clear, compelling visual experiences.',
    icon: Sparkles
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    description: 'Building visual identities that communicate and connect.',
    icon: Layers
  },
  {
    id: 'post-production',
    title: 'Post-Production',
    description: 'Refining stories through editing, sound, colour, and finishing.',
    icon: Sliders
  },
  {
    id: 'talent-management',
    title: 'Talent Management',
    description: 'Coordinating talent, teams, and creative collaborations.',
    icon: Users
  },
  {
    id: 'media-press',
    title: 'Media & Press',
    description: 'Creating visibility through media, press, and strategic communication.',
    icon: Megaphone
  }
]

export function AreasOfPractice() {
  return (
    <section className="w-full py-section-mobile md:py-section-desktop border-t border-border-subtle bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col gap-3 mb-10 md:mb-16">
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest border-b border-border-subtle pb-2 w-max">
              Capabilities &amp; Scope
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface">
              Areas of Practice
            </h2>
          </div>
        </FadeIn>

        {/* 6-Pillar Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <FadeIn key={area.id} delay={index * 0.06}>
                <div className="group relative h-full flex flex-col justify-between p-6 sm:p-8 bg-surface-container border border-border-subtle hover:border-tertiary/60 transition-all duration-300">
                  <div>
                    {/* Icon Accent Badge */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-none bg-surface-container-high border border-border-subtle text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-surface-container-lowest group-hover:border-tertiary transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl text-on-surface mb-3 group-hover:text-tertiary transition-colors duration-300">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Minimal bottom accent indicator */}
                  <div className="w-6 h-[1px] bg-border-subtle group-hover:w-12 group-hover:bg-tertiary mt-6 transition-all duration-300" />
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
