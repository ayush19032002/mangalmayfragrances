import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-luxury-bg">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 pt-16 text-center">
        <span className="subtitle-premium">Full Catalog</span>
        <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Our Collections</h1>
        <p className="max-w-2xl mx-auto text-[15px] md:text-[16px] text-[#6f6254] leading-7">Explore our complete range of Zipper Packs, Dhoop Sticks, and Luxury Jars designed for your divine spaces.</p>
      </div>
      <ProductList />
    </div>
  ); 
};

export default ProductsPage;
