"use client"

import { motion } from "framer-motion"
import { MorphingBlob } from "../morphing-blob"

export function SolutionsPartner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#1E1E2E]/95 to-[#1E1E2E]" />

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#00FF85]">What is ChatFin's</span>
              <br />
              <span className="text-white">Solutions Partner Program?</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Our program is tailored to equip service providers, consultancies and implementation partners with the
              capability to seamlessly incorporate ChatFin's AI assistance into their client's finance and accounting
              operations, enhancing their ability to deliver superior financial outcomes to their clients more
              efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#00FF85]/20 rounded-md"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#00FF85]/10 rounded-full"></div>

              <div className="absolute bottom-1/3 left-1/3 transform -translate-x-1/2">
                <div className="relative w-16 h-40">
                  <div className="absolute bottom-0 w-full h-24 bg-[#00FF85]/30 rounded-md"></div>
                  <div className="absolute top-0 w-full h-16 rounded-full overflow-hidden bg-blue-500/20">
                    <div className="w-full h-full bg-blue-500/10 rounded-t-full"></div>
                  </div>
                  <div className="absolute top-12 left-3 w-10 h-10 bg-blue-500/10 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-1/3 right-1/3 transform translate-x-1/2">
                <div className="relative w-16 h-40">
                  <div className="absolute bottom-0 w-full h-24 bg-[#00FF85]/30 rounded-md"></div>
                  <div className="absolute top-0 w-full h-16 rounded-full overflow-hidden bg-indigo-500/20">
                    <div className="w-full h-full bg-indigo-500/10 rounded-t-full"></div>
                  </div>
                  <div className="absolute top-12 left-3 w-10 h-10 bg-indigo-500/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

