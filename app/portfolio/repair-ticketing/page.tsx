import { ProjectDetail } from "@/components/project-detail"

export default function RepairTicketingProject() {
  return (
    <ProjectDetail
      title="Jewelry Repair Ticketing System"
      description="Custom repair tracking application for Engel Fine Design that manages repair jobs, reduces liability through photo documentation, and improves customer service."
      longDescription={`
  <p>As the owner of Engel Fine Design, a jewelry business, I identified a need to streamline the repair tracking process. I developed a custom repair ticketing system that has significantly improved our workflow and customer service.</p>
  
  <p>The application was built using Next.js with Material UI for the frontend and MongoDB for data storage. I also utilized Toolpad Core for some of the administrative interfaces, allowing for rapid development of the management dashboard.</p>
  
  <p>The system generates printable tickets that stay with the repairs throughout the process, ensuring that all necessary information is always available to staff. It also maintains a digital database of all repairs, making it easy to look up the status of any job and provide accurate updates to customers.</p>
`}
      image="/imgs/projects/repair-efd.png"
      category="Business Automation"
      technologies={["Next.js", "Material UI", "MongoDB", "Toolpad Core"]}
      features={[
        "Digital repair ticket creation with customer information",
        "Photo documentation of repair items",
        "Printable tickets to accompany physical repairs",
        "Repair status tracking and updates",
        "Customer notification system",
        "Searchable repair history database",
        "Pricing and payment tracking",
      ]}
      challenges={[
        "Designing a system that works both digitally and with physical printed tickets",
        "Implementing secure photo storage for documentation",
        "Creating an interface that's efficient for busy staff to use",
      ]}
      solutions={[
        "Developed a print-friendly ticket design that includes all necessary information",
        "Implemented secure image upload and storage with compression for efficiency",
        "Created a streamlined UI focused on quick data entry and retrieval",
      ]}
      githubUrl="https://github.com/CritterCodes/efd-toolpad"
      liveUrl="https://repair.engelfinedesign.com"
    />
  )
}

