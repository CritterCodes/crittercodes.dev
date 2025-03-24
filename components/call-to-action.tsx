import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-muted rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business Processes?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to streamline your workflows and boost productivity with custom solutions tailored to
              your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">Explore My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

