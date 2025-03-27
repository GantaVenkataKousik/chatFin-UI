"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }> = []

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []

      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3,
        })
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "#00FF85"
        ctx.fill()
      })
    }

    init()
    animate()

    window.addEventListener("resize", init)
    return () => window.removeEventListener("resize", init)
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
    </>
  )
}

