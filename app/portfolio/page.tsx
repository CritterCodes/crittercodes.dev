import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects } from "@/data/projects"

export default function PortfolioPage() {
  const clientProjects = projects.filter((project) => project.type === "client")
  const personalProjects = projects.filter((project) => project.type === "personal")

  // Group projects by category
  const categories = {
    "Non-Profit": projects.filter((p) => p.category === "Non-Profit"),
    "E-commerce": projects.filter((p) => p.category === "E-commerce"),
    "Portfolio Website": projects.filter((p) => p.category === "Portfolio Website"),
    "Business Automation": projects.filter((p) => p.category === "Business Automation"),
    "SaaS Application": projects.filter((p) => p.category === "SaaS Application"),
    "Game Development": projects.filter((p) => p.category === "Game Development"),
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my client projects and personal applications focused on business process automation
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="client">Client Work</TabsTrigger>
          <TabsTrigger value="personal">Personal Apps</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        <TabsContent value="client" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        <TabsContent value="personal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-24 space-y-12">
        <h2 className="text-3xl font-bold text-center">Projects by Category</h2>

        {Object.entries(categories).map(
          ([category, categoryProjects]) =>
            categoryProjects.length > 0 && (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </div>
  )
}

