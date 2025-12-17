'use client'
import AnimatedGrid from './sections/AnimatedGrid'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Benefits from './sections/Benefits'
import FinalCTA from './sections/FinalCTA'
import SectionDivider from './sections/SectionDivider'
import FeatureSpotlight from './sections/FeatureSpotlight'

export default function Home() {
  return (
    <main className="text-white bg-gradient-to-b from-[#0B0F1A] via-[#0E1324] to-[#0B0F1A]">
      <AnimatedGrid />
      <Hero />
      <HowItWorks />
      <Features />
      <FeatureSpotlight />
       <Benefits />
       <FinalCTA/>
       <SectionDivider />
    </main>
  )
}
