import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="3" />
        <path d="M12 11c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" />
        <path d="M12 2v2M8 3.5l1 1.7M16 3.5l-1 1.7" />
      </svg>
    ),
    title: 'Increase calm and focus',
    desc: 'Plant-based essential oils facilitate mental clarity and sharper cognitive focus for your daily tasks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c-4.4 0-8-3.6-8-8 0-3 1.7-5.6 4.2-7C9 6.4 9.9 6 12 6s3 .4 3.8 1C18.3 8.4 20 11 20 14c0 4.4-3.6 8-8 8z" />
        <path d="M12 6V2M9 3l3 3 3-3" />
      </svg>
    ),
    title: 'Reduce stress and anxiety',
    desc: 'Botanical blends carefully formulated to soothe the nervous system and curb modern anxiety.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        <path d="M14 10l2 2-2 2M10 10l-2 2 2 2" />
      </svg>
    ),
    title: 'Natural sleep aid',
    desc: 'Gentle floral notes prepare your sensory environment for a restorative and deep sleep cycle.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
    title: 'Deepen spiritual practice',
    desc: 'Elevate your yoga or meditation sessions with aromas that sharpen your internal sensory awareness.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3l1.6 4.9H19l-4.2 3 1.6 4.9L12 13l-4.4 2.8 1.6-4.9L5 8h5.4z" />
      </svg>
    ),
    title: 'Awaken creative energy',
    desc: 'Cleanse your workspace aura to unlock new dimensions of inspiration and creative flow.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 12h3M21 12h-3M12 3v3M12 21v-3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M16.3 7.7l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Space purification',
    desc: 'Dispel negative vibrations and maintain a pure, high-vibrational atmosphere in your home sanctuary.',
  },
];

/* ── Smoke SVG paths ── */
const SmokePaths: React.FC = () => (
  <svg
    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
    style={{ top: '-88px', width: 70, height: 100 }}
    viewBox="0 0 70 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="s1"
      d="M35 95 C35 80,20 70,30 55 C40 40,20 28,32 12 C36 6,38 2,36 0"
      stroke="currentColor"
      className="text-amber-700"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <animate attributeName="opacity" values="0;0.45;0" dur="4s" repeatCount="indefinite" begin="0s" />
      <animate attributeName="stroke-dasharray" values="0 200;200 0" dur="4s" repeatCount="indefinite" begin="0s" />
    </path>
    <path
      id="s2"
      d="M35 95 C35 78,50 65,38 52 C26 38,44 24,35 8 C33 4,32 2,34 0"
      stroke="currentColor"
      className="text-medium-gray/30"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <animate attributeName="opacity" values="0;0.3;0" dur="5s" repeatCount="indefinite" begin="1.5s" />
      <animate attributeName="stroke-dasharray" values="0 200;200 0" dur="5s" repeatCount="indefinite" begin="1.5s" />
    </path>
  </svg>
);

/* ── Single benefit item ── */
interface BenefitItemProps {
  benefit: typeof benefits[0];
  index: number;
  align: 'left' | 'right';
}

const BenefitItem: React.FC<BenefitItemProps> = ({ benefit, index, align }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex items-start gap-6 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}
    >
      {/* Icon ring */}
      <div className=" w-14 h-14 rounded-full border border-amber-700 bg-white flex items-center justify-center text-amber-700 transition-all duration-500 group-hover:bg-amber-700 group-hover:text-white group-hover:border-amber-700"
        style={{ '--rot': align === 'left' ? '-10deg' : '10deg' } as React.CSSProperties}
      >
        {benefit.icon}
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center ${align === 'right' ? 'items-end' : 'items-start'}`}>
        <h3 className="text-[clamp(1.5rem,2vw,1.8rem)] font-normal text-near-black leading-tight mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {benefit.title}
        </h3>
        <p className="text-sm text-medium-gray leading-relaxed max-w-[280px] font-medium opacity-80">
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  );
};

/* ── Central incense column ── */
const IncenseCenter: React.FC = () => {
  const petals = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center py-8 relative select-none">
      {/* Stick + smoke */}
      <div className="relative w-[5px] h-[280px]">
        <SmokePaths />
        {/* Stick body */}
        <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-700 via-divider to-divider" />
        {/* Ember tip */}
        <motion.div
          animate={{ boxShadow: ['0 0 6px 2px #C0272D40', '0 0 15px 6px #C0272D80', '0 0 6px 2px #C0272D40'] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-amber-700 rounded-full"
        />
      </div>

      {/* Shadow base */}
      <div className="w-24 h-3 rounded-full bg-near-black/5 blur-[4px] mt-2 mb-8" />

      {/* Rotating petal ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="relative w-[140px] h-[140px]"
      >
        {petals.map((i) => (
          <div
            key={i}
            className="absolute w-[24px] h-[40px] rounded-[50%_50%_40%_40%] bg-amber-700/10 border border-amber-700/20"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: 'center 125%',
              transform: `translateX(-50%) rotate(${i * 51.4}deg)`,
            }}
          />
        ))}
      </motion.div>

      {/* Label */}
      <div className="mt-6 w-px h-10 bg-divider" />
      <p
        className="mt-4 text-[0.65rem] tracking-[0.2em] text-medium-gray/60 uppercase font-black"
        style={{ fontStyle: 'italic' }}
      >
        pure aromatherapy
      </p>
    </div>
  );
};

/* ── Main section ── */
const Features: React.FC = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-32 bg-white border-y border-divider overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.4em] font-bold text-amber-700 mb-6 block">
            The Sacred Science
          </span>
          <h2
            className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-black leading-tight mb-3"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Benefits of Incense
          </h2>
          <p className="text-[12px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Elevating Life Through Traditional Aromatherapy
          </p>
        </motion.div>

        {/* 3-col layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-16">
            {benefits.slice(0, 3).map((b, i) => (
              <BenefitItem key={i} benefit={b} index={i} align="left" />
            ))}
          </div>

          {/* Center */}
          <div className="hidden lg:flex flex-1 justify-center scale-110">
            <IncenseCenter />
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-16">
            {benefits.slice(3, 6).map((b, i) => (
              <BenefitItem key={i} benefit={b} index={i + 3} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;