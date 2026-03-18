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

function DifferenceRow({ num, title, body, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`reveal reveal-d${delay + 1}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1fr 1.2fr 48px',
        gap: 'clamp(12px,3vw,48px)',
        alignItems: 'start',
        padding: 'clamp(28px,4vw,52px) 0',
        borderTop: '1px solid rgba(13,13,13,0.1)',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: 'var(--ff-body)', fontSize: 10, fontWeight: 700,
        letterSpacing: '0.16em', color: 'var(--gold)', paddingTop: 5,
      }}>{num}</span>

      <h3 style={{
        fontFamily: 'var(--ff-display)',
        fontSize: 'clamp(24px,2.8vw,42px)',
        fontWeight: 300, lineHeight: 1.05,
        letterSpacing: '-0.02em', color: 'var(--ink)',
      }}>{title}</h3>

      <p style={{
        fontFamily: 'var(--ff-body)',
        fontSize: 'clamp(14px,1vw,15px)',
        color: 'var(--muted)', lineHeight: 1.8,
        paddingTop: 5,
      }}>{body}</p>

      <div style={{
        width: 40, height: 40,
        borderRadius: '50%',
        border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(13,13,13,0.15)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 4,
        background: hovered ? 'var(--gold)' : 'transparent',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 7h12M8 3l4 4-4 4" stroke={hovered ? 'var(--ink)' : 'var(--muted)'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
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
    }, { threshold: 0.08 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: 'var(--cream-dk)',
        padding: 'clamp(72px,10vw,128px) 0',
        position: 'relative', overflow: 'hidden',
      }}
      aria-label="The Kosha Difference"
    >
      <span aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: -80,
        transform: 'translateY(-50%) rotate(90deg)',
        fontFamily: 'var(--ff-display)',
        fontSize: 'clamp(80px,12vw,160px)',
        fontWeight: 700, lineHeight: 1,
        color: 'rgba(13,13,13,0.04)',
        letterSpacing: '-0.04em', userSelect: 'none', whiteSpace: 'nowrap',
      }}>KOSHA INTERIORS</span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>
        <div style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
          <p className="section-label reveal" style={{ marginBottom: 14 }}>Why Choose Us</p>
          <h2
            className="reveal reveal-d1"
            style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(36px,5vw,72px)',
              fontWeight: 300, lineHeight: 0.95,
              letterSpacing: '-0.025em', color: 'var(--ink)',
            }}
          >
            The Kosha{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>difference.</em>
          </h2>
        </div>

        <div>
          {ITEMS.map(({ num, title, body }, i) => (
            <DifferenceRow key={num} num={num} title={title} body={body} delay={i} />
          ))}
        </div>

        <div
          className="reveal"
          style={{
            borderTop: '1px solid rgba(13,13,13,0.1)',
            paddingTop: 'clamp(28px,4vw,48px)',
            display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
          }}
        >
          <button
            onClick={() => {
              window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I have a few questions about interior design.")}`, '_blank')
            }}
            style={{
              fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'var(--ink)', color: 'var(--cream)',
              border: 'none', borderRadius: 2,
              transition: 'background 0.3s, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
          >
            Ask Vrushali
          </button>
          <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--ff-body)' }}>
            Responds within 2 hrs on WhatsApp
          </p>
        </div>
      </div>
    </section>
  )
}
