// components/contact-form.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

//just a comment
export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      setFormStatus(result)
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
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
        message: "An unexpected error occurred. Please try again later."
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {formStatus.success === true && (
        <Alert className="bg-primary/20 border-primary">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      {formStatus.success === false && formStatus.message && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className={getFieldError('name') ? "border-red-500" : ""} 
          />
          {getFieldError('name') && (
            <p className="text-xs text-red-500">{getFieldError('name')}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            className={getFieldError('email') ? "border-red-500" : ""} 
          />
          {getFieldError('email') && (
            <p className="text-xs text-red-500">{getFieldError('email')}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input 
          id="subject" 
          name="subject" 
          value={formData.subject}
          onChange={handleChange}
          required 
          className={getFieldError('subject') ? "border-red-500" : ""} 
        />
        {getFieldError('subject') && (
          <p className="text-xs text-red-500">{getFieldError('subject')}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea 
          id="message" 
          name="message" 
          rows={5} 
          value={formData.message}
          onChange={handleChange}
          required 
          className={getFieldError('message') ? "border-red-500" : ""} 
        />
        {getFieldError('message') && (
          <p className="text-xs text-red-500">{getFieldError('message')}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Your message will be sent to jacob@crittercodes.dev
      </p>
    </form>
  )
}

