import './index.css'
import '@fontsource/montserrat'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { Footer } from './components/Footer'
import { Works } from './components/Works'
import { Map } from './components/Map'

export function App() {
  return (
    <div className="font-['Montserrat'] overflow-hidden">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="opiniones">
          <Reviews />
        </section>
        <section id="trabajos">
          <Works />
        </section>
        <section id="servicios">
          <Services />
        </section>
        <Map />
      </main>
      <Footer />
    </div>
  )
}