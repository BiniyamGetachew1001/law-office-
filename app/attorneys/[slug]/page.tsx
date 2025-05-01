import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"

// This would typically come from a database or API
// For demo purposes, we're hardcoding the data
const attorneys = [
  {
    slug: "james-harrington",
    name: "James Harrington",
    title: "Founding Partner",
    image: "/placeholder.svg?height=500&width=400",
    email: "j.harrington@prestigelaw.com",
    phone: "(212) 555-1001",
    linkedin: "https://www.linkedin.com/in/jamesharrington",
    bio: "James Harrington is a Founding Partner at Prestige Law, with over 35 years of experience in corporate law. He has led some of the firm's most significant M&A transactions and is recognized as a leading authority in corporate governance and securities regulation.\n\nThroughout his career, James has advised public and private companies on complex corporate matters, including mergers and acquisitions, corporate governance, securities offerings, and regulatory compliance. His strategic approach to corporate transactions has helped clients navigate complex legal challenges while achieving their business objectives.\n\nJames is known for his deep understanding of corporate law, practical business sense, and commitment to client service. He works closely with boards of directors, executives, and in-house counsel to develop tailored solutions that address their specific legal needs and business goals.",
    education: [
      {
        degree: "J.D.",
        institution: "Harvard Law School",
        year: "1985",
        honors: "cum laude, Harvard Law Review",
      },
      {
        degree: "B.A., Economics",
        institution: "Yale University",
        year: "1982",
        honors: "summa cum laude, Phi Beta Kappa",
      },
    ],
    barAdmissions: ["New York", "Massachusetts", "U.S. Supreme Court", "U.S. Court of Appeals for the Second Circuit"],
    practiceAreas: [
      "Corporate Law",
      "Mergers & Acquisitions",
      "Securities Regulation",
      "Corporate Governance",
      "Private Equity",
    ],
    experience: [
      {
        position: "Founding Partner",
        company: "Prestige Law",
        period: "1985 - Present",
        description:
          "Co-founded the firm and built a premier corporate practice. Advises public and private companies on complex corporate transactions and governance matters.",
      },
      {
        position: "Associate",
        company: "Smith & Johnson LLP",
        period: "1982 - 1985",
        description: "Practiced in the corporate department, focusing on M&A transactions and securities offerings.",
      },
    ],
    publications: [
      {
        title: "The Evolution of Corporate Governance in the Digital Age",
        publisher: "Harvard Business Law Review",
        year: "2021",
      },
      {
        title: "Strategic Considerations in Cross-Border M&A Transactions",
        publisher: "International Business Law Journal",
        year: "2018",
      },
      {
        title: "Corporate Governance Best Practices for Emerging Companies",
        publisher: "Corporate Law Review",
        year: "2015",
      },
    ],
    speakingEngagements: [
      {
        title: "Navigating Regulatory Challenges in M&A Transactions",
        event: "National Corporate Law Conference",
        year: "2022",
      },
      {
        title: "ESG Considerations in Corporate Governance",
        event: "Corporate Directors Forum",
        year: "2021",
      },
      {
        title: "The Future of Corporate Transactions",
        event: "Global M&A Symposium",
        year: "2019",
      },
    ],
    awards: [
      {
        title: "Leading Corporate Lawyer",
        organization: "Chambers USA",
        years: "2010-2023",
      },
      {
        title: "Top 100 Lawyers in New York",
        organization: "New York Law Journal",
        years: "2015-2023",
      },
      {
        title: "Distinguished Service Award",
        organization: "Harvard Law School Association",
        years: "2018",
      },
    ],
    languages: ["English", "French"],
    professionalMemberships: [
      "American Bar Association, Business Law Section",
      "New York State Bar Association",
      "Association of Corporate Counsel",
      "National Association of Corporate Directors",
    ],
    communityInvolvement: [
      {
        organization: "Legal Aid Society",
        role: "Board Member",
        period: "2015 - Present",
      },
      {
        organization: "Yale Alumni Association",
        role: "Regional Chair",
        period: "2010 - Present",
      },
    ],
  },
  // Additional attorneys would be defined here
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const attorney = attorneys.find((a) => a.slug === params.slug)

  if (!attorney) {
    return {
      title: "Attorney Not Found | Prestige Law",
      description: "The requested attorney profile could not be found.",
    }
  }

  return {
    title: `${attorney.name} | Prestige Law`,
    description: `Learn more about ${attorney.name}, ${attorney.title} at Prestige Law, specializing in ${attorney.practiceAreas.join(
      ", ",
    )}.`,
  }
}

