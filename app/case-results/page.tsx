import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Scale, FileText, CheckCircle, Award, Briefcase } from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"

export const metadata = {
  title: "Case Results | Prestige Law",
  description: "Explore our track record of successful case results and legal victories across various practice areas.",
}

// Sample case results data
const caseResults = [
  {
    id: 1,
    title: "Corporate Merger Acquisition",
    category: "Corporate Law",
    outcome: "$120 Million Deal",
    description: "Successfully represented a mid-size technology company in a complex merger acquisition, navigating regulatory challenges and securing favorable terms that exceeded client expectations.",
    icon: "Briefcase",
    year: "2023"
  },
  {
    id: 2,
    title: "Intellectual Property Dispute",
    category: "Litigation",
    outcome: "$8.5 Million Settlement",
    description: "Secured a substantial settlement for our client in a patent infringement case against a major industry competitor, protecting our client's innovative technology and market position.",
    icon: "FileText",
    year: "2023"
  },
  {
    id: 3,
    title: "Commercial Real Estate Development",
    category: "Real Estate Law",
    outcome: "$45 Million Project",
    description: "Provided comprehensive legal guidance for a major downtown development project, successfully navigating zoning challenges and securing necessary permits and financing.",
    icon: "Building",
    year: "2022"
  },
  {
    id: 4,
    title: "Employment Class Action",
    category: "Employment Law",
    outcome: "$12 Million Settlement",
    description: "Represented a group of employees in a wage and hour dispute, securing a favorable settlement and implementing policy changes to prevent future violations.",
    icon: "Users",
    year: "2022"
  },
  {
    id: 5,
    title: "High-Profile Divorce Settlement",
    category: "Family Law",
    outcome: "Confidential Settlement",
    description: "Negotiated a complex divorce settlement involving substantial assets and business interests, ensuring our client's financial security and parental rights were protected.",
    icon: "Heart",
    year: "2021"
  },
  {
    id: 6,
    title: "Tax Controversy Resolution",
    category: "Tax Law",
    outcome: "$3.2 Million Saved",
    description: "Successfully challenged an IRS determination, resulting in significant tax savings for our corporate client and establishing a favorable precedent for similar cases.",
    icon: "Calculator",
    year: "2021"
  },
  {
    id: 7,
    title: "Healthcare Compliance Investigation",
    category: "Healthcare Law",
    outcome: "No Penalties Assessed",
    description: "Defended a healthcare provider against allegations of regulatory violations, resulting in no penalties and implementing a robust compliance program to prevent future issues.",
    icon: "Activity",
    year: "2020"
  },
  {
    id: 8,
    title: "Environmental Litigation",
    category: "Environmental Law",
    outcome: "Favorable Ruling",
    description: "Successfully defended a manufacturing client against environmental claims, while negotiating a reasonable remediation plan that minimized financial impact.",
    icon: "Leaf",
    year: "2020"
  },
  {
    id: 9,
    title: "Complex Estate Planning",
    category: "Estate Planning",
    outcome: "$75 Million Estate",
    description: "Developed a comprehensive estate plan for a high-net-worth family, minimizing tax liability and ensuring smooth transition of business interests to the next generation.",
    icon: "FileSignature",
    year: "2019"
  }
];

// Function to render the appropriate icon
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "Briefcase": return <Briefcase className="h-6 w-6" />;
    case "FileText": return <FileText className="h-6 w-6" />;
    case "Scale": return <Scale className="h-6 w-6" />;
    case "Award": return <Award className="h-6 w-6" />;
    default: return <CheckCircle className="h-6 w-6" />;
  }
};

