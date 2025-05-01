import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle,
  FileText,
  GitMerge,
  Globe,
  Phone,
  Shield,
  Users,
} from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"

export const metadata = {
  title: "Corporate Law | Prestige Law",
  description:
    "Comprehensive corporate legal services including business formation, governance, mergers & acquisitions, and regulatory compliance.",
}

export default function CorporateLawPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="badge-law mb-4 inline-block">Practice Area</span>
            <h1 className="heading-xl mb-6">Corporate Law</h1>
            <p className="body-lg">
              Comprehensive legal solutions for businesses of all sizes, from formation and governance to complex
              transactions and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-law mb-2 inline-block">Overview</span>
              <h2 className="heading-lg mb-4">Strategic Legal Counsel for Businesses</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Our Corporate Law practice provides comprehensive legal services to businesses at every stage of their
                development. From startups and emerging companies to established corporations, we offer strategic
                counsel on formation, governance, transactions, and compliance matters.
              </p>
              <p className="body-md mb-6">
                Our attorneys combine deep legal expertise with business acumen to deliver practical solutions that
                advance our clients' objectives while managing legal risks. We work closely with business owners,
                executives, and boards to understand their unique challenges and opportunities, tailoring our approach
                to each client's specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Comprehensive corporate legal services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Industry-specific regulatory expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Strategic approach to business transactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Proactive risk management and compliance</span>
                </li>
              </ul>
              <Button className="btn-law">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Corporate Law Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Services</span>
            <h2 className="heading-lg mb-4">Comprehensive Corporate Legal Services</h2>
            <p className="body-md max-w-2xl mx-auto">
              We offer a wide range of corporate legal services to address the diverse needs of businesses throughout
              their lifecycle.
            </p>
          </div>

          <Tabs defaultValue="formation" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-law-beige-200 dark:bg-law-brown-800">
                <TabsTrigger
                  value="formation"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Business Formation
                </TabsTrigger>
                <TabsTrigger
                  value="governance"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Corporate Governance
                </TabsTrigger>
                <TabsTrigger
                  value="transactions"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Transactions
                </TabsTrigger>
                <TabsTrigger
                  value="compliance"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Compliance
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="formation" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Building2 className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Business Formation & Structuring</h3>
                      <p className="body-md mb-4">
                        Strategic guidance on selecting and establishing the optimal business structure for your
                        objectives.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Entity selection and formation</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Partnership and LLC agreements</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Corporate bylaws and resolutions</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Shareholder agreements</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Startups & Emerging Companies</h4>
                          <p className="text-sm mb-4">
                            Tailored legal solutions for startups, including entity formation, founder agreements, and
                            early-stage financing.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Founder agreements & equity allocation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Seed and angel financing</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Intellectual property protection</span>
                            </li>
                          </ul>
                          <Link href="/practice-areas/corporate-law/startups">
                            <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Private Companies</h4>
                          <p className="text-sm mb-4">
                            Comprehensive legal support for established private companies, from governance to strategic
                            transactions.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Corporate restructuring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Succession planning</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Private equity transactions</span>
                            </li>
                          </ul>
                          <Link href="/practice-areas/corporate-law/private-companies">
                            <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Public Companies</h4>
                          <p className="text-sm mb-4">
                            Specialized services for public companies, including securities law compliance and corporate
                            governance.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>SEC compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Public offerings</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Proxy statements & shareholder matters</span>
                            </li>
                          </ul>
                          <Link href="/practice-areas/corporate-law/public-companies">
                            <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Nonprofit Organizations</h4>
                          <p className="text-sm mb-4">
                            Specialized guidance for nonprofit formation, governance, and tax-exempt status.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>501(c)(3) applications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Nonprofit governance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Charitable giving structures</span>
                            </li>
                          </ul>
                          <Link href="/practice-areas/corporate-law/nonprofits">
                            <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="governance" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Corporate Governance & Compliance</h3>
                      <p className="body-md mb-4">
                        Strategic guidance on governance structures, board matters, and regulatory compliance.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Board structure and operations</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Corporate policies and procedures</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Fiduciary duties and liability</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Shareholder rights and activism</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Board Advisory Services</h4>
                          <p className="text-sm mb-4">
                            Strategic counsel to boards of directors on governance matters, fiduciary duties, and risk
                            management.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Board structure and committees</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Director fiduciary duties</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Conflict of interest management</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Executive Compensation</h4>
                          <p className="text-sm mb-4">
                            Design and implementation of executive compensation arrangements and equity incentive plans.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Equity incentive plans</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Employment and severance agreements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Performance-based compensation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Shareholder Relations</h4>
                          <p className="text-sm mb-4">
                            Strategic guidance on shareholder communications, meetings, and activist situations.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Shareholder meeting preparation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Proxy statement preparation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Shareholder activism defense</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Corporate Policies</h4>
                          <p className="text-sm mb-4">
                            Development of comprehensive corporate policies to ensure compliance and mitigate risk.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Code of conduct</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Insider trading policies</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Risk management frameworks</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <GitMerge className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Corporate Transactions</h3>
                      <p className="body-md mb-4">
                        Strategic guidance on mergers, acquisitions, divestitures, and other complex business
                        transactions.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Mergers and acquisitions</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Joint ventures and strategic alliances</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Private equity and venture capital</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Corporate restructuring</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Mergers & Acquisitions</h4>
                          <p className="text-sm mb-4">
                            Comprehensive guidance through all stages of M&A transactions, from due diligence to
                            integration.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Transaction structuring</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Due diligence</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Negotiation and documentation</span>
                            </li>
                          </ul>
                          <Link href="/practice-areas/corporate-law/mergers-acquisitions">
                            <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                              Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Private Equity & Venture Capital</h4>
                          <p className="text-sm mb-4">
                            Specialized services for private equity firms, venture capital funds, and their portfolio
                            companies.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Fund formation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Portfolio company investments</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Exit strategies</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Joint Ventures & Strategic Alliances</h4>
                          <p className="text-sm mb-4">
                            Structuring and negotiation of joint ventures and strategic partnerships to achieve business
                            objectives.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>JV structure and governance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Contribution agreements</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Operational agreements</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Corporate Restructuring</h4>
                          <p className="text-sm mb-4">
                            Strategic guidance on corporate reorganizations, spin-offs, and other restructuring
                            transactions.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Corporate reorganizations</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Spin-offs and carve-outs</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Distressed asset transactions</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Shield className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Regulatory Compliance</h3>
                      <p className="body-md mb-4">
                        Proactive guidance on regulatory compliance across industries and jurisdictions.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Securities law compliance</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Industry-specific regulations</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Compliance program development</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Risk assessment and management</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Securities Compliance</h4>
                          <p className="text-sm mb-4">
                            Comprehensive guidance on securities laws and regulations for public and private companies.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>SEC reporting and disclosure</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Insider trading compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Private placement exemptions</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Industry-Specific Compliance</h4>
                          <p className="text-sm mb-4">
                            Specialized compliance guidance for regulated industries, including financial services,
                            healthcare, and technology.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Financial services regulations</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Healthcare compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Technology and data privacy</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Compliance Programs</h4>
                          <p className="text-sm mb-4">
                            Development and implementation of comprehensive compliance programs to mitigate legal and
                            regulatory risks.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Program design and implementation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Training and education</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Monitoring and auditing</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">International Compliance</h4>
                          <p className="text-sm mb-4">
                            Guidance on cross-border regulatory compliance for multinational operations.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Anti-corruption compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Export controls and sanctions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Cross-border data transfers</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Industry Expertise</span>
            <h2 className="heading-lg mb-4">Specialized Knowledge Across Industries</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our corporate attorneys combine legal expertise with deep industry knowledge to provide contextually
              relevant advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Financial Services</h3>
                <p className="body-md">
                  Specialized expertise in banking regulations, investment management, and financial technology.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Technology & Software</h3>
                <p className="body-md">
                  Guidance on intellectual property protection, licensing, data privacy, and technology transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Healthcare & Life Sciences</h3>
                <p className="body-md">
                  Comprehensive legal services for healthcare providers, pharmaceutical companies, and medical device
                  manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Manufacturing & Industrial</h3>
                <p className="body-md">
                  Strategic guidance on supply chain agreements, regulatory compliance, and international trade matters.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Real Estate & Construction</h3>
                <p className="body-md">
                  Expertise in real estate development, construction contracts, and property transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Retail & Consumer Products</h3>
                <p className="body-md">
                  Legal solutions for retail operations, consumer protection compliance, and brand management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Success Stories</span>
            <h2 className="heading-lg mb-4">Recent Corporate Law Case Studies</h2>
            <p className="body-md max-w-2xl mx-auto">
              Explore how our corporate law team has helped clients achieve their business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Merger & Acquisition Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Cross-Border Acquisition</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Guided a US-based technology company through the acquisition of a European software developer,
                  navigating complex regulatory requirements across multiple jurisdictions.
                </p>
                <Link href="/case-studies/cross-border-acquisition">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Corporate Restructuring Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Corporate Restructuring</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Advised a multinational corporation on a comprehensive restructuring to optimize tax efficiency and
                  streamline operations across its global subsidiaries.
                </p>
                <Link href="/case-studies/corporate-restructuring">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Venture Capital Financing Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Series B Financing</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Represented a high-growth technology startup in its $50 million Series B financing round, negotiating
                  favorable terms with multiple venture capital investors.
                </p>
                <Link href="/case-studies/series-b-financing">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/case-studies">
              <Button className="btn-law">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Team</span>
            <h2 className="heading-lg mb-4">Corporate Law Attorneys</h2>
            <p className="body-md max-w-2xl mx-auto">
              Meet our experienced corporate law attorneys who provide strategic counsel to businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="James Harrington"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">James Harrington</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Practice Group Chair</p>
                <p className="body-sm mb-4">
                  James leads our Corporate Law practice with over 35 years of experience in complex transactions and
                  corporate governance matters.
                </p>
                <Link href="/attorneys/james-harrington">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Sarah Johnson</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Partner</p>
                <p className="body-sm mb-4">
                  Sarah specializes in mergers and acquisitions, with particular expertise in technology and
                  cross-border transactions.
                </p>
                <Link href="/attorneys/sarah-johnson">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Michael Rodriguez</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Partner</p>
                <p className="body-sm mb-4">
                  Michael focuses on securities law and corporate governance, advising public companies on regulatory
                  compliance and transactions.
                </p>
                <Link href="/attorneys/michael-rodriguez">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Jennifer Lee"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Jennifer Lee</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Senior Associate</p>
                <p className="body-sm mb-4">
                  Jennifer specializes in venture capital financings and startup counseling, helping emerging companies
                  navigate growth and funding.
                </p>
                <Link href="/attorneys/jennifer-lee">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/attorneys">
              <Button className="btn-law">
                View All Attorneys <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">FAQs</span>
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-md max-w-2xl mx-auto">
              Find answers to common questions about our corporate law services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">What types of businesses do you represent?</h3>
                  <p className="body-md">
                    We represent businesses of all sizes and stages, from startups and emerging companies to established
                    corporations and multinational enterprises. Our clients span diverse industries, including
                    technology, financial services, healthcare, manufacturing, and retail.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">How can your firm help with business formation?</h3>
                  <p className="body-md">
                    Our attorneys provide comprehensive guidance on entity selection, formation, and structuring. We
                    help clients evaluate the advantages and disadvantages of different entity types (corporations,
                    LLCs, partnerships), prepare formation documents, develop governance structures, and address tax
                    considerations to establish a solid legal foundation for your business.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">What services do you offer for mergers and acquisitions?</h3>
                  <p className="body-md">
                    We provide end-to-end support for M&A transactions, including transaction structuring, due
                    diligence, negotiation of purchase agreements and ancillary documents, regulatory approvals,
                    closing, and post-closing integration. Our team has extensive experience with both buy-side and
                    sell-side transactions across various industries and deal sizes.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">How do you approach corporate governance matters?</h3>
                  <p className="body-md">
                    We take a proactive approach to corporate governance, helping clients establish effective governance
                    structures and practices that promote compliance, mitigate risk, and support business objectives.
                    Our services include board advisory, development of corporate policies and procedures, fiduciary
                    duty guidance, and shareholder relations.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">What is your approach to client service in corporate matters?</h3>
                  <p className="body-md">
                    We believe in building long-term relationships with our clients based on understanding their
                    business objectives, industry challenges, and risk tolerance. Our approach combines legal expertise
                    with business acumen to deliver practical, strategic solutions. We emphasize responsiveness,
                    transparency, and collaboration throughout our client engagements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Ready to Discuss Your Corporate Legal Needs?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Our experienced corporate attorneys are ready to help you navigate complex legal challenges and achieve
              your business objectives. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Consultation
              </Button>
              <Button className="btn-law-outline border-white text-white hover:bg-white/10 dark:border-law-beige-100 dark:text-law-beige-100 dark:hover:bg-law-beige-100/10">
                Learn More About Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
