import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import storyData from '../data/story.json'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Brand Introduction */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-heading text-luxury-navy mb-8 leading-relaxed">
          "{storyData.tagline}"
        </h2>
        <p className="text-luxury-taupe text-lg max-w-3xl mx-auto">
          {storyData.gi_tag.description}
        </p>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 md:px-12 bg-luxury-bone">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Expertise" subtitle="Mastery in weave" alignment="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.categories.map((category, index) => (
              <ProductCard key={category.id} item={category} delay={index * 100} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/products" className="inline-block border-b border-luxury-navy pb-1 uppercase tracking-widest text-sm text-luxury-navy hover:text-luxury-gold hover:border-luxury-gold transition-colors">
              Explore All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Teaser */}
      <section className="py-24 px-6 md:px-12 bg-luxury-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisan weaving carpet" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <SectionTitle title={storyData.craftsmanship.title} subtitle="Heritage" alignment="left" />
            <p className="text-luxury-taupe text-lg leading-relaxed mb-8">
              {storyData.craftsmanship.description}
            </p>
            <Link to="/about" className="px-8 py-3 bg-luxury-navy text-luxury-ivory uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors inline-block">
              Discover Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
