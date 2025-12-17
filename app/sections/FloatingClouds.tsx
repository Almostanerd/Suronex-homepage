'use client'
import { motion } from 'framer-motion'

function CloudWithLock({
  className,
  delay = 0,
  xRange = [0, 50, 0], // Default horizontal movement
  yRange = [0, -30, 0], // Default vertical movement
  duration = 20,
}: {
  className: string
  delay?: number
  xRange?: number[]
  yRange?: number[]
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ 
        x: xRange, 
        y: yRange 
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse", // Makes it float back and forth smoothly
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* The Solid Blocky Cloud Shape you liked */}
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 100c-25 0-45-20-45-45s20-45 45-45c5-0 10 1 15 3 10-18 30-30 55-30 35 0 63 25 65 58 15 2 30 15 30 34 0 20-16 35-35 35H50z"
            fill="#FFFFFF" 
          />
        </svg>

        {/* Lock Symbol Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#475569" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function FloatingClouds() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Left Cloud - Drifts far to the right and back */}
      <CloudWithLock 
        className="absolute left-10 top-20 w-48" 
        xRange={[0, 100, 0]} 
        yRange={[0, -40, 0]}
        duration={25}
      />

      {/* Right Cloud - Drifts to the left and up */}
      <CloudWithLock 
        className="absolute right-20 top-40 w-56" 
        delay={2}
        xRange={[0, -80, 0]}
        yRange={[0, -50, 0]}
        duration={30}
      />

      {/* Bottom Cloud - Long horizontal drift */}
      <CloudWithLock 
        className="absolute left-1/3 bottom-20 w-64" 
        delay={5}
        xRange={[0, 150, 0]} // Moves 150px across screen
        yRange={[0, 20, 0]}
        duration={35}
      />
    </div>
  )
}