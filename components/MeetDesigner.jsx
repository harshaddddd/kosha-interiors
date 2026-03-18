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
    }, { threshold: 0.06 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" style={{ background: 'var(--surface)', padding: 'clamp(64px,9vw,120px) 0', overflow: 'hidden' }} aria-label="Meet Vrushali">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div className="meet-grid">

          {/* Image */}
          <div className="reveal meet-img-col" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', background: 'linear-gradient(160deg,#d4c5b5,#b8a898)', maxWidth: 500, marginInline: 'auto' }}>
              <Image src="/images/vrushali.webp" alt="Vrushali, founder of Kosha Interiors" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} sizes="(max-width:767px) 90vw, 45vw" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(201,169,110,0.18) 0%, transparent 50%)' }} aria-hidden="true" />
            </div>
            {/* Stat card — repositioned on mobile */}
            <div className="meet-stat" style={{ background: 'var(--ink)', borderRadius: 4, padding: '20px 24px' }}>
              <p style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(36px,5vw,52px)', fontWeight: 300, lineHeight: 1, color: 'var(--gold)', letterSpacing: '-0.03em' }}>50<span style={{ fontSize: '55%' }}>+</span></p>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.45)', marginTop: 6 }}>Homes delivered<br />across Pune</p>
            </div>
          </div>

          {/* Bio */}
          <div className="meet-bio-col">
            <p className="section-label reveal" style={{ marginBottom: 16 }}>The Person Behind the Work</p>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: 28 }}>
              Meet <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Vrushali.</em>
            </h2>
            <div className="reveal reveal-d2" style={{ width: 44, height: 1, background: 'var(--gold)', marginBottom: 28 }} aria-hidden="true" />
            <div className="reveal reveal-d2" style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              <p style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(14px,1.1vw,15px)', color: 'var(--muted)', lineHeight: 1.8 }}>I started Kosha Interiors with one belief: a beautiful home should not require you to stress over contractors, budgets, or timelines. I handle that so you can simply enjoy the transformation.</p>
              <p style={{ fontFamily: 'var(--ff-body)', fontSize: 'clamp(14px,1.1vw,15px)', color: 'var(--muted)', lineHeight: 1.8 }}>Every project, I act as the single point of contact between you and every tradesperson on site. You decide on design. I handle execution.</p>
            </div>

            {/* Credentials */}
            <div className="reveal reveal-d3 creds-grid">
              {[['8+','Years Experience'],['4.9★','Google Rating'],['100%','On-Time Delivery'],['₹0','Hidden Costs']].map(([v, l]) => (
                <div key={l} style={{ padding: 'clamp(14px,2vw,20px)', background: 'var(--cream)', border: '1px solid rgba(13,13,13,0.07)', borderRadius: 3 }}>
                  <p style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(22px,2.5vw,28px)', fontWeight: 500, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 4 }}>{v}</p>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{l}</p>
                </div>
              ))}
            </div>

            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
              <button onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd love to discuss my home.")}`, '_blank')}
                style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '13px 24px', minHeight: 48, background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 2, transition: 'background 0.3s', flex: 1, minWidth: 140 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
              >Talk to Vrushali</button>
              <a href="tel:+917700071665" style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '13px 24px', minHeight: 48, background: 'transparent', color: 'var(--ink)', border: '1px solid rgba(13,13,13,0.15)', borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s', flex: 1, minWidth: 140 }}>+91 77000 71665</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .meet-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,6vw,88px);
          align-items: start;
        }
        .meet-stat {
          position: absolute;
          bottom: -24px; right: -16px;
          min-width: 150px;
        }
        .meet-bio-col { padding-top: clamp(0px,2vw,32px); }
        .creds-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        @media (max-width: 767px) {
          .meet-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .meet-img-col { max-width: 100% !important; }
          .meet-stat { position: static !important; margin-top: 16px !important; }
          .meet-bio-col { padding-top: 0 !important; }
          .creds-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
