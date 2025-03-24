import { ProjectDetail } from "@/components/project-detail"

export default function ReportingAppProject() {
  return (
    <ProjectDetail
      title="Business Reporting Application"
      description="Automated reporting system that generates reports for paying banks and agents, saving the client approximately 20 hours per month."
      longDescription={`
        <p>For a confidential client, I developed a comprehensive business reporting application that automates what was previously a time-consuming manual process. The application generates detailed reports for paying banks and agents, as well as processor reports, agent reports, bank reports, and summaries for each category.</p>
        
        <p>Built with React and Material UI on the frontend and Express with MongoDB on the backend, the application features a clean, intuitive interface that allows users to generate complex reports with just a few clicks. The system processes large datasets efficiently and presents the information in a clear, organized format.</p>
        
        <p>The implementation of this application has resulted in significant time savings for the client, reducing what was previously a 20-hour monthly task to a matter of minutes. The automation also eliminates human error, ensuring consistent, accurate reporting.</p>
      `}
      image="/placeholder.svg?height=400&width=600"
      category="Business Automation"
      technologies={["React", "Express", "MongoDB", "Material UI"]}
      features={[
        "Automated generation of bank, agent, and processor reports",
        "Summary reports with key performance indicators",
        "Data visualization with charts and graphs",
        "Filtering and sorting capabilities for data analysis",
        "Export functionality to various formats (PDF, Excel, CSV)",
        "User authentication and role-based access control",
        "Scheduled report generation and email distribution",
      ]}
      challenges={[
        "Processing and organizing large volumes of financial data efficiently",
        "Creating a user interface that simplifies complex reporting tasks",
        "Ensuring data accuracy and consistency across different report types",
      ]}
      solutions={[
        "Implemented optimized data processing algorithms for large datasets",
        "Designed an intuitive UI with guided workflows for report generation",
        "Created a unified data model with validation to ensure consistency",
      ]}
      githubUrl=""
      liveUrl=""
    />
  )
}

