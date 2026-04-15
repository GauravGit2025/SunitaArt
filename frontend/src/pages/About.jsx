import SectionTitle from '../components/SectionTitle'
import ProcessTimeline from '../components/ProcessTimeline'
import storyData from '../data/story.json'

import { HeartHandshake, Users, Recycle } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Our Story Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-24" data-aos="fade-up">
        <SectionTitle title={storyData.heritage.title} subtitle="Our Story" />
        <p className="text-luxury-taupe text-lg leading-relaxed mt-8 text-left md:text-center">
          {storyData.heritage.description}
        </p>
      </div>

      {/* Making Process Section */}
      <div className="w-full mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <SectionTitle title="The Making" subtitle="Process" />
        </div>
        <ProcessTimeline />
      </div>

      {/* GI Tag Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-luxury-navy text-luxury-ivory p-12 text-center" data-aos="zoom-in">
          <span className="text-luxury-gold text-4xl mb-4 block">✦</span>
          <h3 className="font-heading text-3xl mb-6">{storyData.gi_tag.title}</h3>
          <p className="text-luxury-bone/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {storyData.gi_tag.description}
          </p>
        </div>
      </div>

      {/* Ethical Practices Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 mb-12 border-t border-luxury-sand pt-24">
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTitle title="Our Commitment" subtitle="Ethics & Sustainability" alignment="center" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full bg-luxury-bone flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-ivory transition-colors duration-500">
              <HeartHandshake strokeWidth={1} size={40} />
            </div>
            <h4 className="font-heading text-xl text-luxury-navy mb-4 tracking-wide uppercase text-sm font-medium">Ethical Foundation</h4>
            <p className="text-luxury-taupe leading-relaxed">
              Child labour is strictly prohibited across all our facilities and artisan networks. We believe in fair, ethical, and preserving practices.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full bg-luxury-bone flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-ivory transition-colors duration-500">
              <Users strokeWidth={1} size={40} />
            </div>
            <h4 className="font-heading text-xl text-luxury-navy mb-4 tracking-wide uppercase text-sm font-medium">Women Empowerment</h4>
            <p className="text-luxury-taupe leading-relaxed">
              Prioritizing women empowerment by providing skill development, fair wages, and leadership opportunities within our weaving communities.
            </p>
          </div>

          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full bg-luxury-bone flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-ivory transition-colors duration-500">
              <Recycle strokeWidth={1} size={40} />
            </div>
            <h4 className="font-heading text-xl text-luxury-navy mb-4 tracking-wide uppercase text-sm font-medium">Sustainable Future</h4>
            <p className="text-luxury-taupe leading-relaxed">
              Committed to minimizing our environmental footprint through the systematic recycling of water and raw materials in our production process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
