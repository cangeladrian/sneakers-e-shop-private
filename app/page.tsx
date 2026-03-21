'use client';
import React, { useState, useEffect } from 'react'; // Pridané useState a useEffect
import { motion,AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem } from 'lucide-react';
import { Reenie_Beanie } from 'next/font/google';
import { Variants } from 'framer-motion';
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
        <div className="absolute inset-0 bg-[#F3F3F3] overflow-hidden">
          
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
          <div className="flex flex-col items-start cursior-pointer space-y-4 md:space-y-8 pr-0 mt-50 md:mt-0 md:text-[24px] text-[24px] md:pr-20">
            <h1>DOMOV</h1>
            <h1>ŽENY</h1>
            <h1>MUŽI</h1>
                     
          </div>
        </div>
      </div>



  




      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
  
  <div className="relative w-full h-auto flex items-center justify-center">
    
    {/* 1. VRSTVA: VIDEO (Dole) */}
    <video 
      src="/hv.mp4" //
      autoPlay
      loop
      muted 
      playsInline
      className="w-full h-200 md:h-screen mb-30 md:mb-0 object-cover z-0" 
    />

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
          <h1 className="text-[5vw] md:text-[1vw] font-light uppercase tracking-tighter leading-none mb-6">
            Urban <br className="hidden md:block" /> Classic.
          </h1>

          {/* Podnadpis */}
          <p className="text-lg md:text-2xl font-light tracking-tight text-white/90 max-w-xl mb-12">
            Štýl, ktorý definuje mesto. Pohodlie, ktoré ťa posunie vpred.
          </p>

          {/* TLAČIDLO (Call to Action) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-10 py-4 font-bold text-[14px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Nakupovať 
            </button>
          
          </div>
        </div>

        {/* 3. VRSTVA: SCROLL INDICATOR (Úplne dole - voliteľné) */}
        <div className="absolute bottom-30 md:bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70">
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
      <section className="max-w-7xl mx-auto mt-20 px-6 pt-10 md:pt-25">
        <div className="flex-col md:flex justify-center md:items-start items-center mb-15">
          <div className='flex items-start justify-center'>
          <h2 className="text-[24px] md:text-[32px] font-normal  uppercase leading-tight ">
            Najpredávanejšie kúsky
          </h2>
          </div>
          <div className='flex items-start justify-center'>
          <button className="bg-black text-[13px] text-white mt-10 px-6 py-3 font-bold  hover:invert transition-all">
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




      <section className="relative w-full h-[450px] md:h-[800px] mt-20 md:mt-50 mb-0 flex-col items-center overflow-hidden ">
  
  {/* 1. OBRÁZOK AKO PODKLAD (Zaberá pravú polovicu až 2/3 plochy) */}
  <div className="absolute right-0 md:right-50 md:h-[500px] h-[200px] top-0 w-full md:w-[60%]  z-0">
    <Image
      src="/urbanspring1.png"
      alt="Urban Spring Collection"
      fill
      priority
      className=" md:object-contain object-right" 
    />
    {/* Jemné stmavenie obrázka, aby biely text lepšie svietil */}
    <div className="absolute inset-0  z-1" />
  </div>

  {/* 2. OBSAH (Texty) */}
  <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
    <div className="grid grid-cols-1 md:grid-cols-12 items-center w-full">
      
      {/* NADPIS - Teraz je obrovský a presahuje cez obrázok */}
      <div className="md:col-span-9 mt-20 md:mt-20 md:col-start-8">
        <h1 
          className="text-[24px] md:text-[20px] lg:text-[60px] ml-10  font-light text-white leading-[0.85]   "
        >
          Urban classic
          <br /> 
          <span className="md:ml-20">Spring</span> 
          
        </h1>
      </div>

      {/* POPIS A TLAČIDLO - Posunuté nižšie alebo bokom */}
      <div className="md:col-span-4 md:col-start-1 md:mt-10 mt-30 space-y-6">
        <div className='flex items-start md:justify-start justify-center'>
          <h2 className="text-[24px] md:text-[32px] font-normal  uppercase leading-tight ">
            Nová kolekcia
          </h2>
        </div>
        <div className='flex items-start md:justify-start justify-center'>
        <p className="text-[15px]  text-black-300 font-light max-w-xs">
          Definuj jar výnimočnou obuvou <br />
          z našej novej limitovanej edície.
        </p>
        </div>
        <div className='flex items-start md:justify-start justify-center'>
        <button className="bg-black text-[13px] text-white px-6 py-3 font-bold  hover:invert transition-all">
            Pozri sa
          </button>
         </div> 
      </div>

    </div>
  </div>

