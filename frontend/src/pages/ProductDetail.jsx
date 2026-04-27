import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import { ArrowLeft, ChevronRight } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState('')
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: '50% 50%', transform: 'scale(1)' })

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(2.5)'
    })
  }

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: '50% 50%',
      transform: 'scale(1)'
    })
  }

  useEffect(() => {
    const foundProduct = productsData.gallery.find(item => item.id === id)
    if (foundProduct) {
      setProduct(foundProduct)
      // Set the first image from the gallery as the active image. Fallback to base image.
      setActiveImage(foundProduct.images && foundProduct.images.length > 0 ? foundProduct.images[0] : foundProduct.image)
    } else {
      // Handle not found
      navigate('/products')
    }
  }, [id, navigate])

  if (!product) return null

  // Find category name for breadcrumbs
  const categoryName = productsData.categories.find(c => c.id === product.category)?.name || product.category

  return (
    <div className="pt-32 pb-24 bg-luxury-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm font-medium text-luxury-taupe mb-12 uppercase tracking-widest gap-2">
          <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${product.category}`} className="hover:text-luxury-gold transition-colors">{categoryName}</Link>
          <ChevronRight size={14} />
          <span className="text-luxury-navy">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <div 
              className="relative aspect-[4/5] overflow-hidden bg-luxury-bone w-full cursor-zoom-in rounded-sm"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                key={activeImage}
                src={activeImage} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-200 ease-out animate-fade-in"
                style={zoomStyle}
              />
            </div>
            
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 aspect-[4/5] overflow-hidden flex-shrink-0 transition-all duration-300 ${activeImage === img ? 'ring-2 ring-luxury-navy opacity-100 ring-offset-2' : 'opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.title} thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col" data-aos="fade-left" data-aos-delay="100">
            <span className="text-sm uppercase tracking-[0.2em] text-luxury-olive mb-4 block">
              {product.collection}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading text-luxury-navy mb-8 leading-tight">
              {product.title}
            </h1>
            
            <div className="w-16 h-px bg-luxury-gold mb-8"></div>

            <p className="text-luxury-taupe text-lg leading-relaxed mb-12">
              {product.description || "A masterfully crafted piece reflecting the finest traditions of handmade carpet weaving."}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="mb-12">
                <h3 className="font-heading text-xl text-luxury-navy mb-6 tracking-wide uppercase">Specifications</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => {
                    const [key, value] = feature.includes(':') ? feature.split(':') : [feature, '']
                    return (
                      <li key={idx} className="flex flex-col sm:flex-row border-b border-luxury-sand pb-4 last:border-0 last:pb-0">
                        <span className="text-luxury-navy font-medium sm:w-1/3 pr-4 uppercase text-xs tracking-widest">{key}</span>
                        <span className="text-luxury-taupe sm:w-2/3 mt-1 sm:mt-0">{value.trim()}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            <div className="mt-auto pt-8">
              <Link 
                to="/contact" 
                className="w-full md:w-auto px-10 py-4 bg-luxury-navy text-luxury-ivory text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300 inline-flex justify-center items-center gap-3 text-center"
              >
                Enquire About This Rug
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
