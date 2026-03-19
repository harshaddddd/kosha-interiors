'use client'
import{useEffect,useRef,useState}from'react'
import Image from'next/image'

export default function Hero(){
  const[loaded,setLoaded]=useState(false)
  const imgRef=useRef(null)

  useEffect(()=>{
    const t=setTimeout(()=>setLoaded(true),80)
    return()=>clearTimeout(t)
  },[])

  useEffect(()=>{
    const fn=()=>{if(imgRef.current)imgRef.current.style.transform=`scale(1.1) translateY(${window.scrollY*.12}px)`}
    window.addEventListener('scroll',fn,{passive:true})
    return()=>window.removeEventListener('scroll',fn)
  },[])

  const wa=()=>window.open(`https://wa.me/917700071665?text=${encodeURIComponent("Hi Vrushali! I'd like to book a free site visit.")},'_blank'`)

  return(
    <section id="home" style={{position:'relative',minHeight:'100svh',background:'var(--ink)',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>

      {/* BG Image */}
      <div ref={imgRef} style={{position:'absolute',inset:'-8%',transform:'scale(1.1)',willChange:'transform'}}>
        <Image src="/images/hero.webp" alt="Kosha Interiors project" fill priority quality={90} style={{objectFit:'cover',objectPosition:'center'}} sizes="100vw"/>
      </div>

      {/* Ink overlay — strong at bottom */}
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(10,10,8,.97) 0%, rgba(10,10,8,.6) 40%, rgba(10,10,8,.2) 100%)'}} aria-hidden="true"/>

      {/* Giant background numeral — decorative */}
      <span aria-hidden="true" style={{
        position:'absolute',right:'-2%',top:'50%',transform:'translateY(-55%)',
        fontFamily:"'Cormorant Garant',serif",
        fontSize:'clamp(260px,35vw,520px)',fontWeight:700,lineHeight:.9,
        color:'rgba(255,255,255,.04)',userSelect:'none',letterSpacing:'-.06em',
        transition:'opacity 2s',opacity:loaded?1:0,
      }}>50</span>

      {/* Diagonal rule line */}
      <div style={{position:'absolute',top:'42%',left:0,right:0,height:'1px',background:'rgba(200,169,110,.12)',transform:'rotate(-1.5deg)',transformOrigin:'left center'}} aria-hidden="true"/>

      {/* Content */}
      <div style={{position:'relative',zIndex:2,padding:'clamp(90px,10vw,140px) clamp(20px,5vw,72px) clamp(44px,7vw,88px)',maxWidth:900}}>

        {/* Eyebrow */}
        <p style={{
          fontSize:9,fontWeight:800,letterSpacing:'.22em',textTransform:'uppercase',
          color:'var(--gold)',marginBottom:24,
          opacity:loaded?1:0,transform:loaded?'none':'translateY(12px)',
          transition:'opacity .8s var(--ease) .15s,transform .8s var(--ease) .15s',
        }}>— Interior Studio · Pune · Est. 2016</p>

        {/* Headline — massive */}
        <h1 style={{
          fontFamily:"'Cormorant Garant',serif",
          fontSize:'clamp(52px,9vw,128px)',fontWeight:300,lineHeight:.92,
          letterSpacing:'-.03em',color:'var(--cream)',
          marginBottom:'clamp(24px,4vw,48px)',
          opacity:loaded?1:0,transform:loaded?'none':'translateY(36px)',
          transition:'opacity 1.1s var(--ease) .3s,transform 1.1s var(--ease) .3s',
        }}>
          Homes{' '}
          <em style={{fontStyle:'italic',color:'var(--gold)',display:'inline-block'}}>made</em>
          <br/>
          extraordinary<span style={{color:'var(--gold)'}}>.</span>
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily:"'Syne',sans-serif",
          fontSize:'clamp(13px,1.4vw,16px)',fontWeight:400,
          color:'rgba(242,237,223,.55)',lineHeight:1.8,maxWidth:440,
          marginBottom:'clamp(32px,5vw,52px)',
          opacity:loaded?1:0,transform:loaded?'none':'translateY(20px)',
          transition:'opacity .9s var(--ease) .5s,transform .9s var(--ease) .5s',
        }}>
          Pune's highest-rated woman-owned studio. We handle the design,
          contractors, and chaos — so you don't have to.
        </p>

        {/* CTAs */}
        <div style={{
          display:'flex',flexWrap:'wrap',gap:'clamp(10px,2vw,18px)',alignItems:'center',
          opacity:loaded?1:0,transform:loaded?'none':'translateY(16px)',
          transition:'opacity .9s var(--ease) .65s,transform .9s var(--ease) .65s',
        }}>
          <button onClick={wa} style={{
            fontSize:10,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',
            padding:'16px clamp(22px,3vw,40px)',minHeight:50,
            background:'var(--gold)',color:'var(--ink)',border:'none',borderRadius:2,
            transition:'transform .35s var(--ease),background .3s',
          }}
          onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.background='#dab87a'}}
          onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.background='var(--gold)'}}
          >Book Free Site Visit</button>

          <a href="#portfolio" style={{
            fontSize:10,fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase',
            color:'rgba(242,237,223,.5)',display:'inline-flex',alignItems:'center',gap:10,
            minHeight:50,borderBottom:'1px solid rgba(200,169,110,.3)',paddingBottom:3,
            transition:'color .3s',
          }}
          onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
          onMouseLeave={e=>e.currentTarget.style.color='rgba(242,237,223,.5)'}
          >
            Explore Our Work
            <svg width="18" height="7" viewBox="0 0 18 7" fill="none" aria-hidden="true"><path d="M0 3.5h16M12 1l4 2.5L12 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Trust capsule */}
        <div style={{
          marginTop:'clamp(32px,5vw,56px)',
          display:'inline-flex',alignItems:'center',gap:14,
          padding:'10px 18px',borderRadius:40,
          background:'rgba(242,237,223,.07)',backdropFilter:'blur(12px)',
          border:'1px solid rgba(200,169,110,.15)',width:'fit-content',
          opacity:loaded?1:0,transition:'opacity .9s var(--ease) .8s',
        }}>
          <div style={{display:'flex',gap:2}}>
            {[...Array(5)].map((_,i)=>(
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--gold)" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ))}
          </div>
          <span style={{fontSize:13,fontWeight:700,color:'var(--cream)'}}>4.9</span>
          <span style={{fontSize:10,color:'rgba(242,237,223,.4)',letterSpacing:'.08em'}}>18 Google Reviews</span>
          <div style={{width:1,height:16,background:'rgba(255,255,255,.12)'}} aria-hidden="true"/>
          <span style={{fontSize:10,color:'rgba(242,237,223,.4)',letterSpacing:'.08em'}}>Woman-Owned Studio</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{position:'absolute',bottom:32,right:'clamp(20px,5vw,64px)',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:8}} aria-hidden="true">
        <span style={{fontSize:9,fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(242,237,223,.3)',writingMode:'vertical-lr'}}>Scroll</span>
        <div style={{width:1,height:48,background:'linear-gradient(to bottom,rgba(200,169,110,.6),transparent)'}}/>
      </div>
    </section>
  )
}
