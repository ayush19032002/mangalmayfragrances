import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductProps {
  name: string;
  category: string;
  price: string;
  weight: string;
  image: string;
  notes?: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, category, price, weight, image, notes }) => {
  const handleInquiry = () => {
    const message = encodeURIComponent(`Hi, I'm interested in inquiring about ${name}. Please provide more details.`);
    window.open(`https://wa.me/919904957696?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full overflow-hidden"
    >
      <div className="aspect-[4/5] flex items-center justify-center overflow-hidden relative rounded-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110"
          loading="lazy" 
        />
        
        {/* Dark Charcoal Price Badge - Bottom Left */}
        <div className="absolute bottom-4 left-4 bg-near-black text-white px-4 py-1 text-[0.65rem] font-bold rounded-md shadow-lg group-hover:bg-amber-700 transition-colors duration-300">
           MRP - {price}/-
        </div>

        {/* Quick View Overlay */}
        {/* <div className="absolute inset-0 bg-near-black/0 group-hover:bg-near-black/5 transition-colors duration-500" /> */}
      </div>
       
      <div className="py-6 flex flex-col items-start px-2 flex-grow">
        <span className="text-[0.6rem] font-bold tracking-[0.2em] text-amber-700 uppercase mb-2">
          {category}
        </span>
        <h3 className="text-[clamp(1.4rem,2vw,1.8rem)] font-normal text-near-black leading-tight mb-2 min-h-[3.5rem] lg:min-h-[4rem]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {name}
        </h3>
        
        {notes && (
          <p className="text-medium-gray/60 text-[0.6rem] font-bold tracking-[0.1em] uppercase mb-4 leading-relaxed min-h-[2rem]">
             {notes}
          </p>
        )}

        {!notes && <div className="h-[2rem]" />}

        <div className="flex items-center gap-4 mb-6">
           <p className="text-medium-gray text-[0.65rem] font-medium tracking-wide">
              Weight - {weight}
           </p>
           <div className="w-1 h-1 rounded-full bg-divider" />
           <p className="text-near-black text-[0.65rem] font-bold">
              PREMIUM
           </p>
        </div>

        {/* WhatsApp Inquiry Button */}
        <button 
          onClick={handleInquiry}
          className="btn-primary !px-6 !py-3 !text-[0.65rem] flex items-center gap-3 w-full justify-center transition-all !rounded-lg mt-auto"
        >
          <FaWhatsapp className="text-lg" />
          <span>INQUIRE NOW</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
