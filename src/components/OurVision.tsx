import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurVision: React.FC = () => {
  return (
    <section className="bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center">

        {/* Flatlay Photography Side */}
        <div className="w-full lg:w-1/2 h-[700px] bg-white overflow-hidden relative group">
          <img
            src="/vision-flatlay.png"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            alt="Visionary Fragrance Flatlay"
          />
          <div className="absolute inset-0 bg-near-black/5" />
        </div>

        {/* Text Content Side */}
        <div className="w-full lg:w-1/2 p-16 lg:p-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[0.6rem] font-bold tracking-[0.4em] uppercase text-brand-red mb-6 block">Future Outlook</span>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Our Vision</h2>
            <div className="prose prose-lg text-medium-gray mb-12">
              <p>Our vision is to become the global benchmark for traditional Indian fragrances, blending thousands of years of spiritual wisdom with the elegance of modern minimalist living.</p>
              <p>We see a world where every morning begins with a conscious ritual of calm, facilitated by pure ingredients and sustainable practices that respect both heritage and the planet.</p>
            </div>
            <Link to="/about" className="btn-primary no-underline inline-block">READ MORE</Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurVision;
