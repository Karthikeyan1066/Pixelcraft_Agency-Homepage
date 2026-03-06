'use client'

import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate network request
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1400)
  }

  const inputBase =
    'w-full bg-cream/5 dark:bg-ink/5 border border-ink/10 dark:border-cream/10 rounded-2xl px-5 py-4 text-ink dark:text-cream placeholder-ink/30 dark:placeholder-cream/30 text-sm outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-accent/10'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 bg-slate dark:bg-dark transition-colors duration-500 relative overflow-hidden"
    >
      {/* Structural background lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ocean/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-32 items-stretch">
          {/* Left side info - Architect Metadata */}
          <div className="flex flex-col justify-between py-10">
            <div className="reveal">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-ocean mb-10 block">
                Metadata // Submission
              </span>
              <h2 className="font-display text-6xl md:text-[6.5rem] font-bold text-dark dark:text-slate leading-[0.75] tracking-tighter mb-16">
                Project <br />
                <span className="italic font-light text-ocean">Inquiry.</span>
              </h2>
              <div className="space-y-10 mb-20">
                <p className="text-deep/70 dark:text-slate/50 text-2xl leading-relaxed font-light italic">
                  "Every great structure starts with a single calculated line."
                </p>
                <div className="h-0.5 w-24 bg-ocean" />
              </div>
            </div>

            {/* Contact details ledger */}
            <div className="space-y-16 reveal">
              {[
                {
                  label: 'Secure_Node',
                  value: 'hello@pixelcraft.studio',
                },
                {
                  label: 'Physical_Station',
                  value: 'District_01, San Francisco',
                },
              ].map((item) => (
                <div key={item.label} className="group cursor-pointer">
                  <div className="text-[9px] font-bold tracking-[0.4em] uppercase text-ocean/50 group-hover:text-ocean transition-colors duration-500 mb-4">{item.label}</div>
                  <div className="text-3xl text-dark dark:text-slate font-bold tracking-tight border-b border-ocean/10 group-hover:border-ocean transition-all duration-700 pb-2 inline-block">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side form - Technical Submission Card */}
          <div className="reveal relative">
            {/* Corner Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-ocean/20 z-0" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-ocean/20 z-0" />

            <div className="bg-white/60 dark:bg-dark/60 backdrop-blur-2xl border border-ocean/10 dark:border-slate/10 rounded-[4rem] p-16 md:p-20 shadow-[0_60px_100px_-20px_rgba(3,105,161,0.12)] h-full relative z-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 h-full animate-in fade-in zoom-in duration-700">
                  <div className="w-32 h-32 rounded-full bg-ocean text-white flex items-center justify-center mb-12 shadow-[0_30px_60px_-10px_rgba(3,105,161,0.4)]">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-5xl font-bold text-dark dark:text-slate mb-8">
                    Submission_Logged.
                  </h3>
                  <p className="text-deep/50 dark:text-slate/40 mb-12 max-w-sm text-lg font-light leading-relaxed">
                    Data packets received. Our engineering team will review the parameters and respond via secure node.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-ocean border-b-2 border-ocean/20 hover:border-ocean transition-all duration-500 pb-2"
                  >
                    Resubmit Parameters
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-12">
                  {/* Name field */}
                  <div className="group space-y-4">
                    <div className="flex justify-between items-center px-4">
                      <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-ocean/40 group-focus-within:text-ocean transition-colors">Identity_Node</label>
                      <span className="text-[8px] text-ocean/20">REQ_01</span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Input_Full_Name"
                      className={`${inputBase.replace('bg-cream/5 dark:bg-ink/5', 'bg-slate/30 dark:bg-dark/30')} border-ocean/5 focus:border-ocean px-10 py-7 rounded-[2rem] font-medium tracking-wide text-lg`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[9px] font-bold mt-2 ml-6 uppercase tracking-[0.2em]">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="group space-y-4">
                    <div className="flex justify-between items-center px-4">
                      <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-ocean/40 group-focus-within:text-ocean transition-colors">Digital_Address</label>
                      <span className="text-[8px] text-ocean/20">REQ_02</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Secure_Email_Contact"
                      className={`${inputBase.replace('bg-cream/5 dark:bg-ink/5', 'bg-slate/30 dark:bg-dark/30')} border-ocean/5 focus:border-ocean px-10 py-7 rounded-[2rem] font-medium tracking-wide text-lg`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[9px] font-bold mt-2 ml-6 uppercase tracking-[0.2em]">{errors.email}</p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="group space-y-4">
                    <div className="flex justify-between items-center px-4">
                      <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-ocean/40 group-focus-within:text-ocean transition-colors">Project_Specifications</label>
                      <span className="text-[8px] text-ocean/20">REQ_03</span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline_The_Ambition..."
                      rows={4}
                      className={`${inputBase.replace('bg-cream/5 dark:bg-ink/5', 'bg-slate/30 dark:bg-dark/30')} border-ocean/5 focus:border-ocean px-10 py-7 rounded-[2.5rem] resize-none font-medium tracking-wide text-lg`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[9px] font-bold mt-2 ml-6 uppercase tracking-[0.2em]">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-ocean text-white font-bold py-8 px-12 rounded-[2.5rem] hover:bg-deep transition-all duration-[0.6s] flex items-center justify-center gap-6 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-[0.3em] text-xs shadow-[0_30px_60px_-10px_rgba(3,105,161,0.3)] hover:-translate-y-2"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Confirm_Submission
                        <div className="w-8 h-px bg-white/40 group-hover:w-12 transition-all duration-700" />
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
