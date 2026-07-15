'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem, Video, Facebook, Instagram, Youtube, Music4 } from 'lucide-react';

import { Variants } from 'framer-motion';
import Link from 'next/link';

import { Analytics } from "@vercel/analytics/next"









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
    <main className="min-h-screen font-sans bg-white relative overflow-hidden">

   

    <section className="relative w-full top-0 overflow-hidden bg-black">
  
  {/* 2. PANORAMATICKÝ BOX: Zjednotená výška. Na mobile 450px, na desktope 75-80% obrazovky */}
  <div className="relative w-full h-[450px] md:h-full bg-gray-950 overflow-hidden">
    
    {/* Video využíva object-cover, takže sa na mobile pekne oreže bez deformácie */}
    <video
      src="/leto-kolekcia.mp4" 
      className="w-full h-full object-cover"
      autoPlay      
      muted      
      loop         
      playsInline  
    />

    {/* GRADIENT OVERLAY: Vylepšený, aby tmavol od spodku a držal kontrast */}
    <div className="absolute  inset-0 bg-gradient-to-b from-blue-500/20 via-black/20 to-transparent z-10" />

    {/* 3. OBSAH: Odstránený mb-20, ktorý to na mobile kazil. Použitý padding pre flexibilitu */}
    <div className="absolute inset-0 z-20 px-2 max-w-8xl  mx-auto px-6 md:pb-12 pb-6  flex items-end justify-left text-white">
      <div className="w-full max-w-4xl flex  flex-col items-center justify-left">
        
        {/* Podnadpis: Na mobile text-5xl až 6xl (aby sa zmestil), na PC obrovský text-[92px] */}
     <span className="text-[80px] sm:text-[60px] md:text-[42px] w-full text-left mix-blend-difference font-normal  tracking-tighter text-gray-100 leading-none md:mb-4 mb-3 block">
  SUMMER <span className="font-black  "> AURA</span>
  <h1 className="text-[12px] md:text-[16px] w-full py-2  md:px-6 text-center mix-blend-difference font-medium  tracking-tighter text-white text-left leading-none md:mb-4 mb-3 block">
    Nové limitované kúsky obuvy a oblečenia.
    <br />
     Prémiové materiály a unikátne dizajny.
  </h1>
</span>


        {/* Tlačidlo: Jemne posunuté vyššie pomocou pt-2 */}
        <div className="flex flex-col items-center z-12 pt-2 justify-left">
          <Link href="/spring">
            <button className="text-black text-left rounded-sm px-8 py-2 bg-white font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
              Nakupovať
            </button>
          </Link>
        </div>

      </div>
    </div>

  </div>
