import { ProjectDetail } from "@/components/project-detail"

export default function PholioProject() {
  return (
    <ProjectDetail
      title="Pholio.ink"
      description="A multi-tenant website builder for tattoo artists to create and manage their portfolio sites, currently in development."
      longDescription={`
        <p>Pholio.ink is a SaaS application I'm developing that allows tattoo artists to easily create and manage their own professional portfolio websites. The platform is an expansion of my experience building custom tattoo portfolio sites like austinanderson.ink and montykane.ink.</p>
        
        <p>Built with Next.js, MongoDB, and Material UI, Pholio.ink features a multi-tenant architecture that enables each artist to have their own branded website while sharing the underlying infrastructure. Artists can customize their site's appearance, upload and organize their portfolio, set their rates and policies, and integrate with booking systems.</p>
        
        <p>The application includes an intuitive dashboard where artists can manage all aspects of their site without needing technical knowledge. This empowers artists to maintain a professional online presence with minimal effort, allowing them to focus on their craft.</p>
      `}
      image="/placeholder.svg?height=400&width=600"
      category="SaaS Application"
      technologies={["Next.js", "MongoDB", "Material UI", "React"]}
      features={[
        "Multi-tenant architecture for individual artist websites",
        "Customizable themes and branding options",
        "Portfolio management with image optimization",
        "Booking system integration",
        "Rates, policies, and aftercare information sections",
        "Contact forms and social media integration",
        "Analytics dashboard for visitor insights",
      ]}
      challenges={[
        "Creating a flexible system that meets diverse artist needs while maintaining consistency",
        "Implementing efficient image handling for portfolio management",
        "Designing an intuitive interface for non-technical users",
      ]}
      solutions={[
        "Developed a component-based system with customizable options within a consistent framework",
        "Implemented advanced image optimization and storage solutions",
        "Created a user-friendly dashboard with guided setup and contextual help",
      ]}
      githubUrl="https://github.com/CritterCodes/pholio-nextjs"
      liveUrl="https://pholio.ink"
    />
  )
}

