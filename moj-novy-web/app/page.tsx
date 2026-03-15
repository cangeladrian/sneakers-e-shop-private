'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring, AnimatePresence } from 'framer-motion';

// --- 1. KOMPONENT KURZORA ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: any) => {
      const target = e.target as HTMLElement;
      // Ak sme nad projektovou kartou
      if (target.closest('.project-card')) setCursorType('project');
      // Ak sme nad linkom alebo buttonom
      else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button')) setCursorType('pointer');
      else setCursorType('default');
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center mix-blend-difference"
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
    >
      <AnimatePresence mode="wait">
        {cursorType === 'project' ? (
          <motion.span
            key="open"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-black uppercase tracking-widest text-white bg-red-600 px-3 py-1 italic"
          >
            Open
          </motion.span>
        ) : (
          <motion.svg 
            key="arrow" 
            width="20" height="40" viewBox="0 0 20 40" fill="none"
            animate={{ scaleY: cursorType === 'pointer' ? 2 : 1 }}
          >
            <path d="M0 0V40L7 30H18L0 0Z" fill="white" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 2. KOMPONENT KARTY PROJEKTU ---
const ProjectCard = ({ title, category, src, scrollVelocity }: any) => {
  const skew = useTransform(scrollVelocity, [-2000, 0, 2000], [-15, 0, 15]);
  const springSkew = useSpring(skew, { stiffness: 150, damping: 20 });
  const y = useTransform(scrollVelocity, [-2000, 0, 2000], [-30, 0, 30]);
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  return (
    <motion.div 
      style={{ skewX: springSkew, y: springY }}
      className="project-card relative 
             w-[70vw] md:w-[500px] 
             h-[300px] md:h-[500px] 
             bg-black overflow-hidden group shadow-2xl transition-all duration-500 hover:z-30 hover:scale-105"
    >
      {/* OBRÁZOK: Pri hoveri sa zmenší (scale-95) a stmavne */}
      <img 
        src={src} 
        alt={title} 
        className="w-full h-full  transition-all duration-700  grayscale scale-110 group-hover:scale-95 group-hover:opacity-40"
      />
      
      {/* TEXT: Zobrazí sa pri hoveri */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold mb-2">{category}</p>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-white leading-none">
          {title}
        </h3>
        <div className="mt-6 flex items-center gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white border-b border-white pb-1 pointer-events-none">
            Pozrieť Case Study
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. HLAVNÁ STRÁNKA PORTFÓLIA ---
export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Posun galérie zľava doprava
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-90%"]);

  const [isOverProjects, setIsOverProjects] = useState(false);







  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500 selection:text-white ">
      <CustomCursor />







      {/* NAVIGÁCIA */}
      <nav className=" z-250 fixed relative top-0 w-full p-8 flex justify-between items-center  mix-blend-difference">
        <span className="font-black text-xl tracking-tighter italic">ADRIÁN_ČANGEL</span>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
          <a href="#work" className="hover:text-red-500 transition">Práca</a>
          <a href="mailto:tvoj@email.com" className="hover:text-red-500 transition text-red-500">Kontakt</a>
        </div>
      </nav>

      {/* HERO SEKCE */}
      <section className="h-screen z-100 relative flex flex-col justify-center px-8 md:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12px] uppercase tracking-[0.5em] mb-4 text-gray-500 font-bold"
        >
          Junior 
        </motion.h2>
        <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter italic">
          Digitálne <br />
          <span className="text-red-500 hover:italic transition-all duration-500 cursor-default px-2">PORTFÓLIO</span>
        </h1>
      
      </section>



      {/* HORIZONTÁLNA GALÉRIA PROJEKTOV */}
      {/* --- TU TO ZAČÍNA --- */}
<motion.section 
  ref={containerRef} 
  id="work" 
  onViewportEnter={() => setIsOverProjects(true)} // Zapne červenú
  onViewportLeave={() => setIsOverProjects(false)} // Vráti modrú
  viewport={{ amount: 0.2 }} 
  className="relative  z-100 h-[400vh] "
>
  <div className="sticky top-0 h-screen flex items-center overflow-hidden">
    
    {/* Nápis v pozadí */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
      <h2 className="text-[30vw] font-noemal text-white/[0.08] uppercase leading-none tracking-[-0.05em]">
        Works
      </h2>
    </div>

    {/* Galéria s kartami */}
    <motion.div style={{ x }} className="flex gap-16 px-[10vw] z-10 items-center">
      <ProjectCard title="underMOVE E-shop" category="E-commerce" src="/hlavny.png" scrollVelocity={scrollVelocity} />
      <ProjectCard title="Dental Clinic Web site" category="Branding" src="/zubnaambulancia.png" scrollVelocity={scrollVelocity} />
      <ProjectCard title="Graphics" category="Interactive" src="/rimac.jpg" scrollVelocity={scrollVelocity} />
      <ProjectCard title="Draw Skics" category="Next.js" src="/kresby.jpg" scrollVelocity={scrollVelocity} />
    </motion.div>

  </div>
</motion.section>


{/* --- AMBIENTNÉ POZADIE --- */}
<div className="fixed inset-0 z-0 pointer-events-none ">
  <motion.div
    animate={{
      // Meníme farbu podľa toho, či sme nad projektami
        background: isOverProjects 
        ? 'radial-gradient(circle at 50% 50%, rgba(203, 10, 10, 0.63) 0%, hsl(0, 0%, 0%) 50%)' 
        : 'radial-gradient(circle at 10% 50%, rgba(0, 81, 255, 0.73) 0%, rgb(0, 0, 0) 70%)',
      // Jemné pulzovanie (z 100% na 110% a späť)
      
    }}
    transition={{
      background: { duration: 0.8, ease: "easeInOut" }, // Zmena farby trvá 1.5 sekundy
      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }, // Pulzovanie trvá 8 sekúnd
    }}
    className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-50 blur-[100px]"
  />
</div>


      {/* FOOTER SEKCE */}
      <section className=" flex flex-col relative items-center z-180 justify-center text-center">
        
         
      </section>



<section className="min-h-[50vh] w-full pt-60 pb-40 bg-white z-100 relative flex flex-col items-center justify-center py-24 px-8">

<h2 className="text-3xl m-20 md:text-8xl font-light text-center text-black ">
            PROGRAMY V KTORÝCH <br />
           <span className='font-bold'>PRACUJEM</span> 
         </h2>



        <div className=" items-center justify-center flex flex-col gap-20 mx-auto">
          <img src="/figma.png" className='h-23'  alt="Platba" />
          <img src="/visualstudio.png" className='h-23' alt="" />
          <img src="/psp.png" className='h-23'  alt="Platba" />
          <img src="/relume.png" className='h-23 ' alt="" />
          <img src="/artlist.png" className='h-23' alt="" />
          <img src="/Google.png" className='h-23' alt="" />
        </div>
</section>
    




    </main>
  );
}