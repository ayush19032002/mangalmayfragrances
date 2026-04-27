export interface Category {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  { id: 'pouch-110',      name: '110 Grams Zipper Pouch',           description: 'Standard premium zipper pouch collection' },
  { id: 'pouch-400',      name: '400 Grams Zipper Pouch',           description: 'Bulk saver zipper pouch collection' },
  { id: 'jar-200',        name: '200 Grams Agarbatti Jar',          description: 'Luxury jars with 200g incense sticks' },
  { id: 'dhoop-100',      name: '100 Grams Dhoop Sticks Jar',       description: 'Traditional 100g dhoop sticks jar' },
  { id: 'bambooless-100', name: '100 Grams Bambooless Sticks Jar',  description: 'Natural 100g bambooless sticks jar' },
  { id: 'loose',          name: 'Loose Incense Sticks',             description: 'Wholesale loose incense sticks' },
  { id: 'jar-premium-225', name: '225 Grams Premium Agarbatti Jars', description: 'Elite 225g premium agarbatti series' },
  { id: 'jar-premium-100', name: '100 Grams Premium Flora Agarbatti Jars', description: 'Exclusive 100g premium flora jars' },
];

export const PRODUCTS: Product[] = [
  // ── 110 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p1', name: 'Sandalwood Zipper', description: 'Real Sandalwood Fragrance', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM.jpeg' },
  { id: 'p2', name: 'Exotica Zipper', description: 'Perfumed Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM (1).jpeg' },
  { id: 'p3', name: 'Keshar Zipper', description: 'Saffron Essence Aroma', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM.jpeg' },
  { id: 'p4', name: 'Flower Bucket Zipper', description: '4 in 1 Floral Bliss', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (1).jpeg' },
  { id: 'p5', name: 'Rose Premium Zipper', description: 'Premium Rose Fragrance', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (2).jpeg' },
  { id: 'p6', name: 'Mogra Zipper', description: 'Jasmine Mogra Aroma', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (3).jpeg' },
  { id: 'p7', name: 'Lavender Zipper', description: 'Calming Lavender Scent', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (4).jpeg' },
  { id: 'p8', name: 'Imperial Zipper', description: 'Heritage Collection', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.35.37 PM.jpeg' },

  // ── 400 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p9', name: 'Bulk Sandal', description: '400g Economy Pack', categoryId: 'pouch-400', price: 250, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM.jpeg' },
  { id: 'p10', name: 'Bulk Rose', description: '400g Floral Pack', categoryId: 'pouch-400', price: 250, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (1).jpeg' },
  { id: 'p11', name: 'Bulk Lavender', description: '400g Calming Pack', categoryId: 'pouch-400', price: 250, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (2).jpeg' },
  { id: 'p12', name: 'Bulk Mogra', description: '400g Traditional Pack', categoryId: 'pouch-400', price: 250, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM.jpeg' },
  { id: 'p13', name: 'Bulk Gugal', description: '400g Sacred Pack', categoryId: 'pouch-400', price: 250, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.35.37 PM.jpeg' },

  // ── 200 Grams Agarbatti Jar ───────────────────────────────────────────────
  { id: 'p14', name: 'Premium Sandal Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.03 PM.jpeg' },
  { id: 'p15', name: 'Premium Rose Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.03 PM (1).jpeg' },
  { id: 'p16', name: 'Premium Mogra Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.03 PM (2).jpeg' },
  { id: 'p17', name: 'Premium Kasturi Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.04 PM.jpeg' },
  { id: 'p18', name: 'Premium Chandan Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.04 PM (1).jpeg' },
  { id: 'p19', name: 'Premium Lavender Jar', description: '200g Calming Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.04 PM (2).jpeg' },
  { id: 'p20', name: 'Premium Gugal Jar', description: '200g Sacred Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.04 PM (3).jpeg' },
  { id: 'p21', name: 'Premium Mogra Classic Jar', description: '200g Classic Jar', categoryId: 'jar-200', price: 180, image: '/product image/200 Grams Agarbatti Jar/WhatsApp Image 2026-04-27 at 12.41.04 PM (4).jpeg' },

  // ── 100 Grams Dhoop Sticks Jar ────────────────────────────────────────────
  { id: 'p19', name: 'Natural Dhoop', description: '100g Thick Dhoop Sticks', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM.jpeg' },
  { id: 'p20', name: 'Gugal Dhoop', description: '100g Pure Gugal Dhoop', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (1).jpeg' },
  { id: 'p21', name: 'Loban Dhoop', description: '100g Classic Loban', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (2).jpeg' },
  { id: 'p22', name: 'Sandal Dhoop', description: '100g Real Sandal', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM.jpeg' },
  { id: 'p23', name: 'Mixed Dhoop', description: '100g Special Blend', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (1).jpeg' },
  { id: 'p24', name: 'Premium Dhoop', description: '100g Premium Quality', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (2).jpeg' },
  { id: 'p25', name: 'Traditional Dhoop', description: '100g Traditional Blend', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM.jpeg' },
  { id: 'p26', name: 'Sacred Dhoop', description: '100g Sacred Aroma', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM (1).jpeg' },
  { id: 'p27', name: 'Pure Gugal Dhoop', description: '100g Pure Gugal', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM.jpeg' },
  { id: 'p28', name: 'Classic Loban Dhoop', description: '100g Classic', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (1).jpeg' },
  { id: 'p29', name: 'Aromatic Dhoop', description: '100g Aromatic Blend', categoryId: 'dhoop-100', price: 120, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (2).jpeg' },

  // ── 100 Grams Bambooless Sticks Jar ────────────────────────────────────────
  { id: 'p24', name: 'Pure Bambooless', description: 'Eco-Friendly Sticks', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM.jpeg' },
  { id: 'p25', name: 'Charcoal Free', description: 'Healthy Aroma Sticks', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM (1).jpeg' },
  { id: 'p26', name: 'Organic Blend', description: '100% Natural BAMBOOLESS', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM.jpeg' },
  { id: 'p27', name: 'Temple Grade', description: 'High Scented Bambooless', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (1).jpeg' },
  { id: 'p28', name: 'Divine Spirit', description: 'Traditional Bambooless', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (2).jpeg' },
  { id: 'p29', name: 'Natural Aroma', description: '100% Natural', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (3).jpeg' },
  { id: 'p30', name: 'Eco Friendly', description: 'Eco-Friendly Choice', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (4).jpeg' },
  { id: 'p31', name: 'Pure Nature', description: 'Pure Natural Sticks', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM.jpeg' },
  { id: 'p32', name: 'Herbal Blend', description: 'Herbal Aroma Blend', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (1).jpeg' },
  { id: 'p33', name: 'Premium Bamboo', description: 'Premium Quality', categoryId: 'bambooless-100', price: 150, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (2).jpeg' },

  // ── Loose Incense Sticks ──────────────────────────────────────────────────
  { id: 'p29', name: 'Wholesale Sandal', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '' },
  { id: 'p30', name: 'Wholesale Mogra', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '' },
  { id: 'p31', name: 'Wholesale Gugal', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '' },
  { id: 'p32', name: 'Wholesale Rose', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '' },
  { id: 'p33', name: 'Wholesale Mixed', description: 'Bulk Pack Sticks', categoryId: 'loose', price: 0, image: '' },

  // ── 225 Grams Premium Agarbatti Jars ──────────────────────────────────────
  { id: 'p34', name: 'Gold Series Jar', description: 'Exquisite Premium Aroma', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },
  { id: 'p35', name: 'Heritage Jar', description: 'Vintage Scent Experience', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.12 PM.jpeg' },
  { id: 'p36', name: 'Mystic Jar', description: 'Sacred Blend Experience', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM.jpeg' },
  { id: 'p37', name: 'Royal Sandal Jar', description: 'Maharajah Collection', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (1).jpeg' },
  { id: 'p38', name: 'Eternal Peace Jar', description: '225g Celebration Pack', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (2).jpeg' },
  { id: 'p39', name: 'Divine Essence Jar', description: 'Premium Spiritual Aroma', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM.jpeg' },
  { id: 'p40', name: 'Celestial Jar', description: 'Heavenly Scent Blend', categoryId: 'jar-premium-225', price: 220, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM (1).jpeg' },

  // ── 100 Grams Premium Flora Agarbatti Jars ────────────────────────────────
  { id: 'p39', name: 'Flora Classic', description: 'Pure Flora Essence', categoryId: 'jar-premium-100', price: 160, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.06.53 PM.jpeg' },
  { id: 'p40', name: 'Flora Paradise', description: '100g Luxury Scent', categoryId: 'jar-premium-100', price: 160, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },
];
