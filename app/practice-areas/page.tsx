import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, Phone } from "lucide-react"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Practice Areas | Gebru Mahitem Law Office",
  description: "Explore the various practice areas offered by Gebru Mahitem Law Office, a professional and experienced law firm based in Addis Ababa, Ethiopia.",
}

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-20"></div>
        <div className="absolute inset-0">
          <Image
            src={ethiopianImages.practiceAreasHero}
            alt="Ethiopian-themed background"
            fill
            className="object-cover opacity-30 dark:opacity-20"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Our Practice Areas</h1>
            <p className="body-lg">
              At Gebru Mahitem Law Office, we offer a wide range of legal services to individuals and businesses. Our practice areas include personal injury, criminal defense, family law, business litigation, and more. We are dedicated to providing personalized and effective legal solutions to meet our clients' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-law mb-2 inline-block">Our Practice Areas</span>
              <h2 className="heading-lg mb-4">Comprehensive Legal Services</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Our practice areas are designed to cover a wide range of legal needs. We strive to provide reliable, trustworthy, and effective legal services tailored to each client’s needs. Whether you are facing a personal or business legal challenge, we are here to advocate for your rights and protect your best interests.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Personalized legal solutions for every client</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Commitment to integrity and client satisfaction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                  <span className="body-md">Expertise in Ethiopian and international law</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
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

      {/* Attorney Profile Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Attorney Profile</span>
            <h2 className="heading-lg mb-4">Meet Gebru Mahitem</h2>
            <p className="body-md max-w-2xl mx-auto">
              Attorney and Consultant at Law | Self-employed | Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] relative">
              <Image
                src={ethiopianImages.attorney1}
                alt="Gebru Mahitem"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="heading-md mb-2">Professional Experience</h3>
              <ul className="body-md space-y-2 mb-4">
                <li><strong>Attorney and Consultant at Law, Self-employed</strong> (May 2023 - Current)</li>
                <li><strong>Attorney At Law, Self-employed</strong> (Jul 2023 - Current)</li>
                <li><strong>Senior Lawyer, FDRE Ministry of Justice</strong> (Jan 2014 - Jun 2023)</li>
              </ul>
              <h3 className="heading-md mb-2">Education</h3>
              <ul className="body-md space-y-2 mb-4">
                <li>Bachelor of Laws (LLB), Bahir Dar University</li>
                <li>Master of Laws (LLM), Vrije Universiteit Amsterdam (VU Amsterdam) & Bahir Dar University School of Law</li>
              </ul>
              <h3 className="heading-md mb-2">Contact Information</h3>
              <ul className="body-md space-y-2 mb-4">
                <li><strong>Address:</strong> Gulele 07 1378 St, Addis Ababa, Ethiopia</li>
                <li><strong>Contact Number:</strong> 0940349840</li>
                <li><strong>Mobile Phone:</strong> 0905048804</li>
                <li><strong>Website:</strong> <a href="https://www.tiktok.com/@gebru.mahitem" target="_blank" rel="noopener noreferrer">www.tiktok.com/@gebru.mahitem</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">About Our Office</span>
            <h2 className="heading-lg mb-4">Gebru Mahitem Law Office</h2>
            <p className="body-md max-w-2xl mx-auto">
              Located in Addis Ababa, we serve clients with a focus on integrity, expertise, and client satisfaction. Our office is committed to providing reliable and trustworthy legal services you can depend on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white dark:bg-law-brown-800 p-6 rounded-lg shadow-md">
              <h3 className="heading-md mb-2">Company Description</h3>
              <p className="body-md mb-4">
                Gebru Mahitem is a professional and experienced lawyer offering a wide range of legal services to individuals and businesses. He is a dedicated attorney committed to providing personalized and effective legal solutions to meet clients' needs. With a focus on integrity, expertise, and client satisfaction, he strives to deliver exceptional legal representation and guidance. Whether you are facing a personal injury, criminal defense, family law, or business litigation matter, he is here to advocate for your rights and protect your best interests. You can trust that he will provide reliable and trustworthy legal services that you can depend on.
              </p>
              <ul className="body-md space-y-2">
                <li><strong>Employees:</strong> 1-5</li>
                <li><strong>Peers at other companies:</strong> Bereket Ayele, Mesay Tedla</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-law-brown-800 p-6 rounded-lg shadow-md">
              <h3 className="heading-md mb-2">Quick Facts</h3>
              <ul className="body-md space-y-2">
                <li><strong>Total experience as Attorney and Consultant at Law:</strong> 2 years</li>
                <li><strong>Minimum period of employment in companies:</strong> 9 years 5 months</li>
                <li><strong>Average duration of employment:</strong> 9 years 5 months</li>
                <li><strong>Positions held:</strong> Attorney At Law, Senior Lawyer</li>
              </ul>
            </div>
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
            <h2 className="heading-lg mb-6 text-white">Ready to Work With Gebru Mahitem?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Contact us today to schedule a consultation and discuss how we can help you navigate your legal challenges and achieve your goals.
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

      {/* Footer Section */}
      <footer className="bg-law-brown-900 text-white py-4">
        <div className="container text-center">
          <p className="body-md mb-1">© 2025 Gebru Mahitem Law Office</p>
          <p className="body-md mb-1">Gulele 07 1378 St, Addis Ababa, Ethiopia</p>
          <p className="body-md mb-1">Contact: <a href="tel:0940349840" className="underline hover:text-law-beige-100">0940349840</a></p>
          <p className="body-md">Follow us: <a href="https://www.tiktok.com/@gebru.mahitem" target="_blank" rel="noopener noreferrer" className="underline hover:text-law-beige-100">tiktok.com/@gebru.mahitem</a></p>
        </div>
      </footer>
    </>
  )
}
