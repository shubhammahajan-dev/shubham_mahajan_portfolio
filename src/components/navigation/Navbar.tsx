'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Films', path: '/films' },
    { name: 'Events', path: '/events' },
    { name: 'Documentaries', path: '/documentary' },
    { name: 'Branding', path: '/branding' },
    { name: 'Acknowledgments', path: '/acknowledgments' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-[80px] transition-all duration-300 ease-in-out flex items-center ${
          isScrolled ? 'bg-nav-overlay backdrop-blur-[18px] border-b border-border-subtle' : 'bg-gradient-to-b from-background via-background/80 to-transparent'
        }`}
      >
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          <Link href="/" className="font-nav text-nav uppercase tracking-[0.12em] text-on-surface">
            Shubham Mahajan
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-nav text-nav uppercase tracking-[0.12em] py-2 transition-colors ${
                    isActive
                      ? 'text-primary border-b-2 border-tertiary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Nav Button (4-line rule) */}
          <button
            className="xl:hidden flex flex-col gap-[4px] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[24px] h-[1px] bg-on-surface" />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-[100] w-full sm:w-[400px] bg-surface-container-lowest border-l border-border-subtle flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="h-[80px] flex items-center justify-between px-8 border-b border-border-subtle shrink-0">
                <span className="font-nav text-nav uppercase tracking-[0.12em] text-on-surface">Menu</span>
                <button
                  className="p-2 -mr-2 text-on-surface hover:text-tertiary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <div className="font-body text-[28px] font-light leading-none">✕</div>
                </button>
              </div>

              {/* Drawer Body (Navigation) */}
              <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between w-full pb-4 border-b border-border-subtle/50 hover:border-tertiary transition-colors"
                    >
                      <span className="font-display text-[28px] text-on-surface group-hover:text-tertiary transition-colors">
                        {link.name}
                      </span>
                      <span className="text-tertiary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="shrink-0 px-8 py-8 border-t border-border-subtle bg-surface-container/30">
                <div className="flex flex-col gap-4">
                  <span className="font-label-caps text-[10px] uppercase tracking-widest text-text-secondary">Get in touch</span>
                  <a href="mailto:spmahajan229@gmail.com" className="font-nav text-[12px] uppercase tracking-wider text-on-surface hover:text-tertiary transition-colors">
                    spmahajan229@gmail.com
                  </a>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    {[
                      { name: 'Instagram', url: 'https://www.instagram.com/shubhiedoobie/' },
                      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-mahajan-462b20254/' },
                      { name: 'IMDb', url: 'https://www.imdb.com/name/nm15325237/' },
                      { name: 'YouTube', url: 'https://www.youtube.com/@shubhiedoobie' },
                    ].map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-label-caps text-[10px] text-text-secondary hover:text-tertiary transition-colors uppercase tracking-wider"
                      >
                        {social.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
