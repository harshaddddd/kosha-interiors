'use client'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}

export default function Footer() {
  const y = new Date().getFullYear()

  return (
    <footer style={{ background: '#07070605', borderTop: '1px solid rgba(10,10,8,.08)', padding: 'clamp(44px,7vw,80px) 0 clamp(20px,3vw,32px)' }} role="contentinfo">
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>

        <div className="foot-grid">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 26, fontWeight: 300, color: 'var(--ink)', letterSpacing: '-.01em', marginBottom: 10 }}>
              Kosha<span style={{ color: 'var(--gold)' }}>.</span>
            </p>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'var(--muted)', maxWidth: 220, lineHeight: 1.7, marginBottom: 16 }}>
              Pune's highest-rated woman-owned interior design studio.
            </p>
            <div style={{ display: 'flex', gap: 3, marginBottom: 4 }}>
              {[0, 1, 2, 3, 4].map(i => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.06em', fontWeight: 700 }}>4.9 · 18 Google Reviews</p>
          </div>

          {/* Navigate */}
          <div>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Navigate</p>
            {['Work', 'Studio', 'Process', 'Reviews', 'Contact'].map(l => (
              <a
                key={l}
                href={'#' + l.toLowerCase()}
                style={{ display: 'block', fontFamily: "'Jost',sans-serif", fontSize: 13, color: 'var(--muted)', marginBottom: 10, minHeight: 28, lineHeight: '28px', transition: 'color .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Contact</p>
            <a href="tel:+917700071665" style={{ display: 'block', fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>+91 77000 71665</a>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>Dhanori, Pune</p>
            <button
              onClick={() => openWA("Hi Vrushali! I'd like to book a free site visit.")}
              style={{ marginTop: 12, fontFamily: "'Jost',sans-serif", fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '12px 22px', minHeight: 44, background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2, width: '100%' }}
            >
              Book Free Visit
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(10,10,8,.08)', paddingTop: 20, marginTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '.04em' }}>© {y} Kosha Interiors · Interior Designer in Dhanori, Pune</p>
          <p style={{ fontSize: 10, color: 'rgba(10,10,8,.3)' }}>Designed with intention.</p>
        </div>
      </div>

      <style>{`
        .foot-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: clamp(24px,5vw,64px); }
        @media(max-width:767px) { .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; } .foot-grid > div:first-child { grid-column: 1 / -1; } }
      `}</style>
    </footer>
  )
}
