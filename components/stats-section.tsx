"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ThreeDCard } from "./3d-card"

const stats = [
  { label: "Accuracy Rate", value: "99.8%" },
  { label: "Time Saved", value: "85%" },
  { label: "Enterprise Clients", value: "500+" },
  { label: "Data Processed", value: "10TB+" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/80 via-[#1E1E2E] to-[#1E1E2E]/80" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary"
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Trusted by accountants, relied upon by finance teams
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ThreeDCard>
                <div className="relative p-6 rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/20 bg-black/20 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/[0.02] to-transparent" />

                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="mb-2"
                  >
                    <span className="text-4xl font-bold text-primary">{stat.value}</span>
                  </motion.div>

                  <p className="text-gray-300">{stat.label}</p>

                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0 rounded-2xl"
                    animate={{
                      borderColor: ["rgba(0,255,133,0)", "rgba(0,255,133,0.3)", "rgba(0,255,133,0)"],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
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

