import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, Search, Tag, User } from "lucide-react"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Blog | Prestige Law",
  description: "Legal insights, news, and updates from our experienced attorneys.",
}

// Mock blog post data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Understanding Ethiopian Business Law: Key Considerations for Foreign Investors",
    excerpt:
      "Ethiopia has become an increasingly attractive destination for foreign investment. This article explores the key legal considerations for businesses looking to establish operations in Ethiopia.",
    date: "January 15, 2023",
    author: "James Harrington",
    authorRole: "Corporate Law Partner",
    readTime: "8 min read",
    category: "Corporate Law",
    image: ethiopianImages.blog1,
    slug: "understanding-ethiopian-business-law",
    featured: true,
  },
  {
    id: 2,
    title: "Recent Changes to Ethiopian Property Law and Their Impact on Real Estate Transactions",
    excerpt:
      "Recent legislative changes have significantly altered the landscape of property law in Ethiopia. We examine these changes and their implications for property owners and investors.",
    date: "February 3, 2023",
    author: "Elizabeth Chen",
    authorRole: "Real Estate Law Partner",
    readTime: "6 min read",
    category: "Real Estate",
    image: ethiopianImages.blog2,
    slug: "changes-to-ethiopian-property-law",
    featured: true,
  },
  {
    id: 3,
    title: "Intellectual Property Protection in Ethiopia: Safeguarding Your Innovations",
    excerpt:
      "Protecting intellectual property rights is crucial for businesses operating in Ethiopia. This article provides guidance on navigating Ethiopia's IP laws and enforcement mechanisms.",
    date: "March 12, 2023",
    author: "Sarah Johnson",
    authorRole: "IP Law Partner",
    readTime: "7 min read",
    category: "Intellectual Property",
    image: ethiopianImages.blog3,
    slug: "intellectual-property-protection-ethiopia",
    featured: false,
  },
  {
    id: 4,
    title: "Ethiopian Employment Law: Rights and Obligations of Employers and Employees",
    excerpt:
      "Understanding the legal framework governing employment relationships in Ethiopia is essential for both employers and employees. We break down the key aspects of Ethiopian labor law.",
    date: "April 5, 2023",
    author: "Jennifer Lee",
    authorRole: "Employment Law Partner",
    readTime: "9 min read",
    category: "Employment Law",
    image: ethiopianImages.blog4,
    slug: "ethiopian-employment-law-guide",
    featured: false,
  },
  {
    id: 5,
    title: "Constitutional Reforms in Ethiopia: Implications for the Legal System",
    excerpt:
      "Recent constitutional reforms have brought significant changes to Ethiopia's legal landscape. We analyze these reforms and their impact on various areas of law and practice.",
    date: "May 20, 2023",
    author: "Michael Rodriguez",
    authorRole: "Managing Partner",
    readTime: "10 min read",
    category: "Constitutional Law",
    image: ethiopianImages.blog5,
    slug: "constitutional-reforms-ethiopia",
    featured: false,
  },
  {
    id: 6,
    title: "Dispute Resolution in Ethiopia: Litigation vs. Alternative Methods",
    excerpt:
      "When facing legal disputes in Ethiopia, businesses and individuals have several resolution options. We compare litigation with alternative dispute resolution methods in the Ethiopian context.",
    date: "June 8, 2023",
    author: "Sophia Martinez",
    authorRole: "Litigation Senior Associate",
    readTime: "7 min read",
    category: "Litigation",
    image: ethiopianImages.litigation,
    slug: "dispute-resolution-ethiopia",
    featured: false,
  },
  {
    id: 7,
    title: "Family Law in Ethiopia: Marriage, Divorce, and Child Custody",
    excerpt:
      "Ethiopia's family law has unique aspects that reflect the country's cultural and religious diversity. This article provides an overview of key family law provisions and procedures.",
    date: "July 15, 2023",
    author: "David Thompson",
    authorRole: "Family Law Partner",
    readTime: "8 min read",
    category: "Family Law",
    image: ethiopianImages.familyLaw,
    slug: "family-law-ethiopia",
    featured: false,
  },
  {
    id: 8,
    title: "Tax Compliance for Businesses Operating in Ethiopia",
    excerpt:
      "Navigating Ethiopia's tax system can be challenging for businesses. We provide practical guidance on tax compliance requirements and strategies for efficient tax planning.",
    date: "August 22, 2023",
    author: "Thomas Wright",
    authorRole: "Tax Law Associate",
    readTime: "6 min read",
    category: "Tax Law",
    image: ethiopianImages.taxLaw,
    slug: "tax-compliance-ethiopia",
    featured: false,
  },
]

