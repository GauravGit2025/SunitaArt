export default function SectionTitle({ title, subtitle, alignment = 'center' }) {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="uppercase tracking-[0.2em] text-xs text-luxury-olive mb-4 block" data-aos="fade-up">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl text-luxury-navy font-medium" data-aos="fade-up" data-aos-delay="100">
        {title}
      </h2>
      <div className={`w-12 h-0.5 bg-luxury-gold mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`} data-aos="fade-right" data-aos-delay="200" />
    </div>
  )
}
