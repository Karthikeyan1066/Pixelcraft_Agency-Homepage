'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate dark:bg-dark py-20"
    >
      {/* Background blueprint layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ocean accent */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-ocean/5 dark:bg-ocean/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-mid/5 dark:bg-mid/10 blur-[120px]" />

        {/* Architectural lines / Blueprint theme */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="10" y2="100" stroke="#0369a1" strokeWidth="0.1" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="#0369a1" strokeWidth="0.1" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="#0369a1" strokeWidth="0.1" />
          <line x1="0" y1="70" x2="100" y2="70" stroke="#0369a1" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={headingRef}>
            {/* Main Hero Title - Single Line */}
            <h1 className="font-display text-[clamp(2.5rem,7vw,7rem)] font-bold leading-[1.1] tracking-tight text-dark dark:text-slate mb-14 text-left">
              Design <span className="relative inline-block">
                Precision
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-ocean/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Premium Tagline - Adjusted for Left Alignment */}
            <div className="reveal">
              <p className="text-xl md:text-2xl text-deep/60 dark:text-slate/50 font-light leading-[1.4] max-w-xl mb-20 italic border-l-4 border-ocean/10 pl-8">
                A boutique studio crafting blueprints for brands that value technical mastery and human intuition.
              </p>
            </div>

            {/* Left Aligned CTA */}
            <div className="flex flex-col items-start gap-12 reveal">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-6 bg-ocean text-white font-bold px-16 py-7 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_45px_90px_-20px_rgba(3,105,161,0.5)] hover:-translate-y-2"
              >
                <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">Initiate Collaboration</span>
                <div className="absolute inset-0 bg-deep translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </a>
            </div>
          </div>

          {/* Large Logo Version in the right side */}
          <div className="flex justify-center reveal">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] group">
              {/* Decorative architectural elements */}
              <div className="absolute -inset-10 border border-ocean/5 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-6 border border-ocean/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              <div className="relative w-full h-full rounded-[4rem] overflow-hidden bg-white/5 dark:bg-slate/5 backdrop-blur-3xl border-[12px] border-white dark:border-slate/10 shadow-[0_50px_100px_-20px_rgba(3,105,161,0.2)] transition-all duration-1000 group-hover:scale-105 group-hover:rotate-6">
                <Image
                  src="/pixel_craft_logo.png"
                  alt="PixelCraft Brand Artifact"
                  fill
                  priority
                  className="object-contain p-12"
                />
                {/* Subtle glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ocean/5 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
