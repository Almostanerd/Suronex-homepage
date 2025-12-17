'use client'
import { motion } from 'framer-motion'

export default function SecurityVisual() {
  return (
    <motion.div
      className="relative w-full h-[560px]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    >
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-blue-500/10 border border-blue-500/30 text-sm text-blue-300">
  🔒 Enterprise-grade AI security
</div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />

      {/* Spline */}
      <div
        className="relative w-full h-full overflow-hidden
                   [mask-image:radial-gradient(ellipse_at_center,white_55%,transparent_100%)]"
      >
        <iframe
          src="https://my.spline.design/untitled-FRYGBV8Gbo0MPICdvWTnsAnb/"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>
    </motion.div>
  )
}
