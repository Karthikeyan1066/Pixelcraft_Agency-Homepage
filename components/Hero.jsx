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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-10 pb-20 lg:pb-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Large Logo Version - Responsive Scaling */}
          <div className="w-full flex justify-center reveal order-first lg:order-last mb-10 lg:mb-0">
            <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] group">
              {/* Decorative architectural elements */}
              <div className="absolute inset-0 lg:-inset-10 border border-ocean/5 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-2 lg:-inset-6 border border-ocean/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              <div className="relative w-full h-full rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-white/5 dark:bg-slate/5 backdrop-blur-3xl border-4 lg:border-[12px] border-white dark:border-slate/10 shadow-[0_20px_40px_-10px_rgba(3,105,161,0.15)] lg:shadow-[0_50px_100px_-20px_rgba(3,105,161,0.2)] transition-all duration-1000 group-hover:scale-105 group-hover:rotate-6">
                <Image
                  src="/pixel_craft_logo.png"
                  alt="PixelCraft Brand Artifact"
                  fill
                  priority
                  className="object-contain p-6 lg:p-12"
                />
                {/* Subtle glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-ocean/5 via-transparent to-white/10" />
              </div>
            </div>
          </div>

          <div ref={headingRef} className="flex flex-col items-center lg:items-start text-center lg:text-left w-full overflow-hidden">
            {/* Main Hero Title - Single Line responsive */}
            <h1 className="font-display text-[clamp(2.2rem,9vw,7.5rem)] font-bold leading-[1.1] tracking-tight text-dark dark:text-slate mb-8 lg:mb-14 px-4 lg:px-0 w-full">
              Design <br className="lg:hidden" />
              <span className="relative inline-block">
                Precision
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-ocean/20 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </h1>

            {/* Premium Tagline - Adjusted for Mobile */}
            <div className="reveal w-full px-6 lg:px-0">
              <p className="text-lg md:text-2xl text-deep/60 dark:text-slate/50 font-light leading-[1.5] max-w-xl mb-12 lg:mb-20 italic border-l-0 lg:border-l-4 border-ocean/10 pl-0 lg:pl-8 mx-auto lg:mx-0">
                A boutique studio crafting blueprints for brands that value technical mastery and human intuition.
              </p>
            </div>

            {/* CTA Container */}
            <div className="flex flex-col items-center lg:items-start gap-12 reveal w-full px-6 lg:px-0">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-6 bg-ocean text-white font-bold px-10 py-5 lg:px-16 lg:py-7 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_45px_90px_-20px_rgba(3,105,161,0.5)] hover:-translate-y-2 max-w-xs lg:max-w-none w-full lg:w-auto mx-auto lg:mx-0"
              >
                <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">Initiate Collaboration</span>
                <div className="absolute inset-0 bg-deep translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
