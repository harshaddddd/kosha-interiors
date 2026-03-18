'use client'

import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', flat: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.phone) return

    setLoading(true)

    // Compose WhatsApp message with form data
    const msg = encodeURIComponent(
      `Hi Vrushali! I'd like to enquire about interior design.\n\nName: ${form.name}\nPhone: ${form.phone}\nFlat type: ${form.flat || 'Not specified'}\nMessage: ${form.message || 'Please get in touch.'}`
    )

    // GTM tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submission',
        form_location: 'cta_section',
        flat_type: form.flat,
      })
    }

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    }, 600)
  }

  const handleDirectWhatsApp = () => {
    const msg = encodeURIComponent("Hi Vrushali! I'd like to discuss transforming my home. When can we schedule a free site visit?")
    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_click', location: 'cta_section' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Get in touch — Book a free consultation"
      className="section-pad"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container mx-auto px-5 md:px-10">
        <div
          className="rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ boxShadow: 'var(--shadow-lift)' }}
        >

          {/* ── Left: Dark panel ──────────────────────────── */}
          <div
            className="relative p-10 md:p-14 flex flex-col justify-between gap-10"
            style={{ background: 'var(--text)' }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
              style={{ background: 'var(--accent)' }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-8"
              style={{ background: 'var(--accent)' }}
              aria-hidden="true"
            />

            <div className="relative reveal">
              <span className="section-tag" style={{ color: 'var(--accent)' }}>Let's Begin</span>
              <h2
                className="mt-1"
                style={{
                  fontFamily: 'var(--ff-serif)',
                  fontSize: 'clamp(26px,3vw,40px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#FAF9F6',
                }}
              >
                Ready to Transform<br />
                <em className="not-italic" style={{ color: 'var(--accent)' }}>Your Home?</em>
              </h2>
              <div className="divider reveal reveal-d1" style={{ background: 'var(--accent)' }} />
              <p className="reveal reveal-d1" style={{ color: 'rgba(250,249,246,0.65)', lineHeight: 1.75, fontSize: '15px' }}>
                Let's discuss your ideas. The first site visit is completely free — no
                obligation, no pressure. Just an honest conversation about your home's potential.
              </p>
            </div>

            {/* Contact details */}
            <div className="relative flex flex-col gap-4 reveal reveal-d2">
              <a
                href="tel:+917700071665"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({ event: 'call_click', location: 'cta_section' })
                  }
                }}
                className="flex items-center gap-3 group"
                aria-label="Call Kosha Interiors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-accent"
                  style={{ background: 'rgba(212,163,115,0.15)', border: '1px solid rgba(212,163,115,0.3)' }}
                >
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'rgba(250,249,246,0.45)' }}>Call / WhatsApp</p>
                  <p className="text-sm font-semibold" style={{ color: '#FAF9F6' }}>+91 77000 71665</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,163,115,0.15)', border: '1px solid rgba(212,163,115,0.3)' }}
                >
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'rgba(250,249,246,0.45)' }}>Serving all of Pune</p>
                  <p className="text-sm font-semibold" style={{ color: '#FAF9F6' }}>Dhanori · Kharadi · Viman Nagar · Baner</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,163,115,0.15)', border: '1px solid rgba(212,163,115,0.3)' }}
                >
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'rgba(250,249,246,0.45)' }}>Response time</p>
                  <p className="text-sm font-semibold" style={{ color: '#FAF9F6' }}>Within 2 hours on WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="relative reveal reveal-d3">
              <button
                onClick={handleDirectWhatsApp}
                className="btn btn-primary w-full justify-center text-base py-4"
              >
                <WhatsAppIcon />
                Message on WhatsApp
              </button>
            </div>
          </div>

          {/* ── Right: Form ───────────────────────────────── */}
          <div
            className="p-10 md:p-14 flex flex-col justify-center"
            style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
          >
            {submitted ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 reveal">
                <div>
                  <h3
                    className="mb-1"
                    style={{ fontFamily: 'var(--ff-serif)', fontSize: '22px', color: 'var(--text)' }}
                  >
                    Send Us a Message
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                    Fill in the details below and Vrushali will be in touch within 2 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Your Name *"
                    name="name"
                    type="text"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Phone / WhatsApp *"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="flat"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Flat Type
                  </label>
                  <select
                    id="flat"
                    name="flat"
                    value={form.flat}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded text-sm transition-all duration-200 outline-none appearance-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1.5px solid var(--border)',
                      color: form.flat ? 'var(--text)' : 'var(--text-muted)',
                      fontFamily: 'var(--ff-sans)',
                    }}
                  >
                    <option value="">Select flat type</option>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="Villa">Villa / Bungalow</option>
                    <option value="Commercial">Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: 'var(--text)' }}
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="E.g. We just got possession of our 3BHK in Kharadi and want a modern, warm design within ₹12 lakhs…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded text-sm resize-none transition-all duration-200 outline-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1.5px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--ff-sans)',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.name || !form.phone}
                  className="btn btn-primary w-full justify-center text-base py-4"
                  style={{ opacity: (!form.name || !form.phone) ? 0.6 : 1 }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <SpinnerIcon /> Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <WhatsAppIcon /> Send via WhatsApp
                    </span>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                  By submitting, you agree to be contacted by Kosha Interiors via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Form Field ──────────────────────────────────────────── */
function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text)' }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded text-sm transition-all duration-200 outline-none"
        style={{
          background: 'var(--bg)',
          border: '1.5px solid var(--border)',
          color: 'var(--text)',
          fontFamily: 'var(--ff-sans)',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--accent)' }}
        onBlur={e => { e.target.style.borderColor = 'var(--border)' }}
      />
    </div>
  )
}

/* ── Success State ───────────────────────────────────────── */
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 py-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: '#EFF4F2', border: '2px solid var(--accent)' }}
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '24px', color: 'var(--text)' }}>
        Message Sent!
      </h3>
      <p style={{ color: 'var(--text-muted)', maxWidth: '300px', lineHeight: 1.7 }}>
        Vrushali will reach out on WhatsApp within 2 hours. Looking forward to creating your dream home!
      </p>
    </div>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}
function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.25"/>
      <path d="M21 12a9 9 0 01-9 9"/>
    </svg>
  )
}
