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
    default: "Fiker Getachew And Associates Law Office | Premier Ethiopian Legal Services",
    template: "%s | Fiker Getachew And Associates Law Office",
  },
  description: "Ethiopia's leading law firm providing quality legal services with creative solutions, with expertise ranging from local Ethiopian law to international law.",
  keywords: ["Ethiopian law firm", "legal services in Ethiopia", "Ethiopian attorneys", "Addis Ababa lawyers", "Ethiopian legal consultation", "FGA Law Office"],
  authors: [{ name: "Fiker Getachew And Associates Law Office" }],
  creator: "Fiker Getachew And Associates Law Office",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fgalawoffice.com",
    title: "Fiker Getachew And Associates Law Office | Premier Ethiopian Legal Services",
    description: "Ethiopia's leading law firm providing quality legal services with creative solutions, with expertise ranging from local Ethiopian law to international law.",
    siteName: "Fiker Getachew And Associates Law Office",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiker Getachew And Associates Law Office | Premier Ethiopian Legal Services",
    description: "Ethiopia's leading law firm providing quality legal services with creative solutions, with expertise ranging from local Ethiopian law to international law.",
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
