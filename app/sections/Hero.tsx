

import { motion } from 'framer-motion'
import SecurityVisual from '../visuals/SecurityVisual'

export default function Hero() {
  return (
    <section className="relative min-h-screen grid md:grid-cols-2 items-center px-8 md:px-20 gap-16 overflow-hidden">
    {/* Background glow */}
<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />


      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
  SURONEX
</h1>

<p className="mt-6 text-2xl md:text-3xl font-medium text-white/80">
  Continuous Security & Compliance,<br/> Powered by AI
</p>


        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Suronex helps security teams detect risk, maintain compliance,
          and automate protection across their cloud infrastructure.
        </p>

        <button className="mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition">
          Request Demo
        </button>
      </motion.div>

      {/* RIGHT SIDE */}
      <SecurityVisual />

    </section>
  )
}
