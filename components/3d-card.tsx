"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
}

export function ThreeDCard({ children, className = "" }: ThreeDCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    try {
      const rect = ref.current.getBoundingClientRect()
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
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: hovering ? rotateX : 0,
        rotateY: hovering ? rotateY : 0,
      }}
      whileHover={{ z: 10 }}
    >
      {children}

      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/20 opacity-0 rounded-2xl pointer-events-none"
        style={{
          opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0, 0.3, 0]),
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      />
    </motion.div>
  )
}

