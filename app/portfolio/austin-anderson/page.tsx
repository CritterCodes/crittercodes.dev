import { ProjectDetail } from "@/components/project-detail"

export default function AustinAndersonProject() {
  return (
    <ProjectDetail
      title="Austin Anderson Tattoo"
      description="Professional portfolio website for a tattoo artist featuring business information, booking integration with Square, gallery of past work, rates, and policies."
      longDescription={`
        <p>Austin Anderson is a tattoo artist based in Fort Smith, Arkansas, specializing in blackwork and neo-traditional styles. I developed a professional portfolio website to showcase his work and provide essential information to potential clients.</p>
        
        <p>The website was built using vanilla React with Express on the backend. The frontend utilizes Bootstrap and Material UI components for a responsive, modern design. Nodemailer integration enables contact form functionality, allowing potential clients to reach out directly through the site.</p>
        
        <p>The site includes a gallery of his past work, organized by style and subject matter, allowing visitors to browse through his portfolio easily. It also features detailed information about tattoo rates, aftercare instructions, and studio policies to help clients prepare for their tattoo experience.</p>
      `}
      image="/imgs/projects/austin-anderson.jpeg"
      category="Portfolio Website"
      technologies={["React", "Express", "Bootstrap", "Material UI", "Nodemailer"]}
      features={[
        "Responsive image gallery of tattoo work",
        "Square booking integration for appointment scheduling",
        "Artist biography and background information",
        "Detailed tattoo rates and pricing information",
        "Aftercare instructions for clients",
        "Studio policies and procedures",
        "Contact information and location details",
      ]}
      challenges={[
        "Creating a gallery that showcases tattoo work effectively across devices",
        "Integrating with Square's booking system for seamless appointment scheduling",
        "Designing a site that reflects the artist's aesthetic while remaining functional",
      ]}
      solutions={[
        "Implemented a responsive masonry gallery layout for optimal image display",
        "Used Square's API for a native booking experience within the site",
        "Collaborated closely with the artist to create a design that matches his brand",
      ]}
      githubUrl="https://github.com/CritterCodes"
      liveUrl="https://austinanderson.ink"
    />
  )
}

