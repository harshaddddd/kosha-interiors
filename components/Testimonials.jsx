'use client'
import { useEffect, useRef, useState } from 'react'

const REVIEWS = [
  {
    name: 'Hemant S.',
    project: '3BHK · Dhanori',
    rating: 5,
    text: "Vrushali beautifully balanced the communication and work between us and the renovation team. We never had to worry about a single thing — she handled everything.",
    highlight: 'never had to worry',
    initial: 'H',
  },
  {
    name: 'Prateek M.',
    project: '2BHK · Kharadi',
    rating: 5,
    text: "Budget-friendly without compromising on quality. She was upfront about every cost from day one. No hidden charges, no surprises. The flat looks absolutely stunning.",
    highlight: 'budget-friendly',
    initial: 'P',
  },
  {
    name: 'Akash & Priya R.',
    project: '3BHK · Viman Nagar',
    rating: 5,
    text: "The 3D designs she showed us before starting were exactly how the final home turned out. Timelines were respected and the quality is excellent. Outstanding experience.",
    highlight: 'timelines were respected',
    initial: 'A',
  },
  {
    name: 'Sunita K.',
    project: 'Kitchen · Kalyani Nagar',
    rating: 5,
    text: "Got my modular kitchen done by Kosha Interiors. The final result is functional and gorgeous. She was available on call throughout the entire project.",
    highlight: 'functional and gorgeous',
    initial: 'S',
  },
  {
    name: 'Rahul D.',
    project: '2BHK · Wakad',
    rating: 5,
    text: "What I appreciated most was the transparency. Every week I got photo updates from the site. Vrushali managed all the workers so I could focus on my work.",
    highlight: 'transparency',
    initial: 'R',
  },
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
    }, { threshold: 0.08 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [])

  const current = REVIEWS[active]

  return (
    <section
      ref={sectionRef}
      id="reviews"
      style={{
        background: 'var(--ink)',
        padding: 'clamp(72px,10vw,128px) 0',
        position: 'relative', overflow: 'hidden',
      }}
      aria-label="Client testimonials"
    >
      {/* Giant decorative quote */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', top: -40, left: 'clamp(16px,4vw,48px)',
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(200px,25vw,340px)',
          fontWeight: 700, lineHeight: 1,
          color: 'rgba(255,255,255,0.028)',
          userSelect: 'none', pointerEvents: 'none',
          letterSpacing: '-0.05em',
        }}
      >"</span>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(48px,7vw,88px)', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p className="section-label reveal" style={{ color: 'var(--gold)', marginBottom: 14 }}>Client Stories</p>
            <h2
              className="reveal reveal-d1"
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(34px,4.5vw,64px)',
                fontWeight: 300, lineHeight: 0.98,
                letterSpacing: '-0.025em', color: 'var(--cream)',
              }}
            >
              What Pune homeowners<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>actually say.</em>
            </h2>
          </div>

          {/* Google rating pill */}
          <div
            className="reveal reveal-d2"
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 20px',
              border: '1px solid rgba(201,169,110,0.2)',
              borderRadius: 40,
            }}
          >
            <GoogleIcon />
            <div>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A96E" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.5)', letterSpacing: '0.1em', fontWeight: 600 }}>
                4.9 · 18 reviews
              </p>
            </div>
          </div>
        </div>

        {/* Main featured review */}
        <div
          className="reveal reveal-d2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 'clamp(32px,6vw,80px)',
            alignItems: 'center',
            borderTop: '1px solid rgba(245,239,230,0.08)',
            paddingTop: 'clamp(40px,6vw,72px)',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: reviewer dots */}
          <div>
            <p style={{
              fontFamily: 'var(--ff-display)',
              fontSize: 'clamp(13px,1.2vw,16px)',
              color: 'rgba(245,239,230,0.4)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: 32, fontWeight: 400,
            }}>
              {active + 1} / {REVIEWS.length}
            </p>

            {/* Reviewer stacked list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {REVIEWS.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    background: 'none', border: 'none', padding: '8px 0',
                    borderLeft: `2px solid ${i === active ? 'var(--gold)' : 'transparent'}`,
                    paddingLeft: 16,
                    transition: 'all 0.3s',
                  }}
                >
                  <span style={{
                    width: 32, height: 32,
                    borderRadius: '50%',
                    background: i === active ? 'var(--gold)' : 'rgba(245,239,230,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--ff-display)', fontSize: 14, fontWeight: 600,
                    color: i === active ? 'var(--ink)' : 'rgba(245,239,230,0.4)',
                    flexShrink: 0,
                    transition: 'all 0.3s',
                  }}>{r.initial}</span>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: i === active ? 'var(--cream)' : 'rgba(245,239,230,0.4)', transition: 'color 0.3s' }}>{r.name}</p>
                    <p style={{ fontSize: 10, color: 'rgba(245,239,230,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{r.project}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: quote */}
          <div key={active}>
            <blockquote
              style={{
                fontFamily: 'var(--ff-display)',
                fontSize: 'clamp(22px,3vw,40px)',
                fontWeight: 300,
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
                color: 'var(--cream)',
                marginBottom: 32,
                fontStyle: 'italic',
                animation: 'fadeQuote 0.5s ease forwards',
              }}
            >
              "{current.text}"
            </blockquote>

            <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
              {[...Array(current.rating)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--ff-body)', fontSize: 13, fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em' }}>
              {current.name}
            </p>
            <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginTop: 2 }}>
              {current.project}
            </p>
          </div>
        </div>

        {/* Mobile grid fix */}
        <style>{`
          @keyframes fadeQuote { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
          @media (max-width: 767px) {
            #reviews > div > div:last-child { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  )
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
