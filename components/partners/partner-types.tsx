"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Code } from "lucide-react"

export function PartnerTypes() {
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
          <h2 className="text-4xl font-bold mb-6 text-white">Partner Programs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the partnership program that best fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8 h-full"
          >
            <div className="flex flex-col h-full">
              <div className="bg-[#00FF85]/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-[#00FF85]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Solutions Partner Program</h3>

              <p className="text-gray-300 mb-6 flex-grow">
                Our program is tailored to equip service providers, consultancies and implementation partners with the
                capability to seamlessly incorporate ChatFin's AI assistance into their client's finance and accounting
                operations.
              </p>

              <Link href="/partners/solutions-partner">
                <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8 h-full"
          >
            <div className="flex flex-col h-full">
              <div className="bg-[#00FF85]/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-[#00FF85]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Technology Partner Program</h3>

              <p className="text-gray-300 mb-6 flex-grow">
                This technology partner program provides any finance application to have the features of ChatFin. Our
                technology team will help you in embedding A.I to your application.
              </p>

              <Link href="/partners/tech-partner">
                <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

