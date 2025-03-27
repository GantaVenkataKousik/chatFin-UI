import { Navbar } from "@/components/navbar"
import { ThreeBackground } from "@/components/three-background"
import { Footer } from "@/components/footer"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { RelatedPosts } from "@/components/blog/related-posts"
import { NewsletterSection } from "@/components/blog/newsletter-section"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use mock data

  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="pt-24">
        <BlogPostHeader slug={params.slug} />
        <BlogPostContent slug={params.slug} />
        <RelatedPosts />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

