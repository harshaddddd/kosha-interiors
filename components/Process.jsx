'use client'

function openWA(msg) {
  window.open('https://wa.me/917700071665?text=' + encodeURIComponent(msg), '_blank')
}
import{useEffect,useRef}from'react'

const STEPS=[
  {n:'01',w:'Week 1',t:'Ideation & Budgeting',b:'Free on-site visit. Detailed itemised budget within 48 hours covering every trade. Design brief and mood board aligned to your vision.'},
  {n:'02',w:'Week 2–3',t:'3D Design & Approval',b:'Photorealistic renders of every room. Refine until you love every corner. Materials and finishes locked before work begins.'},
  {n:'03',w:'Week 4+',t:'Execution & Handover',b:'Vrushali on-site managing all trades daily. Weekly photo updates. Final walkthrough with 1-year service warranty included.'},
]

export default function Process(){
  const ref=useRef(null)
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el=>el.classList.add('on'));obs.unobserve(e.target)}})},{threshold:.06})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])

  return(
    <section ref={ref} id="process" style={{background:'var(--cream)',padding:'clamp(64px,9vw,128px) 0',position:'relative',overflow:'hidden'}} aria-label="Our process">

      {/* Giant step ghost */}
      <span aria-hidden="true" style={{position:'absolute',right:'-3%',top:'50%',transform:'translateY(-50%)',fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(200px,30vw,420px)',fontWeight:700,lineHeight:1,color:'rgba(10,10,8,.04)',letterSpacing:'-.06em',userSelect:'none'}}>3</span>

      <div style={{maxWidth:1320,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>

        <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,2fr)',gap:'clamp(32px,6vw,96px)',alignItems:'start'}} className="proc-grid">

          {/* Sticky left */}
          <div style={{position:'sticky',top:100}} className="proc-left">
            <p className="rv" style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--gold)',marginBottom:16}}>— How It Works</p>
            <h2 className="rv d1" style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(30px,4vw,54px)',fontWeight:300,lineHeight:.95,letterSpacing:'-.025em',color:'var(--ink)',marginBottom:20}}>
              From first call<br/>to <em style={{fontStyle:'italic',color:'var(--gold)'}}>dream home.</em>
            </h2>
            <p className="rv d2" style={{fontFamily:"'Jost',sans-serif",fontSize:'clamp(13px,1vw,14px)',color:'var(--muted)',lineHeight:1.8,maxWidth:260,marginBottom:32}}>
              A transparent, stress-free process built around your schedule and peace of mind.
            </p>
            <button className="rv d3"
              onClick={()=>openWA("Hi! I want to book a free site visit.")}
              style={{fontSize:10,fontWeight:800,letterSpacing:'.16em',textTransform:'uppercase',padding:'14px 26px',minHeight:48,background:'var(--ink)',color:'var(--cream)',border:'none',borderRadius:2,transition:'background .3s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--gold)';e.currentTarget.style.color='var(--ink)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='var(--ink)';e.currentTarget.style.color='var(--cream)'}}
            >Step 01 — Free</button>
          </div>

          {/* Steps */}
          <div>
            {STEPS.map(({n,w,t,b},i)=>(
              <div key={n} className={`rv d${i+1}`} style={{padding:'clamp(24px,4vw,52px) 0',borderTop:'1px solid rgba(10,10,8,.1)',display:'grid',gridTemplateColumns:'clamp(48px,5vw,64px) 1fr',gap:'clamp(14px,2vw,28px)'}}>
                {/* Ghost number */}
                <span style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(40px,5vw,64px)',fontWeight:700,lineHeight:1,color:'rgba(10,10,8,.07)',letterSpacing:'-.04em'}} aria-hidden="true">{i+1}</span>
                <div>
                  <p style={{fontSize:9,fontWeight:800,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:10}}>{w}</p>
                  <h3 style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(20px,2.5vw,32px)',fontWeight:400,lineHeight:1.1,letterSpacing:'-.015em',color:'var(--ink)',marginBottom:12}}>{t}</h3>
                  <p style={{fontFamily:"'Jost',sans-serif",fontSize:'clamp(13px,1vw,14px)',color:'var(--muted)',lineHeight:1.8}}>{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:767px){.proc-grid{grid-template-columns:1fr !important;gap:36px !important}.proc-left{position:static !important;top:auto !important}}
      `}</style>
    </section>
  )
}
