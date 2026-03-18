'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const CREDENTIALS = [
  { label: '8+ Years',      sub: 'Interior Design Experience' },
  { label: '50+ Homes',     sub: 'Delivered in Pune' },
  { label: '4.9 ★',         sub: 'Average Google Rating' },
  { label: '100%',          sub: 'On-Time Project Delivery' },
]

export default function MeetDesigner() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Vrushali! I'd love to discuss my home's interior design with you.")
    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: 'meet_designer' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Meet Vrushali — Founder of Kosha Interiors"
      className="section-pad"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image + Quote ─────────────────────────── */}
          <div className="reveal relative">

            {/* Main portrait */}
            <div
              className="relative rounded-lg overflow-hidden img-zoom"
              style={{
                aspectRatio: '4/5',
                maxWidth: '480px',
                marginInline: 'auto',
                boxShadow: 'var(--shadow-lift)',
              }}
            >
              {/* Placeholder — replace with /public/images/vrushali.webp */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(160deg, #D4C5B5 0%, #B8A898 100%)',
                }}
                aria-hidden="true"
              />
              <Image
                src="/images/vrushali.webp"
                alt="Vrushali, founder of Kosha Interiors, on-site in Pune"
                fill
                className="object-cover object-top z-10"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>

            {/* Floating review quote card */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 max-w-[280px] p-5 rounded-lg z-20"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-lift)',
              }}
              aria-label="Client review highlight"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p
                className="text-sm leading-snug mb-3 italic"
                style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
              >
                "Vrushali beautifully balanced communication and work between us and the renovation team."
              </p>
              <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
                — Hemant S., 3BHK · Dhanori
              </p>
            </div>

            {/* Decorative accent block */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-lg -z-10"
              style={{ background: 'var(--accent)', opacity: 0.12 }}
              aria-hidden="true"
            />
          </div>

          {/* ── Right: Bio ──────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:py-4">
            <div>
              <span className="section-tag reveal">The Person Behind the Work</span>
              <h2
                className="text-h2 reveal reveal-d1"
                style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
              >
                Meet Vrushali
              </h2>
              <div className="divider reveal reveal-d1" />
            </div>

            <p className="text-lead reveal reveal-d2">
              Hi — I'm Vrushali, founder of Kosha Interiors. I started this studio with
              one belief: that a beautiful home shouldn't require you to stress over contractors,
              budgets, or timelines.
            </p>

            <p className="text-lead reveal reveal-d2">
              Every project I take on, I act as the single point of contact between you and
              every tradesperson on site — civil workers, carpenters, POP specialists, painters.
              You make decisions on design. I handle the execution.
            </p>

            <p className="text-lead reveal reveal-d3">
              My speciality is <strong className="font-semibold" style={{ color: 'var(--text)' }}>
              2BHK and 3BHK apartments across Pune</strong> — spaces where thoughtful planning
              makes the biggest difference. I design around how you actually live, not
              how a showroom is staged.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 reveal reveal-d3">
              {CREDENTIALS.map(({ label, sub }) => (
                <div
                  key={label}
                  className="p-4 rounded-lg"
                  style={{
                    background: 'var(--green-lt)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p
                    className="font-bold text-xl mb-0.5"
                    style={{ fontFamily: 'var(--ff-serif)', color: 'var(--accent)' }}
                  >
                    {label}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{sub}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 reveal reveal-d4">
              <button
                onClick={handleWhatsApp}
                className="btn btn-primary px-7 py-3.5"
              >
                <WhatsAppIcon />
                Talk to Vrushali
              </button>
              <a
                href="tel:+917700071665"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({ event: 'call_click', location: 'meet_designer' })
                  }
                }}
                className="btn btn-outline px-7 py-3.5"
                aria-label="Call Kosha Interiors"
              >
                <PhoneIcon />
                +91 77000 71665
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
