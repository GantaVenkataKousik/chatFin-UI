"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TechnologyPartner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">Enhance </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF85] to-[#00FF85]/70">
              Your Platform with ChatFin
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Embed ChatFin's API into your application. Apply to get started
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group px-6 py-6 h-auto text-base">
              Apply now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

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
              <span className="text-white">Technology partner program?</span>
            </h2>

            <p className="text-gray-300 mb-6">
              This technology partner program provides any finance application to have the features of ChatFin. Our
              technology team will help you in embedding A.I to your application.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[300px] w-full">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#00FF85]/20 rounded-md"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#00FF85]/10 rounded-full"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-[#00FF85]/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="h-16 w-16 text-white/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

