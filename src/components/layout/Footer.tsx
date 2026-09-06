const socialLinks = [
  { name: 'YouTube', url: 'https://www.youtube.com/@shubhiedoobie' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-mahajan-462b20254/' },
  { name: 'IMDb', url: 'https://www.imdb.com/name/nm15325237/' },
  { name: 'Instagram', url: 'https://www.instagram.com/shubhiedoobie/' }
]

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-subtle py-12 md:py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-8">
        
        {/* Top Row: Brand & Disciplines */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left pb-8 border-b border-border-subtle/50">
          <div>
            <span className="font-nav uppercase tracking-[0.14em] text-on-surface font-medium text-sm md:text-base">
              Shubham Mahajan
            </span>
            <span className="font-label-caps text-[11px] uppercase tracking-widest text-text-secondary block mt-1">
              Films &middot; Stories &middot; People &middot; Experiences
            </span>
          </div>

          <div className="font-nav uppercase tracking-[0.12em] text-[#E5C992] text-xs md:text-sm text-center md:text-right">
            Filmmaking &middot; Direction &middot; Production &middot; Operations &middot; Events
          </div>
        </div>

        {/* Bottom Row: Socials & Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-xs uppercase tracking-widest text-text-secondary hover:text-on-surface transition-colors"
              >
                {s.name} ↗
              </a>
            ))}
          </div>

          <a
            href="https://www.akashgurnale.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-nav text-[11px] uppercase tracking-[0.12em] text-text-secondary opacity-70 hover:opacity-100 hover:text-tertiary transition-all"
          >
            Created by Akash Gurnale ↗
          </a>
        </div>

      </div>
    </footer>
  )
}
