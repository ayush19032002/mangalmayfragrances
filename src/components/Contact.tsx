import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleWA = () => {
    window.open('https://wa.me/919904957696', '_blank');
  };

  return ( 
    <section className="py-24 bg-section-gray relative">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Contact Details Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm uppercase tracking-widest font-bold text-black mb-6">Personalized Inquiry</span>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Experience Divine Fragrance</h2>
            <p className="text-lg text-medium-gray mb-12 font-medium leading-relaxed">Whether you have custom requirements or wholesale inquiries, we are here to provide your sanctuary with the finest aromas.</p>

            <div className="space-y-12">
              {[
                { icon: <FaMapMarkerAlt />, title: 'Our Office', content: 'Madhapar, Rajkot - 360006, Gujarat' },
                { icon: <FaPhoneAlt />, title: 'Call Center', content: '+91 99049 57696' },
                { icon: <FaEnvelope />, title: 'Email Address', content: 'mangalmayfragrances@gmail.com' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-xl text-amber-700 shrink-0 border border-divider shadow-sm transition-all group-hover:bg-amber-700 group-hover:text-white">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-near-black text-sm mb-1 uppercase tracking-widest">{item.title}</h4>
                    <p className="text-medium-gray font-medium text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inquiry Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 lg:p-16 rounded-[40px] shadow-xl border border-divider relative"
          >
            <h3 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Inquiry Form</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleWA(); }} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="block text-xs text-medium-gray uppercase tracking-wider font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-section-gray border border-divider rounded-2xl focus:outline-none focus:border-pink-400 transition-all text-sm "
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="block text-xs text-medium-gray uppercase tracking-wider font-bold">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full p-4 bg-section-gray border border-divider rounded-2xl focus:outline-none focus:border-pink-400 transition-all text-sm"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="block text-xs text-medium-gray uppercase tracking-wider font-bold">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full p-4 bg-section-gray border border-divider rounded-2xl focus:outline-none focus:border-pink-400 transition-all text-sm"
                  required
                ></textarea>
              </div>

              {/* WhatsApp Redirection Button - FIXED ALIGNMENT */}
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-4 py-3 mt-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="tracking-widest">CONNECT ON WHATSAPP</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
