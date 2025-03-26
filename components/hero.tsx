"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [text, setText] = useState("")
  const phrases = [
    "Business Automation Specialist",
    "Full-Stack Developer",
    "Next.js & Node.js Expert",
    "Problem Solver",
    "MongoDB Developer",
  ]
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const codeBlockRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (codeBlockRef.current) {
      observer.observe(codeBlockRef.current)
    }

    return () => {
      if (codeBlockRef.current) {
        observer.unobserve(codeBlockRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // Pause at the end of typing
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        // Move to the next phrase
        setIsDeleting(false)
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
        setTypingSpeed(100)
      } else {
        // Typing or deleting
        setText((prev) => {
          if (isDeleting) {
            setTypingSpeed(50)
            return prev.substring(0, prev.length - 1)
          } else {
            setTypingSpeed(100)
            return currentPhrase.substring(0, prev.length + 1)
          }
        })
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, currentPhraseIndex, isDeleting, phrases, typingSpeed])

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 code-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm Jacob <span className="text-primary">"Critter"</span> Engel
            </h1>
            <div className="h-12">
              <p className="text-2xl md:text-3xl font-medium typing-animation">{text}</p>
            </div>
            <p className="text-xl text-muted-foreground">
              I specialize in business process automation and web application development, combining technical expertise
              with practical business insights to create solutions that streamline operations and solve real-world
              problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div
            ref={codeBlockRef}
            className={cn(
              "bg-muted p-4 rounded-lg border shadow-lg transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-muted-foreground">critter.js</div>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>
                <span className="text-blue-500">class</span> <span className="text-green-500">Developer</span> {"{"}
                <br />
                {"  "}
                <span className="text-blue-500">constructor</span>() {"{"}
                <br />
                {"    "}this.<span className="text-purple-500">name</span> ={" "}
                <span className="text-amber-500">"Jacob 'Critter' Engel"</span>;
                <br />
                {"    "}this.<span className="text-purple-500">skills</span> = [
                <span className="text-amber-500">"Next.js"</span>, <span className="text-amber-500">"Node.js"</span>,{" "}
                <span className="text-amber-500">"MongoDB"</span>, <span className="text-amber-500">"React"</span>];
                <br />
                {"    "}this.<span className="text-purple-500">passion</span> ={" "}
                <span className="text-amber-500">"Business Automation & Problem Solving"</span>;
                <br />
                {"  }"}
                {"}"}
                <br />
                <br />
                {"  "}
                <span className="text-blue-500">createSolution</span>(
                <span className="text-purple-500">businessProcess</span>) {"{"}
                <br />
                {"    "}
                <span className="text-blue-500">return</span>{" "}
                <span className="text-amber-500">`Streamlined solution for </span>${"{"}businessProcess{"}"}
                <span className="text-amber-500"> saving time and resources`</span>;
                <br />
                {"  }"}
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
                <span className="text-gray-500">// Initialize a business automation specialist</span>
                <br />
                <span className="text-blue-500">const</span> <span className="text-purple-500">critter</span> ={" "}
                <span className="text-blue-500">new</span> <span className="text-green-500">Developer</span>();
                <br />
                <span className="text-purple-500">critter</span>.<span className="text-blue-500">createSolution</span>(
                <span className="text-amber-500">"your business processes"</span>);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

