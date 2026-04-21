import React from 'react';
import { motion } from 'framer-motion';

const FragranceNotes: React.FC = () => {
  const notes = [
    {
      name: 'Mysore Sandalwood',
      character: 'Sacred & Woody',
      desc: 'A deep, cream-like woodiness that grounds the spirit and purifies the atmosphere.',
      experience: 'Temple-like tranquility',
      image: '/product1.png',
      color: '#FDF5EE'
    },
    {
      name: 'Kannauj Rose',
      character: 'Sweet & Ethereal',
      desc: 'The fresh, dew-kissed scent of 100 petals, bringing a heart-opening sense of joy.',
      experience: 'Morning garden bliss',
      image: '/rose.png',
      color: '#FDEEF2'
    },
    {
      name: 'French Lavender',
      character: 'Calm & Herbaceous',
      desc: 'Gently soothing blossoms that melt away mental clutter and invite deep, peaceful rest.',
      experience: 'Soothing twilight calm',
      image: '/lavender.png',
      color: '#F3EEFD'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.4em] font-bold text-amber-700 mb-6 block">Sensory Journey</span>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-black leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Experience the Essence</h2>
            <p className="text-gray-400 max-w-lg mx-auto tracking-wide">Discover the intricate fragrance notes that turn our sticks into divine journeys of the soul.</p>
          </motion.div>
        </div>

        {/* Sensory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {notes.map((note, idx) => (
            <motion.div
              key={note.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="group p-10 lg:p-12 rounded-[36px] flex flex-col items-center text-center transition-all duration-700"
              style={{ backgroundColor: note.color }}
            >
              <div className="w-40 h-40 lg:w-56 lg:h-56 mb-12 relative">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-[40px] group-hover:scale-125 transition-transform duration-1000" />
                <img src={note.image} className="w-full h-full object-contain relative z-10 drop-shadow-xl transform group-hover:-translate-y-4 group-hover:rotate-6 transition-all duration-700" alt={note.name} />
              </div>

              <div className="space-y-4">
                <span className="text-[0.6rem] font-black tracking-[0.3em] text-amber-700 uppercase">{note.character}</span>
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-normal text-near-black leading-tight mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{note.name}</h3>
                <p className="text-sm text-medium-gray leading-relaxed font-medium mt-4 mb-8">
                  {note.desc}
                </p>

                <div className="pt-6 border-t border-near-black/5">
                  <span className="text-[0.6rem] font-bold text-near-black uppercase tracking-widest">{note.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sensory Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-divider text-center italic text-pink-300 font-heading text-xl lg:text-2xl"
        >
          "The nose is the shortest path to the heart, and our fragrances are designed to guide the way."
        </motion.div>
      </div>
    </section>
  );
};

export default FragranceNotes;
