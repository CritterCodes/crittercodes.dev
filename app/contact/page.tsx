import { ContactForm } from "@/components/contact-form"
import { LeadFunnel } from "@/components/lead-funnel"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Fort Smith Web Developer | CritterCodes",
  description:
    "Contact Jacob Engel, a Fort Smith, Arkansas based web developer and business automation expert. Get a free consultation for your web development or business automation project.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help automate your business processes in the Fort Smith area
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:jacob@crittercodes.dev" className="hover:text-primary">
                    jacob@crittercodes.dev
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+19187149569" className="hover:text-primary">
                    (918) 714-9569
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">Fort Smith, Arkansas</p>
                <p className="text-xs text-muted-foreground">Serving Fort Smith and surrounding areas</p>
              </CardContent>
            </Card>
          </div>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Find Your Perfect Solution</h2>
          <LeadFunnel />
        </div>
      </div>

      <div className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Looking For Opportunities</h2>
        <div className="max-w-3xl mx-auto bg-muted rounded-xl p-6 space-y-4">
          <p className="text-center">
            I'm currently seeking junior developer positions with a focus on business automation and web application
            development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preferred Technologies</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Badge>Next.js</Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Node.js</Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>MongoDB</Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>React</Badge>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Work Preferences</h3>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Remote Preferred</Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Open to Hybrid</Badge>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Open to Onsite in Fort Smith area</Badge>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button asChild size="lg">
              <Link href="/resume">View My Resume</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Service Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-3">Fort Smith</h3>
            <p className="text-sm text-muted-foreground">
              Providing web development, business automation, and e-commerce solutions to businesses in Fort Smith,
              Arkansas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Northwest Arkansas</h3>
            <p className="text-sm text-muted-foreground">
              Serving Fayetteville, Springdale, Rogers, Bentonville, and surrounding areas with custom web solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Remote Services</h3>
            <p className="text-sm text-muted-foreground">
              Working remotely with clients across the United States to deliver high-quality web development services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

