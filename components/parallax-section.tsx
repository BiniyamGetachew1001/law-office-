"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  bgImage?: string
  speed?: number
  className?: string
  overlayColor?: string
  overlayOpacity?: number
}

export default function ParallaxSection({
  children,
  bgImage,
  speed = 0.5,
  className = "",
  overlayColor = "#000000",
  overlayOpacity = 0.5,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    if (!section || !bg) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Only apply parallax when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPosition = window.scrollY
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        // Calculate how far the section is from the top of the viewport
        const distanceFromTop = scrollPosition - sectionTop + windowHeight

        // Calculate the parallax offset
        const parallaxOffset = (distanceFromTop * speed) / 10

        // Apply the transform
        bg.style.transform = `translateY(${parallaxOffset}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div ref={sectionRef} className={`parallax-container ${className}`}>
      {bgImage && <div ref={bgRef} className="parallax-bg" style={{ backgroundImage: `url(${bgImage})` }} />}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
      <div className="parallax-content relative z-20">{children}</div>
    </div>
  )
}
