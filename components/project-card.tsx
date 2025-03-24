import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "../types/project"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-primary">{project.category}</div>
          <div className="flex space-x-2">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </Link>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {project.detailsUrl && (
          <Button variant="outline" asChild className="w-full mt-auto">
            <Link href={project.detailsUrl}>View Details</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

