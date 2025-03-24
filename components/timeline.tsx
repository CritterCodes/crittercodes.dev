import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Gem } from "lucide-react"

export default function Timeline() {
  const timelineItems = [
    {
      year: "2024",
      title: "First Major Contract",
      company: "Business Reporting Application",
      description:
        "Developed a reporting application that saved the client approximately 20 hours per month by automating manual Excel processes.",
      icon: Briefcase,
    },
    {
      year: "2024",
      title: "Node.js/MongoDB Certification",
      company: "Arkansas Code Academy",
      description: "Completed a 6-month intensive course on Node.js and MongoDB development from January to June.",
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: "SQL Bootcamp",
      company: "Arkansas Code Academy",
      description: "Completed SQL Bootcamp certification in November, expanding database management skills.",
      icon: GraduationCap,
    },
    {
      year: "2022",
      title: "First Client Website",
      company: "Oscilation Devices",
      description:
        "Built and managed first client Shopify e-commerce website, expanding into professional web development.",
      icon: Briefcase,
    },
    {
      year: "2022",
      title: "E-commerce Launch",
      company: "Engel Fine Design",
      description: "Applied web development skills to build a Shopify website for my jewelry business.",
      icon: Gem,
    },
    {
      year: "2021",
      title: "Web Development Certification",
      company: "FreeCodeCamp.org",
      description:
        "Earned Responsive Web Design certification in July, marking the beginning of my web development journey.",
      icon: Award,
    },
  ]

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent md:before:mx-auto md:before:left-0 md:before:right-0">
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary z-10 md:mx-auto md:relative md:left-0 md:right-0">
            <item.icon className="h-5 w-5" />
          </div>
          <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-primary font-semibold">{item.year}</span>
                  <span className="text-base font-bold">{item.title}</span>
                  <span className="text-sm text-muted-foreground">{item.company}</span>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

