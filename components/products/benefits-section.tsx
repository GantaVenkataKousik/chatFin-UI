"use client"

import { motion } from "framer-motion"
import { Settings, FastForward, BarChart3 } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    title: "Efficiency Gains",
    description:
      "AI-driven process automation significantly reduces manual tasks, freeing up your team for strategic activities.",
    icon: Settings,
  },
  {
    title: "Faster Close",
    description:
      "Accelerate your financial close processes, ensuring reports are timely and reflect the true financial position.",
    icon: FastForward,
  },
  {
    title: "Better Analysis",
    description: "Gain deeper insights with AI-powered analysis to support more informed decision-making.",
    icon: BarChart3,
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E2E] via-[#1E1E2E]/95 to-[#00FF85]/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Benefits</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00FF85]/10 via-[#00FF85]/5 to-transparent overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl" />
          </motion.div>

          <div className="relative p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Finance team illustration"
                  width={500}
                  height={400}
                  className="mx-auto"
                />
              </motion.div>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <benefit.icon className="h-6 w-6 text-[#00FF85]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#00FF85] mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

