'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.1}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const wa = () => {
    window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")}`, '_blank')
  }

  return (
    <section id="home" style={{ background: 'var(--ink)', position: 'relative', overflow: 'hidden', minHeight: '100svh' }}>

      {/* ── Background image (full bleed on mobile, right-half on desktop) ── */}
      <div
        ref={imageRef}
        style={{
          position: 'absolute', inset: 0,
          transform: 'scale(1.08)',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/hero.webp"
          alt="Beautifully designed interior by Kosha Interiors Pune"
          fill priority quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
      </div>

      {/* Gradient — stronger on mobile for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.65) 55%, rgba(13,13,13,0.4) 100%)',
        zIndex: 1,
      }} aria-hidden="true" />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px,12vw,160px) clamp(20px,5vw,72px) clamp(40px,6vw,80px)',
        maxWidth: 860,
      }}>

        {/* Label */}
        <div className="section-label" style={{
          marginBottom: 20, color: 'var(--gold)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(10px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s',
        }}>
          Interior Studio · Pune
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(44px,8vw,108px)',
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: 'var(--cream)',
          marginBottom: 'clamp(24px,4vw,44px)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(28px)',
          transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }}>
          Homes <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>made</em>{' '}
          extraordinary.
        </h1>

        {/* Sub-copy */}
        <p style={{
          fontFamily: 'var(--ff-body)',
          fontSize: 'clamp(14px,1.4vw,17px)',
          color: 'rgba(245,239,230,0.65)',
          lineHeight: 1.75,
          maxWidth: 480,
          marginBottom: 'clamp(28px,4vw,44px)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(16px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s',
        }}>
          Pune's highest-rated woman-owned studio. We handle the design, contractors, and chaos — so you don't have to.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(10px,2vw,20px)',
          alignItems: 'center',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'none' : 'translateY(14px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.58s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.58s',
        }}>
          <button
            onClick={wa}
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '15px clamp(24px,3vw,36px)',
              background: 'var(--gold)', color: 'var(--ink)',
              border: 'none', borderRadius: 2,
              minHeight: 48,
              transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#dbb87a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'none' }}
          >
            Book Free Site Visit
          </button>
          <a
            href="#portfolio"
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 12, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(245,239,230,0.6)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              minHeight: 48,
              borderBottom: '1px solid rgba(245,239,230,0.2)',
              paddingBottom: 2,
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,230,0.6)'}
          >
            View Our Work
            <svg width="16" height="6" viewBox="0 0 16 6" fill="none" aria-hidden="true">
              <path d="M0 3h14M11 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust badge */}
        <div style={{
          marginTop: 'clamp(28px,5vw,52px)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 18px',
          borderRadius: 40,
          background: 'rgba(245,239,230,0.08)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(245,239,230,0.12)',
          width: 'fit-content',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s',
        }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--cream)' }}>4.9</span>
          <span style={{ fontSize: 11, color: 'rgba(245,239,230,0.5)', letterSpacing: '0.06em' }}>· 18 Google Reviews</span>
        </div>
      </div>
    </section>
  )
}
