"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup with default values first
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup with default size first
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(1, 1) // Default size, will be updated in the resize handler

    // Update sizes after component is mounted
    const updateSize = () => {
      if (typeof window !== "undefined") {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      }
    }

    // Call updateSize once mounted
    updateSize()

    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100
      posArray[i + 1] = (Math.random() - 0.5) * 100
      posArray[i + 2] = (Math.random() - 0.5) * 100

      // Scale
      scaleArray[i / 3] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      color: 0x00ff85,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add some ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0x00ff85, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== "undefined") {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
    }

    // Handle resize
    const handleResize = () => {
      updateSize()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate particles based on mouse position
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      particlesMesh.rotation.x += mouseY * 0.0005
      particlesMesh.rotation.y += mouseX * 0.0005

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", handleResize)
      }
      containerRef.current?.removeChild(renderer.domElement)
      scene.clear()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ background: "radial-gradient(circle at center, #1E1E2E 0%, #0a0a14 100%)" }}
    />
  )
}

