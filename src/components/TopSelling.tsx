import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../data/inventory';

const TopSelling: React.FC = () => {
  // Get featured products or just the first 4 if none marked featured
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : PRODUCTS.slice(0, 4);

  const getCategoryName = (id: string) => CATEGORIES.find(c => c.id === id)?.name || 'Unknown';

  const handleInquiry = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in inquiring about ${productName}. Please provide more details.`);
    window.open(`https://wa.me/919904957696?text=${message}`, '_blank');
  };

  return (
    <section className="relative mt-10 py-24 bg-gradient-to-b from-[#fffdf8] via-white to-[#f9f6f1] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d8c3a5]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b89b77]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 mb-5 text-xs tracking-[0.3em] uppercase rounded-full bg-[#f4ede3] text-[#8b6f47] font-medium">
            Best Collection
          </span>

          <h2
            className="text-[clamp(2.2rem,4vw,3.6rem)] font-semibold text-[#1f1a17] leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Top Selling Products
          </h2>

          <p className="max-w-2xl mx-auto text-[15px] md:text-[16px] text-[#6f6254] leading-7">
            Discover our most loved incense collection, crafted to bring peace,
            positivity, and a luxurious fragrance experience into your space.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {displayProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-[#eee4d7] rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition duration-500"
            >
              <div className="bg-[#faf6ef] aspect-[3/4] flex justify-center items-center overflow-hidden border-b border-[#eee4d7]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition group-hover:scale-110" 
                  onError={e => { (e.target as HTMLImageElement).src = '/product1.png'; }}
                />
              </div>

              <div className="p-6">
                <p className="text-xs tracking-widest text-[#b08968] uppercase">{getCategoryName(product.categoryId)}</p>
                <h3 className="text-xl font-semibold mt-2 text-[#1f1a17]">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-1">{product.description}</p>

                <div className="flex justify-between border-t pt-3">
                  <div>
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="font-semibold text-[#8b6f47]">
                      {product.price === 0 ? 'Contact' : `₹${product.price}`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleInquiry(product.name)}
                  className="mt-5 w-full py-2.5 rounded-full bg-transparent border border-[#8b6f47] text-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition-all duration-300 font-semibold"
                >
                  Inquiry Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 italic">No products available in collection yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopSelling;
