import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import Features from '../components/Features';
import OurVision from '../components/OurVision';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">

      {/* Editorial Header */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        > 
          <span className="subtitle-premium">Our Legacy</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>The Story of Mangalmay</h1>
          <p className="text-medium-gray max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Crafting the bridge between ancient spiritual wisdom and modern minimalist sanctuary since 2008.
          </p>
        </motion.div>
      </div>

      {/* Main Sections */}
      <About />

      <div className="py-24 bg-section-gray">
        <OurVision />
      </div>

      <Features />

      {/* Values / Quote Section */}
      <div className="py-32 bg-white text-center">
        <div className="max-w-[1000px] mx-auto px-6 italic font-heading text-3xl md:text-5xl text-near-black/80 leading-tight">
          "Aroma is the silent language of the soul, turning every ordinary space into a divine sanctuary."
        </div>
        <div className="mt-8 text-amber-700 font-bold tracking-[0.3em] uppercase text-xs">
          - THE MANGALMAY PHILOSOPHY -
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
