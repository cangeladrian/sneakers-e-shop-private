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
      src="/header-nova-kolekcia.mp4" 
      className="w-full h-full object-cover"
      autoPlay      
      muted      
      loop         
      playsInline  
    />

    {/* GRADIENT OVERLAY: Vylepšený, aby tmavol od spodku a držal kontrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/30 via-transparent to-white/20 z-10" />

    {/* 3. OBSAH: Odstránený mb-20, ktorý to na mobile kazil. Použitý padding pre flexibilitu */}
    <div className="absolute inset-0 z-20 max-w-8xl mx-auto px-6 md:pb-12 pb-6 flex items-end justify-center text-white">
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        {/* Podnadpis: Na mobile text-5xl až 6xl (aby sa zmestil), na PC obrovský text-[92px] */}
        <span className="text-[44px] sm:text-[60px] md:text-[92px] text-center mix-blend-difference font-black uppercase tracking-tighter text-blue-600 leading-none mb-4 block">
          NOVÉ KÚSKY
        </span>

        {/* Tlačidlo: Jemne posunuté vyššie pomocou pt-2 */}
        <div className="flex flex-row items-center pt-2 justify-center">
          <Link href="/spring">
            <button className="text-white border-b border-white px-8 py-3 font-bold text-[12px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              Nakupovať
            </button>
          </Link>
        </div>

      </div>
    </div>

  </div>
</section>


  <section className="w-full   ">
  <div className="w-full max-w-8xl mx-auto  px-2 md:px-12 ">
    


    <div className='flex justify-left md:py-8 py-4 items-start'>
      <motion.h1  
        initial={{ opacity: 0, y: 15 }}        
        whileInView={{ opacity: 1, y: 0 }}      
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }} 
        className='font-sans text-[28px] md:text-[18px] text-left font-medium  tracking-tighter text-black'
      >
        Odporúčané Produkty
      </motion.h1>
    </div>

    {/* 🛠️ UPRAVENÝ OBAL: Na mobile flex s povoleným scrollom do boku, bez viditeľného scrollbaru, na desktopoch čistý grid */}
    <div id="product-slider" className='font-bold flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 lg:grid-cols-6 text-black md:gap-x-0.5 md:gap-y-8 gap-x-0.5 md:w-full pb-2'>

      {/* Produkt 1 */}
      <Link href="/produkt/dinamic" className="block bg-gray-100 group  cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="md:aspect-[16/19] aspect-square bg-transparent flex items-center justify-center p-6 overflow-hidden">
            <img 
              src="/dinamic1.webp" 
              alt="Urban Dinamic" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4  flex flex-col items-left justify-center">
            <h3 className="text-black text-[12px] text-left font-medium uppercase px-6">
              Urban Dinamic
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 ">
              180,00 €
            </h3>
          </div>
        </div>
      </Link>

      {/* Produkt 2 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="md:aspect-[16/19] aspect-square bg-transparent flex items-center justify-center p-6 overflow-hidden">
            <img 
              src="/u3.1.1.webp" 
              alt="U-3" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-medium uppercase px-6">
              U-3
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              169,99 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 3 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 overflow-hidden">
            <img 
              src="/23.webp" 
              alt="Retro Low" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-medium uppercase px-6">
              M-A2
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              230,00 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 4 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 overflow-hidden">
            <img 
              src="/retrohigh1.webp" 
              alt="Retro High" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-medium uppercase px-6">
              Retro High
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              145,00 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 5 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 overflow-hidden">
            <img 
              src="/343.png" 
              alt="Retro Low" 
              className="w-full h-full object-contain group-hover:scale-105 transition duration-750 ease-[cubic-bezier(0.25,1,0.5,1)]" 
            />
          </div>
          <div className="mt-4 mb-6 flex flex-col items-left justify-center">
            <h3 className="text-black text-[14px] font-medium uppercase px-6">
              Retro Low
            </h3>
            <h3 className="text-black text-[14px] font-medium uppercase px-6 mt-1">
              159,99 €
            </h3>
          </div>
        </div>
      </div>

      {/* Produkt 6 */}
      <div className="group bg-gray-100 cursor-pointer w-[45vw] sm:w-[45vw] md:w-full flex-shrink-0 snap-start">
        <div className="flex flex-col w-full">
          <div className="flex items-center md:aspect-[16/19] aspect-square justify-center p-6 overflow-hidden">
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

    <div className="flex flex-row items-center justify-center gap-8 md:hidden">
        
        {/* Šípka DOĽAVA */}
        <button 
          onClick={() => {
            const slider = document.getElementById('product-slider');
            if (slider) slider.scrollBy({ left: -200, behavior: 'smooth' });
          }}
          className="p-3 text-black active:scale-90 transition-transform"
          aria-label="Posunúť doľava"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        {/* Šípka DOPRAVA */}
        <button 
          onClick={() => {
            const slider = document.getElementById('product-slider');
            if (slider) slider.scrollBy({ left: 200, behavior: 'smooth' });
          }}
          className="p-3 text-black active:scale-90 transition-transform"
          aria-label="Posunúť doprava"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

      </div>

    {/* Tlačidlo Zobraziť všetko */}
    <div className="flex flex-col justify-center items-center py-8">
      <Link href="/">
        <button className="text-black border-b border-black md:text-[18px] text-[12px] font-normal uppercase tracking-widest md:px-8 px-4 py-1">
          Zobraziť všetko
        </button>
      </Link>
    </div>

  </div>
