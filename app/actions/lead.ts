"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Form validation schema
const leadFormSchema = z.object({
  businessType: z.string().min(1, { message: "Business type is required" }),
  projectType: z.string().min(1, { message: "Project type is required" }),
  budget: z.string().min(1, { message: "Budget range is required" }),
  timeline: z.string().min(1, { message: "Timeline is required" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadFormSchema>

// Create a transporter with PrivateEmail configuration
const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER || "jacob@crittercodes.dev",
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendLeadEmail(formData: FormData) {
  try {
    // Extract form data
    const data = {
      businessType: formData.get("businessType") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "Not provided",
      message: (formData.get("message") as string) || "No additional details provided",
    }

    // Validate form data
    const validatedData = leadFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

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

    // Prepare email content
    const mailOptions = {
      from: `"${data.name}" <jacob@crittercodes.dev>`,
      to: "jacob@crittercodes.dev",
      replyTo: data.email,
      subject: `New Project Request: ${projectTypes[data.projectType] || data.projectType}`,
      text: `
New Project Request

Business Type: ${businessTypes[data.businessType] || data.businessType}
Project Type: ${projectTypes[data.projectType] || data.projectType}
Budget Range: ${budgetRanges[data.budget] || data.budget}
Timeline: ${timelineOptions[data.timeline] || data.timeline}

Contact Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Additional Details:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #22c55e;">New Project Request</h2>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
    <p><strong>Business Type:</strong> ${businessTypes[data.businessType] || data.businessType}</p>
    <p><strong>Project Type:</strong> ${projectTypes[data.projectType] || data.projectType}</p>
    <p><strong>Budget Range:</strong> ${budgetRanges[data.budget] || data.budget}</p>
    <p><strong>Timeline:</strong> ${timelineOptions[data.timeline] || data.timeline}</p>
  </div>
  
  <h3 style="color: #22c55e;">Contact Information:</h3>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  
  <div style="margin-top: 20px;">
    <h3 style="color: #22c55e;">Additional Details:</h3>
    <p style="white-space: pre-wrap;">${data.message}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
    <p>This email was sent from the lead funnel form on crittercodes.dev</p>
  </div>
</div>
      `,
    }

    // Check if we have the email password
    if (!process.env.EMAIL_PASSWORD) {
      return {
        success: false,
        message: "Email configuration is incomplete. Please set up EMAIL_PASSWORD environment variable.",
      }
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Your project request has been submitted successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send request. Please try again later.",
    }
  }
}

