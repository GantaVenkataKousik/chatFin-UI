"use client"

import { motion } from "framer-motion"

export function SolutionsHero() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/70">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered solutions designed specifically for finance and accounting teams
          </p>
        </motion.div>
      </div>
    </section>
  )
}

