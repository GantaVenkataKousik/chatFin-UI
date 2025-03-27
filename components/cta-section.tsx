"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MorphingBlob } from "./morphing-blob"
import { ScheduleDemoForm } from "./demo/schedule-demo-form"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#1E1E2E]/90 to-[#1E1E2E]" />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <MorphingBlob
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="#00FF85"
          size={800}
          opacity={0.1}
          speed={2}
          complexity={8}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
              Build 10X Finance Teams
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlock the full potential of your finance team, leveraging advanced A.I to streamline operations and enhance
            strategic decision-making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden"
              onClick={() => setIsDemoModalOpen(true)}
            >
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
                style={{ mixBlendMode: "overlay" }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Schedule Demo Modal */}
      <ScheduleDemoForm isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

