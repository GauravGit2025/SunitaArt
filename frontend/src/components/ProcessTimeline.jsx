export default function ProcessTimeline() {
  const steps = [
    {
      title: "Design Concept",
      desc: "Translating architectural visions into intricate rug motifs.",
      image: "/images/Rugs/design.webp",
    },
    {
      title: "Yarn Selection",
      desc: "Sourcing premium wool, silk, and natural fibers for enduring quality.",
      image: "/images/Rugs/yarn_selection.webp",
    },
    {
      title: "Dyeing",
      desc: "Utilizing traditional vat dyeing for vibrant, fast colors that last generations.",
      image: "/images/Rugs/yarn.webp",
    },
    {
      title: "Loom Setup & Weaving",
      desc: "Meticulous preparation of the foundation threads by master craftsmen.",
      image: "/images/Rugs/loom_setup.webp",
    },
    {
      title: "Binding",
      desc: "The slow, rhythmic process of tying thousands of knots by hand.",
      image: "/images/Rugs/weaving.webp",
    },
    {
      title: "Washing & Finishing",
      desc: "Specialized washing to reveal the carpet's true luster and softness.",
      image: "/images/Rugs/washing.webp",
    },
  ];

  return (
    <div className="py-20 bg-luxury-bone">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
                data-aos="fade-up"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden aspect-[4/3] group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex gap-6 md:gap-10">
                  <div className="text-luxury-gold font-heading text-6xl md:text-7xl opacity-40 font-light pt-2">
                    0{index + 1}
                  </div>
                  <div className="flex-1 pt-4 border-t border-luxury-sand">
                    <span className="text-luxury-olive text-sm uppercase tracking-widest mb-3 block md:hidden">
                      Step 0{index + 1}
                    </span>
                    <h3 className="font-heading text-3xl text-luxury-navy mb-4">
                      {step.title}
                    </h3>
                    <p className="text-luxury-taupe text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
