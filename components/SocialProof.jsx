'use client'
const T=['4.9 Stars on Google','Pune\'s Top-Rated Studio','50+ Homes Transformed','100% On-Time Delivery','Zero Hidden Costs','Women-Owned & Led','Civil to Carpentry','Transparent Pricing']
export default function SocialProof(){
  return(
    <section aria-label="Trust indicators" style={{background:'var(--ink)',borderTop:'1px solid rgba(200,169,110,.1)',borderBottom:'1px solid rgba(200,169,110,.1)',padding:'16px 0',overflow:'hidden'}}>
      <div className="mq-t" aria-hidden="true">
        {[...T,...T].map((t,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',flexShrink:0}}>
            <span style={{fontSize:10,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',color:i%3===0?'var(--gold)':'rgba(242,237,223,.4)',whiteSpace:'nowrap',padding:'0 32px'}}>{t}</span>
            <span style={{color:'rgba(200,169,110,.35)',fontSize:18,lineHeight:1}}>+</span>
          </div>
        ))}
      </div>
    </section>
  )
}
