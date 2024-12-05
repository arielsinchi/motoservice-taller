import { MobileNav } from './MobileNav'

export function Navbar() {
  return (
    <>
      <nav className="fixed w-full top-0 z-50 glass-effect hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/76mP7tq.png" 
                alt="MotoService Logo" 
                className="w-12 h-12"
              />
            </div>

            <div className="flex items-center space-x-1">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#opiniones", label: "Opiniones" },
                { href: "#trabajos", label: "Trabajos" },
                { href: "#servicios", label: "Servicios" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white/90 hover:text-neon-orange transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-neon-orange to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  )
}