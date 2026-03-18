'use client'

import { useEffect, useRef } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Ideation & Budgeting',
    duration: 'Week 1',
    description:
      'We begin with a free on-site visit. Vrushali walks through your flat, listens to your wishlist, and presents a detailed, itemised budget within 48 hours — covering civil work, materials, carpentry, and furnishing. No guesswork, no surprises.',
    deliverables: ['Free site visit', 'Itemised cost estimate', 'Design brief & mood board'],
    icon: IdeationIcon,
  },
  {
    number: '02',
    title: '3D Design & Approval',
    duration: 'Week 2–3',
    description:
      'We present photorealistic 3D renders of every room — so you can see exactly how your home will look before a single wall is touched. We refine until you love every corner. Once approved, we lock the design and begin procurement.',
    deliverables: ['3D renders of all rooms', 'Material & finish selection', 'Final design sign-off'],
    icon: DesignIcon,
  },
  {
    number: '03',
    title: 'Execution & Handover',
    duration: 'Week 4 onwards',
    description:
      'Vrushali manages all trades on-site — civil, POP, electrical, carpentry, painting, and furnishing. Weekly photo updates keep you informed without requiring your daily presence. Final handover includes a thorough walkthrough and a 1-year service warranty.',
    deliverables: ['Vrushali on-site daily', 'Weekly progress updates', '1-year service warranty'],
    icon: ExecutionIcon,
  },
]

export default function Process() {
  const sectionRef = useRef(null)

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

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our interior design process — 3 steps"
      className="section-pad"
      style={{ background: 'var(--text)' }}
    >
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <span
            className="section-tag reveal"
            style={{ color: 'var(--accent)' }}
          >
            How It Works
          </span>
          <h2
            className="reveal reveal-d1"
            style={{
              fontFamily: 'var(--ff-serif)',
              fontSize: 'clamp(28px,3.5vw,46px)',
              fontWeight: 600,
              lineHeight: 1.2,
              color: '#FAF9F6',
            }}
          >
            From First Call to<br />
            <em className="not-italic" style={{ color: 'var(--accent)' }}>Dream Home Handover</em>
          </h2>
          <div className="divider divider-center reveal reveal-d1" style={{ background: 'var(--accent)' }} />
          <p className="reveal reveal-d2" style={{ color: 'rgba(250,249,246,0.6)', fontSize: 'clamp(16px,1.3vw,18px)', lineHeight: 1.75 }}>
            A transparent, stress-free process designed around you — not us.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[16.66%] right-[16.66%] h-px"
            style={{ background: 'rgba(212,163,115,0.25)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {STEPS.map(({ number, title, duration, description, deliverables, icon: Icon }, i) => (
              <article
                key={number}
                className={`reveal reveal-d${i + 1} flex flex-col gap-5`}
                aria-label={`Step ${number}: ${title}`}
              >
                {/* Step circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center">
                  <div
                    className="relative flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(212,163,115,0.15)',
                      border: '1.5px solid rgba(212,163,115,0.4)',
                    }}
                  >
                    <Icon />
                    {/* Step number bubble */}
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: 'var(--accent)', color: '#fff' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div className="lg:text-center">
                    <span
                      className="block text-xs font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: 'var(--accent)' }}
                    >
                      {duration}
                    </span>
                    <h3
                      className="font-semibold"
                      style={{
                        fontFamily: 'var(--ff-serif)',
                        fontSize: 'clamp(18px,1.6vw,22px)',
                        color: '#FAF9F6',
                      }}
                    >
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: 'rgba(250,249,246,0.62)', fontSize: '15px', lineHeight: 1.75 }}>
                  {description}
                </p>

                {/* Deliverables */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {deliverables.map(item => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: 'rgba(250,249,246,0.75)' }}
                    >
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(212,163,115,0.2)', border: '1px solid rgba(212,163,115,0.35)' }}
                        aria-hidden="true"
                      >
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2 6 5 9 10 3"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center reveal">
          <p
            className="mb-5 text-lg"
            style={{ fontFamily: 'var(--ff-serif)', color: 'rgba(250,249,246,0.8)' }}
          >
            Ready to start Step 1? It's completely free.
          </p>
          <button
            onClick={() => {
              const msg = encodeURIComponent("Hi Vrushali! I'd like to book a free site visit for my home.")
              window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({ event: 'whatsapp_click', location: 'process' })
              }
            }}
            className="btn btn-primary px-8 py-3.5 text-base"
          >
            <WhatsAppIcon />
            Book My Free Site Visit
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function IdeationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  )
}
function DesignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
  )
}
function ExecutionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
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
