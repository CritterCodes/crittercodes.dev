import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import CallToAction from "@/components/call-to-action"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <Script id="local-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CritterCodes - Jacob Engel",
            "image": "https://crittercodes.dev/imgs/headshot.jpg",
            "url": "https://crittercodes.dev",
            "telephone": "(918) 714-9569",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Fort Smith",
              "addressRegion": "AR",
              "postalCode": "",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.3860,
              "longitude": -94.3985
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://github.com/CritterCodes",
              "https://www.linkedin.com/in/critterthedesigner/",
              "https://www.facebook.com/critterthedesigner"
            ],
            "priceRange": "$$",
            "servesCuisine": "Web Development, Business Automation, E-commerce Solutions",
            "description": "Fort Smith based web developer specializing in business process automation and e-commerce solutions using Next.js, React, Node.js, and MongoDB."
          }
        `}
      </Script>
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <FeaturedProjects />
        <CallToAction />
      </div>
    </>
  )
}

