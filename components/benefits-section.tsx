"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Wallet, Clock, BarChartIcon as ChartBar } from "lucide-react"
import { MorphingBlob } from "./morphing-blob"

const benefits = [
  {
    title: "Efficiency Gains",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    icon: Clock,
  },
  {
    title: "Faster Close",
    description: "Accelerate financial closing processes with AI, ensuring timely and accurate financial reporting.",
    icon: ChartBar,
  },
  {
    title: "Better Analysis",
    description: "Enhance financial insights with deep, AI-powered analysis for informed decision-making.",
    icon: Wallet,
  },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/80 via-[#1E1E2E] to-[#1E1E2E]/80" />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <MorphingBlob
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
          color="#00FF85"
          size={600}
          opacity={0.05}
          speed={1.5}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/0 rounded-2xl blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>

                <p className="text-gray-300">{benefit.description}</p>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

