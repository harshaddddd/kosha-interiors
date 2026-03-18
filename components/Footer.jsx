'use client'

export default function Footer() {
  const year = new Date().getFullYear()
  const wa = () => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")}`, '_blank')

  return (
    <footer style={{ background: 'var(--ink)', padding: 'clamp(48px,7vw,80px) 0 clamp(24px,4vw,32px)' }} role="contentinfo">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--ff-display)', fontSize: 26, fontWeight: 300, color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: 10 }}>Kosha<span style={{ color: 'var(--gold)' }}>.</span></p>
            <p style={{ fontSize: 12, color: 'rgba(245,239,230,0.4)', maxWidth: 220, lineHeight: 1.7, marginBottom: 20 }}>Pune's highest-rated woman-owned interior design studio. 2BHK & 3BHK specialists.</p>
            <div style={{ display: 'flex', gap: 3, marginBottom: 4 }}>
              {[...Array(5)].map((_, i) => (<svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>))}
            </div>
            <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.3)', letterSpacing: '0.06em' }}>4.9 · 18 Google Reviews</p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Navigate</p>
            {['Work', 'Studio', 'Process', 'Reviews', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ display: 'block', fontSize: 13, color: 'rgba(245,239,230,0.5)', marginBottom: 10, transition: 'color 0.2s', minHeight: 28, lineHeight: '28px' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,230,0.5)'}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Contact</p>
            <a href="tel:+917700071665" style={{ display: 'block', fontSize: 13, color: 'rgba(245,239,230,0.5)', marginBottom: 10, minHeight: 28, lineHeight: '28px' }}>+91 77000 71665</a>
            <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.5)', marginBottom: 10 }}>Dhanori, Pune</p>
            <button onClick={wa} style={{ marginTop: 12, fontFamily: 'var(--ff-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '12px 22px', minHeight: 44, background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2, width: '100%' }}>
              Book Free Visit
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(245,239,230,0.07)', paddingTop: 22, marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.22)', letterSpacing: '0.04em' }}>© {year} Kosha Interiors · Interior Designer in Dhanori, Pune</p>
          <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.18)' }}>Designed with intention.</p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: clamp(28px,5vw,64px);
        }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  )
}
