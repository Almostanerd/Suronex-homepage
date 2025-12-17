'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Continuous Monitoring',
    description: 'Suronex continuously scans your cloud infrastructure for risks and misconfigurations.'
  },
  {
    title: 'AI Risk Analysis',
    description: 'AI models correlate signals to identify real threats and compliance gaps.'
  },
  {
    title: 'Automated Remediation',
    description: 'Issues are prioritized and resolved automatically or guided with clear actions.'
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-28 bg-[#050B1A] hover:translate-y-[-6px]
hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
transition-transform
 whileHover={{ y: -6 }}
 ">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-semibold text-white mb-16">
          How Suronex Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
transition={{ duration: 0.25, ease: 'easeOut' }}

              
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
            >
              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-blue-500/20"
              />

              <h3 className="text-xl font-medium text-white mb-4">
                {step.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
