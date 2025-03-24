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
    errors?: Record<string, string[]>
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      setFormStatus(result)

      if (result.success) {
        toast({
          title: "Request submitted!",
          description: "Thanks for your interest. I'll prepare a custom solution for you.",
        })
        setStep(4) // Success step
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldError = (field: string) => {
    return formStatus.errors?.[field]?.[0]
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
                  <SelectTrigger className={getFieldError("businessType") ? "border-red-500" : ""}>
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
                {getFieldError("businessType") && (
                  <p className="text-xs text-red-500">{getFieldError("businessType")}</p>
                )}
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
                {getFieldError("projectType") && <p className="text-xs text-red-500">{getFieldError("projectType")}</p>}
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
                  <SelectTrigger className={getFieldError("budget") ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">$1,000 - $5,000</SelectItem>
                    <SelectItem value="medium">$5,000 - $10,000</SelectItem>
                    <SelectItem value="large">$10,000 - $25,000</SelectItem>
                    <SelectItem value="enterprise">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
                {getFieldError("budget") && <p className="text-xs text-red-500">{getFieldError("budget")}</p>}
              </div>

              <div className="space-y-2">
                <Label>What's your timeline?</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                  <SelectTrigger className={getFieldError("timeline") ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                    <SelectItem value="short">Short (1-2 months)</SelectItem>
                    <SelectItem value="medium">Medium (3-6 months)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                {getFieldError("timeline") && <p className="text-xs text-red-500">{getFieldError("timeline")}</p>}
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
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in-50">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Your contact information</h3>
              <p className="text-sm text-muted-foreground">I'll use this to get back to you with a custom solution</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={getFieldError("name") ? "border-red-500" : ""}
                />
                {getFieldError("name") && <p className="text-xs text-red-500">{getFieldError("name")}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={getFieldError("email") ? "border-red-500" : ""}
                />
                {getFieldError("email") && <p className="text-xs text-red-500">{getFieldError("email")}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={getFieldError("phone") ? "border-red-500" : ""}
                />
                {getFieldError("phone") && <p className="text-xs text-red-500">{getFieldError("phone")}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={getFieldError("message") ? "border-red-500" : ""}
                />
                {getFieldError("message") && <p className="text-xs text-red-500">{getFieldError("message")}</p>}
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

