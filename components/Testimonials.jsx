'use client'

import { useEffect, useRef, useState } from 'react'

const REVIEWS = [
  {
    id: 1,
    name: 'Hemant S.',
    project: '3BHK Full Home · Dhanori',
    rating: 5,
    date: 'March 2024',
    avatar: 'H',
    avatarBg: '#D4A373',
    text: 'Vrushali did beautifully — she very well balanced the communication and work between us and the renovation team. She understood our requirements, gave us options at every step, and made sure we were never stressed about anything. Highly recommend.',
    highlight: 'never stressed',
    featured: true,
  },
  {
    id: 2,
    name: 'Prateek M.',
    project: '2BHK Renovation · Kharadi',
    rating: 5,
    date: 'January 2024',
    avatar: 'P',
    avatarBg: '#6B8F71',
    text: 'Budget-friendly without any compromise on quality. Vrushali was upfront about every cost from day one. No hidden charges, no surprises. The work was completed within the promised timeline. Our flat looks stunning.',
    highlight: 'budget-friendly',
    featured: true,
  },
  {
    id: 3,
    name: 'Akash & Priya R.',
    project: '3BHK Turnkey · Viman Nagar',
    rating: 5,
    date: 'November 2023',
    avatar: 'A',
    avatarBg: '#8C7B6B',
    text: 'We were nervous about starting a full renovation but Vrushali made the entire process smooth. The 3D designs she showed us before starting were exactly how the final home turned out. Timelines were respected and the quality of work is excellent.',
    highlight: 'timelines were respected',
    featured: false,
  },
  {
    id: 4,
    name: 'Sunita K.',
    project: 'Modular Kitchen · Kalyani Nagar',
    rating: 5,
    date: 'September 2023',
    avatar: 'S',
    avatarBg: '#A0836B',
    text: 'Got my modular kitchen done by Kosha Interiors. Vrushali suggested layouts I hadn\'t considered and the final result is functional and gorgeous. She was available on call throughout the project. 5 stars without hesitation.',
    highlight: 'functional and gorgeous',
    featured: false,
  },
  {
    id: 5,
    name: 'Rahul D.',
    project: '2BHK Interior · Wakad',
    rating: 5,
    date: 'July 2023',
    avatar: 'R',
    avatarBg: '#7A8C86',
    text: 'What I appreciated most was the transparency. Every week I got photo updates from site without having to ask. Vrushali managed all the workers so I could focus on my job. The home is exactly what we dreamed of.',
    highlight: 'transparency',
    featured: false,
  },
  {
    id: 6,
    name: 'Meghna T.',
    project: 'Living Room & Bedroom · Baner',
    rating: 5,
    date: 'May 2023',
    avatar: 'M',
    avatarBg: '#C4A882',
    text: 'Extremely professional. Vrushali has a great eye for detail and a calm, reassuring communication style. She made design choices that genuinely suited our lifestyle and family\'s habits. Would hire again in a heartbeat.',
    highlight: 'professional',
    featured: false,
  },
]

function highlightText(text, keyword) {
  if (!keyword) return text
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'))
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase()
      ? <mark key={i} style={{ background: 'rgba(212,163,115,0.2)', color: 'var(--accent)', padding: '0 2px', borderRadius: '2px', fontWeight: 600 }}>{part}</mark>
      : part
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const featured = REVIEWS.filter(r => r.featured)
  const rest     = REVIEWS.filter(r => !r.featured)

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
      id="reviews"
      aria-label="Client testimonials and Google reviews"
      className="section-pad"
      style={{ background: 'var(--green-lt)' }}
    >
      <div className="container mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="section-tag reveal">Client Stories</span>
          <h2
            className="text-h2 reveal reveal-d1"
            style={{ fontFamily: 'var(--ff-serif)' }}
          >
            What Pune Homeowners Say
          </h2>
          <div className="divider divider-center reveal reveal-d1" />
          <div className="flex items-center justify-center gap-3 reveal reveal-d2">
            <GoogleRating />
          </div>
        </div>

        {/* Featured 2-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((review, i) => (
            <FeaturedCard key={review.id} review={review} delay={i + 1} />
          ))}
        </div>

        {/* Secondary 4-up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((review, i) => (
            <SmallCard key={review.id} review={review} delay={i + 1} />
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-12 text-center reveal">
          <p className="text-lead mb-4">
            Read all 18 reviews on Google Maps.
          </p>
          <a
            href="https://g.co/kgs/koshainteriors"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline px-7 py-3"
            aria-label="View all Google reviews for Kosha Interiors"
          >
            <GoogleIcon />
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Featured Review Card ─────────────────────────────────── */
function FeaturedCard({ review, delay }) {
  return (
    <article
      className={`reveal reveal-d${delay} card p-7 flex flex-col gap-5`}
      aria-label={`Review by ${review.name}`}
      style={{ background: 'var(--surface)' }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-base"
            style={{ background: review.avatarBg }}
            aria-hidden="true"
          >
            {review.avatar}
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{review.name}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{review.project}</p>
          </div>
        </div>
        <GoogleIcon small />
      </div>

      <StarRow count={review.rating} />

      <blockquote
        className="text-base leading-relaxed flex-1 italic"
        style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
      >
        "{highlightText(review.text, review.highlight)}"
      </blockquote>

      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{review.date}</p>
    </article>
  )
}

/* ── Small Review Card ────────────────────────────────────── */
function SmallCard({ review, delay }) {
  return (
    <article
      className={`reveal reveal-d${delay} card p-5 flex flex-col gap-3`}
      aria-label={`Review by ${review.name}`}
      style={{ background: 'var(--surface)' }}
    >
      <StarRow count={review.rating} size={12} />
      <blockquote
        className="text-sm leading-relaxed flex-1 italic"
        style={{ fontFamily: 'var(--ff-serif)', color: 'var(--text)' }}
      >
        "{highlightText(review.text, review.highlight)}"
      </blockquote>
      <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid var(--border)' }}>
        <div>
          <p className="text-xs font-semibold" style={{ color: 'var(--text)' }}>{review.name}</p>
          <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{review.project}</p>
        </div>
        <GoogleIcon small />
      </div>
    </article>
  )
}

/* ── Helpers ─────────────────────────────────────────────── */
function GoogleRating() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <GoogleIcon />
      <StarRow count={5} />
      <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>4.9</span>
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>· 18 reviews</span>
    </div>
  )
}

function StarRow({ count = 5, size = 14 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon({ small = false }) {
  const s = small ? 18 : 22
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
