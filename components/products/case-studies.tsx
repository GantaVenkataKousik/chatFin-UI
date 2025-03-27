"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Global Bank Reduces Month-End Close by 40%",
    description:
      "A leading financial institution implemented ChatFin to streamline their reconciliation process, resulting in significant time savings and improved accuracy.",
    industry: "Banking",
  },
  {
    title: "Tech Company Automates 85% of AP Workflows",
    description:
      "A Fortune 500 technology company leveraged ChatFin to automate accounts payable processes, freeing up their finance team for strategic initiatives.",
    industry: "Technology",
  },
  {
    title: "Healthcare Provider Improves Financial Forecasting",
    description:
      "A major healthcare network used ChatFin's AI-powered analytics to enhance their financial forecasting accuracy by 30%.",
    industry: "Healthcare",
  },
]

export function CaseStudies() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#1E1E2E]/95 to-[#1E1E2E]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how leading organizations are transforming their finance operations with ChatFin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl overflow-hidden group"
            >
              <div className="h-2 bg-[#00FF85]" />
              <div className="p-6">
                <div className="text-sm text-[#00FF85] mb-2">{study.industry}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF85] transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                <Button
                  variant="ghost"
                  className="text-[#00FF85] hover:text-[#00FF85] hover:bg-[#00FF85]/10 p-0 h-auto"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

