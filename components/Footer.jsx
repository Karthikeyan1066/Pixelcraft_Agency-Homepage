export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-slate py-20 border-t border-ocean/5 dark:border-slate/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <a href="#" className="font-display text-3xl font-bold tracking-tighter group">
          Pixel<span className="text-ocean italic group-hover:not-italic transition-all duration-500">Craft</span>
        </a>

        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate/30">
          © {year} PixelCraft Studio. Refined by Human Hands.
        </p>

        <div className="flex items-center gap-10">
          {['Twitter', 'Dribbble', 'LinkedIn'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate/40 hover:text-ocean transition-all duration-300"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
