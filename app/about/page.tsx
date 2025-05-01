import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Scale,
  Users,
} from "lucide-react"
import AttorneyProfile from "@/components/attorney-profile"
import TimelineItem from "@/components/timeline-item"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "About Us | Prestige Law",
  description: "Learn about our law firm's history, mission, values, and meet our experienced attorneys.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-20"></div>
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.aboutHero}
            alt="Ethiopian-themed background"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">About Prestige Law</h1>
            <p className="body-lg">
              A tradition of legal excellence since 1985, committed to providing exceptional representation and
              personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-law mb-2 inline-block">Our Mission</span>
              <h2 className="heading-lg mb-4">Committed to Excellence</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Prestige Law, our mission is to provide exceptional legal representation while maintaining the
                highest standards of integrity, professionalism, and client service. We are dedicated to understanding
                each client's unique needs and delivering tailored solutions that achieve their objectives.
              </p>
              <p className="body-md mb-6">
                We believe that effective legal representation requires not only expertise in the law but also a deep
                understanding of our clients' industries, challenges, and goals. This client-centered approach has been
                the cornerstone of our practice since our founding.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="law-card">
                  <CardContent className="pt-6">
                    <h3 className="heading-sm mb-2">Excellence</h3>
                    <p className="body-sm">
                      We strive for excellence in every aspect of our practice, from legal analysis to client
                      communication.
                    </p>
                  </CardContent>
                </Card>
                <Card className="law-card">
                  <CardContent className="pt-6">
                    <h3 className="heading-sm mb-2">Integrity</h3>
                    <p className="body-sm">
                      We uphold the highest ethical standards and maintain transparency in all client relationships.
                    </p>
                  </CardContent>
                </Card>
                <Card className="law-card">
                  <CardContent className="pt-6">
                    <h3 className="heading-sm mb-2">Innovation</h3>
                    <p className="body-sm">
                      We embrace innovative approaches to legal challenges, finding creative solutions for complex
                      issues.
                    </p>
                  </CardContent>
                </Card>
                <Card className="law-card">
                  <CardContent className="pt-6">
                    <h3 className="heading-sm mb-2">Dedication</h3>
                    <p className="body-sm">
                      We are dedicated to achieving the best possible outcomes for our clients through tireless
                      advocacy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ethiopianImages.justiceMinistry}
                alt="Ethiopian Ministry of Justice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our History</span>
            <h2 className="heading-lg mb-4">A Legacy of Legal Excellence</h2>
            <p className="body-md max-w-2xl mx-auto">
              For over three decades, Prestige Law has grown from a small practice to one of the region's most respected
              law firms.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-law-beige-300 dark:bg-law-brown-700"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              <TimelineItem
                year="1985"
                title="Founding of Prestige Law"
                description="Established by James Harrington and Elizabeth Chen with a focus on corporate and real estate law."
                icon={<Scale className="h-6 w-6" />}
              />

              <TimelineItem
                year="1992"
                title="Expansion of Practice Areas"
                description="Added litigation and intellectual property departments to meet growing client needs."
                icon={<Briefcase className="h-6 w-6" />}
                position="right"
              />

              <TimelineItem
                year="1998"
                title="New Headquarters"
                description="Moved to our current location in the heart of the financial district to accommodate our growing team."
                icon={<MapPin className="h-6 w-6" />}
              />

              <TimelineItem
                year="2005"
                title="International Expansion"
                description="Opened our first international office to better serve clients with global operations."
                icon={<Users className="h-6 w-6" />}
                position="right"
              />

              <TimelineItem
                year="2012"
                title="Technology Practice Launch"
                description="Established a dedicated technology practice to address emerging legal challenges in the digital age."
                icon={<BookOpen className="h-6 w-6" />}
              />

              <TimelineItem
                year="2018"
                title="Pro Bono Initiative"
                description="Launched a formal pro bono program, committing to dedicate 5% of our practice to serving underrepresented communities."
                icon={<Heart className="h-6 w-6" />}
                position="right"
              />

              <TimelineItem
                year="2023"
                title="Innovation Center"
                description="Established our Legal Innovation Center to develop technology-driven solutions for legal service delivery."
                icon={<Award className="h-6 w-6" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Attorneys Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Team</span>
            <h2 className="heading-lg mb-4">Meet Our Attorneys</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our team of experienced attorneys brings together diverse expertise and a shared commitment to excellence.
            </p>
          </div>

          <Tabs defaultValue="partners" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-law-beige-200 dark:bg-law-brown-800">
                <TabsTrigger
                  value="partners"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Partners
                </TabsTrigger>
                <TabsTrigger
                  value="associates"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Associates
                </TabsTrigger>
                <TabsTrigger
                  value="of-counsel"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  Of Counsel
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="partners" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyProfile
                  name="James Harrington"
                  title="Founding Partner"
                  image={ethiopianImages.attorney1}
                  specialties={["Corporate Law", "Mergers & Acquisitions"]}
                  education={["J.D., Harvard Law School", "B.A., Yale University"]}
                  bio="James has over 35 years of experience in corporate law and has led some of the firm's most significant M&A transactions. He is recognized as a leading authority in corporate governance and securities regulation."
                  email="j.harrington@prestigelaw.com"
                  phone="(212) 555-1001"
                />

                <AttorneyProfile
                  name="Elizabeth Chen"
                  title="Founding Partner"
                  image={ethiopianImages.attorney2}
                  specialties={["Real Estate Law", "Commercial Transactions"]}
                  education={["J.D., Columbia Law School", "B.S., University of Pennsylvania"]}
                  bio="Elizabeth specializes in complex real estate transactions and development projects. Her expertise in navigating regulatory challenges has made her a trusted advisor to major developers and investors."
                  email="e.chen@prestigelaw.com"
                  phone="(212) 555-1002"
                />

                <AttorneyProfile
                  name="Michael Rodriguez"
                  title="Managing Partner"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Litigation", "Dispute Resolution"]}
                  education={["J.D., Stanford Law School", "B.A., University of California, Berkeley"]}
                  bio="Michael leads our litigation practice and has successfully represented clients in high-stakes disputes across various industries. His strategic approach to litigation has resulted in numerous favorable outcomes."
                  email="m.rodriguez@prestigelaw.com"
                  phone="(212) 555-1003"
                />

                <AttorneyProfile
                  name="Sarah Johnson"
                  title="Senior Partner"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Intellectual Property", "Technology Law"]}
                  education={["J.D., New York University", "M.S., MIT", "B.S., Cornell University"]}
                  bio="Sarah leads our intellectual property practice, combining her legal expertise with a background in computer science. She has helped numerous technology companies protect and leverage their IP assets."
                  email="s.johnson@prestigelaw.com"
                  phone="(212) 555-1004"
                />

                <AttorneyProfile
                  name="David Thompson"
                  title="Senior Partner"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Tax Law", "Estate Planning"]}
                  education={["J.D., Georgetown University", "LL.M. in Taxation, NYU", "B.A., Dartmouth College"]}
                  bio="David specializes in tax planning for high-net-worth individuals and corporations. His strategic approach to tax matters has helped clients navigate complex regulations while optimizing their tax positions."
                  email="d.thompson@prestigelaw.com"
                  phone="(212) 555-1005"
                />

                <AttorneyProfile
                  name="Jennifer Lee"
                  title="Partner"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Employment Law", "Labor Relations"]}
                  education={["J.D., University of Chicago", "B.A., Northwestern University"]}
                  bio="Jennifer represents employers in all aspects of employment law, from compliance matters to litigation. She is known for her practical approach to workplace issues and proactive risk management strategies."
                  email="j.lee@prestigelaw.com"
                  phone="(212) 555-1006"
                />
              </div>
            </TabsContent>

            <TabsContent value="associates" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyProfile
                  name="Robert Wilson"
                  title="Senior Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Corporate Law", "Securities"]}
                  education={["J.D., Columbia Law School", "B.A., Princeton University"]}
                  bio="Robert focuses on securities offerings and corporate governance matters. He has advised clients on numerous public and private offerings and SEC compliance issues."
                  email="r.wilson@prestigelaw.com"
                  phone="(212) 555-1007"
                />

                <AttorneyProfile
                  name="Sophia Martinez"
                  title="Senior Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Litigation", "White Collar Defense"]}
                  education={["J.D., Yale Law School", "B.A., Brown University"]}
                  bio="Sophia specializes in complex commercial litigation and white-collar defense. She has represented clients in federal and state courts across a wide range of industries."
                  email="s.martinez@prestigelaw.com"
                  phone="(212) 555-1008"
                />

                <AttorneyProfile
                  name="Daniel Kim"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Intellectual Property", "Technology Transactions"]}
                  education={["J.D., Berkeley Law", "B.S., Stanford University"]}
                  bio="Daniel focuses on technology transactions and IP licensing. His background in computer science provides valuable insights for clients in the technology sector."
                  email="d.kim@prestigelaw.com"
                  phone="(212) 555-1009"
                />

                <AttorneyProfile
                  name="Emily Patel"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Real Estate", "Land Use"]}
                  education={["J.D., Georgetown University", "B.A., Emory University"]}
                  bio="Emily specializes in real estate transactions and land use matters. She has assisted clients with acquisitions, development projects, and zoning issues across the region."
                  email="e.patel@prestigelaw.com"
                  phone="(212) 555-1010"
                />

                <AttorneyProfile
                  name="Thomas Wright"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Tax Law", "Corporate Restructuring"]}
                  education={["J.D., University of Virginia", "B.S., University of North Carolina"]}
                  bio="Thomas advises clients on tax matters related to corporate transactions and restructurings. His analytical approach helps clients navigate complex tax implications."
                  email="t.wright@prestigelaw.com"
                  phone="(212) 555-1011"
                />

                <AttorneyProfile
                  name="Olivia Garcia"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Employment Law", "Compliance"]}
                  education={["J.D., UCLA School of Law", "B.A., UC San Diego"]}
                  bio="Olivia focuses on employment compliance and workplace investigations. She helps employers develop policies and practices that mitigate legal risks while fostering positive workplace cultures."
                  email="o.garcia@prestigelaw.com"
                  phone="(212) 555-1012"
                />
              </div>
            </TabsContent>

            <TabsContent value="of-counsel" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyProfile
                  name="Richard Bennett"
                  title="Of Counsel"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Corporate Law", "International Business"]}
                  education={["J.D., Harvard Law School", "M.B.A., Harvard Business School", "B.A., Dartmouth College"]}
                  bio="Richard brings decades of experience in international business transactions. Before joining Prestige Law, he served as general counsel for a Fortune 100 company, overseeing legal matters across global operations."
                  email="r.bennett@prestigelaw.com"
                  phone="(212) 555-1013"
                />

                <AttorneyProfile
                  name="Margaret Wu"
                  title="Of Counsel"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Intellectual Property", "Patent Law"]}
                  education={["J.D., Stanford Law School", "Ph.D., Electrical Engineering, MIT", "B.S., Caltech"]}
                  bio="Margaret specializes in patent law with a focus on electronics and software. Her technical background and legal expertise make her an invaluable resource for technology clients seeking to protect their innovations."
                  email="m.wu@prestigelaw.com"
                  phone="(212) 555-1014"
                />

                <AttorneyProfile
                  name="Jonathan Brooks"
                  title="Of Counsel"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Environmental Law", "Regulatory Compliance"]}
                  education={[
                    "J.D., Yale Law School",
                    "M.S., Environmental Science, Duke University",
                    "B.A., Williams College",
                  ]}
                  bio="Jonathan advises clients on environmental compliance and regulatory matters. His experience includes serving as a senior attorney at the EPA, giving him unique insights into regulatory processes and enforcement."
                  email="j.brooks@prestigelaw.com"
                  phone="(212) 555-1015"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/attorneys">
              <Button className="btn-law">
                View All Attorneys <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Service Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-law-beige-100/50 dark:bg-law-brown-800/30"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ethiopianImages.clientMeeting}
                alt="Ethiopian lawyer with client"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Client Service</span>
              <h2 className="heading-lg mb-4">Our Commitment to You</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Prestige Law, we believe that exceptional legal representation begins with understanding our clients'
                needs, objectives, and concerns. We are committed to providing personalized attention and responsive
                service throughout every stage of your legal matter.
              </p>
              <p className="body-md mb-6">
                Our client-centered approach means that we take the time to listen, explain complex legal concepts in
                clear terms, and keep you informed about developments in your case. We believe in building long-term
                relationships based on trust, transparency, and results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Responsive Communication</h3>
                    <p className="body-sm">
                      We prioritize prompt responses to client inquiries and regular updates on case progress.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Transparent Billing</h3>
                    <p className="body-sm">
                      Our billing practices are clear and transparent, with detailed invoices and no unexpected charges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Strategic Approach</h3>
                    <p className="body-sm">
                      We develop tailored legal strategies aligned with your specific goals and circumstances.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Collaborative Teamwork</h3>
                    <p className="body-sm">
                      Our attorneys collaborate across practice areas to provide comprehensive solutions to complex
                      legal challenges.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="btn-law">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Community Impact</span>
            <h2 className="heading-lg mb-4">Our Commitment to Community</h2>
            <p className="body-md max-w-2xl mx-auto">
              We believe in giving back to the communities where we live and work through pro bono service, charitable
              initiatives, and civic engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="law-card hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.proBono}
                  alt="Ethiopian legal aid"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Pro Bono Program</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Our attorneys dedicate over 2,500 hours annually to pro bono work, providing legal services to
                  underserved individuals and nonprofit organizations.
                </p>
                <div className="flex items-center text-law-beige-500 dark:text-law-brown-500">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="font-medium">5% of practice dedicated to pro bono</span>
                </div>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.communityService}
                  alt="Ethiopian community outreach"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Community Partnerships</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  We partner with local organizations to address community needs through volunteer service, financial
                  support, and legal education initiatives.
                </p>
                <div className="flex items-center text-law-beige-500 dark:text-law-brown-500">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">12 active community partnerships</span>
                </div>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.legalEducation}
                  alt="Ethiopian legal workshop"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Legal Education</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  We conduct workshops and seminars to improve legal literacy and provide mentorship to aspiring
                  attorneys from diverse backgrounds.
                </p>
                <div className="flex items-center text-law-beige-500 dark:text-law-brown-500">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="font-medium">20+ educational events annually</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/community-impact">
              <Button className="btn-law">
                Learn More About Our Impact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.heroBackground}
            alt="Ethiopian-themed background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Ready to Work With Our Team?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Contact us today to schedule a consultation with one of our experienced attorneys. We look forward to
              learning about your legal needs and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Consultation
              </Button>
              <Button className="btn-law-outline border-white text-white hover:bg-white/10 dark:border-law-beige-100 dark:text-law-beige-100 dark:hover:bg-law-beige-100/10">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
