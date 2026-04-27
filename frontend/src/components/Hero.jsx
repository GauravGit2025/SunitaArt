import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    "/images/hero/hero_carpet_2.webp",
    "/images/hero/hero_carpet.webp",
    "/images/hero/hero_carpet_3.webp",
    "/images/hero/hero_carpet_4.webp"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Slider Overlay */}
      <div className="absolute inset-0 z-0 bg-luxury-navy">
        {heroImages.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt="Luxury Handmade Carpet Texture"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out scale-105 animate-[kenburns_20s_ease-out_infinite_alternate] ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-luxury-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-navy/80 via-transparent to-luxury-ivory/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto mt-16 text-left">
        <span 
          className="uppercase tracking-[0.3em] text-luxury-gold text-sm font-medium mb-6 block"
          data-aos="fade-right"
        >
          Bhadohi(U.P.) • India
        </span>
        <h2 
          className="text-5xl md:text-7xl font-heading text-luxury-ivory mb-8 leading-tight font-medium drop-shadow-lg max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Heritage Craftsmanship <br/>Elevating Elegance.
        </h2>
        <p 
          className="text-lg md:text-xl text-luxury-bone/90 mb-12 max-w-2xl font-light leading-relaxed drop-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Legacy carpet manufacturing showcasing for modern luxury
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-start items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link 
            to="/products" 
            className="px-8 py-4 bg-luxury-ivory text-luxury-navy font-medium uppercase tracking-wider text-sm hover:bg-luxury-gold hover:text-luxury-ivory transition-colors duration-300 w-full sm:w-auto"
          >
            View Collections
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-4 border border-luxury-ivory text-luxury-ivory font-medium uppercase tracking-wider text-sm hover:bg-luxury-ivory/10 transition-colors duration-300 w-full sm:w-auto"
          >
            Our Heritage
          </Link>
        </div>
      </div>
    </div>
  )
}
