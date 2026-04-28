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
  { id: 'citronella-dhoop', name: 'Citronella Dhoop Sticks',        description: 'Natural mosquito-repellent citronella dhoop sticks' },
];

export const PRODUCTS: Product[] = [
  // ── 110 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p1', name: 'Exotica Heaven', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM.jpeg' },
  { id: 'p2', name: 'Flower Bucket', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.50 PM (1).jpeg' },
  { id: 'p3', name: 'Gugal', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM.jpeg' },
  { id: 'p4', name: 'Imperial Collection', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (1).jpeg' },
  { id: 'p5', name: 'Keshar Essence', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (2).jpeg' },
  { id: 'p6', name: 'Perfume Harmony', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (3).jpeg' },
  { id: 'p7', name: 'Prathna', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.34.51 PM (4).jpeg' },
  { id: 'p8', name: 'Sandal Wood', description: 'Premium  Incense Sticks', categoryId: 'pouch-110', price: 80, image: '/product image/110 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.35.37 PM.jpeg' },

  // ── 400 Grams Zipper Pouch ────────────────────────────────────────────────
  { id: 'p9', name: 'Perfume Harmony', description: 'Premium  Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM.jpeg' },
  { id: 'p10', name: 'Flower Bucket', description: 'Premium Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (1).jpeg' },
  { id: 'p11', name: 'Imperial Collection', description: 'Premium Incense Sticks', categoryId: 'pouch-400', price: 180, image: '/product image/400 Grams Zipper Pouch/WhatsApp Image 2026-04-27 at 12.37.56 PM (2).jpeg' },

  // ── 200 Grams Agarbatti Jar ───────────────────────────────────────────────
  { id: 'j1', name: 'Prathna', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar1.jpeg' },
  { id: 'j2', name: 'Flower Bucket ', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar4.jpeg' },
  { id: 'j3', name: 'Imperial Collection ', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar5.jpeg' },
  { id: 'j4', name: 'Exotica Heaven', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar6.jpeg' },
  { id: 'j5', name: 'Zamku', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar7.jpeg' },
  { id: 'j6', name: 'Loban', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar8.jpeg' },
  { id: 'j7', name: 'Golden Woods', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar9.jpeg' },
  { id: 'j8', name: 'Heritage', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar10.jpeg' },
  { id: 'j9', name: 'Ponds', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar11.jpeg' },
  { id: 'j10', name: 'Pineapple', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar12.jpeg' },
  { id: 'j11', name: 'Divya Bhakti', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar13.jpeg' },
  { id: 'j12', name: 'Gugal', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar14.jpeg' },
  { id: 'j13', name: 'Lavender', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar15.jpeg' },
  { id: 'j14', name: 'Sandal Wood', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar16.jpeg' },
  { id: 'j15', name: 'Casa Bella', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar17.jpeg' },
  { id: 'j16', name: 'Keshar Essence', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar18.jpeg' },
  { id: 'j17', name: 'Magnet', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar19.jpeg' },
  { id: 'j18', name: 'Mogra', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar20.jpeg' },
  { id: 'j19', name: 'Oudh', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar21.jpeg' },
  { id: 'j20', name: 'Pandadi', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar22.jpeg' },
  { id: 'j21', name: 'Divine Parijat', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar23.jpeg' },
  { id: 'j22', name: 'Perfume Harmony ', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar24.jpeg' },
  { id: 'j23', name: 'Ratrani', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar25.jpeg' },
  { id: 'j24', name: 'Rose', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar26.jpeg' },
  { id: 'j25', name: 'Divya Darshan', description: 'Premium Incense Sticks', categoryId: 'jar-200', price: 140, image: '/product image/200 Grams Agarbatti Jar/jar27.jpeg' },

  // ── 100 Grams Dhoop Sticks Jar ────────────────────────────────────────────
  { id: 'p19', name: 'Pineapple', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM.jpeg' },
  { id: 'p20', name: 'Sandal Wood', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (1).jpeg' },
  { id: 'p21', name: 'Guggal', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.35 PM (2).jpeg' },
  { id: 'p22', name: 'Kasturi', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM.jpeg' },
  { id: 'p23', name: 'Rose', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (1).jpeg' },
  { id: 'p24', name: 'Exotica Heaven', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.36 PM (2).jpeg' },
  { id: 'p25', name: 'Kesar Chandan', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM.jpeg' },
  { id: 'p26', name: 'Mogra', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.37 PM (1).jpeg' },
  { id: 'p27', name: 'Kapur', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM.jpeg' },
  { id: 'p28', name: 'Oudh', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (1).jpeg' },
  { id: 'p29', name: 'Divya Darshan', description: 'Premium Dhoop Sticks', categoryId: 'dhoop-100', price: 80, image: '/product image/100 Grams Dhoop Sticks Jar/WhatsApp Image 2026-04-27 at 12.46.38 PM (2).jpeg' },

  // ── 100 Grams Bambooless Sticks Jar ────────────────────────────────────────
  { id: 'p24', name: 'Divya Darshan', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM.jpeg' },
  { id: 'p25', name: 'Exotica Heaven', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.52 PM (1).jpeg' },
  { id: 'p26', name: 'Gugal', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM.jpeg' },
  { id: 'p27', name: 'Kapur', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (1).jpeg' },
  { id: 'p28', name: 'Kasturi', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (2).jpeg' },
  { id: 'p29', name: 'Keshar Essence', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (3).jpeg' },
  { id: 'p30', name: 'Oudh', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.53 PM (4).jpeg' },
  { id: 'p31', name: 'Pineapple', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM.jpeg' },
  { id: 'p32', name: 'Rose', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (1).jpeg' },
  { id: 'p33', name: 'Sandal Wood', description: 'Bamboo Less Sticks', categoryId: 'bambooless-100', price: 120, image: '/product image/100 Grams Bambooless Sticks Jar/WhatsApp Image 2026-04-27 at 12.52.54 PM (2).jpeg' },

  // ── Loose Incense Sticks ──────────────────────────────────────────────────
  { id: 'p29', name: 'Loose Incense Sticks', description: '', categoryId: 'loose', price: 0, image: '/product image/Loose/loose-incense-stick-500x500.webp' },
  
  // ── 225 Grams Premium Agarbatti Jars ──────────────────────────────────────
  { id: 'p34', name: 'Patchouli', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },
  { id: 'p35', name: 'Bakhoor', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.12 PM.jpeg' },
  { id: 'p36', name: 'Golden Aura', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM.jpeg' },
  { id: 'p37', name: 'Heena', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (1).jpeg' },
  { id: 'p38', name: 'Khus', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.13 PM (2).jpeg' },
  { id: 'p39', name: 'Musk Melon', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM.jpeg' },
  { id: 'p40', name: 'Musk', description: 'Premium Incense Sticks', categoryId: 'jar-premium-225', price: 225, image: '/product image/225 Grams Premium Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.14 PM (1).jpeg' },

  // ── 100 Grams Premium Flora Agarbatti Jars ────────────────────────────────
  { id: 'p39', name: 'Divine Sandal', description: 'Flora Incense Sticks', categoryId: 'jar-premium-100', price: 225, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.06.53 PM.jpeg' },
  { id: 'p40', name: 'Rudraksha', description: 'Flora Incense Sticks', categoryId: 'jar-premium-100', price: 225, image: '/product image/100 Grams Premium Flora Agarbatti Jars/WhatsApp Image 2026-04-27 at 1.08.01 PM.jpeg' },

  // ── Citronella Dhoop Sticks ─────────────────────────────────────────────────
  { id: 'c1', name: 'Mosqaway', description: 'Natural Mosquito Repellent Dhoop Sticks', categoryId: 'citronella-dhoop', price: 120, image: '/product image/Citronella Dhoop Sticks/Mosqaway.jpg (2).jpeg' },
];