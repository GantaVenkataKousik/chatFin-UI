"use client"

import { motion } from "framer-motion"
import { Cloud, Brain, Shield, Plug, Server, Sparkles } from "lucide-react"

const features = [
  {
    title: "Platform Agnostic",
    description:
      "Works across various financial ERPs and data warehouses without being confined to specific software environments breaking down data silos.",
    icon: Cloud,
  },
  {
    title: "Reliable AI Output",
    description:
      "With advanced algorithms and continuous data validation, ChatFin delivers highly accurate outputs, enabling teams to make critical decisions.",
    icon: Brain,
  },
  {
    title: "Enhanced Security",
    description:
      "Data security is a top priority, with robust encryption and compliance protocols in place to protect sensitive financial information.",
    icon: Shield,
  },
  {
    title: "Plug & Play Integration",
    description:
      "Easy integration with minimal setup time and technical support is made possible through ChatFin's plug-and-play capabilities.",
    icon: Plug,
  },
  {
    title: "Cloud Flexible Deployment",
    description:
      "Opt for on-premise or cloud-based deployment to best suit your organizational needs and ensure optimal performance.",
    icon: Server,
  },
  {
    title: "Self-Learning AI",
    description:
      "ChatFin's AI continuously learns and improves from each interaction, tailoring its functionality to better meet the evolving needs of your finance team.",
    icon: Sparkles,
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">What Sets Us Apart</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00FF85]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative bg-[#1E1E2E]/80 border border-[#1E1E2E] p-6 rounded-2xl h-full">
                <feature.icon className="h-8 w-8 text-[#00FF85] mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

