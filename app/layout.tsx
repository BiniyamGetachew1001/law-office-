import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: {
    default: "Prestige Law | Expert Legal Services",
    template: "%s | Prestige Law",
  },
  description: "Providing expert legal services with a commitment to excellence and client satisfaction.",
  keywords: ["law firm", "legal services", "attorneys", "lawyers", "legal consultation"],
  authors: [{ name: "Prestige Law" }],
  creator: "Prestige Law",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prestigelaw.com",
    title: "Prestige Law | Expert Legal Services",
    description: "Providing expert legal services with a commitment to excellence and client satisfaction.",
    siteName: "Prestige Law",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Law | Expert Legal Services",
    description: "Providing expert legal services with a commitment to excellence and client satisfaction.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-law-pattern ${playfair.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
