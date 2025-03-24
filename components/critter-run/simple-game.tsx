"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./game.module.css"

interface GameProps {
  onGameOver: (score: number, gems: number) => void
  isActive: boolean
  onStart: () => void
}

export default function SimpleGame({ onGameOver, isActive, onStart }: GameProps) {
  // Game state
  const [score, setScore] = useState(0)
  const [gems, setGems] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [jumpHeight, setJumpHeight] = useState(0)
  const [showStart, setShowStart] = useState(true)

  // Game elements
  const [obstacles, setObstacles] = useState<{ id: number; left: number }[]>([])
  const [gameGems, setGameGems] = useState<{ id: number; left: number; bottom: number }[]>([])
  const [ground1, setGround1] = useState(0)
  const [ground2, setGround2] = useState(100)
  const [city1, setCity1] = useState(0)
  const [city2, setCity2] = useState(100)

  // Refs
  const gameRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>()
  const jumpVelocity = useRef(0)
  const obstacleTimer = useRef(0)
  const gemTimer = useRef(0)
  const nextId = useRef(1)

  // Start/stop game
  useEffect(() => {
    if (isActive) {
      // Reset game state
      setScore(0)
      setGems(0)
      setJumpHeight(0)
      setIsJumping(false)
      setObstacles([])
      setGameGems([])
      setGround1(0)
      setGround2(100)
      setCity1(0)
      setCity2(100)

      jumpVelocity.current = 0
      obstacleTimer.current = 0
      gemTimer.current = 0
      nextId.current = 1

      // Start game loop
      let lastTime = 0

      const gameLoop = (time: number) => {
        if (!isActive) return

        const delta = lastTime === 0 ? 0 : time - lastTime
        lastTime = time

        // Update score
        setScore((prev) => prev + delta * 0.01)

        // Update jump
        if (isJumping) {
          jumpVelocity.current -= 0.002 * delta // gravity
          setJumpHeight((prev) => {
            const newHeight = prev + jumpVelocity.current * delta
            if (newHeight <= 0) {
              setIsJumping(false)
              jumpVelocity.current = 0
              return 0
            }
            return newHeight
          })
        }

        // Update ground
        setGround1((prev) => (prev <= -100 ? prev + 200 : prev - 0.05 * delta))
        setGround2((prev) => (prev <= -100 ? prev + 200 : prev - 0.05 * delta))

        // Update city
        setCity1((prev) => (prev <= -100 ? prev + 200 : prev - 0.02 * delta))
        setCity2((prev) => (prev <= -100 ? prev + 200 : prev - 0.02 * delta))

        // Update obstacles
        obstacleTimer.current -= delta
        if (obstacleTimer.current <= 0) {
          setObstacles((prev) => [...prev, { id: nextId.current, left: 100 }])
          nextId.current++
          obstacleTimer.current = Math.random() * 1500 + 1500
        }

        setObstacles((prev) =>
          prev.map((obs) => ({ ...obs, left: obs.left - 0.05 * delta })).filter((obs) => obs.left > -10),
        )

        // Update gems
        gemTimer.current -= delta
        if (gemTimer.current <= 0) {
          setGameGems((prev) => [
            ...prev,
            {
              id: nextId.current,
              left: 100,
              bottom: Math.random() * 30 + 20,
            },
          ])
          nextId.current++
          gemTimer.current = Math.random() * 2000 + 2000
        }

        setGameGems((prev) =>
          prev.map((gem) => ({ ...gem, left: gem.left - 0.05 * delta })).filter((gem) => gem.left > -10),
        )

        // Check collisions
        checkCollisions()

        frameRef.current = requestAnimationFrame(gameLoop)
      }

      frameRef.current = requestAnimationFrame(gameLoop)
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isActive])

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault()

        if (showStart) {
          setShowStart(false)
          onStart()
        } else if (isActive && !isJumping) {
          jump()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isActive, isJumping, showStart, onStart])

  // Jump function
  const jump = () => {
    if (isJumping) return

    setIsJumping(true)
    jumpVelocity.current = 0.5
  }

  // Check collisions
  const checkCollisions = () => {
    if (!gameRef.current) return

    const character = gameRef.current.querySelector(`.${styles.character}`)
    if (!character) return

    const characterRect = character.getBoundingClientRect()

    // Check obstacle collisions
    const obstacleElements = gameRef.current.querySelectorAll(`.${styles.obstacle}`)
    for (const obstacle of obstacleElements) {
      const obstacleRect = obstacle.getBoundingClientRect()

      if (
        characterRect.right > obstacleRect.left &&
        characterRect.left < obstacleRect.right &&
        characterRect.bottom > obstacleRect.top &&
        characterRect.top < obstacleRect.bottom
      ) {
        // Collision detected
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
        onGameOver(Math.floor(score), gems)
        return
      }
    }

    // Check gem collisions
    const gemElements = gameRef.current.querySelectorAll(`.${styles.collectible}`)
    gemElements.forEach((gem) => {
      const gemRect = gem.getBoundingClientRect()

      if (
        characterRect.right > gemRect.left &&
        characterRect.left < gemRect.right &&
        characterRect.bottom > gemRect.top &&
        characterRect.top < gemRect.bottom
      ) {
        // Collect gem
        const id = Number(gem.getAttribute("data-id"))
        if (id) {
          setGameGems((prev) => prev.filter((g) => g.id !== id))
          setGems((prev) => prev + 1)
        }
      }
    })
  }

  // Handle click
  const handleClick = () => {
    if (showStart) {
      setShowStart(false)
      onStart()
    } else if (isActive && !isJumping) {
      jump()
    }
  }

  return (
    <div ref={gameRef} className={styles.world} onClick={handleClick} tabIndex={0}>
      {showStart && <div className={styles.startScreen}>Press Space or Click to Start</div>}

      <div className={styles.scoreBoard}>
        <div className={styles.score}>Score: {Math.floor(score)}</div>
        <div className={styles.gems}>Gems: {gems}</div>
      </div>

      {/* City background */}
      <div className={styles.city} style={{ left: `${city1}%` }} />
      <div className={styles.city} style={{ left: `${city2}%` }} />

      {/* Ground */}
      <img src="/imgs/critter-run/road.png" className={styles.ground} style={{ left: `${ground1}%` }} alt="Ground" />
      <img src="/imgs/critter-run/road.png" className={styles.ground} style={{ left: `${ground2}%` }} alt="Ground" />

      {/* Character */}
      <img
        src="/imgs/critter-run/critter.png"
        className={styles.character}
        style={{ bottom: `${jumpHeight + 4}%` }}
        alt="Critter"
      />

      {/* Obstacles */}
      {obstacles.map((obstacle) => (
        <img
          key={obstacle.id}
          src="/imgs/critter-run/trashcan.png"
          className={styles.obstacle}
          style={{ left: `${obstacle.left}%` }}
          data-id={obstacle.id}
          alt="Obstacle"
        />
      ))}

      {/* Collectibles */}
      {gameGems.map((gem) => (
        <img
          key={gem.id}
          src="/imgs/critter-run/gem.png"
          className={styles.collectible}
          style={{
            left: `${gem.left}%`,
            bottom: `${gem.bottom}%`,
          }}
          data-id={gem.id}
          alt="Gem"
        />
      ))}
    </div>
  )
}

