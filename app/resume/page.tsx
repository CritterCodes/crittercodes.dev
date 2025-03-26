"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileText, Code, Briefcase, GraduationCap, User, QrCode } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ResumePage() {
  const [showQRCode, setShowQRCode] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  // Add this useEffect hook to inject print styles when the component mounts
  useEffect(() => {
    // Create a style element for print styles
    const style = document.createElement("style")
    style.type = "text/css"
    style.media = "print"

    // Define print-specific CSS
    style.innerHTML = `
      @media print {
        /* Hide navigation, buttons, and other non-essential elements */
        header, footer, nav, button, .container > div:first-child, .flex.justify-center.gap-4.mb-8 {
          display: none !important;
        }
        
        /* Ensure the card takes up the full page */
        .card {
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Optimize colors for black and white printing */
        * {
          color: black !important;
          background: white !important;
          border-color: #ddd !important;
        }
        
        /* Ensure text is readable */
        p, li, span, h1, h2, h3, h4, h5, h6 {
          color: black !important;
        }
        
        /* Make badges visible in black and white */
        .badge {
          border: 1px solid #000 !important;
          background: white !important;
          color: black !important;
        }
        
        /* Adjust spacing */
        .space-y-12 > * {
          margin-top: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        
        /* Ensure proper page breaks */
        .border-l-2.border-primary\\/20.pl-4.space-y-8 > div {
          page-break-inside: avoid;
        }
        
        h3 {
          page-break-after: avoid;
        }
        
        /* Ensure the grid layout works well on paper */
        .grid {
          display: block !important;
        }
        
        .grid > div {
          margin-bottom: 1rem !important;
          page-break-inside: avoid;
        }
        
        /* Add page title */
        @page {
          size: letter portrait;
          margin: 0.5in;
        }
      }
    `

    // Add the style element to the document head
    document.head.appendChild(style)

    // Clean up on component unmount
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handleDownloadPDF = () => {
    // Create a style element for print-specific CSS
    const style = document.createElement("style")
    style.type = "text/css"

    // Define print-specific CSS with black and white optimization and page break controls
    style.innerHTML = `
@media print {
  /* Optimize for black and white printing */
  * {
    color: black !important;
    background-color: white !important;
    border-color: #000 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  /* Hide navigation, buttons, and other non-essential elements */
  header, 
  footer, 
  nav, 
  button, 
  .no-print {
    display: none !important;
  }
  
  /* Ensure the card takes up the full page */
  .print-container {
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
  
  /* Make badges visible in black and white */
  .badge {
    border: 1px solid #000 !important;
    background: white !important;
    color: black !important;
    box-shadow: none !important;
  }
  
  /* Adjust spacing for two-page resume */
  .space-y-12 > * {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  h3 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  p, ul {
    margin-bottom: 0.25rem !important;
  }
  
  /* Ensure the grid layout works well on paper */
  .grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
  }
  
  .grid > div {
    margin-bottom: 0.25rem !important;
    page-break-inside: avoid;
  }
  
  /* Reduce font sizes for print */
  .text-xl {
    font-size: 1rem !important;
  }
  
  .text-lg {
    font-size: 0.9rem !important;
  }
  
  .text-sm {
    font-size: 0.75rem !important;
  }
  
  .text-xs {
    font-size: 0.7rem !important;
  }
  
  /* Project cards optimization */
  .project-card {
    padding: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  
  .project-card h4 {
    font-size: 0.85rem !important;
    margin-bottom: 0.1rem !important;
  }
  
  .project-card p {
    font-size: 0.7rem !important;
    line-height: 1.1 !important;
    margin-bottom: 0.1rem !important;
  }
  
  /* Skills section print optimization */
  .skills-section .web-view {
    display: none !important;
  }
  
  .skills-section .print-view {
    display: block !important;
  }
  
  .skills-section .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
  
  .skills-section .col-span-2 {
    grid-column: span 2 / span 2 !important;
  }
  
  .skills-section h4 {
    margin-bottom: 0.1rem !important;
  }
  
  .skills-section p {
    margin: 0 !important;
    line-height: 1.2 !important;
  }
  
  /* Ensure Professional Experience fits on first page */
  .experience-section {
    margin-bottom: 0.2rem !important;
  }

  .experience-section ul {
    margin-top: 0.1rem !important;
  }

  .experience-section ul li {
    line-height: 1.1 !important;
    margin-bottom: 0.1rem !important;
  }
  
  /* Add page title */
  @page {
    size: letter portrait;
    margin: 0.4in;
  }

  /* Hide the subtitle in print */
  .hide-in-print {
    display: none !important;
  }
  
  /* Compact the projects section */
  .project-card .badge {
    font-size: 0.65rem !important;
    padding: 0.1rem 0.25rem !important;
    margin: 0.1rem !important;
  }
}`

    // Add the style to the document
    document.head.appendChild(style)

    // Set up the document for printing
    const originalTitle = document.title
    document.title = "Jacob_Engel_Resume.pdf"

    // Print the document (which will create a PDF when "Save as PDF" is selected)
    window.print()

    // Restore the original title and remove the style element
    document.title = originalTitle
    document.head.removeChild(style)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Professional Resume</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Full-stack developer specializing in business process automation and web development
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8 no-print">
        <Button className="gap-2" onClick={handleDownloadPDF} disabled={isGeneratingPDF}>
          <Download className="h-4 w-4" />
          {isGeneratingPDF ? "Generating PDF..." : "Download Resume PDF"}
        </Button>

        <Dialog open={showQRCode} onOpenChange={setShowQRCode}>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <QrCode className="h-4 w-4" />
              Portfolio QR Code
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Portfolio QR Code</DialogTitle>
              <DialogDescription>Scan this code to visit my portfolio website</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center p-4">
              <div className="bg-white p-4 rounded-md">
                {/* This would be a real QR code in production */}
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <p className="text-black text-center">QR Code for crittercodes.dev</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="max-w-4xl mx-auto p-8 print-container" ref={resumeRef}>
        <div className="space-y-12">
          <div className="text-center pb-6 border-b">
            <h2 className="text-3xl font-bold">Jacob "Critter" Engel</h2>
            <p className="text-lg text-muted-foreground mt-2 hide-in-print">
              Full-Stack Developer & Business Automation Specialist
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <span>Fort Smith, AR</span>
              <span>•</span>
              <Link href="mailto:jacob@crittercodes.dev" className="text-primary hover:underline">
                jacob@crittercodes.dev
              </Link>
              <span>•</span>
              <Link href="tel:+19187149569" className="hover:underline">
                (918) 714-9569
              </Link>
              <span>•</span>
              <Link href="https://crittercodes.dev" className="text-primary hover:underline">
                crittercodes.dev
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Professional Summary
            </h3>
            <p>
              Full Stack Developer with unique business ownership experience, specializing in business process
              automation and web application development. Combines technical expertise in Next.js, Node.js, and MongoDB
              with practical business insights gained from running a successful jewelry business. Proven track record of
              creating solutions that streamline operations, including a reporting application that saved clients 20+
              hours monthly. Skilled communicator who translates complex technical concepts into practical business
              solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Technical Skills
            </h3>
            <div className="skills-section">
              <div className="web-view">
                <h4 className="font-medium mb-2">Primary Development Skills</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>React.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>HTML & CSS</Badge>
                  <Badge>API Integration</Badge>
                  <Badge>Git</Badge>
                </div>

                <h4 className="font-medium mb-2">E-commerce & Additional Skills</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Shopify Development</Badge>
                  <Badge>Liquid</Badge>
                  <Badge>Responsive UI Design</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>

                <h4 className="font-medium mb-2">Business & Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Client Relationship Management</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Customer Needs Analysis</Badge>
                  <Badge variant="outline">Communication</Badge>
                  <Badge variant="outline">Quality Control</Badge>
                </div>
              </div>

              <div className="print-view hidden">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Primary Development</h4>
                    <p className="text-xs">
                      Next.js, Node.js, MongoDB, JavaScript, React.js, Express.js, HTML/CSS, API Integration, Git
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">E-commerce & Additional</h4>
                    <p className="text-xs">Shopify Development, Liquid, Responsive UI Design, SQL, PostgreSQL</p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-medium text-sm mb-1">Business & Soft Skills</h4>
                    <p className="text-xs">
                      Client Relationship Management, Problem Solving, Project Management, Customer Needs Analysis,
                      Communication, Quality Control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 avoid-break">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Professional Experience
            </h3>

            <div className="border-l-2 border-primary/20 pl-4 space-y-8">
              <div className="experience-section">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">CritterCodes</h4>
                    <p className="text-sm text-muted-foreground">Founder / Consultant / Developer</p>
                  </div>
                  <span className="text-sm text-muted-foreground">January 2023 - Present</span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>
                    Developed a business reporting application that saved executives 20+ hours per month by automating
                    manual Excel processes
                  </li>
                  <li>
                    Served 6 diverse clients including tattoo artists, non-profits, payment processors, fashion
                    designers, and jewelers
                  </li>
                  <li>
                    Built user authentication systems, team management tools, and multi-organization support for client
                    applications
                  </li>
                  <li>Created lead capture systems for tattoo artists and jewelry repair intake/tracking solutions</li>
                  <li>
                    Utilized React.js, Next.js, Node.js, and MongoDB to deliver full-stack business automation solutions
                  </li>
                  <li>Developed and managed Shopify websites, improving user experience and productivity</li>
                </ul>
              </div>

              <div className="experience-section">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">FabLab Fort Smith</h4>
                    <p className="text-sm text-muted-foreground">CEO</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023 - Present</span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Lead non-profit organization focused on providing maker resources to the Fort Smith community</li>
                  <li>Oversee day-to-day operations and ensure alignment with the Board's strategic goals</li>
                  <li>
                    Developed and maintain organization website with membership management, authentication, and payment
                    processing
                  </li>
                  <li>Authored organizational bylaws and ensure the organization maintains financial sustainability</li>
                </ul>
              </div>

              <div className="experience-section">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Engel Fine Design</h4>
                    <p className="text-sm text-muted-foreground">Founder / Bench Jeweler</p>
                  </div>
                  <span className="text-sm text-muted-foreground">November 2022 - Present</span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>
                    Created a custom repair ticketing system that streamlines workflow, reduces liability through photo
                    documentation, and improves customer service
                  </li>
                  <li>Developed and maintained company e-commerce website using Shopify</li>
                  <li>
                    Manage client relationships, analyze customer needs, and deliver high-quality custom jewelry pieces
                  </li>
                  <li>
                    Apply problem-solving skills and attention to detail to both jewelry design and business operations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Featured Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-2">
              <div className="border rounded-lg p-4 project-card print:p-2">
                <h4 className="font-bold">Business Reporting Application</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Full-stack application that saved clients 20+ hours per month
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge variant="outline" className="text-xs">
                    React.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Material UI
                  </Badge>
                </div>
                <p className="text-sm print:text-xs">
                  Built for a payment processing company, this application generates reports for paying banks and
                  agents, processor reports, agent reports, bank reports and summaries. Transformed a 20-hour monthly
                  manual process into an automated system that processes data instantly.
                </p>
              </div>

              <div className="border rounded-lg p-4 project-card print:p-2">
                <h4 className="font-bold">Jewelry Repair Ticketing System</h4>
                <p className="text-sm text-muted-foreground mb-2">Custom business automation solution</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Material UI
                  </Badge>
                </div>
                <p className="text-sm print:text-xs">
                  Developed to solve inventory tracking challenges in my jewelry business. The system captures client
                  information, creates repair tickets, allows photo documentation, tracks repair tasks, and generates
                  printable tickets. Future plans include client-facing features for repair status tracking.
                </p>
              </div>

              <div className="border rounded-lg p-4 project-card print:p-2">
                <h4 className="font-bold">FabLab Fort Smith Website</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Non-profit organization website with membership management
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Auth.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Square API
                  </Badge>
                </div>
                <p className="text-sm print:text-xs">
                  Comprehensive website for a community makerspace with user authentication, payment processing for
                  memberships, and email functionality. The site serves as the digital hub for this creative community
                  co-op serving makers, hackers, artists, and entrepreneurs.
                </p>
              </div>

              <div className="border rounded-lg p-4 project-card print:p-2">
                <h4 className="font-bold">Lambda Society Fort Smith</h4>
                <p className="text-sm text-muted-foreground mb-2">Non-profit organization website</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind CSS
                  </Badge>
                </div>
                <p className="text-sm print:text-xs">
                  Website built for a non-profit organization that integrates with their Facebook page to automatically
                  display events on the website calendar. Includes features for donations, volunteer signup, and
                  organization information. Future plans include a resources dashboard for content management.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education & Certifications
            </h3>

            <div className="border-l-2 border-primary/20 pl-4 space-y-4">
              <div>
                <h4 className="font-bold">Arkansas Code Academy</h4>
                <p className="text-sm">Node.js + MongoDB Full Stack Developer Course</p>
                <p className="text-xs text-muted-foreground">January 2024 - June 2024</p>
              </div>

              <div>
                <h4 className="font-bold">Arkansas Code Academy</h4>
                <p className="text-sm">SQL Certificate</p>
                <p className="text-xs text-muted-foreground">November 2023</p>
              </div>

              <div>
                <h4 className="font-bold">FreeCodeCamp.org</h4>
                <p className="text-sm">Responsive Web Design Certification</p>
                <p className="text-xs text-muted-foreground">2021</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

