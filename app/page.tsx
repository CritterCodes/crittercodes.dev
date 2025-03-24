import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Skills from "@/components/skills"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <CallToAction />
    </div>
  )
}

