'use client';
import React, { useState, useEffect } from 'react';
import { motion,AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem } from 'lucide-react';
import { Reenie_Beanie } from 'next/font/google';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"








const reenieBeanie = Reenie_Beanie({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

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

const HandwrittenNote = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const letters = Array.from(text);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
     
      custom={delay} 
      className={`${reenieBeanie.className} flex flex-wrap ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span 
  key={index} 


  variants={letterVariants as any}
>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
   
};







export default function Home() {
  




  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
     
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        
   {/* 1. VIDEO PRE MOBIL  */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover md:hidden"
  >
    <source src="/hvmd2.mp4" type="video/mp4" />
  </video>

  {/* 2. VIDEO PRE DESKTOP  */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hv2.mp4" type="video/mp4" />
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
             <Link href="/spring">
            <button className="bg-white text-black px-6 py-3 font-bold text-[13px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Nakupovať 
            </button>
           </Link>
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

 

  </div>
</section>





      {/* 3. PRODUCT GRID (PRODUKTY POD SEBOU) */}
      <section className="max-w-7xl mx-auto mt-0 md:mt-20 px-6 pt-10 md:pt-25">
        
        <div className='flex justify-center py-4 mt-8 md:mt-0 md:justify-start items-start'>
            
         <motion.h1  // VRÁTENÉ ANIMAČNÉ VLASTNOSTI (Props)
        initial={{ opacity: 0, y: 10 }}         //
        whileInView={{ opacity: 1, y: 0 }}      // 
        transition={{ 
          duration: 1.0, 
          ease: [0.22, 1, 0.36, 1]              // 
        }} className='uppercase leading-relaxed font-bold [word-spacing:0.5rem] md:text-[32px] text-[24px]  tracking-tight'>to najlepšie</motion.h1>
          
          </div>


        {/* Mriežka s 3 stĺpcami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Produkt 1 */}
          <Link href="/produkt/dinamic">
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/dinamic1.webp" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">Urban Dinamic</h3>
                
              </div>
             
            </div>
          </div>
           </Link>


          {/* Produkt 2 */}
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/u3.1.1.webp" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">U-3</h3>
             
              </div>
             
            </div>
          </div>

          {/* Produkt 3 */}
          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/retrolow1.webp" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">Retro Low</h3>
         
              </div>
 
            </div>
          </div>
          

          <div className="group cursor-pointer">
            <div className=" aspect-[7/5] flex items-center justify-center p-12 overflow-hidden">
              <img src="/retrohigh1.webp" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">Retro Low</h3>
             
              </div>
 
            </div>
          </div>




        </div> 
        
         <div className="flex-col md:flex justify-center md:items-center items-center py-15">
      
          <div className='flex items-start md:items-end justify-center'>
            <Link href="/">
          <button className="bg-black text-[13px] text-white md:mt-10 px-6 py-3 font-bold md:items-end  hover:invert hover:scale-300 transition-all">
            Zobraziť všetko
          </button>
          </Link>
          </div>
        </div>
      </section>


<br />



      <section className="max-w-8xl mx-auto px-8   mt-20  md:mb-30">
  {/* Hlavný kontajner s Flexboxom */}
  <div className="relative w-full min-h-[400px] md:min-h-[600px]  flex flex-col md:flex-row items-center justify-center  overflow-hidden">
    
    {/* 1. OBRÁZKOVÁ ČASŤ (Pohľadnica s nápisom Spring) */}

    <div className="relative w-full md:w-2/3 h-[200px] landscape:h-[600px] md:h-[600px] overflow-hidden flex items-center justify-center p-6 md:p-12  order-first md:order-last">
      <Image
        src="/urbanspring1.png"
        alt="Urban Spring Collection"
        fill
        className="object-cover md:object-contain object-center md:object-left"
        priority
      />
      
      {/* NÁPIS VYCENTROVANÝ V POHĽADNICI */}
      <h1 className="relative z-10 text-[5vw] md:text-[2vw] mr-[30%] lg:text-[36px] text-white font-light uppercase  leading-relaxed [word-spacing:0.5rem] text-center ">
        Urban classic
        <br /> 
        <span className="ml-[10%]">Spring</span> 
      </h1>
    </div>

    {/* 2. TEXTOVÁ ČASŤ (Nová kolekcia) */}
  
    <div className="w-full md:w-1/8 flex flex-col justify-center items-center md:items-center py-10 z-20 bg-white">
      <motion.h2  initial={{ opacity: 0, y: 10 }}         // 
        whileInView={{ opacity: 1, y: 0 }}      //
        transition={{ 
          duration: 1.0, 
          ease: [0.22, 1, 0.36, 1]              //
        }} className="text-black text-[24px] md:text-[32px] font-bold uppercase leading-tight mb-6">
        Nová kolekcia
      </motion.h2>
      <p className="text-zinc-900 text-[14px] text-center md:text-left md:text-[16px] font-light max-w-[280px] mb-8 leading-relaxed">
        Definuj jar výnimočnou obuvou <br className="hidden md:block" />
        z našej novej limitovanej edície.
      </p>
       <Link href="/spring">
      <button className="bg-black text-[13px] text-white px-6 py-3 font-bold  hover:invert  transition-all ">
        Pozri sa
      </button>
      </Link>
    </div>

  </div>
</section>

<br />
<br />

    {/* 3. PRODUCT GRID (PRODUKTY POD SEBOU) */}
      <section className="max-w-7xl mx-auto mt-0 md:mt-10 px-6  md:mb-50">
      <div className="flex-col  py-15">
      
          <div className='flex flex-col  justify-center py-4 md:justify-start items-center'>
            
         <motion.h1  // 
        initial={{ opacity: 0, y: 10 }}         // 
        whileInView={{ opacity: 1, y: 0 }}      //
        transition={{ 
          duration: 1.0, 
          ease: [0.22, 1, 0.36, 1]              //
        }} className='uppercase leading-relaxed font-bold [word-spacing:0.5rem] md:text-[32px] text-[24px]  tracking-tight'>Oblečenie a doplnky</motion.h1>
          <p className='flex  py-2 text-zinc-900 text-[14px] text-center md:text-left md:text-[16px] font-light leading-relaxed'>Limitované dropy oblečenia, ktoré definujú tvoju súčastnú mestskú uniformu</p>
          </div>

        {/* Mriežka s 3 stĺpcami */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          
          {/* Produkt 1 */}
         
          <div className="group cursor-pointer">
            <div className=" md:aspect-[7/5] aspect-[8/6] flex items-center justify-center p-2 md:p-12 overflow-hidden">
              <img src="/ciapka.png" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase  text-[16px] text-sm tracking-tight">Structure cap</h3>
                
              </div>
             
            </div>
          </div>
       


          {/* Produkt 2 */}
          <div className="group cursor-pointer">
            <div className="  md:aspect-[7/5] aspect-[8/6] flex items-center justify-center p-2 md:p-12 overflow-hidden">
              <img src="/tricko.png" alt="shoe" className="w-full  group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase  text-[16px] text-sm tracking-tight">MOVES tričko</h3>
             
              </div>
             
            </div>

        

          </div>

            


 




        </div> 



<div className="flex justify-center">

        <div className="group md:w-[70%] w-[100%] cursor-pointer ">
            <div className=" aspect-[7/5] w-full h-flex items-center justify-center col-span-3 p-12 overflow-hidden">
              <img src="/taska2.webp" alt="shoe" className="w-full group-hover:scale-110 transition duration-500" />
            </div>
            <div className="mt-6 flex justify-center items-center px-2">
              <div>
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">MOVES taška</h3>
             
              </div>
             
            </div>
          </div>
             </div> 

          
         
        </div>
      </section>

 


{/* 1. HLAVNÁ SEKCIA - Teraz používa Flexbox pod sebou (flex-col) */}
<section className="relative w-full flex flex-col items-center">
  
  {/* ========================================================= */}
  {/* 1. HORNÁ ČASŤ (Nápis PRO2 za Topánkou) */}
  {/* ========================================================= */}

  <div className="relative w-full aspect-[3.5/5]  bg-black md:aspect-video flex items-center justify-center   overflow-hidden z-10  ">
    
    {/* POZADIE (Zostáva absolute) */}
    <div className="absolute   inset-0 z-0">
      <Image 
        src="/group.png" 
        alt="Background" 
        fill 
        className="object-cover grayscale opacity-90" 
        priority
      />
    </div>

    {/* NÁPIS PRO2 (S VRÁTENOU ANIMÁCIOU) */}
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <motion.h1 
        // 
        initial={{ opacity: 0, y: 120 }}         // 
        whileInView={{ opacity: 1, y: 0 }}      // 
        transition={{ 
          duration: 3.0, 
          ease: [0.22, 1, 0.36, 1]              // 
        }}
        
        
        className="text-[35vw] md:text-[8vw] mb-[28%] font-NORMAL text-red-900 "
      >
       NEXT 3
      </motion.h1>
    </div>

    {/* TOPÁNKA NA KOCKE  */}
    <motion.div 
       initial={{ opacity: 0, x: -120 }}         // 
        whileInView={{ opacity: 1, x: 0 }}      // 
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1]              // 
        }}
className="relative z-20 w-[140%] md:w-[40%]  hover:scale-110  duration-1200">

      <Image 
        src="/airzoom.webp" 
        alt="Topánka na kocke" 
        width={1200} 
        height={800} 
        className="object-contain  "
        priority 
      />
    </motion.div>
    
  </div>

  {/* ========================================================= */}
  {/* 2. SPODNÁ ČASŤ (Texty pod topánkou) */}
  {/* ========================================================= */}

<div className="absolute bottom-10 md:bottom-20  z-30 w-full flex flex-col items-center justify-center px-6">
    
    <div className="mb-1 md:mb-10">
      <HandwrittenNote 
        text="nike x moves" 
        className="text-5xl md:text-8xl text-black italic " 
      />
    </div>

    <Link href="/produkt/pro2" className="w-fullmax-w-xs">
      <button className="bg-black text-[13px] text-white px-6 py-3 font-bold hover:invert  transition-all">
        Objav
      </button>
    </Link>
  </div>

</section>

    

  


<section className='w-full h-[100vw] md:h-[50vw] bg-black flex flex-col items-center justify-center py-20 md:py-80 overflow-hidden'>
  

  <div className="flex flex-col items-center text-center">
  
    <h1 className='font-bold text-[36px] md:text-[10vw] opacity-100 text-red-700 uppercase leading-relaxed tracking-[-0.1em] '> UNDERMOVES</h1>
    
  </div>

 
  <div className='mt-5 max-w-2xl px-6'>
    
    <p className='text-white text-[16px] md:text-[20px] opacity-100 text-center font-light opacity-100'>
      Tvoj príbeh, tvoj krok. <br />
      Vyber si z našej ponuky exkluzívnych modelov.
    </p>
  </div>
    
</section>








    <section className="relative w-ful  min-h-screen  py-12 md:py-24 overflow-hidden bg-black">
  {/* TEXTÚRA POZADIA */}
  <div className="absolute inset-0 z-0 mt-[27%] md:-mt-[-10%] opacity-100">
    <Image src="/pozadie2.jpg" alt="background" fill className="object-cover" />
  </div>

  <div className="max-w-[1400px] mx-auto relative z-10 px-4">
    
    {/* 1. HORNÁ ČASŤ - KOLÁŽ (Používame relatívnu výšku k šírke) */}
    <div className="relative aspect-[16/12] md:aspect-[16/8] w-full mb-10 md:mb-20">
      
      {/* Fotka vľavo - šírka v % zabezpečí, že sa nezrazí */}
      <div className="absolute left-0 top-[10%] w-[35%] md:w-[35%] z-230  rotate-[-8deg]">
        <Image src="/urbancity3..png" width={550} height={450} alt="Lifestyle" className="w-full h-auto" />
      </div>

      {/* Fotka v strede - hlavný vizuál */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[45%] md:w-[45%]  rotate-[2deg] z-10 ">
        <Image src="/urbancity..png" width={450} height={350} alt="City walk" className="w-full h-auto" />
      </div>

      {/* Fotka vpravo */}
      <div className="absolute right-0 top-[15%] w-[30%] md:w-[38%]  rotate-[3deg] z-220 ">
        <Image src="/urbancity2.png" width={500} height={450} alt="Models" className="w-full h-auto" />
      </div>

      {/* KRÚŽOK A TOPÁNKA (Plávajúci element) */}
      {/* Používame bottom namiesto top, aby to držalo spodok koláže */}
      <div className={`
  absolute left-1/2 -translate-x-1/2 md:z-30 z-600 flex flex-col items-center
  /* 1. DESKTOP (Základ pre veľké obrazovky) */
  md:z-30 md:bottom-[-/* 1. DESKTOP (PC) - Základný stav */
  z-30 bottom-[-10%] w-[400px] scale-100
  
  /* 2. MOBIL PORTRAIT (Šírka pod 768px) */
  [@media(max-width:767px)]:z-[600] 
  [@media(max-width:767px)]:bottom-[-25%] 
  [@media(max-width:767px)]:w-[60%]
  
  /* 3. MOBIL LANDSCAPE (Šírka pod 900px A výška pod 500px) */
  [@media(max-width:950px)_and_(max-height:500px)]:bottom-[-45%] 
  [@media(max-width:950px)_and_(max-height:500px)]:scale-500%] md:w-[400px] md:scale-100
  
  /* 2. MOBIL PORTRAIT (Iba na malých zariadeniach do 768px) */
  max-md:z-[600] max-md:bottom-[-25%] max-md:w-[60%]
  
  /* 3. MOBIL LANDSCAPE (Iba ak je mobil ŠIROKÝ a NÍZKY) */
  /* Použijeme záporný bottom, aby topánka ostala dole */
  max-md:landscape:bottom-[-5%] max-md:landscape:scale-50
`}>
        
        <div className="relative  group transition-transform hover:scale-105 duration-500 w-full flex flex-col items-center">
          {/* Topánka */}
          <div className="w-[70%] mb-[-3.1%] ml-[-18%] z-10">
             <Image src="/skatepro..png" width={400} height={200} alt="Retro Dinamic" className="w-full  h-auto" />
          </div>
          {/* Podstavec */}
          <div className='w-full'>
            <Image src="/beton2.png" width={550} height={200} alt="Podstavec" className="w-full h-auto" />
          </div>
        </div>

        {/* Nápis pod topánkou */}
        <div className="relative  hover:scale-105 duration-500 w-full mt-4">
          <Image src="/kresba.png" width={300} height={400} alt="Exkluzívne modely" className="w-full h-auto" />
          <p className="absolute inset-0 flex mb-[19.5%] items-center justify-center text-black text-[24px] md:text-[32px] font-semibold uppercase leading-tight">
            Exkluzívne 
          </p>
        </div>
      </div>
    </div>
  


    {/* 2. DOLNÁ ČASŤ - PRODUKTY  */}
    <div className="w-full py-10 md:py-20">
      

      {/* PRODUKTOVÝ GRID / SCROLL */}
      <div className="flex md:grid md:grid-cols-3 md:gap-12 gap-4 ml-5 md:ml-0 overflow-x-auto text-center md:overflow-visible snap-x snap-mandatory no-scrollbar pb-10">
        {/* Prvá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/urbanlow.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-500'/>
          </div>
          <h3 className="font-semibold uppercase text-[16px] text-sm tracking-tight">Retro Dinamic</h3>
    
        </div>

        {/* Druhá topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/ecostreet.png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-500' />
          </div>
          <h3 className="font-semibold uppercase text-[16px]  text-sm tracking-tight">Retro Dinamic</h3>
       
        </div>

        {/* Tretia topánka */}
        <div className="flex-shrink-0 w-[75%] md:w-full snap-center group cursor-pointer">
          <div className=" p-6 mb-4">
            <Image src="/skatepro..png" width={400} height={300} alt="Retro Dinamic" className='group-hover:scale-110 transition duration-500' />
          </div>
          <h3 className="font-semibold uppercase text-[16px] text-sm tracking-tight">Retro Dinamic</h3>

        </div>
      </div>
      <div className="flex md:justify-center justify-center mb-15">
        <button className="bg-black text-[13px] text-white mt-10 px-6 py-3 font-bold  hover:invert hover:scale-300 transition-all">
            Zobraziť všetko
          </button>
      </div>
    </div>
  </div>
</section>
<br />
<br />











<section className='flex items-center w-full h-[80vw] md:h-[15vw] bg-black justify-center'>
  

  <div className='relative'>
    <h2 className='font-normal text-center text-white lg:text-[30px]'>Prihlás sa na odber noviniek a získaj 
      <br />10% zľavu na tvoj prvý nákup.</h2></div>
  <div className='absolute mt-50'>
  <button className="bg-white text-[13px] text-black px-6 py-3 font-bold  hover:invert transition-all">
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


      <footer className="bg-white text-black py-16 px-6 md:px-24 border-t border-gray-200">
  <div className="max-w-7xl mx-auto space-y-16">
    
    

    {/* 2. SEKČIA: LOGÁ PLATBY A DOPRAVY */}
    <div className="flex flex-col items-center py-10 space-y-8">
      <div className="text-center">
        <p className="text-black uppercase tracking-widest text-[10px] mb-4">Spôsoby platby</p>
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-100">
          <img src="/platba1.png" className="h-auto md:h-8" alt="Platba" />
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-black uppercase text-center tracking-widest text-[10px] mb-4">Doprava</p>
        <div className="flex flex-wrap justify-center gap-8 grayscale opacity-100">
          <img src="/doprava.png" className="h-8" alt="Doprava" />
         
        </div>
      </div>
    </div>

    {/* 3. SEKČIA: HLAVNÉ MENU  */}
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
          <li>info@moves.sk</li>
          <li className="text-xs text-black">Pon - Pia: 08:00 - 18:00</li>
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
    <div className="border-t border-gray-200 pt-8 flex flex-col w-full  md:flex-row justify-between items-center text-[10px] text-black-400 uppercase tracking-widest">
      <p>© 2026 MOVES Všetky práva vyhradené.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <span className="hover:text-black cursor-pointer">Obchodné podmienky</span>
        <span className="hover:text-black cursor-pointer">Ochrana údajov</span>
        <span className='hoover:text-black cursor-pointer'>MOVES: SK  CZ  IT  HR  AT  FR  UK</span>
      </div>
    </div>
  </div>
</footer>

    </main>
  )
}