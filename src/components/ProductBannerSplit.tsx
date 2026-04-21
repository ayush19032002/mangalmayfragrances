import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductBannerSplit: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch h-auto lg:h-[600px]">

          {/* Shop Showcase (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/3 bg-section-gray flex flex-col md:flex-row items-center overflow-hidden rounded-[40px] lg:rounded-none"
          >
            <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col items-center md:items-start text-center md:text-left justify-center">
              <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Check out our incense shop</h2>
              <Link to="/products" className="btn-link-underline">FIND US</Link>
            </div>
            <div className="w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center relative">
              <img src="/hero.png" className="w-[60%] md:w-[80%] h-auto hover:drop-shadow-xl transition-all duration-300" alt="Kesar Chandan Pack" />
            </div>
          </motion.div>

          {/* New Products Showcase (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 bg-section-gray p-12 lg:p-16 flex flex-col justify-between items-center text-center overflow-hidden rounded-[40px] lg:rounded-none"
          >
            <div>
              <h3 className="text-[clamp(2rem,4vw,2.8rem)] font-normal text-near-black leading-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Try our new products</h3>
              <Link to="/contact" className="btn-link-underline">CONTACT US</Link>
            </div>
            <div className="relative mt-12 mb-6">
              <div className="absolute inset-0 bg-brand-red/5 rounded-full blur-3xl scale-125" />
              <img src="/rose.png" className="w-40 lg:w-48 h-auto relative z-10 hover:drop-shadow-xl transition-all duration-300" alt="Kanha Dry Dhoop" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBannerSplit;
