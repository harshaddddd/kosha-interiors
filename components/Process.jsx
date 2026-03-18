'use client'
import { useEffect, useRef } from 'react'

const STEPS = [
  { num: '01', week: 'Week 1',   title: 'Ideation & Budgeting', body: 'Free on-site visit. Detailed itemised budget within 48 hours. Design brief and mood board aligned to your vision and lifestyle.' },
  { num: '02', week: 'Week 2–3', title: '3D Design & Approval',  body: 'Photorealistic renders of every room. Refine until perfect. Material and finish selection locked before work begins.' },
  { num: '03', week: 'Week 4+',  title: 'Execution & Handover',  body: 'Vrushali on-site managing all trades. Weekly photo updates. Final walkthrough with 1-year service warranty.' },
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
    }, { threshold: 0.06 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" style={{ background: 'var(--cream)', padding: 'clamp(64px,9vw,120px) 0' }} aria-label="Our 3-step process">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div className="process-grid">

          {/* Left — heading */}
          <div className="process-left">
            <p className="section-label reveal" style={{ marginBottom: 14 }}>How It Works</p>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(30px,4vw,54px)', fontWeight: 300, lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: 20 }}>
              From first call<br />to <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>dream home.</em>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 280, marginBottom: 28 }}>
              A transparent, stress-free process built around your schedule and peace of mind.
            </p>
            <button
              className="reveal reveal-d3"
              onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi! I want to book a free site visit.")}`, '_blank')}
              style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 26px', minHeight: 48, background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 2, transition: 'background 0.3s', display: 'inline-block' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
            >Start with Step 01 — Free</button>
          </div>

          {/* Right — steps */}
          <div className="process-right">
            {STEPS.map(({ num, week, title, body }, i) => (
              <div key={num} className={`reveal reveal-d${i + 1}`} style={{ padding: 'clamp(24px,4vw,52px) 0', borderTop: '1px solid rgba(13,13,13,0.1)', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 'clamp(16px,2vw,28px)' }}>
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 300, lineHeight: 1, color: 'rgba(13,13,13,0.07)', letterSpacing: '-0.04em' }} aria-hidden="true">{i + 1}</span>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>{week}</p>
                  <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.015em', color: 'var(--ink)', marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 'clamp(13px,1vw,14px)', color: 'var(--muted)', lineHeight: 1.8 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: clamp(32px,6vw,88px);
          align-items: start;
        }
        .process-left { position: sticky; top: 100px; }
        @media (max-width: 767px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .process-left { position: static !important; top: auto !important; }
        }
      `}</style>
    </section>
  )
}
