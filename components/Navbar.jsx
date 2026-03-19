'use client'
import{useState,useEffect}from'react'

const LINKS=[
  {l:'Work',h:'#portfolio'},{l:'Studio',h:'#about'},
  {l:'Process',h:'#process'},{l:'Reviews',h:'#reviews'},{l:'Contact',h:'#contact'},
]

export default function Navbar(){
  const[scrolled,setScrolled]=useState(false)
  const[open,setOpen]=useState(false)

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>50)
    window.addEventListener('scroll',fn,{passive:true})
    return()=>window.removeEventListener('scroll',fn)
  },[])

  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])

  const wa=()=>{window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")},'_blank')`}

  const S={
    nav:{
      position:'fixed',top:0,left:0,right:0,zIndex:50,
      padding:scrolled?'12px 0':'22px 0',
      transition:'padding .4s var(--ease),background .4s,box-shadow .4s',
      background:scrolled?'rgba(242,237,223,.94)':'transparent',
      backdropFilter:scrolled?'blur(16px)':'none',
      boxShadow:scrolled?'0 1px 0 rgba(200,169,110,.15)':'none',
    },
    wrap:{maxWidth:1320,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)',display:'flex',alignItems:'center',justifyContent:'space-between'},
    logo:{fontFamily:"'Cormorant Garant',serif",fontSize:24,fontWeight:700,color:open?'var(--cream)':(scrolled?'var(--ink)':'var(--cream)'),letterSpacing:'-.01em',transition:'color .3s',zIndex:60,position:'relative'},
  }

  return(
    <>
      <nav style={S.nav}>
        <div style={S.wrap}>
          <a href="#" style={S.logo}>Kosha<span style={{color:'var(--gold)'}}>.</span></a>

          {/* Desktop links */}
          <div style={{display:'flex',gap:36,alignItems:'center'}} className="desk">
            {LINKS.map(({l,h})=>(
              <a key={h} href={h} style={{fontSize:11,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',color:scrolled?'var(--muted)':'rgba(242,237,223,.65)',transition:'color .2s',position:'relative'}}
                onMouseEnter={e=>{e.currentTarget.style.color='var(--gold)'}}
                onMouseLeave={e=>{e.currentTarget.style.color=scrolled?'var(--muted)':'rgba(242,237,223,.65)'}}
              >{l}</a>
            ))}
            <button onClick={wa} style={{fontSize:10,fontWeight:800,letterSpacing:'.16em',textTransform:'uppercase',padding:'11px 26px',minHeight:44,background:'var(--gold)',color:'var(--ink)',border:'none',borderRadius:2,transition:'transform .3s var(--ease),background .3s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.background='#dab87a'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.background='var(--gold)'}}
            >Free Visit</button>
          </div>

          {/* Hamburger */}
          <button onClick={()=>setOpen(!open)} aria-label={open?'Close':'Open'} className="mob"
            style={{width:44,height:44,flexDirection:'column',justifyContent:'center',gap:6,background:'none',border:'none',padding:'0 4px',zIndex:60,position:'relative'}}
          >
            {[
              {tr:open?'translateY(10px) rotate(45deg)':'none'},
              {op:open?0:1,w:open?'100%':'60%'},
              {tr:open?'translateY(-10px) rotate(-45deg)':'none'},
            ].map((s,i)=>(
              <span key={i} style={{display:'block',height:1.5,background:open?'var(--cream)':(scrolled?'var(--ink)':'var(--cream)'),borderRadius:2,transition:'all .4s var(--ease)',...(s.tr?{transform:s.tr}:{}),(s.op!==undefined?{opacity:s.op}:{}),(s.w?{width:s.w}:{})}}/>
            ))}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div style={{
        position:'fixed',inset:0,zIndex:40,background:'var(--ink)',
        clipPath:open?'circle(200% at calc(100% - 42px) 32px)':'circle(0% at calc(100% - 42px) 32px)',
        transition:'clip-path .75s var(--ease)',
        display:'flex',flexDirection:'column',
        padding:'0 clamp(24px,6vw,64px)',overflow:'hidden',
      }} aria-hidden={!open}>
        {/* Giant ghost text */}
        <span aria-hidden="true" style={{position:'absolute',bottom:-60,right:-40,fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(220px,40vw,380px)',fontWeight:700,lineHeight:1,color:'rgba(255,255,255,.03)',userSelect:'none',letterSpacing:'-.05em'}}>K</span>

        {/* Links */}
        <nav style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'center',gap:4,paddingTop:80}}>
          {LINKS.map(({l,h},i)=>(
            <a key={h} href={h} onClick={()=>setOpen(false)} style={{
              fontFamily:"'Cormorant Garant',serif",
              fontSize:'clamp(44px,11vw,80px)',fontWeight:300,lineHeight:1.08,
              color:'var(--cream)',letterSpacing:'-.025em',
              display:'flex',alignItems:'center',gap:20,
              padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,.05)',
              transition:`opacity .55s var(--ease) ${i*.07}s,transform .55s var(--ease) ${i*.07}s`,
              opacity:open?1:0,transform:open?'none':'translateX(-24px)',
            }}>
              <span style={{fontSize:10,fontWeight:800,letterSpacing:'.18em',color:'var(--gold)',minWidth:24,fontFamily:"'Syne',sans-serif"}}>0{i+1}</span>
              {l}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{paddingBottom:40,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.07)'}}>
          <p style={{fontSize:9,fontWeight:800,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:8}}>Call / WhatsApp</p>
          <a href="tel:+917700071665" style={{fontFamily:"'Cormorant Garant',serif",fontSize:'clamp(22px,5vw,32px)',color:'var(--cream)',fontWeight:300,display:'block',marginBottom:20}}>+91 77000 71665</a>
          <button onClick={()=>{setOpen(false);wa()}} style={{fontFamily:"'Syne',sans-serif",fontSize:10,fontWeight:800,letterSpacing:'.16em',textTransform:'uppercase',padding:'15px 32px',minHeight:50,width:'100%',background:'var(--gold)',color:'var(--ink)',border:'none',borderRadius:2}}>Book Free Site Visit</button>
        </div>
      </div>
    </>
  )
}
