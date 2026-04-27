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
  { id: 'p1', name: 'Sandalwood Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM.jpeg' },
  { id: 'p2', name: 'Exotica Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM (1).jpeg' },
  { id: 'p3', name: 'Keshar Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM.jpeg' },
  { id: 'p4', name: 'Flower Bucket Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (1).jpeg' },
  { id: 'p5', name: 'Rose Premium Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (2).jpeg' },
  { id: 'p6', name: 'Mogra Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (3).jpeg' },
  { id: 'p7', name: 'Lavender Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (4).jpeg' },
  { id: 'p8', name: 'Imperial Zipper', description: 'Scented Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.35.37 PM.jpeg' },

  // ── 400 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p9', name: 'Bulk Sandal', description: 'Scented Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM.jpeg' },
  { id: 'p10', name: 'Bulk Rose', description: 'Scented Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (1).jpeg' },
  { id: 'p11', name: 'Bulk Lavender', description: 'Scented Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (2).jpeg' },

  // ── 200 Grams Agarbatti Jar ───────────────────────────────────────────────
  { id: 'j1', name: 'Prathna', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar1.jpeg' },
  { id: 'j2', name: 'Flower Bucket  4-In-1', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar4.jpeg' },
  { id: 'j3', name: 'Imperial Collection   4-In-1', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar5.jpeg' },
  { id: 'j4', name: 'Exotica Heaven', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar6.jpeg' },
  { id: 'j5', name: 'Zamku', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar7.jpeg' },
  { id: 'j6', name: 'Loban', description: 'Masala Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar8.jpeg' },
  { id: 'j7', name: 'Golden Woods', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar9.jpeg' },
  { id: 'j8', name: 'Heritage', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar10.jpeg' },
  { id: 'j9', name: 'Ponds', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar11.jpeg' },
  { id: 'j10', name: 'Pineapple', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar12.jpeg' },
  { id: 'j11', name: 'Divya Bhakti', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar13.jpeg' },
  { id: 'j12', name: 'Gugal', description: 'Masala Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar14.jpeg' },
  { id: 'j13', name: 'Lavender', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar15.jpeg' },
  { id: 'j14', name: 'Sandal Wood', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar16.jpeg' },
  { id: 'j15', name: 'Casa Bella', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar17.jpeg' },
  { id: 'j16', name: 'Keshar Essence', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar18.jpeg' },
  { id: 'j17', name: 'Magnet', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar19.jpeg' },
  { id: 'j18', name: 'Mogra', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar20.jpeg' },
  { id: 'j19', name: 'Oudh', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar21.jpeg' },
  { id: 'j20', name: 'Pandadi', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar22.jpeg' },
  { id: 'j21', name: 'Divine Parijat', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar23.jpeg' },
  { id: 'j22', name: 'Perfume Harmony 5-In-1', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar24.jpeg' },
  { id: 'j23', name: 'Ratrani', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar25.jpeg' },
  { id: 'j24', name: 'Rose', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar26.jpeg' },
  { id: 'j25', name: 'Divya Darshan', description: 'Scented Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar27.jpeg' },

  // ── 100 Grams Dhoop Sticks Jar ────────────────────────────────────────────
  { id: 'p19', name: 'Natural Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM.jpeg' },
  { id: 'p20', name: 'Gugal Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (1).jpeg' },
  { id: 'p21', name: 'Loban Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (2).jpeg' },
  { id: 'p22', name: 'Sandal Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM.jpeg' },
  { id: 'p23', name: 'Mixed Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (1).jpeg' },
  { id: 'p24', name: 'Premium Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (2).jpeg' },
  { id: 'p25', name: 'Traditional Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM.jpeg' },
  { id: 'p26', name: 'Sacred Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM (1).jpeg' },
  { id: 'p27', name: 'Pure Gugal Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM.jpeg' },
  { id: 'p28', name: 'Classic Loban Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (1).jpeg' },
  { id: 'p29', name: 'Aromatic Dhoop', description: 'Scented Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (2).jpeg' },

  // ── 100 Grams Bambooless Sticks Jar ────────────────────────────────────────
  { id: 'p24', name: 'Pure Bambooless', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM.jpeg' },
  { id: 'p25', name: 'Charcoal Free', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM (1).jpeg' },
  { id: 'p26', name: 'Organic Blend', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM.jpeg' },
  { id: 'p27', name: 'Temple Grade', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (1).jpeg' },
  { id: 'p28', name: 'Divine Spirit', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (2).jpeg' },
  { id: 'p29', name: 'Natural Aroma', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (3).jpeg' },
  { id: 'p30', name: 'Eco Friendly', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (4).jpeg' },
  { id: 'p31', name: 'Pure Nature', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM.jpeg' },
  { id: 'p32', name: 'Herbal Blend', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (1).jpeg' },
  { id: 'p33', name: 'Premium Bamboo', description: 'Scented Long Dhoop Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (2).jpeg' },

  // ── Loose Incense Sticks ──────────────────────────────────────────────────
  { id: 'p29', name: 'Loose Incense Sticks', description: '', categoryId: 'loose', price: 0, image: '/product image/Loose/loose-incense-stick-500x500.webp' },
  
  // ── 225 Grams Premium Agarbatti Jars ──────────────────────────────────────
  { id: 'p34', name: 'Gold Series Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },
  { id: 'p35', name: 'Heritage Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.12 PM.jpeg' },
  { id: 'p36', name: 'Mystic Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM.jpeg' },
  { id: 'p37', name: 'Royal Sandal Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (1).jpeg' },
  { id: 'p38', name: 'Eternal Peace Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (2).jpeg' },
  { id: 'p39', name: 'Divine Essence Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM.jpeg' },
  { id: 'p40', name: 'Celestial Jar', description: 'Scented Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM (1).jpeg' },

  // ── 100 Grams Premium Flora Agarbatti Jars ────────────────────────────────
  { id: 'p39', name: 'Divine Sandal', description: 'Flora Incense Sticks', categoryId: 'jar-premium-100', price: 225, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.06.53 PM.jpeg' },
  { id: 'p40', name: 'Rudraksha', description: 'Flora Incense Sticks', categoryId: 'jar-premium-100', price: 225, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },
];