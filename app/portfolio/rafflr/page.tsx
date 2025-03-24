import { ProjectDetail } from "@/components/project-detail"

export default function RafflrProject() {
  return (
    <ProjectDetail
      title="Rafflr.xyz"
      description="A SaaS application allowing users to host live online raffles, built with React, Material UI, MongoDB, and WebSocket for real-time functionality."
      longDescription={`
        <p>Rafflr.xyz is a SaaS application I'm developing that enables content creators to host live online raffles as a way to engage with their audience. The platform provides a real-time, interactive experience for both raffle hosts and participants.</p>
        
        <p>Originally built with vanilla React and Material UI, the application is currently being migrated to Next.js for improved performance and SEO. The backend uses MongoDB for data storage and WebSocket technology for real-time updates, ensuring that all participants see raffle results simultaneously.</p>
        
        <p>The platform includes features such as customizable raffle settings, participant management, automatic winner selection, and result sharing. It's designed to be user-friendly while providing the functionality needed for engaging, transparent online raffles.</p>
      `}
      image="/placeholder.svg?height=400&width=600"
      category="SaaS Application"
      technologies={["React", "Next.js", "Material UI", "MongoDB", "WebSocket"]}
      features={[
        "Live raffle hosting with real-time updates",
        "Customizable raffle settings and branding",
        "Participant management and entry validation",
        "Automatic, transparent winner selection",
        "Result sharing across social media platforms",
        "Host dashboard with analytics and history",
        "Mobile-responsive design for participation on any device",
      ]}
      challenges={[
        "Implementing reliable real-time functionality for simultaneous user experiences",
        "Creating a fair, transparent winner selection process",
        "Designing an engaging user interface for both hosts and participants",
      ]}
      solutions={[
        "Used WebSocket technology for instant, reliable updates across all connected clients",
        "Developed a verifiable random selection algorithm with public validation",
        "Created separate, optimized interfaces for hosting and participating in raffles",
      ]}
      githubUrl="https://github.com/CritterCodes"
      liveUrl="https://rafflr.xyz"
    />
  )
}

