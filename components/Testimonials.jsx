'use client'
import { useEffect, useRef, useState } from 'react'

const REVIEWS = [
  { name: 'Hemant S.',       project: '3BHK · Dhanori',       rating: 5, text: "Vrushali beautifully balanced the communication and work between us and the renovation team. We never had to worry about a single thing — she handled everything flawlessly.", initial: 'H' },
  { name: 'Prateek M.',      project: '2BHK · Kharadi',       rating: 5, text: "Budget-friendly without compromising on quality. She was upfront about every cost from day one. No hidden charges, no surprises. The flat looks absolutely stunning.", initial: 'P' },
  { name: 'Akash & Priya R.',project: '3BHK · Viman Nagar',   rating: 5, text: "The 3D designs she showed us were exactly how the final home turned out. Timelines were respected and the quality is excellent. Outstanding experience overall.", initial: 'A' },
  { name: 'Sunita K.',       project: 'Kitchen · Kalyani Nagar',rating: 5, text: "The final result is functional and gorgeous. She was available on call throughout the entire project and went above and beyond every single time.", initial: 'S' },
  { name: 'Rahul D.',        project: '2BHK · Wakad',         rating: 5, text: "What I appreciated most was the transparency. Every week I got photo updates from site. Vrushali managed all the workers so I could focus on my job.", initial: 'R' },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

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

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [])

  const current = REVIEWS[active]

  return (
    <section ref={sectionRef} id="reviews" style={{ background: 'var(--ink)', padding: 'clamp(64px,9vw,120px) 0', position: 'relative', overflow: 'hidden' }} aria-label="Client testimonials">

      {/* Decorative quote */}
      <span aria-hidden="true" style={{ position: 'absolute', top: -20, left: 'clamp(12px,3vw,40px)', fontFamily: 'var(--ff-display)', fontSize: 'clamp(160px,22vw,300px)', fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em' }}>"</span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(40px,6vw,72px)', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p className="section-label reveal" style={{ color: 'var(--gold)', marginBottom: 14 }}>Client Stories</p>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(30px,4.5vw,60px)', fontWeight: 300, lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--cream)' }}>
              What Pune homeowners<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>actually say.</em>
            </h2>
          </div>
          <div className="reveal reveal-d2" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 40 }}>
            <GoogleIcon />
            <div>
              <div style={{ display: 'flex', gap: 2 }}>{[...Array(5)].map((_, i) => (<svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C9A96E" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>))}</div>
              <p style={{ fontSize: 10, color: 'rgba(245,239,230,0.5)', letterSpacing: '0.1em', fontWeight: 600 }}>4.9 · 18 reviews</p>
            </div>
          </div>
        </div>

        {/* Main block */}
        <div className="reveal reveal-d2 testi-layout" style={{ borderTop: '1px solid rgba(245,239,230,0.08)', paddingTop: 'clamp(32px,5vw,64px)' }}>

          {/* Reviewer list — becomes horizontal dots on mobile */}
          <div className="testi-reviewers">
            <p style={{ fontFamily: 'var(--ff-body)', fontSize: 10, color: 'rgba(245,239,230,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 600 }}>{active + 1} / {REVIEWS.length}</p>
            <div className="reviewer-list">
              {REVIEWS.map((r, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', padding: '8px 0', borderLeft: `2px solid ${i === active ? 'var(--gold)' : 'transparent'}`, paddingLeft: 14, transition: 'all 0.3s', width: '100%', textAlign: 'left', cursor: 'pointer', minHeight: 48 }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: i === active ? 'var(--gold)' : 'rgba(245,239,230,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ff-display)', fontSize: 13, fontWeight: 600, color: i === active ? 'var(--ink)' : 'rgba(245,239,230,0.35)', flexShrink: 0, transition: 'all 0.3s' }}>{r.initial}</span>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: i === active ? 'var(--cream)' : 'rgba(245,239,230,0.35)', transition: 'color 0.3s' }}>{r.name}</p>
                    <p style={{ fontSize: 9, color: 'rgba(245,239,230,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{r.project}</p>
                  </div>
                </button>
              ))}
            </div>
            {/* Mobile: dot indicators */}
            <div className="testi-dots">
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Review ${i + 1}`} style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 99, background: i === active ? 'var(--gold)' : 'rgba(245,239,230,0.2)', border: 'none', padding: 0, transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)', minHeight: 'unset', cursor: 'pointer' }} />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div key={active} style={{ animation: 'fadeQ 0.45s ease forwards' }}>
            <blockquote style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(20px,2.8vw,36px)', fontWeight: 300, lineHeight: 1.4, letterSpacing: '-0.01em', color: 'var(--cream)', marginBottom: 28, fontStyle: 'italic' }}>
              "{current.text}"
            </blockquote>
            <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
              {[...Array(current.rating)].map((_, i) => (<svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>))}
            </div>
            <p style={{ fontFamily: 'var(--ff-body)', fontSize: 13, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em' }}>{current.name}</p>
            <p style={{ fontSize: 10, color: 'rgba(245,239,230,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginTop: 2 }}>{current.project}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeQ { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        .testi-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: clamp(32px,5vw,72px);
          align-items: start;
        }
        .testi-dots { display: none; }
        .reviewer-list { display: flex; flex-direction: column; }
        @media (max-width: 767px) {
          .testi-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviewer-list { display: none !important; }
          .testi-reviewers { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 8px; padding-bottom: 0; }
          .testi-reviewers > p { display: none; }
          .testi-dots { display: flex !important; gap: 8px; }
        }
      `}</style>
    </section>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
