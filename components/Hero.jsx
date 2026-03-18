'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef(null)
  const numberRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.12}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const wa = () => {
    window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")}`, '_blank')
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        background: 'var(--ink)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Left column — Typography ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(100px,12vw,160px) 0 clamp(48px,6vw,80px) clamp(24px,5vw,72px)',
        gridColumn: '1 / 2',
      }}>
        {/* Big background number — decorative */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: '50%', left: 0,
            transform: 'translateY(-65%)',
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(200px,28vw,380px)',
            fontWeight: 700, lineHeight: 1,
            color: 'rgba(255,255,255,0.035)',
            letterSpacing: '-0.04em',
            userSelect: 'none',
            transition: 'opacity 1.5s',
            opacity: loaded ? 1 : 0,
          }}
        >50+</span>

        {/* Label */}
        <div
          className="section-label"
          style={{
            marginBottom: 28,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}
        >
          Interior Studio · Pune
        </div>

        {/* Headline — large editorial serif */}
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(52px,7.5vw,108px)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: 'var(--cream)',
            maxWidth: '7ch',
            marginBottom: 40,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s',
          }}
        >
          Homes <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>made</em>{' '}
          extraordinary.
        </h1>

        {/* CTA row */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s',
          }}
        >
          <button
            onClick={wa}
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '16px 36px',
              background: 'var(--gold)', color: 'var(--ink)',
              border: 'none', borderRadius: 2,
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#dbb87a' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--gold)' }}
          >
            Book Free Visit
          </button>
          <a
            href="#portfolio"
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 12, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(245,239,230,0.55)',
              display: 'flex', alignItems: 'center', gap: 10,
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,239,230,0.55)' }}
          >
            View Work
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
              <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 'clamp(24px,5vw,72px)', right: 0,
            height: 1, background: 'rgba(245,239,230,0.08)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── Right column — Image ── */}
      <div
        style={{
          gridColumn: '2 / 3',
          position: 'relative',
          overflow: 'hidden',
          clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        {/* Gradient placeholder while image loads */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, #2a2318 0%, #1a1510 100%)',
        }} aria-hidden="true" />

        <div ref={imageRef} style={{ position: 'absolute', inset: '-8%', transform: 'scale(1.08)' }}>
          <Image
            src="/images/hero.webp"
            alt="Beautifully designed interior by Kosha Interiors Pune"
            fill priority quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="50vw"
          />
        </div>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,13,13,0.4) 0%, transparent 60%)' }} aria-hidden="true" />

        {/* Floating info card */}
        <div
          style={{
            position: 'absolute', bottom: 'clamp(28px,5vw,56px)', right: 'clamp(20px,4vw,40px)',
            background: 'rgba(245,239,230,0.92)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            padding: '20px 24px',
            minWidth: 180,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(16px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.8s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.8s',
          }}
        >
          <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--ff-display)', fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
            4.9 / 5.0
          </p>
          <p style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 2, fontWeight: 600 }}>
            18 Google Reviews
          </p>
        </div>
      </div>

      {/* ── Mobile layout override ── */}
      <style>{`
        @media (max-width: 767px) {
          #home {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            min-height: 100svh !important;
          }
          #home > div:first-child {
            grid-column: 1 / 2 !important;
            padding: 120px 24px 48px !important;
          }
          #home > div:last-child {
            grid-column: 1 / 2 !important;
            clip-path: none !important;
            height: 55vw !important;
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  )
}
