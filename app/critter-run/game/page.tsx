"use client"

import { useEffect, useState } from "react"
import SimpleGame from "@/components/critter-run/simple-game"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function CritterRunGamePage() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gemsCollected, setGemsCollected] = useState(0)
  const [gemWallet, setGemWallet] = useState(0)
  const [gameActive, setGameActive] = useState(false)

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem("critterRunHighScore")
    if (savedHighScore) {
      setHighScore(Number.parseInt(savedHighScore))
    }

    // Load gem wallet from localStorage
    const savedGemWallet = localStorage.getItem("critterRunGemWallet")
    if (savedGemWallet) {
      setGemWallet(Number.parseInt(savedGemWallet))
    }

    // Prevent space key from scrolling the page
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleGameOver = (finalScore: number, gems: number) => {
    setScore(finalScore)
    setGemsCollected(gems)
    setGameActive(false)

    // Update high score if needed
    if (finalScore > highScore) {
      setHighScore(finalScore)
      localStorage.setItem("critterRunHighScore", finalScore.toString())
    }

    // Update gem wallet
    const newGemWallet = gemWallet + gems
    setGemWallet(newGemWallet)
    localStorage.setItem("critterRunGemWallet", newGemWallet.toString())
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setGemsCollected(0)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <Button variant="outline" size="sm" asChild className="mr-4">
          <Link href="/critter-run">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Critter Run
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Critter Run Game</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-muted rounded-lg overflow-hidden border shadow-md">
            <SimpleGame onGameOver={handleGameOver} isActive={gameActive} onStart={startGame} />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <h2 className="text-xl font-bold mb-4">Game Stats</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Current Score:</span>
                <span className="font-bold">{score}</span>
              </div>
              <div className="flex justify-between">
                <span>High Score:</span>
                <span className="font-bold">{highScore}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Gems Collected:</span>
                <div className="flex items-center">
                  <span className="font-bold mr-1">{gemsCollected}</span>
                  <Image src="/imgs/critter-run/gem.png" alt="Gem" width={16} height={16} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Gem Wallet:</span>
                <div className="flex items-center">
                  <span className="font-bold mr-1">{gemWallet}</span>
                  <Image src="/imgs/critter-run/gem.png" alt="Gem" width={16} height={16} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="text-xl font-bold mb-4">How to Play</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                Press <kbd className="px-2 py-1 bg-muted rounded">Space</kbd> to jump
              </li>
              <li>Jump over trash cans to avoid collision</li>
              <li>Collect gems to increase your wallet</li>
              <li>The game speeds up as your score increases</li>
              <li>Click anywhere on the game to jump (mobile-friendly)</li>
            </ul>
          </Card>

          {!gameActive && (
            <Button className="w-full" onClick={startGame}>
              {score > 0 ? "Play Again" : "Start Game"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

