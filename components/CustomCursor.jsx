'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot  = dotRef.current
    const rng  = ringRef.current
    if (!dot || !rng) return

    dot.style.display = 'block'
    rng.style.display = 'block'
    document.body.style.cursor = 'none'

    const onMove = e => { pos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      // Dot — instant
      dot.style.left  = pos.current.x + 'px'
      dot.style.top   = pos.current.y + 'px'

      // Ring — lagging
      ring.current.x += (pos.current.x - ring.current.x) * 0.14
      ring.current.y += (pos.current.y - ring.current.y) * 0.14
      rng.style.left  = ring.current.x + 'px'
      rng.style.top   = ring.current.y + 'px'

      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Hover effect on interactive elements
    const addHover = () => rng.classList.add('hovering')
    const remHover = () => rng.classList.remove('hovering')
    const targets = document.querySelectorAll('a, button, [role="button"]')
    targets.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', remHover) })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(el => { el.removeEventListener('mouseenter', addHover); el.removeEventListener('mouseleave', remHover) })
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  style={{ display: 'none', position: 'fixed', pointerEvents: 'none', zIndex: 9999 }} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', zIndex: 9998 }} aria-hidden="true" />
    </>
  )
}
