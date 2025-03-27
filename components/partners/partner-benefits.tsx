"use client"

import { motion } from "framer-motion"
import { Wallet, TrendingUp, Shield } from "lucide-react"

export function PartnerBenefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8 md:p-12 overflow-hidden relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/5 via-transparent to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-white">Prioritize your </span>
                <span className="text-[#00FF85]">Product features:</span>
                <br />
                <span className="text-white">We will take care of AI</span>
              </h3>

              <p className="text-gray-300 mb-6">
                ChatFin is trusted by numerous finance teams to streamline their operations. We are eager to share our
                insights to help you integrate AI capabilities into your product.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <Wallet className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Partner with finance A.I pioneer</h4>
                  <p className="text-gray-300">
                    Partner with ChatFin, the AI pioneer for finance teams, to accelerate your go-to-market strategy
                    securely and swiftly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <TrendingUp className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Faster GTM</h4>
                  <p className="text-gray-300">
                    Choose ChatFin, for faster, secure deployment and streamlined market entry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <Shield className="h-6 w-6 text-[#00FF85]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Secure and faster</h4>
                  <p className="text-gray-300">Accelerate your client's financial operations securely with ChatFin</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

