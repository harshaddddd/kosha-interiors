'use client'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', flat: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = encodeURIComponent(`Hi Vrushali!\n\nName: ${form.name}\nPhone: ${form.phone}\nFlat: ${form.flat || 'Not specified'}\nMessage: ${form.message || 'Please get in touch.'}`)
    window.open(`https://wa.me/917700071665?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="contact" style={{ background: 'var(--cream-dk)', padding: 'clamp(64px,9vw,120px) 0' }} aria-label="Contact">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,5vw,60px)' }}>

        <div style={{ marginBottom: 'clamp(40px,6vw,72px)' }}>
          <p className="section-label reveal" style={{ marginBottom: 14 }}>Get Started</p>
          <h2 className="reveal reveal-d1" style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(36px,6vw,88px)', fontWeight: 300, lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
            Ready to transform<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your home?</em>
          </h2>
        </div>

        <div className="cta-grid">

          {/* Left */}
          <div className="reveal">
            {[
              { label: 'Call / WhatsApp', val: '+91 77000 71665', href: 'tel:+917700071665' },
              { label: 'Location',        val: 'Dhanori, Pune',   href: null },
              { label: 'Response Time',   val: 'Within 2 hours on WhatsApp', href: null },
            ].map(({ label, val, href }) => (
              <div key={label} style={{ marginBottom: 28 }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 5 }}>{label}</p>
                {href
                  ? <a href={href} style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(18px,2vw,26px)', color: 'var(--ink)', fontWeight: 400, lineHeight: 1.2 }}>{val}</a>
                  : <p style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(18px,2vw,26px)', color: 'var(--ink)', fontWeight: 400, lineHeight: 1.2 }}>{val}</p>
                }
              </div>
            ))}
            <button
              onClick={() => window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")}`, '_blank')}
              style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 28px', minHeight: 48, background: 'var(--ink)', color: 'var(--cream)', border: 'none', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 10, transition: 'background 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ink)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--cream)' }}
            >
              <WAIcon /> Message on WhatsApp
            </button>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-d2">
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: 26, color: 'var(--ink)', fontWeight: 400 }}>Message Sent!</h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75 }}>Vrushali will reach out on WhatsApp within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-row">
                  <Field label="Your Name *" name="name" type="text" placeholder="Rahul Sharma" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} required />
                  <Field label="Phone / WhatsApp *" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} required />
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>Flat Type</label>
                  <select value={form.flat} onChange={e => setForm(p => ({...p, flat: e.target.value}))} style={{ width: '100%', padding: '13px 16px', minHeight: 48, background: 'var(--surface)', border: '1px solid rgba(13,13,13,0.12)', borderRadius: 2, fontSize: 14, color: form.flat ? 'var(--ink)' : 'var(--muted)', fontFamily: 'var(--ff-body)', outline: 'none', appearance: 'none' }}>
                    <option value="">Select flat type</option>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>Tell Us About Your Project</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} placeholder="E.g. 3BHK in Kharadi, modern warm design, budget around 12L..." style={{ width: '100%', padding: '13px 16px', background: 'var(--surface)', border: '1px solid rgba(13,13,13,0.12)', borderRadius: 2, fontSize: 14, color: 'var(--ink)', fontFamily: 'var(--ff-body)', resize: 'none', outline: 'none' }} />
                </div>
                <button type="submit" disabled={!form.name || !form.phone} style={{ fontFamily: 'var(--ff-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', minHeight: 52, background: form.name && form.phone ? 'var(--ink)' : 'rgba(13,13,13,0.15)', color: form.name && form.phone ? 'var(--cream)' : 'var(--muted)', border: 'none', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 0.3s, color 0.3s', width: '100%' }}>
                  <WAIcon /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: clamp(40px,6vw,80px);
          border-top: 1px solid rgba(13,13,13,0.1);
          padding-top: clamp(36px,5vw,64px);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 767px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label htmlFor={name} style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: 7 }}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ width: '100%', padding: '13px 16px', minHeight: 48, background: 'var(--surface)', border: `1px solid ${focused ? 'var(--gold)' : 'rgba(13,13,13,0.12)'}`, borderRadius: 2, fontSize: 14, color: 'var(--ink)', fontFamily: 'var(--ff-body)', outline: 'none', transition: 'border-color 0.2s' }}
      />
    </div>
  )
}

function WAIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}
