import { ProjectDetail } from "@/components/project-detail"

export default function FabLabProject() {
  return (
    <ProjectDetail
      title="FabLab Fort Smith"
      description="A community-driven makerspace website with membership management, authentication, and payment processing."
      longDescription={`
        <p>FabLab Fort Smith is a community makerspace that provides tools, resources, and education to help people bring their ideas to life. I developed a comprehensive website that not only showcases the organization's mission but also includes functionality for membership management.</p>
        
        <p>The website was built using Next.js and features user authentication through Auth.js, allowing members to create accounts and log in to access exclusive content. Integration with the Square API enables seamless payment processing for membership purchases.</p>
        
        <p>The site also includes a contact form powered by Nodemailer, allowing visitors to easily reach out to the organization. The design features a striking neon green on black color scheme that reflects the creative and innovative nature of the makerspace.</p>
      `}
      image="/imgs/projects/fablab.png"
      category="Non-Profit"
      technologies={["Next.js", "Auth.js", "Nodemailer", "Square API", "Tailwind CSS"]}
      features={[
        "User authentication and member accounts",
        "Membership purchase through Square API integration",
        "Responsive design with dark mode and neon accents",
        "Contact form with email notifications",
        "Information about available tools and resources",
        "Educational content and workshop schedules",
        "Member dashboard with access to exclusive resources",
      ]}
      challenges={[
        "Implementing secure user authentication while maintaining a smooth user experience",
        "Integrating payment processing with membership levels",
        "Creating a visually striking design that works well in both light and dark modes",
      ]}
      solutions={[
        "Used Auth.js for secure, session-based authentication with multiple providers",
        "Implemented Square API with webhook notifications for payment confirmation",
        "Designed a custom theme with Tailwind CSS that maintains high contrast and readability",
      ]}
      githubUrl="https://github.com/CritterCodes/The-Lab"
      liveUrl="https://fablabfortsmith.org"
    />
  )
}