export default function CaseResultsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Case Results</h1>
            <p className="body-lg">
              Our track record of success across a wide range of practice areas demonstrates our commitment to achieving
              favorable outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Results Overview */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Success Stories</span>
            <h2 className="heading-lg mb-4">Notable Case Results</h2>
            <p className="body-md max-w-2xl mx-auto">
              At Prestige Law, we measure our success by the results we achieve for our clients. Below are some of our
              notable case outcomes across various practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseResults.map((caseResult) => (
              <Card key={caseResult.id} className="law-card overflow-hidden hover-lift">
                <div className="relative h-48">
                  <Image 
                    src={`/placeholder.svg?height=200&width=400&text=${caseResult.category}`} 
                    alt={caseResult.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="img-overlay"></div>
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-law-brown-900/90 p-2 shadow-md">
                    {renderIcon(caseResult.icon)}
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-sm font-medium text-law-beige-100 bg-law-brown-800/70 px-2 py-1 rounded-md">
                      {caseResult.year}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white mt-1">{caseResult.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="badge-law">{caseResult.category}</span>
                    <span className="text-sm font-bold text-law-beige-500 dark:text-law-brown-500">
                      {caseResult.outcome}
                    </span>
                  </div>
                  <p className="body-md mb-4">{caseResult.description}</p>
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results by Practice Area */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">By Practice Area</span>
            <h2 className="heading-lg mb-4">Results Across Practice Areas</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our attorneys have achieved significant results across all of our practice areas. Explore our success
              stories by practice area below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="law-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4">
                    <Briefcase className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm">Corporate Law</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">$120M Technology Company Acquisition</p>
                      <p className="body-sm">Successfully negotiated and closed a complex cross-border acquisition.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">$50M Venture Capital Financing</p>
                      <p className="body-sm">Represented a startup through multiple rounds of venture financing.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Corporate Restructuring</p>
                      <p className="body-sm">Guided a multinational corporation through a complex restructuring process.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="law-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4">
                    <Scale className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm">Litigation</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">$8.5M Patent Infringement Settlement</p>
                      <p className="body-sm">Secured a favorable settlement in a complex intellectual property dispute.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Commercial Contract Dispute</p>
                      <p className="body-sm">Successfully defended a client against breach of contract claims.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Class Action Defense</p>
                      <p className="body-sm">Achieved dismissal of a class action lawsuit against a retail client.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="law-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4">
                    <FileText className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm">Real Estate Law</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">$45M Commercial Development</p>
                      <p className="body-sm">Provided comprehensive legal guidance for a major urban development project.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Zoning Variance Approval</p>
                      <p className="body-sm">Successfully secured zoning variances for a challenging development site.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Commercial Lease Negotiations</p>
                      <p className="body-sm">Represented a major tenant in negotiating favorable lease terms.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="law-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4">
                    <Award className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm">Employment Law</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">$12M Class Action Settlement</p>
                      <p className="body-sm">Represented employees in a wage and hour dispute with favorable outcome.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Executive Compensation</p>
                      <p className="body-sm">Negotiated favorable executive compensation packages for C-suite clients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Workplace Investigation</p>
                      <p className="body-sm">Conducted a sensitive workplace investigation with minimal disruption.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Client Success</span>
            <h2 className="heading-lg mb-4 text-white">What Our Clients Say</h2>
            <p className="body-md max-w-2xl mx-auto text-law-beige-100">
              Our clients' satisfaction is the true measure of our success. Here's what some of them have to say about
              their experience working with Prestige Law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 dark:bg-black/10 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white mb-6 flex-1">
                    "The team at Prestige Law provided exceptional representation in our corporate merger. Their attention to detail and strategic approach resulted in a favorable outcome that exceeded our expectations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Michael Thompson</p>
                      <p className="text-sm text-law-beige-200">CEO, TechInnovate Inc.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 dark:bg-black/10 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white mb-6 flex-1">
                    "When our company faced a complex patent dispute, Prestige Law's litigation team developed a winning strategy that protected our intellectual property and secured a substantial settlement."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Sarah Johnson</p>
                      <p className="text-sm text-law-beige-200">CTO, Innovex Solutions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 dark:bg-black/10 dark:border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white mb-6 flex-1">
                    "The real estate team at Prestige Law navigated complex zoning issues for our development project with remarkable skill. Their expertise was instrumental in bringing our vision to reality."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=50&width=50" alt="Client" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-white">David Rodriguez</p>
                      <p className="text-sm text-law-beige-200">President, Urban Development Group</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-law mb-2 inline-block">Get Started</span>
            <h2 className="heading-lg mb-6">Ready to Discuss Your Case?</h2>
            <p className="body-lg mb-8">
              Our team of experienced attorneys is ready to help you navigate your legal challenges and achieve your
              goals. Take the first step toward resolving your legal matters by scheduling a consultation.
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
