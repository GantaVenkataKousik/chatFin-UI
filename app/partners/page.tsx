import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { PartnersHero } from "@/components/partners/partners-hero"
import { PartnerTypes } from "@/components/partners/partner-types"
import { PartnerShowcase } from "@/components/partners/partner-showcase"
import { PartnerBenefits } from "@/components/partners/partner-benefits"
import { ContactForm } from "@/components/partners/contact-form"

export default function PartnersPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <PartnersHero />
        <PartnerTypes />
        <PartnerShowcase />
        <PartnerBenefits />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

