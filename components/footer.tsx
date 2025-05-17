import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Scale, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-law-beige-100 dark:bg-law-brown-900 border-t border-law-beige-200 dark:border-law-brown-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-law-brown-800 dark:text-law-beige-300" />
              <h3 className="text-xl font-serif font-bold text-law-brown-900 dark:text-law-beige-100">GEBRU MAHITEM LAW OFFICE</h3>
            </div>
            <p className="text-law-brown-700 dark:text-law-beige-300 mb-4">
              Established in 2022, Gebru Mahitem Law Office is a dedicated legal practice located in the heart of Addis Ababa, Ethiopia. Led by Attorney and Consultant at Law, Gebru Mahitem, who brings over 11 years of legal experience, the firm offers a wide range of legal services tailored to meet the needs of individuals and businesses alike. With a commitment to integrity, expertise, and client satisfaction, we strive to provide personalized and effective legal solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-law-brown-600 hover:text-law-brown-900 dark:text-law-beige-400 dark:hover:text-law-beige-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-law-brown-600 hover:text-law-brown-900 dark:text-law-beige-400 dark:hover:text-law-beige-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-law-brown-600 hover:text-law-brown-900 dark:text-law-beige-400 dark:hover:text-law-beige-100 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-law-brown-600 hover:text-law-brown-900 dark:text-law-beige-400 dark:hover:text-law-beige-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-law-brown-800 dark:text-law-beige-200">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/practice-areas/corporate-law"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/litigation"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/real-estate"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/intellectual-property"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas/tax-law"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Tax Law
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="text-law-beige-500 dark:text-law-brown-500 hover:underline font-medium"
                >
                  View All Practice Areas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-law-brown-800 dark:text-law-beige-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/attorneys"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="/case-results"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Case Results
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-law-brown-700 dark:text-law-beige-300 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-law-brown-800 dark:text-law-beige-200">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                <span className="text-law-brown-700 dark:text-law-beige-300">
                  Gulele _07_1378 St<br />Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                <span className="text-law-brown-700 dark:text-law-beige-300">+251 940 349 840 / +251 905 048 804</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                <span className="text-law-brown-700 dark:text-law-beige-300">[Insert Email Address]</span>
              </li>
              <li className="flex">
                <span className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0">🌐</span>
                <span className="text-law-brown-700 dark:text-law-beige-300">[Insert Website URL]</span>
              </li>
              <li className="flex">
                <span className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0">🔗</span>
                <span className="text-law-brown-700 dark:text-law-beige-300">[Insert Social Media Links]</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-2 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                <span className="text-law-brown-700 dark:text-law-beige-300">Mon-Sat: Open 24 hours<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-law-beige-200 dark:border-law-brown-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-law-brown-600 dark:text-law-beige-400">
              &copy; {new Date().getFullYear()} Gebru Mahitem Law Office. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-law-brown-600 dark:text-law-beige-400 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-law-brown-600 dark:text-law-beige-400 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-law-brown-600 dark:text-law-beige-400 hover:text-law-brown-900 dark:hover:text-law-beige-100 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
