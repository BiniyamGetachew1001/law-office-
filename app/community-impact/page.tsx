import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle, Heart, Users, GraduationCap, MapPin } from "lucide-react"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Community Impact | Prestige Law",
  description: "Learn about our commitment to community service, pro bono work, and legal education initiatives.",
}

// Mock community impact data
const impactStats = [
  { value: "2,500+", label: "Pro Bono Hours Annually" },
  { value: "12", label: "Community Partnerships" },
  { value: "20+", label: "Educational Events Per Year" },
  { value: "$250K+", label: "Annual Charitable Contributions" },
]

const communityPartners = [
  {
    name: "Ethiopian Legal Aid Society",
    description:
      "We partner with the Ethiopian Legal Aid Society to provide free legal services to underserved communities throughout Ethiopia.",
    image: ethiopianImages.proBono,
  },
  {
    name: "Addis Ababa Youth Center",
    description:
      "Our attorneys volunteer at the Addis Ababa Youth Center, providing mentorship and legal education to young people interested in pursuing legal careers.",
    image: ethiopianImages.legalEducation,
  },
  {
    name: "Ethiopian Women Lawyers Association",
    description:
      "We support the Ethiopian Women Lawyers Association in their mission to promote and protect women's rights through legal advocacy and education.",
    image: ethiopianImages.diversity,
  },
  {
    name: "Ethiopian Business Forum",
    description:
      "Through our partnership with the Ethiopian Business Forum, we provide legal guidance to small business owners and entrepreneurs in underserved communities.",
    image: ethiopianImages.communityEvent,
  },
]

const upcomingEvents = [
  {
    title: "Legal Rights Workshop",
    date: "March 15, 2023",
    location: "Addis Ababa Community Center",
    description: "A free workshop on understanding basic legal rights and how to access legal resources.",
  },
  {
    title: "Small Business Legal Clinic",
    date: "April 8, 2023",
    location: "Ethiopian Chamber of Commerce",
    description: "Free legal consultations for small business owners on common legal issues and compliance matters.",
  },
  {
    title: "Law Student Mentorship Day",
    date: "May 20, 2023",
    location: "Addis Ababa University Law School",
    description: "A day of mentorship and career guidance for law students from our experienced attorneys.",
  },
]

const testimonials = [
  {
    quote:
      "Prestige Law's commitment to our community has made a significant difference in the lives of many Ethiopians who otherwise would not have access to quality legal representation.",
    author: "Abebe Bekele",
    role: "Director, Ethiopian Legal Aid Society",
  },
  {
    quote:
      "The attorneys at Prestige Law have been invaluable partners in our efforts to educate young people about their legal rights and responsibilities. Their dedication to legal education is truly commendable.",
    author: "Tigist Haile",
    role: "Program Manager, Addis Ababa Youth Center",
  },
  {
    quote:
      "Through our partnership with Prestige Law, we've been able to provide critical legal support to women facing domestic violence and discrimination. Their pro bono work has changed lives.",
    author: "Meron Tadesse",
    role: "Executive Director, Ethiopian Women Lawyers Association",
  },
]

