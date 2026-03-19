'use client'
import { useEffect, useRef, useState } from 'react'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}

export default function CTA() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', flat: '', msg: '' })
  const [done, setDone] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el => el.classList.add('on'))
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.06 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const sub = e => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = 'Hi Vrushali!\n\nName: ' + form.name + '\nPhone: ' + form.phone + '\nFlat: ' + (form.flat || 'Not specified') + '\nMessage: ' + (form.msg || 'Please get in touch.')
    openWA(msg)
    setDone(true)
  }

  const LBL = { fontSize: 9, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(242,237,223,.45)', display: 'block', marginBottom: 8 }
  const INP = { width: '100%', padding: '13px 16px', minHeight: 48, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 2, fontSize: 14, color: 'var(--cream)', fontFamily: "'Syne',sans-serif", outline: 'none', transition: 'border-color .2s' }

  return (
    <section ref={ref} id="contact" style={{ background: 'var(--ink)', padding: 'clamp(64px,9vw,128px) 0', position: 'relative', overflow: 'hidden' }} aria-label="Contact">
      <div style={{ position: 'absolute', top: '30%', left: 0, right: 0, height: 1, background: 'linear-gradient(to right,transparent,rgba(200,169,110,.1),transparent)', transform: 'rotate(-2deg)' }} aria-hidden="true" />
      <span aria-hidden="true" style={{ position: 'absolute', bottom: -60, right: -40, fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(160px,24vw,320px)', fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,.025)', userSelect: 'none', letterSpacing: '-.05em' }}>Let's</span>

      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,64px)' }}>
        <div style={{ marginBottom: 'clamp(48px,7vw,88px)' }}>
          <p className="rv" style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>— Get Started</p>
          <h2 className="rv d1" style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(44px,8vw,112px)', fontWeight: 300, lineHeight: .88, letterSpacing: '-.04em', color: 'var(--cream)' }}>
            Ready to<br />transform<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your home?</em>
          </h2>
        </div>

        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(40px,7vw,96px)', borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 'clamp(36px,5vw,64px)' }}>

          {/* Left */}
          <div className="rv">
            {[
              { l: 'Call / WhatsApp', v: '+91 77000 71665', h: 'tel:+917700071665' },
              { l: 'Location', v: 'Dhanori, Pune', h: null },
              { l: 'Response Time', v: 'Within 2 hrs on WhatsApp', h: null },
            ].map(({ l, v, h }) => (
              <div key={l} style={{ marginBottom: 32 }}>
                <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>{l}</p>
                {h
                  ? <a href={h} style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(18px,2vw,26px)', color: 'var(--cream)', fontWeight: 300, lineHeight: 1.2 }}>{v}</a>
                  : <p style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 'clamp(18px,2vw,26px)', color: 'var(--cream)', fontWeight: 300, lineHeight: 1.2 }}>{v}</p>
                }
              </div>
            ))}
            <button
              onClick={() => openWA("Hi Vrushali! I'd like to book a free site visit.")}
              style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '15px 28px', minHeight: 50, background: 'var(--gold)', color: 'var(--ink)', border: 'none', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 10, transition: 'background .3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#dab87a' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
            >
              <WAIcon /> Message on WhatsApp
            </button>
          </div>

          {/* Right form */}
          <div className="rv d2">
            {done ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garant',serif", fontSize: 28, color: 'var(--cream)', fontWeight: 400 }}>Message Sent!</h3>
                <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, color: 'rgba(242,237,223,.5)', lineHeight: 1.75 }}>Vrushali will reach out on WhatsApp within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={sub} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Fld label="Your Name *" type="text" ph="Rahul Sharma" val={form.name} set={v => setForm(p => ({ ...p, name: v }))} req INP={INP} LBL={LBL} />
                  <Fld label="WhatsApp No. *" type="tel" ph="+91 98765 43210" val={form.phone} set={v => setForm(p => ({ ...p, phone: v }))} req INP={INP} LBL={LBL} />
                </div>
                <div>
                  <label style={LBL}>Flat Type</label>
                  <select value={form.flat} onChange={e => setForm(p => ({ ...p, flat: e.target.value }))} style={{ ...INP, appearance: 'none', color: form.flat ? 'var(--cream)' : 'rgba(242,237,223,.35)' }}>
                    <option value="">Select type</option>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
                <div>
                  <label style={LBL}>Tell Us About Your Project</label>
                  <textarea rows={4} value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} placeholder="3BHK in Kharadi, modern warm design, budget 12L..." style={{ ...INP, resize: 'none' }} />
                </div>
                <button type="submit" disabled={!form.name || !form.phone}
                  style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.16em', textTransform: 'uppercase', padding: '16px', minHeight: 52, background: form.name && form.phone ? 'var(--gold)' : 'rgba(255,255,255,.08)', color: form.name && form.phone ? 'var(--ink)' : 'rgba(242,237,223,.3)', border: 'none', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', transition: 'background .3s,color .3s' }}
                >
                  <WAIcon /> Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:767px){.cta-grid{grid-template-columns:1fr !important;gap:40px !important}.form-row{grid-template-columns:1fr !important}}
      `}</style>
    </section>
  )
}

function Fld({ label, type, ph, val, set, req, INP, LBL }) {
  const [f, setF] = useState(false)
  return (
    <div>
      <label style={LBL}>{label}</label>
      <input type={type} placeholder={ph} value={val} onChange={e => set(e.target.value)} required={req}
        onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ ...INP, borderColor: f ? 'var(--gold)' : 'rgba(255,255,255,.08)' }}
      />
    </div>
  )
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
