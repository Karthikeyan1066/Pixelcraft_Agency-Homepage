'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    number: '01',
    title: 'UI/UX Design',
    description:
      'Creating intuitive and user-friendly interfaces that delight users and drive conversion. From wireframes to polished prototypes.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    number: '02',
    title: 'Web Development',
    description:
      'Building fast, scalable modern websites with cutting-edge technologies. Performance and clean code are non-negotiable.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    number: '03',
    title: 'Brand Identity',
    description:
      'Crafting strong visual brand identities that resonate and endure. Strategy-first design that tells your unique story.',
    tags: ['Logo Design', 'Style Guides', 'Strategy'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    number: '04',
    title: 'Digital Marketing',
    description:
      'Helping brands grow online with data-driven campaigns. SEO, content strategy, and performance marketing that converts.',
    tags: ['SEO', 'Content', 'Analytics'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-slate dark:bg-dark relative overflow-hidden transition-colors duration-500">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] dark:opacity-[0.04] flex justify-around">
        <div className="w-px h-full bg-ocean" />
        <div className="w-px h-full bg-ocean" />
        <div className="w-px h-full bg-ocean" />
        <div className="w-px h-full bg-ocean" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 lg:gap-16 mb-24 lg:mb-32 reveal text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-ocean mb-8 block">
              Discipline & Methodology
            </span>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-dark dark:text-slate leading-[0.8] tracking-tighter">
              Where Logic <br />
              <span className="italic font-light text-ocean">Meets Magic.</span>
            </h2>
          </div>
          <p className="max-w-sm mx-auto md:mx-0 text-deep/60 dark:text-slate/50 text-lg md:text-xl leading-relaxed font-light border-l-0 md:border-l-2 border-ocean/10 pl-0 md:pl-8 mt-8 md:mt-0">
            Bespoke solutions at the intersection of complex architecture and human intuition.
          </p>
        </div>

        {/* Cards grid - Staggered feel achieved via different heights/paddings on larger screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal group relative bg-white/40 dark:bg-slate/5 backdrop-blur-xl border border-ocean/5 dark:border-slate/5 rounded-[3rem] p-12 hover:border-ocean/20 transition-all duration-700 cursor-pointer shadow-[0_20px_40px_-15px_rgba(3,105,161,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(3,105,161,0.15)] hover:-translate-y-4 ${i % 2 !== 0 ? 'lg:translate-y-12' : ''
                }`}
            >
              {/* Floating index */}
              <span className="absolute top-10 right-10 text-[10px] font-bold text-ocean/10 dark:text-slate/10 group-hover:text-ocean/30 transition-colors duration-500">
                0{i + 1}
              </span>

              {/* Icon container */}
              <div className="w-20 h-20 rounded-3xl bg-slate dark:bg-ocean/10 flex items-center justify-center text-ocean mb-12 group-hover:bg-ocean group-hover:text-white group-hover:rotate-[10deg] transition-all duration-700 ease-out shadow-inner">
                {service.icon}
              </div>

              {/* Text content */}
              <h3 className="font-display text-3xl font-bold text-dark dark:text-slate mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-base text-deep/60 dark:text-slate/40 leading-relaxed mb-12 font-light">
                {service.description}
              </p>

              {/* Minimalist indicators */}
              <div className="flex flex-col gap-8 pt-10 border-t border-ocean/5 dark:border-slate/5">
                <div className="flex flex-wrap gap-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold tracking-[0.2em] uppercase text-ocean/40 dark:text-slate/40 group-hover:text-ocean transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visual Arrow CTA */}
                <div className="flex items-center gap-4 text-ocean opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                  <span className="text-[10px] font-bold tracking-widest uppercase">Explore Node</span>
                  <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
