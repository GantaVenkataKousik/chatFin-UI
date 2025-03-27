"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  imageSrc: string
  imageAlt: string
}

export function BlogCard({ title, excerpt, date, category, slug, imageSrc, imageAlt }: BlogCardProps) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    try {
      const rect = cardRef.current.getBoundingClientRect()
      if (rect.width && rect.height) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Calculate normalized mouse position (-0.5 to 0.5)
        const normalizedX = (e.clientX - centerX) / rect.width
        const normalizedY = (e.clientY - centerY) / rect.height

        mouseX.set(normalizedX)
        mouseY.set(normalizedY)
      }
    } catch (error) {
      console.error("Error in mouse move handler:", error)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
      }}
      whileHover={{ z: 10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="bg-[#1E1E2E]/80 border border-[#1E1E2E] rounded-2xl overflow-hidden h-full flex flex-col group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2E] to-transparent opacity-60" />

            {/* Glowing effect on hover */}
            <motion.div
              className="absolute inset-0 bg-[#00FF85]/20 opacity-0"
              animate={{ opacity: hovered ? 0.2 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="text-sm text-[#00FF85] mb-2">
              {date} | {category}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF85] transition-colors">{title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{excerpt}</p>
            <div className="text-[#00FF85] font-medium group-hover:underline">read more</div>
          </div>

          {/* Reflection effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#00FF85]/0 to-[#00FF85]/20 opacity-0 rounded-2xl pointer-events-none"
            style={{
              opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0, 0.3, 0]),
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          />

          {/* Border glow effect */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-tr from-[#00FF85]/0 to-[#00FF85]/30 rounded-2xl opacity-0 blur-sm"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

