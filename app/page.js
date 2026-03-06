import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-slate dark:bg-dark transition-colors duration-500">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
