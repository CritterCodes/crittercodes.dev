import { ContactForm } from "@/components/contact-form"
import { LeadFunnel } from "@/components/lead-funnel"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help automate your business processes
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
                <p className="text-sm text-muted-foreground">jacob@crittercodes.dev</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">Fort Smith, Arkansas</p>
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
    </div>
  )
}

