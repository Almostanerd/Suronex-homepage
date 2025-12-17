'use client'
import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Continuous Visibility',
    description:
      'Gain real-time visibility into your cloud security posture across environments and accounts.'
  },
  {
    title: 'Automated Compliance',
    description:
      'Continuously monitor and enforce compliance with industry frameworks and internal policies.'
  },
  {
    title: 'AI-Powered Risk Prioritization',
    description:
      'Focus on what matters most with intelligent risk scoring and contextual insights.'
  },
  {
    title: 'Enterprise-Ready Scale',
    description:
      'Designed to support complex, multi-cloud environments without performance overhead.'
  }
]

export default function Benefits() {
  return (
    <section className="py-28 bg-[#020617] ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white mb-16">
          Why Security Teams Choose Suronex

        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              
            
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
