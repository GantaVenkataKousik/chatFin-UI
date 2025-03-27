"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface SolutionCardProps {
  title: string
  description: string
  color: string
  imageSrc: string
  slug: string
}

export function SolutionCard({ title, description, color, imageSrc, slug }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <Link href={`/solutions/${slug}`} className="block mb-4">
        <div className="relative rounded-lg overflow-hidden border border-[#1E1E2E] transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00FF85]/10">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>
      </Link>

      <h3 className="text-2xl font-bold mb-2">
        <span className={`text-${color}`}>{title}</span>
      </h3>

      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

