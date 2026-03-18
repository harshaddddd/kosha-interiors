'use client'

import { useEffect, useRef } from 'react'

const DIFFERENTIATORS = [
  {
    icon: BudgetIcon,
    title: 'Transparent Budgeting',
    description:
      'No hidden surprises, ever. Before a single nail is hammered, you receive a detailed, itemised budget. We present options at every price point so your vision never outgrows your wallet.',
    highlight: 'Zero hidden costs',
  },
  {
    icon: ExecutionIcon,
    title: 'Seamless Execution',
    description:
      'From civil work and POP to carpentry and final furnishing — Vrushali coordinates every trade herself. One point of contact, zero contractor chaos for you.',
    highlight: 'Civil to Carpentry, handled',
  },
  {
    icon: DesignIcon,
    title: 'Tailored to Your Home',
    description:
      "Every 2BHK and 3BHK is unique. We design around your lifestyle, your family's habits, and the way natural light moves through your specific flat — not off a template.",
    highlight: '2BHK · 3BHK specialists',
  },
]

export default function KoshaDifference() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-label="The Kosha Difference — Why choose us"
      className="section-pad"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14 md:mb-16">
          <span className="section-tag reveal">Why Kosha</span>

          <h2
            className="text-h2 reveal reveal-d1"
            style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
          >
            The Kosha Difference
          </h2>

          <div className="divider divider-center reveal reveal-d2" />

          <p className="text-lead reveal reveal-d2">
            We know renovations feel overwhelming. Here's exactly how we make it{' '}
            <em className="not-italic font-medium" style={{ color: 'var(--text)' }}>
              effortless for you.
            </em>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description, highlight }, i) => (
            <article
              key={title}
              className={`reveal reveal-d${i + 1} card group p-8 flex flex-col gap-5`}
              aria-label={title}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'var(--green-lt)',
                  border: '1px solid var(--border)',
                }}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
                className="text-h3"
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-lead flex-1">{description}</p>

              {/* Highlight pill */}
              <div className="pt-2 border-t border-border">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--accent)' }}
                >
                  <CheckIcon />
                  {highlight}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center reveal">
          <p className="text-lead mb-4">
            Still have questions? Talk to Vrushali directly.
          </p>
          <button
            onClick={() => {
              const msg = encodeURIComponent("Hi Vrushali! I have a few questions about interior design for my Pune home.")
              window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
              if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({ event: 'whatsapp_click', location: 'kosha_difference' })
              }
            }}
            className="btn btn-primary px-8 py-3.5"
          >
            <WhatsAppIcon />
            Ask on WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function BudgetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  )
}

function ExecutionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
