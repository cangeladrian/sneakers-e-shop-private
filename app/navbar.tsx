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
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Stav pre otvorenie vyhľadávania
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
      document.body.style.overflow = (isMenuOpen || isCartOpen || isSearchOpen) ? 'hidden' : 'unset';
    }
  }, [isMenuOpen, isCartOpen, isSearchOpen]);

  // 3. LOGIKA PRE PARALLAX V MENU
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    setMousePos({ x, y });
  };

  const celkovaCena = items.reduce((total, item) => {
    const cenaCislo = parseFloat(item.cena.replace(' €', '').replace(',', '.'));
    return total + cenaCislo;
  }, 0);

  return (
    <>
      {/* --- 1. NAVIGÁCIA (VRCH) --- */}
      <nav className={`
        fixed top-0 left-0 w-full z-[830] transition-all duration-0 px-6
        ${isScrolled || isMenuOpen 
          ? 'bg-white py-2  md:py-3 text-black shadow-sm ' 
          : 'bg-transparent text-white py-2 md:py-10  '
        }
      `}>
        {/* DOSTREDENÝ KONTAJNER: max-w-6xl zaručí, že menu drží kompaktnú, modernú šírku */}
        <div className="max-w-8xl mx-auto flex justify-between uppercase items-center relative w-full">
          
          {/* ANIMOVANÝ SEARCH PANEL (Prekryje menu po aktivácii) */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-0 bg-white z-[140] flex items-center justify-between px-2"
              >
                <div className="flex items-center gap-4 w-full max-w-3xl">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-400">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="HĽADAŤ PRODUKT, KOLEKCIU..." 
                    className="w-full bg-transparent border-none outline-none text-sm uppercase font-mono tracking-wider text-black placeholder-zinc-400"
                    autoFocus
                  />
                </div>
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 hover:text-black transition"
                >
                  ZAVRIEŤ [X]
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LEFT: HAMBURGER (PRE MOBIL) / LINKY (PRE DESKTOP) */}
          <div className="flex items-center gap-8 flex-1">
            {/* Mobilné hamburger tlačidlo */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-6 text-black"
            >
              <div className={`h-[2px] w-full bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-[2px] w-full bg-black ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-[2px] w-full bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>

            {/* Desktopové moderné inline menu */}
            <div className="hidden md:flex flex-col items-center gap-6 text-[14px] font-light tracking-widest  ">
            
              <Link href="/kolekcie" className="hover:opacity-60 transition">Dámske</Link>
              <Link href="/obuv" className="hover:opacity-60 border-b border-black transition">Pánske</Link>
           
            </div>
   <div className="hidden md:flex flex-col items-center gap-6 text-[14px] font-light tracking-widest  ">
            
              <Link href="/kolekcie" className="hover:opacity-60 transition">Novinky</Link>
              <Link href="/obuv" className="hover:opacity-60  transition">Kolekcie</Link>
           
            </div>

             <div hidden className="hidden md:flex flex-col items-center gap-6 text-[14px] font-bold tracking-widest text-black ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:opacity-60 transition ">
                {isMenuOpen ? 'Zavrieť' : 'Novinky'}
              </button>
              <Link href="/doplnky" className="hover:opacity-60 transition">Doplnky</Link>
            </div>
          </div>

          {/* CENTER: LOGO */}
          <div className="flex justify-center flex-none">
            <Link href="/">
              <img 
                src="/206.png" 
                alt="logo" 
                className={`h-auto transition-all bg-white px-2 rounded-full duration-500 ${isScrolled ? 'w-24' : 'w-28'}`}
              />
            </Link>
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex-1 flex justify-end gap-5 md:gap-12  items-center">
            {/* SEARCH LUPA */}
            
            <button onClick={() => setIsSearchOpen(true)} className="hover:scale-110 transition-transform">
              
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <h1 className='font-light text-center py-1'>Hladať</h1>
            </button>

            {/* ACCOUNT */}
            <button className="hover:scale-110 transition-transform hidden flex flex-col items-center justify-center sm:block">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
                <h1 className='font-light  text-center py-1'>Účet</h1>
            </button>

            {/* CART CONTAINER */}
            <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer flex justify-center items-center group">
              <button className="group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                  <h1 className='font-light text-center py-1'>Košík</h1>
              </button>
              <span className="ml-1 font-mono text-xl px-2 ml-2 font-bold ">
                ({items.length})
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 2. KOŠÍK (DRAWER) --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[200]"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white z-[210] flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-white">
                <h2 className="text-xs font-bold uppercase tracking-widest text-black">Tvoj košík</h2>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="text-[10px] uppercase font-bold text-black hover:opacity-50 transition border-b border-black pb-0.5"
                >
                  Zavrieť
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-black">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center">
                    <p className="text-zinc-400 uppercase text-[10px] tracking-widest">Tvoj košík je prázdny.</p> 
                  </div>
                ) : (
                  items.map((item, index) => (
                    <div key={index} className="flex gap-4 border-b border-zinc-100 pb-6 items-center">
                      <div className="w-16 h-16 bg-zinc-50 relative flex-shrink-0 rounded-md">
                        <img src={item.foto} className="w-full h-full object-contain p-2" alt="item" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold uppercase text-[11px] tracking-tight text-black leading-tight">{item.nazov}</h4>
                        <p className="text-[10px] text-zinc-400 uppercase mt-0.5">Veľkosť: {item.size}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="font-bold text-xs">{item.cena}</p>
                          <span className="text-[9px] text-zinc-400 font-bold uppercase">1 ks</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(index)} 
                        className="text-xs font-light text-zinc-300 hover:text-black transition px-2"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
              
              <div className="p-6 border-t bg-zinc-50 text-black">
                <div className="flex justify-between mb-4">
                  <span className="uppercase text-[10px] font-bold text-zinc-400 tracking-widest">Celkom</span>
                  <span className="text-lg font-bold">
                    {celkovaCena.toFixed(2).replace('.', ',')} €
                  </span>
                </div>
                <button className="w-full bg-black text-white py-4 uppercase text-[10px] font-bold tracking-[0.25em] hover:bg-zinc-900 transition-all rounded-sm shadow-sm">
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
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-[#09090b] overflow-hidden">
          <motion.div 
            animate={isMenuOpen ? { x: mousePos.x * 60, y: mousePos.y * 40 } : { x: 0, y: 0 }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url('/tvary.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        {/* Responzívny Fullscreen Layout menu */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 text-white">
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6 text-2xl md:text-4xl font-light tracking-tight font-sans">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-400 transition-colors uppercase">Domov</Link>
            <Link href="/kolekcie" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-400 transition-colors uppercase">Kolekcie</Link>
            <Link href="/obuv" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-400 transition-colors uppercase">Obuv</Link>
            <Link href="/doplnky" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-400 transition-colors uppercase">Doplnky</Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm font-mono tracking-widest text-zinc-500 space-y-2 text-center md:text-right">
            <span>MOVES CONCEPT STORE ©2026</span>
            <span>INFO@MOVESSTUDIO.COM</span>
          </div>
        </div>
      </div>
    </>
  );
}