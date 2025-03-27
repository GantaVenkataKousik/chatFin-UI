"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function SolutionsPartnerContact() {
  const [captchaValue, setCaptchaValue] = useState("")

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl p-8 md:p-12 overflow-hidden relative max-w-4xl mx-auto"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/5 via-transparent to-transparent" />

          <div className="relative">
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-white">Speak with </span>
              <span className="text-[#00FF85]">our team</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400 h-12"
                />
              </div>
            </div>

            <div className="mb-6">
              <Input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400 h-12"
              />
            </div>

            <div className="mb-6">
              <Textarea
                placeholder="Tell us about your company"
                className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400 min-h-[120px]"
              />
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group px-6 py-6 h-auto text-base">
                Submit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

