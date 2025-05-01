import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, FileText, Phone, Building, Users, Briefcase } from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"

export const metadata = {
  title: "Litigation | Prestige Law",
  description:
    "Strategic representation in complex disputes, with a proven track record of successful outcomes across various practice areas.",
}

export default function LitigationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="badge-law mb-4 inline-block">Practice Area</span>
            <h1 className="heading-xl mb-6">Litigation</h1>
            <p className="body-lg">
              Strategic representation in complex disputes, with a proven track record of successful outcomes across
              various practice areas.
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
              <h2 className="heading-lg mb-4">Strategic Advocacy in Complex Disputes</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Our Litigation practice provides strategic representation in complex disputes across a wide range of
                practice areas. From commercial and business litigation to intellectual property disputes and employment
                matters, our experienced litigators combine legal expertise with industry knowledge to achieve favorable
                outcomes for our clients.
              </p>
              <p className="body-md mb-6">
                We understand that litigation can be disruptive and costly, which is why we take a strategic approach
                focused on your business objectives. Whether through negotiation, alternative dispute resolution, or
                trial, we develop tailored strategies designed to resolve disputes efficiently while protecting your
                interests.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Experienced trial attorneys with a record of success</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Strategic approach focused on your business objectives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Expertise across federal and state courts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Efficient case management and cost-effective solutions</span>
                </li>
              </ul>
              <Button className="btn-law">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Litigation Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Services</span>
            <h2 className="heading-lg mb-4">Litigation Practice Areas</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our litigation team handles a wide range of disputes across various practice areas, providing strategic
              representation tailored to each client's specific needs.
            </p>
          </div>

          <Tabs defaultValue="commercial" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-law-beige-200 dark:bg-law-brown-800">
                <TabsTrigger
                  value="commercial"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Commercial Litigation
                </TabsTrigger>
                <TabsTrigger
                  value="ip"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  IP Litigation
                </TabsTrigger>
                <TabsTrigger
                  value="employment"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Employment Litigation
                </TabsTrigger>
                <TabsTrigger
                  value="real-estate"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Real Estate Disputes
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="commercial" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Briefcase className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Commercial & Business Litigation</h3>
                      <p className="body-md mb-4">
                        Strategic representation in complex business disputes, from contract conflicts to business torts
                        and shareholder disputes.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Contract disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Business torts</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Partnership and shareholder disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Fraud and misrepresentation claims</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Contract Disputes</h4>
                          <p className="text-sm mb-4">
                            Strategic representation in disputes involving breach of contract, interpretation issues,
                            and performance failures.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Breach of contract litigation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Contract interpretation disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Performance and payment disputes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Business Torts</h4>
                          <p className="text-sm mb-4">
                            Representation in cases involving unfair competition, tortious interference, and other
                            business torts.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Tortious interference claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Unfair competition</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Business defamation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Shareholder Disputes</h4>
                          <p className="text-sm mb-4">
                            Resolution of conflicts between shareholders, partners, and business owners.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Shareholder derivative actions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Minority shareholder oppression</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Partnership disputes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Fraud & Misrepresentation</h4>
                          <p className="text-sm mb-4">
                            Litigation involving fraudulent conduct, misrepresentation, and deceptive business
                            practices.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Securities fraud claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Consumer fraud litigation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Fraudulent inducement claims</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ip" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <FileText className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Intellectual Property Litigation</h3>
                      <p className="body-md mb-4">
                        Protection and enforcement of intellectual property rights through strategic litigation and
                        dispute resolution.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Patent infringement</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Trademark disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Copyright litigation</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Trade secret misappropriation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Patent Litigation</h4>
                          <p className="text-sm mb-4">
                            Strategic representation in patent infringement cases across various technologies and
                            industries.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Patent infringement claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Patent validity challenges</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>PTAB proceedings</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Trademark Litigation</h4>
                          <p className="text-sm mb-4">
                            Protection of brand identity through enforcement of trademark rights and unfair competition
                            claims.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Trademark infringement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Trademark dilution</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>TTAB proceedings</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Copyright Litigation</h4>
                          <p className="text-sm mb-4">
                            Enforcement of copyright protection for creative works across various media and platforms.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Copyright infringement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>DMCA violations</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Fair use disputes</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Trade Secret Litigation</h4>
                          <p className="text-sm mb-4">
                            Protection of confidential business information and trade secrets from misappropriation.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Trade secret misappropriation</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Employee departure cases</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Confidentiality agreement enforcement</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employment" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Employment Litigation</h3>
                      <p className="body-md mb-4">
                        Strategic representation in employment disputes, from discrimination claims to wage and hour
                        issues and restrictive covenant enforcement.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Discrimination and harassment claims</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Wage and hour disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Restrictive covenant enforcement</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Wrongful termination</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Discrimination & Harassment</h4>
                          <p className="text-sm mb-4">
                            Defense against claims of workplace discrimination, harassment, and retaliation.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Title VII claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>ADA compliance</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>ADEA litigation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Wage & Hour Disputes</h4>
                          <p className="text-sm mb-4">
                            Defense against individual and collective actions involving wage and hour violations.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>FLSA collective actions</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Overtime disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Misclassification claims</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Restrictive Covenants</h4>
                          <p className="text-sm mb-4">
                            Enforcement of non-compete, non-solicitation, and confidentiality agreements.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Non-compete enforcement</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Non-solicitation disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Temporary restraining orders</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Wrongful Termination</h4>
                          <p className="text-sm mb-4">
                            Defense against claims of wrongful termination and employment contract breaches.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Public policy violation claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Employment contract disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Whistleblower retaliation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="real-estate" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        <Building className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-4">Real Estate Litigation</h3>
                      <p className="body-md mb-4">
                        Resolution of disputes involving real property, from title issues to construction defects and
                        landlord-tenant conflicts.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Property disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Construction litigation</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Landlord-tenant disputes</span>
                        </li>
                        <li className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                          <span>Real estate contract disputes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Property Disputes</h4>
                          <p className="text-sm mb-4">
                            Resolution of conflicts involving property ownership, boundaries, easements, and title
                            issues.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Boundary disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Easement conflicts</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Title defect litigation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Construction Litigation</h4>
                          <p className="text-sm mb-4">
                            Resolution of disputes involving construction defects, delays, and contract breaches.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Construction defect claims</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Delay and disruption disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Mechanic's lien enforcement</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Landlord-Tenant Disputes</h4>
                          <p className="text-sm mb-4">
                            Representation in conflicts between landlords and tenants in both residential and commercial
                            contexts.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Lease disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Eviction proceedings</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Property damage claims</span>
                            </li>
                          </ul>
                        </div>
                        <div className="law-card p-6">
                          <h4 className="font-medium text-lg mb-2">Real Estate Transactions</h4>
                          <p className="text-sm mb-4">
                            Resolution of disputes arising from real estate transactions and development projects.
                          </p>
                          <ul className="space-y-1 mb-4 text-sm">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Purchase and sale disputes</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Financing conflicts</span>
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                              <span>Development agreement disputes</span>
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

      {/* Approach Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Litigation Strategy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Our Approach</span>
              <h2 className="heading-lg mb-4">Strategic Litigation Management</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Prestige Law, we take a strategic approach to litigation that focuses on your business objectives and
                risk tolerance. We understand that litigation can be disruptive and costly, which is why we work closely
                with you to develop tailored strategies that align with your goals.
              </p>
              <p className="body-md mb-6">
                Our litigation team combines legal expertise with industry knowledge to provide effective representation
                at every stage of the dispute resolution process. From pre-litigation counseling to trial and appeal, we
                deliver practical solutions that protect your interests and achieve favorable outcomes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-2 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-law-beige-500 dark:text-law-brown-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Early Case Assessment</h3>
                    <p className="body-sm">
                      We conduct thorough early case assessments to evaluate strengths, weaknesses, and potential
                      outcomes, enabling informed decision-making.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-2 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-law-beige-500 dark:text-law-brown-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">
                      Alternative Dispute Resolution
                    </h3>
                    <p className="body-sm">
                      We explore mediation, arbitration, and other ADR methods when appropriate to resolve disputes
                      efficiently and cost-effectively.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-2 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-law-beige-500 dark:text-law-brown-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Trial Preparation</h3>
                    <p className="body-sm">
                      When trial is necessary, we develop compelling case strategies and prepare thoroughly to present
                      your strongest case in court.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-2 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-law-beige-500 dark:text-law-brown-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">
                      Efficient Case Management
                    </h3>
                    <p className="body-sm">
                      We employ advanced technology and project management techniques to handle litigation efficiently
                      and cost-effectively.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="btn-law">
                  Discuss Your Case <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Success Stories</span>
            <h2 className="heading-lg mb-4">Recent Litigation Case Studies</h2>
            <p className="body-md max-w-2xl mx-auto">
              Explore how our litigation team has helped clients achieve favorable outcomes in complex disputes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Commercial Litigation Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Contract Dispute Victory</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Successfully represented a manufacturing company in a high-stakes contract dispute, securing a
                  favorable judgment and recovering significant damages for breach of contract.
                </p>
                <Link href="/case-studies/contract-dispute">
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
                  alt="IP Litigation Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Patent Infringement Defense</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Successfully defended a technology company against patent infringement claims, securing a complete
                  dismissal of all claims through strategic motion practice.
                </p>
                <Link href="/case-studies/patent-defense">
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
                  alt="Employment Litigation Case Study"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Class Action Defense</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Successfully defended an employer against a wage and hour class action, securing a favorable
                  settlement that minimized financial exposure and business disruption.
                </p>
                <Link href="/case-studies/class-action-defense">
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
            <h2 className="heading-lg mb-4">Litigation Attorneys</h2>
            <p className="body-md max-w-2xl mx-auto">
              Meet our experienced litigation attorneys who provide strategic representation in complex disputes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Practice Group Chair</p>
                <p className="body-sm mb-4">
                  Michael leads our Litigation practice with over 25 years of experience in complex commercial disputes
                  and trial advocacy.
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
                  alt="Sarah Johnson"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Sarah Johnson</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Partner</p>
                <p className="body-sm mb-4">
                  Sarah specializes in intellectual property litigation, with particular expertise in patent and
                  trademark disputes.
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
                  alt="David Thompson"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">David Thompson</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Partner</p>
                <p className="body-sm mb-4">
                  David focuses on employment litigation, representing employers in discrimination, wage and hour, and
                  restrictive covenant disputes.
                </p>
                <Link href="/attorneys/david-thompson">
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
                  Jennifer specializes in commercial litigation, with experience in contract disputes, business torts,
                  and shareholder conflicts.
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
            <p className="body-md max-w-2xl mx-auto">Find answers to common questions about our litigation services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">What is your approach to litigation?</h3>
                  <p className="body-md">
                    We take a strategic approach to litigation that focuses on your business objectives and risk
                    tolerance. We begin with a thorough assessment of your case, identify potential paths to resolution,
                    and develop tailored strategies that align with your goals. While we prepare every case as if it
                    will go to trial, we also explore opportunities for early resolution when appropriate.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">How do you manage litigation costs?</h3>
                  <p className="body-md">
                    We understand that litigation can be expensive, which is why we focus on efficient case management.
                    We develop detailed litigation budgets, employ advanced technology for document management and
                    review, staff cases appropriately, and regularly communicate with clients about costs and strategy.
                    We also explore alternative fee arrangements when appropriate to align our interests with yours.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">Do you handle alternative dispute resolution?</h3>
                  <p className="body-md">
                    Yes, we have extensive experience with various forms of alternative dispute resolution (ADR),
                    including mediation, arbitration, and negotiated settlements. We help clients evaluate whether ADR
                    is appropriate for their dispute and represent them effectively throughout the process. Our goal is
                    to achieve favorable outcomes efficiently, whether through ADR or traditional litigation.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">What types of cases does your litigation team handle?</h3>
                  <p className="body-md">
                    Our litigation team handles a wide range of disputes across various practice areas, including
                    commercial and business litigation, intellectual property disputes, employment matters, real estate
                    conflicts, and more. We represent clients in state and federal courts, before administrative
                    agencies, and in alternative dispute resolution proceedings.
                  </p>
                </CardContent>
              </Card>

              <Card className="law-card">
                <CardContent className="pt-6">
                  <h3 className="heading-sm mb-2">How do you keep clients informed during litigation?</h3>
                  <p className="body-md">
                    We believe in transparent and regular communication throughout the litigation process. We provide
                    timely updates on case developments, explain legal strategies in clear terms, and involve clients in
                    key decisions. Our attorneys are accessible and responsive to client inquiries, and we tailor our
                    communication approach to each client's preferences and needs.
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
            <h2 className="heading-lg mb-6 text-white">Ready to Discuss Your Legal Dispute?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Our experienced litigation attorneys are ready to help you navigate complex legal challenges and achieve
              favorable outcomes. Contact us today to schedule a consultation.
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
