"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './store';

export default function Navbar() {
  const items = useCart((state) => state.items);
const isCartOpen = useCart((state) => state.isCartOpen);
const setIsCartOpen = useCart((state) => state.setCartOpen);
const removeItem = useCart((state) => state.removeItem);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. SLEDOVANIE SCROLLU
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ZÁKAZ SCROLLU PRI OTVORENOM MENU
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = (isMenuOpen || isCartOpen) ? 'hidden' : 'unset';
    }
  }, [isMenuOpen, isCartOpen]);

  // 3. LOGIKA PRE PARALLAX V MENU
  const handleMouseMove = (e: React.MouseEvent) => {
    // Výpočet pozície od -0.5 do 0.5 pre jemnejší pohyb
    const x = (e.clientX / window.innerWidth) - 0.8;
    const y = (e.clientY / window.innerHeight) - 0.8;
    setMousePos({ x, y });
  };

  const celkovaCena = items.reduce((total, item) => {
  // Odstránime " €" a zmeníme čiarku na bodku, aby sme mohli sčítať čísla
  const cenaCislo = parseFloat(item.cena.replace(' €', '').replace(',', '.'));
  return total + cenaCislo;
}, 0);

  return (
    <>
      {/* --- 1. NAVIGÁCIA (VRCH) --- */}
      <nav className={`
        fixed top-0 left-0 w-full z-[130] flex justify-between items-center px-10 transition-all duration-500
        ${isScrolled || isMenuOpen 
          ? 'bg-white py-4 border-b border-black/30' 
          : 'bg-transparent py-6 md:py-8'
        }
      `}>
        {/* LEFT: MENU BUTTON */}
        <div className="flex-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              z-[130] relative flex items-center uppercase font-bold tracking-tighter transition-colors duration-500
              ${isScrolled || isMenuOpen ? 'text-black' : 'text-black'}
            `}
          >
            {isMenuOpen ? <span>ZAVRIEŤ</span> : (
              <>
                <span className="hidden md:block">MENU</span>
                <div className="md:hidden flex flex-col gap-1.5 w-8">
                  <div className={`h-[2px] w-full transition-colors bg-black`}></div>
                  <div className={`h-[2px] w-full transition-colors bg-black`}></div>
                  <div className={`h-[2px] w-full transition-colors bg-black`}></div>
                </div>
              </>
            )}
          </button>
        </div>

        {/* CENTER: LOGO */}
        <div className="flex-none">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="logo" 
              className={`h-auto transition-all mr-10 duration-500 ${isScrolled ? 'w-8 md:w-10' : 'w-10 md:w-15'}`}
            />
          </Link>
        </div>

       {/* RIGHT: ICONS */}
<div className={`
  flex-1 flex justify-end gap-6 md:gap-8 uppercase font-bold items-center transition-colors duration-500
  ${isScrolled || isMenuOpen ? 'text-black' : 'text-black'}
`}>
  {/* SEARCH */}
  <button className="hover:scale-110 transition-transform">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </button>

  {/* ACCOUNT / USER */}
  <button className="hover:scale-110 transition-transform">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </button>

  {/* CART */}
  <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer flex items-center group">
    <button className="hover:scale-110 transition-transform">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    </button>
    <span className={`ml-1 px-2 py-0.5 rounded-full text-[12px] transition-all ${isScrolled || isMenuOpen ? ' text-black' : ' text-black'}`}>
      {items.length}
      
    </span>
  </div>
</div>
      </nav>

 {/* --- 2. KOŠÍK (DRAWER) --- */}
<AnimatePresence>
  {isCartOpen && (
    <>
      {/* Overlay (Pozadie) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 z-[200]"
      />
      
      {/* Samotný Drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[210] flex flex-col shadow-2xl"
      >
        
        {/* --- FIXNÁ HLAVIČKA KOŠÍKA (Vždy na vrchu) --- */}
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-white">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black">Tvoj košík</h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="text-[10px] uppercase font-bold text-black hover:opacity-50 transition border-b border-black pb-0.5"
          >
            Zavrieť
          </button>
        </div>

        {/* --- OBSAH KOŠÍKA (Scrollable) --- */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 text-black">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="text-gray-400 text-center uppercase text-[10px] tracking-widest">Tvoj košík je momentálne prázdny.</p> 
            </div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 border-b border-zinc-100 pb-6 items-center">
                {/* Fotka */}
                <div className="w-20 h-20 bg-zinc-50 relative flex-shrink-0">
                  <img src={item.foto} className="w-full h-full object-contain p-2" />
                </div>

                {/* Info o produkte */}
                <div className="flex-1">
                  <h4 className="font-bold uppercase text-[11px] tracking-tighter leading-tight">{item.nazov}</h4>
                  <p className="text-[10px] text-zinc-400 uppercase mt-1">Veľkosť: {item.size}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-sm">{item.cena}</p>
                    <span className="text-[10px] text-zinc-400 uppercase font-bold">1 ks</span>
                  </div>
                </div>

                {/* Odstrániť button */}
                <button 
                  onClick={() => removeItem(index)} 
                  className="text-[10px] uppercase font-bold text-red-500 hover:text-red-700 transition px-2"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* --- PÄTA KOŠÍKA (Suma) --- */}
        <div className="p-8 border-t bg-gray-50 text-black">
          <div className="flex justify-between mb-6">
            <span className="uppercase text-[10px] font-bold text-gray-500 tracking-widest">Celkom</span>
            <span className="text-xl font-bold italic">
              {celkovaCena.toFixed(2).replace('.', ',')} €
            </span>
          </div>
          <button className="w-full bg-black text-white py-5 uppercase text-[11px] font-bold tracking-[0.3em] hover:invert transition-all">
            Pokladňa
          </button>
        </div>

      </motion.div>
    </>
  )}
</AnimatePresence>
      {/* --- 3. FULLSCREEN OVERLAY MENU --- */}
      <div 
        onMouseMove={handleMouseMove}
        className={`fixed inset-0 z-[120] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'translate-y-0 text-black' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-black overflow-hidden">
          {/* TVARY S PARALLAXOM */}
          <motion.div 
            animate={isMenuOpen ? { x: mousePos.x * 120, y: mousePos.y * 30 } : { x: 0, y: 0 }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
            className="absolute inset-0 opacity-90 pointer-events-none"
            style={{
              backgroundImage: "url('/tvary.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div className="relative h-full container mx-auto px-12 flex items-center justify-end">
          <div className="flex flex-col items-start text-white space-y-4 md:space-y-8 pr-20 uppercase font-normal text-[32px] md:text-[32px]">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600 transition-colors">DOMOV</Link>
            <h1 className="hover:text-red-600 transition-colors cursor-pointer">ŽENY</h1>
            <h1 className="hover:text-red-600 transition-colors cursor-pointer">MUŽI</h1>
          </div>
        </div>
      </div>
    </>
  );
}