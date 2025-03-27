"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface BlogPostContentProps {
  slug: string
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  // In a real app, you would fetch the blog post content based on the slug
  // For now, we'll use mock content

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p>
              Generative AI is transforming the finance industry by automating workflows, delivering insights, and
              creating value in ways we couldn't imagine a decade ago. Whether you're a finance professional or an
              executive navigating this evolving space, here's your go-to glossary for understanding the key terms and
              concepts in generative AI for finance.
            </p>

            <div className="my-8 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zAx3zr6EYfaG71CgMSva25z2I6h69B.png"
                alt="Cryptocurrency and financial charts"
                fill
                className="object-cover"
              />
            </div>

            <h2>Artificial Intelligence (AI)</h2>
            <p>
              The simulation of human intelligence processes by machines, particularly computer systems. In finance, AI
              systems can analyze data, identify patterns, make predictions, and automate routine tasks.
            </p>

            <h2>Machine Learning (ML)</h2>
            <p>
              A subset of AI that enables systems to learn and improve from experience without being explicitly
              programmed. ML algorithms in finance can analyze historical data to predict market trends, detect fraud,
              and optimize investment portfolios.
            </p>

            <h2>Generative AI</h2>
            <p>
              AI systems that can create new content, including text, images, and data, based on patterns learned from
              existing data. In finance, generative AI can produce financial reports, create synthetic data for testing,
              and generate personalized financial advice.
            </p>

            <div className="my-8 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xww1kCbNVIOeagA9c1vIJszhmWm0aw.png"
                alt="Financial data visualization"
                fill
                className="object-cover"
              />
            </div>

            <h2>Large Language Models (LLMs)</h2>
            <p>
              Advanced AI models trained on vast amounts of text data that can understand and generate human-like text.
              In finance, LLMs can draft financial documents, answer complex queries, and extract insights from
              unstructured financial data.
            </p>

            <h2>Natural Language Processing (NLP)</h2>
            <p>
              A field of AI focused on enabling computers to understand, interpret, and generate human language. NLP in
              finance can analyze earnings calls, extract information from financial documents, and enable
              conversational interfaces for financial services.
            </p>

            <h2>Conclusion</h2>
            <p>
              As generative AI continues to evolve, staying informed about these key concepts will help finance
              professionals leverage these technologies effectively. Whether you're implementing AI solutions or
              evaluating their potential impact, understanding the language of generative AI is the first step toward
              harnessing its transformative power in finance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