export default function AttorneyProfilePage({ params }: { params: { slug: string } }) {
  const attorney = attorneys.find((a) => a.slug === params.slug)

  if (!attorney) {
    return (
      <div className="container py-16 text-center">
        <h1 className="heading-lg mb-4">Attorney Not Found</h1>
        <p className="body-md mb-8">The attorney profile you are looking for could not be found.</p>
        <Link href="/attorneys">
          <Button className="btn-law">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Attorneys
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="container relative z-10">
          <Link href="/attorneys" className="inline-flex items-center text-law-beige-500 dark:text-law-brown-500 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Attorneys
          </Link>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={attorney.image || "/placeholder.svg"}
                  alt={attorney.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="heading-xl mb-2">{attorney.name}</h1>
              <p className="text-xl text-law-beige-500 dark:text-law-brown-500 font-medium mb-6">{attorney.title}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                    <a
                      href={`mailto:${attorney.email}`}
                      className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                    >
                      {attorney.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                    <a
                      href={`tel:${attorney.phone}`}
                      className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                    >
                      {attorney.phone}
                    </a>
                  </div>
                  {attorney.linkedin && (
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                      <a
                        href={attorney.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium text-law-brown-800 dark:text-law-beige-200 mb-2">
                    Practice Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {attorney.practiceAreas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 text-sm rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="heading-md mb-4">Biography</h2>
                <div className="body-md space-y-4">
                  {attorney.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="btn-law">Schedule a Consultation</Button>
                <Button className="btn-law-outline">Download vCard</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <Tabs defaultValue="experience" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="bg-law-beige-200 dark:bg-law-brown-800">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Education & Admissions
                </TabsTrigger>
                <TabsTrigger
                  value="publications"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Publications & Speaking
                </TabsTrigger>
                <TabsTrigger
                  value="awards"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Awards & Memberships
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="experience" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <Briefcase className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Professional Experience</h3>
                      </div>
                      <div className="space-y-8">
                        {attorney.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="relative pl-8 border-l-2 border-law-beige-200 dark:border-law-brown-700"
                          >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-law-beige-500 dark:bg-law-brown-500"></div>
                            <h4 className="font-medium text-lg mb-1">{exp.position}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {exp.company}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">{exp.period}</span>
                            </div>
                            <p className="text-law-brown-700 dark:text-law-beige-300">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <User className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Community Involvement</h3>
                      </div>
                      <div className="space-y-6">
                        {attorney.communityInvolvement.map((involvement, index) => (
                          <div key={index} className="law-card p-5">
                            <h4 className="font-medium text-lg mb-1">{involvement.organization}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {involvement.role}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">
                                {involvement.period}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <GraduationCap className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Education</h3>
                      </div>
                      <div className="space-y-6">
                        {attorney.education.map((edu, index) => (
                          <div key={index} className="law-card p-5">
                            <h4 className="font-medium text-lg mb-1">{edu.degree}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {edu.institution}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">{edu.year}</span>
                            </div>
                            {edu.honors && <p className="text-law-brown-700 dark:text-law-beige-300">{edu.honors}</p>}
                          </div>
                        ))}
                      </div>

                      {attorney.languages && attorney.languages.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-lg font-medium text-law-brown-800 dark:text-law-beige-200 mb-3">
                            Languages
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {attorney.languages.map((language, index) => (
                              <span
                                key={index}
                                className="inline-block px-3 py-1 text-sm rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <FileText className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Bar Admissions</h3>
                      </div>
                      <div className="law-card p-5 mb-6">
                        <ul className="space-y-2">
                          {attorney.barAdmissions.map((admission, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-law-beige-500 dark:bg-law-brown-500 mr-3"></div>
                              <span className="text-law-brown-700 dark:text-law-beige-300">{admission}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publications" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <BookOpen className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Publications</h3>
                      </div>
                      <div className="space-y-6">
                        {attorney.publications.map((pub, index) => (
                          <div key={index} className="law-card p-5">
                            <h4 className="font-medium text-lg mb-1">{pub.title}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {pub.publisher}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">{pub.year}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <Calendar className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Speaking Engagements</h3>
                      </div>
                      <div className="space-y-6">
                        {attorney.speakingEngagements.map((engagement, index) => (
                          <div key={index} className="law-card p-5">
                            <h4 className="font-medium text-lg mb-1">{engagement.title}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {engagement.event}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">
                                {engagement.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="awards" className="mt-0">
              <Card className="law-card">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <Award className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Awards & Recognitions</h3>
                      </div>
                      <div className="space-y-6">
                        {attorney.awards.map((award, index) => (
                          <div key={index} className="law-card p-5">
                            <h4 className="font-medium text-lg mb-1">{award.title}</h4>
                            <div className="flex items-center mb-2">
                              <span className="text-law-beige-500 dark:text-law-brown-500 font-medium">
                                {award.organization}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="text-law-brown-600 dark:text-law-beige-400 text-sm">{award.years}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-6">
                        <MapPin className="h-6 w-6 mr-3 text-law-beige-500 dark:text-law-brown-500" />
                        <h3 className="heading-md">Professional Memberships</h3>
                      </div>
                      <div className="law-card p-5">
                        <ul className="space-y-3">
                          {attorney.professionalMemberships.map((membership, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-law-beige-500 dark:bg-law-brown-500 mr-3"></div>
                              <span className="text-law-brown-700 dark:text-law-beige-300">{membership}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Attorneys Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Team</span>
            <h2 className="heading-lg mb-4">Related Attorneys</h2>
            <p className="body-md max-w-2xl mx-auto">
              Meet other attorneys at Prestige Law who specialize in similar practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Senior Partner</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    Corporate Law
                  </span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    Securities
                  </span>
                </div>
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
                  alt="Robert Wilson"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Robert Wilson</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Senior Associate</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    Corporate Law
                  </span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    M&A
                  </span>
                </div>
                <Link href="/attorneys/robert-wilson">
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
                  alt="Richard Bennett"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="heading-sm mb-1">Richard Bennett</h3>
                <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">Of Counsel</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    Corporate Law
                  </span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200">
                    International Business
                  </span>
                </div>
                <Link href="/attorneys/richard-bennett">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Ready to Work With {attorney.name}?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Contact us today to schedule a consultation and discuss how {attorney.name.split(" ")[0]} can help you
              navigate your legal challenges and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
                Schedule a Consultation
              </Button>
              <Button className="btn-law-outline border-white text-white hover:bg-white/10 dark:border-law-beige-100 dark:text-law-beige-100 dark:hover:bg-law-beige-100/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
