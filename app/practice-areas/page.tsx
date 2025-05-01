import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Search } from "lucide-react"
import PracticeAreaCard from "@/components/practice-area-card"
import DynamicBackground from "@/components/dynamic-background"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Practice Areas | Fiker Getachew And Associates Law Office",
  description: "Explore our diversified areas of expertise providing quality legal services with creative solutions tailored to Ethiopia's legal system.",
}

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.practiceAreasHero}
            alt="Ethiopian legal practice"
            fill
            className="object-cover opacity-20 dark:opacity-10"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Diversified Areas of Expertise</h1>
            <p className="body-lg">
              FGA is the best law office in Ethiopia with diversified areas of expertise. We provide quality legal services with creative solutions
              tailored to your specific needs within Ethiopia's unique legal framework.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Legal Expertise</span>
            <h2 className="heading-lg mb-4">Comprehensive Legal Services</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our law office can serve the following and related areas for any clients. We provide quality legal services with creative solutions
              across a diverse range of practice areas tailored to Ethiopia's legal system and international law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PracticeAreaCard
              title="Corporate & Business"
              description="Investment, company registration & licensing. Mergers, acquisitions & sales of companies."
              icon="Briefcase"
              image={ethiopianImages.corporateLaw}
              link="/practice-areas/corporate-law"
            />

            <PracticeAreaCard
              title="Litigation & Representation"
              description="Strategic representation in civil and criminal cases, with a proven track record of successful outcomes in Ethiopian courts."
              icon="Scale"
              image={ethiopianImages.litigation}
              link="/practice-areas/litigation"
            />

            <PracticeAreaCard
              title="Property Rights"
              description="Expert guidance through property transactions, land lease regulations, and property rights disputes under Ethiopian law."
              icon="Building"
              image={ethiopianImages.realEstate}
              link="/practice-areas/property-rights"
            />

            <PracticeAreaCard
              title="Intellectual Property"
              description="Protection and enforcement of patents, trademarks, copyrights, and other intellectual property rights in Ethiopia."
              icon="FileText"
              image={ethiopianImages.intellectualProperty}
              link="/practice-areas/intellectual-property"
            />

            <PracticeAreaCard
              title="Employment Issues"
              description="Representation for both employers and employees in workplace disputes, compliance matters, and employment contracts."
              icon="Users"
              image={ethiopianImages.employmentLaw}
              link="/practice-areas/employment-issues"
            />

            <PracticeAreaCard
              title="Tax Issues"
              description="Strategic tax planning and resolution of tax controversies for individuals and businesses under Ethiopian tax regulations."
              icon="Calculator"
              image={ethiopianImages.taxLaw}
              link="/practice-areas/tax-issues"
            />

            <PracticeAreaCard
              title="Family Issues"
              description="Compassionate guidance through divorce, child custody, inheritance, and other family legal matters under Ethiopian family law."
              icon="Heart"
              image={ethiopianImages.familyLaw}
              link="/practice-areas/family-issues"
            />

            <PracticeAreaCard
              title="Legal Document Preparation"
              description="Comprehensive legal document preparation services, including contracts, agreements, and other legal documents."
              icon="FileSignature"
              image={ethiopianImages.estatePlanning}
              link="/practice-areas/legal-documents"
            />

            <PracticeAreaCard
              title="PPP & Procurement"
              description="Strategic guidance through public-private partnership (PPP) procurement processes and government contracts."
              icon="GitMerge"
              image={ethiopianImages.mergersAcquisitions}
              link="/practice-areas/ppp-procurement"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ethiopianImages.attorneys}
                alt="Attorneys in meeting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Why Choose Us</span>
              <h2 className="heading-lg mb-4">Quality Legal Services with Creative Solutions</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Fiker Getachew And Associates Law Office (FGA), we combine deep expertise in Ethiopian and international law across diversified practice areas with a client-centered approach that
                focuses on understanding your unique needs. Our attorneys bring extensive experience to
                every matter, delivering quality legal services with creative solutions.
              </p>
              <p className="body-md mb-6">
                We pride ourselves on our ability to handle complex legal challenges across multiple practice areas,
                providing comprehensive representation that addresses all aspects of your legal needs in Ethiopia and internationally.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Diversified Expertise</h3>
                    <p className="body-sm">
                      Our attorneys have diversified areas of expertise, enabling them to
                      handle complex matters effectively across various legal domains.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Creative Solutions</h3>
                    <p className="body-sm">
                      We provide quality legal services with creative solutions to address multifaceted legal challenges that span
                      multiple areas of law.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Local & International Expertise</h3>
                    <p className="body-sm">
                      Our expertise ranges from local Ethiopian law to international law, allowing us to provide contextually
                      relevant legal advice for both domestic and international matters.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Quality Service</h3>
                    <p className="body-sm">
                      Our track record of successful outcomes across diversified practice areas demonstrates our ability to provide
                      quality legal services with creative solutions for our clients.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/about">
                <Button className="btn-law">
                  Learn More About FGA <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Practice Area Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Find Your Solution</span>
            <h2 className="heading-lg mb-4">Not Sure Which Practice Area You Need?</h2>
            <p className="body-md max-w-2xl mx-auto">
              FGA can help you identify the right legal services for your specific situation. Contact us for a
              consultation to discuss your needs and receive quality legal services with creative solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="law-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 flex items-center justify-center">
                    <Search className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-md mb-2 text-center md:text-left">Schedule a Consultation</h3>
                    <p className="body-md mb-4 text-center md:text-left">
                      Fiker Getachew And Associates Law Office will help you navigate your legal challenges and identify the right
                      practice area for your needs with quality legal services and creative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="btn-law flex-1">WhatsApp Us</Button>
                      <Button className="btn-law-outline flex-1">Call +251 911 992 719</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding relative">
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.federalCourt}
            alt="Ethiopian courthouse"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Client Success</span>
            <h2 className="heading-lg mb-4 text-white">What Our Clients Say</h2>
            <p className="body-md max-w-2xl mx-auto text-law-beige-100">
              Read about the experiences of clients we've helped across our practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-beige-200 dark:bg-law-brown-800 overflow-hidden relative mr-4">
                    <Image
                      src={ethiopianImages.client1}
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Tadesse Bekele</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Corporate Client</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The corporate law team at Fiker Getachew And Associates guided our company through a complex merger with precision and
                  creative solutions. Their expertise in Ethiopian commercial code was invaluable in navigating regulatory challenges and ensuring a
                  smooth transaction in Addis Ababa."
                </p>
              </CardContent>
            </Card>

            <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-beige-200 dark:bg-law-brown-800 overflow-hidden relative mr-4">
                    <Image
                      src={ethiopianImages.client2}
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Hiwot Mengistu</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Real Estate Developer</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "Working with the property rights team at Fiker Getachew And Associates has been exceptional. Their thorough understanding
                  of Ethiopian land lease regulations and creative solutions helped us navigate complex property issues in Addis Ababa and
                  complete our development project on schedule."
                </p>
              </CardContent>
            </Card>

            <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-beige-200 dark:bg-law-brown-800 overflow-hidden relative mr-4">
                    <Image
                      src={ethiopianImages.client3}
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Solomon Girma</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Technology Entrepreneur</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The intellectual property team at Fiker Getachew And Associates has been instrumental in protecting our innovations in Ethiopia's emerging tech sector.
                  Their creative solutions to patent and trademark applications under Ethiopian IP law has given our company a significant
                  competitive advantage in the Ethiopian market."
                </p>
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
            <h2 className="heading-lg mb-6">Ready to Discuss Your Legal Needs?</h2>
            <p className="body-lg mb-8">
              Fiker Getachew And Associates Law Office (FGA) is ready to help you with our diversified areas of expertise.
              We provide quality legal services with creative solutions for all your legal needs in Ethiopia.
              Take the first step by contacting us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law">Call +251 911 992 719</Button>
              <Button className="btn-law-outline">WhatsApp Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
