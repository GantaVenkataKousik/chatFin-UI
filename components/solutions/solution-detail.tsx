"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

interface SolutionDetailProps {
  solution: {
    title: string
    description: string
    color: string
    imageSrc: string
    bgColor: string
    fullDescription: string
    benefits: string[]
    features: string[]
  }
}

export function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/70">
                {solution.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{solution.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden mb-16"
          >
            <Image
              src={
                solution.imageSrc ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvfhuXh8jbynn82WCOP3rVTAd30OaY.png"
              }
              alt={solution.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{solution.fullDescription}</p>

              <h3 className="text-2xl font-bold mb-4 text-[#00FF85]">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Check className="h-6 w-6 text-[#00FF85] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1E1E2E]/50 border border-[#1E1E2E] rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Benefits</h3>

              <div className="space-y-6">
                {solution.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="bg-[#00FF85]/10 rounded-full p-2 flex-shrink-0">
                      <Check className="h-5 w-5 text-[#00FF85]" />
                    </div>
                    <div>
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

