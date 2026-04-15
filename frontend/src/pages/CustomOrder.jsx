import { Link } from 'react-router-dom'

export default function CustomOrder() {
  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <section className="flex-grow px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/categories/custom.webp" 
            alt="Custom Rugs Design" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-navy/40" />
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <span className="uppercase tracking-[0.2em] text-luxury-gold text-sm font-medium mb-4 block">
            Bespoke
          </span>
          <h1 className="text-4xl md:text-5xl font-heading text-luxury-ivory mb-6">
            Your Unique Vision, Woven.
          </h1>
          <div className="w-12 h-0.5 bg-luxury-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-luxury-bone/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Bespoke dimensions and designs tailored for your space.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-luxury-gold text-luxury-navy font-medium uppercase tracking-wider text-sm hover:bg-luxury-ivory transition-colors duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Click Me
          </Link>
        </div>
      </section>
    </div>
  )
}
