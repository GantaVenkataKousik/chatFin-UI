"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProductsHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Bringing </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/70">
              AI to Finance process
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ChatFin is an innovative AI assistant designed specifically to empower finance teams by enhancing their
            efficiency, accuracy, and decision-making capabilities. Streamlining month-end processes to providing deep
            analytics, ChatFin ensures your finance function is more productive and agile.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group px-6 py-6 h-auto text-base">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

