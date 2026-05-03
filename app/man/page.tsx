"use client";

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'; 
import { motion,AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem } from 'lucide-react';
import { Reenie_Beanie } from 'next/font/google';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"


const HandwrittenNote = ({ text, className = "" }: { text: string, className?: string }) => (
  <motion.span 
    initial={{ opacity: 0, rotate: -5 }}
    whileInView={{ opacity: 1, rotate: -2 }}
    className={`font-handwritten text-zinc-500 italic ${className}`}
  >
    {text}
  </motion.span>
);

export default function SpringCollection() {
  return (
    <main className="bg-white min-h-screen font-sans text-black overflow-x-hidden">
      

<section className="max-w-7xl mx-auto mt-0 md:mt-20 pt-10 md:pt-25">
        
        <div className='flex justify-center py-4 mt-8 md:mt-0 md:justify-start items-start'>
            
         <motion.h1  // VRÁTENÉ ANIMAČNÉ VLASTNOSTI (Props)
        initial={{ opacity: 0, y: 10 }}         //
        whileInView={{ opacity: 1, y: 0 }}      // 
        transition={{ 
          duration: 1.0, 
          ease: [0.22, 1, 0.36, 1]              // 
        }} className='uppercase leading-relaxed font-bold [word-spacing:0.5rem] md:text-[32px] text-[24px]  tracking-tight'>Pánska obuv</motion.h1>
          
          </div>


        {/* Mriežka s 3 stĺpcami */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
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
                <h3 className="font-bold uppercase text-[16px] text-sm tracking-tight">Retro High</h3>
             
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






       
<section className="w-full flex justify-center justify-center
           py-20">
 
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
        <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-4">Spôsoby platby</p>
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-100">
          <img src="/platba1.png" className="h-6" alt="Platba" />
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
          <li>info@moves.sk</li>
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
  );
}