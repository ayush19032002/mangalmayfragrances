import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">

          {/* Brand Story Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>About Us</h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-lg">Mangalmay Fragrances was born from a simple yet profound vision: to bring the sacred atmosphere of an Indian temple into every modern home. Our journey began in Saurashtra, where we discovered the transformative power of pure, natural aromas.</p>
              <p>We take pride in our traditional hand-rolling techniques, ensuring each stick carries the soul of the botanicals we source. From the rich woods of Mysore to the delicate roses of Kannauj, we bridge heritage with contemporary living.</p>
              <p>Our commitment to purity means no synthetic additives, just the honest, divine serenity that nature intended for your rituals, meditation, and daily peace.</p>
            </div>
            <Link to="/about" className="btn-primary mt-12 no-underline inline-block">READ MORE</Link>
          </motion.div>

          {/* Collage Side (Simulated) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-square bg-section-gray rounded-[40px] overflow-hidden shadow-sm">
                  <img src="/download.jpg" className="w-full h-full object-cover" alt="Collage Item" />
                </div>
                <div className="aspect-[3/4] bg-section-gray rounded-[40px] overflow-hidden shadow-lg border-8 border-white">
                  <img src="/rose.png" className="h-full w-full object-cover" alt="Collage Item" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[3/4] bg-section-gray rounded-[40px] overflow-hidden shadow-lg border-8 border-white">
                  <img src="/hero.png" className="w-full h-full object-cover" alt="Collage Item" />
                </div>
                <div className="aspect-square bg-section-gray rounded-[40px] overflow-hidden">
                  <img src="/img1.jpg" className="w-full h-full object-cover" alt="Collage Item" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
