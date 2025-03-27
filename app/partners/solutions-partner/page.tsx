import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { SolutionsPartnerHero } from "@/components/partners/solutions-partner/solutions-partner-hero"
import { SolutionsPartnerInfo } from "@/components/partners/solutions-partner/solutions-partner-info"
import { SolutionsPartnerBenefits } from "@/components/partners/solutions-partner/solutions-partner-benefits"
import { SolutionsPartnerContact } from "@/components/partners/solutions-partner/solutions-partner-contact"

export default function SolutionsPartnerPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <SolutionsPartnerHero />
        <SolutionsPartnerInfo />
        <SolutionsPartnerBenefits />
        <SolutionsPartnerContact />
      </main>
      <Footer />
    </>
  )
}

