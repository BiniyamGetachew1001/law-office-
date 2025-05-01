"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface BackgroundShapesProps {
  className?: string
  density?: number
  speed?: number
}

export default function BackgroundShapes({ className = "", density = 15, speed = 0.1 }: BackgroundShapesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(true)
  const { theme } = useTheme()

  // Throttle animation on mobile
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define shapes
    const shapes = []
    const colors =
      theme === "dark"
        ? ["#0D1111", "#1F2929", "#312F2A", "#4C4339", "#908675"]
        : ["#1F2929", "#312F2A", "#4C4339", "#908675", "#8F7159"]

    for (let i = 0; i < density; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.05 + 0.02,
        speed: Math.random() * speed + 0.05,
        angle: Math.random() * Math.PI * 2,
        shapeType: Math.floor(Math.random() * 3),
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    // Animation loop with performance optimization
    let lastTime = 0
    const fps = 30
    const interval = 1000 / fps

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp
      const deltaTime = timestamp - lastTime

      if (deltaTime > interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        shapes.forEach((shape) => {
          // Move shape
          shape.x += Math.cos(shape.angle) * shape.speed
          shape.y += Math.sin(shape.angle) * shape.speed
          shape.rotation += shape.rotationSpeed

          // Bounce off edges
          if (shape.x < -shape.size) shape.x = canvas.width + shape.size
          if (shape.x > canvas.width + shape.size) shape.x = -shape.size
          if (shape.y < -shape.size) shape.y = canvas.height + shape.size
          if (shape.y > canvas.height + shape.size) shape.y = -shape.size

          // Draw shape
          ctx.fillStyle = shape.color
          ctx.globalAlpha = shape.opacity

          // Save context for rotation
          ctx.save()
          ctx.translate(shape.x, shape.y)
          ctx.rotate(shape.rotation)

          if (shape.shapeType === 0) {
            // Rectangle
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
          } else if (shape.shapeType === 1) {
            // Circle
            ctx.beginPath()
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
            ctx.fill()
          } else {
            // Polygon (hexagon)
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI * 2 * i) / 6
              const pointX = (shape.size / 2) * Math.cos(angle)
              const pointY = (shape.size / 2) * Math.sin(angle)

              if (i === 0) {
                ctx.moveTo(pointX, pointY)
              } else {
                ctx.lineTo(pointX, pointY)
              }
            }
            ctx.closePath()
            ctx.fill()
          }

          // Restore context after rotation
          ctx.restore()
        })

        lastTime = timestamp - (deltaTime % interval)
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isVisible, density, speed, theme])

  if (!isVisible) return null

  return <canvas ref={canvasRef} className={`${className}`} />
}
