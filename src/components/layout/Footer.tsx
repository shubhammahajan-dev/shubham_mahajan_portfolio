import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-subtle py-intra-section">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-gutter-desktop">
        
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-nav uppercase tracking-[0.12em] text-on-surface">
            Shubham Mahajan
          </span>
          <span className="hidden sm:inline text-border-subtle">|</span>
          <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary">
            Films &middot; People &middot; Experiences &middot; Stories
          </span>
        </div>

        {/* Centre */}
        <div className="font-nav uppercase tracking-[0.12em] text-center flex items-center justify-center">
          <Link href="https://www.akashgurnale.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-text-secondary opacity-60 hover:opacity-100 transition-opacity">
            Created by Akash Gurnale
          </Link>
        </div>

        {/* Right */}
        <div className="font-nav uppercase tracking-[0.12em] text-text-secondary text-center lg:text-right text-xs">
          Filmmaker &middot; Creative Strategist &middot; Production &amp; Events
        </div>

      </div>
    </footer>
  )
}
