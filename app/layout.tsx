import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CritterCodes | Fort Smith Web Developer & Business Automation Expert",
  description:
    'Jacob "Critter" Engel is a Fort Smith, Arkansas based full-stack developer specializing in web development, business process automation, and e-commerce solutions using Next.js, React, Node.js, and MongoDB.',
  keywords: [
    "Fort Smith web developer",
    "Arkansas web design",
    "business automation",
    "process automation",
    "Fort Smith web design",
    "e-commerce developer",
    "React developer Arkansas",
    "Next.js developer",
    "Fort Smith business consultant",
    "custom web applications",
    "Jacob Engel developer",
    "CritterCodes",
  ],
  authors: [{ name: "Jacob Engel", url: "https://crittercodes.dev" }],
  creator: "Jacob Engel",
  publisher: "CritterCodes",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crittercodes.dev",
    title: "CritterCodes | Fort Smith Web Developer & Business Automation Expert",
    description: "Fort Smith based web developer specializing in business process automation and e-commerce solutions",
    siteName: "CritterCodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "CritterCodes | Fort Smith Web Developer",
    description: "Fort Smith based web developer specializing in business process automation",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

