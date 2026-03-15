

'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- KOMPONENT KURZORA ---
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: any) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') setIsHovering(true);
      else setIsHovering(false);
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
      animate={{ x: mousePos.x, y: mousePos.y, scaleY: isHovering ? 2 : 1 }}
      transition={{ type: 'spring', stiffness: 1000, damping: 40, mass: 0.1 }}
    >
      <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
        <path d="M0 0V40L7 30H18L0 0Z" fill="white" />
      </svg>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500 selection:text-white">
      <CustomCursor />

      {/* --- NAVIGÁCIA --- */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50">
        <span className="font-black text-xl tracking-tighter">MOJE_MENO</span>
        <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
          <a href="#work" className="hover:text-red-500 transition">Práca</a>
          <a href="#about" className="hover:text-red-500 transition">O mne</a>
          <a href="mailto:tvoj@email.com" className="hover:text-red-500 transition">Kontakt</a>
        </div>
      </nav>

      {/* --- HERO SEKCE --- */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] uppercase tracking-[0.5em] mb-4 text-gray-500 font-bold"
        >
          Junior Creative Developer
        </motion.h2>
        <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter italic">
          Digitálne <br />
          <span className="text-red-500">Zážitky</span>
        </h1>
        <p className="mt-8 max-w-sm text-gray-400 text-sm leading-relaxed">
          Zameriavam sa na budovanie minimalistických, vysoko výkonných webových aplikácií s dôrazom na animácie a detail.
        </p>
      </section>

      {/* --- PROJEKTY (Ukážka) --- */}
      <section id="work" className="px-8 md:px-24 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group cursor-pointer">
          <div className="aspect-video bg-neutral-900 mb-4 overflow-hidden">
             <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 bg-gradient-to-br from-red-900/20 to-black" />
          </div>
          <h3 className="font-black uppercase text-2xl tracking-tighter italic">underMOVE E-shop</h3>
          <p className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-bold">Next.js / Tailwind / Framer Motion</p>
        </div>
        
        {/* Tu pridáš ďalšie projekty */}
      </section>

    </main>
  );
}
