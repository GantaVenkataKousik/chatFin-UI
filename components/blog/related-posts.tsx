"use client"

import { motion } from "framer-motion"
import { BlogCard } from "./blog-card"

export function RelatedPosts() {
  // Updated related posts data with real images
  const relatedPosts = [
    {
      title: "LLMs Did the Talking, Now LAMs Do the Doing",
      excerpt:
        "It seems like every tech headline in 2025 has one thing in common: AI agents. From boardrooms to coffee shops, everyone's talking about how this year belongs to AI agents.",
      date: "Jan 8, 2025",
      category: "Uncategorized",
      slug: "llms-did-talking-lams-doing",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cXdI1PWzTJ6wQTj0dQ5s7jRR5e9GJE.png",
      imageAlt: "Financial analysis meeting",
    },
    {
      title: "What Makes a Great Controller",
      excerpt:
        "A great controller holds one of the most crucial roles in any organization, ensuring accurate financial management and providing strategic insights.",
      date: "Nov 20, 2024",
      category: "Uncategorized",
      slug: "what-makes-great-controller",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7tMAf6xSuxnBGsbSJkzvTUmN9092xF.png",
      imageAlt: "Financial documents and charts",
    },
    {
      title: "Myths about Finance AI Agents",
      excerpt:
        "While AI is revolutionizing finance, there are still many myths about it. Here, we'll break down five common myths in simple terms.",
      date: "Oct 15, 2024",
      category: "Uncategorized",
      slug: "myths-about-finance-ai-agents",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kiryLjMVN5YaG03D0onlK3fNWNwsOC.png",
      imageAlt: "Financial data visualization",
    },
  ]

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Related Posts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              slug={post.slug}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

