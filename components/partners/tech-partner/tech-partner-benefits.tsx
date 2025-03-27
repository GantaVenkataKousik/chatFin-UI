"use client"

import { motion } from "framer-motion"
import { Wallet, TrendingUp, Shield } from "lucide-react"

export function TechPartnerBenefits() {
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
          <h2 className="text-4xl font-bold mb-6 text-white">
            Prioritize your product features: we will take care of A.I
          </h2>
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

          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-[#00FF85]/20 rounded-full p-3">
                  <Wallet className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00FF85] mb-2">Partner with finance A.I pioneer</h3>
                  <p className="text-gray-300">
                    Partner with ChatFin, the AI pioneer for finance teams, to accelerate your go-to-market strategy
                    securely and swiftly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-[#00FF85]/20 rounded-full p-3">
                  <TrendingUp className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00FF85] mb-2">Faster GTM</h3>
                  <p className="text-gray-300">
                    Choose ChatFin, for faster, secure deployment and streamlined market entry.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-[#00FF85]/20 rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00FF85] mb-2">Secure and faster</h3>
                  <p className="text-gray-300">Accelerate your client's financial operations securely with ChatFin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

