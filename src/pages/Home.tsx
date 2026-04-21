import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductBannerSplit from '../components/ProductBannerSplit';
import About from '../components/About';
import OurVision from '../components/OurVision';
import TopSelling from '../components/TopSelling';
import FragranceNotes from '../components/FragranceNotes';

const Home: React.FC = () => {
  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ( 
    <div className="home-page animate-fade-in overflow-hidden">
      <Hero />
      
      <div className="reveal">
        <Features />
      </div>

      <div className="reveal">
        <FragranceNotes />
      </div>

      <div className="reveal">
        <ProductBannerSplit />
      </div>

      <div className="reveal">
        <TopSelling />
      </div>

      <div className="reveal bg-white">
        <About />
      </div>

      <div className="reveal bg-section-gray">
        <OurVision />
      </div>

      {/* Trust Badge Section */}
      <section className="py-24 bg-white border-t border-divider">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">
            {['100% Traditional', 'Sustainably Sourced', 'Natural Ingredients', 'Temple Quality'].map(trust => (
              <span key={trust} className="text-sm tracking-[0.2em] text-black uppercase">{trust}</span>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Home;
