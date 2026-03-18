'use client'
import { useEffect, useRef } from 'react'

const STEPS = [
  {
    num: '01', week: 'Week 1',
    title: 'Ideation & Budgeting',
    body: 'Free on-site visit. Detailed itemised budget within 48 hours. Design brief and mood board aligned to your vision.',
  },
  {
    num: '02', week: 'Week 2–3',
    title: '3D Design & Approval',
    body: 'Photorealistic renders of every room. Refine until perfect. Material and finish selection locked before work begins.',
  },
  {
    num: '03', week: 'Week 4+',
    title: 'Execution & Handover',
    body: 'Vrushali on-site managing all trades. Weekly photo updates. Final walkthrough with 1-year service warranty.',
  },
]

export default function Process() {
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
      id="process"
      style={{ background: 'var(--cream)', padding: 'clamp(72px,10vw,128px) 0' }}
      aria-label="Our 3-step process"
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 'clamp(40px,7vw,96px)',
          alignItems: 'start',
        }}>

          {/* Left — sticky heading */}
          <div style={{ position: 'sticky', top: 100 }}>
            <p className="section-label reveal" style={{ marginBottom: 14 }}>How It Works</p>
            <h2
              className="reveal reveal-d1"
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(32px,4vw,58px)',
                fontWeight: 300, lineHeight: 0.98,
                letterSpacing: '-0.025em', color: 'var(--ink)',
                marginBottom: 24,
              }}
            >
              From first call<br />
              to{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>dream home.</em>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 280 }}>
              A transparent, stress-free process built around your schedule and peace of mind.
            </p>

            <button
              className="reveal reveal-d3"
              onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi! I want to book a free site visit.")}`, '_blank')}
              style={{
                marginTop: 32,
                fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                padding: '14px 28px',
                background: 'var(--ink)', color: 'var(--cream)',
                border: 'none', borderRadius: 2,
                display: 'flex', alignItems: 'center', gap: 10,
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
            >
              Start with Step 01 — It's Free
            </button>
          </div>

          {/* Right — steps */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {STEPS.map(({ num, week, title, body }, i) => (
              <div
                key={num}
                className={`reveal reveal-d${i + 1}`}
                style={{
                  padding: 'clamp(32px,5vw,60px) 0',
                  borderTop: i === 0 ? '1px solid rgba(13,13,13,0.1)' : '1px solid rgba(13,13,13,0.1)',
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  gap: 24,
                }}
              >
                <div>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--ff-display)',
                    fontSize: 48, fontWeight: 300, lineHeight: 1,
                    color: 'rgba(13,13,13,0.08)',
                    letterSpacing: '-0.04em',
                  }} aria-hidden="true">{i + 1}</span>
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>{week}</p>
                  <h3 style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 'clamp(22px,2.5vw,34px)',
                    fontWeight: 400, lineHeight: 1.1,
                    letterSpacing: '-0.015em', color: 'var(--ink)',
                    marginBottom: 14,
                  }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            #process > div > div { grid-template-columns: 1fr !important; }
            #process > div > div > div:first-child { position: static !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
