'use client';
import React, { useState, useEffect } from 'react'; // Pridané useState a useEffect
import { motion,AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem } from 'lucide-react';
import { Reenie_Beanie } from 'next/font/google';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"




const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
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
      animate={{ 
        x: mousePos.x, 
        y: mousePos.y,
        // Brutalistické natiahnutie: keď hoveruješ, šípka sa vertikálne natiahne
        scaleY: isHovering ? 1.8 : 1, 
        scaleX: isHovering ? 0.9 : 1, // Jemne ju zúžime, aby vyzerala ešte ostrejšie
        rotate: isHovering ? 15 : 0,  // Jemné pootočenie pre dynamiku
      }}
      // Rýchla pružinová animácia pre okamžitú reakciu
      transition={{ type: 'spring', stiffness: 1200, damping: 50, mass: 0.2 }}
    >
      {/* BRUTALISTICKÁ ŠÍPKA (SVG) 
         Vycentrovali sme ju pomocou translate, aby hrot (0,0) bol presne pod myšou.
      */}
      <svg 
        width="16" 
        height="50" 
        viewBox="0 0 26 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-3px, -3px)' }} 
      >
        <path 
          // Cesta nakreslí ostrú, vysokú šípku
          d="M0 0V50L8.5 37H26L0 0Z" 
          fill="white" // Biela farba, mix-blend-difference sa postará o negatív
        />
      </svg>
    </motion.div>
  );
};




const reenieBeanie = Reenie_Beanie({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});


// 1. Definícia variantov mimo komponentu (aby sa predišlo chybám pri re-renderovaní)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: delay 
    },
  }),
};


const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// 2. Samotný komponent
const HandwrittenNote = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
     
      custom={delay} // Tu posielame delay do variantov
      className={`${reenieBeanie.className} flex flex-wrap ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span 
  key={index} 

  // @ts-ignore
  variants={letterVariants as any} // PRIDAJ "as any" PRIAMO SEM
>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
   
};







export default function Home() {
  



  
const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. SLEDOVANIE SCROLLU (Pre farbu Navbaru)
  useEffect(() => {
    const handleScroll = () => {
      // Ak odskroluješ viac ako 50px, isScrolled bude true
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ZÁKAZ SCROLLU PRI OTVORENOM MENU
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // 3. SLEDOVANIE MYŠI
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5,
    });
  };











  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <CustomCursor />
      {/* --- 1. NAVIGÁCIA (VRCH) --- */}
      <nav className={`
  fixed top-0 left-0 w-full z-[130] flex justify-between items-center px-10 transition-all duration-500
  ${isScrolled || isMenuOpen 
    ? 'bg-white py-3 md:py-3  border-b border-black/30' // Stav po skrolovaní alebo pri otvorenom menu
    : 'bg-transparent py-6 md:py-8' // Stav na začiatku (nad videom)
  }
`}>
  {/* 1. LEFT: MENU BUTTON */}
  <div className="flex-1">
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`
        z-[130] relative flex items-center uppercase font-bold tracking-tighter transition-colors duration-500
        ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}
      `}
    >
      {isMenuOpen ? (
        <span>ZAVRIEŤ</span>
      ) : (
        <>
          {/* PC TEXT */}
          <span className="hidden md:block">MENU</span>
          
          {/* MOBIL HAMBURGER */}
          <div className="md:hidden flex flex-col gap-1.5 w-8">
            <div className={`h-[2px] w-full transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`h-[2px] w-full transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
            <div className={`h-[2px] w-full transition-colors ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          </div>
        </>
      )}
    </button>
  </div>

  {/* 2. CENTER: LOGO */}
  <div className="flex-none">
    <img 
      src="/logo.png" 
      alt="logo" 
      className={`
        h-auto transition-all duration-500
        ${isScrolled ? 'w-8 md:w-10 ' : 'w-10 md:w-15'} 
      `}
      /* Poznámka: 'invert' pridaj len ak je tvoje logo čierne a chceš ho na videu biele */
    />
  </div>

  {/* 3. RIGHT: ICONS */}
  <div className={`
    flex-1 flex justify-end gap-6 md:gap-10 uppercase font-bold items-center transition-colors duration-500
    ${isScrolled || isMenuOpen ? 'text-black' : 'text-white'}
  `}>
    {/* SEARCH */}
    <button className="hover:scale-110 transition-transform">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>

    {/* CART */}
    <div 
      onClick={() => setIsCartOpen(true)} 
      className="relative cursor-pointer flex items-center group"
    >
      <button className="hover:scale-110 transition-transform">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </button>
      <span className={`
        ml-1 px-2 py-0.5 rounded-full text-[10px] transition-all
        ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}
      `}>
        0
      </span>
    </div>
  </div>
