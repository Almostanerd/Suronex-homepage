'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    id: 'monitor',
    title: 'Continuous Monitoring',
    description:
      'Suronex continuously scans your cloud environment to detect risks and misconfigurations in real time.',
    visual: '/visuals/monitor.mp4', // placeholder
    type: 'video',
  },
  {
    id: 'ai',
    title: 'AI Risk Analysis',
    description:
      'AI models correlate signals across your infrastructure to surface real threats and reduce noise.',
    visual: '/visuals/ai.mp4',
    type: 'video',
  },
  {
    id: 'remediate',
    title: 'Guided Remediation',
    description:
      'Clear, actionable remediation steps help teams fix issues quickly and confidently.',
    visual: '/visuals/remediate.mp4',
    type: 'video',
  },
]

export default function FeatureSpotlight() {
  const [active, setActive] = useState(features[0])

  return (
    <section className="py-32 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-4xl font-semibold text-white mb-8">
            See Suronex in Action
          </h2>

          <div className="space-y-4">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f)}
                className={`block text-left w-full p-4 rounded-xl transition
                  ${active.id === f.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'}
                `}
              >
                <h3 className="text-lg font-medium">{f.title}</h3>
                {active.id === f.id && (
                  <p className="mt-2 text-sm text-white/70">
                    {f.description}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — VISUAL */}
        <div className="relative h-[360px] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.video
              key={active.visual}
              src="/visuals/Video_Generation_Complete.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
