'use client'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--ink)', padding: 'clamp(48px,7vw,80px) 0 clamp(24px,4vw,36px)' }} role="contentinfo">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 48 }}>
          <div>
            <p style={{ fontFamily: 'var(--ff-display)', fontSize: 28, fontWeight: 300, color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: 8 }}>
              Kosha<span style={{ color: 'var(--gold)' }}>.</span>
            </p>
            <p style={{ fontSize: 12, color: 'rgba(245,239,230,0.4)', maxWidth: 240, lineHeight: 1.7 }}>
              Pune's highest-rated woman-owned interior design studio. 2BHK & 3BHK specialists.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(32px,5vw,64px)', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Navigate</p>
              {['Work', 'Studio', 'Process', 'Reviews', 'Contact'].map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ display: 'block', fontSize: 13, color: 'rgba(245,239,230,0.55)', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,239,230,0.55)'}
                >{l}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>Contact</p>
              <a href="tel:+917700071665" style={{ display: 'block', fontSize: 13, color: 'rgba(245,239,230,0.55)', marginBottom: 10 }}>+91 77000 71665</a>
              <p style={{ fontSize: 13, color: 'rgba(245,239,230,0.55)', marginBottom: 10 }}>Dhanori, Pune</p>
              <button
                onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")}`, '_blank')}
                style={{
                  marginTop: 8,
                  fontFamily: 'var(--ff-body)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  padding: '10px 20px',
                  background: 'var(--gold)', color: 'var(--ink)',
                  border: 'none', borderRadius: 2,
                }}
              >Book Free Visit</button>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ borderTop: '1px solid rgba(245,239,230,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.25)', letterSpacing: '0.04em' }}>
            © {year} Kosha Interiors · Interior Designer in Dhanori, Pune
          </p>
          <p style={{ fontSize: 11, color: 'rgba(245,239,230,0.2)' }}>
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
