"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react"
import DynamicBackground from "@/components/dynamic-background"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to our privacy policy.",
  }),
})

// Office locations data
const officeLocations = [
  {
    id: 1,
    name: "Main Office",
    address: "123 Legal Avenue, Suite 500, New York, NY 10001",
    phone: "(212) 555-1000",
    email: "info@prestigelaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
  {
    id: 2,
    name: "Downtown Branch",
    address: "456 Justice Street, 10th Floor, New York, NY 10007",
    phone: "(212) 555-2000",
    email: "downtown@prestigelaw.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  },
  {
    id: 3,
    name: "Westside Location",
    address: "789 Counsel Boulevard, Suite 300, New York, NY 10023",
    phone: "(212) 555-3000",
    email: "westside@prestigelaw.com",
    hours: "Monday - Friday: 8:30 AM - 5:30 PM",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <DynamicBackground variant="gradient" intensity="light" className="absolute inset-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="body-lg">
              Our team of experienced attorneys is ready to help you navigate your legal challenges.
              Reach out today to schedule a consultation or discuss your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge-law mb-2 inline-block">Get In Touch</span>
              <h2 className="heading-lg mb-4">How Can We Help You?</h2>
              <div className="divider w-24 my-6"></div>
              <p className="body-md mb-6">
                Whether you're facing a complex legal challenge or simply need guidance on a legal matter,
                our team is here to help. Fill out the form below, and one of our attorneys will get back to you
                promptly to discuss your needs.
              </p>
              <p className="body-md mb-8">
                For immediate assistance, you can also call our main office at <a href="tel:(212) 555-1000" className="text-law-beige-500 dark:text-law-brown-500 font-medium">(212) 555-1000</a>.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4 shrink-0">
                    <Clock className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100 mb-1">Quick Response</h3>
                    <p className="body-sm">
                      We strive to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 mr-4 shrink-0">
                    <CheckCircle className="h-5 w-5 text-law-beige-500 dark:text-law-brown-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-law-brown-900 dark:text-law-beige-100 mb-1">Confidential Consultation</h3>
                    <p className="body-sm">
                      All communications with our firm are confidential and protected by attorney-client privilege.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 text-law-beige-500 dark:text-law-brown-500 hover:bg-law-beige-300 dark:hover:bg-law-brown-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 text-law-beige-500 dark:text-law-brown-500 hover:bg-law-beige-300 dark:hover:bg-law-brown-700 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 text-law-beige-500 dark:text-law-brown-500 hover:bg-law-beige-300 dark:hover:bg-law-brown-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-3 text-law-beige-500 dark:text-law-brown-500 hover:bg-law-beige-300 dark:hover:bg-law-brown-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <Card className="law-card">
                <CardContent className="p-6">
                  {isSuccess ? (
                    <div className="py-8 text-center">
                      <div className="rounded-full bg-law-beige-200 dark:bg-law-brown-800 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-law-beige-500 dark:text-law-brown-500" />
                      </div>
                      <h3 className="heading-md mb-2">Thank You!</h3>
                      <p className="body-md mb-6">
                        Your message has been sent successfully. One of our team members will get back to you shortly.
                      </p>
                      <Button
                        className="btn-law"
                        onClick={() => setIsSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john.doe@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input placeholder="(123) 456-7890" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help you?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Please provide details about your legal matter..."
                                  className="min-h-[150px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="consent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I agree to the <Link href="/privacy-policy" className="text-law-beige-500 dark:text-law-brown-500 hover:underline">privacy policy</Link> and consent to being contacted about my inquiry.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="btn-law w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Our Locations</span>
            <h2 className="heading-lg mb-4">Visit Our Offices</h2>
            <p className="body-md max-w-2xl mx-auto">
              We have multiple office locations throughout the city to better serve our clients.
              Feel free to visit us at any of our convenient locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeLocations.map((office) => (
              <Card key={office.id} className="law-card hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm mb-4">{office.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                      <p className="body-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                      <a
                        href={`tel:${office.phone}`}
                        className="body-sm text-law-brown-700 dark:text-law-beige-300 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="body-sm text-law-brown-700 dark:text-law-beige-300 hover:text-law-beige-500 dark:hover:text-law-brown-500 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-law-beige-500 dark:text-law-brown-500 shrink-0 mt-0.5" />
                      <p className="body-sm">{office.hours}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-law-beige-50 dark:bg-law-brown-900/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Find Us</span>
            <h2 className="heading-lg mb-4">Our Main Office Location</h2>
            <p className="body-md max-w-2xl mx-auto">
              Our main office is conveniently located in the heart of the city, easily accessible by public transportation.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] relative">
            {/* This would typically be a Google Maps or other map embed */}
            <div className="absolute inset-0 bg-law-beige-200 dark:bg-law-brown-800 flex items-center justify-center">
              <p className="body-md text-center p-6">
                Map embed would go here. For implementation, you would typically use Google Maps API or another mapping service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <span className="badge-law mb-2 inline-block">Questions?</span>
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="body-md max-w-2xl mx-auto">
              Find answers to common questions about contacting our firm and scheduling consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">How quickly will I hear back after contacting you?</h3>
              <p className="body-md">
                We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our main office directly.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">Do you offer free consultations?</h3>
              <p className="body-md">
                Yes, we offer a free initial consultation for most practice areas. During this consultation, we'll discuss your legal needs and determine how we can best assist you.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">Can I schedule a virtual consultation?</h3>
              <p className="body-md">
                Absolutely. We offer consultations via phone or video conference for clients who prefer not to visit our offices in person.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">What information should I prepare for my consultation?</h3>
              <p className="body-md">
                It's helpful to have a summary of your legal issue, any relevant documents, and specific questions you'd like to discuss. This allows us to make the most of our time together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-law-gradient dark:bg-law-gradient-dark opacity-90"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">Ready to Get Started?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Our team of experienced attorneys is ready to help you navigate your legal challenges and achieve your
              goals. Take the first step toward resolving your legal matters by scheduling a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
                <Phone className="mr-2 h-4 w-4" />
                Call (212) 555-1000
              </Button>
              <Button className="btn-law-outline border-white text-white hover:bg-white/10 dark:border-law-beige-100 dark:text-law-beige-100 dark:hover:bg-law-beige-100/10">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
