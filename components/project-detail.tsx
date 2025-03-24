import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectDetailProps {
  title: string
  description: string
  longDescription?: string
  image: string
  category: string
  technologies: string[]
  features: string[]
  challenges?: string[]
  solutions?: string[]
  githubUrl?: string
  liveUrl?: string
  screenshots?: { url: string; caption: string }[]
}

export function ProjectDetail({
  title,
  description,
  longDescription,
  image,
  category,
  technologies,
  features,
  challenges,
  solutions,
  githubUrl,
  liveUrl,
  screenshots,
}: ProjectDetailProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex items-center">
        <Button variant="outline" size="sm" asChild className="mr-4">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm">{category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {liveUrl && (
              <Button asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          {(challenges?.length || solutions?.length) && (
            <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            {longDescription && <div dangerouslySetInnerHTML={{ __html: longDescription }} />}
          </div>
          {screenshots && screenshots.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                      <Image
                        src={screenshot.url || "/placeholder.svg"}
                        alt={screenshot.caption}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">{screenshot.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value="features" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-4 mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </TabsContent>
        {(challenges?.length || solutions?.length) && (
          <TabsContent value="challenges" className="space-y-6">
            {challenges && challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <span className="text-destructive font-bold text-sm">{index + 1}</span>
                      </div>
                      <p>{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {solutions && solutions.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <p>{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

