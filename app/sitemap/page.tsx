import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Sitemap | Prestige Law",
  description: "A comprehensive overview of all pages on the Prestige Law website.",
}

// Define the sitemap structure
const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Practice Areas", href: "/practice-areas" },
      { name: "Attorneys", href: "/attorneys" },
      { name: "Case Results", href: "/case-results" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Community Impact", href: "/community-impact" },
    ],
  },
  {
    title: "Practice Areas",
    links: [
      { name: "Corporate Law", href: "/practice-areas/corporate-law" },
      { name: "Litigation", href: "/practice-areas/litigation" },
      { name: "Real Estate Law", href: "/practice-areas/real-estate" },
      { name: "Intellectual Property", href: "/practice-areas/intellectual-property" },
      { name: "Employment Law", href: "/practice-areas/employment-law" },
      { name: "Tax Law", href: "/practice-areas/tax-law" },
      { name: "Family Law", href: "/practice-areas/family-law" },
      { name: "Estate Planning", href: "/practice-areas/estate-planning" },
      { name: "Mergers & Acquisitions", href: "/practice-areas/mergers-acquisitions" },
    ],
  },
  {
    title: "Attorney Profiles",
    links: [
      { name: "James Harrington", href: "/attorneys/james-harrington" },
      { name: "Elizabeth Chen", href: "/attorneys/elizabeth-chen" },
      { name: "Michael Rodriguez", href: "/attorneys/michael-rodriguez" },
      { name: "Sarah Johnson", href: "/attorneys/sarah-johnson" },
      { name: "David Thompson", href: "/attorneys/david-thompson" },
      { name: "Jennifer Lee", href: "/attorneys/jennifer-lee" },
      { name: "View All Attorneys", href: "/attorneys" },
    ],
  },
  {
    title: "Blog Categories",
    links: [
      { name: "Corporate Law", href: "/blog?category=corporate-law" },
      { name: "Real Estate", href: "/blog?category=real-estate" },
      { name: "Intellectual Property", href: "/blog?category=intellectual-property" },
      { name: "Employment Law", href: "/blog?category=employment-law" },
      { name: "Constitutional Law", href: "/blog?category=constitutional-law" },
      { name: "Litigation", href: "/blog?category=litigation" },
      { name: "Family Law", href: "/blog?category=family-law" },
      { name: "Tax Law", href: "/blog?category=tax-law" },
      { name: "View All Blog Posts", href: "/blog" },
    ],
  },
  {
    title: "Legal Resources",
    links: [
      { name: "Case Results", href: "/case-results" },
      { name: "Community Impact", href: "/community-impact" },
      { name: "Legal FAQ", href: "/legal-faq" },
    ],
  },
  {
    title: "Legal Information",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Sitemap", href: "/sitemap" },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="heading-xl mb-8">Sitemap</h1>
        <p className="body-lg mb-12">
          Welcome to our sitemap. This page provides a comprehensive overview of all sections and pages on the Prestige
          Law website to help you navigate our content more easily.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {sitemapData.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="heading-md mb-4 pb-2 border-b border-law-beige-200 dark:border-law-brown-700">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center text-law-brown-800 dark:text-law-beige-200 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                      <span className="body-md">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-law-beige-200 dark:border-law-brown-700">
          <h2 className="heading-md mb-6">Need Help Finding Something?</h2>
          <p className="body-md mb-6">
            If you can't find what you're looking for or need assistance navigating our website, please don't hesitate to
            contact us. Our team is here to help you find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="btn-law">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button className="btn-law-outline">Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
