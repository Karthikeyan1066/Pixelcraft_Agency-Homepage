'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDark = () => {
    setDark(!dark)
    if (!dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-slate/70 dark:bg-dark/70 backdrop-blur-2xl border-b border-ocean/10 py-5 shadow-[0_20px_50px_-15px_rgba(3,105,161,0.15)]'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo - High End Typography */}
        <a
          href="#"
          className="font-display text-4xl font-bold tracking-tighter text-dark dark:text-slate group flex items-center gap-4"
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-ocean/20 group-hover:border-ocean transition-all duration-500 shadow-lg">
            <Image
              src="/pixel_craft_logo.png"
              alt="PixelCraft Logo"
              fill
              className="object-contain"
            />
          </div>
          Pixel<span className="text-ocean italic group-hover:not-italic transition-all duration-700">Craft</span>
        </a>

        {/* Desktop Nav - Human Interaction Detail */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.4em] uppercase text-deep/40 dark:text-slate/40 hover:text-ocean dark:hover:text-ocean transition-all duration-500 relative group"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute -bottom-4 left-0 w-0 h-[2px] bg-ocean group-hover:w-full transition-all duration-700 ease-out" />
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-10">
          {/* Dark mode toggle - Architectural Style */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-ocean/10 dark:border-slate/10 hover:border-ocean/40 text-dark dark:text-slate transition-all duration-500 hover:rotate-12"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* CTA - Connect Node */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-4 bg-ocean text-white text-[10px] font-bold tracking-[0.4em] uppercase px-12 py-5 rounded-[2rem] hover:bg-deep transition-all duration-700 shadow-[0_20px_40px_-10px_rgba(3,105,161,0.3)] hover:-translate-y-1 group"
          >
            Connect_Node
            <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-2 text-ocean"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-current transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-500 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-current transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Technical Reveal */}
      <div
        className={`md:hidden fixed inset-0 z-[-1] overflow-hidden transition-all duration-1000 ease-in-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } bg-slate dark:bg-dark flex flex-col justify-center`}
      >
        <div className="px-12 py-20 flex flex-col gap-12 items-center text-center">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-6xl font-display font-bold text-dark dark:text-slate hover:text-ocean transition-all duration-500 transform hover:scale-110"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-12 bg-ocean text-white text-center text-sm font-bold tracking-[0.5em] uppercase px-16 py-8 rounded-[3rem] shadow-2xl"
          >
            Start_Submission
          </a>
        </div>
      </div>
    </nav>
  )
}
