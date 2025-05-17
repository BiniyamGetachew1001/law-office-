import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"
import { ethiopianImages } from "@/data/ethiopian-images"

export const metadata = {
  title: "Gebru Mahitem | Warm Law Firm",
  description: "Meet Gebru Mahitem, Attorney and Consultant at Law based in Addis Ababa, Ethiopia.",
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
            <h1 className="heading-xl mb-6">Gebru Mahitem</h1>
            <p className="body-lg">
              Meet Gebru Mahitem, Attorney and Consultant at Law based in Addis Ababa, Ethiopia. Discover his professional experience, education, and dedication to providing exceptional legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Gebru Mahitem Profile Section */}
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
              <h3 className="heading-md mb-2">Company Description</h3>
              <p className="body-md mb-4">
                Gebru Mahitem is a professional and experienced lawyer offering a wide range of legal services to individuals and businesses. He is a dedicated attorney committed to providing personalized and effective legal solutions to meet clients' needs. With a focus on integrity, expertise, and client satisfaction, he strives to deliver exceptional legal representation and guidance. Whether you are facing a personal injury, criminal defense, family law, or business litigation matter, he is here to advocate for your rights and protect your best interests. You can trust that he will provide reliable and trustworthy legal services that you can depend on.
              </p>
              <ul className="body-md space-y-2">
                <li><strong>Employees:</strong> 1-5</li>
                <li><strong>Peers at other companies:</strong> Bereket Ayele, Mesay Tedla</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Frequently Asked Questions</span>
            <h2 className="heading-lg mb-4">About Gebru Mahitem</h2>
          </div>
          <ul className="body-md max-w-2xl mx-auto space-y-4">
            <li><strong>How long has Gebru Mahitem been working as a Attorney and Consultant at Law?</strong><br/>Gebru Mahitem's total experience in various companies as a Attorney and Consultant at Law: 2 years.</li>
            <li><strong>What is Gebru Mahitem's minimum period of employment in the companies?</strong><br/>Minimum period of employment in various companies: 9 years 5 months.</li>
            <li><strong>What is Gebru Mahitem's average duration of employment for different companies?</strong><br/>On average, Gebru Mahitem works for one company for 9 years 5 months.</li>
            <li><strong>What positions has Gebru Mahitem held before?</strong><br/>Previously, Gebru Mahitem worked as a Attorney At Law, and Senior Lawyer.</li>
            <li><strong>How do I contact Gebru Mahitem?</strong><br/>Email: <span className="italic">(hidden for privacy)</span>, Phone: 0940349840, Mobile: 0905048804</li>
            <li><strong>Who are Gebru Mahitem's peers at other companies?</strong><br/>Bereket Ayele and Mesay Tedla</li>
          </ul>
        </div>
      </section>
    </>
  )
}
