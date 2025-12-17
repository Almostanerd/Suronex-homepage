'use client'
import { motion } from 'framer-motion'

const brands = [
  {
    name: "Google",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
  },
  {
    name: "Microsoft",
    path: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
  },
  {
    name: "AWS",
    path: "M14.7 15.6l-1.6-2.7c-.2-.3-.5-.4-.8-.2-.3.2-.4.5-.2.8l1.7 2.9c1.6 2.8 5.1 3.7 7.9 2.1l.6-.4c.3-.2.4-.5.2-.8-.2-.3-.5-.4-.8-.2l-.6.4c-2 1.1-4.5.5-5.6-1.5-.1-.2-.2-.3-.4-.4zM5.3 12.3c0-2.3 1.9-4.2 4.2-4.2 1.2 0 2.3.5 3.1 1.3l2.3-2.3C13.4 5.6 11.6 4.8 9.5 4.8c-4.1 0-7.5 3.4-7.5 7.5 0 2.1.8 4 2.2 5.4l2.3-2.3c-.8-.8-1.2-1.9-1.2-3.1z"
  },
  {
    name: "IBM",
    path: "M4.6 11h2.2v2H4.6zm-2.3 0H4.5v2H2.3zm18 0h3.4v2h-3.4zm-4.5 0h2.2v2h-2.2zm-9 0h6.8v2H6.8zM4.6 7.6h2.2v2.3H4.6zm-2.3 0H4.5v2.3H2.3zm18 0h3.4v2.3h-3.4zm-4.5 0h2.2v2.3h-2.2zm-9 0h6.8v2.3H6.8zM2.3 14.4H4.5v2.3H2.3zm2.3 0h2.2v2.3H4.6zm13.4 0h2.2v2.3h-2.2zm4.5 0h3.4v2.3h-3.4zm-15.7 0h6.8v2.3H6.8zM19.1 4.2h1.2v15.6h-1.2z"
  },
  {
    name: "Oracle",
    path: "M16.4 3.7C13.7 3.7 11 5 9.1 7.4c-1.6 2.1-2.2 4.6-2.2 7.2 0 6.6 5.4 10.7 11.4 10.7 3.5 0 6.6-1.6 8.5-4.3 1.6-2.1 2.2-4.6 2.2-7.2 0-6.6-5.4-10.7-11.4-10.7h-1.2zm.3 14.8c-4 0-6.4-3.5-6.4-7.8 0-4.3 2.4-7.8 6.4-7.8 4 0 6.4 3.5 6.4 7.8 0 4.3-2.3 7.8-6.4 7.8z"
  }
];

export default function TrustedBy() {
  return (
    <section className="w-full py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-sm text-gray-500 font-medium tracking-wider uppercase">
          Trusted by security teams at
        </p>
      </div>

      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 gap-20 pr-20"
        >
          {/* Loop twice for infinite effect */}
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              // Changed to flex-col to stack Logo + Name
              className="flex flex-col items-center justify-center gap-3 group"
            >
              {/* Logo SVG */}
              <svg
                viewBox="0 0 24 24"
                className="w-20 h-8 fill-gray-600 group-hover:fill-white transition-colors duration-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={brand.path} />
              </svg>

              {/* Company Name */}
              <span className="text-xs font-semibold tracking-wide text-gray-600 group-hover:text-white transition-colors duration-500">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}