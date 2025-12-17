'use client'
import { motion } from 'framer-motion'

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0
                   bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
                       linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
                   bg-[size:60px_60px]"
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
