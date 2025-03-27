"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function TechPartnerContact() {
  const [captchaValue, setCaptchaValue] = useState("")

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Speak with our team to apply today!</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400"
                />
              </div>

              <Input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400"
              />

              <Textarea
                placeholder="Message"
                className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400 min-h-[120px]"
              />

              <div className="flex items-center justify-end gap-4">
                <div className="text-white">9 + 7 =</div>
                <Input
                  type="text"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  className="bg-white/5 border-[#1E1E2E] text-white w-20"
                />
                <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90">Submit</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

