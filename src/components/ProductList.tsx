import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../data/inventory';

const ProductList: React.FC = () => {
  // ── Tab state ──────────────────────────────────────────────────────────────
  const allTab = 'ALL';
  const tabs = [allTab, ...CATEGORIES.map(c => c.name)];
  const [activeTab, setActiveTab] = useState(allTab);

  const getCategoryName = (id: string) => CATEGORIES.find(c => c.id === id)?.name || 'Unknown';

  const filtered = activeTab === allTab
    ? PRODUCTS
    : PRODUCTS.filter(p => getCategoryName(p.categoryId) === activeTab);

  return (
    <section className="relative mt-10 py-24 bg-gradient-to-b from-[#fffdf8] via-white to-[#f9f6f1] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d8c3a5]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b89b77]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Category tabs ──────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[11px] sm:text-xs tracking-[0.18em] uppercase font-semibold border transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#8b6f47] text-white border-[#8b6f47] shadow-md'
                  : 'bg-white text-[#8b6f47] border-[#e7d8c4] hover:bg-[#f7f1e8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Product grid ──────────────────────────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-[#eee4d7] rounded-[28px] overflow-hidden shadow-md hover:shadow-xl transition duration-500"
              >
                
                {/* Image */}
                <div className="bg-[#faf6ef] aspect-[3/4] flex justify-center items-center overflow-hidden border-b border-[#eee4d7]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition duration-500 group-hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = '/product1.png'; }}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs tracking-widest text-[#b08968] uppercase">{getCategoryName(product.categoryId)}</p>
                  <h3 className="text-xl font-semibold mt-2 text-[#1f1a17]">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 min-h-[40px]">{product.description}</p>

                  <div className="flex justify-between border-t border-[#eee4d7] pt-3">
                    <div>
                      <p className="text-xs text-gray-400">Price</p>
                      <p className="font-semibold text-[#8b6f47]">
                        {product.price === 0 ? 'Contact' : `₹${product.price}`}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919904957696?text=${encodeURIComponent(`Hi, I'm interested in inquiring about ${product.name}. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block w-[65%] py-2.5 rounded-full bg-transparent border border-[#8b6f47] text-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition-all duration-300 text-center no-underline text-sm font-semibold"
                  >
                    Inquiry Now →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">No products found in this category.</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default ProductList;
