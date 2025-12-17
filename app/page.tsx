'use client'
import AnimatedGrid from './sections/AnimatedGrid'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Benefits from './sections/Benefits'
import FinalCTA from './sections/FinalCTA'
import SectionDivider from './sections/SectionDivider'
import FeatureSpotlight from './sections/FeatureSpotlight'
import Navbar from './sections/Navbar' // Import Navbar
import TrustedBy from './sections/TrustedBy' // Import TrustedBy
import Footer from './sections/Footer' // Import Footer
export default function Home() {
  return (
    <main className="text-white bg-gradient-to-b from-[#0B0F1A] via-[#0E1324] to-[#0B0F1A]">
      <AnimatedGrid />
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <FeatureSpotlight />
       <Benefits />
       <FinalCTA/>
       <SectionDivider/>
       <Footer />
    </main>
  )
}
