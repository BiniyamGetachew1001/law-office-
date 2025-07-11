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
    name: "Addis Ababa Main Office",
    address: "Bole Road, Friendship Building, 5th Floor, Addis Ababa, Ethiopia",
    phone: "+251 911 992 719",
    email: "info@abateyimerlaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
  },
  {
    id: 2,
    name: "WhatsApp",
    address: "Available for virtual consultations",
    phone: "+251 911 992 719",
    email: "info@abateyimerlaw.com",
    hours: "Monday - Sunday: 8:00 AM - 8:00 PM",
  },
  {
    id: 3,
    name: "International Clients",
    address: "Virtual consultations available for international clients",
    phone: "+251 911 992 719",
    email: "international@abateyimerlaw.com",
    hours: "By appointment",
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
            <h1 className="heading-xl mb-6">Contact Abate Yimer Law Office</h1>
            <p className="body-lg">
              We are a highly experienced group of legal professionals led by Gebru Mahitem, committed to providing catered solutions to clients' legal needs in Ethiopia. Reach out today to schedule a consultation or discuss your legal needs with our experienced team.
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
                Whether you're facing a complex legal challenge in Ethiopia or simply need guidance on a legal matter,
                our team is here to help. Fill out the form below, and one of our attorneys will get back to you
                promptly to discuss your needs and provide quality legal services with creative solutions.
              </p>
              <p className="body-md mb-8">
                For immediate assistance, you can also call us at <a href="tel:+251940349840" className="text-law-beige-500 dark:text-law-brown-500 font-medium">0940349840</a> or <a href="tel:+251905048804" className="text-law-beige-500 dark:text-law-brown-500 font-medium">0905048804</a>.
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
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <span className="badge-law mb-2 inline-block">Our Location</span>
            <h2 className="heading-lg mb-4">Visit Our Office</h2>
            <p className="body-md max-w-2xl mx-auto">
              Gebru Mahitem Law Office<br />
              Gulele 07 1378 St, Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Gulele+07+1378+St,+Addis+Ababa,+Ethiopia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gebru Mahitem Law Office Location"
            ></iframe>
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
              Find answers to common questions about contacting Abate Yimer Law Office and scheduling consultations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">How quickly will I hear back after contacting you?</h3>
              <p className="body-md">
                We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call or WhatsApp us directly at +251 911 992 719.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">Do you offer free consultations?</h3>
              <p className="body-md">
                Yes, we offer a free initial consultation for most practice areas. During this consultation, we'll discuss your legal needs and determine how we can best assist you.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">Can I schedule a virtual consultation from outside Ethiopia?</h3>
              <p className="body-md">
                Absolutely. We offer consultations via phone, WhatsApp, or video conference for international clients or those who prefer not to visit our office in person. Our diversified expertise includes international law matters.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-sm mb-2">What information should I prepare for my consultation?</h3>
              <p className="body-md">
                It's helpful to have a summary of your legal issue, any relevant documents, and specific questions you'd like to discuss. This allows us to provide quality legal services with creative solutions tailored to your specific needs.
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
            <h2 className="heading-lg mb-6 text-white">Ready to Get Started with Abate Yimer Law Office?</h2>
            <p className="body-lg mb-8 text-law-beige-100">
              Abate Yimer Law Office is ready to help you with our highly experienced group of legal professionals.
              We strive to provide an international standard local solution to meet our Client's needs in project finance, energy and corporate legal matters.
              Take the first step by contacting us today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-law bg-white text-law-brown-900 hover:bg-law-beige-100 dark:bg-law-beige-100 dark:text-law-brown-900 dark:hover:bg-law-beige-200">
                <Phone className="mr-2 h-4 w-4" />
                Call +251 911 992 719
              </Button>
              <Button className="btn-law-outline border-white text-white hover:bg-white/10 dark:border-law-beige-100 dark:text-law-beige-100 dark:hover:bg-law-beige-100/10">
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
    </>
  )
}
