import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Scale, FileText, Briefcase, Users, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import { ethiopianImages } from "@/data/ethiopian-images"
import EthiopiaMap from "@/components/ethiopia-map"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-20"></div>
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.heroBackground}
            alt="Ethiopian-themed background"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="badge-law mb-4 inline-block fade-in">Professional Ethiopian Legal Services</span>
            <h1 className="heading-xl mb-6 fade-in fade-in-delay-1">Gebru Mahitem Law Office</h1>
            <p className="body-lg mb-8 fade-in fade-in-delay-2">
              {`Established in 2015, we are a full-service Ethiopian law firm specializing in personal injury, criminal defense, and family law. Led by Attorney Gebru Mahitem with 15+ years of courtroom experience, we provide compassionate yet aggressive representation.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3">
              <Button className="btn-law">Schedule a Consultation</Button>
              <Button className="btn-law-outline">Explore Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Diversified Legal Expertise</span>
            <h2 className="heading-lg mb-4">Practice Areas</h2>
            <p className="body-md max-w-2xl mx-auto">
              We offer comprehensive legal services across a wide range of practice areas tailored to Ethiopia's legal framework and business environment, with expertise in both local and international law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Practice Area Card 1 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image src={ethiopianImages.corporateLaw} alt="Corporate & Business Law" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Corporate & Business</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Comprehensive legal solutions for Ethiopian businesses, including company registration, licensing, mergers, acquisitions, and sales of companies.
                </p>
                <Link href="/practice-areas/corporate-law">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Area Card 2 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image src={ethiopianImages.litigation} alt="Litigation & Representation" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Litigation & Representation</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Strategic representation in complex disputes before Ethiopian courts, with expertise in both civil and criminal cases at federal and regional levels.
                </p>
                <Link href="/practice-areas/litigation">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Area Card 3 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.realEstate}
                  alt="Property Rights"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Property Rights</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Expert guidance through Ethiopian property transactions, land lease regulations, legal document preparation, and property rights disputes under Ethiopian law.
                </p>
                <Link href="/practice-areas/property-rights">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Area Card 4 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.intellectualProperty}
                  alt="Intellectual Property"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Intellectual Property</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Protection and enforcement of patents, trademarks, copyrights, and trade secrets.
                </p>
                <Link href="/practice-areas/intellectual-property">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Area Card 5 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image src={ethiopianImages.litigation} alt="Employment Law" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Employment Law</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Representation for both employers and employees in workplace disputes and compliance matters.
                </p>
                <Link href="/practice-areas/employment-law">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Practice Area Card 6 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image src={ethiopianImages.taxLaw} alt="Tax Law" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Tax Law</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Strategic tax planning and resolution of tax controversies for individuals and businesses.
                </p>
                <Link href="/practice-areas/tax-law">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/practice-areas">
              <Button className="btn-law">
                View All Practice Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-law-beige-100/50 dark:bg-law-brown-800/30"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-law mb-2 inline-block">About Us</span>
              <h2 className="heading-lg mb-4">Your Trusted Legal Partner in Addis Ababa</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Established in 2022, Gebru Mahitem Law Office is a dedicated legal practice located in the heart of Addis Ababa, Ethiopia. Led by Attorney and Consultant at Law, Gebru Mahitem, who brings over 11 years of legal experience, the firm offers a wide range of legal services tailored to meet the needs of individuals and businesses alike.
              </p>
              <p className="body-md mb-6">
                With a commitment to integrity, expertise, and client satisfaction, we strive to provide personalized and effective legal solutions.
              </p>
              <p className="body-md mb-6">
                Our law office advises Clients from different parts of the World and we strive to build strong reputation in project finance, energy and corporate legal matters.
                At Abate Yimer Law Office, we strive to provide an international standard local solution to meet our Client's needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">European trained corporate lawyers with expertise in Ethiopian and international law</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Specialized in project finance, energy and corporate legal matters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">International standard local solutions to meet our Client's needs</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="btn-law">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-6">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={ethiopianImages.officeExterior}
                  alt="Warm Law Firm Office in Addis Ababa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white dark:bg-law-brown-800 p-4 rounded-lg shadow-md">
                <EthiopiaMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Why Choose Us</span>
            <h2 className="heading-lg mb-4">Our Advantages</h2>
            <p className="body-md max-w-2xl mx-auto">
              We combine legal expertise with a client-centered approach to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Experienced Attorneys</h3>
                <p className="body-md">
                  Our team includes attorneys with decades of experience across various practice areas.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Tailored Solutions</h3>
                <p className="body-md">
                  We develop customized legal strategies based on each client's unique situation and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Proven Results</h3>
                <p className="body-md">
                  Our track record demonstrates our ability to achieve favorable outcomes for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="law-card hover-lift">
              <CardContent className="pt-6">
                <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                </div>
                <h3 className="heading-sm mb-2">Client-Centered Approach</h3>
                <p className="body-md">
                  We prioritize understanding your needs to deliver personalized legal services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Testimonials</span>
            <h2 className="heading-lg mb-4 text-white">What Our Clients Say</h2>
            <p className="body-md max-w-2xl mx-auto text-law-beige-100">
              Read about the experiences of some of our satisfied clients.
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Abebe Kebede</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Business Owner</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "Gebru Mahitem provided exceptional guidance during our company's expansion in Addis Ababa. His creative solutions
                  to complex legal challenges made the process manageable and successful."
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Tigist Haile</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Real Estate Developer</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "I've worked with Gebru Mahitem on multiple development projects in Addis Ababa. His thorough understanding of Ethiopian property rights
                  and creative approach to navigating local regulations has been invaluable to our success."
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Solomon Tesfaye</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Ethiopian Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "Gebru Mahitem helped protect our innovations within Ethiopia's emerging tech sector and navigate complex
                  international licensing agreements. His expertise in Ethiopian IP law and creative solutions has been crucial to our company's growth."
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
            <h2 className="heading-lg mb-6">Schedule Your Consultation Today</h2>
            <p className="body-lg mb-8">
              Abate Yimer Law Office is ready to help you with our highly experienced group of legal professionals.
              We strive to provide an international standard local solution to meet our Client's needs in project finance, energy and corporate legal matters.
              Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law">
                <Phone className="mr-2 h-4 w-4" />
                Call +251 911 992 719
              </Button>
              <Button className="btn-law-outline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                </svg>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <p className="body-md mb-4">
          {`Comprehensive representation for accident victims, workplace injuries, and medical malpractice cases.`}
        </p>
        <p className="body-md mb-4">
          {`Aggressive defense for all criminal charges from misdemeanors to serious felonies.`}
        </p>
        <p className="body-md mb-4">
          {`Criminal Defense`}
        </p>
        <p className="body-md mb-4">
          {`Strategic representation in commercial disputes and contract enforcement.`}
        </p>
        <p className="body-md mb-4">
          {`Family Law`}
        </p>
        <p className="body-md mb-4">
          {`Compassionate guidance through divorce, child custody, and inheritance matters.`}
        </p>
        <p className="body-md mb-4">
          {`Business Litigation`}
        </p>
        <p className="body-md mb-4">
          {`Strategic representation in commercial disputes and contract enforcement.`}
        </p>
      </div>
    </div>
  )
}
