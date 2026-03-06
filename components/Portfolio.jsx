'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Ecommerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop',
    color: '#E8572A',
  },
  {
    title: 'Startup Landing Page',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=500&fit=crop',
    color: '#2A52E8',
  },
  {
    title: 'Mobile App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop',
    color: '#2AE8A0',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=500&fit=crop',
    color: '#E8C52A',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop',
    color: '#C52AE8',
  },
  {
    title: 'Branding Project',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop',
    color: '#E8572A',
  },
]

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 bg-slate dark:bg-dark transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-32 reveal">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-ocean mb-8 block">
              The Digital Archive
            </span>
            <h2 className="font-display text-7xl md:text-9xl font-bold text-dark dark:text-slate leading-[0.75] tracking-tighter">
              Bespoke <br />
              <span className="italic font-light text-ocean">Artifacts.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-10">
            <p className="max-w-sm text-deep/60 dark:text-slate/50 text-xl leading-relaxed text-left md:text-right font-light italic">
              A curated ledger of digital transformations and architectural triumphs.
            </p>
            <div className="h-px w-32 bg-ocean/20" />
          </div>
        </div>

        {/* Projects Grid - Asymmetrical for character */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal group relative rounded-[3rem] cursor-pointer ${i % 3 === 1 ? 'lg:-translate-y-20' : ''
                } ${i % 3 === 2 ? 'lg:translate-y-20' : ''}`}
            >
              {/* Image Container with Custom Border */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white dark:bg-dark/40 border-8 border-white dark:border-slate/5 rounded-[3rem] shadow-2xl group-hover:shadow-ocean/10 transition-all duration-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
                />

                {/* Indigo/Blue Overlay */}
                <div className="absolute inset-0 bg-ocean/0 group-hover:bg-ocean/20 transition-colors duration-1000" />

                {/* Vertical Client Name */}
                <div className="absolute top-12 -right-1 group-hover:right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-white [writing-mode:vertical-lr] rotate-180">
                    Project_{project.category.replace(' ', '_')}
                  </span>
                </div>

                {/* Bottom Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-bold text-white/60 tracking-widest uppercase">Release</span>
                    <span className="text-xs font-bold text-white tracking-widest">2024_NODE</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-12 pb-6 px-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-ocean">0{i + 1}</span>
                  <div className="h-px flex-1 bg-ocean/10" />
                </div>
                <h3 className="font-display text-4xl font-bold text-dark dark:text-slate mb-3 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-deep/30 dark:text-slate/40">
                  Technical Mastery // {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 text-center reveal">
          <a
            href="#contact"
            className="group inline-flex flex-col items-center gap-6"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-ocean mb-4">View Complete Index</span>
            <div className="w-20 h-20 rounded-full border border-ocean/20 flex items-center justify-center group-hover:bg-ocean group-hover:border-ocean transition-all duration-700">
              <svg className="w-6 h-6 text-ocean group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
