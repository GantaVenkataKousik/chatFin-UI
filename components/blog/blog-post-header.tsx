"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface BlogPostHeaderProps {
  slug: string
}

export function BlogPostHeader({ slug }: BlogPostHeaderProps) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we'll use mock data based on the slug

  // Find the blog post that matches the slug
  const blogPost = {
    title: "The Generative AI Glossary for Finance",
    author: "Tara Parker",
    date: "February 4, 2025",
    category: "Uncategorized",
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-[#1E1E2E] to-[#1E1E2E]/90" />

      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1H3wW3fskgD9N6WziX3g96Lf8ZTYy7.png"
          alt="Financial data background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {blogPost.title}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>by {blogPost.author}</span>
            <span>|</span>
            <span>{blogPost.date}</span>
            <span>|</span>
            <span>{blogPost.category}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

