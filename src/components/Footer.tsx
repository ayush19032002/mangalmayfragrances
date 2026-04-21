import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter, FaArrowUp  } from 'react-icons/fa';


const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-section-gray border-t border-divider pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start gap-3 no-underline mb-8">
               <img src="/logo-bg.png" alt="Mangalmay Logo" className="w-32 h-auto object-contain" />
            </Link>
            <p className="text-medium-gray leading-relaxed max-w-sm font-body font-normal text-sm">
              Bringing spirituality into your life and home since 2008. Crafted with traditional wisdom and modern minimalism.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-10 text-black">Quick Links</h4>
            <ul className="space-y-4 list-none p-0">
              {navItems.map(item => (
                <li key={item.name}>
                  <NavLink to={item.path} className="text-black/55 hover:underline hover:underline-offset-2 transition-all no-underline font-body text-xs font-bold uppercase tracking-widest">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-10 text-black">The Collections</h4>
            <ul className="space-y-4 list-none p-0">
              {['Zipper Packs', 'Deep Dhoop', 'Family Bundles', 'Royal Jars'].map(style => (
                <li key={style}>
                  <Link to="/products" className="text-black/55 hover:underline hover:underline-offset-2 transition-all no-underline font-body text-xs font-bold uppercase tracking-widest">
                    {style}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-bold mb-10 text-black">
              Stay Connected
            </h4>

            <div className="flex gap-6 mb-10">

              {/* Instagram */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-pink-400 flex items-center justify-center text-xl text-pink-400 transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white hover:border-transparent"
                >
                  <FaInstagram />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Instagram
                </span>
              </div>

              {/* Facebook */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-xl text-blue-400 transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-transparent"
                >
                  <FaFacebookF />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Facebook
                </span>
              </div>

              {/* WhatsApp */}
              <div className="relative group">
                <a 
                  href="https://wa.me/919904957696" 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center text-xl text-green-400 transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-transparent"
                >
                  <FaWhatsapp />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  WhatsApp
                </span>
              </div>
              
              {/* Twitter */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-xl text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white hover:border-transparent"
                >
                  <FaTwitter />
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  Twitter (X)
                </span>
              </div>

            </div>

            <p className="text-black text-sm font-semibold uppercase tracking-wide leading-relaxed">
              Madhapar, Rajkot-360006<br />Gujarat, India
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-black text-xs uppercase tracking-wide hover:underline hover:underline-offset-2">
            Copyright © Vortex Aziel
          </p>
          <button 
            onClick={scrollToTop}
            className="text-pink-400 border border-pink-400 hover:bg-pink-400 hover:text-white h-10 w-10 rounded-full flex justify-center items-center transition-all font-bold text-sm uppercase "
          >
            <FaArrowUp  size={20}/>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
