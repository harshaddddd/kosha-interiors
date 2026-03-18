import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import SocialProof     from '@/components/SocialProof'
import KoshaDifference from '@/components/KoshaDifference'
import Portfolio       from '@/components/Portfolio'
import MeetDesigner    from '@/components/MeetDesigner'
import Process         from '@/components/Process'
import Testimonials    from '@/components/Testimonials'
import CTA             from '@/components/CTA'
import Footer          from '@/components/Footer'
import WhatsAppFloat   from '@/components/WhatsAppFloat'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* 1. Hero — Hook + primary CTA */}
        <Hero />

        {/* 2. Social Proof — Immediate trust bar */}
        <SocialProof />

        {/* 3. Objection handling — Why Kosha */}
        <KoshaDifference />

        {/* 4. Portfolio — Visual proof */}
        <Portfolio />

        {/* 5. Meet Designer — Humanise the brand */}
        <MeetDesigner />

        {/* 6. Process — Friction removal */}
        <Process />

        {/* 7. Testimonials — Social proof wall */}
        <Testimonials />

        {/* 8. Final CTA — Conversion hook */}
        <CTA />
      </main>

      <Footer />

      {/* Persistent floating WhatsApp button */}
      <WhatsAppFloat />
    </>
  )
}
