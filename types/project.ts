export interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  detailsUrl?: string
  featured: boolean
  type: "client" | "personal"
}

