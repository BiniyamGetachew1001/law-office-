import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Gebru Mahitem Law Office",
  description: "Learn about how Gebru Mahitem Law Office collects, uses, and protects your personal information in accordance with Ethiopian law.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="heading-xl mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-law-brown-700 dark:text-law-beige-300">Last Updated: January 1, 2023</p>

          <h2 className="heading-md mt-8 mb-4">1. Introduction</h2>
          <p className="body-md mb-4">
            At Fiker Getachew And Associates Law Office ("FGA," "we," "our," or "us"), we respect your privacy and are committed to protecting your
            personal information in accordance with Ethiopian data protection standards. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our legal services in Ethiopia.
          </p>
          <p className="body-md mb-4">
            Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge
            that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
          </p>

          <h2 className="heading-md mt-8 mb-4">2. Information We Collect</h2>
          <p className="body-md mb-4">We may collect the following types of information:</p>

          <h3 className="heading-sm mt-6 mb-3">2.1 Personal Information</h3>
          <p className="body-md mb-4">
            Personal information is data that can be used to identify you directly or indirectly. We may collect personal
            information such as:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Professional or employment-related information</li>
            <li>Payment information (if applicable)</li>
            <li>Information provided in consultation requests or other forms</li>
            <li>Information provided in communications with us</li>
          </ul>

          <h3 className="heading-sm mt-6 mb-3">2.2 Non-Personal Information</h3>
          <p className="body-md mb-4">
            We may also collect non-personal information about your interaction with our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">3. How We Collect Information</h2>
          <p className="body-md mb-4">We collect information through various methods, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>Direct interactions when you provide information through our website forms or communications</li>
            <li>
              Automated technologies such as cookies, web beacons, and similar technologies that collect information
              about your interaction with our website
            </li>
            <li>Third-party sources, such as public databases or social media platforms (where permitted by law)</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">4. How We Use Your Information</h2>
          <p className="body-md mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>Provide, maintain, and improve our website and services</li>
            <li>Process and respond to your inquiries, consultation requests, or other communications</li>
            <li>Send you information about our services, events, or other information that may be of interest to you</li>
            <li>Comply with legal obligations and professional responsibilities</li>
            <li>Protect against fraud, unauthorized transactions, claims, and other liabilities</li>
            <li>Analyze and improve the functionality and user experience of our website</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">5. Disclosure of Your Information</h2>
          <p className="body-md mb-4">
            We may disclose your information to third parties in certain circumstances, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>
              Service providers who perform services on our behalf, such as website hosting, data analysis, payment
              processing, and customer service
            </li>
            <li>
              Professional advisors, such as lawyers, auditors, and insurers, where necessary in the course of the
              professional services they provide to us
            </li>
            <li>
              Law enforcement, government agencies, or authorized third parties, when required by law or to protect our
              rights, property, or safety
            </li>
            <li>
              In connection with a business transaction, such as a merger, acquisition, or sale of assets, where your
              information may be transferred as a business asset
            </li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">6. Data Security</h2>
          <p className="body-md mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
            Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="heading-md mt-8 mb-4">7. Your Rights and Choices</h2>
          <p className="body-md mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct inaccurate or incomplete personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to restrict or object to the processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent (where processing is based on consent)</li>
          </ul>
          <p className="body-md mb-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>

          <h2 className="heading-md mt-8 mb-4">8. Cookies and Similar Technologies</h2>
          <p className="body-md mb-4">
            Our website uses cookies and similar technologies to enhance your experience, analyze usage patterns, and
            deliver personalized content. You can control cookies through your browser settings, but disabling certain
            cookies may limit your ability to use some features of our website.
          </p>

          <h2 className="heading-md mt-8 mb-4">9. Third-Party Links</h2>
          <p className="body-md mb-4">
            Our website may contain links to third-party websites or services that are not owned or controlled by us. We
            are not responsible for the privacy practices or content of these third-party sites. We encourage you to
            review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="heading-md mt-8 mb-4">10. Children's Privacy</h2>
          <p className="body-md mb-4">
            Our website is not intended for children under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe that your child has provided
            us with personal information, please contact us, and we will take steps to delete such information.
          </p>

          <h2 className="heading-md mt-8 mb-4">11. Changes to This Privacy Policy</h2>
          <p className="body-md mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We will post the revised Privacy Policy on our website with an
            updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2 className="heading-md mt-8 mb-4">12. Contact Us</h2>
          <p className="body-md mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
            please contact us at:
          </p>
          <div className="bg-law-beige-100 dark:bg-law-brown-800/50 p-6 rounded-lg mb-8">
            <p className="body-md mb-2">
              <strong>Gebru Mahitem Law Office</strong>
            </p>
            <p className="body-md mb-2">
              <strong>Email:</strong> [PLACEHOLDER - INSERT OFFICE EMAIL]
            </p>
            <p className="body-md">
              <strong>Phone:</strong> +251 11 551 7777
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/">
            <Button className="btn-law">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
