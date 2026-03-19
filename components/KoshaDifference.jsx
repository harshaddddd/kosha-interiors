'use client'
import { useEffect, useRef, useState } from 'react'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}

const ITEMS = [
  { n: '01', t: 'Transparent Budgeting', b: 'Before a single nail is hammered, you receive an itemised breakdown covering civil, materials, carpentry, and furnishing. Every cost, laid bare. No surprises ever.', stat: '0 hidden costs' },
  { n: '02', t: 'Seamless Execution', b: 'Civil, POP, carpentry, painting — Vrushali coordinates every trade. One contact, zero chaos for you. You make decisions on design. We handle everything else.', stat: '1 point of contact' },
  { n: '03', t: 'Tailored to Your Life', b: 'We design around how your family actually lives — not off a template. Every 2BHK and 3BHK is unique. Your home should feel like you, not a showroom.', stat: '100% bespoke' },
]

function Row({ n, t, b, stat, i }) {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={'rv d' + (i + 1)}
      style={{ display: 'grid', gridTemplateColumns: 'clamp(56px,6vw,80px) 1fr clamp(80px,12vw,140px)', gap: 'clamp(12px,3vw,40px)', alignItems: 'start', padding: 'clamp(24px,4vw,52px) 0', borderTop: '1px solid rgba(10,10,8,.1)' }}
    >
      <div>
        <span style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(48px,5vw,72px)', fontWeight: 700, lineHeight: 1, color: h ? 'var(--gold)' : 'rgba(10,10,8,.08)', transition: 'color .4s cubic-bezier(0.16,1,0.3,1)', display: 'block', letterSpacing: '-.03em' }}>{n}</span>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(22px,2.8vw,40px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-.02em', color: 'var(--ink)', marginBottom: 14 }}>{t}</h3>
        <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(13px,1vw,14px)', color: 'var(--muted)', lineHeight: 1.85 }}>{b}</p>
      </div>
      <div style={{ paddingTop: 8, display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ display: 'inline-block', fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(12px,1.2vw,15px)', fontStyle: 'italic', fontWeight: 400, padding: '8px 16px', borderRadius: 99, border: '1px solid ' + (h ? 'var(--gold)' : 'rgba(10,10,8,.12)'), color: h ? 'var(--gold)' : 'var(--muted)', transition: 'all .35s cubic-bezier(0.16,1,0.3,1)', whiteSpace: 'nowrap' }}>{stat}</span>
      </div>
    </div>
  )
}

export default function KoshaDifference() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => el.classList.add('on'))
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="services" style={{ background: 'var(--cream)', padding: 'clamp(64px,9vw,128px) 0', position: 'relative', overflow: 'hidden' }} aria-label="The Kosha Difference">
      <span aria-hidden="true" style={{ position: 'absolute', bottom: -80, left: -40, fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(120px,18vw,240px)', fontWeight: 700, lineHeight: 1, color: 'rgba(10,10,8,.04)', letterSpacing: '-.04em', userSelect: 'none', transform: 'rotate(-8deg)', whiteSpace: 'nowrap' }}>DIFFERENCE</span>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'flex-end', marginBottom: 'clamp(40px,6vw,72px)' }}>
          <div>
            <p className="rv" style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>— Why Choose Us</p>
            <h2 className="rv d1" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(36px,6vw,80px)', fontWeight: 300, lineHeight: .92, letterSpacing: '-.03em', color: 'var(--ink)' }}>
              The Kosha<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>difference.</em>
            </h2>
          </div>
          <span aria-hidden="true" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(80px,12vw,160px)', fontWeight: 700, lineHeight: 1, color: 'rgba(10,10,8,.05)', letterSpacing: '-.04em', flexShrink: 0 }}>3</span>
        </div>

        <div>
          {ITEMS.map((item, i) => <Row key={item.n} {...item} i={i} />)}
        </div>

        <div className="rv" style={{ borderTop: '1px solid rgba(10,10,8,.1)', paddingTop: 'clamp(24px,4vw,44px)', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => openWA('Hi Vrushali! I have questions about interior design.')}
            style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '14px 28px', minHeight: 48, background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 2, transition: 'background .3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
          >Ask Vrushali</button>
          <p style={{ fontSize: 12, color: 'var(--muted)' }}>Responds within 2 hrs on WhatsApp</p>
        </div>
      </div>
    </section>
  )
}
