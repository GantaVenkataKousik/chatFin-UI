"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FeaturedPost() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-purple-900/20 to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 text-[#00FF85] font-medium">Featured Post</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">The Generative AI Glossary for Finance</span>
              </h2>

              <div className="flex items-center gap-2 mb-6 text-gray-400">
                <span>by Tara Parker</span>
                <span>|</span>
                <span>February 4, 2025</span>
                <span>|</span>
                <span>Uncategorized</span>
              </div>

              <p className="text-lg text-gray-300 mb-8">
                Generative AI is transforming the finance industry by automating workflows, delivering insights, and
                creating value in ways we couldn't imagine a decade ago.
              </p>

              <Link href="/blog/the-generative-ai-glossary-for-finance">
                <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group">
                  Read Our Latest Post
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[300px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7tMAf6xSuxnBGsbSJkzvTUmN9092xF.png"
                  alt="Financial documents and charts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2E] to-transparent opacity-60" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

