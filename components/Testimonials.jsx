'use client'
import{useEffect,useRef,useState}from'react'

const R=[
  {n:'Hemant S.',p:'3BHK · Dhanori',r:5,t:"Vrushali beautifully balanced the communication and work between us and the renovation team. We never had to worry about a single thing — she handled everything flawlessly.",in:'H'},
  {n:'Prateek M.',p:'2BHK · Kharadi',r:5,t:"Budget-friendly without compromising on quality. She was upfront about every cost from day one. No hidden charges, no surprises. The flat looks absolutely stunning.",in:'P'},
  {n:'Akash & Priya R.',p:'3BHK · Viman Nagar',r:5,t:"The 3D designs she showed us were exactly how the final home turned out. Timelines were respected and the quality is excellent. Outstanding experience throughout.",in:'A'},
  {n:'Sunita K.',p:'Kitchen · Kalyani Nagar',r:5,t:"The final result is functional and gorgeous. She was available on call throughout the entire project and went above and beyond every single time.",in:'S'},
  {n:'Rahul D.',p:'2BHK · Wakad',r:5,t:"What I appreciated most was the transparency. Weekly photo updates from site. Vrushali managed all workers so I could focus on my work without worry.",in:'R'},
]

export default function Testimonials(){
  const ref=useRef(null)
  const[a,setA]=useState(0)

  useEffect(()=>{
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el=>el.classList.add('on'));obs.unobserve(e.target)}})},{threshold:.06})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])

  useEffect(()=>{const t=setInterval(()=>setA(x=>(x+1)%R.length),5000);return()=>clearInterval(t)},[])

  const cur=R[a]

  return(
    <section ref={ref} id="reviews" style={{background:'var(--sage)',padding:'clamp(64px,9vw,128px) 0',position:'relative',overflow:'hidden'}} aria-label="Client testimonials">

      {/* Giant open quote — huge decorative */}
      <span aria-hidden="true" style={{position:'absolute',top:-40,left:'clamp(10px,3vw,40px)',fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(200px,28vw,380px)',fontWeight:700,lineHeight:1,color:'rgba(255,255,255,.05)',userSelect:'none',pointerEvents:'none',letterSpacing:'-.05em'}}>"</span>

      {/* Gold diagonal rule */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,background:'linear-gradient(to right,transparent,rgba(200,169,110,.3),transparent)'}} aria-hidden="true"/>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:1,background:'linear-gradient(to right,transparent,rgba(200,169,110,.3),transparent)'}} aria-hidden="true"/>

      <div style={{maxWidth:1320,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>

        {/* Header */}
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'clamp(40px,6vw,80px)',flexWrap:'wrap',gap:16}}>
          <div>
            <p className="rv" style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>— Client Stories</p>
            <h2 className="rv d1" style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(32px,5vw,68px)',fontWeight:300,lineHeight:.95,letterSpacing:'-.03em',color:'var(--cream)'}}>
              What Pune<br/>homeowners <em style={{fontStyle:'italic',color:'var(--gold)'}}>actually say.</em>
            </h2>
          </div>
          {/* Google badge */}
          <div className="rv d2" style={{display:'flex',alignItems:'center',gap:10,padding:'10px 18px',border:'1px solid rgba(200,169,110,.25)',borderRadius:40}}>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <div>
              <div style={{display:'flex',gap:2}}>{[...Array(5)].map((_,i)=><svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
              <p style={{fontSize:9,color:'rgba(242,237,223,.45)',letterSpacing:'.1em',fontWeight:700}}>4.9 · 18 reviews</p>
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className="rv d2 testi-wrap" style={{borderTop:'1px solid rgba(242,237,223,.1)',paddingTop:'clamp(32px,5vw,64px)',display:'grid',gridTemplateColumns:'200px 1fr',gap:'clamp(28px,5vw,72px)',alignItems:'start'}}>

          {/* Reviewer sidebar */}
          <div className="testi-sidebar">
            <p style={{fontFamily:"'Syne',sans-serif",fontSize:9,color:'rgba(242,237,223,.3)',letterSpacing:'.14em',textTransform:'uppercase',marginBottom:20,fontWeight:700}}>{a+1} / {R.length}</p>
            <div style={{display:'flex',flexDirection:'column',gap:4}}>
              {R.map((r,i)=>(
                <button key={i} onClick={()=>setA(i)} style={{display:'flex',alignItems:'center',gap:12,background:'none',border:'none',padding:'9px 0 9px 14px',borderLeft:`2px solid ${i===a?'var(--gold)':'transparent'}`,transition:'all .3s',minHeight:48,textAlign:'left'}}>
                  <span style={{width:32,height:32,borderRadius:'50%',background:i===a?'var(--gold)':'rgba(255,255,255,.07)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Cormorant Garant',serif",fontSize:14,fontWeight:600,color:i===a?'var(--ink)':'rgba(242,237,223,.35)',flexShrink:0,transition:'all .3s'}}>{r.in}</span>
                  <div>
                    <p style={{fontSize:12,fontWeight:700,color:i===a?'var(--cream)':'rgba(242,237,223,.35)',transition:'color .3s',fontFamily:"'Syne',sans-serif"}}>{r.n}</p>
                    <p style={{fontSize:9,color:'rgba(242,237,223,.25)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:700}}>{r.p}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div key={a} style={{animation:'fq .45s ease forwards'}}>
            <blockquote style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(20px,2.8vw,38px)',fontWeight:300,lineHeight:1.4,letterSpacing:'-.01em',color:'var(--cream)',marginBottom:28,fontStyle:'italic'}}>
              "{cur.t}"
            </blockquote>
            <div style={{display:'flex',gap:3,marginBottom:10}}>{[...Array(cur.r)].map((_,i)=><svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
            <p style={{fontFamily:"'Syne',sans-serif",fontSize:13,fontWeight:700,color:'var(--gold)',letterSpacing:'.06em'}}>{cur.n}</p>
            <p style={{fontSize:9,color:'rgba(242,237,223,.4)',letterSpacing:'.12em',textTransform:'uppercase',fontWeight:700,marginTop:3}}>{cur.p}</p>
          </div>
        </div>

        {/* Mobile dots */}
        <div className="testi-dots" style={{display:'none',justifyContent:'center',gap:8,marginTop:32}}>
          {R.map((_,i)=><button key={i} onClick={()=>setA(i)} style={{width:i===a?24:8,height:8,borderRadius:99,background:i===a?'var(--gold)':'rgba(255,255,255,.2)',border:'none',padding:0,transition:'all .35s var(--ease)'}} aria-label={`Review ${i+1}`}/>)}
        </div>
      </div>

      <style>{`
        @keyframes fq{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @media(max-width:767px){
          .testi-wrap{grid-template-columns:1fr !important}
          .testi-sidebar{display:none !important}
          .testi-dots{display:flex !important}
        }
      `}</style>
    </section>
  )
}
