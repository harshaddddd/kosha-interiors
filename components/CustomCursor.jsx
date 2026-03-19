'use client'
import{useEffect,useRef}from'react'
export default function CustomCursor(){
  const dot=useRef(null),ring=useRef(null),pos=useRef({x:0,y:0}),rp=useRef({x:0,y:0})
  useEffect(()=>{
    if(window.matchMedia('(hover:none)').matches)return
    const d=dot.current,r=ring.current
    if(!d||!r)return
    d.style.display='block';r.style.display='block'
    const mv=e=>{pos.current={x:e.clientX,y:e.clientY}}
    window.addEventListener('mousemove',mv)
    let af
    const tick=()=>{
      d.style.left=pos.current.x+'px';d.style.top=pos.current.y+'px'
      rp.current.x+=(pos.current.x-rp.current.x)*.12
      rp.current.y+=(pos.current.y-rp.current.y)*.12
      r.style.left=rp.current.x+'px';r.style.top=rp.current.y+'px'
      af=requestAnimationFrame(tick)
    }
    af=requestAnimationFrame(tick)
    const on=()=>r.classList.add('big'),off=()=>r.classList.remove('big')
    const els=()=>document.querySelectorAll('a,button,[role="button"]')
    const attach=()=>els().forEach(el=>{el.addEventListener('mouseenter',on);el.addEventListener('mouseleave',off)})
    attach()
    const mo=new MutationObserver(attach)
    mo.observe(document.body,{childList:true,subtree:true})
    return()=>{window.removeEventListener('mousemove',mv);cancelAnimationFrame(af);mo.disconnect()}
  },[])
  return(
    <>
      <div id="c-dot" ref={dot} style={{display:'none'}} aria-hidden="true"/>
      <div id="c-ring" ref={ring} style={{display:'none'}} aria-hidden="true"/>
    </>
  )
}
