"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, MessageSquare, Cog, Database, Target } from "lucide-react"

const workflowSteps = [
  {
    number: "1",
    title: "Finance User",
    icon: Search,
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    number: "2",
    title: "Query Workflow",
    icon: Lightbulb,
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    number: "3",
    title: "Slack Teams ChatFin UI",
    icon: MessageSquare,
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    number: "4",
    title: "Natural Language process",
    icon: Cog,
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
  },
  {
    number: "5",
    title: "Finance Data Sources",
    icon: Database,
    color: "from-teal-500/20 to-teal-600/20",
    borderColor: "border-teal-500/30",
  },
  {
    number: "6",
    title: "Finance tasks",
    icon: Target,
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#1E1E2E] to-[#1E1E2E]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">How ChatFin Works</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            ChatFin integrates seamlessly with your existing financial infrastructure, using cutting-edge Natural
            Language Processing (NLP) to understand and execute complex financial queries in everyday language. Users
            can interact with ChatFin as easily as having a conversation on familiar messaging platforms like Slack or
            Microsoft Teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#00FF85]/20 to-transparent blur-sm" />
              <div
                className={`relative bg-white rounded-3xl p-6 h-full flex flex-col items-center text-center border ${step.borderColor}`}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00FF85] text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-[#00FF85]" />
                </div>
                <h3 className="text-black font-medium text-sm">{step.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

