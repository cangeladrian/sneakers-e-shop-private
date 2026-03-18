'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

const ExclusiveCard = ({ src, title, index, scrollVelocity }: any) => {
  // Znížime silu naklonenia (z 20 na 10), aby to bolo stabilnejšie
  const skew = useTransform(scrollVelocity, [-2000, 0, 2000], [-10, 0, 10]);

  return (
    <motion.div 
      style={{ skewX: skew }} // Odobrali sme spring pre vyšší výkon
      className="relative min-w-[300px] md:min-w-[500px] h-[600px] bg-neutral-900 overflow-hidden"
      // Kľúčové pre výkon:
      style={{ willChange: 'transform' }} 
    >
      <img 
        src={src} 
        alt={title} 
        // Použi radšej obyčajný <img> namiesto Next Image, ak to stále seká

      
        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 scale-110"
      />
      <div className="absolute bottom-10 left-10 text-white z-10">
        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mb-2 font-bold">Model 0{index + 1}</p>
        <h3 className="text-4xl font-black uppercase tracking-tighter italic">{title}</h3>
      </div>
      {/* Brutalistický overlay efekt */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export const ExclusiveGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Sledovanie rýchlosti skrolovania
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Horizontálny posun celého pásu (z 0% na -60%)
  const x = useTransform(scrollYProgress, [0, 6], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[100vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Veľký text v pozadí */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[25vw] font-black text-white/[0.2] uppercase leading-none">
            STREET
          </h2>
        </div>

        {/* Pás s obrázkami */}
        <motion.div style={{ x }} className="flex gap-46 px-[10vw]">
          <ExclusiveCard src="/dinamic.png" title="UnderMove Pro" index={0} scrollVelocity={scrollVelocity} />
          <ExclusiveCard src="/dinamic.png" title="Shadow Edition" index={1} scrollVelocity={scrollVelocity} />
          <ExclusiveCard src="/dinamic.png" title="Lunar Flux" index={2} scrollVelocity={scrollVelocity} />
          <ExclusiveCard src="/shoe4.jpg" title="Urban Peak" index={3} scrollVelocity={scrollVelocity} />
        </motion.div>

        {/* Indikátor priebehu vpravo dole */}
        <div className="absolute bottom-12 right-12 text-white flex items-center gap-6">
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Scroll to explore</span>
           <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="absolute inset-0 bg-white origin-left" 
              />
           </div>
        </div>
      </div>
    </section>
  );
};