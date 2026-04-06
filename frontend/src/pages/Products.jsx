import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

export default function Products() {
  return (
    <div className="pt-32 pb-24 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center" data-aos="fade-up">
          <SectionTitle title="Our Collections" subtitle="Archive" />
          <p className="text-luxury-taupe max-w-2xl mx-auto mt-4 text-lg">
            Discover our comprehensive range of handmade carpets. From intricate traditional knots to contemporary tufted designs, each piece represents the pinnacle of Bhadohi craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {productsData.gallery.map((product, index) => (
            <ProductCard key={product.id} item={product} delay={(index % 3) * 100} />
          ))}
          {/* Duplicating for sheer volume of grid aesthetics */}
          {productsData.gallery.map((product, index) => (
            <ProductCard key={product.id + 'dup'} item={{...product, id: product.id + 'dup'}} delay={(index % 3) * 100} />
          ))}
        </div>
        
        <div className="mt-24 text-center border-t border-luxury-sand pt-16" data-aos="fade-up">
          <h3 className="font-heading text-2xl text-luxury-navy mb-4">Looking for something specific?</h3>
          <p className="text-luxury-taupe mb-8">We offer bespoke manufacturing taking your designs from concept to reality.</p>
          <a href="/contact" className="px-8 py-3 bg-luxury-navy text-luxury-ivory uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors inline-block">
            Discuss Custom Orders
          </a>
        </div>
      </div>
    </div>
  )
}