// Categories for filtering
const categories = [
  "All",
  "Corporate Law",
  "Real Estate",
  "Intellectual Property",
  "Employment Law",
  "Constitutional Law",
  "Litigation",
  "Family Law",
  "Tax Law",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-20"></div>
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.legalBooks}
            alt="Ethiopian legal books"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Legal Insights & Updates</h1>
            <p className="body-lg">
              Stay informed with the latest legal developments, expert analysis, and practical guidance from our
              experienced attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Featured Articles</span>
            <h2 className="heading-lg mb-4">Latest Legal Insights</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our attorneys regularly share their expertise and analysis on important legal developments and issues
              affecting our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="law-card overflow-hidden hover-lift">
                <div className="relative h-64">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="img-overlay"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-law-brown-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center text-sm text-law-brown-600 dark:text-law-beige-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="heading-sm mb-3">{post.title}</h3>
                  <p className="body-md mb-4">{post.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-law-beige-200 dark:bg-law-brown-800 mr-3 flex items-center justify-center">
                      <User className="h-4 w-4 text-law-beige-500 dark:text-law-brown-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-law-brown-800 dark:text-law-beige-200">{post.author}</p>
                      <p className="text-xs text-law-brown-600 dark:text-law-beige-400">{post.authorRole}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full btn-law">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <div className="mb-8">
                <h2 className="heading-md mb-6">Recent Articles</h2>
                <div className="grid grid-cols-1 gap-6">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="law-card overflow-hidden hover-lift">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                          <Image src={post.image} alt={post.title} fill className="object-cover" />
                        </div>
                        <div className="w-full md:w-2/3 p-6">
                          <div className="flex items-center text-sm text-law-brown-600 dark:text-law-beige-400 mb-2">
                            <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200 mr-3">
                              {post.category}
                            </span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="mr-3">{post.date}</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="heading-sm mb-2">{post.title}</h3>
                          <p className="body-sm mb-3 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center mb-4">
                            <div className="w-6 h-6 rounded-full bg-law-beige-200 dark:bg-law-brown-800 mr-2 flex items-center justify-center">
                              <User className="h-3 w-3 text-law-beige-500 dark:text-law-brown-500" />
                            </div>
                            <p className="text-sm text-law-brown-700 dark:text-law-beige-300">{post.author}</p>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="outline" className="hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button className="btn-law-outline">Load More Articles</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              {/* Search */}
              <Card className="law-card mb-6">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-4">Search Articles</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-4 py-2 rounded-full border border-law-beige-200 dark:border-law-brown-700 bg-white dark:bg-law-brown-900/50 focus:outline-none focus:ring-2 focus:ring-law-beige-500 dark:focus:ring-law-brown-700"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Search className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500" />
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="law-card mb-6">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center justify-between py-2 border-b border-law-beige-200 dark:border-law-brown-700 last:border-0"
                      >
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span className="text-law-brown-800 dark:text-law-beige-200">{category}</span>
                        </div>
                        <span className="text-sm text-law-brown-600 dark:text-law-beige-400">
                          {category === "All" ? blogPosts.length : blogPosts.filter((post) => post.category === category).length}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-4">Subscribe to Our Newsletter</h3>
                  <p className="body-sm mb-4">
                    Stay updated with our latest legal insights and firm news. We'll never share your email address.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-full border border-law-beige-200 dark:border-law-brown-700 bg-white dark:bg-law-brown-900/50 focus:outline-none focus:ring-2 focus:ring-law-beige-500 dark:focus:ring-law-brown-700 mb-4"
                  />
                  <Button className="w-full btn-law">Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-law mb-2 inline-block">Legal Expertise</span>
            <h2 className="heading-lg mb-6">Need Legal Assistance?</h2>
            <p className="body-lg mb-8">
              Our team of experienced attorneys is ready to help you navigate your legal challenges. Contact us today to
              schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law">Schedule a Consultation</Button>
              <Button className="btn-law-outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
