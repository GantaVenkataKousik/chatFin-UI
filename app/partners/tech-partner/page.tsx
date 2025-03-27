import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { TechPartnerHero } from "@/components/partners/tech-partner/tech-partner-hero"
import { TechPartnerInfo } from "@/components/partners/tech-partner/tech-partner-info"
import { TechPartnerBenefits } from "@/components/partners/tech-partner/tech-partner-benefits"
import { TechPartnerContact } from "@/components/partners/tech-partner/tech-partner-contact"

export default function TechPartnerPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <TechPartnerHero />
        <TechPartnerInfo />
        <TechPartnerBenefits />
        <TechPartnerContact />
      </main>
      <Footer />
    </>
  )
}