</section>


 <section className="w-full">
  <div className="w-full max-w-7xl mx-auto px-2 mt-0.5 md:px-">
    
    <div className='flex justify-left md:py-8 py-4  items-start'>
      <motion.h1  
        initial={{ opacity: 0, y: 15 }}        
        whileInView={{ opacity: 1, y: 0 }}      
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }} 
        className='font-sans text-[24px] md:text-[18px] text-left font-normal  tracking-tighter text-black'
      >
        Odporúčané Produkty
      </motion.h1>
    </div>

    {/* OBAL: Zväčšená medzera na md:gap-x-6 a lg:gap-x-8 */}
    <div id="product-slider" className='font-bold flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 lg:grid-cols-6 text-black md:gap-x-0.5 md:gap-y-8 gap-x-0.5 w-full md:justify-center pb-2'>

      {/* Produkt 1 */}
      {/* 🛠️ ZMENA: Zväčšené na md:max-w-[280px] */}
      <Link href="/produkt/dinamic" className="block bg-[#FAFAFA] group cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="mt-4 flex items-left justify-center">
            <h3 className="text-black  text-[10px] text-left font-light uppercase px-6 py-1">
              NOVINKA
            </h3>
          </div>
          <div className="md:aspect-[16/19] aspect-square bg-transparent flex items-center justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/dinamic1.webp" 
              alt="Urban Dinamic" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 flex flex-col items-left justify-center">
            <h3 className="text-black text-[12px] text-left tracking-wider font-bold uppercase px-6">
              Urban Dinamic
            </h3>
            <h3 className="text-black text-[12px] font-medium uppercase px-6 mb-4">
              180,00 €
            </h3>
          </div>
        </div>
      </Link>

      {/* Produkt 2 */}
      <div className="group bg-[#FAFAFA] cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
               <div className="mt-4 flex items-left justify-center">
            <h3 className="text-black  text-[10px] text-left font-light uppercase px-6 py-1">
              NOVINKA
            </h3>
          </div>
          <div className="md:aspect-[16/19] aspect-square bg-transparent flex items-center justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/u3.1.1.webp" 
              alt="U-3" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[12px] font-bold tracking-wider uppercase px-6">
              U-3
            </h3>
            <h3 className="text-black text-[12px] font-medium uppercase px-6 mt-1">
              169,99 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 3 */}
      <div className="group bg-[#FAFAFA] cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/23.webp" 
              alt="Retro Low" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[12px] font-bold uppercase px-6">
              M-A2
            </h3>
            <h3 className="text-black text-[12px] font-medium uppercase px-6 mt-1">
              230,00 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 4 */}
      <div className="group bg-[#FAFAFA] cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/retrohigh1.webp" 
              alt="Retro High" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-bold uppercase px-6">
              Retro High
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              145,00 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 5 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/343.png" 
              alt="Retro Low" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-bold uppercase px-6">
              Retro Low
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              159,99 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 6 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full md:max-w-[280px] mx-auto flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 md:p-8 overflow-hidden">
            <img 
              src="/retrolow..png" 
              alt="Retro Low" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-medium uppercase px-6">
              Retro Low
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              130,00 €
            </h3>
          </div>
        </div>
      </div>
   
  
     

    </div>

    {/* Šípky (iba pre mobil) */}
    <div className="flex flex-row items-center justify-center gap-8 md:hidden">
      <button 
        onClick={() => {
          const slider = document.getElementById('product-slider');
          if (slider) slider.scrollBy({ left: -200, behavior: 'smooth' });
        }}
        className="p-3 text-black active:scale-90 transition-transform"
        aria-label="Posunúť doľava"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>

      <button 
        onClick={() => {
          const slider = document.getElementById('product-slider');
          if (slider) slider.scrollBy({ left: 200, behavior: 'smooth' });
        }}
        className="p-3 text-black active:scale-90 transition-transform"
        aria-label="Posunúť doprava"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

    {/* Tlačidlo Zobraziť všetko */}
    <div className="flex flex-col justify-center items-center pb-10 pt-4">
      <Link href="/">
        <button className="text-white text-left rounded-sm px-8 py-2 bg-black font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
          Zobraziť všetko
        </button>
      </Link>
    </div>

  </div>
</section>



    
      <section className="max-w-8xl  w-full   px- py- md:pb- ">
        <div className='flex  justify-left pb-4  px-2 md:px-12 items-start'>
        <motion.h1  
          initial={{ opacity: 0, y: 15 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]              
          }} 
          className='font-sans text-[24px] md:text-[24px] text-left font-normal  tracking-tighter text-black'
        >
          Limitované kúsky, ktoré sa rýchlo míňajú.   
          <h1 className="text-[12px] pt- md:text-[38px] font-normal">Buď medzi prvými, ktorí ich získajú.</h1>
        </motion.h1>
      </div>
      
      {/* 2-STĹPCOVÁ MRIEŽKA: Na mobile pod sebou (grid-cols-1), od desktopu vedľa seba (md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2   items-center w-full">
        
        {/* --- 1. ĽAVÝ STĹPEC: Veľká kampaňová / editorial fotka --- */}
        <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden  bg-black relative group">
          <img 
            src="/urban.webp" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition duration-700 opacity-90  ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute left-0 top-[10%] w-[48%] md:w-[45%] z-230  rotate-[-8deg]">
              <Image src="/nohavicecierne.webp" width={550} height={450} alt="Lifestyle" className="w-full shadow-lg  h-auto" />
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-6 left-6  text-black bg-white text-[12px]  py-1  tracking-tightest px-4 font-normal">
            Drop 01 / Nohavice - voľný stih
          </div>
        </div>
    <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden  bg-zinc-100 relative group">
          <img  
            src="/oblecenie.webp" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition  opacity-90 duration-700 ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 md:top-[30%] top-[50%] w-[45%] md:w-[40%] z-230   rotate-[6deg]">
              <Image src="/koselabiela.webp" width={550} height={450} alt="Lifestyle" className="w-full shadow-lg   h-auto" />
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-6 left-6  text-black bg-white text-[12px]  py-1  tracking-tightest px-4 font-normal">
            Drop 02 / Pruhovaná košela
          </div>
        </div>
      
      
      </div>
 
    </section>


