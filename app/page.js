import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import SocialProof    from '@/components/SocialProof'
import KoshaDifference from '@/components/KoshaDifference'
import Portfolio      from '@/components/Portfolio'
import MeetDesigner   from '@/components/MeetDesigner'
import Process        from '@/components/Process'
import Testimonials   from '@/components/Testimonials'
import CTA            from '@/components/CTA'
import Footer         from '@/components/Footer'
import WhatsAppFloat  from '@/components/WhatsAppFloat'
import CustomCursor   from '@/components/CustomCursor'

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <KoshaDifference />
        <Portfolio />
        <MeetDesigner />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
