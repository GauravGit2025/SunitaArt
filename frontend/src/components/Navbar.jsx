import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-luxury-ivory/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-semibold text-luxury-navy flex items-center gap-2">
          <span className="text-luxury-gold">✦</span> MsAnitaArt
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-luxury-gold ${location.pathname === link.path ? 'text-luxury-gold font-medium' : 'text-luxury-navy/80'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="px-6 py-2 border border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-luxury-ivory transition-colors text-sm uppercase tracking-wider">
            Enquire Us
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-luxury-navy"
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