</section>


<br />
<br />


 <section className='w-full h-auto flex items-center justify-center md:mt-20 pt-10 mb-0 text-5 overflow-hidden'>
    <h1 className='font-light text-[20px] md:text-[100px] text-center text-gray-500 uppercase leading-none tracking-[0.5em] '>NAŠA <br />
    LEGENDA
    </h1>
    
    
   </section>



  <section className="relative w-full h-150 md:min-h-screen bg-white overflow-hidden  mt-0 md:mt-0 flex items-center justify-center">
      
      {/* 1. VRSTVA: POZADIE (z-0) */}
      <div className="absolute h-80 md:h-auto inset-0 z-0">
        <Image src="/group.png" alt="Background" fill className="object-cover  opacity-100" />
        <div className="absolute inset-y-0 left-0 w-40 c" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* 2. VRSTVA: VEĽKÝ NÁPIS PRO 2 (z-10) */}
<div className="absolute inset-0 flex items-start justify-center z-10 pointer-events-none">
  <motion.h1 
    // ANIMAČNÉ VLASTNOSTI (Props)
    initial={{ opacity: 0, y: 50 }}         // Začne dole a priesvitný
    whileInView={{ opacity: 1, y: 0 }}      // Keď k nemu prídeš, vysunie sa
    transition={{ 
      duration: 3.0, 
      ease: [0.22, 1, 0.36, 1]              // Luxusný plynulý dojazd
    }}
    
    // STYLOVANIE (Triedy)
    className="lg:text-[590px] mt-11 md:mt-0 text-[130px] font-semibold tracking-[-0.08em] text-black leading-none"
  >
    PRO2
  </motion.h1>
</div>

      {/* 3. VRSTVA: TOPÁNKA A KOCKA (z-20 a z-30) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        
        {/* Topánka */}
        <div className="relative mt-50 w-[120%] md:w-[600px] lg:w-[1300px] aspect-video transform translate y-50 md:translate-y-10 md:m-12 z-50 lg:translate-y-20">
          <Image src="/pro3.png" alt="Topánka" fill className="object-contain" priority />
        </div>

        {/* Kocka (Pedestál) */}
        <div className="relative w-[80%] md:w-[400px] lg:w-[950px]  aspect-square mt-[-33%] md:mt-[-250px] lg:mt-[-350px] md:mb-15 ml-12 mb-80 md:ml-52 z-20">
          <Image src="/beton.png" alt="Kocka" fill className="object-contain " />
        </div>
      </div>

      {/* 4. VRSTVA: TEXTY A TLAČIDLÁ (z-50) */}
      {/* Používame tvoju 12-stĺpcovú mriežku */}
      


        {/* Popisy vpravo */}
       <div className="col-start-10 col-span-5 text-center pointer-events-auto md:mt-270 mt-100 md:mr-0  relative flex flex-col md:items-center">
  
  {/* Prvá poznámka - rozdelená na dva riadky pre plynulé písanie */}
  <div className="flex flex-col col-span-5  md:flex items-center ">
    <HandwrittenNote 
      text="40% Shock" 
      delay={0.2} 
      className="md:text-4xl text-2xl text-neutral-800 leading-tight" 
    />
    <HandwrittenNote 
      text="Absorption " 
      delay={0.3} // Začne písať až keď skončí prvý riadok
      className="md:text-4xl text-2xl text-neutral-800 leading-tight" 
    />
  </div>
  
  {/* Animovaná čiarka */}


  {/* Druhá poznámka */}
  <div className="flex flex-col items-center">
    <HandwrittenNote 
      text="6mm Flat-waxed" 
      delay={0.5} 
      className="text-2xl md:text-4xl text-neutral-800 leading-tight" 
    />
    <HandwrittenNote 
      text="Cotton Laces" 
      delay={0.8} 
      className="text-2xl md:text-4xl  text-neutral-800 leading-tight" 
    />
    <HandwrittenNote 
      text="Origin Slovakia" 
      delay={0.8} 
      className="text-2xl md:text-4xl text-neutral-800 leading-tight" 
    />
  </div>
  
</div>
      

    </section>



  <div className="  relative z-50 mt-10 mb-20 flex items-center justify-center  pointer-events-none">
       


        {/* Tlačidlo Objav */}
        <div className="flex justify-center items-center pointer-events-auto">
          <button className="bg-black text-[13px] text-white px-6 py-3 font-bold  hover:invert transition-all">
            Objav
          </button>
        </div>
        
       </div>




