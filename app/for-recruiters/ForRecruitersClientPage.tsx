"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Briefcase, Code, GraduationCap, ExternalLink } from "lucide-react"
import { jsPDF } from "jspdf"

export default function ForRecruitersClientPage() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [isGeneratingAcousticPDF, setIsGeneratingAcousticPDF] = useState(false)

  const handleDownloadResume = async () => {
    setIsGeneratingPDF(true)

    try {
      // Redirect to the resume page in a new tab
      window.open("/resume", "_blank")

      // Wait a moment to allow the new tab to open
      setTimeout(() => {
        setIsGeneratingPDF(false)
      }, 1000)
    } catch (error) {
      console.error("Error opening resume page:", error)
      setIsGeneratingPDF(false)
    }
  }

  const handleDownloadAcousticResume = async () => {
    setIsGeneratingAcousticPDF(true)

    try {
      // Create a simple PDF with the Acoustic-specific resume content
      const doc = new jsPDF()

      // Add title
      doc.setFontSize(22)
      doc.text('Jacob "Critter" Engel', 105, 20, { align: "center" })

      doc.setFontSize(14)
      doc.text("Full-Stack Developer & Business Automation Specialist", 105, 30, { align: "center" })

      doc.setFontSize(10)
      doc.text("Fort Smith, AR | jacob@crittercodes.dev | (918) 714-9569 | crittercodes.dev", 105, 40, {
        align: "center",
      })

      // Add horizontal line
      doc.setLineWidth(0.5)
      doc.line(20, 45, 190, 45)

      // Add Professional Summary
      doc.setFontSize(14)
      doc.text("Professional Summary", 20, 55)

      doc.setFontSize(10)
      const summary =
        "Full Stack Developer with unique business ownership experience, specializing in customer engagement solutions and business process automation. Combines technical expertise in Next.js, Node.js, and MongoDB with practical business insights gained from running a successful customer-focused business. Proven track record of creating solutions that streamline operations and enhance customer experiences, including applications that saved clients 20+ hours monthly. Passionate about building tools that transform how brands connect with customers through data-driven visibility and personalized engagement."

      // Split the text to fit the page width
      const splitSummary = doc.splitTextToSize(summary, 170)
      doc.text(splitSummary, 20, 65)

      // Add Technical Skills
      doc.setFontSize(14)
      doc.text("Technical Skills", 20, 95)

      doc.setFontSize(12)
      doc.text("Primary Development Skills:", 20, 105)

      doc.setFontSize(10)
      doc.text("Next.js, Node.js, MongoDB, JavaScript, React.js, Express.js, HTML & CSS, API Integration, Git", 25, 115)

      doc.setFontSize(12)
      doc.text("E-commerce & Customer Engagement:", 20, 125)

      doc.setFontSize(10)
      doc.text(
        "Shopify Development, Liquid, Responsive UI Design, Customer Data Management, User Experience Design",
        25,
        135,
      )

      doc.setFontSize(12)
      doc.text("Business & Soft Skills:", 20, 145)

      doc.setFontSize(10)
      doc.text(
        "Client Relationship Management, Problem Solving, Project Management, Customer Needs Analysis, Communication, Quality Control",
        25,
        155,
      )

      // Add more content as needed...

      // Save the PDF
      doc.save("Jacob_Engel_Acoustic_Resume.pdf")
    } catch (error) {
      console.error("Error generating Acoustic PDF:", error)
      alert("There was an error generating the PDF. Please try again.")
    } finally {
      setIsGeneratingAcousticPDF(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">For Recruiters</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Key information about my skills, experience, and job preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Summary
              </h2>
              <p>
                Full Stack Developer with unique business ownership experience, specializing in business process
                automation and web application development. Combines technical expertise in Next.js, Node.js, and
                MongoDB with practical business insights gained from running a successful jewelry business. Proven track
                record of creating solutions that streamline operations, including a reporting application that saved
                clients 20+ hours monthly. Skilled communicator who translates complex technical concepts into practical
                business solutions.
              </p>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="sm">
                  <Link href="/resume">View Full Resume</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Primary Development Skills</h3>
                  <div className="flex flex-wrap gap-2">
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
                </div>
                <div>
                  <h3 className="font-medium mb-2">E-commerce & Additional Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Shopify Development</Badge>
                    <Badge>Liquid</Badge>
                    <Badge>Responsive UI Design</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Business & Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Client Relationship Management</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                    <Badge variant="outline">Project Management</Badge>
                    <Badge variant="outline">Customer Needs Analysis</Badge>
                    <Badge variant="outline">Communication</Badge>
                    <Badge variant="outline">Quality Control</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Key Projects
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-bold">Business Reporting Application</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Full-stack application that saved clients 20+ hours per month
                  </p>
                  <p className="text-sm">
                    Built for a payment processing company, this application generates reports for paying banks and
                    agents, processor reports, agent reports, bank reports and summaries. Transformed a 20-hour monthly
                    manual process into an automated system that processes data instantly.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-bold">Jewelry Repair Ticketing System</h3>
                  <p className="text-sm text-muted-foreground mb-1">Custom business automation solution</p>
                  <p className="text-sm">
                    Developed to solve inventory tracking challenges in my jewelry business. The system captures client
                    information, creates repair tickets, allows photo documentation, tracks repair tasks, and generates
                    printable tickets.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h3 className="font-bold">FabLab Fort Smith Website</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Non-profit organization website with membership management
                  </p>
                  <p className="text-sm">
                    Comprehensive website for a community makerspace with user authentication, payment processing for
                    memberships, and email functionality. As CEO of this non-profit, I lead the organization while
                    developing its digital presence.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" size="sm">
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education & Certifications
              </h2>
              <div className="space-y-3">
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
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Job Preferences</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Looking For</h3>
                  <p className="text-sm">
                    Junior Developer position with focus on business automation and web application development
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Work Arrangement</h3>
                  <div className="space-y-1">
                    <Badge className="block w-full justify-center py-1">Remote Preferred</Badge>
                    <Badge variant="outline" className="block w-full justify-center py-1">
                      Open to Hybrid
                    </Badge>
                    <Badge variant="outline" className="block w-full justify-center py-1">
                      Open to Onsite (Fort Smith area)
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Target Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Interested In</h3>
                  <p className="text-sm">
                    Companies like Acoustic that focus on marketing automation and customer engagement solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Quick Links</h2>
              <div className="space-y-3">
                <Button asChild className="w-full justify-between">
                  <Link href="/resume">
                    View Resume
                    <FileText className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  className="w-full justify-between"
                  variant="outline"
                  onClick={handleDownloadResume}
                  disabled={isGeneratingPDF}
                >
                  Download Resume PDF
                  <Download className="w-4 h-4" />
                </Button>
                <Button
                  className="w-full justify-between"
                  variant="outline"
                  onClick={handleDownloadAcousticResume}
                  disabled={isGeneratingAcousticPDF}
                >
                  Download Acoustic-Specific Resume
                  <Download className="w-4 h-4" />
                </Button>
                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href="/portfolio">
                    Portfolio
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href="/contact">
                    Contact Me
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:jacob@crittercodes.dev" className="text-primary hover:underline">
                    jacob@crittercodes.dev
                  </a>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+19187149569" className="hover:underline">
                    (918) 714-9569
                  </a>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Location:</span> Fort Smith, Arkansas
                </p>
                <p className="text-sm">
                  <span className="font-medium">Website:</span>{" "}
                  <a href="https://crittercodes.dev" className="text-primary hover:underline">
                    crittercodes.dev
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

