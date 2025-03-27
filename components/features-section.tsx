"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Database, Cloud, Brain, BarChart } from "lucide-react"
import { ThreeDCard } from "./3d-card"

const features = [
  {
    title: "Platform Agnostic",
    description: "Seamlessly integrate with any financial ERP or datawarehouse.",
    icon: Cloud,
  },
  {
    title: "Reliable AI Output",
    description: "Advanced algorithms ensure high accuracy in financial operations.",
    icon: Brain,
  },
  {
    title: "Security",
    description: "Enterprise-grade encryption and compliance protocols.",
    icon: Shield,
  },
  {
    title: "Fast Processing",
    description: "Lightning-fast data processing and real-time insights.",
    icon: Zap,
  },
  {
    title: "Data Integration",
    description: "Connect with multiple data sources effortlessly.",
    icon: Database,
  },
  {
    title: "Advanced Analytics",
    description: "Powerful analytics tools for deeper insights.",
    icon: BarChart,
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#1E1E2E]/95 to-[#1E1E2E]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Key Features
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                initial={{ width: 0, left: "50%" }}
                animate={isInView ? { width: "100%", left: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to transform your financial operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ThreeDCard className="h-full">
                <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/10 h-full bg-black/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/[0.02] to-transparent" />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2 relative">
                    {feature.title}
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary" />
                  </h3>

                  <p className="text-gray-400 relative z-10">{feature.description}</p>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                    animate={{
                      opacity: [0, 0.7, 0],
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: index * 0.5,
                    }}
                  />
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

