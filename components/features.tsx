"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Zap, Database, Cloud, Brain, BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Platform Agnostic",
    description: "Seamlessly integrate with any financial ERP or datawarehouse.",
    icon: Cloud,
  },
  {
    title: "Reliable AI Output",
    description: "Advanced algorithms ensure high accuracy in financial operations.",
    icon: Brain,
  },
  {
    title: "Security",
    description: "Enterprise-grade encryption and compliance protocols.",
    icon: Shield,
  },
  {
    title: "Fast Processing",
    description: "Lightning-fast data processing and real-time insights.",
    icon: Zap,
  },
  {
    title: "Data Integration",
    description: "Connect with multiple data sources effortlessly.",
    icon: Database,
  },
  {
    title: "Advanced Analytics",
    description: "Powerful analytics tools for deeper insights.",
    icon: BarChart,
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-secondary relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to transform your financial operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-secondary-foreground/5 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

