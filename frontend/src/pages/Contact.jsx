import SectionTitle from '../components/SectionTitle'
import EnquiryForm from '../components/EnquiryForm'

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-luxury-bone min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTitle title="Enquire Us" subtitle="Connect" />
          <p className="text-luxury-taupe max-w-2xl mx-auto text-lg mt-4">
            Whether you are an interior architect, wholesaler, or a discerning importer, we are equipped to handle requirements of any scale.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center">
          
          <div className="w-full max-w-4xl" data-aos="fade-up" data-aos-delay="100">
            <EnquiryForm />
          </div>

          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-luxury-sand" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h4 className="uppercase tracking-widest text-xs text-luxury-olive mb-4">Corporate Office & Manufacturing</h4>
              <address className="not-italic text-luxury-navy space-y-2 text-base font-light leading-relaxed">
                Sunita Rugs<br/>
                Carpet City, Main Road<br/>
                Bhadohi, Uttar Pradesh, 221401<br/>
                India
              </address>
            </div>
            
            <div>
              <h4 className="uppercase tracking-widest text-xs text-luxury-olive mb-4">Direct Contact</h4>
              <div className="space-y-4 text-luxury-navy text-base font-light">
                <p>Phone: <a href="tel:+919999900000" className="hover:text-luxury-gold transition-colors">+91 99999 00000</a></p>
                <p>Email: <a href="mailto:export@sunitarugs.com" className="hover:text-luxury-gold transition-colors">export@sunitarugs.com</a></p>
              </div>
            </div>

            <div className="p-6 bg-luxury-ivory border border-luxury-sand">
              <h4 className="font-heading text-lg text-luxury-navy mb-2">Export Quality Standard</h4>
              <p className="text-luxury-taupe text-sm">Our manufacturing facilities are compliant with international labor standards, ensuring completely ethical, child-labor-free production lines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
