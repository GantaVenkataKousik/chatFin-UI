"use client"

import { motion } from "framer-motion"
import { Clock, BarChart, FastForward } from "lucide-react"

const features = [
  {
    title: "Efficiency Gains",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    icon: Clock,
  },
  {
    title: "Faster Close",
    description: "Accelerate financial closing processes with AI, ensuring timely and accurate financial reporting.",
    icon: FastForward,
  },
  {
    title: "Better Analysis",
    description: "Enhance financial insights with deep, AI-powered analysis for informed decision-making.",
    icon: BarChart,
  },
]

export function FeaturesCards() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E1E2E]/80 backdrop-blur-sm border border-[#1E1E2E] rounded-2xl p-8 h-full"
            >
              <div className="text-[#00FF85] mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <div className="h-1 w-full bg-gradient-to-r from-[#00FF85]/0 via-[#00FF85] to-[#00FF85]/0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

