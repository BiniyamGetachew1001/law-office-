import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Search } from "lucide-react"
import PracticeAreaCard from "@/components/practice-area-card"
import DynamicBackground from "@/components/dynamic-background"

export const metadata = {
  title: "Practice Areas | Prestige Law",
  description: "Explore our comprehensive legal services across various practice areas.",
}

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Practice Areas</h1>
            <p className="body-lg">
              Comprehensive legal expertise across a wide range of practice areas, delivered with excellence and
              personalized attention to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Legal Expertise</span>
            <h2 className="heading-lg mb-4">Comprehensive Legal Services</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our team of experienced attorneys provides exceptional representation across a diverse range of practice
              areas. Select a practice area below to learn more about our services and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PracticeAreaCard
              title="Corporate Law"
              description="Comprehensive legal solutions for businesses of all sizes, from formation to complex transactions."
              icon="Briefcase"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/corporate-law"
            />

            <PracticeAreaCard
              title="Litigation"
              description="Strategic representation in complex disputes, with a proven track record of successful outcomes."
              icon="Scale"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/litigation"
            />

            <PracticeAreaCard
              title="Real Estate Law"
              description="Expert guidance through property transactions, development projects, and real estate disputes."
              icon="Building"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/real-estate"
            />

            <PracticeAreaCard
              title="Intellectual Property"
              description="Protection and enforcement of patents, trademarks, copyrights, and trade secrets."
              icon="FileText"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/intellectual-property"
            />

            <PracticeAreaCard
              title="Employment Law"
              description="Representation for both employers and employees in workplace disputes and compliance matters."
              icon="Users"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/employment-law"
            />

            <PracticeAreaCard
              title="Tax Law"
              description="Strategic tax planning and resolution of tax controversies for individuals and businesses."
              icon="Calculator"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/tax-law"
            />

            <PracticeAreaCard
              title="Family Law"
              description="Compassionate guidance through divorce, child custody, and other family legal matters."
              icon="Heart"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/family-law"
            />

            <PracticeAreaCard
              title="Estate Planning"
              description="Comprehensive estate planning services, including wills, trusts, and succession planning."
              icon="FileSignature"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/estate-planning"
            />

            <PracticeAreaCard
              title="Mergers & Acquisitions"
              description="Strategic guidance through complex M&A transactions, from due diligence to closing."
              icon="GitMerge"
              image="/placeholder.svg?height=200&width=400"
              link="/practice-areas/mergers-acquisitions"
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
                src="/placeholder.svg?height=500&width=400"
                alt="Attorneys in meeting"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Why Choose Us</span>
              <h2 className="heading-lg mb-4">Legal Excellence Across Practice Areas</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                At Prestige Law, we combine deep expertise across practice areas with a client-centered approach that
                focuses on understanding your unique needs and objectives. Our attorneys bring decades of experience to
                every matter, delivering strategic solutions and exceptional results.
              </p>
              <p className="body-md mb-6">
                We pride ourselves on our ability to handle complex legal challenges across multiple practice areas,
                providing comprehensive representation that addresses all aspects of your legal needs.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Specialized Expertise</h3>
                    <p className="body-sm">
                      Our attorneys focus on specific practice areas, developing deep expertise that enables them to
                      handle complex matters effectively.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Collaborative Approach</h3>
                    <p className="body-sm">
                      Our practice groups collaborate seamlessly to address multifaceted legal challenges that span
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Industry Knowledge</h3>
                    <p className="body-sm">
                      We understand the industries in which our clients operate, allowing us to provide contextually
                      relevant legal advice.
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
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Proven Results</h3>
                    <p className="body-sm">
                      Our track record of successful outcomes across practice areas demonstrates our ability to achieve
                      favorable results for our clients.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/about">
                <Button className="btn-law">
                  Learn More About Our Firm <ArrowRight className="ml-2 h-4 w-4" />
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
              Our team can help you identify the right legal services for your specific situation. Contact us for a
              consultation to discuss your needs.
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
                      Our experienced attorneys will help you navigate your legal challenges and identify the right
                      practice area for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="btn-law flex-1">Schedule Now</Button>
                      <Button className="btn-law-outline flex-1">Call (212) 555-1234</Button>
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
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
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
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Robert Chen</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Corporate Client</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The corporate law team at Prestige Law guided our company through a complex merger with precision and
                  strategic insight. Their expertise was invaluable in navigating regulatory challenges and ensuring a
                  smooth transaction."
                </p>
              </CardContent>
            </Card>

            <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-beige-200 dark:bg-law-brown-800 overflow-hidden relative mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Amanda Wilson</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Real Estate Developer</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "Working with the real estate team at Prestige Law has been exceptional. Their thorough understanding
                  of development regulations and proactive approach helped us navigate complex zoning issues and
                  complete our project on schedule."
                </p>
              </CardContent>
            </Card>

            <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-law-beige-200 dark:bg-law-brown-800 overflow-hidden relative mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client Photo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">David Thompson</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Technology Entrepreneur</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The intellectual property team at Prestige Law has been instrumental in protecting our innovations.
                  Their strategic approach to patent applications and enforcement has given our company a significant
                  competitive advantage."
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
