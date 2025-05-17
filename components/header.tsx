"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone, Scale } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Attorneys", href: "/attorneys" },
  { name: "Case Results", href: "/case-results" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-law-beige-50/95 dark:bg-law-brown-900/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-law-brown-800 dark:text-law-beige-300" />
            <span className="text-xl font-serif font-bold text-law-brown-900 dark:text-law-beige-100">
              GEBRU MAHITEM LAW OFFICE
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-law-brown-800 dark:text-law-beige-200">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-law-beige-50 dark:bg-law-brown-900 border-law-beige-200 dark:border-law-brown-700"
              >
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <Scale className="h-6 w-6 text-law-brown-800 dark:text-law-beige-300" />
                    <span className="text-lg font-serif font-bold text-law-brown-900 dark:text-law-beige-100">
                      GEBRU MAHITEM LAW OFFICE
                    </span>
                  </Link>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-law-brown-800 dark:text-law-beige-200">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </Sheet>
                </div>
                <nav className="mt-8 flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors relative overflow-hidden group",
                        pathname === item.href
                          ? "text-law-brown-800 dark:text-law-beige-200 font-semibold"
                          : "text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100",
                      )}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-law-beige-500 dark:bg-law-brown-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                  <Button className="mt-4 btn-law">
                    <Phone className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative overflow-hidden group",
                    pathname === item.href
                      ? "text-law-brown-800 dark:text-law-beige-200 font-semibold"
                      : "text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100",
                  )}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-law-beige-500 dark:bg-law-brown-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="btn-law">
                <Phone className="mr-2 h-4 w-4" />
                Free Consultation
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
