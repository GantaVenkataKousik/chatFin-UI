"use client"

import { motion } from "framer-motion"

export function PartnersHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Partner with </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/70">
              ChatFin
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join our partner ecosystem and help transform finance and accounting operations with AI
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

