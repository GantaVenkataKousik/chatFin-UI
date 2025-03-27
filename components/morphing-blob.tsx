"use client"

import { useEffect, useRef } from "react"

interface MorphingBlobProps {
  className?: string
  color?: string
  size?: number
  speed?: number
  complexity?: number
  opacity?: number
}

export function MorphingBlob({
  className = "",
  color = "#00FF85",
  size = 400,
  speed = 4,
  complexity = 4,
  opacity = 0.15,
}: MorphingBlobProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    // Create points around a circle
    const points = []
    const pointCount = 7 + complexity
    const angleStep = (Math.PI * 2) / pointCount
    const rad = size / 3

    for (let i = 0; i < pointCount; i++) {
      const angle = i * angleStep
      points.push({
        x: Math.cos(angle) * rad,
        y: Math.sin(angle) * rad,
        originX: Math.cos(angle) * rad,
        originY: Math.sin(angle) * rad,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      })
    }

    // Animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.003 * speed
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points based on noise
      for (const point of points) {
        const nX = noise(point.noiseOffsetX + time)
        const nY = noise(point.noiseOffsetY + time)
        point.x = point.originX + nX * 20
        point.y = point.originY + nY * 20
      }

      // Draw blob
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const nextP = points[(i + 1) % points.length]
        const mx = (p.x + nextP.x) / 2
        const my = (p.y + nextP.y) / 2

        ctx.quadraticCurveTo(p.x, p.y, mx, my)
      }

      ctx.closePath()
      ctx.fillStyle = color
      ctx.globalAlpha = opacity
      ctx.fill()
      ctx.restore()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, size, speed, complexity, opacity])

  return <canvas ref={canvasRef} className={className} />
}

// Simple noise function
function noise(x: number): number {
  return Math.sin(x * 10) * 0.5 + Math.sin(x * 15) * 0.25 + Math.sin(x * 30) * 0.125
}

