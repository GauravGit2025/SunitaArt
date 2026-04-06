export default function ProcessTimeline() {
  const steps = [
    { title: "Design Concept", desc: "Translating architectural visions into intricate rug motifs." },
    { title: "Yarn Selection", desc: "Sourcing premium wool, silk, and natural fibers for enduring quality." },
    { title: "Dyeing", desc: "Utilizing traditional vat dyeing for vibrant, fast colors that last generations." },
    { title: "Loom Setup", desc: "Meticulous preparation of the foundation threads by master craftsmen." },
    { title: "Weaving & Knotting", desc: "The slow, rhythmic process of tying thousands of knots by hand." },
    { title: "Washing & Finishing", desc: "Specialized washing to reveal the carpet's true luster and softness." },
  ]

  return (
    <div className="py-20 bg-luxury-bone">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start" data-aos="fade-up">
              <div className="text-luxury-gold font-heading text-5xl md:text-6xl opacity-50 font-light hidden md:block">
                0{index + 1}
              </div>
              <div className="flex-1 md:pt-4 border-t border-luxury-sand pt-6">
                <span className="text-luxury-olive text-sm uppercase tracking-widest mb-2 block md:hidden">
                  Step 0{index + 1}
                </span>
                <h3 className="font-heading text-2xl text-luxury-navy mb-3">{step.title}</h3>
                <p className="text-luxury-taupe">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