export default function CommunityImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-20"></div>
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.communityService}
            alt="Ethiopian community outreach"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Community Impact</h1>
            <p className="body-lg">
              At Prestige Law, we believe in giving back to the communities where we live and work. Our commitment to
              service extends beyond the courtroom through pro bono work, community partnerships, and educational
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-law-beige-500 dark:text-law-brown-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-law-brown-700 dark:text-law-beige-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Bono Program Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={ethiopianImages.proBono} alt="Ethiopian legal aid" fill className="object-cover" />
            </div>
            <div>
              <span className="badge-law mb-2 inline-block">Pro Bono Program</span>
              <h2 className="heading-lg mb-4">Committed to Equal Access to Justice</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Our pro bono program is a cornerstone of our firm's commitment to social responsibility. We believe that
                everyone deserves access to quality legal representation, regardless of their ability to pay. Our
                attorneys dedicate over 2,500 hours annually to providing free legal services to individuals and
                nonprofit organizations in need.
              </p>
              <p className="body-md mb-6">
                Through our pro bono work, we help address critical legal needs in areas such as housing, immigration,
                domestic violence, and civil rights. We also provide legal support to nonprofit organizations that serve
                vulnerable populations, helping them navigate regulatory requirements and legal challenges.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Individual Representation</h3>
                    <p className="body-sm">
                      Direct legal representation for low-income individuals in civil matters such as housing, family
                      law, and immigration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Nonprofit Legal Support</h3>
                    <p className="body-sm">
                      Legal assistance to nonprofit organizations serving vulnerable communities, including governance,
                      compliance, and transactional matters.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Legal Clinics</h3>
                    <p className="body-sm">
                      Regular legal clinics in underserved communities, providing brief advice and referrals on common
                      legal issues.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100">Impact Litigation</h3>
                    <p className="body-sm">
                      Strategic litigation addressing systemic issues affecting vulnerable populations and civil rights.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partnerships Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Community Partnerships</span>
            <h2 className="heading-lg mb-4">Working Together for Greater Impact</h2>
            <p className="body-md max-w-2xl mx-auto">
              We partner with local organizations to address community needs through volunteer service, financial
              support, and legal education initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communityPartners.map((partner, index) => (
              <Card key={index} className="law-card overflow-hidden hover-lift">
                <div className="relative h-48">
                  <Image src={partner.image} alt={partner.name} fill className="object-cover" />
                  <div className="img-overlay"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-serif font-bold text-white">{partner.name}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="body-md mb-4">{partner.description}</p>
                  <div className="flex items-center text-law-beige-500 dark:text-law-brown-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span className="font-medium">Active Partnership</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Education Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-law mb-2 inline-block">Legal Education</span>
              <h2 className="heading-lg mb-4">Empowering Through Knowledge</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                We believe that legal education is a powerful tool for empowerment. Through workshops, seminars, and
                mentorship programs, we work to improve legal literacy and provide guidance to aspiring attorneys from
                diverse backgrounds.
              </p>
              <p className="body-md mb-6">
                Our educational initiatives include regular workshops on topics such as tenant rights, small business
                law, and immigration, designed to help community members understand and navigate legal challenges. We
                also provide mentorship to law students and young attorneys, with a focus on increasing diversity in the
                legal profession.
              </p>
              <h3 className="heading-sm mb-4">Upcoming Community Events</h3>
              <div className="space-y-4 mb-8">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 rounded-lg bg-law-beige-100 dark:bg-law-brown-800/50">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500" />
                      <span className="font-medium text-law-brown-800 dark:text-law-beige-200">{event.date}</span>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-law-brown-800 dark:text-law-beige-200 mb-1">
                      {event.title}
                    </h4>
                    <div className="flex items-center mb-2 text-sm text-law-brown-700 dark:text-law-beige-300">
                      <MapPin className="h-4 w-4 mr-1 text-law-beige-500 dark:text-law-brown-500" />
                      {event.location}
                    </div>
                    <p className="text-sm text-law-brown-700 dark:text-law-beige-300">{event.description}</p>
                  </div>
                ))}
              </div>
              <Button className="btn-law">
                View All Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src={ethiopianImages.legalEducation} alt="Ethiopian legal workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Testimonials</span>
            <h2 className="heading-lg mb-4">What Our Community Partners Say</h2>
            <p className="body-md max-w-2xl mx-auto">
              Hear from the organizations and community leaders we work with about the impact of our partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="law-card">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-law-beige-500 dark:text-law-brown-500">"</div>
                  <p className="body-md italic mb-6">{testimonial.quote}</p>
                  <div className="divider w-16 my-4"></div>
                  <h4 className="font-medium text-law-brown-900 dark:text-law-beige-100">{testimonial.author}</h4>
                  <p className="text-sm text-law-brown-600 dark:text-law-beige-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.communityEvent}
            alt="Ethiopian community event"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Get Involved</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              There are many ways to support our community initiatives, whether you're an attorney interested in pro bono
              work, a community organization seeking partnership, or an individual looking to volunteer.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-law-beige-100 dark:bg-law-brown-800 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm mb-2">Pro Bono Opportunities</h3>
                  <p className="body-sm mb-4">
                    Attorneys can join our pro bono program to provide legal services to those in need.
                  </p>
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-law-beige-100 dark:bg-law-brown-800 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm mb-2">Partnership Inquiries</h3>
                  <p className="body-sm mb-4">
                    Community organizations can explore potential partnerships and collaborative initiatives.
                  </p>
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="law-card bg-white/90 dark:bg-law-brown-900/90">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-law-beige-100 dark:bg-law-brown-800 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <h3 className="heading-sm mb-2">Educational Programs</h3>
                  <p className="body-sm mb-4">
                    Attend our workshops and seminars or request a presentation for your community group.
                  </p>
                  <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
              Contact Our Community Impact Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
