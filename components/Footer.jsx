'use client'



const QUICK_LINKS = [
  { label: 'Our Work',   href: '#portfolio' },
  { label: 'Services',   href: '#services'  },
  { label: 'About',      href: '#about'     },
  { label: 'Process',    href: '#process'   },
  { label: 'Reviews',    href: '#reviews'   },
  { label: 'Contact',    href: '#contact'   },
]

const SERVICES = [
  '2BHK Interior Design',
  '3BHK Interior Design',
  'Turnkey Home Renovation',
  'Modular Kitchen Design',
  'Bedroom Design',
  'Living Room Design',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      aria-label="Kosha Interiors footer"
      style={{ background: '#1A2520' }}
    >
      {/* Main Footer */}
      <div
        className="container mx-auto px-5 md:px-10 py-14 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <p
                className="font-bold text-xl mb-1"
                style={{ fontFamily: 'var(--ff-serif)', color: '#FAF9F6' }}
              >
                Kosha <span style={{ color: 'var(--accent)' }}>Interiors</span>
              </p>
              <p style={{ color: 'rgba(250,249,246,0.45)', fontSize: '13px' }}>
                Pune's highest-rated woman-owned interior design studio.
              </p>
            </div>

            <div className="flex gap-0.5" aria-label="4.9 out of 5 stars on Google">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span style={{ color: 'rgba(250,249,246,0.6)', fontSize: '13px', marginLeft: '6px' }}>
                4.9 · 18 Google Reviews
              </span>
            </div>

            <p style={{ color: 'rgba(250,249,246,0.55)', fontSize: '14px', lineHeight: 1.7 }}>
              Transforming 2BHK & 3BHK apartments across Pune with transparent budgets and seamless execution.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <SocialLink
                href="https://instagram.com/kosha.interiors"
                label="Follow Kosha Interiors on Instagram"
                icon={<InstagramIcon />}
              />
              <SocialLink
                href="https://g.co/kgs/koshainteriors"
                label="Kosha Interiors on Google Maps"
                icon={<GoogleIcon />}
              />
              <SocialLink
                href="https://wa.me/917700071665"
                label="WhatsApp Kosha Interiors"
                icon={<WhatsAppIcon />}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 uppercase tracking-wider"
              style={{ color: 'rgba(250,249,246,0.4)' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-accent flex items-center gap-1.5 group"
                    style={{ color: 'rgba(250,249,246,0.65)' }}
                  >
                    <span
                      className="inline-block w-3 h-px transition-all duration-200 group-hover:w-4"
                      style={{ background: 'var(--accent)', opacity: 0.6 }}
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 uppercase tracking-wider"
              style={{ color: 'rgba(250,249,246,0.4)' }}
            >
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.map(service => (
                <li key={service}>
                  <span
                    className="text-sm"
                    style={{ color: 'rgba(250,249,246,0.65)' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold mb-5 uppercase tracking-wider"
              style={{ color: 'rgba(250,249,246,0.4)' }}
            >
              Get In Touch
            </h3>
            <address className="not-italic flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <div>
                  <p className="text-sm font-medium" style={{ color: '#FAF9F6' }}>Dhanori, Pune</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(250,249,246,0.5)' }}>
                    Serving Kharadi · Viman Nagar · Kalyani Nagar · Baner · Wakad
                  </p>
                </div>
              </div>

              <a
                href="tel:+917700071665"
                className="flex items-center gap-3 group"
                aria-label="Call +91 77000 71665"
              >
                <PhoneIcon />
                <span
                  className="text-sm font-medium transition-colors duration-200 group-hover:text-accent"
                  style={{ color: '#FAF9F6' }}
                >
                  +91 77000 71665
                </span>
              </a>

              <div className="pt-3">
                <button
                  onClick={() => {
                    const msg = encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")
                    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
                    if (typeof window !== 'undefined' && window.dataLayer) {
                      window.dataLayer.push({ event: 'whatsapp_click', location: 'footer' })
                    }
                  }}
                  className="btn btn-primary w-full justify-center py-3 text-sm"
                >
                  <WhatsAppIcon />
                  Book Free Site Visit
                </button>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(250,249,246,0.08)' }}
      >
        <div className="container mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(250,249,246,0.35)' }}>
            © {currentYear} Kosha Interiors. All rights reserved. · Interior Designer in Dhanori, Pune.
          </p>
          <p className="text-xs" style={{ color: 'rgba(250,249,246,0.25)' }}>
            Designed with care for Pune's homeowners.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ── Social Link ─────────────────────────────────────────── */
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      style={{
        background: 'rgba(250,249,246,0.08)',
        border: '1px solid rgba(250,249,246,0.12)',
        color: 'rgba(250,249,246,0.7)',
      }}
    >
      {icon}
    </a>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
