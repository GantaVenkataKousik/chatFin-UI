import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { SolutionsGrid } from "@/components/solutions/solutions-grid"
import { SolutionsContact } from "@/components/solutions/solutions-contact"

export default function SolutionsPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <SolutionsHero />
        <SolutionsGrid />
        <SolutionsContact />
      </main>
      <Footer />
    </>
  )
}

