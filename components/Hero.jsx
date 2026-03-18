'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const sectionRef = useRef(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const handleScroll = () => {
      const scrollY = window.scrollY
      const bg = el.querySelector('.hero-bg-img')
      if (bg) bg.style.transform = `scale(1.06) translateY(${scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Vrushali! I'd like to book a free site visit for my home in Pune.")
    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: 'hero' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-forest"
      aria-label="Hero — Kosha Interiors"
    >
      {/* ── Background Image ──────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {/*
          Replace src with a real high-quality interior photo (WebP, wide-angle,
          natural light living room). Hosted in /public/images/hero.webp
        */}
        <div
          className="hero-bg-img absolute inset-0 will-change-transform"
          style={{ transform: 'scale(1.06)' }}
        >
          <Image
            src="/images/hero.webp"
            alt="Beautifully designed living room by Kosha Interiors, Pune"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── Gradient Overlays ─────────────────────────────── */}
      {/* Dark vignette for text legibility */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(44,62,56,0.82) 0%, rgba(44,62,56,0.55) 55%, rgba(212,163,115,0.18) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom fade for smooth section transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF9F6)' }}
        aria-hidden="true"
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-20 container mx-auto px-5 md:px-10 py-32 flex flex-col items-center text-center md:items-start md:text-left max-w-[800px] md:ml-0">

        {/* Trust badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
          style={{ animationDelay: '0s' }}
        >
          <StarRow />
          <span>4.9 ★ · Pune's Highest-Rated Interior Studio</span>
        </div>

        {/* Headline */}
        <h1
          className="text-display text-white mb-5 max-w-[700px]"
          style={{
            fontFamily: 'var(--ff-serif)',
            fontSize: 'clamp(36px,5.5vw,68px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Beautiful Homes,{' '}
          <em className="not-italic" style={{ color: '#D4A373' }}>Executed Flawlessly.</em>
          <br />
          On Time & Within Budget.
        </h1>

        {/* Sub-headline */}
        <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-[560px] font-light">
          Pune's highest-rated woman-owned interior studio. We handle the design,
          the contractors, and the chaos — so you don't have to.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="btn btn-ghost text-base px-7 py-3.5"
          >
            View Our Work
            <ChevronDown />
          </a>
          <button
            onClick={handleWhatsApp}
            className="btn btn-primary text-base px-7 py-3.5"
          >
            <WhatsAppIcon />
            Book Free Site Visit
          </button>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-5 text-white/50 text-sm">
          No commitment · Responds within 2 hrs on WhatsApp
        </p>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────── */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 right-0 h-1/2 bg-white/60 rounded-full animate-[scroll_1.8s_ease-in-out_infinite]"
            style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { top: -50%; }
          100% { top: 150%; }
        }
      `}</style>
    </section>
  )
}

/* ── Helpers ─────────────────────────────────────────────── */
function StarRow() {
  return (
    <span className="flex gap-0.5 text-yellow-400 text-xs" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
