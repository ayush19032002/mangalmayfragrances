import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
// @ts-expect-error - CSS module import
import 'swiper/css';
// @ts-expect-error - CSS module import
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const slides = [
    {
      title: 'Start your day with a divine experience',
      desc: 'Immerse yourself in the naturally divine aroma of rose petals. Mild and sweet aroma of rose is known to enhance productivity and calm your senses.',
      image: '/rose.png',
      accentColor: '#FDEEF2',
      circleColor: '#FABCCB'
    },
    {
      title: 'Pure Sandalwood Traditional Aroma',
      desc: 'Experience the rich, woody notes of sustainably sourced sandalwood for your spiritual rituals. A fragrance that transcends time and space.',
      image: '/product1.png',
      accentColor: '#FDF5EE',
      circleColor: '#F5DDC7'
    },
    {
      title: 'Lavender Bliss for Deep Relaxation',
      desc: 'Unwind with the soothing scent of premium lavender dhoop sticks designed for a peaceful sleep and mental clarity.',
      image: '/lavender.png',
      accentColor: '#F3EEFD',
      circleColor: '#DED1FA'
    }
  ];

  return (
    <section className="min-h-screen lg:h-[90vh] lg:min-h-[700px] pt-32 lg:pt-24 bg-white relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className="w-full h-full relative transition-colors duration-1000"
                style={{ backgroundColor: slide.accentColor }}
              >
                {/* Background Decoration */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute right-[-20%] bottom-[-20%] lg:right-[-10%] lg:bottom-[-20%] w-[500px] h-[500px] lg:w-[1000px] lg:h-[1000px] rounded-full pointer-events-none z-0"
                  style={{ backgroundColor: slide.circleColor }}
                />

                <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center relative z-10 py-12 lg:py-0">
                  {/* Content Side */}
                  <div className="p-2 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full order-2 lg:order-1 mt-12 lg:mt-0">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <h1
                            className="text-4xl md:text-5xl text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                          >
                            {slide.title}
                          </h1>

                          <p className="text-medium-gray text-base lg:text-xl mb-10 lg:mb-12 max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-body">
                            {slide.desc}
                          </p>

                          <div className="flex flex-row justify-center lg:justify-start gap-4">
                            <button className="btn-primary">SHOP NOW</button>
                            <button className="btn-secondary">CONTACT US</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Product Side */}
                  <div className="w-full lg:w-1/2 h-full flex items-center justify-center order-1 lg:order-2">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative w-full aspect-square max-w-[300px] lg:max-w-none lg:h-full flex items-center justify-center transform lg:translate-x-12"
                      >
                        <div className="relative w-full h-full scale-[0.6] sm:scale-[0.8] lg:scale-100 flex items-center justify-center">
                          {/* Incense Sticks */}
                          <div className="absolute left-0 bottom-24 z-10 flex gap-1 items-end pointer-events-none">
                            <div className="w-1.5 h-80 bg-[#543E38] rounded-full shadow-lg transform -rotate-1 origin-bottom" />
                            <div className="w-1.5 h-[340px] bg-[#543E38] rounded-full shadow-lg transform rotate-2 origin-bottom" />
                          </div>

                          {/* Main Pack */}
                          <div className="relative z-30 w-[240px] lg:w-[320px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]">
                            <img
                              src={slide.image}
                              className="w-full h-auto"
                              alt="Product Pack Standing"
                            />
                          </div>

                          {/* Back Pack */}
                          <div className="absolute left-[60%] top-[10%] w-[180px] lg:w-[280px] -z-10 brightness-95 transform rotate-3 origin-center hidden sm:block">
                            <img
                              src={slide.image}
                              className="w-full h-auto opacity-60 lg:opacity-90"
                              alt="Product Pack Behind"
                            />
                          </div>

                          {/* Lying Pack */}
                          <div className="absolute right-[-40px] lg:-right-24 bottom-10 w-[250px] lg:w-[350px] z-40 transform rotate-[15deg] drop-shadow-2xl">
                            <img
                              src={slide.image}
                              className="w-full h-auto"
                              alt="Product Pack Lying"
                            />
                          </div>

                          {/* Front Flowers Decor */}
                          <div className="absolute -left-16 bottom-16 z-50 flex items-end">
                            <div className="w-24 h-24 lg:w-32 lg:h-32 relative">
                              <img
                                src="/rose.png"
                                className="w-full h-full object-contain"
                                alt="Rose Decor"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;









// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import { motion, AnimatePresence } from 'framer-motion';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

// const Hero: React.FC = () => {
//   const slides = [
//     {
//       title: 'Start your day with a divine experience',
//       desc: 'Immerse yourself in the naturally divine aroma of rose petals. Mild and sweet aroma of rose is known to enhance productivity and calm your senses.',
//       image: '/rose.png',
//       accentColor: '#FDEEF2',
//       circleColor: '#FABCCB'
//     },
//     {
//       title: 'Pure Sandalwood Traditional Aroma',
//       desc: 'Experience the rich, woody notes of sustainably sourced sandalwood for your spiritual rituals. A fragrance that transcends time and space.',
//       image: '/product1.png',
//       accentColor: '#FDF5EE',
//       circleColor: '#F5DDC7'
//     },
//     {
//       title: 'Lavender Bliss for Deep Relaxation',
//       desc: 'Unwind with the soothing scent of premium lavender dhoop sticks designed for a peaceful sleep and mental clarity.',
//       image: '/lavender.png',
//       accentColor: '#F3EEFD',
//       circleColor: '#DED1FA'
//     }
//   ];

//   return (
//     <section className="min-h-screen lg:h-[90vh] lg:min-h-[700px] pt-32 lg:pt-24 bg-white relative overflow-hidden">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         speed={1000}
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         pagination={{ clickable: true, el: '.custom-pagination' }}
//         loop={true}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {({ isActive }) => (
//               <div
//                 className="w-full h-full relative transition-colors duration-1000"
//                 style={{ backgroundColor: slide.accentColor }}
//               >
//                 {/* Background Decoration - Responsive sizing */}
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
//                   transition={{ duration: 1.5, ease: "easeOut" }}
//                   className="absolute right-[-20%] bottom-[-20%] lg:right-[-10%] lg:bottom-[-20%] w-[500px] h-[500px] lg:w-[1000px] lg:h-[1000px] rounded-full pointer-events-none z-0"
//                   style={{ backgroundColor: slide.circleColor }}
//                 />

//                 <div className="max-w-[1400px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center relative z-10 py-12 lg:py-0">

//                   {/* Content Side */}
//                   <div className="p-2 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full order-2 lg:order-1 mt-12 lg:mt-0">
//                     <AnimatePresence>
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 30 }}
//                           animate={{ opacity: 1, y: 0 }} 
//                           exit={{ opacity: 0, y: -20 }}
//                           transition={{ duration: 0.8, delay: 0.2 }}
//                         >
//                           <h1 className="text-4xl md:text-5xl text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-near-black leading-tight mb-3"
//                             style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
//                             {slide.title}
//                           </h1>
//                           <p className="text-medium-gray text-base lg:text-xl mb-10 lg:mb-12 max-w-[550px] mx-auto lg:mx-0 leading-relaxed font-body">
//                             {slide.desc}
//                           </p>
//                           <div className="flex flex-row justify-center lg:justify-start gap-4">
//                             <button className="btn-primary">SHOP NOW</button>
//                             <button className="btn-secondary">CONTACT US</button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence> 
//                   </div>

