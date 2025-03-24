import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "FabLab Fort Smith",
    description:
      "A membership-based community makerspace website with authentication, payment processing, and email functionality.",
    image: "/imgs/projects/fablab.png",
    category: "Non-Profit",
    technologies: ["Next.js", "Auth.js", "Nodemailer", "Square API", "Tailwind CSS"],
    githubUrl: "https://github.com/CritterCodes/The-Lab",
    liveUrl: "https://fablabfortsmith.org",
    detailsUrl: "/portfolio/fablab-fort-smith",
    featured: true,
    type: "client",
  },
  {
    id: 2,
    title: "Lambda Society Fort Smith",
    description:
      "A non-profit organization website featuring donation capabilities, event calendar, volunteer signup, and organization information.",
    image: "/imgs/projects/lambda.png",
    category: "Non-Profit",
    technologies: ["Next.js", "React", "Tailwind CSS", "Email.js"],
    githubUrl: "https://github.com/CritterCodes",
    liveUrl: "https://fslambda.org",
    detailsUrl: "/portfolio/lambda-society",
    featured: true,
    type: "client",
  },
  {
    id: 3,
    title: "Jewelry Repair Ticketing System",
    description:
      "Custom repair tracking application for Engel Fine Design that manages repair jobs, reduces liability through photo documentation, and improves customer service.",
    image: "/imgs/projects/repair-efd.png",
    category: "Business Automation",
    technologies: ["Next.js", "Material UI", "MongoDB", "Toolpad Core"],
    githubUrl: "https://github.com/CritterCodes/efd-toolpad",
    liveUrl: "https://repair.engelfinedesign.com",
    detailsUrl: "/portfolio/repair-ticketing",
    featured: true,
    type: "personal",
  },
  {
    id: 4,
    title: "Austin Anderson Tattoo",
    description:
      "Professional portfolio website for a tattoo artist featuring business information, booking integration with Square, gallery of past work, rates, and policies.",
    image: "/imgs/projects/austin-anderson.jpeg",
    category: "Portfolio Website",
    technologies: ["React", "Express", "Bootstrap", "Material UI", "Nodemailer"],
    githubUrl: "https://github.com/CritterCodes",
    liveUrl: "https://austinanderson.ink",
    detailsUrl: "/portfolio/austin-anderson",
    featured: false,
    type: "client",
  },
  {
    id: 5,
    title: "Monty Kane Tattoos",
    description:
      "Portfolio website for a tattoo artist showcasing their work, booking system, rates, and tattoo policies.",
    image: "/imgs/projects/monty-kane.jpeg",
    category: "Portfolio Website",
    technologies: ["React", "Express", "Bootstrap", "Material UI", "Nodemailer"],
    githubUrl: "https://github.com/CritterCodes",
    liveUrl: "https://montykane.ink",
    detailsUrl: "/portfolio/monty-kane",
    featured: false,
    type: "client",
  },
  {
    id: 6,
    title: "Oscillation Devices",
    description:
      "E-commerce website built on Shopify for a client selling jewelry and gemstones, featuring product catalog, checkout, and inventory management.",
    image: "/imgs/projects/oscillation.png",
    category: "E-commerce",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"],
    githubUrl: "",
    liveUrl: "https://oscillationdevices.com",
    detailsUrl: "/portfolio/oscillation-devices",
    featured: true,
    type: "client",
  },
  {
    id: 7,
    title: "Engel Fine Design",
    description:
      "E-commerce website for my personal jewelry business, featuring product catalog, custom order requests, and repair services information.",
    image: "/imgs/projects/engel-fine-design.png",
    category: "E-commerce",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"],
    githubUrl: "",
    liveUrl: "https://shop.engelfinedesign.com",
    detailsUrl: "/portfolio/engel-fine-design",
    featured: false,
    type: "personal",
  },
  {
    id: 8,
    title: "Business Reporting Application",
    description:
      "Automated reporting system that generates reports for paying banks and agents, saving the client approximately 20 hours per month.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Business Automation",
    technologies: ["React", "Express", "MongoDB", "Material UI"],
    githubUrl: "",
    liveUrl: "",
    detailsUrl: "/portfolio/reporting-app",
    featured: false,
    type: "client",
  },
  {
    id: 9,
    title: "Rafflr.xyz",
    description:
      "A SaaS application allowing users to host live online raffles, built with React, Material UI, MongoDB, and WebSocket for real-time functionality.",
    image: "/placeholder.svg?height=400&width=600",
    category: "SaaS Application",
    technologies: ["React", "Material UI", "MongoDB", "WebSocket", "Next.js"],
    githubUrl: "https://github.com/CritterCodes",
    liveUrl: "https://rafflr.xyz",
    detailsUrl: "/portfolio/rafflr",
    featured: false,
    type: "personal",
  },
  {
    id: 10,
    title: "Pholio.ink",
    description:
      "A multi-tenant website builder for tattoo artists to create and manage their portfolio sites, currently in development.",
    image: "/placeholder.svg?height=400&width=600",
    category: "SaaS Application",
    technologies: ["Next.js", "MongoDB", "Material UI", "React"],
    githubUrl: "https://github.com/CritterCodes/pholio-nextjs",
    liveUrl: "https://pholio.ink",
    detailsUrl: "/portfolio/pholio",
    featured: false,
    type: "personal",
  },
  {
    id: 11,
    title: "Critter Run",
    description: "An endless runner game with custom physics and progressive difficulty scaling.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Game Development",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "React"],
    githubUrl: "https://github.com/CritterCodes",
    liveUrl: "",
    detailsUrl: "/critter-run",
    featured: false,
    type: "personal",
  },
]

