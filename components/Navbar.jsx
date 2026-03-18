'use client'
import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Work',    href: '#portfolio' },
  { label: 'Studio',  href: '#about'     },
  { label: 'Process', href: '#process'   },
  { label: 'Contact', href: '#contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const wa = () => {
    const m = encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")
    window.open(`https://wa.me/917700071665?text=${m}`, '_blank')
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'padding 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s, box-shadow 0.4s',
        background: scrolled ? 'rgba(245,239,230,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(201,169,110,0.15)' : 'none',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 clamp(20px,5vw,60px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <a href="#" style={{ fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 600, color: scrolled ? 'var(--ink)' : 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1, transition: 'color 0.3s', zIndex: 60 }}>
            Kosha<span style={{ color: 'var(--gold)' }}>.</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href} style={{
                fontFamily: 'var(--ff-body)', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: scrolled ? 'var(--muted)' : 'rgba(245,239,230,0.7)',
                transition: 'color 0.2s', position: 'relative',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(245,239,230,0.7)'}
              >{label}</a>
            ))}
            <button onClick={wa} style={{
              fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '11px 24px', minHeight: 44,
              background: 'var(--gold)', color: 'var(--ink)',
              border: 'none', borderRadius: 2,
              transition: 'background 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#dbb87a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'none' }}
            >Free Visit</button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="show-mobile"
            style={{
              width: 44, height: 44, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', gap: 5, background: 'none', border: 'none',
              padding: '0 4px', zIndex: 60,
            }}
          >
            {[
              { transform: open ? 'translateY(10px) rotate(45deg)' : 'none' },
              { opacity: open ? 0 : 1, transform: open ? 'translateX(-6px)' : 'none', width: open ? '100%' : '65%' },
              { transform: open ? 'translateY(-10px) rotate(-45deg)' : 'none' },
            ].map((style, i) => (
              <span key={i} style={{
                display: 'block', height: 1.5,
                background: open ? 'var(--cream)' : (scrolled ? 'var(--ink)' : 'var(--cream)'),
                borderRadius: 2,
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                ...style,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: 'var(--ink)',
        transition: 'clip-path 0.65s cubic-bezier(0.16,1,0.3,1)',
        clipPath: open ? 'circle(150% at calc(100% - 42px) 32px)' : 'circle(0% at calc(100% - 42px) 32px)',
        display: 'flex', flexDirection: 'column',
        padding: '0 clamp(24px,6vw,56px)',
        overflow: 'hidden',
      }} aria-hidden={!open}>

        {/* Big decorative letter */}
        <span style={{
          position: 'absolute', bottom: -40, right: -20,
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(200px,40vw,340px)',
          fontWeight: 700, lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }} aria-hidden="true">K</span>

        {/* Nav links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8, paddingTop: 80 }}>
          {LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(40px,10vw,72px)',
                fontWeight: 300, lineHeight: 1.1,
                color: 'var(--cream)',
                letterSpacing: '-0.02em',
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s`,
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-20px)',
              }}
            >
              <span style={{ fontSize: 10, fontFamily: 'var(--ff-body)', color: 'var(--gold)', letterSpacing: '0.16em', fontWeight: 700, minWidth: 22 }}>0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom contact */}
        <div style={{ paddingBottom: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Call / WhatsApp</p>
          <a href="tel:+917700071665" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(20px,5vw,28px)', color: 'var(--cream)', fontWeight: 300, display: 'block', marginBottom: 20 }}>+91 77000 71665</a>
          <button onClick={() => { setOpen(false); wa() }} style={{
            fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '14px 32px', minHeight: 48, width: '100%',
            background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2,
          }}>Book Free Site Visit</button>
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 767px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </>
  )
}
