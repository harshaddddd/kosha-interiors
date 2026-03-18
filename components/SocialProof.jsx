'use client'

import { useEffect, useRef } from 'react'

const STATS = [
  { value: '4.9',  label: 'Stars on Google',     suffix: '★' },
  { value: '18',   label: 'Verified Reviews',     suffix: '+' },
  { value: '50',   label: 'Homes Transformed',    suffix: '+' },
  { value: '100',  label: 'On-Time Delivery',     suffix: '%' },
]

export default function SocialProof() {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={barRef}
      id="trust"
      aria-label="Social proof and trust indicators"
      style={{ background: 'var(--text)' }}
      className="py-10 md:py-12"
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

          {/* Google Rating Block */}
          <div className="reveal flex items-center gap-4">
            <GoogleLogo />
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="font-serif text-3xl font-bold"
                  style={{ color: '#FAF9F6', lineHeight: 1 }}
                >
                  4.9
                </span>
                <StarRow count={5} />
              </div>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(250,249,246,0.55)' }}>
                18 reviews on Google Maps
              </p>
            </div>
          </div>

          {/* Divider (desktop) */}
          <div
            className="hidden md:block w-px h-12 self-center"
            style={{ background: 'rgba(250,249,246,0.12)' }}
            aria-hidden="true"
          />

          {/* Stats */}
          {STATS.map(({ value, label, suffix }, i) => (
            <div
              key={label}
              className={`reveal reveal-d${i + 1} text-center md:text-left`}
            >
              <div
                className="font-serif text-3xl font-bold flex items-baseline gap-0.5 justify-center md:justify-start"
                style={{ color: '#D4A373' }}
              >
                <span>{value}</span>
                <span className="text-lg">{suffix}</span>
              </div>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(250,249,246,0.55)' }}>
                {label}
              </p>
            </div>
          ))}

          {/* Divider (desktop) */}
          <div
            className="hidden md:block w-px h-12 self-center"
            style={{ background: 'rgba(250,249,246,0.12)' }}
            aria-hidden="true"
          />

          {/* Women-owned badge */}
          <div className="reveal reveal-d4 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(212,163,115,0.15)', border: '1px solid rgba(212,163,115,0.3)' }}
            >
              <span className="text-xl" aria-hidden="true">♀</span>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#FAF9F6' }}>
                Women-Owned Studio
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(250,249,246,0.5)' }}>
                Led by Vrushali · Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Helpers ──────────────────────────────────────────────── */
function StarRow({ count = 5 }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#F5A623"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function GoogleLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}
