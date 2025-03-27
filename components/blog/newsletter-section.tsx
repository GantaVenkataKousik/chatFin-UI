"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MorphingBlob } from "../morphing-blob"

export function NewsletterSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [captchaValue, setCaptchaValue] = useState("")

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <MorphingBlob
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="#00FF85"
          size={800}
          opacity={0.05}
          speed={2}
          complexity={8}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Stay updated with the latest insights and trends in AI for finance and accounting.
          </p>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400"
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-[#1E1E2E] text-white placeholder:text-gray-400"
            />

            <div className="flex items-center gap-4">
              <div className="text-white">14 + 15 =</div>
              <Input
                type="text"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                className="bg-white/5 border-[#1E1E2E] text-white w-20"
              />

              <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 ml-auto">Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

