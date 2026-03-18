'use client'
import { useEffect, useRef } from 'react'

const ITEMS = [
  '4.9 Stars on Google',
  'Pune\'s Highest-Rated Studio',
  '50+ Homes Delivered',
  '100% On-Time',
  'Women-Owned & Led',
  'Zero Hidden Costs',
  'Transparent Budgeting',
  'Civil to Carpentry',
]

export default function SocialProof() {
  return (
    <section
      aria-label="Trust indicators"
      style={{
        background: 'var(--ink)',
        borderBottom: '1px solid rgba(201,169,110,0.15)',
        padding: '18px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
            <span style={{
              fontFamily: 'var(--ff-body)',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: i % 4 === 0 ? 'var(--gold)' : 'rgba(245,239,230,0.55)',
              whiteSpace: 'nowrap',
              padding: '0 28px',
            }}>
              {item}
            </span>
            <span style={{ color: 'rgba(201,169,110,0.4)', fontSize: 16 }}>·</span>
          </div>
        ))}
      </div>
    </section>
  )
}
