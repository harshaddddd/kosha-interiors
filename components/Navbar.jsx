'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Our Work',    href: '#portfolio' },
  { label: 'Services',    href: '#services'  },
  { label: 'About',       href: '#about'     },
  { label: 'Process',     href: '#process'   },
  { label: 'Reviews',     href: '#reviews'   },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Vrushali! I'd like to book a free site visit for my home in Pune.")
    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    // GTM event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: 'navbar' })
    }
  }

  const handleCall = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'call_click', location: 'navbar' })
    }
  }

  return (
    <>
      {/* ── Main Navbar ──────────────────────────────────────── */}
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/95 backdrop-blur-md shadow-[0_2px_20px_rgba(44,62,56,0.08)] py-3'
            : 'bg-transparent py-5',
        ].join(' ')}
        role="banner"
      >
        <div className="container mx-auto px-5 md:px-10 flex items-center justify-between gap-6">

          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-bold tracking-tight text-forest flex items-center gap-2"
            aria-label="Kosha Interiors Home"
          >
            <span
              className={`transition-colors duration-300 ${scrolled ? 'text-forest' : 'text-white'}`}
            >
              Kosha
            </span>
            <span className="text-accent">Interiors</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={[
                  'text-sm font-medium transition-colors duration-200 relative group',
                  scrolled ? 'text-muted hover:text-forest' : 'text-white/80 hover:text-white',
                ].join(' ')}
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917700071665"
              onClick={handleCall}
              className={[
                'btn btn-outline text-sm py-2.5 px-5',
                scrolled ? '' : 'border-white/30 text-white hover:bg-white/10 hover:border-white',
              ].join(' ')}
              aria-label="Call Kosha Interiors"
            >
              <PhoneIcon />
              Call Us
            </a>
            <button
              onClick={handleWhatsApp}
              className="btn btn-primary text-sm py-2.5 px-5"
              aria-label="WhatsApp Kosha Interiors"
            >
              <WhatsAppIcon />
              Free Consultation
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                className={[
                  'block w-[22px] h-[2px] rounded-full transition-all duration-300',
                  scrolled ? 'bg-forest' : 'bg-white',
                ].join(' ')}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ───────────────────────────────── */}
      <div
        className={[
          'fixed inset-0 z-[60] bg-bg flex flex-col transition-all duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-6 text-3xl text-forest leading-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>

        {/* Logo repeat */}
        <div className="px-6 pt-6">
          <span className="font-serif text-xl font-bold text-forest">
            Kosha <span className="text-accent">Interiors</span>
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-col items-start px-6 pt-12 gap-8 flex-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl font-semibold text-forest hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div className="px-6 pb-10 flex flex-col gap-3 border-t border-border pt-6">
          <button
            onClick={() => { setMenuOpen(false); handleWhatsApp() }}
            className="btn btn-primary w-full justify-center text-base"
          >
            <WhatsAppIcon />
            Book Free Site Visit
          </button>
          <a
            href="tel:+917700071665"
            onClick={() => { setMenuOpen(false); handleCall() }}
            className="btn btn-outline w-full justify-center text-base"
          >
            <PhoneIcon />
            Call +91 77000 71665
          </a>
        </div>
      </div>
    </>
  )
}

/* ── Inline SVG Icons ────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
