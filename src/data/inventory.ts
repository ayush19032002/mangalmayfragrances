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
  { id: 'p1', name: 'Sandalwood Zipper', description: 'Real Sandalwood Fragrance', categoryId: 'pouch-110', price: 80, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (1).jpeg' },
  { id: 'p2', name: 'Exotica Zipper', description: 'Perfumed Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (2).jpeg' },
  { id: 'p3', name: 'Keshar Zipper', description: 'Saffron Essence Aroma', categoryId: 'pouch-110', price: 80, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (3).jpeg' },
  { id: 'p4', name: 'Flower Bucket Zipper', description: '4 in 1 Floral Bliss', categoryId: 'pouch-110', price: 80, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (4).jpeg' },
  { id: 'p5', name: 'Imperial Zipper', description: 'Heritage Collection', categoryId: 'pouch-110', price: 80, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (5).jpeg' },

  // ── 400 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p6', name: 'Bulk Sandal', description: '400g Economy Pack', categoryId: 'pouch-400', price: 250, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (6).jpeg' },
  { id: 'p7', name: 'Bulk Rose', description: '400g Floral Pack', categoryId: 'pouch-400', price: 250, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (7).jpeg' },
  { id: 'p8', name: 'Bulk Lavender', description: '400g Calming Pack', categoryId: 'pouch-400', price: 250, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (8).jpeg' },
  { id: 'p9', name: 'Bulk Mogra', description: '400g Traditional Pack', categoryId: 'pouch-400', price: 250, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (9).jpeg' },
  { id: 'p10', name: 'Bulk Gugal', description: '400g Sacred Pack', categoryId: 'pouch-400', price: 250, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (10).jpeg' },

  // ── 200 Grams Agarbatti Jar ───────────────────────────────────────────────
  { id: 'p11', name: 'Premium Sandal Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (11).jpeg' },
  { id: 'p12', name: 'Premium Rose Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (12).jpeg' },
  { id: 'p13', name: 'Premium Mogra Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (13).jpeg' },
  { id: 'p14', name: 'Premium Kasturi Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (14).jpeg' },
  { id: 'p15', name: 'Premium Chandan Jar', description: '200g Luxury Jar', categoryId: 'jar-200', price: 180, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (15).jpeg' },

  // ── 100 Grams Dhoop Sticks Jar ────────────────────────────────────────────
  { id: 'p16', name: 'Natural Dhoop', description: '100g Thick Dhoop Sticks', categoryId: 'dhoop-100', price: 120, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (16).jpeg' },
  { id: 'p17', name: 'Gugal Dhoop', description: '100g Pure Gugal Dhoop', categoryId: 'dhoop-100', price: 120, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (17).jpeg' },
  { id: 'p18', name: 'Loban Dhoop', description: '100g Classic Loban', categoryId: 'dhoop-100', price: 120, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (18).jpeg' },
  { id: 'p19', name: 'Sandal Dhoop', description: '100g Real Sandal', categoryId: 'dhoop-100', price: 120, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM (19).jpeg' },
  { id: 'p20', name: 'Mixed Dhoop', description: '100g Special Blend', categoryId: 'dhoop-100', price: 120, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.11 PM.jpeg' },

  // ── 100 Grams Bambooless Sticks Jar ────────────────────────────────────────
  { id: 'p21', name: 'Pure Bambooless', description: 'Eco-Friendly Sticks', categoryId: 'bambooless-100', price: 150, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (1).jpeg' },
  { id: 'p22', name: 'Charcoal Free', description: 'Healthy Aroma Sticks', categoryId: 'bambooless-100', price: 150, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (2).jpeg' },
  { id: 'p23', name: 'Organic Blend', description: '100% Natural BAMBOOLESS', categoryId: 'bambooless-100', price: 150, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (3).jpeg' },
  { id: 'p24', name: 'Temple Grade', description: 'High Scented Bambooless', categoryId: 'bambooless-100', price: 150, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (4).jpeg' },
  { id: 'p25', name: 'Divine Spirit', description: 'Traditional Bambooless', categoryId: 'bambooless-100', price: 150, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (5).jpeg' },

  // ── Loose Incense Sticks ──────────────────────────────────────────────────
  { id: 'p26', name: 'Wholesale Sandal', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (6).jpeg' },
  { id: 'p27', name: 'Wholesale Mogra', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (7).jpeg' },
  { id: 'p28', name: 'Wholesale Gugal', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (8).jpeg' },
  { id: 'p29', name: 'Wholesale Rose', description: 'Premium Loose Sticks', categoryId: 'loose', price: 0, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (9).jpeg' },
  { id: 'p30', name: 'Wholesale Mixed', description: 'Bulk Pack Sticks', categoryId: 'loose', price: 0, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (10).jpeg' },

  // ── 225 Grams Premium Agarbatti Jars ──────────────────────────────────────
  { id: 'p31', name: 'Gold Series Jar', description: 'Exquisite Premium Aroma', categoryId: 'jar-premium-225', price: 220, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (11).jpeg' },
  { id: 'p32', name: 'Heritage Jar', description: 'Vintage Scent Experience', categoryId: 'jar-premium-225', price: 220, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (12).jpeg' },
  { id: 'p33', name: 'Mystic Jar', description: 'Sacred Blend Experience', categoryId: 'jar-premium-225', price: 220, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (13).jpeg' },
  { id: 'p34', name: 'Royal Sandal Jar', description: 'Maharajah Collection', categoryId: 'jar-premium-225', price: 220, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (14).jpeg' },
  { id: 'p35', name: 'Eternal Peace Jar', description: '225g Celebration Pack', categoryId: 'jar-premium-225', price: 220, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (15).jpeg' },

  // ── 100 Grams Premium Flora Agarbatti Jars ────────────────────────────────
  { id: 'p36', name: 'Flora Classic', description: 'Pure Flora Essence', categoryId: 'jar-premium-100', price: 160, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (16).jpeg' },
  { id: 'p37', name: 'Flora Paradise', description: '100g Luxury Scent', categoryId: 'jar-premium-100', price: 160, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (17).jpeg' },
  { id: 'p38', name: 'Flora Harmony', description: 'Sweet Floral Journey', categoryId: 'jar-premium-100', price: 160, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (18).jpeg' },
  { id: 'p39', name: 'Flora Divine', description: 'Traditional Flora Aroma', categoryId: 'jar-premium-100', price: 160, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM (19).jpeg' },
  { id: 'p40', name: 'Flora Zen', description: 'Exclusive Flora Collection', categoryId: 'jar-premium-100', price: 160, image: '/product image/WhatsApp Image 2026-04-25 at 5.35.12 PM.jpeg' },
];