<section className="relative w-full h-auto md:py-24 overflow-hidden">
  <div className="absolute  inset-0 bg-gradient-to-b from-black/10 via-black/0 to-transparent z-10" />

  {/* Pozadie */}
  <div className="absolute inset-0 z-0">
    <Image src="/pozadie2.jpg" alt="Background" fill className="object-cover grayscale opacity-90" priority />
  </div>

  <div className="max-w-[1200px] mx-auto relative z-10 px-4">
    <div className="relative flex flex-col items-center justify-center aspect-[16/10] md:aspect-[16/8] w-full mb-12 md:mb-20">

      {/* ... tvoje ostatné motion.div (obrázky/video) ... */}

      {/* CENTROVANÝ BLOK S KRESBOU */}
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative flex flex-col justify-center items-center hover:scale-105 duration-500 w-[250px] md:w-[350px]">
          <Image 
            src="/kresba.png" 
            width={300} 
            height={400} 
            alt="Exkluzívne modely" 
            className="w-full h-auto" 
          />
          {/* Text je teraz fixne v strede obrázka kresby */}
          <p className="absolute inset-0 flex pb-14 items-center justify-center text-black text-[24px] md:text-[32px] font-normal uppercase leading-tight">
            Exkluzívne
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


  <section hidden  className="relative w-ful  h-auto  md:py-24 overflow-hidden ">
       
        <div className="absolute     inset-0 z-0">
            <Image
              src="/pozadie2.jpg"
              alt="Background"
              fill
              className="object-cover grayscale opacity-90 "
              priority
            />
          </div>

        <div className="max-w-[1400px] mx-auto relative z-10 px-4">


          <div  className="relative flex flex-col items-center justify-center aspect-[16/12] md:aspect-[16/8] w-full mb-12 md:mb-20">

           
            <motion.div hidden initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute left-0 top-[10%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[-8deg]">
              <Image src="/OBECENIE2.png" width={550} height={450} alt="Lifestyle" className="w-full h-auto" />
            </motion.div>

<motion.div hidden initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 -translate-x-1/2 top-[0%] w-[55%] md:w-[35%] z-30 shadow-lg ">
             <video
      src="/sped.mp4" 
      className="w-full h-full object-cover"
      autoPlay      
      muted      
      loop         
      playsInline  
    />
            </motion.div>
       

            {/* Fotka vpravo */}
            <motion.div hidden initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 top-[15%] w-[30%] md:w-[38%]  rotate-[3deg] z-220 ">
              <Image src="/urity2.png" width={500} height={450} alt="Models" className="w-full h-auto" />
            </motion.div>


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

              <div hidden className="relative  group transition-transform  w-full flex flex-col items-center">
             
                <div hidden className="w-[70%] mb-[-3.1%] ml-[-18%] z-10">
                  <Image src="/skatepro..png" width={400} height={200} alt="Retro Dinamic" className="w-full  h-auto" />
                </div>
              
                <div hidden className='w-full'>
                  <Image src="/beton2.png" width={550} height={200} alt="Podstavec" className="w-full h-auto" />
                </div>
              </div>

              {/* Nápis pod topánkou */}
              <div className="relative flex flex-col justify-center items-center hover:scale-105 duration-500 w-full ">
                <Image src="/kresba.png" width={300} height={400} alt="Exkluzívne modely" className="w-full h-auto" />
                <p className="absolute inset-0 flex mb-[59.5%] items-center justify-center text-black text-[24px] md:text-[32px] font-normal uppercase leading-tight">
                  Exkluzívne
                </p>
              </div>
            </div>
          </div>



         
         
     
        </div>
      </section>
 

  <section className="max-w-8xl mx-auto w-full px-     ">
   
   
      
      {/* 2-STĹPCOVÁ MRIEŽKA: Na mobile pod sebou (grid-cols-1), od desktopu vedľa seba (md:grid-cols-2) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-0.5 py-4 items-center w-full">
        
        {/* --- 1. ĽAVÝ STĹPEC: Veľká kampaňová / editorial fotka --- */}
        <div className="w-full aspect-[4/4] md:aspect-[4/4] overflow-hidden  bg-[#FAFAFA] relative group">
          <img 
            src="/trickologo2.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition duration-700    ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute left-0 top-[10%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[-8deg]">
             
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-0 text-center py-1 px-4 md:left-6 bg-[#262626] left-2 text-white font-normal text-[12px] uppercase tracking-tightest ">
            Drop 03 / Tričko
          </div>
        </div>
      
    <div className="w-full aspect-[4/4] md:aspect-[4/4] overflow-hidden  bg-[#FAFAFA] relative group">
          <img 
            src="/tricko.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition  duration-700 ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 top-[30%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[6deg]">
         
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-0 text-center py-1 px-1 md:left-6 bg-[#262626] left-2 text-white font-normal text-[12px] uppercase tracking-tightest ">
            Drop 05 / Tričko s logom
          </div>
        </div>

            <div className="w-full col-span-1 md:col-span-1 aspect-[4/5] md:aspect-[4/4] overflow-hidden bg-[#FAFAFA] relative group">
          <img 
            src="/mikina2.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition  duration-700 ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 top-[30%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[6deg]">
         
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-0 text-center py-1 px-1 md:left-6 bg-[#262626] left-2 text-white font-normal text-[12px] uppercase tracking-tightest ">
            Drop 06 / MIKINA MOVES
          </div>
        </div>
      
      <div className="w-full col-span-1 md:col-span-1 aspect-[4/5] md:aspect-[4/4] overflow-hidden bg-[#FAFAFA] relative group">
          <img 
            src="/rifle.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition  duration-700 ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-0 top-[30%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[6deg]">
         
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-0 text-center py-1 px-1 md:left-6 bg-[#262626] left-2 text-white font-normal text-[12px] uppercase tracking-tightest ">
            Drop 06 / Baggy Rifle
          </div>
        </div>
      

      </div>
       <div className="flex flex-col justify-center items-center pb-10 pt-4">
      <Link href="/">
        <button className="text-white text-left rounded-sm px-8 py-2 bg-black font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
          Zobraziť všetko
        </button>
      </Link>
    </div>
    </section>





        <section className="relative w-full top-0 overflow-hidden ">
  
  {/* 2. PANORAMATICKÝ BOX: Zjednotená výška. Na mobile 450px, na desktope 75-80% obrazovky */}
  <div className="relative w-full h-[450px] md:h-full px-  overflow-hidden">
    
    {/* Video využíva object-cover, takže sa na mobile pekne oreže bez deformácie */}
    <video
      src="/header10.mp4" 
      className="w-full h-full object-cover"
      autoPlay      
      muted      
      loop         
      playsInline  
    />

    {/* GRADIENT OVERLAY: Vylepšený, aby tmavol od spodku a držal kontrast */}
    <div className="absolute  inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/10 z-10" />

    {/* 3. OBSAH: Odstránený mb-20, ktorý to na mobile kazil. Použitý padding pre flexibilitu */}
    <div className="absolute inset-0 z-20 mix-blend-difference max-w-8xl mx-auto px-6 md:pb-12 pb-6 flex items-end justify-left text-white">
      <div className="w-full max-w-4xl flex  flex-col items-center justify-left">
        
        {/* Podnadpis: Na mobile text-5xl až 6xl (aby sa zmestil), na PC obrovský text-[92px] */}
     <span className="text-[24px] sm:text-[60px] md:text-[42px] w-full text-left mix-blend-difference font-medium  tracking-tighter text-white leading-none md:mb-4 mb-3 block">
  NOVÁ KOLEKCIA
  <h1 className="text-[12px] md:text-[16px] w-full py-2  md:px-6 text-center mix-blend-difference font-medium  tracking-tighter text-white text-left leading-none md:mb-4 mb-3 block">
    Nové limitované kúsky obuvy a oblečenia.
    <br />
     Prémiové materiály a unikátne dizajny.
  </h1>
</span>


        {/* Tlačidlo: Jemne posunuté vyššie pomocou pt-2 */}
        <div className="flex flex-col items-center z-12 pt-2 justify-left">
          <Link href="/spring">
            <button className="text-black text-left rounded-sm px-8 py-2 bg-white font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
              Nakupovať
            </button>
          </Link>
        </div>

      </div>
    </div>

  </div>
</section>




<section hidden className="w-full h-[450px] relative top-0 overflow-hidden rounded-sm grid grid-cols-1 md:grid-cols-2   md:my-16 px-1 md:px-12">
   <div> 
    <video src="/speed.mp4"
autoPlay
loop
muted
playsInline
className="w-full h-full object-cover"


    />
   </div>

   <div className="flex flex-col relative justify-center items-start">
    <img src="/speed.jpg" alt="Speed Logo" className="w-full relative md:w-[180px] " />
        <div className="absolute inset-0 z-20  max-w-8xl mx-auto px-6 md:pb-12 pb-6 flex items-end justify-left text-white">
      <div className="w-full max-w-4xl flex  flex-col items-center justify-left">
        
        {/* Podnadpis: Na mobile text-5xl až 6xl (aby sa zmestil), na PC obrovský text-[92px] */}
     <span className="text-[22px] sm:text-[60px] md:text-[42px] w-full text-left mix-blend-difference font-medium  tracking-tighter text-white leading-none md:mb-4 mb-3 block">
  SUMMER AURA
  <h1 className="text-[12px] md:text-[16px] w-full py-2  md:px-6 text-center mix-blend-difference font-medium  tracking-tighter text-white text-left leading-none md:mb-4 mb-3 block">
    Nové limitované kúsky obuvy a oblečenia.
    <br />
     Prémiové materiály a unikátne dizajny.
  </h1>
</span>


        {/* Tlačidlo: Jemne posunuté vyššie pomocou pt-2 */}
        <div className="flex flex-col items-center z-12 pt-2 justify-left">
          <Link href="/spring">
            <button className="text-black text-left rounded-sm px-8 py-2 bg-white font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
              Nakupovať
            </button>
          </Link>
        </div>

      </div>
    </div>
      
   </div>


  </section>





  <section hidden className="w-full my- ">

    <div className="w-full max-w-8xl mx-auto  mt-0  px-6 md:px-12 ">
      {/* NADPIS SEKCE */}
      <div className='flex  justify-center  mb-16 items-start'>
        <motion.h1  
          initial={{ opacity: 0, y: 15 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]              
          }} 
          className='text-[36px] md:text-[44px] text-left uppercase font-black   tracking-normal text-black leading-[0.95]'
        >
       
        </motion.h1>
      </div>
        <div className='flex  justify-left py-8  items-start'>
        <motion.h1  
          initial={{ opacity: 0, y: 15 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]              
          }} 
          className='text-[36px] md:text-[18px] text-left  font-normal  uppercase tracking-normal text-black'
        >
          Odporúčané produkty
        </motion.h1>
      </div>

      {/* OBRIE 3 STĹPCE BEZ OMEDZENIA PADDINGOM */}
      <div className=' font-bold grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 text-black  md:gap-x-1 md:gap-y-8 gap-x-8 w-full'>

        {/* Produkt 1 */}
        <Link href="/produkt/dinamic" className="block  bg-gray-100  group cursor-pointer">
          <div className="flex flex-col w-full">
            {/* ZMENA: aspect-[16/19] a p-0 – topánka vystrelí do šírky na maximum stĺpca */}
            <div className="aspect-[16/19] bg-transparent flex items-center justify-center px-12 overflow-hidden">
              <img 
                src="/dinamic1.webp" 
                alt="Urban Dinamic" 
                className="w-full h-[11vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            
            {/* Label pod topánkou */}
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className=" text-black text-[14px] text-left font-normal uppercase  px-8 py- rounded-full  ">
                Urban Dinamic
              </h3>
                        <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                180,00 €
              </h3>
              
            </div>
          </div>
        </Link>

        {/* Produkt 2 */}
        <div className="group  bg-gray-100  cursor-pointer">
          <div className="flex flex-col w-full">
            <div className="aspect-[16/19] bg-transparent flex items-center justify-center px-12 overflow-hidden">
              <img 
                src="/ciapka.png" 
                alt="U-3" 
                className="w-full h-[11vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full  ">
                U-3
              </h3>
                     <h3 className="text-black text-[14px] font-normal uppercase px-8 py- rounded-full">
                169,99 €
              </h3>
            </div>
          </div>
        </div>

        {/* Produkt 3 */}
        <div className="group   bg-gray-100  cursor-pointer">
          <div className="flex flex-col w-full">
            <div className=" flex items-center aspect-[16/19]  justify-center px-12 overflow-hidden">
              <img 
                src="/trickologo2.png" 
                alt="Retro Low" 
                className="w-full h-[18vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                M-A2
              </h3>
                   <h3 className="text-black text-[14px] font-normal uppercase px-8 py- rounded-full">
                230,00 €
              </h3>
            </div>
          </div>
        </div>

                {/* Produkt 3 */}
        <div className="group   bg-gray-100  cursor-pointer">
          <div className="flex flex-col w-full">
            <div className=" flex items-center aspect-[16/19]  justify-center px-12 overflow-hidden">
              <img 
                src="/taska.png" 
                alt="Retro Low" 
                className="w-full h-[11vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                Retro High
              </h3>
                   <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                145,00 €
              </h3>
            </div>
          </div>
        </div>

                {/* Produkt 3 */}
        <div className="group   bg-gray-100  cursor-pointer">
          <div className="flex flex-col w-full">
            <div className=" flex items-center aspect-[16/19]  justify-center px-12 overflow-hidden">
              <img 
                src="/batoh.png" 
                alt="Retro Low" 
                className="w-full h-[11vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                Retro Low
              </h3>
                   <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                159,99 €
              </h3>
            </div>
          </div>
        </div>

                {/* Produkt 3 */}
        <div className="group   bg-gray-100  cursor-pointer">
          <div className="flex flex-col w-full">
            <div className=" flex items-center aspect-[16/19]  justify-center px-12 overflow-hidden">
              <img 
                src="/retrolow..png" 
                alt="Retro Low" 
                className="w-full h-[11vh] object-contain group-hover:scale-80 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
            </div>
            <div className="mt-8 flex flex-col items-left justify-center">
              <h3 className="text-black text-[14px] font-normal uppercase t px-8 py- rounded-full">
                Retro Low
              </h3>
                   <h3 className="text-black text-[14px] font-normal uppercase  px-8 py- rounded-full">
                130,00 €
              </h3>
            </div>
          </div>
        </div>
           

   
         
           

      </div>

      {/* Tlačidlo Zobraziť všetko */}
      <div className="flex flex-col justify-center items-center py-8">
        <Link href="/">
          <button className=" text-black border-b border-black text-[18x] font-normal uppercase tracking-widest px-8 py-1 ">
            Zobraziť všetko
          </button>
        </Link>
      </div>
      </div>
    </section>

                           
     






  


   


   


     



      <section hidden className="relative bg-gradient-to-b from-black/10 to-white  w-full flex flex-col items-center">



        <div className="relative w-full aspect-[3.5/5]   md:aspect-video flex items-center justify-center   overflow-hidden z-10  ">

     
          <div className="absolute     inset-0 z-0">
            <Image
              src="/pozadie4.png"
              alt="Background"
              fill
              className="object-cover grayscale opacity-90 "
              priority
            />
          </div>

          {/* NÁPIS PRO2 */}
          <div hidden className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.h1
              // 
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 3.0,
                ease: [0.22, 1, 0.36, 1]
              }}


              className="text-[35vw] md:text-[8vw] mb-[28%] font-black text-red-700/80 "
            >
              NEXT 3
            </motion.h1>
          </div>

    
          <motion.div 
            initial={{ opacity: 0, x: -120 }}         // 
            whileInView={{ opacity: 1, x: 0 }}      // 
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]              // 
            }}
            className="relative z-20 w-[140%] md:w-[40%]   hover:scale-110  duration-1200">

            <Image
              src="/poz.png"
              alt="Topánka na kocke"
              width={1200}
              height={800}
              className="object-contain  "
              priority
            />
          </motion.div>

        </div>


        <div className="absolute bottom-10 md:bottom-20  z-30 w-full flex flex-col items-center justify-center px-6">

          <div className="mb-1 md:mb-10">
            <p className="text-5xl md:text-8xl uppercase font-light tracking-tight text-black text-center">
             nike x moves"
             
            </p>
          </div>

          <Link href="/produkt/pro2" className="w-fullmax-w-xs">
            <button className="bg-black text-[13px] text-white px-6 py-3 font-bold hover:invert  transition-all">
              Objav
            </button>
          </Link>
        </div>

      </section>













   





      <section className='flex flex-col items-center bg-[#E16052] mt-8 py-12 md:py-24 justify-center'>

        <div className='relative '>
          <h2 className=' font-bold uppercase text-[24px]  mt- text-center text-white lg:text-[42px]'>
            Získaj 10% zľavu.</h2></div>
            <br />
          <p className='text-center text-white text-[12px] md:text-[16px] mt-'>
            Prihlás sa na odber newslettera a získaj 10% zľavu na prvý nákup.</p>
       <div className="flex flex-col items-center z-12 pt-2 justify-left">
          <Link href="/spring">
            <button className="text-black mt-4 text-left rounded-sm px-8 py-2 bg-white font-bold text-[12px] uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-300">
              Prihlásiť sa
            </button>
          </Link>
        </div>
      </section>


      <section hidden className="w-full flex bg-black   justify-center justify-center
           py-10">
        {/* TENTO DIV DRŽÍ VŠETKY TRI POLOŽKY VEDĽA SEBA */}
        <div className=" md:flex-row py-10  md:gap-80 flex flex-col md:grid md:grid-cols-3  gap-10 text-center  text-white text-[16px]   font-light ">

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


      <footer className=" bg-white mt-8 text-black  px-6 md:px-24">
        <div className= ' max-w-7xl mx-auto  '>



          {/* 2. SEKČIA: LOGÁ PLATBY A DOPRAVY */}
          <div className="flex flex-col items-center py-10 space-y-8">
            <div className="text-center">
              <p className="text-black uppercase tracking-widest text-[10px] mb-4">Spôsoby platby</p>
              <div className="flex flex-wrap justify-center gap-6  opacity-100">
                <img src="/platba1.png" className="h-auto md:h-8" alt="Platba" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-black uppercase text-center tracking-widest text-[10px] mb-4">Doprava</p>
              <div className="flex flex-wrap justify-center gap-8  opacity-100">
                <img src="/doprava.png" className="h-8" alt="Doprava" />

              </div>
            </div>
          </div>

          {/* 3. SEKČIA: HLAVNÉ MENU  */}
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-12 pt-12">
            <div className="space-y-4">
              <h4 className="font-bold uppercase  text-[16px]">Pomoc</h4>
              <ul className="space-y-2 text-[12px] text-black">
                <li className="hover:text-black cursor-pointer transition">Sledovanie objednávky</li>
                <li className="hover:text-black cursor-pointer transition">Platba</li>
                <li className="hover:text-black cursor-pointer transition">Vrátenie a výmena</li>
                <li className="hover:text-black cursor-pointer transition">Tabuľky veľkostí</li>
                <li className="hover:text-black cursor-pointer transition">FAQ</li>
                <li className="hover:text-black cursor-pointer transition">Zľavový kupon</li>
                <li className="hover:text-black cursor-pointer transition">Členstvo</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase  text-[16px]">Kategórie</h4>
              <ul className="space-y-2 text-[12px] text-black">
               
                <li className="hover:text-black cursor-pointer transition">Ženy</li>
                <li className="hover:text-black cursor-pointer transition">Muži</li> 
                <li className="hover:text-black cursor-pointer transition">Nové kúsky</li>
                <li className="hover:text-black cursor-pointer transition">Kolekcie</li>
                <li className="hover:text-black cursor-pointer transition">Blog</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase  text-12px">Kontakt</h4>
              <ul className="space-y-2 text-[12px] text-black">
                <li className="font-medium">+421 980 000 222</li>
                <li>info@moves.sk</li>
                <li className="text-xs text-black">Pon - Pia: 08:00 - 18:00</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase  text-12px">Sociálne siete</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Spotify"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
                >
                  <Music4 size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* SPODNÁ LIŠTA: COPYRIGHT */}
          <div className="border-t border-gray-400 pt-8 mt-8 mb-8 flex flex-col w-full  md:flex-row justify-between items-center text-[10px] text-black font-normal uppercase tracking-widest">
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