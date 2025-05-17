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
    default: "Gebru Mahitem Law Office | Professional Ethiopian Legal Services",
    template: "%s | Gebru Mahitem Law Office",
    description: "Professional legal services in Ethiopia specializing in corporate law, litigation, property rights, and more. Led by Attorney Gebru Mahitem with 11+ years of experience.",
    keywords: ["Ethiopian lawyer", "Addis Ababa attorney", "corporate law", "litigation", "property rights", "Ethiopian legal consultation", "Gebru Mahitem Law Office", "project finance", "energy law", "corporate law"],
    authors: [{ name: "Gebru Mahitem Law Office" }],
    creator: "Gebru Mahitem Law Office",
    publisher: "Gebru Mahitem Law Office",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Gebru Mahitem Law Office | Professional Ethiopian Legal Services",
      description: "Professional legal services in Ethiopia specializing in corporate law, litigation, property rights, and more. Led by Attorney Gebru Mahitem with 11+ years of experience.",
      url: "https://gebru-mahitem-law.com",
      siteName: "Gebru Mahitem Law Office",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Gebru Mahitem Law Office | Professional Ethiopian Legal Services",
      description: "Professional legal services in Ethiopia specializing in corporate law, litigation, property rights, and more. Led by Attorney Gebru Mahitem with 11+ years of experience.",
    },
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
