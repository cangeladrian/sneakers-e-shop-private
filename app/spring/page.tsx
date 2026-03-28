"use client";

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'; // Pridané useState a useEffect
import { motion,AnimatePresence, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import Image from 'next/image'
import { Truck, RotateCcw, Gem } from 'lucide-react';
import { Reenie_Beanie } from 'next/font/google';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"

// Komponent pre tvoje ručné poznámky (aby si ich nemusel stále kódovať)
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
      
    <section className="relative w-full md:h-[100vh] h-[40vh]  overflow-hidden bg-black">
  {/* HLAVNÉ VIDEO NA POZADÍ */}
  <video
    autoPlay loop muted playsInline
    className="absolute inset-0  mt-10 md:mt-0  object-cover opacity-80"
    src="/vspring.mp4"
  />


</section>



{/* --- BRAND STORY (Editorial blok) --- */}
      <section className="bg-black  text-white pb-10 md:py-40">

 <div className='flex  flex-col items-center justify-center'>
 <div className="relative mix-blend-screen md:bottom-[20vh] bottom-[10vh] md:bottom-[-10vh]  z-88 w-[40vw] max-w-[2950px] min-w-[400px]  opacity-80 ">
    <video
      autoPlay loop muted playsInline
      className="md:w-full md:h-full   object-cover"
      style={{
        // SEM DAJ CESTU K TVOJMU LOGU (Musí byť čierne s priehľadným pozadím)
        
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
       
        maskSize: 'contain',
      }}
      src="/tvarv.mp4"
    />
  </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HandwrittenNote text="Since 2024" className="text-lime-400 block mb-8" />
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-12">
            STREETWEAR <br/> MEETS LUXURY.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            Naša jarná kolekcia Urban Classic Spring reflektuje surovosť betónu a ľahkosť jarného rána. 
            Každý pár je výsledkom lokálnej produkcie a nekompromisnej kvality.
          </p>
        </div>
</div>

      </section>





      
       

   

    </main>
  );
}