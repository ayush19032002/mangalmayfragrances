import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-luxury-bg">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 pt-16 text-center">
        <span className="subtitle-premium">Reach Out</span>
        <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Get In Touch</h1>
        <p className="max-w-xl mx-auto text-text-body font-medium mb-12">We value your inquiries and are dedicated to bringing the best of nature to your doorstep.</p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage; 
