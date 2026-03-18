'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const PROJECTS = [
  { id: 1, title: 'Serene 3BHK',      location: 'Dhanori',       tag: 'Full Home',   budget: '14L',  image: '/images/project-1.webp', col: 7, aspect: '2/3' },
  { id: 2, title: 'Minimalist Living', location: 'Viman Nagar',   tag: 'Living Room', budget: '2.8L', image: '/images/project-2.webp', col: 5, aspect: '3/4' },
  { id: 3, title: 'Modular Kitchen',   location: 'Kalyani Nagar', tag: 'Kitchen',     budget: '3.2L', image: '/images/project-3.webp', col: 5, aspect: '4/5' },
  { id: 4, title: 'Master Bedroom',    location: 'Baner',         tag: 'Bedroom',     budget: '2.1L', image: '/images/project-4.webp', col: 7, aspect: '16/10' },
  { id: 5, title: 'Compact 2BHK',      location: 'Kharadi',       tag: 'Full Home',   budget: '9.5L', image: '/images/project-5.webp', col: 6, aspect: '4/3' },
  { id: 6, title: 'Open Kitchen',      location: 'Wakad',         tag: 'Kitchen',     budget: '4.5L', image: '/images/project-6.webp', col: 6, aspect: '4/3' },
]

const GRADS = [
  'linear-gradient(135deg,#2a2218,#3d2f1e)',
  'linear-gradient(135deg,#1e2a20,#2d3a28)',
  'linear-gradient(135deg,#252020,#3a2d28)',
  'linear-gradient(135deg,#1e2228,#2d3540)',
  'linear-gradient(135deg,#282018,#3a3020)',
  'linear-gradient(135deg,#201e28,#302d3a)',
]

function Card({ project, gradient, delay }) {
  const [hovered, setHovered] = useState(false)
  return (
    <article
      className={`reveal reveal-d${Math.min(delay, 4)} port-card`}
      data-col={project.col}
      data-aspect={project.aspect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={project.title}
      style={{
        gridColumn: `span ${project.col}`,
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        aspectRatio: project.aspect,
        background: gradient,
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'scale(0.984)' : 'scale(1)',
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        sizes="(max-width: 767px) 100vw, 60vw"
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.08) 55%, transparent 100%)' }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: 14, left: 14, padding: '4px 11px', background: 'rgba(13,13,13,0.65)', backdropFilter: 'blur(8px)', borderRadius: 2, border: '1px solid rgba(201,169,110,0.2)', fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
        {project.tag}
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px', transform: hovered ? 'translateY(0)' : 'translateY(5px)', opacity: hovered ? 1 : 0.88, transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
        <p style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(15px,1.8vw,22px)', fontWeight: 500, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 4 }}>{project.title}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 10, color: 'rgba(245,239,230,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{project.location}</p>
          <p style={{ fontFamily: 'var(--ff-display)', fontSize: 16, color: 'var(--gold)', fontWeight: 500 }}>₹{project.budget}</p>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
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
    <section ref={sectionRef} id="portfolio" style={{ background: 'var(--cream)', padding: 'clamp(64px,9vw,120px) 0' }} aria-label="Portfolio">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(36px,5vw,64px)', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p className="section-label reveal" style={{ marginBottom: 14 }}>Selected Work</p>
            <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(32px,5vw,68px)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.025em', color: 'var(--ink)' }}>
              Spaces we have<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>breathed life into.</em>
            </h2>
          </div>
          <a href="#contact" className="reveal reveal-d2" style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid var(--gold-lt)', paddingBottom: 3, transition: 'color 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            Start Your Project
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" aria-hidden="true"><path d="M0 3h12M9 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Bento grid — 12 cols desktop, 1 col mobile */}
        <div className="port-grid">
          {PROJECTS.map((p, i) => (
            <Card key={p.id} project={p} gradient={GRADS[i % GRADS.length]} delay={i} />
          ))}
        </div>
      </div>

      <style>{`
        .port-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 10px;
        }
        @media (max-width: 767px) {
          .port-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          .port-card { grid-column: span 1 !important; aspect-ratio: 3/4 !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .port-grid { grid-template-columns: repeat(6, 1fr) !important; }
          .port-card { grid-column: span 3 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </section>
  )
}
