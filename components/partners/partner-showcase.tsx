"use client"

import { motion } from "framer-motion"

export function PartnerShowcase() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            Our partner program contains world class service providers, including
          </h2>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1E1E2E]/80 border border-[#1E1E2E] p-6 rounded-lg"
            >
              {/* Placeholder for partner logo - replace with actual logo */}
              <div className="h-16 w-64 bg-blue-900/50 rounded flex items-center justify-center">
                <span className="text-white font-bold">NUMENTICA</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-white">Become a </span>
                <span className="text-[#00FF85]">more efficient, results-driven</span>
                <span className="text-white"> service provider with ChatFin</span>
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <svg
                    className="h-6 w-6 text-[#00FF85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                    <path
                      d="M12 4L4 8L12 12L20 8L12 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 16L12 20L20 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12L12 16L20 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Unlock new revenue stream</h4>
                  <p className="text-gray-300">
                    Unlock new revenue streams by leveraging ChatFin's unique value proposition for finance teams
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <svg
                    className="h-6 w-6 text-[#00FF85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Earn commissions</h4>
                  <p className="text-gray-300">
                    Earn commissions by partnering with ChatFin to bring cutting-edge AI financial tools to more teams
                    and sectors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-[#1E1E2E] rounded-full p-2">
                  <svg
                    className="h-6 w-6 text-[#00FF85]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Differentiate from the competition</h4>
                  <p className="text-gray-300">
                    Differentiate from your competition by adopting ChatFin's unique AI-driven capabilities, enhancing
                    your clients financial accuracy and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