<section className='w-full bg-black flex flex-col items-center justify-center py-40 md:py-70 overflow-hidden'>
  
  {/* Nadpisy pod sebou v strede */}
  <div className="flex flex-col items-center text-center">
  
    <h1 className='font-light text-[80px] md:text-[400px] opacity-50 text-white uppercase leading-none tracking-[0.1em] '> UNDERMOVEUNDERMOVE <br />UNDERMOVE</h1>
    
  </div>

  {/* Odsek v strede */}
  <div className='mt-5 max-w-2xl px-6'>
    
    <p className='text-white text-[20px] md:text-[20px] opacity-100 text-center font-light opacity-80'>
      Tvoj príbeh, tvoj krok. <br />
      Vyber si z našej ponuky exkluzívnych modelov.
    </p>
  </div>
    
</section>








    <section className="relative w-full py-24 overflow-hidden">
  {/* TEXTÚRA POZADIA */}
  <div className="absolute h-90 md:h-auto inset-0 z-0 opacity-50">
    <Image src="/pozadie2.jpg" alt="background" fill className="object-cover" />
  </div>

  {/* HLAVNÝ KONTAJNER PRE CELÚ SEKCIU - mx-auto zabezpečí stred */}
  <div className="max-w-[1400px] mx-auto m-10 relative z-10">
    
    {/* 1. HORNÁ ČASŤ - KOLÁŽ FOTIEK */}
    <div className="relative h-[400px] md:h-[600px] mb-20">
      {/* Fotka vľavo */}
      <div className="absolute left-0 top-0 md:w-[550px] z-20 w-[150px] rotate-[-8deg] shadow-2xl">
        <Image src="/urbancity3..png" width={550} height={450} alt="Lifestyle" />
      </div>

      {/* Fotka v strede */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-20px] md:w-[450px] w-[190px] rotate-[2deg] shadow-xl z-10">
        <Image src="/urbancity..png" width={450} height={350} alt="City walk" />
      </div>

      {/* Fotka vpravo */}
      <div className="absolute right-0 top-10 md:w-[500px] w-[130px] rotate-[3deg] shadow-2xl z-20">
        <Image src="/urbancity2.png" width={500} height={450} alt="Models" />
      </div>

      {/* KRÚŽOK A TOPÁNKA - lepšie pozicovanie na stred */}
      <div className="absolute  md:left-[50%] left-[20%] md:top-[90%] top-[35%] md:-translate-x-1/2 w-[300px] md:w-[400px] z-30">
        <div className="relative group mb-10 mt-5 transition-transform hover:scale-105 duration-500">
          <div className="relative  md:w-[400px] w-[220px] z-10 pl-5 md:pl-15 md:mb-[-16px] mb-[-9px] ">
             <Image src="/dinamic..png" width={400} height={200}   alt="Retro Dinamic" />
          </div>
          <div className='md:w-[550px] w-[310px]'>
          <Image src="/beton2.png" width={550} height={200}  alt="Podstavec" />
          </div>
        </div>
        <div className="relative">
          <Image src="/kresba.png" width={300} height={400} className='md:ml-10' alt="Exkluzívne modely" />
          <p className="absolute inset-0 flex mb-20 items-center justify-center font-semibold text-xl text-black">
            Exkluzívne modely
          </p>
        </div>
      </div>
    </div>

    {/* 2. DOLNÁ ČASŤ - PRODUKTY (Teraz vnútri mx-auto kontajnera) */}
    <div className="w-full mt-50 md:mt-130">
      <div className="flex md:justify-center justify-center mb-15">
        <button className="bg-black text-[13px] text-white mt-10 px-6 py-3 font-bold  hover:invert transition-all">
            Zobraziť všetko
          </button>
      </div>

      {/* PRODUKTOVÝ GRID / SCROLL */}
      <div className="flex md:grid md:grid-cols-3 gap-8 ml-5 md:ml-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-10">
        {/* Prvá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className="bg-white/50 p-6 mb-4">
            <Image src="/urbanlow.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-0'/>
          </div>
          <h3 className="font-bold uppercase tracking-tighter text-xl">Retro Dinamic</h3>
          <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
        </div>

        {/* Druhá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className="bg-white/50 p-6 mb-4">
            <Image src="/ecostreet.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-0' />
          </div>
          <h3 className="font-bold uppercase tracking-tighter text-xl">Retro Dinamic</h3>
          <p className="text-normal text-[12px] uppercase font-normal mt-1 tracking-widest">280,00 €</p>
        </div>

        {/* Tretia topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className="bg-white/50 p-6 mb-4">
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
    <div className="flex flex-col items-center space-y-8">
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