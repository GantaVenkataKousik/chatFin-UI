"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "99.8%", label: "Accuracy Rate" },
  { value: "85%", label: "Time Saved" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "10TB+", label: "Data Processed" },
]

export function StatsSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E1E2E]/80 backdrop-blur-sm border border-[#1E1E2E] rounded-2xl p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

