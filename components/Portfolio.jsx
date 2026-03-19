'use client'
import{useEffect,useRef,useState}from'react'
import Image from'next/image'

const P=[
  {id:1,t:'Serene 3BHK',l:'Dhanori',tag:'Full Home',b:'14L',img:'/images/project-1.webp',col:7,ar:'2/3',grad:'#2a2218'},
  {id:2,t:'Minimalist Living',l:'Viman Nagar',tag:'Living Room',b:'2.8L',img:'/images/project-2.webp',col:5,ar:'3/4',grad:'#1e2a20'},
  {id:3,t:'Modular Kitchen',l:'Kalyani Nagar',tag:'Kitchen',b:'3.2L',img:'/images/project-3.webp',col:5,ar:'4/5',grad:'#252020'},
  {id:4,t:'Master Bedroom',l:'Baner',tag:'Bedroom',b:'2.1L',img:'/images/project-4.webp',col:7,ar:'16/10',grad:'#1e2228'},
  {id:5,t:'Compact 2BHK',l:'Kharadi',tag:'Full Home',b:'9.5L',img:'/images/project-5.webp',col:6,ar:'4/3',grad:'#282018'},
  {id:6,t:'Open Kitchen',l:'Wakad',tag:'Kitchen',b:'4.5L',img:'/images/project-6.webp',col:6,ar:'4/3',grad:'#201e28'},
]

function Card({p,i}){
  const[h,setH]=useState(false)
  return(
    <article className={`rv d${Math.min(i,4)}`}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      aria-label={p.t}
      style={{
        gridColumn:`span ${p.col}`,position:'relative',borderRadius:3,overflow:'hidden',
        aspectRatio:p.ar,background:p.grad,
        transition:'transform .55s var(--ease)',transform:h?'scale(.983)':'scale(1)',
      }}
    >
      <Image src={p.img} alt={p.t} fill style={{objectFit:'cover',transition:'transform .8s var(--ease)',transform:h?'scale(1.07)':'scale(1)'}} sizes="(max-width:767px) 100vw, 60vw"/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(10,10,8,.92) 0%, rgba(10,10,8,.05) 55%, transparent 100%)'}} aria-hidden="true"/>
      {/* Tag */}
      <div style={{position:'absolute',top:14,left:14,padding:'4px 12px',background:'rgba(10,10,8,.7)',backdropFilter:'blur(8px)',borderRadius:2,fontSize:9,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',color:'var(--gold)',border:'1px solid rgba(200,169,110,.2)'}}>{p.tag}</div>
      {/* Info */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'18px 20px',transform:h?'translateY(0)':'translateY(6px)',transition:'all .45s var(--ease)'}}>
        <p style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(15px,1.8vw,22px)',fontWeight:500,color:'var(--cream)',lineHeight:1.1,marginBottom:5}}>{p.t}</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <p style={{fontSize:9,color:'rgba(242,237,223,.5)',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:700}}>{p.l}</p>
          <p style={{fontFamily:"'Cormorant Garant',serif",fontSize:17,color:'var(--gold)',fontWeight:500}}>₹{p.b}</p>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio(){
  const ref=useRef(null)
  useEffect(()=>{
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el=>el.classList.add('on'));obs.unobserve(e.target)}})},{threshold:.05})
    if(ref.current)obs.observe(ref.current)
    return()=>obs.disconnect()
  },[])

  return(
    <section ref={ref} id="portfolio" style={{background:'#0A0A08',padding:'clamp(64px,9vw,128px) 0'}} aria-label="Portfolio">

      {/* Full-width diagonal top edge */}
      <div style={{width:'100%',height:2,background:'linear-gradient(to right,transparent,rgba(200,169,110,.2),transparent)',marginBottom:'clamp(44px,6vw,80px)'}} aria-hidden="true"/>

      <div style={{maxWidth:1320,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>

        {/* Header */}
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'clamp(36px,5vw,60px)',flexWrap:'wrap',gap:16}}>
          <div>
            <p className="rv" style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>— Selected Work</p>
            <h2 className="rv d1" style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(34px,6vw,80px)',fontWeight:300,lineHeight:.92,letterSpacing:'-.03em',color:'var(--cream)'}}>
              Spaces we have<br/><em style={{fontStyle:'italic',color:'var(--gold)'}}>breathed life into.</em>
            </h2>
          </div>
          <a href="#contact" className="rv d2" style={{fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(242,237,223,.4)',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(200,169,110,.25)',paddingBottom:3,transition:'color .25s'}}
            onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(242,237,223,.4)'}
          >Start Your Project <svg width="14" height="5" viewBox="0 0 14 5" fill="none" aria-hidden="true"><path d="M0 2.5h12M9 1l3 1.5L9 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>

        {/* Bento */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(12,1fr)',gap:8}}>
          {P.map((p,i)=><Card key={p.id} p={p} i={i}/>)}
        </div>
      </div>

      <style>{`
        @media(max-width:767px){
          #portfolio .rv{grid-column:span 6 !important;aspect-ratio:3/4 !important}
          #portfolio>div>div:last-child{grid-template-columns:1fr 1fr !important}
        }
        @media(min-width:768px) and (max-width:1023px){
          #portfolio .rv[aria-label]{grid-column:span 6 !important}
        }
      `}</style>
    </section>
  )
}