//                   {/* Product Side - Fully responsive assembly */}
//                   <div className="w-full lg:w-1/2 h-full flex items-center justify-center order-1 lg:order-2">
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 1, delay: 0.4 }}
//                         className="relative w-full aspect-square max-w-[300px] lg:max-w-none lg:h-full flex items-center justify-center transform lg:translate-x-12"
//                       >
//                         {/* Scale container for mobile assembly */}
//                         <div className="relative w-full h-full scale-[0.6] sm:scale-[0.8] lg:scale-100 flex items-center justify-center">

//                           {/* Incense Sticks */}
//                           <div className="absolute left-0 bottom-24 z-10 flex gap-1 items-end pointer-events-none">
//                             <div className="w-1.5 h-80 bg-[#543E38] rounded-full shadow-lg transform -rotate-1 origin-bottom" />
//                             <div className="w-1.5 h-[340px] bg-[#543E38] rounded-full shadow-lg transform rotate-2 origin-bottom" />
//                           </div>

//                           {/* Standing Pack (Main) */}
//                           <div className="relative z-30 w-[240px] lg:w-[320px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]">
//                             <img src={slide.image} className="w-full h-auto" alt="Product Pack Standing" />
//                           </div>

//                           {/* Secondary Standing Pack (Behind) */}
//                           <div className="absolute left-[60%] top-[10%] w-[180px] lg:w-[280px] -z-10 brightness-95 transform rotate-3 origin-center hidden sm:block">
//                             <img src={slide.image} className="w-full h-auto opacity-60 lg:opacity-90" alt="Product Pack Behind" />
//                           </div>

//                           {/* Third Pack (Lying Down) */}
//                           <div className="absolute right-[-40px] lg:-right-24 bottom-10 w-[250px] lg:w-[350px] z-40 transform rotate-[15deg] drop-shadow-2xl">
//                             <img src={slide.image} className="w-full h-auto" alt="Product Pack Lying" />
//                           </div>

//                           {/* Front Flowers Decor */}
//                           <div className="absolute -left-16 bottom-16 z-50 flex items-end">
//                             <div className="w-24 h-24 lg:w-32 lg:h-32 relative">
//                               <img src="/rose.png" className="w-full h-full object-contain" alt="Rose Decor" />
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </div>

//                 </div>
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination Fix */}
//       <div className="custom-pagination absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-[100] flex gap-3 lg:gap-4 justify-center" />
//     </section>
//   );
// };

// export default Hero;
