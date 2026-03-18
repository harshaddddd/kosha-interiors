'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function MeetDesigner() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: 'var(--surface)',
        padding: 'clamp(72px,10vw,128px) 0',
        position: 'relative', overflow: 'hidden',
      }}
      aria-label="Meet Vrushali — Founder of Kosha Interiors"
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px,7vw,96px)',
          alignItems: 'start',
        }}>

          {/* Left — image column */}
          <div className="reveal" style={{ position: 'relative' }}>
            {/* Main image */}
            <div style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: 4,
              overflow: 'hidden',
              background: 'linear-gradient(160deg, #d4c5b5, #b8a898)',
            }}>
              <Image
                src="/images/vrushali.webp"
                alt="Vrushali, founder of Kosha Interiors, on-site in Pune"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width: 768px) 90vw, 45vw"
              />
              {/* Gold tint overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(201,169,110,0.18) 0%, transparent 50%)',
              }} aria-hidden="true" />
            </div>

            {/* Overlapping stat card */}
            <div style={{
              position: 'absolute',
              bottom: -28, right: -20,
              background: 'var(--ink)',
              borderRadius: 4,
              padding: '24px 28px',
              minWidth: 160,
            }}>
              <p style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 52, fontWeight: 300, lineHeight: 1,
                color: 'var(--gold)',
                letterSpacing: '-0.03em',
              }}>50<span style={{ fontSize: 28 }}>+</span></p>
              <p style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(245,239,230,0.5)', marginTop: 6,
              }}>Homes delivered<br />across Pune</p>
            </div>
          </div>

          {/* Right — bio column */}
          <div style={{ paddingTop: 'clamp(0px,3vw,40px)' }}>
            <p className="section-label reveal" style={{ marginBottom: 16 }}>The Person Behind the Work</p>

            <h2
              className="reveal reveal-d1"
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(34px,4vw,58px)',
                fontWeight: 300, lineHeight: 0.98,
                letterSpacing: '-0.02em', color: 'var(--ink)',
                marginBottom: 32,
              }}
            >
              Meet{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Vrushali.</em>
            </h2>

            <div
              className="reveal reveal-d2"
              style={{ width: 48, height: 1, background: 'var(--gold)', marginBottom: 32 }}
              aria-hidden="true"
            />

            <div className="reveal reveal-d2" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              <p style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(14px,1.1vw,16px)', color: 'var(--muted)', lineHeight: 1.8 }}>
                I started Kosha Interiors with one belief: a beautiful home should not require you to stress over contractors, budgets, or timelines. I handle that so you can simply enjoy the transformation.
              </p>
              <p style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(14px,1.1vw,16px)', color: 'var(--muted)', lineHeight: 1.8 }}>
                Every project, I act as the single point of contact between you and every tradesperson on site — civil workers, carpenters, POP specialists, painters. You decide on design. I handle execution.
              </p>
            </div>

            {/* Credentials grid */}
            <div
              className="reveal reveal-d3"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                marginBottom: 36,
                border: '1px solid rgba(13,13,13,0.08)',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              {[
                ['8+', 'Years Experience'],
                ['4.9★', 'Google Rating'],
                ['100%', 'On-Time Delivery'],
                ['₹0', 'Hidden Costs'],
              ].map(([val, label]) => (
                <div key={label} style={{
                  padding: '20px 20px',
                  background: 'var(--cream)',
                  borderRight: '1px solid rgba(13,13,13,0.06)',
                  borderBottom: '1px solid rgba(13,13,13,0.06)',
                }}>
                  <p style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 28, fontWeight: 500,
                    color: 'var(--gold)', lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: 4,
                  }}>{val}</p>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd love to discuss my home.")}`, '_blank')}
                style={{
                  fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '14px 28px',
                  background: 'var(--ink)', color: 'var(--cream)',
                  border: 'none', borderRadius: 2,
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
              >
                Talk to Vrushali
              </button>
              <a
                href="tel:+917700071665"
                style={{
                  fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '14px 28px',
                  background: 'transparent', color: 'var(--ink)',
                  border: '1px solid rgba(13,13,13,0.15)',
                  borderRadius: 2,
                  display: 'inline-flex', alignItems: 'center',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(13,13,13,0.15)'}
              >
                +91 77000 71665
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            #about > div > div { grid-template-columns: 1fr !important; }
            #about > div > div > div:first-child { padding-bottom: 40px; }
          }
        `}</style>
      </div>
    </section>
  )
}