</nav>


      


<AnimatePresence>
  {isCartOpen && (
    <>
      {/* 1. TMAVÉ POZADIE (Overlay) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 z-[200] "
      />

      {/* 2. BOČNÝ PANEL */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[210]  flex flex-col"
      >
        {/* HLAVIČKA KOŠÍKA */}
        <div className="p-8 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold uppercase tracking-widest">Tvoj košík</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-xs uppercase font-bold text-black hover:opacity-50 transition"
          >
            Zavrieť
          </button>
        </div>

        {/* OBSAH KOŠÍKA (Prázdny stav) */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center text-center">
          <p className="text-gray-400 mb-6">Tvoj košík je momentálne prázdny.</p>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="border-b border-black text-sm uppercase font-bold pb-1 hover:text-red-500 hover:border-red-500 transition"
          >
            Pokračovať v nákupe
          </button>
        </div>

        {/* SPODNÁ ČASŤ (Súhrn) */}
        <div className="p-8 border-t bg-gray-50">
          <div className="flex justify-between mb-6">
            <span className="uppercase text-xs font-bold text-gray-500">Celkom</span>
            <span className="text-xl font-bold">0,00 €</span>
          </div>
          <button className="w-full bg-black text-white py-5 uppercase text-xs font-bold tracking-[0.2em] hover:bg-neutral-800 transition">
            Pokladňa
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-4 uppercase">
            Doprava zadarmo
          </p>
        </div>
      </motion.div>
    </>
  )}





</AnimatePresence>

      {/* --- 2. FULLSCREEN OVERLAY MENU --- */}
      <div 
        onMouseMove={handleMouseMove}
        className={`fixed inset-0 z-[120] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'translate-y-0 text-black' : '-translate-y-full'
        }`}
      >
        {/* POZADIE S PARALLAXOM */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          
          {/* VRSTVA 1: NÁPIS VIREX (Hýbe sa pomaly) */}
          <motion.div 
          
            
            transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
            className="absolute inset-0  pointer-events-none"
            style={{
              
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'transform',
              transformStyle: 'preserve-3d'
            }}
          />

          {/* VRSTVA 2: TVARY (Hýbu sa silnejšie a opačne) */}
          <motion.div 
            animate={isMenuOpen ? { x: mousePos.x * 30, y: mousePos.y * 30 } : { x: 0, y: 0 }}
            transition={{ type: 'tween', ease: 'linear', duration: 0.5 }}
            className="absolute inset-0  mt-80 md:mt-0 opacity-100 pointer-events-none"
            style={{
              backgroundImage: "url('/tvary.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'left  ',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform',
              transformStyle: 'preserve-3d'
            }}
          />

          {/* Jemný Noise filter */}
          
        </div>

        {/* ODKAZY V MENU */}
        <div className="relative h-full container mx-auto px-12 flex md:items-center md:justify-end justify-center items-top">
          <div className="flex flex-col items-start text-white cursior-pointer space-y-4 md:space-y-8 pr-0 mt-50 md:mt-0 md:text-[32px] text-[24px] md:pr-20">
           <Link href="/" onClick={() => setIsMenuOpen(false)}>
  <h1 className="hover:text-red-800 transition-colors">
    DOMOV
  </h1>
</Link>
            <h1>ŽENY</h1>
            <h1>MUŽI</h1>
                     
          </div>
        </div>
      </div>



  




      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        
  
  
    
   {/* 1. VIDEO PRE MOBIL (Zobrazí sa len na malých displejoch) */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  >
    <source src="/hvmd.mp4" type="video/mp4" />
  </video>

  {/* 2. VIDEO PRE DESKTOP (Skryté na mobile, zobrazené od 'md' vyššie) */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hv.mp4" type="video/mp4" />
  </video>
  <div className="relative w-full h-auto flex items-center justify-center">
{/* 2. VRSTVA: TEXTY (V popredí) */}
      {/* Používame Flexbox na vycentrovanie obsahu */}
      <div className="absolute z-20 h-full container mx-auto px-6 md:px-12 flex flex-col items-start justify-center text-white">
        
        {/* KONTAJNER PRE NÁPISY (S animáciou, ak chceš) */}
        <div className="max-w-5xl">
          {/* Malý nadpis / Kategória */}
          <span className="text-sm md:text-base font-light uppercase tracking-[0.2em] text-white/80 mb-3 block">
             kolekcia 2026
          </span>

          {/* Hlavný, dominantný nápis */}
          <h1 className="text-[5vw] md:text-[1vw] text-lime-400 font-light uppercase tracking-tighter leading-none mb-6">
            Urban <br className="hidden md:block" /> Classic SPRING.
          </h1>

          {/* Podnadpis */}
          <p className="text-lg md:text-2xl font-light tracking-tight text-white/90 max-w-xl mb-12">
            Štýl, ktorý definuje mesto. Pohodlie, ktoré ťa posunie vpred.
          </p>

          {/* TLAČIDLO (Call to Action) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-6 py-3 font-bold text-[13px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Nakupovať 
            </button>
          
          </div>
        </div>

        {/* 3. VRSTVA: SCROLL INDICATOR (Úplne dole - voliteľné) */}
        <div className="absolute top-60 md:top-80 left-1/2 -translate-x-1/2 flex flex-col justify-end items-center opacity-70">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-10 bg-white/50 relative overflow-hidden">
            {/* Animovaná čiara */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
          </div>
        </div>
      </div>
    {/* 2. VRSTVA: NÁPIS (Hore na videu) */}
    {/* Používame absolute inset-0 na vycentrovanie nad video */}
 

  </div>
</section>




     





      {/* 3. PRODUCT GRID (PRODUKTY POD SEBOU) */}
      <section className="max-w-7xl mx-auto mt-0 md:mt-20 px-6 pt-10 md:pt-25">
        <div className="flex-col md:flex justify-center md:items-start items-center mb-15">
          <div className='flex items-start justify-center'>
          <h2 className="text-[24px] md:text-[32px] font-normal  uppercase leading-tight ">
            Najpredávanejšie kúsky
          </h2>
          </div>
          <div className='flex items-start md:items-end justify-center'>
          <button className="bg-black text-[13px] text-white mt-10 px-6 py-3 font-bold md:items-end hover:invert transition-all">
            Zobraziť všetko
          </button>
          </div>
        </div>

        {/* Mriežka s 3 stĺpcami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Produkt 1 */}
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/dinamic..png" alt="shoe" className="w-full group-hover:scale-110 transition duration-0" />
            </div>
            <div className="mt-6 flex justify-between items-start px-2">
              <div>
                <h3 className="font-normal uppercase text-sm tracking-tight">Urban Dinamic</h3>
                <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
              </div>
             
            </div>
          </div>

          {/* Produkt 2 */}
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/u3..png" alt="shoe" className="w-full group-hover:scale-110 transition duration-0" />
            </div>
            <div className="mt-6 flex justify-between items-start px-2">
              <div>
                <h3 className="font-normal uppercase text-sm tracking-tight">U-3</h3>
                <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">300,00 €</p>
              </div>
             
            </div>
          </div>

          {/* Produkt 3 */}
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/retrolow..png" alt="shoe" className="w-full group-hover:scale-110 transition duration-0" />
            </div>
            <div className="mt-6 flex justify-between items-start px-2">
              <div>
                <h3 className="font-normal uppercase text-sm tracking-tight">Retro Low</h3>
                <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">249,99 €</p>
              </div>
 
            </div>
          </div>
          

          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/retrohigh.png" alt="shoe" className="w-full group-hover:scale-110 transition duration-0" />
            </div>
            <div className="mt-6 flex justify-between items-start px-2">
              <div>
                <h3 className="font-normal uppercase text-sm tracking-tight">Retro Low</h3>
                <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">249,99 €</p>
              </div>
 
            </div>
          </div>




        </div>
      </section>




<br />




      <section className="max-w-7xl mx-auto px-2  mt-20  md:mb-20">
  {/* Hlavný kontajner s Flexboxom */}
  <div className="relative w-full min-h-[500px]  md:h-[800px]  flex flex-col md:flex-row items-center overflow-hidden">
    
    {/* 1. OBRÁZKOVÁ ČASŤ (Pohľadnica s nápisom Spring) */}
    {/* Na mobile (flex-col) bude prvá vďaka 'order-first' */}
    {/* Na PC (md:flex-row) bude vpravo vďaka 'md:order-last' a šírke 'md:w-2/3' */}
    <div className="relative w-full md:w-7/4 h-[150px] md:h-full overflow-hidden flex items-center justify-center p-6 md:p-12  order-first md:order-last">
      <Image
        src="/urbanspring1.png"
        alt="Urban Spring Collection"
        fill
        className="object-cover md:object-contain object-center md:object-left"
        priority
      />
      
      {/* NÁPIS VYCENTROVANÝ V POHĽADNICI */}
      <h1 className="relative z-10 text-[5vw] md:text-[2vw] mr-[30%] lg:text-[48px] text-white font-light leading-[0.85] text-center ">
        Urban classic
        <br /> 
        <span className="ml-[10%]">Spring</span> 
      </h1>
    </div>

    {/* 2. TEXTOVÁ ČASŤ (Nová kolekcia) */}
    {/* Na mobile bude druhá v poradí */}
    {/* Na PC bude vľavo vďaka šírke 'md:w-1/3' */}
    <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start py-10 md:pr-10 z-20 bg-white">
      <h2 className="text-black text-[24px] md:text-[32px] font-normal  uppercase leading-tight mb-6">
        Nová kolekcia
      </h2>
      <p className="text-zinc-900 text-[14px] text-center md:text-left md:text-[16px] font-light max-w-[280px] mb-8 leading-relaxed">
        Definuj jar výnimočnou obuvou <br className="hidden md:block" />
        z našej novej limitovanej edície.
      </p>
      <button className="bg-black text-[13px] text-white px-6 py-3 font-bold hover:invert transition-all ">
        Pozri sa
      </button>
    </div>

  </div>
</section>

<br />
<br />


 <section className='w-full h-auto flex items-center justify-center md:mt-10 md:mb-10 md:pt-10 mb-0 text-5 overflow-hidden'>
    <h1 className='font-light text-[20px] md:text-[80px] text-center text-gray-500 uppercase leading-none tracking-[0.5em] '>NAŠA <br />
    LEGENDA
    </h1>
    
    
   </section>


{/* 1. HLAVNÁ SEKCIA - Teraz používa Flexbox pod sebou (flex-col) */}
<section className="relative w-full bg-white overflow-hidden flex flex-col items-center">
  
  {/* ========================================================= */}
  {/* 1. HORNÁ ČASŤ (Pozadie + Nápis + Topánka) */}
  {/* ========================================================= */}
  <div className="relative w-full h-[500px] landscape:mb-20  md:h-screen flex items-center justify-center overflow-hidden">
    
    {/* POZADIE - Teraz je len v tejto hornej časti */}
    <div className="absolute inset-0 z-0">
      <Image 
        src="/group.png" 
        alt="Background" 
        fill 
        className="object-cover opacity-100" 
      />
      {/* Gradienty */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/0 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>

    {/* VEĽKÝ NÁPIS PRO 2 (z-10) */}
    <div className="absolute inset-0 flex items-start justify-center z-10 pointer-events-none">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.0, ease: [0.22, 1, 0.36, 1] }}
        className="text-[32vw] landscape:text-[20vh] landscape:md:text-[40vh] md:text-[24vw] mt-20 md:mt-10 font-semibold tracking-[-0.08em] text-black leading-none"
      >
        PRO2
      </motion.h1>
    </div>

    {/* TOPÁNKA (z-20) */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
      <div className="relative w-[150%] landscape:w-[50%] landscape:md:w-[70%] md:w-[60%] lg:w-[70%] aspect-video">
        <Image src="/topankabeton3.png" alt="Topánka" fill className="object-contain" priority />
      </div>
    </div>
  </div>

  {/* ========================================================= */}
  {/* 2. SPODNÁ ČASŤ (Texty pod topánkou na čistom bielom pozadí) */}
  {/* ========================================================= */}
 <div className="relative z-30 w-full bg-white -mt-16 md:-mt-50 pt-0 pb-10 flex flex-col items-center text-center">
    
    {/* Prvá skupina poznámok */}
    <div className="flex flex-col items-center space-y-4 mb-4">
      <HandwrittenNote 
        text="40% Shock" 
        delay={0.2} 
        className="text-[7vw] md:text-5xl text-neutral-800" 
      />
      <HandwrittenNote 
        text="Absorption" 
        delay={0.3} 
        className="text-[7vw] md:text-5xl text-neutral-800" 
      />
    </div>

    {/* Druhá skupina poznámok */}
    <div className="flex flex-col items-center space-y-4">
      <HandwrittenNote 
        text="6mm Flat-waxed" 
        delay={0.5} 
        className="text-[7vw] md:text-5xl text-neutral-800" 
      />
      <HandwrittenNote 
        text="Cotton Laces" 
        delay={0.8} 
        className="text-[7vw] md:text-5xl text-neutral-800" 
      />
      <HandwrittenNote 
        text="Origin Slovakia" 
        delay={1.1} 
        className="text-[7vw] md:text-5xl font-bold text-neutral-900" 
      />
    </div>
  </div>
  
<div className="  relative z-50  mb-20 flex items-center justify-center  pointer-events-none">
       


        {/* Tlačidlo Objav */}
        <div className="flex justify-center items-center md:py-20 pointer-events-auto">
          <button className="bg-black text-[13px] text-white px-6 py-3 font-bold  hover:invert transition-all">
            Objav
          </button>
        </div>
        
       </div>


</section>
        

      


        {/* Popisy vpravo */}
       {/* Kontajner, ktorý pokryje celú plochu a vycentruje obsah */}

      

   



  


<section className='w-full bg-black flex flex-col items-center justify-center py-20 md:py-80 overflow-hidden'>
  
  {/* Nadpisy pod sebou v strede */}
  <div className="flex flex-col items-center text-center">
  
    <h1 className='font-light text-[80px] md:text-[400px] opacity-50 text-white uppercase leading-none tracking-[0.1em] '> UNDERMOVEUNDERMOVE <br />UNDERMOVE</h1>
    
  </div>

  {/* Odsek v strede */}
  <div className='mt-5 max-w-2xl px-6'>
    
    <p className='text-white text-[20px] md:text-[20px] opacity-100 text-center font-light opacity-100'>
      Tvoj príbeh, tvoj krok. <br />
      Vyber si z našej ponuky exkluzívnych modelov.
    </p>
  </div>
    
</section>








    <section className="relative w-full py-12 md:py-24 overflow-hidden bg-black">
  {/* TEXTÚRA POZADIA */}
  <div className="absolute inset-0 z-0 mt-[27%] md:-mt-[-10%] opacity-100">
    <Image src="/pozadie2.jpg" alt="background" fill className="object-cover" />
  </div>

  <div className="max-w-[1400px] mx-auto relative z-10 px-4">
    
    {/* 1. HORNÁ ČASŤ - KOLÁŽ (Používame relatívnu výšku k šírke) */}
    <div className="relative aspect-[16/12] md:aspect-[16/8] w-full mb-10 md:mb-20">
      
      {/* Fotka vľavo - šírka v % zabezpečí, že sa nezrazí */}
      <div className="absolute left-0 top-[10%] w-[35%] md:w-[30%] z-20 rotate-[-8deg]">
        <Image src="/urbancity3..png" width={550} height={450} alt="Lifestyle" className="w-full h-auto" />
      </div>

      {/* Fotka v strede - hlavný vizuál */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[45%] md:w-[35%] rotate-[2deg] z-10 ">
        <Image src="/urbancity..png" width={450} height={350} alt="City walk" className="w-full h-auto" />
      </div>

      {/* Fotka vpravo */}
      <div className="absolute right-0 top-[15%] w-[30%] md:w-[28%] rotate-[3deg] z-20 ">
        <Image src="/urbancity2.png" width={500} height={450} alt="Models" className="w-full h-auto" />
      </div>

      {/* KRÚŽOK A TOPÁNKA (Plávajúci element) */}
      {/* Používame bottom namiesto top, aby to držalo spodok koláže */}
      <div className={`
  absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center
  /* Mobil na výšku: držíme sa nižšie */
  bottom-[-25%] w-[60%]
  /* Mobil na ŠÍRKU (Landscape): posunieme to nižšie a zmenšíme, aby to neprekrylo fotky */
  landscape:translate-y-[8%] mt-auto landscape:scale-105
  /* Desktop: vrátime na pôvodné hodnoty */
  md:bottom-[-10%] md:w-[400px] md:scale-100
`}>
        
        <div className="relative group transition-transform hover:scale-105 duration-500 w-full flex flex-col items-center">
          {/* Topánka */}
          <div className="w-[70%] mb-[-3.1%] ml-[-18%] z-10">
             <Image src="/skatepro..png" width={400} height={200} alt="Retro Dinamic" className="w-full h-auto" />
          </div>
          {/* Podstavec */}
          <div className='w-full'>
            <Image src="/beton2.png" width={550} height={200} alt="Podstavec" className="w-full h-auto" />
          </div>
        </div>

        {/* Nápis pod topánkou */}
        <div className="relative w-full mt-4">
          <Image src="/kresba.png" width={300} height={400} alt="Exkluzívne modely" className="w-full h-auto" />
          <p className="absolute inset-0 flex mb-[19.5%] items-center justify-center font-bold text-[3.5vw] md:text-xl text-black uppercase tracking-tight">
            Exkluzívne modely
          </p>
        </div>
      </div>
    </div>
  


    {/* 2. DOLNÁ ČASŤ - PRODUKTY (Teraz vnútri mx-auto kontajnera) */}
    <div className="w-full py-10 md:py-20">
      <div className="flex md:justify-start justify-center mb-15">
        <button className="bg-black text-[13px] text-white mt-10 px-6 py-3 font-bold  hover:invert transition-all">
            Zobraziť všetko
          </button>
      </div>

      {/* PRODUKTOVÝ GRID / SCROLL */}
      <div className="flex md:grid md:grid-cols-3 gap-12 ml-5 md:ml-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-10">
        {/* Prvá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/urbanlow.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-0'/>
          </div>
          <h3 className="font-bold uppercase tracking-tighter text-xl">Retro Dinamic</h3>
          <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
        </div>

        {/* Druhá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/ecostreet.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-0' />
          </div>
          <h3 className="font-bold uppercase tracking-tighter text-xl">Retro Dinamic</h3>
          <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
        </div>

        {/* Tretia topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/skatepro..png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-0' />
          </div>
          <h3 className="font-bold uppercase tracking-tighter text-xl">Retro Dinamic</h3>
          <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
        </div>
      </div>
    </div>
  </div>
</section>
<br />
<br />











<section className='flex items-center justify-center'>
  <div className='relative w-250 opacity-70 col-start-3 col-span-8'>
    <img src="odber.png" alt="" />
  </div>

  <div className='absolute'>
    <h2 className='font-normal text-center text-black lg:text-[30px]'>Prihlás sa na odber noviniek a získaj 
      <br />10% zľavu na tvoj prvý nákup.</h2></div>
  <div className='absolute mt-50'>
  <button className="bg-black text-[13px] text-white px-6 py-3 font-bold  hover:invert transition-all">
            Prihlásiť sa
          </button>
  </div>
</section>


     <section className="w-full flex justify-center justify-center
           py-10">
  {/* TENTO DIV DRŽÍ VŠETKY TRI POLOŽKY VEDĽA SEBA */}
  <div className=" md:flex-row  md:gap-80 flex flex-col md:grid md:grid-cols-3  gap-10 text-center   text-[12px]   font-normal ">
    
    {/* 1. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-center">
      <Truck size={32} strokeWidth={1.5} />
      <span>Doprava zadarmo pre <br /> všetky objednávky.</span>
    </div>

    {/* 2. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-justify">
      <RotateCcw size={32} strokeWidth={1.5} />
      <span>30 dní na vrátenie tovaru</span>
    </div>

    {/* 3. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-center">
      <Gem size={32} strokeWidth={1.5} />
      <span>Prémiové materiály a <br /> exkluzívne modely</span>
    </div>

  </div>

  <br />
</section>


      <footer className="bg-white text-black py-16 px-6 md:px-24 border-t border-gray-100">
  <div className="max-w-7xl mx-auto space-y-16">
    
    

    {/* 2. SEKČIA: LOGÁ PLATBY A DOPRAVY */}
    <div className="flex flex-col items-center py-10 space-y-8">
      <div className="text-center">
        <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-4">Spôsoby platby</p>
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-100">
          <img src="/platba.png" className="h-6" alt="Platba" />
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-400 uppercase text-center tracking-widest text-[10px] mb-4">Doprava</p>
        <div className="flex flex-wrap justify-center gap-8 grayscale opacity-100">
          <img src="/doprava.png" className="h-8" alt="Doprava" />
         
        </div>
      </div>
    </div>

    {/* 3. SEKČIA: HLAVNÉ MENU (Grid 4 stĺpce) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12">
      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Pomoc</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer transition">Sledovanie objednávky</li>
          <li className="hover:text-black cursor-pointer transition">Vrátenie a výmena</li>
          <li className="hover:text-black cursor-pointer transition">Tabuľky veľkostí</li>
          <li className="hover:text-black cursor-pointer transition">FAQ</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Kategórie</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer transition">Nové kúsky</li>
          <li className="hover:text-black cursor-pointer transition">Ženy</li>
          <li className="hover:text-black cursor-pointer transition">Muži</li>
          <li className="hover:text-black cursor-pointer transition">Blog</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Kontakt</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="font-medium">+421 980 000 222</li>
          <li>info@virex.sk</li>
          <li className="text-xs text-gray-400">Pon - Pia: 08:00 - 18:00</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Sociálne siete</h4>
        <div className="flex gap-4">
           {/* Tu použi ikony napr. z Lucide-react alebo klasické SVG */}
           <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">IG</div>
           <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">FB</div>
        </div>
      </div>
    </div>

    {/* SPODNÁ LIŠTA: COPYRIGHT */}
    <div className="border-t border-gray-100 pt-8 flex flex-col w-full  md:flex-row justify-between items-center text-[10px] text-black-400 uppercase tracking-widest">
      <p>© 2026 VIREX Všetky práva vyhradené.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <span className="hover:text-black cursor-pointer">Obchodné podmienky</span>
        <span className="hover:text-black cursor-pointer">Ochrana údajov</span>
        <span className='hoover:text-black cursor-pointer'>Virex: SK  CZ  IT  HR  AT  FR  UK</span>
      </div>
    </div>
  </div>
</footer>

    </main>
  )
}