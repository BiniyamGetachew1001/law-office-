"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface DynamicBackgroundProps {
  className?: string
  variant?: "default" | "gradient" | "mesh" | "particles"
  intensity?: "light" | "medium" | "strong"
  interactive?: boolean
}

export default function DynamicBackground({
  className = "",
  variant = "default",
  intensity = "medium",
  interactive = true,
}: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Throttle animation on mobile
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsVisible(window.innerWidth > 480 || variant !== "particles")
      } else {
        setIsVisible(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [variant])

  // Track mouse position for interactive effects
  useEffect(() => {
    if (!interactive) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [interactive])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Color palettes based on theme
    const lightPalette = ["#f8f8f8", "#e8e6e1", "#d5cfc5", "#c5beb2", "#b5ae9e", "#a59e8a", "#908675", "#8F7159"]
    const darkPalette = ["#0D1111", "#131c1c", "#1a2626", "#1F2929", "#283333", "#312F2A", "#3a3833", "#4C4339"]
    const accentPalette = ["#8F7159", "#a08369", "#b19579", "#c2a78a", "#d3b99b", "#e4cbac", "#f5ddbd"]

    const colorPalette = isDark ? darkPalette : lightPalette
    const baseColor = isDark ? "#0D1111" : "#f8f8f8"
    const accentColor = "#8F7159"

    // Intensity settings
    const intensitySettings = {
      light: { opacity: 0.03, size: 0.7, speed: 0.5, count: 0.7 },
      medium: { opacity: 0.05, size: 1, speed: 1, count: 1 },
      strong: { opacity: 0.08, size: 1.3, speed: 1.5, count: 1.3 },
    }

    const settings = intensitySettings[intensity]

    // Different background variants
    if (variant === "gradient") {
      // Gradient background with floating elements
      const gradientElements = []
      const elementCount = Math.floor(5 * settings.count)

      for (let i = 0; i < elementCount; i++) {
        gradientElements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 * settings.size + 100,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          opacity: Math.random() * 0.04 * settings.opacity + 0.01,
          speed: (Math.random() - 0.5) * settings.speed * 0.2,
          angle: Math.random() * Math.PI * 2,
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Fill with base color
        ctx.fillStyle = baseColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw gradient elements
        gradientElements.forEach((element) => {
          // Move element
          element.x += Math.cos(element.angle) * element.speed
          element.y += Math.sin(element.angle) * element.speed

          // Bounce off edges
          if (element.x < -element.radius) element.x = canvas.width + element.radius
          if (element.x > canvas.width + element.radius) element.x = -element.radius
          if (element.y < -element.radius) element.y = canvas.height + element.radius
          if (element.y > canvas.height + element.radius) element.y = -element.radius

          // Draw gradient
          const gradient = ctx.createRadialGradient(element.x, element.y, 0, element.x, element.y, element.radius)
          gradient.addColorStop(
            0,
            `${element.color}${Math.floor(element.opacity * 255)
              .toString(16)
              .padStart(2, "0")}`,
          )
          gradient.addColorStop(1, `${element.color}00`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2)
          ctx.fill()
        })

        // Interactive effect - add subtle highlight around mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          const mouseGradient = ctx.createRadialGradient(
            mousePosition.x,
            mousePosition.y,
            0,
            mousePosition.x,
            mousePosition.y,
            200,
          )
          mouseGradient.addColorStop(0, `${accentColor}15`)
          mouseGradient.addColorStop(1, `${accentColor}00`)

          ctx.fillStyle = mouseGradient
          ctx.beginPath()
          ctx.arc(mousePosition.x, mousePosition.y, 200, 0, Math.PI * 2)
          ctx.fill()
        }

        requestRef.current = requestAnimationFrame(animate)
      }

      animate()
    } else if (variant === "mesh") {
      // Mesh grid background
      const gridSize = 30
      const nodeCount = Math.ceil(canvas.width / gridSize) + 1
      const rowCount = Math.ceil(canvas.height / gridSize) + 1
      const nodes = []

      // Create grid nodes
      for (let y = 0; y < rowCount; y++) {
        for (let x = 0; x < nodeCount; x++) {
          nodes.push({
            x: x * gridSize,
            y: y * gridSize,
            originX: x * gridSize,
            originY: y * gridSize,
            offsetX: 0,
            offsetY: 0,
            speed: Math.random() * 0.2 * settings.speed + 0.1,
            angle: Math.random() * Math.PI * 2,
            amplitude: Math.random() * 5 * settings.size + 2,
          })
        }
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Fill with base color
        ctx.fillStyle = baseColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update node positions
        nodes.forEach((node) => {
          node.angle += node.speed / 100
          node.offsetX = Math.sin(node.angle) * node.amplitude
          node.offsetY = Math.cos(node.angle) * node.amplitude
          node.x = node.originX + node.offsetX
          node.y = node.originY + node.offsetY
        })

        // Draw connections
        ctx.strokeStyle = isDark
          ? `rgba(143, 113, 89, ${0.03 * settings.opacity})`
          : `rgba(31, 41, 41, ${0.03 * settings.opacity})`
        ctx.lineWidth = 1

        for (let y = 0; y < rowCount - 1; y++) {
          for (let x = 0; x < nodeCount - 1; x++) {
            const index = y * nodeCount + x
            const rightIndex = index + 1
            const bottomIndex = index + nodeCount
            const bottomRightIndex = bottomIndex + 1

            // Draw horizontal line
            ctx.beginPath()
            ctx.moveTo(nodes[index].x, nodes[index].y)
            ctx.lineTo(nodes[rightIndex].x, nodes[rightIndex].y)
            ctx.stroke()

            // Draw vertical line
            ctx.beginPath()
            ctx.moveTo(nodes[index].x, nodes[index].y)
            ctx.lineTo(nodes[bottomIndex].x, nodes[bottomIndex].y)
            ctx.stroke()

            // Draw diagonal line
            ctx.beginPath()
            ctx.moveTo(nodes[index].x, nodes[index].y)
            ctx.lineTo(nodes[bottomRightIndex].x, nodes[bottomRightIndex].y)
            ctx.stroke()
          }
        }

        // Interactive effect - distort mesh around mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          const mouseRadius = 150
          nodes.forEach((node) => {
            const dx = mousePosition.x - node.x
            const dy = mousePosition.y - node.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouseRadius) {
              const force = (1 - distance / mouseRadius) * 15
              node.x -= (dx / distance) * force
              node.y -= (dy / distance) * force
            }
          })
        }

        requestRef.current = requestAnimationFrame(animate)
      }

      animate()
    } else if (variant === "particles") {
      // Particles background
      const particles = []
      const particleCount = Math.floor(50 * settings.count)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 * settings.size + 1,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
          opacity: Math.random() * 0.2 * settings.opacity + 0.05,
          speed: Math.random() * 0.5 * settings.speed + 0.1,
          angle: Math.random() * Math.PI * 2,
          connected: [],
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Fill with base color
        ctx.fillStyle = baseColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Update and draw particles
        particles.forEach((particle, index) => {
          // Move particle
          particle.x += Math.cos(particle.angle) * particle.speed
          particle.y += Math.sin(particle.angle) * particle.speed

          // Bounce off edges or wrap around
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Randomly change direction occasionally
          if (Math.random() < 0.01) {
            particle.angle += ((Math.random() - 0.5) * Math.PI) / 4
          }

          // Draw particle
          ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Find and draw connections to nearby particles
          particle.connected = []
          for (let j = index + 1; j < particles.length; j++) {
            const other = particles[j]
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              particle.connected.push(j)
              const opacity = (1 - distance / 100) * 0.2 * settings.opacity
              ctx.strokeStyle = `${isDark ? accentColor : "#1F2929"}${Math.floor(opacity * 255)
                .toString(16)
                .padStart(2, "0")}`
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })

        // Interactive effect - attract particles to mouse
        if (interactive && mousePosition.x && mousePosition.y) {
          particles.forEach((particle) => {
            const dx = mousePosition.x - particle.x
            const dy = mousePosition.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              const force = (1 - distance / 150) * 0.5
              particle.x += (dx / distance) * force
              particle.y += (dy / distance) * force
            }
          })
        }

        requestRef.current = requestAnimationFrame(animate)
      }

      animate()
    } else {
      // Default background - subtle animated gradient
      const gradientPoints = [
        { x: 0, y: 0, color: colorPalette[0] },
        { x: canvas.width, y: 0, color: colorPalette[1] },
        { x: canvas.width, y: canvas.height, color: colorPalette[2] },
        { x: 0, y: canvas.height, color: colorPalette[3] },
      ]

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, gradientPoints[0].color)
        gradient.addColorStop(0.33, gradientPoints[1].color)
        gradient.addColorStop(0.66, gradientPoints[2].color)
        gradient.addColorStop(1, gradientPoints[3].color)

        // Fill background
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Subtle pattern overlay
        ctx.fillStyle = isDark ? "rgba(13, 17, 17, 0.03)" : "rgba(255, 255, 255, 0.03)"

        const patternSize = 20
        for (let x = 0; x < canvas.width; x += patternSize) {
          for (let y = 0; y < canvas.height; y += patternSize) {
            if ((x + y) % (patternSize * 2) === 0) {
              ctx.fillRect(x, y, patternSize, patternSize)
            }
          }
        }

        // Animate gradient colors very subtly
        gradientPoints.forEach((point, index) => {
          const hue = (Date.now() / 10000 + index / gradientPoints.length) % 1
          const colorIndex = Math.floor(hue * colorPalette.length)
          const nextColorIndex = (colorIndex + 1) % colorPalette.length
          const colorMix = (hue * colorPalette.length) % 1

          // Very subtle color transition
          point.color = colorPalette[colorIndex]
        })

        requestRef.current = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isVisible, variant, intensity, interactive, mousePosition, theme, isDark])

  if (!isVisible) return null

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`} style={{ pointerEvents: "none" }} />
}
