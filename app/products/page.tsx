import { Navbar } from "@/components/navbar"
import { StatsSection } from "@/components/products/stats-section"
import { FeaturesCards } from "@/components/products/features-cards"
import { ProductsHero } from "@/components/products/products-hero"
import { HowItWorks } from "@/components/products/how-it-works"
import { FeaturesGrid } from "@/components/products/features-grid"
import { CaseStudies } from "@/components/products/case-studies"
import { CTASection } from "@/components/products/cta-section"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <ProductsHero />
        <StatsSection />
        <FeaturesCards />
        <HowItWorks />
        <FeaturesGrid />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

