import { Link } from 'react-router-dom'

export default function ProductCard({ item, delay = 0, linkTo }) {
  const content = (
    <div className="group cursor-pointer" data-aos="fade-up" data-aos-delay={delay}>
      <div className="relative overflow-hidden aspect-[4/5] mb-6">
        <img 
          src={item.image || "/images/placeholder.webp"}
          alt={item.name || item.title} 
          loading="lazy" 
          decoding="async"
          onError={(e) => e.target.src = "/images/placeholder.webp"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {item.tag && (
          <div className="absolute top-4 left-4 bg-luxury-ivory/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider text-luxury-navy">
            {item.tag}
          </div>
        )}
        <div className="absolute inset-0 bg-luxury-navy/0 group-hover:bg-luxury-navy/20 transition-colors duration-500" />
      </div>
      <div>
        {item.collection && (
          <span className="text-xs uppercase tracking-widest text-luxury-olive mb-2 block">
            {item.collection}
          </span>
        )}
        <h3 className="font-heading text-2xl text-luxury-navy mb-2 group-hover:text-luxury-gold transition-colors">
          {item.name || item.title}
        </h3>
        {item.description && (
          <p className="text-sm text-luxury-taupe leading-relaxed mb-4">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )

  return linkTo ? <Link to={linkTo}>{content}</Link> : content
}
