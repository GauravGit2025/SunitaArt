import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

export default function Products() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  // Parse the query parameter on mount or when location changes
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const categoryParam = params.get('category')
    if (categoryParam) {
      setActiveCategory(categoryParam)
    } else {
      setActiveCategory('all')
    }
  }, [location])

  const handleTabClick = (category) => {
    setActiveCategory(category)
    if (category === 'all') {
      navigate('/products') // remove query param
    } else {
      navigate(`/products?category=${category}`)
    }
  }

  // Filter gallery based on the selected category
  const filteredGallery = activeCategory === 'all' 
    ? productsData.gallery 
    : productsData.gallery.filter(item => item.category === activeCategory)

  const tabs = [
    { id: 'all', name: 'All Collections' },
    ...productsData.categories.map(c => ({ id: c.id, name: c.name }))
  ]

  return (
    <div className="pt-32 pb-24 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center" data-aos="fade-up">
          <SectionTitle title="Our Collections" subtitle="Archive" />
          <p className="text-luxury-taupe max-w-2xl mx-auto mt-4 text-lg">
            Discover our comprehensive range of handmade carpets. From intricate traditional knots to contemporary tufted designs, each piece represents the pinnacle of Bhadohi craftsmanship.
          </p>
        </div>

        {/* Horizontal Top Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-2 border text-sm uppercase tracking-widest transition-colors duration-300 ${
                activeCategory === tab.id 
                  ? 'bg-luxury-navy text-luxury-ivory border-luxury-navy' 
                  : 'bg-transparent text-luxury-navy border-luxury-sand hover:border-luxury-navy'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 min-h-[40vh]">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((product, index) => (
              <ProductCard key={product.id} item={product} delay={(index % 3) * 100} linkTo={`/product/${product.id}`} />
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center text-luxury-taupe text-lg">
              No products found in this category.
            </div>
          )}
        </div>
        
        <div className="mt-24 text-center border-t border-luxury-sand pt-16" data-aos="fade-up">
          <h3 className="font-heading text-2xl text-luxury-navy mb-4">Looking for something specific?</h3>
          <p className="text-luxury-taupe mb-8">We offer bespoke manufacturing taking your designs from concept to reality.</p>
          <Link to="/contact" className="px-8 py-3 bg-luxury-navy text-luxury-ivory uppercase tracking-widest text-sm hover:bg-luxury-gold transition-colors inline-block">
            Discuss Custom Orders
          </Link>
        </div>
      </div>
    </div>
  )
}
