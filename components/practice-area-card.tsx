import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import * as Icons from "lucide-react"

interface PracticeAreaCardProps {
  title: string
  description: string
  icon: keyof typeof Icons
  image: string
  link: string
}

export default function PracticeAreaCard({ title, description, icon, image, link }: PracticeAreaCardProps) {
  const Icon = Icons[icon]

  return (
    <Card className="law-card overflow-hidden hover-lift">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="img-overlay"></div>
        <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-law-brown-900/90 p-2 shadow-md">
          <Icon className="h-6 w-6 text-law-beige-500 dark:text-law-brown-500" />
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="pt-6">
        <p className="body-md mb-4">{description}</p>
        <Link href={link}>
          <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
