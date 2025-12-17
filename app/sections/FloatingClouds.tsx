'use client'
import { motion } from 'framer-motion'

function CloudWithLock({
  className,
  delay = 0,
  // Reduced default ranges slightly for better mobile baseline
  xRange = [0, 30, 0], 
  yRange = [0, -20, 0],
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
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Cloud Shape */}
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

        {/* Lock Symbol Center - Scaled down slightly for better fit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-5 h-5 md:w-6 md:h-6" // Responsive icon size
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
    // Added overflow-x-hidden explicitly to prevent horizontal scrollbar on mobile
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden overflow-x-hidden">
      
      {/* Left Cloud */}
      {/* Mobile: Smaller (w-28), closer to corner (left-4 top-8) */}
      {/* Desktop (md:): Grows back to original size and position */}
      <CloudWithLock 
        className="absolute left-4 top-8 w-28 md:left-10 md:top-20 md:w-48" 
        xRange={[0, 40, 0]} // Reduced movement range generally
        yRange={[0, -30, 0]}
        duration={25}
      />

      {/* Right Cloud */}
      {/* Mobile: Smaller (w-32), pushed higher up (top-16) to avoid center screen */}
      <CloudWithLock 
        className="absolute right-4 top-16 w-32 md:right-20 md:top-40 md:w-56" 
        delay={2}
        xRange={[0, -40, 0]} // Reduced movement
        yRange={[0, -30, 0]}
        duration={30}
      />

      {/* Bottom Cloud */}
      {/* Mobile: Much smaller (w-40), closer to bottom edge */}
      <CloudWithLock 
        className="absolute left-1/4 bottom-8 w-40 md:left-1/3 md:bottom-20 md:w-64" 
        delay={5}
        xRange={[0, 60, 0]} // Significantly reduced from 150px so it doesn't fly off mobile screens
        yRange={[0, 20, 0]}
        duration={35}
      />
    </div>
  )
}