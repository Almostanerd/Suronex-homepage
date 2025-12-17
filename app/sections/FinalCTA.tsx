'use client'

import FloatingClouds from './FloatingClouds'


export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden bg-gradient-to-b from-[#020617] to-black">
      
      {/* Floating clouds */}
      <FloatingClouds />

      {/* Security ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full border border-blue-500/20 blur-sm" />
      </div>

      {/* CTA content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl font-semibold text-white mb-6">
          Secure Your Cloud with Confidence
        </h2>

        <p className="text-white/70 text-lg mb-10">
          See how Suronex helps security teams stay compliant and ahead of risk.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center
                     px-8 py-4 rounded-xl bg-blue-600
                     text-white font-medium
                     hover:bg-blue-500 transition"
        >
          Request a Demo
        </a>
      </div>
    </section>
  )
}
