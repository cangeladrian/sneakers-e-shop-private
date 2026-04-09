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
      

<section className="bg-white pt-30 md:py-20">
    <div className='flex flex-col items-center justify-center max-w-7xl mx-auto px-6'>
      
   
      <div className="relative z-10 w-full md:w-[40vw] max-w-[800px] aspect-video mb-12">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-contain"
          src="/jarvideo2.mp4"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <HandwrittenNote text="Since 2012" className="text-lime-400 block mb-8 mx-auto" />
        <h2 className="text-xl uppercase leading-tight md:text-8xl font-semibold text-center text-black tracking-tighter leading-tight mb-12">
          STREETWEAR  MEETS LUXURY.
        </h2>
        <p className="text-black text-xs uppercase  leading-relaxed [word-spacing:0.5rem] md:text-xl font-light  text-left ">
          Naša jarná kolekcia Urban Classic Spring reflektuje surovosť betónu a ľahkosť jarného rána. 
            Každý pár je výsledkom lokálnej produkcie a nekompromisnej kvality. Pri tvorbe tejto kolekcie sme hľadali
             rovnováhu v kontrastoch. Minimalistické línie a studené tóny sivej, inšpirované mestským brutalizmom, sme vyvážili
             textúrami, ktoré dýchajú. Výsledkom je obuv, ktorá v sebe nesie váhu tradície, no na nohe pôsobí takmer beztiažovo.
        </p>
      </div>
    </div>
  </section>

  {/* --- GRID SEKCIÁ --- */}
  <section className="bg-white py-10 md:py-32 px-6">
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
      
      {/* VIDEO 2  */}
      <div className="w-full h-auto overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="w-full md:h-[30vw] grayscale h-[50vw] object-cover"
          style={{ maskSize: 'contain', WebkitMaskSize: 'contain' }}
          src="/lesvideo2.mp4"
        />
      </div>
      
      <div className="flex flex-col justify-center">
        <p className="text-black  text-xl uppercase  leading-relaxed  md:text-xl font-semibold  mb-6">
          Objav miesta z obuvou navrhnutou pre ľahkosť.
        </p>
        <p className="text-black  md:text-xl text-xs uppercase leading-relaxed font-light [word-spacing:0.5rem] ">
        
       
  
    
         Urban Classic Spring je manifestom pre tých, ktorí neakceptujú priemernosť. Je to voľba pre komunitu, ktorá si potrpí 
         na detaily, akými
        sú ručne voskované šnúrky, anatomicky tvarované stielky pre celodenný komfort a podrážky s vysokou odolnosťou voči oderu.
        Cesta každého páru z kolekcie Urban Classic Spring začína ďaleko od anonymných pásových liniek veľkých tovární. Veríme, že skutočná kvalita potrebuje čas a sústredenú pozornosť, preto sme výrobu ponechali v rukách lokálnych majstrov, ktorí svoje remeslo dedia po generácie. Celý proces štartuje precíznym výberom materiálov: používame výhradne certifikované usne a technické textílie od európskych dodávateľov, ktoré spĺňajú najprísnejšie nároky na priedušnosť a dlhovekosť. Každý kus kože je ručne kontrolovaný, aby sme eliminovali aj
         tie najmenšie nedokonalosti a zabezpečili, že finálny produkt bude nielen estetický, ale aj funkčne nezničiteľný.
        </p>
      </div>
    </div>
  </section>


<section className='w-full md:pb-20'>
  <div className='flex justify-center  aligin-center'>
<img src="vyroba.png" alt="výroba" 
className=' h-[30vh] w-auto'
/>

</div>

</section>


  <section className="bg-white pb-32 px-6">
    <div className="max-w-4xl mx-auto  pt-10">
      <p className="text-black text-xs uppercase  [word-spacing:0.5rem]  md:text-xl font-light leading-relaxed">
       Záver procesu patrí detailom, ktoré definujú charakter Urban Classic. Anatomicky tvarované stielky vkladáme až po finálnej kontrole kvality, nasledované ručným voskovaním šnúrok, ktoré im dodáva nielen unikátny vzhľad, ale aj odolnosť voči jarnej vlhkosti. Každý pár tak prejde desiatkami rúk predtým, než sa prvýkrát dotkne ulice. Je to poctivý proces, ktorého výsledkom
            nie je len obuv, ale hmatateľný dôkaz toho, že lokálna produkcia a moderný dizajn môžu tvoriť dokonalú jednotu.
      </p>
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