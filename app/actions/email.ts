"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

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

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // Prepare email content
    const mailOptions = {
      from: `"${data.name}" <jacob@crittercodes.dev>`,
      to: "jacob@crittercodes.dev",
      replyTo: data.email,
      subject: `Contact Form: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #22c55e;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Subject:</strong> ${data.subject}</p>
  <div style="margin-top: 20px;">
    <h3 style="color: #22c55e;">Message:</h3>
    <p style="white-space: pre-wrap;">${data.message}</p>
  </div>
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
    <p>This email was sent from the contact form on crittercodes.dev</p>
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
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

