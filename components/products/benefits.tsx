"use client"

import { motion } from "framer-motion"
import { Settings, FastForward, BarChart3 } from "lucide-react"

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

export function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E2E] via-[#00FF85]/10 to-[#1E1E2E]" />

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
                <div className="relative h-[400px] w-full">
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#00FF85]/40 rounded-md"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#00FF85]/30 rounded-full"></div>

                  <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2">
                    <div className="relative w-16 h-40">
                      <div className="absolute bottom-0 w-full h-24 bg-[#00FF85]/80 rounded-md"></div>
                      <div className="absolute top-0 w-full h-16 rounded-full overflow-hidden bg-blue-500/20">
                        <div className="w-full h-full bg-blue-500/40 rounded-t-full"></div>
                      </div>
                      <div className="absolute top-12 left-3 w-10 h-10 bg-blue-500/40 rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/3 transform translate-x-1/2">
                    <div className="relative w-16 h-40">
                      <div className="absolute bottom-0 w-full h-24 bg-[#00FF85]/80 rounded-md"></div>
                      <div className="absolute top-0 w-full h-16 rounded-full overflow-hidden bg-indigo-500/20">
                        <div className="w-full h-full bg-indigo-500/40 rounded-t-full"></div>
                      </div>
                      <div className="absolute top-12 left-3 w-10 h-10 bg-indigo-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
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

