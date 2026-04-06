import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Handmade Carpet Texture" 
          className="w-full h-full object-cover object-center scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-luxury-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/80 via-transparent to-luxury-ivory/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <span 
          className="uppercase tracking-[0.3em] text-luxury-gold text-sm font-medium mb-6 block"
          data-aos="fade-down"
        >
          Bhadohi • India
        </span>
        <h1 
          className="text-5xl md:text-7xl font-heading text-luxury-ivory mb-8 leading-tight font-medium drop-shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The Soul of Absolute <br/> Craftsmanship
        </h1>
        <p 
          className="text-lg md:text-xl text-luxury-bone/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Preserving the cultural significance of handmade carpets while adapting to modern design and international luxury expectations.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
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
