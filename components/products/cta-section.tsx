"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E]/90 via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-br from-[#1E1E2E] to-[#1E1E2E]/80 border border-[#00FF85]/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your finance operations?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking organizations that are leveraging ChatFin to streamline processes,
              improve accuracy, and make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00FF85] text-black hover:bg-[#00FF85]/90 group">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-[#00FF85] text-[#00FF85] hover:bg-[#00FF85]/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

