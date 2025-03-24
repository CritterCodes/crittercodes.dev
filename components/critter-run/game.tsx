"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./game.module.css"

interface CritterRunGameProps {
  onGameOver: (score: number, gems: number) => void
  isActive: boolean
  onStart: () => void
}

export default function CritterRunGame({ onGameOver, isActive, onStart }: CritterRunGameProps) {
  // Game state
  const [showStartScreen, setShowStartScreen] = useState(true)
  const [score, setScore] = useState(0)
  const [gems, setGems] = useState(0)
  const [position, setPosition] = useState(0) // 0 = on ground, positive = in air

  // Game elements
  const [obstacles, setObstacles] = useState<{ id: number; position: number }[]>([])
  const [collectibles, setCollectibles] = useState<{ id: number; position: number; height: number }[]>([])

  // Game refs
  const gameRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const speedRef = useRef<number>(1)
  const jumpingRef = useRef<boolean>(false)
  const velocityRef = useRef<number>(0)
  const obstacleTimerRef = useRef<number>(0)
  const collectibleTimerRef = useRef<number>(0)
  const nextIdRef = useRef<number>(1)
  const groundPositionRef = useRef<{ left1: number; left2: number }>({ left1: 0, left2: 100 })
  const cityPositionRef = useRef<{ left1: number; left2: number }>({ left1: 0, left2: 100 })

  // Game constants
  const GRAVITY = 0.0015
  const JUMP_STRENGTH = 0.5
  const OBSTACLE_SPEED = 0.05
  const GROUND_SPEED = 0.05
  const CITY_SPEED = 0.02

  // Handle key presses - Simplified to focus on spacebar functionality
  useEffect(() => {
    // Set up event listeners for jumping
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.key === " ") && isActive) {
        e.preventDefault()
        jump()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive])

  // Initialize game
  useEffect(() => {
    if (isActive) {
      // Reset game state
      setPosition(0)
      setScore(0)
      setGems(0)
      setObstacles([])
      setCollectibles([])

      jumpingRef.current = false
      velocityRef.current = 0
      speedRef.current = 1
      lastTimeRef.current = 0
      obstacleTimerRef.current = 2000
      collectibleTimerRef.current = 3000
      nextIdRef.current = 1
      groundPositionRef.current = { left1: 0, left2: 100 }
      cityPositionRef.current = { left1: 0, left2: 100 }

      // Start game loop
      animationRef.current = requestAnimationFrame(gameLoop)
    } else {
      // Stop game loop
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isActive])

  // Setup game elements
  const setupGame = () => {
    // Reset game state
    // scoreRef.current = 0
    // gemsCollectedRef.current = 0
    // speedScaleRef.current = 1
    // setScore(0)
    // setGems(0)
    // setDinoBottom(0)
    // setIsJumping(false)
    // setYVelocity(0)
    // // Clear existing elements
    // setCacti([])
    // setGameGems([])
    // // Reset positions
    // setGroundPosition({ left1: 0, left2: 100 })
    // setCityPosition({ left1: 0, left2: 100 })
    // // Reset timers
    // cactusTimerRef.current = 2000
    // gemTimerRef.current = 3000
    // nextCactusId.current = 1
    // nextGemId.current = 1
  }

  // Main game loop
  const updateGame = (time: number) => {
    // if (!isActive) return
    // if (lastTimeRef.current === 0) {
    //   lastTimeRef.current = time
    //   requestRef.current = requestAnimationFrame(updateGame)
    //   return
    // }
    // const delta = time - lastTimeRef.current
    // lastTimeRef.current = time
    // // Update game elements
    // updateGround(delta)
    // updateCity(delta)
    // updateDino(delta)
    // updateCacti(delta)
    // updateGems(delta)
    // // Update score and speed
    // updateScore(delta)
    // // Check for collisions
    // if (checkCollision()) {
    //   gameOver()
    //   return
    // }
    // requestRef.current = requestAnimationFrame(updateGame)
  }

  // Update score and speed scale
  const updateScore = (delta: number) => {
    // scoreRef.current += delta * 0.01
    // speedScaleRef.current += delta * SPEED_SCALE_INCREASE
    // setScore(Math.floor(scoreRef.current))
  }

  // Handle jumping - Simplified to always allow jumping when active
  const jump = () => {
    // if (!isActive) return
    // // Only allow jumping if not already in the air
    // if (dinoBottom <= 0) {
    //   setIsJumping(true)
    //   setYVelocity(JUMP_SPEED)
    //   // Debug log to confirm jump was triggered
    //   console.log("Jump triggered!")
    // }
  }

  // Update dino position
  const updateDino = (delta: number) => {
    // if (isJumping) {
    //   setDinoBottom((prev) => {
    //     const newBottom = prev + yVelocity * delta
    //     // If we've hit the ground
    //     if (newBottom <= 0) {
    //       setIsJumping(false)
    //       setYVelocity(0)
    //       return 0
    //     }
    //     // Update velocity (gravity)
    //     setYVelocity((prev) => prev - GRAVITY * delta)
    //     return newBottom
    //   })
    // }
  }

  // Update ground position
  const updateGround = (delta: number) => {
    // setGroundPosition((prev) => {
    //   const newLeft1 = prev.left1 - delta * speedScaleRef.current * GROUND_SPEED
    //   const newLeft2 = prev.left2 - delta * speedScaleRef.current * GROUND_SPEED
    //   return {
    //     left1: newLeft1 <= -100 ? newLeft1 + 200 : newLeft1,
    //     left2: newLeft2 <= -100 ? newLeft2 + 200 : newLeft2,
    //   }
    // })
  }

  // Update city position
  const updateCity = (delta: number) => {
    // setCityPosition((prev) => {
    //   const newLeft1 = prev.left1 - delta * speedScaleRef.current * CITY_SPEED
    //   const newLeft2 = prev.left2 - delta * speedScaleRef.current * CITY_SPEED
    //   return {
    //     left1: newLeft1 <= -100 ? newLeft1 + 200 : newLeft1,
    //     left2: newLeft2 <= -100 ? newLeft2 + 200 : newLeft2,
    //   }
    // })
  }

  // Update cacti
  const updateCacti = (delta: number) => {
    // // Move existing cacti
    // setCacti((prev) => {
    //   const updatedCacti = prev
    //     .map((cactus) => ({
    //       ...cactus,
    //       left: cactus.left - delta * speedScaleRef.current * CACTUS_SPEED,
    //     }))
    //     .filter((cactus) => cactus.left > -10)
    //   return updatedCacti
    // })
    // // Spawn new cactus
    // cactusTimerRef.current -= delta * speedScaleRef.current
    // if (cactusTimerRef.current <= 0) {
    //   createCactus()
    //   cactusTimerRef.current = randomNumberBetween(1500, 3000) / speedScaleRef.current
    // }
  }

  // Create a new cactus
  const createCactus = () => {
    // setCacti((prev) => [...prev, { id: nextCactusId.current, left: 100 }])
    // nextCactusId.current++
  }

  // Update gems
  const updateGems = (delta: number) => {
    // // Move existing gems
    // setGameGems((prev) => {
    //   const updatedGems = prev
    //     .map((gem) => ({
    //       ...gem,
    //       left: gem.left - delta * speedScaleRef.current * GEM_SPEED,
    //     }))
    //     .filter((gem) => gem.left > -10)
    //   return updatedGems
    // })
    // // Spawn new gem
    // gemTimerRef.current -= delta * speedScaleRef.current
    // if (gemTimerRef.current <= 0) {
    //   createGem()
    //   gemTimerRef.current = randomNumberBetween(2000, 4000) / speedScaleRef.current
    // }
    // // Check for gem collection
    // checkGemCollection()
  }

  // Create a new gem
  const createGem = () => {
    // setGameGems((prev) => [
    //   ...prev,
    //   {
    //     id: nextGemId.current,
    //     left: 100,
    //     bottom: randomNumberBetween(20, 50),
    //   },
    // ])
    // nextGemId.current++
  }

  // Check for gem collection
  const checkGemCollection = () => {
    // if (!gameRef.current) return
    // const dinoElem = gameRef.current.querySelector(`.${styles.dino}`) as HTMLElement
    // if (!dinoElem) return
    // const dinoRect = dinoElem.getBoundingClientRect()
    // const gemElems = gameRef.current.querySelectorAll(`.${styles.gem}`)
    // gemElems.forEach((gemElem) => {
    //   const gemRect = gemElem.getBoundingClientRect()
    //   if (isCollision(dinoRect, gemRect)) {
    //     // Find the gem ID from the dataset
    //     const gemId = Number(gemElem.getAttribute("data-id"))
    //     if (gemId) {
    //       // Remove the gem
    //       setGameGems((prev) => prev.filter((gem) => gem.id !== gemId))
    //       // Increment gems collected
    //       gemsCollectedRef.current++
    //       setGems(gemsCollectedRef.current)
    //     }
    //   }
    // })
  }

  // Check for collision with cacti
  const checkCollision = () => {
    // if (!gameRef.current) return false
    // const dinoElem = gameRef.current.querySelector(`.${styles.dino}`) as HTMLElement
    // if (!dinoElem) return false
    // const dinoRect = dinoElem.getBoundingClientRect()
    // const cactusElems = gameRef.current.querySelectorAll(`.${styles.cactus}`)
    // for (const cactusElem of cactusElems) {
    //   const cactusRect = cactusElem.getBoundingClientRect()
    //   if (isCollision(dinoRect, cactusRect)) {
    //     return true
    //   }
    // }
    // return false
  }

  // Check if two rectangles are colliding
  const isCollision = (rect1: DOMRect, rect2: DOMRect) => {
    // return rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.right > rect2.left && rect1.bottom > rect2.top
  }

  // Game over
  const gameOver = () => {
    // onGameOver(Math.floor(scoreRef.current), gemsCollectedRef.current)
  }

  // Helper function for random numbers
  const randomNumberBetween = (min: number, max: number) => {
    // return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // Handle click to start game or jump
  const handleClick = () => {
    // if (showStartScreen) {
    //   setShowStartScreen(false)
    //   onStart()
    // } else if (isActive) {
    //   jump()
    // }
  }

  // Game loop function
  const gameLoop = (timestamp: number) => {
    if (!isActive) return

    if (lastTimeRef.current === 0) {
      lastTimeRef.current = timestamp
      animationRef.current = requestAnimationFrame(gameLoop)
      return
    }

    const deltaTime = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp

    // Update score
    const newScore = score + deltaTime * 0.01
    setScore(Math.floor(newScore))

    // Update speed
    speedRef.current += deltaTime * 0.00001

    // Update character position (jumping)
    if (jumpingRef.current) {
      velocityRef.current -= GRAVITY * deltaTime
      const newPosition = position + velocityRef.current * deltaTime

      if (newPosition <= 0) {
        // Hit the ground
        setPosition(0)
        jumpingRef.current = false
        velocityRef.current = 0
      } else {
        setPosition(newPosition)
      }
    }

    // Update ground position
    const groundSpeed = GROUND_SPEED * speedRef.current * deltaTime
    groundPositionRef.current = {
      left1: updatePosition(groundPositionRef.current.left1, groundSpeed, -100, 100),
      left2: updatePosition(groundPositionRef.current.left2, groundSpeed, -100, 100),
    }

    // Update city position
    const citySpeed = CITY_SPEED * speedRef.current * deltaTime
    cityPositionRef.current = {
      left1: updatePosition(cityPositionRef.current.left1, citySpeed, -100, 100),
      left2: updatePosition(cityPositionRef.current.left2, citySpeed, -100, 100),
    }

    // Update obstacles
    obstacleTimerRef.current -= deltaTime * speedRef.current
    if (obstacleTimerRef.current <= 0) {
      // Add new obstacle
      setObstacles((prev) => [...prev, { id: nextIdRef.current, position: 100 }])
      nextIdRef.current++
      obstacleTimerRef.current = Math.random() * 1500 + 1500 / speedRef.current
    }

    // Move obstacles
    setObstacles((prev) => {
      return prev
        .map((obstacle) => ({
          ...obstacle,
          position: obstacle.position - OBSTACLE_SPEED * speedRef.current * deltaTime,
        }))
        .filter((obstacle) => obstacle.position > -10)
    })

    // Update collectibles
    collectibleTimerRef.current -= deltaTime * speedRef.current
    if (collectibleTimerRef.current <= 0) {
      // Add new collectible
      setCollectibles((prev) => [
        ...prev,
        {
          id: nextIdRef.current,
          position: 100,
          height: Math.random() * 30 + 20,
        },
      ])
      nextIdRef.current++
      collectibleTimerRef.current = Math.random() * 2000 + 2000 / speedRef.current
    }

    // Move collectibles
    setCollectibles((prev) => {
      return prev
        .map((collectible) => ({
          ...collectible,
          position: collectible.position - OBSTACLE_SPEED * speedRef.current * deltaTime,
        }))
        .filter((collectible) => collectible.position > -10)
    })

    // Check collisions
    checkCollisions()

    // Continue game loop
    animationRef.current = requestAnimationFrame(gameLoop)
  }

  // Helper function to update positions with wraparound
  const updatePosition = (current: number, speed: number, min: number, max: number) => {
    const newPosition = current - speed
    if (newPosition <= min) {
      return newPosition + (max - min)
    }
    return newPosition
  }

  // Jump function
  const jumpFunc = () => {
    if (!jumpingRef.current && position === 0) {
      jumpingRef.current = true
      velocityRef.current = JUMP_STRENGTH
    }
  }

  // Check collisions
  const checkCollisions = () => {
    if (!gameRef.current) return

    const characterElem = gameRef.current.querySelector(`.${styles.character}`) as HTMLElement
    if (!characterElem) return

    const characterRect = characterElem.getBoundingClientRect()

    // Check obstacle collisions
    const obstacleElems = gameRef.current.querySelectorAll(`.${styles.obstacle}`)
    for (const obstacleElem of obstacleElems) {
      const obstacleRect = obstacleElem.getBoundingClientRect()
      if (isColliding(characterRect, obstacleRect)) {
        // Game over
        onGameOver(Math.floor(score), gems)
        return
      }
    }

    // Check collectible collisions
    const collectibleElems = gameRef.current.querySelectorAll(`.${styles.collectible}`)
    collectibleElems.forEach((collectibleElem) => {
      const collectibleRect = collectibleElem.getBoundingClientRect()
      if (isColliding(characterRect, collectibleRect)) {
        const id = Number(collectibleElem.getAttribute("data-id"))
        if (id) {
          // Collect gem
          setCollectibles((prev) => prev.filter((c) => c.id !== id))
          setGems((prev) => prev + 1)
        }
      }
    })
  }

  // Check if two rectangles are colliding
  const isColliding = (rect1: DOMRect, rect2: DOMRect) => {
    return rect1.left < rect2.right && rect1.top < rect2.bottom && rect1.right > rect2.left && rect1.bottom > rect2.top
  }

  // Handle start screen
  const handleStart = () => {
    setShowStartScreen(false)
    onStart()
  }

  return (
    <div
      ref={gameRef}
      className={styles.world}
      onClick={showStartScreen ? handleStart : jumpFunc}
      tabIndex={0} // Make div focusable to capture keyboard events
    >
      {showStartScreen && <div className={styles.startScreen}>Press Space or Click to Start</div>}

      <div className={styles.scoreBoard}>
        <div className={styles.score}>Score: {Math.floor(score)}</div>
        <div className={styles.gems}>Gems: {gems}</div>
      </div>

      {/* City background */}
      <div className={styles.city} style={{ left: `${cityPositionRef.current.left1}%` }} />
      <div className={styles.city} style={{ left: `${cityPositionRef.current.left2}%` }} />

      {/* Ground */}
      <img
        src="/imgs/critter-run/road.png"
        className={styles.ground}
        style={{ left: `${groundPositionRef.current.left1}%` }}
        alt="Ground"
      />
      <img
        src="/imgs/critter-run/road.png"
        className={styles.ground}
        style={{ left: `${groundPositionRef.current.left2}%` }}
        alt="Ground"
      />

      {/* Critter character */}
      <img
        src="/imgs/critter-run/critter.png"
        className={styles.character}
        style={{ bottom: `${position + 4}%` }}
        alt="Critter"
      />

      {/* Obstacles */}
      {obstacles.map((obstacle) => (
        <img
          key={obstacle.id}
          src="/imgs/critter-run/trashcan.png"
          className={styles.obstacle}
          style={{ left: `${obstacle.position}%` }}
          data-id={obstacle.id}
          alt="Obstacle"
        />
      ))}

      {/* Collectibles */}
      {collectibles.map((collectible) => (
        <img
          key={collectible.id}
          src="/imgs/critter-run/gem.png"
          className={styles.collectible}
          style={{
            left: `${collectible.position}%`,
            bottom: `${collectible.height}%`,
          }}
          data-id={collectible.id}
          alt="Gem"
        />
      ))}
    </div>
  )
}

