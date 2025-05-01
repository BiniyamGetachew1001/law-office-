"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface LayeredBackgroundProps {
  className?: string
  variant?: "waves" | "diagonal" | "circles" | "dots"
  primaryColor?: string
  secondaryColor?: string
  animated?: boolean
}

export default function LayeredBackground({
  className = "",
  variant = "waves",
  primaryColor,
  secondaryColor,
  animated = true,
}: LayeredBackgroundProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Set default colors based on theme
  const defaultPrimary = isDark ? "#0D1111" : "#f8f8f8"
  const defaultSecondary = isDark ? "#1F2929" : "#e8e6e1"

  const primary = primaryColor || defaultPrimary
  const secondary = secondaryColor || defaultSecondary

  useEffect(() => {
    if (!animated || !svgRef.current) return

    const svg = svgRef.current
    const paths = svg.querySelectorAll("path")

    // Animate paths
    paths.forEach((path, index) => {
      // Create animation
      const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate")
      animate.setAttribute("attributeName", "d")

      // Different animation based on variant
      if (variant === "waves") {
        const basePathD = path.getAttribute("d") || ""
        const altPathD = basePathD.replace(/(-?\d+\.?\d*)/g, (match, p1) => {
          const num = Number.parseFloat(p1)
          return (num + (Math.random() * 10 - 5)).toString()
        })

        animate.setAttribute("values", `${basePathD}; ${altPathD}; ${basePathD}`)
      } else if (variant === "diagonal") {
        const basePathD = path.getAttribute("d") || ""
        const parts = basePathD.split(" ")
        const altPathD = parts
          .map((part) => {
            if (part.match(/^[ML]/)) return part
            const num = Number.parseFloat(part)
            return isNaN(num) ? part : (num + (Math.random() * 5 - 2.5)).toString()
          })
          .join(" ")

        animate.setAttribute("values", `${basePathD}; ${altPathD}; ${basePathD}`)
      } else {
        // Default subtle animation
        const basePathD = path.getAttribute("d") || ""
        const altPathD = basePathD.replace(/(-?\d+\.?\d*)/g, (match, p1) => {
          const num = Number.parseFloat(p1)
          return (num + (Math.random() * 2 - 1)).toString()
        })

        animate.setAttribute("values", `${basePathD}; ${altPathD}; ${basePathD}`)
      }

      animate.setAttribute("dur", `${15 + index * 5}s`)
      animate.setAttribute("repeatCount", "indefinite")

      path.appendChild(animate)
    })

    return () => {
      paths.forEach((path) => {
        const animate = path.querySelector("animate")
        if (animate) path.removeChild(animate)
      })
    }
  }, [animated, variant, theme])

  // Render different SVG patterns based on variant
  const renderSVG = () => {
    switch (variant) {
      case "waves":
        return (
          <svg
            ref={svgRef}
            className={`w-full h-full ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill={primary}
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <path
              fill={secondary}
              fillOpacity="0.5"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        )
      case "diagonal":
        return (
          <svg
            ref={svgRef}
            className={`w-full h-full ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path fill={primary} fillOpacity="1" d="M0,160L1440,0L1440,320L0,320Z"></path>
            <path fill={secondary} fillOpacity="0.5" d="M0,160L1440,320L0,320Z"></path>
          </svg>
        )
      case "circles":
        return (
          <svg
            ref={svgRef}
            className={`w-full h-full ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <path
              fill={primary}
              d="M41.3,-51.2C54.4,-42.9,66.6,-30.1,71.5,-14.6C76.4,0.9,74,19.1,65.4,32.8C56.8,46.5,42,55.7,26.1,62.3C10.2,68.9,-6.7,72.9,-22.3,68.8C-37.9,64.7,-52.1,52.5,-60.2,37.4C-68.3,22.3,-70.3,4.3,-66.2,-11.7C-62.1,-27.7,-52,-41.7,-39.2,-50.1C-26.5,-58.5,-11.1,-61.3,2.3,-64.1C15.7,-66.9,28.2,-59.6,41.3,-51.2Z"
              transform="translate(100 100)"
            />
            <path
              fill={secondary}
              fillOpacity="0.5"
              d="M43.3,-57.7C55.6,-49.3,64.9,-35.6,68.7,-20.8C72.5,-6,70.8,9.9,64.4,23.1C58,36.3,46.9,46.8,34.1,53.9C21.3,61,6.8,64.7,-8.1,64.5C-23,64.3,-38.3,60.2,-49.8,50.8C-61.3,41.4,-69,26.7,-71.9,10.8C-74.8,-5.1,-72.9,-22.2,-64.4,-35C-55.9,-47.8,-40.8,-56.3,-26.2,-63.7C-11.6,-71.1,2.5,-77.4,15.4,-74.1C28.3,-70.8,40,-66,43.3,-57.7Z"
              transform="translate(100 100)"
            />
          </svg>
        )
      case "dots":
        return (
          <svg
            ref={svgRef}
            className={`w-full h-full ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <defs>
              <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill={secondary} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={primary} />
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        )
      default:
        return (
          <svg
            ref={svgRef}
            className={`w-full h-full ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill={primary}
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        )
    }
  }

  return renderSVG()
}
