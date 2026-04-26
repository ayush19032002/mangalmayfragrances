import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
// import { MdAdminPanelSettings } from 'react-icons/md';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 bg-white py-4`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline group z-[1100]">
            <img src="/logo.png" alt="Mangalmay Logo" className={`h-auto object-contain transition-all duration-500 ${isScrolled ? 'w-24' : 'w-24'}`} />
          </Link>

          {/* Global Navigation Desktop */}
          <ul className="hidden lg:flex gap-12 items-center list-none mb-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link-spaced ${
                    isActive ? 'text-pink-400 font-bold after:w-full' : 'after:w-0'
                  } relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-6">
            <a href="https://wa.me/919904957696" target="_blank" className="hidden sm:flex items-center gap-2 text-pink-400 font-bold text-sm tracking-widest uppercase border border-pink-400 px-4 py-2 rounded-full hover:bg-pink-400 hover:text-white transition-all">
               <FaWhatsapp size={20}/> Inquiry
            </a>
            {/* <button
              onClick={() => navigate('/admin/login')}
              className="hidden sm:flex items-center text-2xl text-gray-600 hover:text-pink-400 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              title="Admin Panel"
            >
              <MdAdminPanelSettings size={24} />
            </button> */}
            <button 
              className="lg:hidden text-3xl text-pink-400 z-[1100] transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[1050] bg-white transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="h-full flex flex-col p-12 pt-40">
           <div className="mb-16">
              <span className="text-pink-400 font-black text-[0.6rem] tracking-[0.5em] uppercase mb-10 block">Navigation</span>
              <ul className="flex flex-col gap-8 list-none p-0">
                {navItems.map((item, idx) => (
                  <li key={item.name} style={{ transitionDelay: `${idx * 100}ms` }} className={`transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <NavLink 
                      to={item.path} 
                      onClick={() => setIsMenuOpen(false)}
                      className="font-heading text-5xl text-pink-400 no-underline hover:text-pink-600 transition-colors"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
           </div>

           <div className={`mt-auto transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="border-t border-divider pt-10 flex flex-col gap-6">
                 {/* <div>
                    <Link
                      to="/admin/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-700 hover:text-pink-400 transition-colors font-bold text-lg mb-6 no-underline"
                    >
                      <MdAdminPanelSettings size={24} /> Admin Panel
                    </Link>
                 </div> */}
                 <div>
                    <span className="text-medium-gray text-[0.6rem] font-bold tracking-widest uppercase mb-4 block">Connect with us</span>
                    <div className="flex gap-6 text-2xl text-near-black">
                       <a href="https://www.instagram.com/mangalmay_fragrances?utm_source=qr&igsh=bGh0YTRpdHhpd2Ny" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
                       <a href="https://www.facebook.com/share/1H2gizERxo/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><FaFacebookF /></a>
                       <a href="https://wa.me/919904957696" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><FaWhatsapp /></a>
                    </div>
                 </div>
                 <p className="text-medium-gray text-xs font-medium">
                    Plot 46/1, Raghuvir Ind. Area,<br />
                    Jamnagar Road, Rajkot - 360006
                 </p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
