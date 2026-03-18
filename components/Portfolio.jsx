'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const CATEGORIES = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Full Home']

const PROJECTS = [
  {
    id: 1,
    title: 'Serene 3BHK — Dhanori',
    category: 'Full Home',
    area: '1,450 sq ft',
    duration: '65 days',
    budget: '₹14L',
    image: '/images/project-1.webp',
    span: 'col-span-2 row-span-2', // large card
    description: 'A calming, nature-inspired palette for a young family of four.',
  },
  {
    id: 2,
    title: 'Minimalist Living Room',
    category: 'Living Room',
    area: '320 sq ft',
    duration: '18 days',
    budget: '₹2.8L',
    image: '/images/project-2.webp',
    span: 'col-span-1 row-span-1',
    description: 'Clean lines and warm wood tones in a compact Pune flat.',
  },
  {
    id: 3,
    title: 'Modular Kitchen — Kalyani Nagar',
    category: 'Kitchen',
    area: '180 sq ft',
    duration: '22 days',
    budget: '₹3.2L',
    image: '/images/project-3.webp',
    span: 'col-span-1 row-span-1',
    description: 'Functional L-shaped modular kitchen with soft-close shutters.',
  },
  {
    id: 4,
    title: 'Master Bedroom — Viman Nagar',
    category: 'Bedroom',
    area: '240 sq ft',
    duration: '14 days',
    budget: '₹2.1L',
    image: '/images/project-4.webp',
    span: 'col-span-1 row-span-1',
    description: 'Upholstered headboard and built-in wardrobe in dusty rose.',
  },
  {
    id: 5,
    title: 'Compact 2BHK — Kharadi',
    category: 'Full Home',
    area: '890 sq ft',
    duration: '48 days',
    budget: '₹9.5L',
    image: '/images/project-5.webp',
    span: 'col-span-1 row-span-1',
    description: 'Smart storage solutions maximising every inch of a starter home.',
  },
  {
    id: 6,
    title: 'Open Kitchen & Dining',
    category: 'Kitchen',
    area: '420 sq ft',
    duration: '28 days',
    budget: '₹4.5L',
    image: '/images/project-6.webp',
    span: 'col-span-1 row-span-1',
    description: 'Island kitchen flowing into a warm-toned dining space.',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState([])
  const sectionRef = useRef(null)

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Stagger card visibility on filter change
  useEffect(() => {
    setVisible([])
    const timers = filtered.map((p, i) =>
      setTimeout(() => setVisible(v => [...v, p.id]), i * 80)
    )
    return () => timers.forEach(clearTimeout)
  }, [active])

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      aria-label="Our portfolio of completed interior design projects"
      className="section-pad"
      style={{ background: 'var(--green-lt)' }}
    >
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="section-tag reveal">Our Work</span>
          <h2 className="text-h2 reveal reveal-d1" style={{ fontFamily: 'var(--ff-serif)' }}>
            Homes We've Transformed
          </h2>
          <div className="divider divider-center reveal reveal-d1" />
          <p className="text-lead reveal reveal-d2">
            Every project is delivered on time, within budget, and exactly as envisioned — no surprises.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10 reveal reveal-d2"
          role="tablist"
          aria-label="Filter projects by room type"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 min-h-[44px] cursor-pointer"
              style={{
                background: active === cat ? 'var(--accent)' : 'var(--surface)',
                color:      active === cat ? '#fff'         : 'var(--text-muted)',
                border:     `1.5px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                transform:  active === cat ? 'translateY(-1px)' : 'none',
                boxShadow:  active === cat ? 'var(--shadow-cta)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={visible.includes(project.id)}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center reveal">
          <p className="text-lead mb-1 font-medium" style={{ color: 'var(--text)' }}>
            Love what you see?
          </p>
          <p className="text-lead mb-5">Let's create something beautiful for your home.</p>
          <button
            onClick={() => {
              const msg = encodeURIComponent("Hi Vrushali! I saw your portfolio and I'd love to discuss my home's interior design.")
              window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({ event: 'whatsapp_click', location: 'portfolio' })
              }
            }}
            className="btn btn-primary px-8 py-3.5 text-base"
          >
            <WhatsAppIcon />
            Discuss My Project
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Project Card ─────────────────────────────────────────── */
function ProjectCard({ project, isVisible, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      aria-label={project.title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:    isVisible ? 1 : 0,
        transform:  isVisible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.45s ease ${index * 0.06}s, transform 0.45s ease ${index * 0.06}s`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        boxShadow: hovered ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        transform: hovered
          ? `translateY(-${isVisible ? 5 : 18}px)`
          : `translateY(${isVisible ? 0 : 18}px)`,
        cursor: 'default',
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/3' }}
      >
        {/* Placeholder gradient while real images load */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg,
              hsl(${(project.id * 40) % 360},18%,82%) 0%,
              hsl(${(project.id * 40 + 30) % 360},14%,74%) 100%)`,
          }}
          aria-hidden="true"
        />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover z-10"
          style={{
            transition: 'transform 0.65s cubic-bezier(0.4,0,0.2,1)',
            transform:  hovered ? 'scale(1.06)' : 'scale(1)',
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(250,249,246,0.92)',
              color: 'var(--text)',
              backdropFilter: 'blur(6px)',
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3
          className="font-semibold mb-1 text-base"
          style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
          {project.description}
        </p>

        {/* Meta row */}
        <div
          className="flex items-center gap-4 pt-3 text-xs font-medium"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
        >
          <span className="flex items-center gap-1">
            <AreaIcon /> {project.area}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon /> {project.duration}
          </span>
          <span
            className="ml-auto font-semibold text-sm"
            style={{ color: 'var(--accent)' }}
          >
            {project.budget}
          </span>
        </div>
      </div>
    </article>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function AreaIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
