import SectionTitle from '../components/SectionTitle'
import ProcessTimeline from '../components/ProcessTimeline'
import storyData from '../data/story.json'

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-20" data-aos="fade-up">
        <SectionTitle title={storyData.heritage.title} subtitle="Our Roots" />
        <p className="text-luxury-taupe text-lg leading-relaxed mt-8 text-left md:text-center">
          {storyData.heritage.description}
        </p>
      </div>

      <div className="w-full h-[500px] mb-24" data-aos="fade-in">
        <img 
          src="https://images.unsplash.com/photo-1620646233562-f2a31ad24425?auto=format&fit=crop&q=80&w=2000" 
          alt="Bhadohi Loom" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-24">
        <div className="bg-luxury-navy text-luxury-ivory p-12 text-center" data-aos="zoom-in">
          <span className="text-luxury-gold text-4xl mb-4 block">✦</span>
          <h3 className="font-heading text-3xl mb-6">{storyData.gi_tag.title}</h3>
          <p className="text-luxury-bone/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {storyData.gi_tag.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle title="The Making" subtitle="Process" />
        <ProcessTimeline />
      </div>
    </div>
  )
}
