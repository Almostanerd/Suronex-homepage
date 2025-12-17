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
      <div className="z-10 mb-4 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full
                      bg-blue-500/10 border border-blue-500/30 
                      text-xs md:text-sm text-blue-300 backdrop-blur-sm">
        <span>🔒</span> Enterprise-grade AI security
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-blue-600/15 md:bg-blue-600/20 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* Spline Container */}
      {/* CRITICAL CHANGE 1: Kept overflow-hidden, but added specific flex centering to manage the zoomed child */}
      <div
        className="relative w-full h-full overflow-hidden flex items-center justify-center
                   /* Mobile: Wider mask (70%) */
                   [mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)]
                   /* Desktop: Standard mask (55%) */
                   md:[mask-image:radial-gradient(ellipse_at_center,white_55%,transparent_100%)]"
      >
        <iframe
          src="https://my.spline.design/untitled-FRYGBV8Gbo0MPICdvWTnsAnb/"
          frameBorder="0"
          allow="autoplay; fullscreen"
          
          // CRITICAL CHANGE 2: THE WATERMARK NUKE
          // We force the iframe to be 120% width/height.
          // Because the parent is 'flex items-center justify-center', this zooms in on the center.
          // The edges (where the watermark is) get pushed into the overflow zone and chopped off.
          className="w-[120%] h-[120%] max-w-none"
          
          // CRITICAL CHANGE 3: POINTER EVENTS
          // Set this to 'none' for now. It prevents users from accidentally clicking the hidden watermark
          // or getting stuck in the iframe scroll trap.
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </motion.div>
  )
}