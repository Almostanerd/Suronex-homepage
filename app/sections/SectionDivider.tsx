'use client'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      className="relative h-px w-full my-24
                 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    />
  )
}
