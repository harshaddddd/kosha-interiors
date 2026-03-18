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
  const [hoverIdx, setHoverIdx] = useState(null)

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
      {/* ── Nav bar ── */}
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          padding: scrolled ? '14px 0' : '24px 0',
          transition: 'padding 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s, backdrop-filter 0.4s',
          background: scrolled ? 'rgba(245,239,230,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" style={{ fontFamily: 'var(--ff-display)', fontSize: 22, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1 }}>
            Kosha<span style={{ color: 'var(--gold)' }}>.</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="hidden md:flex">
            {LINKS.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{
                  fontFamily: 'var(--ff-body)',
                  fontSize: 13, fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: hoverIdx === i ? 'var(--gold)' : 'var(--muted)',
                  transition: 'color 0.25s',
                  position: 'relative',
                }}
              >
                {label}
                <span style={{
                  position: 'absolute', bottom: -2, left: 0, right: 0, height: 1,
                  background: 'var(--gold)',
                  transform: hoverIdx === i ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                }} />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={wa}
            className="hidden md:flex"
            style={{
              fontFamily: 'var(--ff-body)',
              fontSize: 12, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '12px 28px',
              background: 'var(--ink)',
              color: 'var(--cream)',
              border: 'none',
              borderRadius: 2,
              transition: 'background 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Free Visit
          </button>

          {/* Hamburger — morphing lines */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden"
            style={{ width: 44, height: 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, background: 'none', border: 'none', padding: 8 }}
          >
            <span style={{
              display: 'block', height: 1.5, background: 'var(--ink)',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
              transform: open ? 'translateY(7.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', height: 1.5, background: 'var(--ink)', width: '70%',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
              opacity: open ? 0 : 1,
              transform: open ? 'translateX(-8px)' : 'none',
            }} />
            <span style={{
              display: 'block', height: 1.5, background: 'var(--ink)',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
              transform: open ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'var(--ink)',
          transition: 'clip-path 0.7s cubic-bezier(0.16,1,0.3,1)',
          clipPath: open ? 'circle(150% at calc(100% - 40px) 40px)' : 'circle(0% at calc(100% - 40px) 40px)',
          display: 'flex', flexDirection: 'column',
          padding: 'clamp(100px,18vw,140px) clamp(28px,6vw,60px) 40px',
          overflow: 'hidden',
        }}
        aria-hidden={!open}
      >
        {/* Big editorial number */}
        <span style={{
          position: 'absolute', bottom: -40, right: -20,
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(180px,30vw,320px)',
          fontWeight: 700, lineHeight: 1,
          color: 'rgba(255,255,255,0.03)',
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }} aria-hidden="true">K</span>

        {/* Nav links — editorial large */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(16px,4vw,28px)' }}>
          {LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(42px,8vw,80px)',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--cream)',
                letterSpacing: '-0.02em',
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'color 0.3s, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: open ? `${i * 0.06}s` : '0s',
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span style={{ fontSize: 12, fontFamily: 'var(--ff-body)', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 700, minWidth: 24 }}>0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>

        {/* Bottom contact row */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6, fontWeight: 700 }}>Call / WhatsApp</p>
            <a href="tel:+917700071665" style={{ fontFamily: 'var(--ff-display)', fontSize: 22, color: 'var(--cream)', fontWeight: 400 }}>+91 77000 71665</a>
          </div>
          <button
            onClick={() => { setOpen(false); wa() }}
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '14px 32px', background: 'var(--gold)', color: 'var(--ink)',
              border: 'none', borderRadius: 2,
            }}
          >
            Book Free Visit
          </button>
        </div>
      </div>
    </>
  )
}
