import { motion } from 'framer-motion'

const features = [
  {
    title: 'Continuous Monitoring',
    description:
      'Always-on visibility into security posture and compliance status across your infrastructure.',
  },
  {
    title: 'Automated Compliance',
    description:
      'Map controls to frameworks and maintain audit readiness without manual effort.',
  },
  {
    title: 'Real-Time Risk Detection',
    description:
      'Identify misconfigurations and vulnerabilities as they appear, not after damage is done.',
  },
  {
    title: 'Guided Remediation',
    description:
      'Clear, actionable steps help teams fix issues quickly and confidently.',
  },
]

export default function Features() {
  return (
    <section className="py-32 px-8 md:px-20 bg-[#0E1324]">

      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        Core Security Capabilities

      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-8 rounded-xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
