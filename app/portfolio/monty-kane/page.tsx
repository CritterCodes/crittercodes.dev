import { ProjectDetail } from "@/components/project-detail"

export default function MontyKaneProject() {
  return (
    <ProjectDetail
      title="Monty Kane Tattoos"
      description="Portfolio website for a tattoo artist showcasing their work, booking system, rates, and tattoo policies."
      longDescription={`
  <p>Monty Kane is a self-taught tattoo artist from Lafayette, Louisiana, specializing in black and gray portrait artistry. As the co-owner of Internal Ink Tattoos and a skilled graphic designer, Monty brings a unique fusion of artistic flair and technical skill to each tattoo.</p>
  
  <p>I developed a portfolio website using vanilla React with Express on the backend. The frontend utilizes Bootstrap and Material UI components for a clean, responsive design. Nodemailer integration powers the contact form, allowing potential clients to inquire about appointments and custom designs.</p>
  
  <p>The website showcases Monty's exceptional tattoo work while providing potential clients with all the information they need to book a session. The site features a stunning gallery of his portrait work, with a focus on his signature black and gray style.</p>
`}
      image="/imgs/projects/monty-kane.jpeg"
      category="Portfolio Website"
      technologies={["React", "Express", "Bootstrap", "Material UI", "Nodemailer"]}
      features={[
        "High-quality image gallery with zoom functionality",
        "Appointment booking through Square integration",
        "Artist biography and professional background",
        "Tattoo pricing and rates information",
        "Detailed aftercare instructions",
        "Studio policies and FAQ section",
        "Contact form and social media links",
      ]}
      challenges={[
        "Optimizing image loading for a gallery of high-resolution tattoo photos",
        "Creating a cohesive design that highlights the artist's black and gray style",
        "Implementing a mobile-friendly navigation for easy portfolio browsing",
      ]}
      solutions={[
        "Used image optimization techniques and lazy loading for performance",
        "Designed a monochromatic color scheme that complements the tattoo style",
        "Created a touch-friendly interface with intuitive navigation patterns",
      ]}
      githubUrl="https://github.com/CritterCodes"
      liveUrl="https://montykane.ink"
    />
  )
}

