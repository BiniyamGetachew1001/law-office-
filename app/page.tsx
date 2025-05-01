import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Scale, FileText, Briefcase, Users, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import { ethiopianImages } from "@/data/ethiopian-images"

export default function Home() {
  return (
    <>
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
            <span className="badge-law mb-4 inline-block fade-in">Expert Legal Representation</span>
            <h1 className="heading-xl mb-6 fade-in fade-in-delay-1">Committed to Your Legal Success</h1>
            <p className="body-lg mb-8 fade-in fade-in-delay-2">
              Our experienced attorneys provide personalized legal solutions to help you navigate complex legal
              challenges and achieve favorable outcomes.
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
            <span className="badge-law mb-2 inline-block">Our Expertise</span>
            <h2 className="heading-lg mb-4">Practice Areas</h2>
            <p className="body-md max-w-2xl mx-auto">
              We offer comprehensive legal services across a wide range of practice areas to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Practice Area Card 1 */}
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image src={ethiopianImages.corporateLaw} alt="Corporate Law" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Corporate Law</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Comprehensive legal solutions for businesses of all sizes, from formation to mergers and acquisitions.
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
                <Image src={ethiopianImages.litigation} alt="Litigation" fill className="object-cover" />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Litigation</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Strategic representation in complex disputes, with a proven track record of successful outcomes.
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
                  alt="Real Estate Law"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-serif font-bold text-white">Real Estate Law</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="body-md mb-4">
                  Expert guidance through property transactions, development projects, and real estate disputes.
                </p>
                <Link href="/practice-areas/real-estate">
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
              <h2 className="heading-lg mb-4">A Tradition of Legal Excellence</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Founded in 1985, Prestige Law has established itself as a leading law firm committed to providing
                exceptional legal services. Our team of experienced attorneys brings together decades of expertise
                across various practice areas to deliver tailored solutions for our clients.
              </p>
              <p className="body-md mb-6">
                We pride ourselves on our client-centered approach, combining legal expertise with a deep understanding
                of our clients' needs and objectives. Whether representing individuals or corporations, we are dedicated
                to achieving the best possible outcomes while maintaining the highest ethical standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Team of highly experienced attorneys</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Personalized approach to each case</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Proven track record of successful outcomes</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="btn-law">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ethiopianImages.officeExterior}
                alt="Prestige Law Office"
                fill
                className="object-cover"
              />
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">John Smith</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Corporate Client</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The team at Prestige Law provided exceptional guidance during our company's merger. Their expertise
                  and attention to detail made a complex process manageable and successful."
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Sarah Johnson</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Real Estate Developer</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "I've worked with Prestige Law on multiple development projects. Their thorough understanding of real
                  estate law and proactive approach has been invaluable to our success."
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
                    <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">Michael Chen</h4>
                    <p className="text-sm text-law-brown-600 dark:text-law-beige-400">Technology Entrepreneur</p>
                  </div>
                </div>
                <p className="body-md italic">
                  "The intellectual property team at Prestige Law helped protect our innovations and navigate complex
                  licensing agreements. Their expertise has been crucial to our company's growth."
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
              Our team of experienced attorneys is ready to help you navigate your legal challenges and achieve your
              goals. Take the first step toward resolving your legal matters by scheduling a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Consultation
              </Button>
              <Button className="btn-law-outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">News & Insights</span>
            <h2 className="heading-lg mb-4">Latest Articles</h2>
            <p className="body-md max-w-2xl mx-auto">
              Stay informed with our latest legal insights, news, and updates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.blog1}
                  alt="Recent Legal Developments"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 mr-1 text-law-beige-500 dark:text-law-brown-500" />
                  <span className="text-sm text-law-brown-600 dark:text-law-beige-400">May 12, 2023</span>
                </div>
                <h3 className="heading-sm mb-2">Recent Developments in Corporate Law</h3>
                <p className="body-md mb-4">
                  An overview of key changes in corporate regulations and their implications for businesses.
                </p>
                <Link href="/blog/corporate-law-developments">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.blog2}
                  alt="Intellectual Property Protection"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 mr-1 text-law-beige-500 dark:text-law-brown-500" />
                  <span className="text-sm text-law-brown-600 dark:text-law-beige-400">April 28, 2023</span>
                </div>
                <h3 className="heading-sm mb-2">Protecting Your Intellectual Property</h3>
                <p className="body-md mb-4">
                  Essential strategies for safeguarding your company's innovations, trademarks, and creative works.
                </p>
                <Link href="/blog/intellectual-property-protection">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="law-card overflow-hidden hover-lift">
              <div className="relative h-48">
                <Image
                  src={ethiopianImages.blog3}
                  alt="Employment Law Updates"
                  fill
                  className="object-cover"
                />
                <div className="img-overlay"></div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 mr-1 text-law-beige-500 dark:text-law-brown-500" />
                  <span className="text-sm text-law-brown-600 dark:text-law-beige-400">April 15, 2023</span>
                </div>
                <h3 className="heading-sm mb-2">Key Employment Law Updates for 2023</h3>
                <p className="body-md mb-4">
                  Important changes in employment regulations that employers and HR professionals should be aware of.
                </p>
                <Link href="/blog/employment-law-updates">
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <Button className="btn-law">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
