import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Code, GraduationCap, Terminal, MapPin, Gem } from "lucide-react"
import Timeline from "@/components/timeline"

export default function AboutPage() {
  // Calculate age based on birthdate
  const birthDate = new Date("1994-12-04")
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse"></div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Jacob Engel - Critter"
            width={400}
            height={400}
            className="rounded-xl object-cover relative z-10"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-muted rounded-xl border flex items-center justify-center">
            <Terminal className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm">Full-Stack Developer</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Jacob "Critter" Engel</h1>
          <p className="text-xl text-muted-foreground">
            I'm a {age}-year-old passionate full-stack developer and jewelry business owner with a love for
            problem-solving and design. I specialize in business process automation and e-commerce solutions, creating
            efficient systems that help businesses streamline their operations.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <Code className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Web Development</div>
                  <div className="font-medium">Since 2021</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <Gem className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Jewelry Business</div>
                  <div className="font-medium">Engel Fine Design</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                  <div className="font-medium">ARCA, FreeCodeCamp</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Fort Smith, AR</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">My Journey</h2>
        <Timeline />
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">React</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Shopify</Badge>
                  <span className="text-muted-foreground">Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <span className="text-muted-foreground">Advanced</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                Backend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Express</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">SQL</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Business Skills
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">E-commerce</Badge>
                  <span className="text-muted-foreground">Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Process Automation</Badge>
                  <span className="text-muted-foreground">Intermediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Problem Solving</Badge>
                  <span className="text-muted-foreground">Advanced</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Design</Badge>
                  <span className="text-muted-foreground">Advanced</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-24 space-y-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">My Story</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            My journey into web development began in 2021 when I completed my first course with FreeCodeCamp.org,
            earning a certification in Responsive Web Design. This foundation sparked my passion for creating digital
            solutions.
          </p>
          <p>
            In 2022, I applied my newfound skills to my jewelry business, Engel Fine Design, by building and managing a
            Shopify website. This practical experience led to my first client, Oscilation Devices, for whom I built and
            continue to manage their e-commerce platform. I've also contributed to other Shopify projects like
            Myntwave.shop.
          </p>
          <p>
            To expand my technical expertise, I completed an SQL Bootcamp with Arkansas Code Academy in November 2023,
            followed by a comprehensive 6-month Node.js/MongoDB course from January to June 2024. This education
            prepared me for my first major contract in August 2024, where I developed a reporting application that
            automated manual Excel processes, saving my client approximately 20 hours per month.
          </p>
          <p>
            Since then, I've designed websites for two tattoo artists and two non-profit organizations. For my own
            jewelry business, I built a repair ticketing application that streamlines workflow, reduces liability
            through photo documentation, and improves customer service with printed repair tickets.
          </p>
          <p>
            I bring a unique perspective to web development through my experience as a business owner. I understand
            firsthand the challenges businesses face and how technology can solve real-world problems. My dual
            background in jewelry design and web development gives me a keen eye for detail and aesthetics while
            maintaining functionality.
          </p>
        </div>
      </div>
    </div>
  )
}

