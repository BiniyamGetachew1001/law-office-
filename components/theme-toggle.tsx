"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-law-brown-800 dark:text-law-beige-200 hover:bg-law-beige-200/20 dark:hover:bg-law-brown-700/20"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-law-beige-50 dark:bg-law-brown-900 border-law-beige-200 dark:border-law-brown-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-law-brown-800 dark:text-law-beige-200 hover:bg-law-beige-200/20 dark:hover:bg-law-brown-700/20"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-law-brown-800 dark:text-law-beige-200 hover:bg-law-beige-200/20 dark:hover:bg-law-brown-700/20"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-law-brown-800 dark:text-law-beige-200 hover:bg-law-beige-200/20 dark:hover:bg-law-brown-700/20"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
