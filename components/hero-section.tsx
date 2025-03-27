"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { MorphingBlob } from "./morphing-blob"
import { ScheduleDemoForm } from "./demo/schedule-demo-form"

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <MorphingBlob
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4"
          color="#00FF85"
          size={800}
          opacity={0.1}
          speed={2}
        />
        <MorphingBlob
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4"
          color="#00FF85"
          size={600}
          opacity={0.08}
          speed={3}
          complexity={6}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#00FF85]/10 text-[#00FF85] px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">World&apos;s First</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00FF85] animate-gradient-x">
              Self Learning AI
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-white animate-gradient-x">
              for Finance and Accounting Teams
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The all-in-one AI platform for finance operations, helping Controllers, FP&A, AP and more with
            reconciliation, automation, data analysis, and document processing.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group"
              onClick={() => setIsDemoModalOpen(true)}
            >
              <span className="relative z-10">Schedule a Demo</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#00FF85] text-[#00FF85] hover:bg-[#00FF85]/10">
              Watch Video
            </Button>
          </motion.div>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-gray-400 mb-8">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              {["Microsoft", "Oracle", "SAP", "Salesforce", "Workday"].map((logo, index) => (
                <motion.div
                  key={logo}
                  className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    filter: "drop-shadow(0 0 8px rgba(0, 255, 133, 0.5))",
                  }}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-lg" />
                  <div className="relative h-full w-full flex items-center justify-center">
                    <span className="text-white/60 text-sm font-medium">{logo}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Schedule Demo Modal */}
      <ScheduleDemoForm isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

