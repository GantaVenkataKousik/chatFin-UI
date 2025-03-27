import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogGrid } from "@/components/blog/blog-grid"
import { NewsletterSection } from "@/components/blog/newsletter-section"

export default function BlogPage() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <BlogHero />
        <FeaturedPost />
        <BlogGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

