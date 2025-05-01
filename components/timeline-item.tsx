import type { ReactNode } from "react"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon: ReactNode
  position?: "left" | "right"
}

export default function TimelineItem({ year, title, description, icon, position = "left" }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-law-beige-500 dark:bg-law-brown-700 flex items-center justify-center text-white z-10">
        {icon}
      </div>

      {/* Content */}
      <div className={`flex items-center ${position === "left" ? "flex-row" : "flex-row-reverse"}`}>
        <div className={`w-1/2 ${position === "left" ? "pr-16 text-right" : "pl-16 text-left"}`}>
          <span className="inline-block px-3 py-1 rounded-full bg-law-beige-200 dark:bg-law-brown-800 text-law-brown-800 dark:text-law-beige-200 text-sm font-medium mb-2">
            {year}
          </span>
          <h3 className="heading-sm mb-2">{title}</h3>
          <p className="body-sm">{description}</p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
}