</section>







    
      <section className="max-w-8xl mx-auto w-full bg-black px- py- md:pb- ">
        <div className='flex  justify-left py-4  px-6 md:px-12 items-start'>
        <motion.h1  
          initial={{ opacity: 0, y: 15 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]              
          }} 
          className='text-[28px] md:text-[32px]  text-left uppercase font-normal   tracking-tighter text-white leading-[0.95]'
        >
          LIMITOVANÉ KÚSKY OBLEČENIA 
        </motion.h1>
      </div>
      
      {/* 2-STĹPCOVÁ MRIEŽKA: Na mobile pod sebou (grid-cols-1), od desktopu vedľa seba (md:grid-cols-2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 md:gap-0.5  items-center w-full">
        
        {/* --- 1. ĽAVÝ STĹPEC: Veľká kampaňová / editorial fotka --- */}
        <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden  bg-zinc-100 relative group">
          <img 
            src="/urban.webp" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition duration-700   ease-out"
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
          <div className="absolute bottom-6 left-6 bg-white text-black px-4  text-[18px] uppercase font-semibold tracking-tightest ">
            Drop 02 / Nohavice - voľný stih
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
          <div className="absolute bottom-6 left-6 bg-white text-black  text-[18px] uppercase  tracking-tightest px-4 font-semibold">
            Drop 03 / Pruhovaná košela
          </div>
        </div>
      
      
      </div>
 
    </section>





  <section hidden className="relative w-ful  h-auto py-12 md:py-24 overflow-hidden ">
       


        <div className="max-w-[1400px] mx-auto relative z-10 px-4">


          <div className="relative aspect-[16/12] md:aspect-[16/8] w-full mb-10 md:mb-20">

           
            <motion.div initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute left-0 top-[10%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[-8deg]">
              <Image src="/ecoeet.png" width={550} height={450} alt="Lifestyle" className="w-full h-auto" />
            </motion.div>

<motion.div initial={{ opacity: 1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute right-30 -translate-x-1/2 top-[0%] w-[35%] md:w-[35%] z-30 shadow-lg rotate-[1deg]">
              <Image src="/ra.jpg" width={550} height={450} alt="Lifestyle" className="w-full h-auto" />
            </motion.div>
       

            {/* Fotka vpravo */}
            <motion.div initial={{ opacity: 1, y: 50 }}
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

              <div className="relative  group transition-transform  w-full flex flex-col items-center">
             
                <div className="w-[70%] mb-[-3.1%] ml-[-18%] z-10">
                  <Image src="/skatepro..png" width={400} height={200} alt="Retro Dinamic" className="w-full  h-auto" />
                </div>
              
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



         
         
     
        </div>
      </section>
 

  <section className="max-w-8xl mx-auto w-full bg-black pt-0.5 pb-8   ">
   
   
      
      {/* 2-STĹPCOVÁ MRIEŽKA: Na mobile pod sebou (grid-cols-1), od desktopu vedľa seba (md:grid-cols-2) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 md:gap-0.5  items-center w-full">
        
        {/* --- 1. ĽAVÝ STĹPEC: Veľká kampaňová / editorial fotka --- */}
        <div className="w-full aspect-[4/5] md:aspect-[4/4] overflow-hidden  bg-orange-700/88 relative group">
          <img 
            src="/mikina2.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
            alt="Summer Campaign" 
            className="w-full h-full object-cover group-hover:scale-102 transition duration-700   ease-out"
          />
                  <motion.div initial={{ opacity: 1, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1]
              }} className="absolute left-0 top-[10%] w-[35%] md:w-[35%] z-230 shadow-lg  rotate-[-8deg]">
             
            </motion.div>
          {/* Jemný dizajnový overlay s textom priamo na fotke, ak by si chcel */}
          <div className="absolute bottom-6 md:left-6 bg-white left-6 text-black font-semibold text-[18px] uppercase tracking-tightest ">
            Drop 04 / Mikina MOVES
          </div>
        </div>
    <div className="w-full aspect-[4/5] md:aspect-[4/4] overflow-hidden  bg-blue-600/90 relative group">
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
          <div className="absolute bottom-6 left-6 bg-white text-black font-semibold text-[18px] uppercase tracking-tightest ">
            Drop 05 / Tričko s logom
          </div>
        </div>

            <div className="w-full col-span-2 md:col-span-1 aspect-[4/5] md:aspect-[4/4] overflow-hidden  bg-red-700/70 relative group">
          <img 
            src="/trickologo2.png" // Sem hoď kampaňovú fotku (napr. chalana z pláže)
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
          <div className="absolute bottom-6 left-6 bg-white text-black font-semibold text-[18px] uppercase tracking-tightest ">
            Drop 06 / Tričko s golierom
          </div>
        </div>
      
      

      </div>
           <div className="flex flex-col justify-center items-center py-8">
        <Link href="/">
          <button className=" text-white border-b border-white md:text-[18px] text-[12px] font-normal uppercase tracking-widest md:px-8 px-4 py-1 ">
            Zobraziť všetko
          </button>
        </Link>
      </div>
    </section>





    <section className="relative w-full min-h-screen top-0 overflow-hidden bg-black  my-8 ">
       <div hidden className='flex relative justify-left py-4 mb- px-6 md:px-12 items-start'>
        <motion.h1  
          initial={{ opacity: 0, y: 15 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1]              
          }} 
          className='text-[36px] md:text-[48px] py-4 text-left uppercase font-black   tracking-normal text-white leading-[0.95]'
        >
         SUMMER AURA
        </motion.h1>
      </div>
      
      {/* 2. PANORAMATICKÝ BOX: Šírka w-full, výška fixná a tenšia (na mobile 350px, na desktope 450px) */}
      <div className="relative w-full h-[450px] md:h-full bg-gray-950">
        
        {/* Obrázok kampane roztiahnutý na úplné kraje monitora */}
         <video
              src="/leto-kolekcia.mp4" 
     width={450} 
    height={350} 
    className="w-full h-auto"
    autoPlay      
    muted      
    loop         
    playsInline  
            />

        {/* GRADIENT OVERLAY: Pre skvelú čitateľnosť textu */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 " />

        {/* 3. OBSAH: Zostáva zarovnaný v rovnakej mriežke ako zvyšok webu (max-w-7xl), aby nápisy neutekali úplne do rohu monitora */}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 text-center md:px-12 py-16 flex items-center justify-center text-white">
          <div className="max-w-xl">
            
            <div className=" text-center  flex items-center justify-center ">
            {/* Podnadpis */}
            <span className=" text-[18px] py-4 px-4 text-center mix-blend-difference font-normal bg-orange-500/70 text-white mb-2 block">
              SUMMER AURA 2026
            </span>
</div>
            {/* Nadpis */}
            <h1  className="text-[74px] py-30 md:text-5xl lg:text-8xl text-center font-black uppercase tracking-normal leading-[0.95] mb-4 text-white ">
              Urban SUMMER.
            </h1>

          
          

            {/* Tlačidlo */}
            <div className="flex flex-row items-center py-8 justify-center gap-4">
              <Link href="/spring">
                <button className="border-b border-white text-white px-6 py-3 font-bold text-[12px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 ">
                  Nakupovať
                </button>
              </Link>
            </div>

          </div>
        </div>

      </div>



    </section>

  <section className="w-full my- ">

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

                           
     






  


   


   


     



      <section hidden className="relative bg-gradient-to-b from-white to-gray-200  w-full flex flex-col items-center">



        <div className="relative w-full aspect-[3.5/5]   md:aspect-video flex items-center justify-center   overflow-hidden z-10  ">

     
          <div className="absolute   inset-0 z-0">
            <Image
              src="/group.png"
              alt="Background"
              fill
              className="object-cover grayscale opacity-0 blur-sm"
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
              src="/airzoom.png"
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













   





      <section className='flex flex-col items-center bg-black  py-16 md:py-24 justify-center'>

        <div className='relative '>
          <h2 className=' font-bold uppercase  mt-2 text-center text-white lg:text-[42px]'>
            Získaj 10% zľavu.</h2></div>
            <br />
          <p className='text-center text-white text-[14px] md:text-[16px] mt-2'>
            Prihlás sa na odber newslettera a získaj 10% zľavu na prvý nákup.</p>
        <div className='relative flex items-center justify-center gap-4 mt-6 mb-4'>
          <button className="bg-black text-[13px] text-white px-6 py-3 font-bold border-b border-white hover:bg-white hover:text-black transition-all">
            Prihlásiť sa
          </button>
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


      <footer className=" bg-white mt-16 text-black py-16 px-6 md:px-24">
        <div className= ' max-w-7xl mx-auto  space-y-16'>



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
              <h4 className="font-bold uppercase  text-12px">Pomoc</h4>
              <ul className="space-y-2 text-16px text-black">
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
              <h4 className="font-bold uppercase  text-12px">Kategórie</h4>
              <ul className="space-y-2 text-16px text-black">
               
                <li className="hover:text-black cursor-pointer transition">Ženy</li>
                <li className="hover:text-black cursor-pointer transition">Muži</li> 
                <li className="hover:text-black cursor-pointer transition">Nové kúsky</li>
                <li className="hover:text-black cursor-pointer transition">Kolekcie</li>
                <li className="hover:text-black cursor-pointer transition">Blog</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase  text-12px">Kontakt</h4>
              <ul className="space-y-2 text-16px text-black">
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
          <div className="border-t border-gray-400 pt-8 flex flex-col w-full  md:flex-row justify-between items-center text-[10px] text-black font-normal uppercase tracking-widest">
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