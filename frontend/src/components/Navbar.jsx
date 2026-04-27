import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled
  const textColor = isTransparent ? 'text-white' : 'text-luxury-navy'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Heritage', path: '/about' },
    { name: 'Collections', path: '/products' },
    { name: 'Custom Order', path: '/custom-order' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-6' : 'bg-luxury-ivory/95 backdrop-blur-sm shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className={`text-3xl md:text-4xl font-heading font-bold flex items-center gap-4 transition-transform hover:scale-105 ${textColor}`}>
          <img src="/logo.png" alt="Sunita Rugs Logo" className="h-12 md:h-16 w-auto" onError={(e) => e.target.style.display='none'} />
          <span className="tracking-wide">Sunita Rugs</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-luxury-gold font-bold ${location.pathname === link.path ? 'text-luxury-gold' : isTransparent ? 'text-white' : 'text-luxury-navy/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className={`px-6 py-2 border font-bold text-sm uppercase tracking-wider transition-colors ${isTransparent ? 'border-white text-white hover:bg-white hover:text-luxury-navy' : 'border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-luxury-ivory'}`}>
            Enquire Us
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-luxury-ivory shadow-lg border-t border-luxury-sand md:hidden flex flex-col px-6 py-8 gap-6 animate-fade-in">
          {navLinks.map((link) => (
             <Link 
               key={link.name} 
               to={link.path}
               onClick={() => setIsOpen(false)}
               className="text-lg font-heading text-luxury-navy"
             >
               {link.name}
             </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 bg-luxury-navy text-luxury-ivory text-center text-sm uppercase tracking-wider"
          >
            Enquire Us
          </Link>
        </div>
      )}
    </nav>
  )
}
