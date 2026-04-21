import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import type { Product, Category } from '../contexts/AdminContext';

// ─── Static seed data ────────────────────────────────────────────────────────
const SEED_CATEGORIES: Omit<Category, 'id'>[] = [
  { name: 'ZIPPER PACKS',          description: 'Premium zipper-sealed incense packs',          image: '/product1.png' },
  { name: 'DHOOP STICKS',          description: 'Traditional thick dhoop sticks',               image: '/lavender.png' },
  { name: 'INCENSE STICKS JARS',   description: 'Luxury glass jars with incense sticks',        image: '/product2.png' },
  { name: 'LOOSE INCENSE STICKS',  description: 'Wholesale loose incense sticks',               image: '/rose.png'     },
];

const SEED_PRODUCTS: Omit<Product, 'id'>[] = [
  { name: 'Sandalwood',               description: 'Fragrance of Real Sandal',                                categoryId: '__zip__', price: 80,  image: '/product1.png', featured: true  },
  { name: 'Exotica Heaven',           description: 'Perfumed Incense Sticks',                                 categoryId: '__zip__', price: 80,  image: '/product2.png', featured: false },
  { name: 'Keshar Essence',           description: 'Fragrance of Real Saffron Threads',                       categoryId: '__zip__', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Flower Bucket (4 in 1)',   description: 'Rose • Lavender • Mogra • Ratrani',                       categoryId: '__zip__', price: 80,  image: '/hero.png',     featured: true  },
  { name: 'Imperial Collection (4 in 1)', description: 'Heritage • Magnet • Velvet Touch • Fantasia',         categoryId: '__zip__', price: 80,  image: '/product1.png', featured: false },
  { name: 'Perfume Harmony (5 in 1)', description: 'Magic World • Blue Sea • Coolant • Celebration • Feelings', categoryId: '__zip__', price: 80, image: '/product2.png', featured: false },
  { name: 'Prathna',                  description: 'A Perfumed Devotional Fragrance',                         categoryId: '__zip__', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Gugal',                    description: 'A Scented Fragrance of Gugal',                            categoryId: '__zip__', price: 80,  image: '/hero.png',     featured: false },
  { name: 'Exotica Heaven',           description: 'Premium Dhoop Stick',                                     categoryId: '__dho__', price: 80,  image: '/lavender.png', featured: false },
  { name: 'Kesar Chandan',            description: 'Traditional Wood Scent',                                  categoryId: '__dho__', price: 80,  image: '/product1.png', featured: false },
  { name: 'Guggal',                   description: 'Natural Purification',                                    categoryId: '__dho__', price: 80,  image: '/product2.png', featured: false },
  { name: 'Sandal Wood',              description: 'Pure Sandal Extract',                                     categoryId: '__dho__', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Kasturi',                  description: 'Exotic Musk Aroma',                                      categoryId: '__dho__', price: 80,  image: '/hero.png',     featured: false },
  { name: 'Rose',                     description: 'Classic Floral Calm',                                    categoryId: '__dho__', price: 80,  image: '/lavender.png', featured: false },
  { name: 'Incense Sticks Jars',      description: 'Bulk Luxury Jar',                                         categoryId: '__jar__', price: 140, image: '/product1.png', featured: false },
  { name: 'Loose Incense Sticks',     description: 'Wholesale Packs Available',                               categoryId: '__los__', price: 0,   image: '/hero.png',     featured: false },
];

const ProductList: React.FC = () => {
  const { categories, products } = useAdmin();

  const [seeded, setSeeded] = useState(false);

  // Seed default products once if products list is empty (regardless of categories)
  useEffect(() => {
    if (seeded) return;
    if (products.length === 0) {
      const now = Date.now();

      // Use existing categories if available, otherwise create defaults
      let catData: Category[];
      if (categories.length > 0) {
        catData = categories;
      } else {
        catData = SEED_CATEGORIES.map((c, i) => ({ ...c, id: String(now + i) }));
        localStorage.setItem('agarbatti_categories', JSON.stringify(catData));
      }

      // Map slot keys to real category IDs by name match, falling back to index
      const slotNames: Record<string, string[]> = {
        '__zip__': ['ZIPPER', 'ZIP'],
        '__dho__': ['DHOOP'],
        '__jar__': ['JAR', 'INCENSE STICKS JAR'],
        '__los__': ['LOOSE'],
      };
      const resolveSlot = (slot: string, fallbackIndex: number): string => {
        const keywords = slotNames[slot] || [];
        for (const kw of keywords) {
          const match = catData.find(c => c.name.toUpperCase().includes(kw));
          if (match) return match.id;
        }
        return (catData[fallbackIndex] || catData[0]).id;
      };

      const finalProducts: Product[] = SEED_PRODUCTS.map((p, i) => ({
        ...p,
        id: String(now + 100 + i),
        categoryId: resolveSlot(p.categoryId, 0),
      }));

      localStorage.setItem('agarbatti_products', JSON.stringify(finalProducts));
      window.location.reload();
    }
    setSeeded(true);
  }, [categories, products]);

  // ── Tab state ──────────────────────────────────────────────────────────────
  const allTab = 'ALL';
  const tabs = [allTab, ...categories.map(c => c.name)];
  const [activeTab, setActiveTab] = useState(allTab);

  
  const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || 'Unknown';

  const filtered = activeTab === allTab
    ? products
    : products.filter(p => getCategoryName(p.categoryId) === activeTab);

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
                <div className="bg-[#faf6ef] p-6 flex justify-center items-center min-h-[260px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-[200px] transition duration-500 group-hover:scale-110"
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

                  <button
                    className="mt-5 w-[65%] py-2.5 rounded-full bg-transparent border border-[#8b6f47] text-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition-all duration-300"
                  >
                    Inquiry Now →
                  </button>
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
