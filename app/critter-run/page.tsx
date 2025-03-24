import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Gamepad2 } from "lucide-react"

export default function CritterRunPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="px-3 py-1 text-sm">Game Development</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Critter Run</h1>
          <p className="text-xl text-muted-foreground">
            An exciting endless runner game where you navigate obstacles, collect gems, and compete for the highest
            score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/critter-run/game">
                <Gamepad2 className="w-5 h-5" />
                Play Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" disabled>
              <Download className="w-5 h-5" />
              Download
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Plays</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">Web</div>
              <div className="text-sm text-muted-foreground">Platform</div>
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl">
          <Link href="/critter-run/game">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] to-[#4682B4]"></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-contain bg-repeat-x"
                style={{ backgroundImage: "url('/imgs/critter-run/city.png')" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[5%] bg-contain bg-repeat-x"
                style={{ backgroundImage: "url('/imgs/critter-run/road.png')" }}
              ></div>
              <div className="absolute bottom-[5%] left-[10%] h-[15%] w-auto">
                <Image
                  src="/imgs/critter-run/critter.png"
                  alt="Critter"
                  width={50}
                  height={50}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="absolute bottom-[5%] right-[30%] h-[12%] w-auto">
                <Image
                  src="/imgs/critter-run/trashcan.png"
                  alt="Trash Can"
                  width={40}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="absolute bottom-[25%] right-[50%] h-[10%] w-auto">
                <Image
                  src="/imgs/critter-run/gem.png"
                  alt="Gem"
                  width={30}
                  height={30}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="icon" className="w-16 h-16 rounded-full">
                <ArrowRight className="w-8 h-8" />
              </Button>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-24 space-y-12">
        <h2 className="text-3xl font-bold text-center">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-muted rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Intuitive Controls</h3>
            <p className="text-muted-foreground">
              Simple space bar controls make the game easy to learn but challenging to master.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Gem Collection</h3>
            <p className="text-muted-foreground">
              Collect gems as you run to increase your wallet and unlock future features.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Progressive Difficulty</h3>
            <p className="text-muted-foreground">
              The game gets faster as your score increases, providing a continuously challenging experience.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Play?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <Link href="/critter-run/game">
              <Gamepad2 className="w-5 h-5" />
              Play Now
            </Link>
          </Button>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gap-2">
              Contact for Development
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

