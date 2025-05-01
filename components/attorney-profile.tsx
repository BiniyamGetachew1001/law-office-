import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight } from "lucide-react"

interface AttorneyProfileProps {
  name: string
  title: string
  image: string
  specialties: string[]
  education: string[]
  bio: string
  email: string
  phone: string
}

export default function AttorneyProfile({
  name,
  title,
  image,
  specialties,
  education,
  bio,
  email,
  phone,
}: AttorneyProfileProps) {
  return (
    <Card className="law-card overflow-hidden hover-lift">
      <div className="relative h-64 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover object-top" />
      </div>
      <CardContent className="pt-6">
        <h3 className="heading-sm mb-1">{name}</h3>
        <p className="text-law-beige-500 dark:text-law-brown-500 font-medium mb-3">{title}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-law-brown-800 dark:text-law-beige-200 mb-1">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs rounded-full bg-law-beige-100 text-law-brown-800 dark:bg-law-brown-800 dark:text-law-beige-200"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-law-brown-800 dark:text-law-beige-200 mb-1">Education</h4>
          <ul className="text-sm text-law-brown-700 dark:text-law-beige-300">
            {education.map((degree, index) => (
              <li key={index} className="mb-1">
                {degree}
              </li>
            ))}
          </ul>
        </div>

        <p className="body-sm mb-4">{bio}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
            <span className="text-law-brown-700 dark:text-law-beige-300">{email}</span>
          </div>
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2 text-law-beige-500 dark:text-law-brown-500" />
            <span className="text-law-brown-700 dark:text-law-beige-300">{phone}</span>
          </div>
        </div>

        <Link href={`/attorneys/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
            View Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
