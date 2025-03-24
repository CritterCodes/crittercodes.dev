"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with React and Next.js",
    icon: Layout,
    delay: 0,
  },
  {
    title: "Backend Development",
    description: "Building robust APIs and server-side applications with Node.js and Express",
    icon: Server,
    delay: 100,
  },
  {
    title: "Database Design",
    description: "Designing and implementing efficient database solutions with MongoDB",
    icon: Database,
    delay: 200,
  },
  {
    title: "Process Automation",
    description: "Streamlining business workflows to increase efficiency and productivity",
    icon: Settings,
    delay: 300,
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    delay: 400,
  },
  {
    title: "Game Development",
    description: "Creating engaging games like Critter Run for web and mobile platforms",
    icon: Code,
    delay: 500,
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Skills & Expertise</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I specialize in full-stack development with a focus on business process automation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden transition-all duration-700 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ transitionDelay: `${skill.delay}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

