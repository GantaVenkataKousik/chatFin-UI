import { ThreeBackground } from "@/components/three-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <HeroSection />
      <Features />
      <StatsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </>
  )
}

