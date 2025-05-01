import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AttorneyCard from "@/components/attorney-card"
import DynamicBackground from "@/components/dynamic-background"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Our Attorneys | Prestige Law",
  description: "Meet our experienced team of attorneys dedicated to providing exceptional legal representation.",
}

export default function AttorneysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.attorneys}
            alt="Ethiopian attorneys team"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Attorneys</h1>
            <p className="body-lg">
              Meet our team of experienced attorneys dedicated to providing exceptional legal representation and
              personalized service across a wide range of practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-law-beige-50 dark:bg-law-brown-900/50 border-b border-law-beige-200 dark:border-law-brown-700">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full md:w-1/3">
              <Label htmlFor="search" className="mb-2 block text-law-brown-800 dark:text-law-beige-200">
                Search Attorneys
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-law-brown-600 dark:text-law-beige-400" />
                <Input
                  id="search"
                  placeholder="Search by name or expertise..."
                  className="pl-10 bg-white dark:bg-law-brown-800 border-law-beige-200 dark:border-law-brown-700"
                />
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <Label htmlFor="practice-area" className="mb-2 block text-law-brown-800 dark:text-law-beige-200">
                Practice Area
              </Label>
              <Select>
                <SelectTrigger
                  id="practice-area"
                  className="bg-white dark:bg-law-brown-800 border-law-beige-200 dark:border-law-brown-700"
                >
                  <SelectValue placeholder="All Practice Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Practice Areas</SelectItem>
                  <SelectItem value="corporate">Corporate Law</SelectItem>
                  <SelectItem value="litigation">Litigation</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="intellectual-property">Intellectual Property</SelectItem>
                  <SelectItem value="employment">Employment Law</SelectItem>
                  <SelectItem value="tax">Tax Law</SelectItem>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="estate">Estate Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-1/4">
              <Label htmlFor="position" className="mb-2 block text-law-brown-800 dark:text-law-beige-200">
                Position
              </Label>
              <Select>
                <SelectTrigger
                  id="position"
                  className="bg-white dark:bg-law-brown-800 border-law-beige-200 dark:border-law-brown-700"
                >
                  <SelectValue placeholder="All Positions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  <SelectItem value="partner">Partners</SelectItem>
                  <SelectItem value="associate">Associates</SelectItem>
                  <SelectItem value="of-counsel">Of Counsel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="flex items-center gap-2 bg-law-beige-500 hover:bg-law-beige-600 text-law-brown-900 dark:bg-law-brown-700 dark:hover:bg-law-brown-600 dark:text-law-beige-100">
              <Filter className="h-4 w-4" />
              Apply Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Attorneys Grid Section */}
      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-law-beige-200 dark:bg-law-brown-800">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-law-beige-500 dark:data-[state=active]:bg-law-brown-700"
                >
                  All Attorneys
                </TabsTrigger>
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

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyCard
                  name="James Harrington"
                  title="Founding Partner"
                  image={ethiopianImages.attorney1}
                  specialties={["Corporate Law", "Mergers & Acquisitions"]}
                  education={["J.D., Harvard Law School", "B.A., Yale University"]}
                  bio="James has over 35 years of experience in corporate law and has led some of the firm's most significant M&A transactions. He is recognized as a leading authority in corporate governance and securities regulation."
                  email="j.harrington@prestigelaw.com"
                  phone="(212) 555-1001"
                  linkedin="https://www.linkedin.com/in/jamesharrington"
                />

                <AttorneyCard
                  name="Elizabeth Chen"
                  title="Founding Partner"
                  image={ethiopianImages.attorney2}
                  specialties={["Real Estate Law", "Commercial Transactions"]}
                  education={["J.D., Columbia Law School", "B.S., University of Pennsylvania"]}
                  bio="Elizabeth specializes in complex real estate transactions and development projects. Her expertise in navigating regulatory challenges has made her a trusted advisor to major developers and investors."
                  email="e.chen@prestigelaw.com"
                  phone="(212) 555-1002"
                  linkedin="https://www.linkedin.com/in/elizabethchen"
                />

                <AttorneyCard
                  name="Michael Rodriguez"
                  title="Managing Partner"
                  image={ethiopianImages.attorney3}
                  specialties={["Litigation", "Dispute Resolution"]}
                  education={["J.D., Stanford Law School", "B.A., University of California, Berkeley"]}
                  bio="Michael leads our litigation practice and has successfully represented clients in high-stakes disputes across various industries. His strategic approach to litigation has resulted in numerous favorable outcomes."
                  email="m.rodriguez@prestigelaw.com"
                  phone="(212) 555-1003"
                  linkedin="https://www.linkedin.com/in/michaelrodriguez"
                />

                <AttorneyCard
                  name="Sarah Johnson"
                  title="Senior Partner"
                  image={ethiopianImages.attorney4}
                  specialties={["Intellectual Property", "Technology Law"]}
                  education={["J.D., New York University", "M.S., MIT", "B.S., Cornell University"]}
                  bio="Sarah leads our intellectual property practice, combining her legal expertise with a background in computer science. She has helped numerous technology companies protect and leverage their IP assets."
                  email="s.johnson@prestigelaw.com"
                  phone="(212) 555-1004"
                  linkedin="https://www.linkedin.com/in/sarahjohnson"
                />

                <AttorneyCard
                  name="David Thompson"
                  title="Senior Partner"
                  image={ethiopianImages.attorney5}
                  specialties={["Tax Law", "Estate Planning"]}
                  education={["J.D., Georgetown University", "LL.M. in Taxation, NYU", "B.A., Dartmouth College"]}
                  bio="David specializes in tax planning for high-net-worth individuals and corporations. His strategic approach to tax matters has helped clients navigate complex regulations while optimizing their tax positions."
                  email="d.thompson@prestigelaw.com"
                  phone="(212) 555-1005"
                  linkedin="https://www.linkedin.com/in/davidthompson"
                />

                <AttorneyCard
                  name="Jennifer Lee"
                  title="Partner"
                  image={ethiopianImages.attorney6}
                  specialties={["Employment Law", "Labor Relations"]}
                  education={["J.D., University of Chicago", "B.A., Northwestern University"]}
                  bio="Jennifer represents employers in all aspects of employment law, from compliance matters to litigation. She is known for her practical approach to workplace issues and proactive risk management strategies."
                  email="j.lee@prestigelaw.com"
                  phone="(212) 555-1006"
                  linkedin="https://www.linkedin.com/in/jenniferlee"
                />

                <AttorneyCard
                  name="Robert Wilson"
                  title="Senior Associate"
                  image={ethiopianImages.attorney7}
                  specialties={["Corporate Law", "Securities"]}
                  education={["J.D., Columbia Law School", "B.A., Princeton University"]}
                  bio="Robert focuses on securities offerings and corporate governance matters. He has advised clients on numerous public and private offerings and SEC compliance issues."
                  email="r.wilson@prestigelaw.com"
                  phone="(212) 555-1007"
                  linkedin="https://www.linkedin.com/in/robertwilson"
                />

                <AttorneyCard
                  name="Sophia Martinez"
                  title="Senior Associate"
                  image={ethiopianImages.attorney8}
                  specialties={["Litigation", "White Collar Defense"]}
                  education={["J.D., Yale Law School", "B.A., Brown University"]}
                  bio="Sophia specializes in complex commercial litigation and white-collar defense. She has represented clients in federal and state courts across a wide range of industries."
                  email="s.martinez@prestigelaw.com"
                  phone="(212) 555-1008"
                  linkedin="https://www.linkedin.com/in/sophiamartinez"
                />

                <AttorneyCard
                  name="Daniel Kim"
                  title="Associate"
                  image={ethiopianImages.attorney1}
                  specialties={["Intellectual Property", "Technology Transactions"]}
                  education={["J.D., Berkeley Law", "B.S., Stanford University"]}
                  bio="Daniel focuses on technology transactions and IP licensing. His background in computer science provides valuable insights for clients in the technology sector."
                  email="d.kim@prestigelaw.com"
                  phone="(212) 555-1009"
                  linkedin="https://www.linkedin.com/in/danielkim"
                />

                <AttorneyCard
                  name="Emily Patel"
                  title="Associate"
                  image={ethiopianImages.attorney2}
                  specialties={["Real Estate", "Land Use"]}
                  education={["J.D., Georgetown University", "B.A., Emory University"]}
                  bio="Emily specializes in real estate transactions and land use matters. She has assisted clients with acquisitions, development projects, and zoning issues across the region."
                  email="e.patel@prestigelaw.com"
                  phone="(212) 555-1010"
                  linkedin="https://www.linkedin.com/in/emilypatel"
                />

                <AttorneyCard
                  name="Thomas Wright"
                  title="Associate"
                  image={ethiopianImages.attorney3}
                  specialties={["Tax Law", "Corporate Restructuring"]}
                  education={["J.D., University of Virginia", "B.S., University of North Carolina"]}
                  bio="Thomas advises clients on tax matters related to corporate transactions and restructurings. His analytical approach helps clients navigate complex tax implications."
                  email="t.wright@prestigelaw.com"
                  phone="(212) 555-1011"
                  linkedin="https://www.linkedin.com/in/thomaswright"
                />

                <AttorneyCard
                  name="Olivia Garcia"
                  title="Associate"
                  image={ethiopianImages.attorney4}
                  specialties={["Employment Law", "Compliance"]}
                  education={["J.D., UCLA School of Law", "B.A., UC San Diego"]}
                  bio="Olivia focuses on employment compliance and workplace investigations. She helps employers develop policies and practices that mitigate legal risks while fostering positive workplace cultures."
                  email="o.garcia@prestigelaw.com"
                  phone="(212) 555-1012"
                  linkedin="https://www.linkedin.com/in/oliviagarcia"
                />

                <AttorneyCard
                  name="Richard Bennett"
                  title="Of Counsel"
                  image={ethiopianImages.attorney5}
                  specialties={["Corporate Law", "International Business"]}
                  education={["J.D., Harvard Law School", "M.B.A., Harvard Business School", "B.A., Dartmouth College"]}
                  bio="Richard brings decades of experience in international business transactions. Before joining Prestige Law, he served as general counsel for a Fortune 100 company, overseeing legal matters across global operations."
                  email="r.bennett@prestigelaw.com"
                  phone="(212) 555-1013"
                  linkedin="https://www.linkedin.com/in/richardbennett"
                />

                <AttorneyCard
                  name="Margaret Wu"
                  title="Of Counsel"
                  image={ethiopianImages.attorney6}
                  specialties={["Intellectual Property", "Patent Law"]}
                  education={["J.D., Stanford Law School", "Ph.D., Electrical Engineering, MIT", "B.S., Caltech"]}
                  bio="Margaret specializes in patent law with a focus on electronics and software. Her technical background and legal expertise make her an invaluable resource for technology clients seeking to protect their innovations."
                  email="m.wu@prestigelaw.com"
                  phone="(212) 555-1014"
                  linkedin="https://www.linkedin.com/in/margaretwu"
                />

                <AttorneyCard
                  name="Jonathan Brooks"
                  title="Of Counsel"
                  image={ethiopianImages.attorney7}
                  specialties={["Environmental Law", "Regulatory Compliance"]}
                  education={[
                    "J.D., Yale Law School",
                    "M.S., Environmental Science, Duke University",
                    "B.A., Williams College",
                  ]}
                  bio="Jonathan advises clients on environmental compliance and regulatory matters. His experience includes serving as a senior attorney at the EPA, giving him unique insights into regulatory processes and enforcement."
                  email="j.brooks@prestigelaw.com"
                  phone="(212) 555-1015"
                  linkedin="https://www.linkedin.com/in/jonathanbrooks"
                />
              </div>
            </TabsContent>

            <TabsContent value="partners" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyCard
                  name="James Harrington"
                  title="Founding Partner"
                  image={ethiopianImages.attorney1}
                  specialties={["Corporate Law", "Mergers & Acquisitions"]}
                  education={["J.D., Harvard Law School", "B.A., Yale University"]}
                  bio="James has over 35 years of experience in corporate law and has led some of the firm's most significant M&A transactions. He is recognized as a leading authority in corporate governance and securities regulation."
                  email="j.harrington@prestigelaw.com"
                  phone="(212) 555-1001"
                  linkedin="https://www.linkedin.com/in/jamesharrington"
                />

                <AttorneyCard
                  name="Elizabeth Chen"
                  title="Founding Partner"
                  image={ethiopianImages.attorney2}
                  specialties={["Real Estate Law", "Commercial Transactions"]}
                  education={["J.D., Columbia Law School", "B.S., University of Pennsylvania"]}
                  bio="Elizabeth specializes in complex real estate transactions and development projects. Her expertise in navigating regulatory challenges has made her a trusted advisor to major developers and investors."
                  email="e.chen@prestigelaw.com"
                  phone="(212) 555-1002"
                  linkedin="https://www.linkedin.com/in/elizabethchen"
                />

                <AttorneyCard
                  name="Michael Rodriguez"
                  title="Managing Partner"
                  image={ethiopianImages.attorney3}
                  specialties={["Litigation", "Dispute Resolution"]}
                  education={["J.D., Stanford Law School", "B.A., University of California, Berkeley"]}
                  bio="Michael leads our litigation practice and has successfully represented clients in high-stakes disputes across various industries. His strategic approach to litigation has resulted in numerous favorable outcomes."
                  email="m.rodriguez@prestigelaw.com"
                  phone="(212) 555-1003"
                  linkedin="https://www.linkedin.com/in/michaelrodriguez"
                />

                <AttorneyCard
                  name="Sarah Johnson"
                  title="Senior Partner"
                  image={ethiopianImages.attorney4}
                  specialties={["Intellectual Property", "Technology Law"]}
                  education={["J.D., New York University", "M.S., MIT", "B.S., Cornell University"]}
                  bio="Sarah leads our intellectual property practice, combining her legal expertise with a background in computer science. She has helped numerous technology companies protect and leverage their IP assets."
                  email="s.johnson@prestigelaw.com"
                  phone="(212) 555-1004"
                  linkedin="https://www.linkedin.com/in/sarahjohnson"
                />

                <AttorneyCard
                  name="David Thompson"
                  title="Senior Partner"
                  image={ethiopianImages.attorney5}
                  specialties={["Tax Law", "Estate Planning"]}
                  education={["J.D., Georgetown University", "LL.M. in Taxation, NYU", "B.A., Dartmouth College"]}
                  bio="David specializes in tax planning for high-net-worth individuals and corporations. His strategic approach to tax matters has helped clients navigate complex regulations while optimizing their tax positions."
                  email="d.thompson@prestigelaw.com"
                  phone="(212) 555-1005"
                  linkedin="https://www.linkedin.com/in/davidthompson"
                />

                <AttorneyCard
                  name="Jennifer Lee"
                  title="Partner"
                  image={ethiopianImages.attorney6}
                  specialties={["Employment Law", "Labor Relations"]}
                  education={["J.D., University of Chicago", "B.A., Northwestern University"]}
                  bio="Jennifer represents employers in all aspects of employment law, from compliance matters to litigation. She is known for her practical approach to workplace issues and proactive risk management strategies."
                  email="j.lee@prestigelaw.com"
                  phone="(212) 555-1006"
                  linkedin="https://www.linkedin.com/in/jenniferlee"
                />
              </div>
            </TabsContent>

            <TabsContent value="associates" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyCard
                  name="Robert Wilson"
                  title="Senior Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Corporate Law", "Securities"]}
                  education={["J.D., Columbia Law School", "B.A., Princeton University"]}
                  bio="Robert focuses on securities offerings and corporate governance matters. He has advised clients on numerous public and private offerings and SEC compliance issues."
                  email="r.wilson@prestigelaw.com"
                  phone="(212) 555-1007"
                  linkedin="https://www.linkedin.com/in/robertwilson"
                />

                <AttorneyCard
                  name="Sophia Martinez"
                  title="Senior Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Litigation", "White Collar Defense"]}
                  education={["J.D., Yale Law School", "B.A., Brown University"]}
                  bio="Sophia specializes in complex commercial litigation and white-collar defense. She has represented clients in federal and state courts across a wide range of industries."
                  email="s.martinez@prestigelaw.com"
                  phone="(212) 555-1008"
                  linkedin="https://www.linkedin.com/in/sophiamartinez"
                />

                <AttorneyCard
                  name="Daniel Kim"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Intellectual Property", "Technology Transactions"]}
                  education={["J.D., Berkeley Law", "B.S., Stanford University"]}
                  bio="Daniel focuses on technology transactions and IP licensing. His background in computer science provides valuable insights for clients in the technology sector."
                  email="d.kim@prestigelaw.com"
                  phone="(212) 555-1009"
                  linkedin="https://www.linkedin.com/in/danielkim"
                />

                <AttorneyCard
                  name="Emily Patel"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Real Estate", "Land Use"]}
                  education={["J.D., Georgetown University", "B.A., Emory University"]}
                  bio="Emily specializes in real estate transactions and land use matters. She has assisted clients with acquisitions, development projects, and zoning issues across the region."
                  email="e.patel@prestigelaw.com"
                  phone="(212) 555-1010"
                  linkedin="https://www.linkedin.com/in/emilypatel"
                />

                <AttorneyCard
                  name="Thomas Wright"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Tax Law", "Corporate Restructuring"]}
                  education={["J.D., University of Virginia", "B.S., University of North Carolina"]}
                  bio="Thomas advises clients on tax matters related to corporate transactions and restructurings. His analytical approach helps clients navigate complex tax implications."
                  email="t.wright@prestigelaw.com"
                  phone="(212) 555-1011"
                  linkedin="https://www.linkedin.com/in/thomaswright"
                />

                <AttorneyCard
                  name="Olivia Garcia"
                  title="Associate"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Employment Law", "Compliance"]}
                  education={["J.D., UCLA School of Law", "B.A., UC San Diego"]}
                  bio="Olivia focuses on employment compliance and workplace investigations. She helps employers develop policies and practices that mitigate legal risks while fostering positive workplace cultures."
                  email="o.garcia@prestigelaw.com"
                  phone="(212) 555-1012"
                  linkedin="https://www.linkedin.com/in/oliviagarcia"
                />
              </div>
            </TabsContent>

            <TabsContent value="of-counsel" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AttorneyCard
                  name="Richard Bennett"
                  title="Of Counsel"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Corporate Law", "International Business"]}
                  education={["J.D., Harvard Law School", "M.B.A., Harvard Business School", "B.A., Dartmouth College"]}
                  bio="Richard brings decades of experience in international business transactions. Before joining Prestige Law, he served as general counsel for a Fortune 100 company, overseeing legal matters across global operations."
                  email="r.bennett@prestigelaw.com"
                  phone="(212) 555-1013"
                  linkedin="https://www.linkedin.com/in/richardbennett"
                />

                <AttorneyCard
                  name="Margaret Wu"
                  title="Of Counsel"
                  image="/placeholder.svg?height=300&width=300"
                  specialties={["Intellectual Property", "Patent Law"]}
                  education={["J.D., Stanford Law School", "Ph.D., Electrical Engineering, MIT", "B.S., Caltech"]}
                  bio="Margaret specializes in patent law with a focus on electronics and software. Her technical background and legal expertise make her an invaluable resource for technology clients seeking to protect their innovations."
                  email="m.wu@prestigelaw.com"
                  phone="(212) 555-1014"
                  linkedin="https://www.linkedin.com/in/margaretwu"
                />

                <AttorneyCard
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
                  linkedin="https://www.linkedin.com/in/jonathanbrooks"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Firm Leadership</span>
            <h2 className="heading-lg mb-4">Meet Our Leadership Team</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our firm is led by experienced attorneys who are committed to excellence in legal practice and client
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src={ethiopianImages.attorney1}
                  alt="James Harrington"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="heading-md mb-1">James Harrington</h3>
              <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-4">Founding Partner</p>
              <p className="body-md mb-4">
                James co-founded Prestige Law in 1985 and has been instrumental in shaping the firm's growth and success
                over the past three decades.
              </p>
              <Link href="/attorneys/james-harrington">
                <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500">
                  View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src={ethiopianImages.attorney2} alt="Elizabeth Chen" fill className="object-cover" />
              </div>
              <h3 className="heading-md mb-1">Elizabeth Chen</h3>
              <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-4">Founding Partner</p>
              <p className="body-md mb-4">
                Elizabeth co-founded Prestige Law with James Harrington and has led the firm's real estate practice to
                national recognition. Her strategic vision continues to guide the firm's growth.
              </p>
              <Link href="/attorneys/elizabeth-chen">
                <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500">
                  View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src={ethiopianImages.attorney3}
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="heading-md mb-1">Michael Rodriguez</h3>
              <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-4">Managing Partner</p>
              <p className="body-md mb-4">
                Michael oversees the firm's operations and strategic direction. His leadership has been instrumental in
                expanding the firm's practice areas and client base.
              </p>
              <Link href="/attorneys/michael-rodriguez">
                <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500">
                  View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ethiopianImages.meetingRoom}
                alt="Attorneys in meeting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Careers</span>
              <h2 className="heading-lg mb-4">Join Our Team</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Prestige Law, we are always looking for talented attorneys and legal professionals who share our
                commitment to excellence and client service. We offer a collaborative work environment, challenging
                work, and opportunities for professional growth and development.
              </p>
              <p className="body-md mb-6">
                Our attorneys benefit from mentorship opportunities, access to cutting-edge legal technology, and a
                supportive culture that values work-life balance. We are committed to diversity and inclusion and seek
                to build a team that reflects the communities we serve.
              </p>
              <div className="space-y-4 mb-8">
                <div className="law-card p-4">
                  <h3 className="font-medium text-lg mb-1">Associate Attorney - Corporate Law</h3>
                  <p className="text-sm text-law-brown-600 dark:text-law-beige-400 mb-2">New York, NY</p>
                  <p className="text-sm mb-3">
                    Seeking an associate with 3-5 years of experience in corporate transactions and securities law.
                  </p>
                  <Link href="/careers/corporate-associate">
                    <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="law-card p-4">
                  <h3 className="font-medium text-lg mb-1">Associate Attorney - Litigation</h3>
                  <p className="text-sm text-law-brown-600 dark:text-law-beige-400 mb-2">New York, NY</p>
                  <p className="text-sm mb-3">
                    Seeking a litigation associate with 2-4 years of experience in commercial disputes.
                  </p>
                  <Link href="/careers/litigation-associate">
                    <Button variant="link" className="text-law-beige-500 dark:text-law-brown-500 p-0">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Link href="/careers">
                <Button className="btn-law">
                  View All Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.justiceMinistry}
            alt="Ethiopian justice ministry"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Ready to Work With Our Team?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Our experienced attorneys are ready to help you navigate your legal challenges and achieve your goals.
              Contact us today to schedule a consultation.
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
