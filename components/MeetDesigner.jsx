'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}

export default function MeetDesigner() {
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

  const CREDS = [['8+', 'Years Experience'], ['4.9★', 'Google Rating'], ['100%', 'On-Time Delivery'], ['₹0', 'Hidden Costs']]

  return (
    <section ref={ref} id="about" style={{ background: 'var(--ink)', padding: 'clamp(64px,9vw,128px) 0', overflow: 'hidden' }} aria-label="Meet Vrushali">
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,6vw,96px)', alignItems: 'start' }}>

          {/* Image col */}
          <div className="rv-l" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', background: '#2a2218', maxWidth: 520 }}>
              <Image src="/images/vrushali.webp" alt="Vrushali, founder of Kosha Interiors" fill style={{ objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(.9) contrast(1.05)' }} sizes="(max-width:767px) 90vw, 45vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(200,169,110,.2) 0%, transparent 50%)' }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 9, fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(242,237,223,.5)', marginBottom: 4 }}>Woman-Owned Studio</p>
                <p style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(18px,2.5vw,28px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2 }}>"I handle the chaos<br />so you don't have to."</p>
              </div>
            </div>
            <div className="stat-card" style={{ position: 'absolute', bottom: -32, right: -24, background: 'var(--gold)', borderRadius: 4, padding: '22px 28px', minWidth: 160 }}>
              <p style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(40px,5vw,60px)', fontWeight: 700, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-.03em' }}>50<span style={{ fontSize: '55%' }}>+</span></p>
              <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(10,10,8,.55)', marginTop: 6 }}>Homes<br />Delivered</p>
            </div>
          </div>

          {/* Bio col */}
          <div style={{ paddingTop: 'clamp(0px,3vw,48px)' }}>
            <p className="rv" style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>— The Person Behind the Work</p>
            <h2 className="rv d1" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(34px,4.5vw,60px)', fontWeight: 300, lineHeight: .95, letterSpacing: '-.025em', color: 'var(--cream)', marginBottom: 28 }}>
              Meet <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Vrushali.</em>
            </h2>
            <div className="rv d2" style={{ width: 44, height: 1, background: 'var(--gold)', marginBottom: 28 }} aria-hidden="true" />
            <div className="rv d2" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(13px,1vw,14px)', color: 'rgba(242,237,223,.55)', lineHeight: 1.85 }}>I started Kosha Interiors with one belief: a beautiful home should not require you to stress over contractors, budgets, or timelines.</p>
              <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(13px,1vw,14px)', color: 'rgba(242,237,223,.55)', lineHeight: 1.85 }}>Every project I act as the single point of contact between you and every tradesperson on site. You decide on design. I handle execution.</p>
            </div>
            <div className="rv d3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginBottom: 36, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(255,255,255,.06)' }}>
              {CREDS.map(([v, l]) => (
                <div key={l} style={{ padding: 'clamp(14px,2vw,20px)', background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.05)' }}>
                  <p style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(22px,2.8vw,32px)', fontWeight: 500, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-.02em', marginBottom: 5 }}>{v}</p>
                  <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(242,237,223,.35)' }}>{l}</p>
                </div>
              ))}
            </div>
            <div className="rv d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                onClick={() => openWA("Hi Vrushali! I'd love to discuss my home.")}
                style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '14px 24px', minHeight: 48, background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2, flex: 1, minWidth: 140, transition: 'background .3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#dab87a' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
              >Talk to Vrushali</button>
              <a href="tel:+917700071665" style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '14px 24px', minHeight: 48, background: 'transparent', color: 'var(--cream)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 1, minWidth: 140, transition: 'border-color .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)' }}
              >+91 77000 71665</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media(max-width:767px) { .about-grid { grid-template-columns: 1fr !important; gap: 52px !important; } .stat-card { position: static !important; margin-top: 14px !important; } }
      `}</style>
    </section>
  )
}
