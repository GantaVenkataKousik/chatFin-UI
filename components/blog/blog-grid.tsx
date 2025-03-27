"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BlogCard } from "./blog-card"
import { Button } from "@/components/ui/button"

// Updated blog post data with real images
const blogPosts = [
  {
    title: "Generative AI is transforming the finance industry",
    excerpt:
      "Generative AI is transforming the finance industry by automating workflows, delivering insights, and creating value in ways we couldn't imagine a decade ago.",
    date: "Feb 4, 2025",
    category: "Uncategorized",
    slug: "generative-ai-transforming-finance",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AJue4b2rc0mo4KyiPJ1vzS2c5DM8hX.png",
    imageAlt: "People analyzing financial charts and graphs",
  },
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
  {
    title: "What we learnt from deploying ChatFin AI in finance teams",
    excerpt:
      "At ChatFin, we've had the unique opportunity to collaborate with some amazingly forward-thinking finance teams across various industries.",
    date: "Sep 10, 2024",
    category: "Uncategorized",
    slug: "what-we-learnt-deploying-chatfin",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zAx3zr6EYfaG71CgMSva25z2I6h69B.png",
    imageAlt: "Cryptocurrency and market trends",
  },
  {
    title: "How not to handle the AI security?",
    excerpt:
      "Approaching AI security in finance shouldn't be about fear—it should be about empowerment. Secure AI allows companies to innovate confidently.",
    date: "Oct 4, 2024",
    category: "Uncategorized",
    slug: "how-not-to-handle-ai-security",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xww1kCbNVIOeagA9c1vIJszhmWm0aw.png",
    imageAlt: "Financial data security",
  },
  {
    title: "The Role of AI agents in Enhancing Collaboration between Controllers and FP&A",
    excerpt:
      "In today's dynamic business environment, maintaining financial health while preparing for growth requires more than just balancing the books.",
    date: "Oct 3, 2024",
    category: "Uncategorized",
    slug: "ai-agents-enhancing-collaboration",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1H3wW3fskgD9N6WziX3g96Lf8ZTYy7.png",
    imageAlt: "Stock market data display",
  },
  {
    title: "The Answer Is More Straightforward Than You Think: Finance AI—Build vs. Buy?",
    excerpt:
      "For organizations looking to implement generative AI applications in the finance sector, the debate between building in-house solutions versus purchasing from vendors can seem complex.",
    date: "Jul 18, 2024",
    category: "Uncategorized",
    slug: "finance-ai-build-vs-buy",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AJue4b2rc0mo4KyiPJ1vzS2c5DM8hX.png",
    imageAlt: "Financial team collaboration",
  },
  {
    title: "What is the difference? ChatFin Vs ChatGPT",
    excerpt:
      "ChatFIN is a purpose-driven AI assistant built specifically for accounting and finance. ChatFIN not only understands finance and accounting contexts but also has the ability to operate data.",
    date: "Jun 10, 2024",
    category: "Uncategorized",
    slug: "chatfin-vs-chatgpt",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kiryLjMVN5YaG03D0onlK3fNWNwsOC.png",
    imageAlt: "AI comparison chart",
  },
]

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length))
  }

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
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

        {visiblePosts < blogPosts.length && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={loadMorePosts}
              variant="outline"
              className="border-[#00FF85] text-[#00FF85] hover:bg-[#00FF85]/10"
            >
              Older Entries
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

