'use client'
import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    num: '01',
    title: 'Transparent Budgeting',
    body: "Before a single nail is hammered, you receive a detailed itemised breakdown covering civil, materials, carpentry, and furnishing. Every option laid out honestly — no surprises.",
  },
  {
    num: '02',
    title: 'Seamless Execution',
    body: "Civil, POP, carpentry, painting — Vrushali coordinates every trade herself. One point of contact, zero contractor chaos for you.",
  },
  {
    num: '03',
    title: 'Tailored to Your Life',
    body: "We design around how your family actually lives — not off a template. Every 2BHK and 3BHK is unique and deserves a bespoke approach.",
  },
]

function Row({ num, title, body, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`reveal reveal-d${delay + 1} diff-row`}
      style={{
        padding: 'clamp(24px,4vw,48px) 0',
        borderTop: '1px solid rgba(13,13,13,0.1)',
      }}
    >
      {/* Mobile: stacked. Desktop: 4-col grid */}
      <div className="diff-inner">
        <span className="diff-num">{num}</span>
        <h3 className="diff-title">{title}</h3>
        <p className="diff-body">{body}</p>
        <div className="diff-arrow" style={{
          background: hovered ? 'var(--gold)' : 'transparent',
          border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(13,13,13,0.15)'}`,
          transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 7h12M8 3l4 4-4 4" stroke={hovered ? 'var(--ink)' : 'var(--muted)'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style>{`
        .diff-inner {
          display: grid;
          grid-template-columns: 56px 1fr 1.1fr 44px;
          gap: clamp(12px,3vw,40px);
          align-items: start;
        }
        .diff-num {
          font-family: var(--ff-body);
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--gold); padding-top: 4px;
        }
        .diff-title {
          font-family: var(--ff-display);
          font-size: clamp(22px,2.6vw,38px);
          font-weight: 300; line-height: 1.05;
          letter-spacing: -0.02em; color: var(--ink);
        }
        .diff-body {
          font-size: clamp(13px,1vw,15px);
          color: var(--muted); line-height: 1.8;
          padding-top: 4px;
        }
        .diff-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 4px;
        }
        @media (max-width: 767px) {
          .diff-inner {
            grid-template-columns: 40px 1fr 36px !important;
            grid-template-rows: auto auto;
          }
          .diff-title { grid-column: 2 / 3; grid-row: 1; font-size: clamp(20px,5vw,26px) !important; }
          .diff-body  { grid-column: 2 / 4; grid-row: 2; margin-top: 8px; padding-top: 0 !important; }
          .diff-arrow { grid-column: 3 / 4; grid-row: 1; width: 32px !important; height: 32px !important; margin-top: 2px; }
          .diff-num   { grid-column: 1; grid-row: 1; }
        }
      `}</style>
    </div>
  )
}

export default function KoshaDifference() {
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
    <section ref={sectionRef} id="services" style={{ background: 'var(--cream-dk)', padding: 'clamp(64px,9vw,120px) 0', position: 'relative', overflow: 'hidden' }} aria-label="The Kosha Difference">
      <span aria-hidden="true" style={{ position: 'absolute', top: '50%', right: -80, transform: 'translateY(-50%) rotate(90deg)', fontFamily: 'var(--ff-display)', fontSize: 'clamp(80px,12vw,160px)', fontWeight: 700, lineHeight: 1, color: 'rgba(13,13,13,0.04)', letterSpacing: '-0.04em', userSelect: 'none', whiteSpace: 'nowrap' }}>KOSHA INTERIORS</span>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
        <div style={{ marginBottom: 'clamp(36px,5vw,64px)' }}>
          <p className="section-label reveal" style={{ marginBottom: 14 }}>Why Choose Us</p>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(32px,5vw,68px)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
            The Kosha <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>difference.</em>
          </h2>
        </div>
        <div>
          {ITEMS.map(({ num, title, body }, i) => (
            <Row key={num} num={num} title={title} body={body} delay={i} />
          ))}
        </div>
        <div className="reveal" style={{ borderTop: '1px solid rgba(13,13,13,0.1)', paddingTop: 'clamp(24px,4vw,44px)', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I have a few questions about interior design.")}`, '_blank')}
            style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 28px', minHeight: 48, background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 2, transition: 'background 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
          >Ask Vrushali</button>
          <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--ff-body)' }}>Responds within 2 hrs on WhatsApp</p>
        </div>
      </div>
    </section>
  )
}
