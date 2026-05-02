import SectionTitle from "../components/SectionTitle";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-luxury-bone min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTitle title="Enquire Us" subtitle="Connect" />
          <p className="text-luxury-taupe max-w-2xl mx-auto text-lg mt-4">
            Whether you are an interior architect, wholesaler, or a discerning
            importer, we are equipped to handle requirements of any scale.
          </p>
        </div>

        <div className="flex flex-col gap-16 items-center">
          <div
            className="w-full max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <EnquiryForm />
          </div>

          <div
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-luxury-sand"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <h4 className="uppercase tracking-widest text-xs text-luxury-olive mb-4">
                Corporate Office & Manufacturing
              </h4>
              <address className="not-italic text-luxury-navy space-y-2 text-base font-light leading-relaxed">
                Sunita Rugs
                <br />
                Maryadpatti
                <br />
                Bhadohi, Uttar Pradesh, 221401
                <br />
                India
              </address>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.25em] text-xs text-luxury-olive mb-6">
                Direct Contact
              </h4>

              <div className="space-y-5 text-luxury-navy text-base font-light">
                {/* Phone Section */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-luxury-olive mb-2">
                    Phone
                  </p>

                  <ul className="space-y-1">
                    <li>
                      <a
                        href="tel:+918707599404"
                        className="hover:text-luxury-gold transition-colors duration-300"
                      >
                        +91 87075 99404
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+919956572002"
                        className="hover:text-luxury-gold transition-colors duration-300"
                      >
                        +91 99565 72002
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Email Section */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-luxury-olive mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:info@sunitarugs.com"
                    className="hover:text-luxury-gold transition-colors duration-300"
                  >
                    info@sunitarugs.com
                  </a>
                </div>

                {/* Social & Messaging Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/918707599404?text=Hello%20I%20am%20interested%20in%20your%20luxury%20carpets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center justify-center gap-2 px-6 py-3 bg-luxury-navy text-white text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold transition-all duration-300 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/sunitarugs/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-fit items-center justify-center gap-2 px-6 py-3 bg-luxury-navy text-white text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold transition-all duration-300 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-luxury-ivory border border-luxury-sand">
              <h4 className="font-heading text-lg text-luxury-navy mb-2">
                Export Quality Standard
              </h4>
              <p className="text-luxury-taupe text-sm">
                Our manufacturing facilities are compliant with international
                labor standards, ensuring completely ethical, child-labor-free
                production lines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
