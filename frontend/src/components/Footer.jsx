import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-luxury-navy text-luxury-bone pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="font-heading text-2xl mb-6 text-luxury-gold flex items-center gap-2">
            <span className="text-xl">✦</span> Sunita Rugs
          </h3>
          <p className="text-luxury-bone/80 text-sm leading-relaxed max-w-sm">
            Preserving the cultural significance of handmade carpets from Bhadohi, India. We bring the soul of traditional craftsmanship to contemporary spaces worldwide.
          </p>
        </div>
        
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-6 text-luxury-gold">Sitemap</h4>
          <ul className="space-y-3 text-sm text-luxury-bone/80">
            <li><Link to="/" className="hover:text-luxury-ivory transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-luxury-ivory transition-colors">Our Heritage & Craft</Link></li>
            <li><Link to="/products" className="hover:text-luxury-ivory transition-colors">Collections</Link></li>
            <li><Link to="/contact" className="hover:text-luxury-ivory transition-colors">Enquire & Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-xs mb-6 text-luxury-gold">Headquarters</h4>
          <address className="not-italic text-sm text-luxury-bone/80 space-y-2">
            <p>Maryadpatti, Bhadohi</p>
            <p>Uttar Pradesh, India 221401</p>
            <p className="mt-4 pt-2">Email: anitaartexpo@gmail.com</p>
            <p>Phone: +91-8707599404, +91-9956572002</p>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-luxury-bone/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-luxury-bone/60">
        <p>&copy; {new Date().getFullYear()} Sunita Rugs. All rights reserved.</p>
        <p>A certified Geographical Indication (GI) protected craft.</p>
      </div>
    </footer>
  )
}
