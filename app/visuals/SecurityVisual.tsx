'use client'
import { motion } from 'framer-motion'

export default function SecurityVisual() {
  return (
    <motion.div
      // 1. Layout: Flex col to center badge. 
      // 2. Height: Reduced to 350px on mobile, full 560px on desktop (md:)
      className="relative w-full h-[350px] md:h-[560px] flex flex-col items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Badge: Smaller text/padding on mobile, full size on desktop */}
      {/* Added z-10 so it stays above the 3D scene elements */}
      <div className="z-10 mb-4 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full
                      bg-blue-500/10 border border-blue-500/30 
                      text-xs md:text-sm text-blue-300 backdrop-blur-sm">
        <span>🔒</span> Enterprise-grade AI security
      </div>

      {/* Ambient glow: Reduced blur on mobile so it doesn't wash out the small screen */}
      <div className="absolute inset-0 bg-blue-600/15 md:bg-blue-600/20 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Spline Container */}
      <div
        className="relative w-full h-full overflow-hidden
                   /* Mobile: Wider mask (70%) to prevent cutting off the shield sides */
                   [mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)]
                   /* Desktop: Standard mask (55%) for focused fade */
                   md:[mask-image:radial-gradient(ellipse_at_center,white_55%,transparent_100%)]"
      >
        <iframe
          src="https://my.spline.design/untitled-FRYGBV8Gbo0MPICdvWTnsAnb/"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          // Optional: Add 'pointer-events-none md:pointer-events-auto' 
          // if you want to prevent the 3D rotation from blocking page scrolling on mobile
        />
      </div>
    </motion.div>
  )
}