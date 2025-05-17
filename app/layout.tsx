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
    default: "Abate Yimer Law Office | Professional Ethiopian Legal Services",
    template: "%s | Abate Yimer Law Office",
  },
  description: "We are a highly experienced group of legal professionals with European trained corporate lawyers committed to providing catered solutions to Client's business and investment ventures in Ethiopia.",
  keywords: ["Ethiopian law firm", "legal services in Ethiopia", "Ethiopian attorneys", "Addis Ababa lawyers", "Ethiopian legal consultation", "Abate Yimer Law Office", "project finance", "energy law", "corporate law"],
  authors: [{ name: "Abate Yimer Law Office" }],
  creator: "Abate Yimer Law Office",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abateyimerlaw.com",
    title: "Abate Yimer Law Office | Professional Ethiopian Legal Services",
    description: "We are a highly experienced group of legal professionals with European trained corporate lawyers committed to providing catered solutions to Client's business and investment ventures in Ethiopia.",
    siteName: "Abate Yimer Law Office",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abate Yimer Law Office | Professional Ethiopian Legal Services",
    description: "We are a highly experienced group of legal professionals with European trained corporate lawyers committed to providing catered solutions to Client's business and investment ventures in Ethiopia.",
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
