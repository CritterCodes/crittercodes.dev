"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check, AlertCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function LeadFunnel() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessType: "",
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    // Simple validation before proceeding to next step
    if (step === 1 && (!formData.businessType || !formData.projectType)) {
      toast({
        title: "Required fields",
        description: "Please fill in all required fields before continuing.",
        variant: "destructive",
      })
      return
    }

    if (step === 2 && (!formData.budget || !formData.timeline)) {
      toast({
        title: "Required fields",
        description: "Please fill in all required fields before continuing.",
        variant: "destructive",
      })
      return
    }

    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      // Add form type identifier
      formData.append("form-type", "lead-funnel")

      // Get human-readable values for dropdown selections
      const businessTypes: Record<string, string> = {
        startup: "Startup",
        small: "Small Business",
        medium: "Medium Business",
        enterprise: "Enterprise",
        nonprofit: "Non-profit",
      }

      const projectTypes: Record<string, string> = {
        website: "Website Development",
        automation: "Process Automation",
        app: "App Development",
        consulting: "Consulting",
      }

      const budgetRanges: Record<string, string> = {
        small: "$1,000 - $5,000",
        medium: "$5,000 - $10,000",
        large: "$10,000 - $25,000",
        enterprise: "$25,000+",
      }

      const timelineOptions: Record<string, string> = {
        urgent: "ASAP (1-2 weeks)",
        short: "Short (1-2 months)",
        medium: "Medium (3-6 months)",
        flexible: "Flexible",
      }

      // Replace the code values with human-readable labels
      formData.set(
        "businessType",
        businessTypes[formData.get("businessType") as string] || (formData.get("businessType") as string),
      )
      formData.set(
        "projectType",
        projectTypes[formData.get("projectType") as string] || (formData.get("projectType") as string),
      )
      formData.set("budget", budgetRanges[formData.get("budget") as string] || (formData.get("budget") as string))
      formData.set(
        "timeline",
        timelineOptions[formData.get("timeline") as string] || (formData.get("timeline") as string),
      )

      const response = await fetch("https://formspree.io/f/mrbpkqpd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus({
          success: true,
          message: "Your project request has been received! I'll be in touch soon.",
        })
        setStep(4) // Move to success step
      } else {
        const data = await response.json()
        setFormStatus({
          success: false,
          message: data.error || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-muted rounded-xl overflow-hidden border">
      <div className="bg-primary/10 p-4 flex justify-between items-center">
        <h3 className="font-medium">Step {step} of 4</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={cn("w-2 h-2 rounded-full", step >= i ? "bg-primary" : "bg-primary/30")} />
          ))}
        </div>
      </div>

      <div className="p-6">
        {formStatus.success === false && formStatus.message && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in-50">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Tell me about your business</h3>
              <p className="text-sm text-muted-foreground">This helps me understand your specific needs</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What type of business do you have?</Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => handleSelectChange("businessType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="small">Small Business</SelectItem>
                    <SelectItem value="medium">Medium Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="nonprofit">Non-profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>What type of project are you looking for?</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) => handleSelectChange("projectType", value)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="website" id="website" />
                    <Label htmlFor="website">Website Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="automation" id="automation" />
                    <Label htmlFor="automation">Process Automation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="app" id="app" />
                    <Label htmlFor="app">App Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="consulting" id="consulting" />
                    <Label htmlFor="consulting">Consulting</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button onClick={handleNext} className="w-full">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in-50">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Project details</h3>
              <p className="text-sm text-muted-foreground">Help me understand the scope of your project</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What's your budget range?</Label>
                <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">$1,000 - $5,000</SelectItem>
                    <SelectItem value="medium">$5,000 - $10,000</SelectItem>
                    <SelectItem value="large">$10,000 - $25,000</SelectItem>
                    <SelectItem value="enterprise">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>What's your timeline?</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                    <SelectItem value="short">Short (1-2 months)</SelectItem>
                    <SelectItem value="medium">Medium (3-6 months)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form method="POST" onSubmit={handleSubmit} className="space-y-6 animate-in fade-in-50">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Your contact information</h3>
              <p className="text-sm text-muted-foreground">I'll use this to get back to you with a custom solution</p>
            </div>

            {/* Hidden fields to include the selections from previous steps */}
            <input type="hidden" name="businessType" value={formData.businessType} />
            <input type="hidden" name="projectType" value={formData.projectType} />
            <input type="hidden" name="budget" value={formData.budget} />
            <input type="hidden" name="timeline" value={formData.timeline} />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional details</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} />
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center py-8 space-y-4 animate-in fade-in-50">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Request Submitted!</h3>
            <p className="text-muted-foreground">
              Thanks for reaching out. I'll review your project details and get back to you within 24-48 hours with a
              custom solution.
            </p>
            <Button onClick={() => setStep(1)} variant="outline">
              Submit another request
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

