'use client'
import { useState, useEffect } from 'react'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}

const LINKS = [
  { l: 'Work', h: '#portfolio' },
  { l: 'Studio', h: '#about' },
  { l: 'Process', h: '#process' },
  { l: 'Reviews', h: '#reviews' },
  { l: 'Contact', h: '#contact' },
]

function HamLine({ open, scrolled, rotateUp, rotateDown, shrink, hide }) {
  const transform = rotateUp
    ? 'translateY(10px) rotate(45deg)'
    : rotateDown
      ? 'translateY(-10px) rotate(-45deg)'
      : 'none'
  return (
    <span style={{
      display: 'block', height: 1.5, borderRadius: 2,
      background: open ? 'var(--cream)' : (scrolled ? 'var(--ink)' : 'var(--cream)'),
      transition: 'all .4s cubic-bezier(0.16,1,0.3,1)',
      transform, opacity: hide ? 0 : 1, width: shrink ? '60%' : '100%',
    }} />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? '12px 0' : '22px 0',
        transition: 'padding .4s cubic-bezier(0.16,1,0.3,1), background .4s, box-shadow .4s',
        background: scrolled ? 'rgba(242,237,223,.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(200,169,110,.15)' : 'none',
      }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a href="#" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 24, fontWeight: 700, color: open ? 'var(--cream)' : (scrolled ? 'var(--ink)' : 'var(--cream)'), letterSpacing: '-.01em', transition: 'color .3s', zIndex: 60, position: 'relative' }}>
            Kosha<span style={{ color: 'var(--gold)' }}>.</span>
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desk">
            {LINKS.map(({ l, h }) => (
              <a key={h} href={h}
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: scrolled ? 'var(--muted)' : 'rgba(242,237,223,.65)', transition: 'color .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? 'var(--muted)' : 'rgba(242,237,223,.65)' }}
              >{l}</a>
            ))}
            <button
              onClick={() => openWA("Hi Vrushali! I'd like to book a free site visit.")}
              style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '11px 26px', minHeight: 44, background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2, transition: 'transform .3s, background .3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#dab87a' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--gold)' }}
            >Free Visit</button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="mob"
            style={{ width: 44, height: 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, background: 'none', border: 'none', padding: '0 4px', zIndex: 60, position: 'relative' }}
          >
            <HamLine open={open} scrolled={scrolled} rotateUp={open} />
            <HamLine open={open} scrolled={scrolled} hide={open} shrink={!open} />
            <HamLine open={open} scrolled={scrolled} rotateDown={open} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40, background: 'var(--ink)',
        clipPath: open ? 'circle(200% at calc(100% - 42px) 32px)' : 'circle(0% at calc(100% - 42px) 32px)',
        transition: 'clip-path .75s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex', flexDirection: 'column',
        padding: '0 clamp(24px,6vw,64px)', overflow: 'hidden',
      }} aria-hidden={!open}>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: -60, right: -40, fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(220px,40vw,380px)', fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,.03)', userSelect: 'none', letterSpacing: '-.05em' }}>K</span>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, paddingTop: 80 }}>
          {LINKS.map(({ l, h }, i) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              fontFamily: "'Cormorant Garant',serif",
              fontSize: 'clamp(44px,11vw,80px)', fontWeight: 300, lineHeight: 1.08,
              color: 'var(--cream)', letterSpacing: '-.025em',
              display: 'flex', alignItems: 'center', gap: 20,
              padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.05)',
              opacity: open ? 1 : 0,
              transform: open ? 'none' : 'translateX(-24px)',
              transition: 'opacity .55s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.07) + 's, transform .55s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.07) + 's',
            }}>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.18em', color: 'var(--gold)', minWidth: 24, fontFamily: "'Jost',sans-serif" }}>0{i + 1}</span>
              {l}
            </a>
          ))}
        </nav>

        <div style={{ paddingBottom: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)' }}>
          <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Call / WhatsApp</p>
          <a href="tel:+917700071665" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(22px,5vw,32px)', color: 'var(--cream)', fontWeight: 300, display: 'block', marginBottom: 20 }}>+91 77000 71665</a>
          <button
            onClick={() => { setOpen(false); openWA("Hi Vrushali! I'd like to book a free site visit.") }}
            style={{ fontFamily: "'Jost',sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '15px 32px', minHeight: 50, width: '100%', background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2 }}
          >Book Free Site Visit</button>
        </div>
      </div>

      <style>{`
        .desk { display: flex; } .mob { display: none; }
        @media(max-width:767px) { .desk { display: none !important; } .mob { display: flex !important; flex-direction: column; } }
      `}</style>
    </>
  )
}
