import { ProjectDetail } from "@/components/project-detail"

export default function LambdaSocietyProject() {
  return (
    <ProjectDetail
      title="Lambda Society Fort Smith"
      description="A non-profit organization website featuring donation capabilities, event calendar, volunteer signup, and organization information."
      longDescription={`
        <p>The Lambda Society Fort Smith is a non-profit organization focused on uniting people in their similarities and standing in support of each other's rights and differences. I developed a comprehensive website to help them establish an online presence and facilitate community engagement.</p>
        
        <p>Built with Next.js, the website features a clean, accessible design with the organization's brand colors. The site includes several key sections such as About, Board Members, Events, and Contact pages. Visitors can learn about the organization's mission, upcoming events, and ways to get involved.</p>
        
        <p>The website includes donation functionality, volunteer signup forms, and an event calendar to keep the community informed and engaged. The design is fully responsive, ensuring a seamless experience across all devices.</p>
      `}
      image="/imgs/projects/lambda.png"
      category="Non-Profit"
      technologies={["Next.js", "React", "Tailwind CSS", "Email.js"]}
      features={[
        "Donation functionality",
        "Event calendar with upcoming community events",
        "Volunteer signup forms",
        "Board member profiles",
        "Organization bylaws and information",
        "Contact form with email notifications",
        "Responsive design optimized for all devices",
      ]}
      challenges={[
        "Creating a warm, welcoming design that reflects the organization's values",
        "Implementing donation functionality without a dedicated payment processor",
        "Building an easy-to-update event system for organization staff",
      ]}
      solutions={[
        "Designed a color scheme based on the organization's logo with warm, inviting tones",
        "Integrated with third-party donation services that align with non-profit needs",
        "Created a simple content management approach for events and announcements",
      ]}
      githubUrl="https://github.com/CritterCodes"
      liveUrl="https://fslambda.org"
    />
  )
}

