"use client";

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Truck, RotateCcw, Gem } from 'lucide-react';
import Link from 'next/link';

// 1. DEFINÍCIA TYPU (Musí presne sedieť s dátami nižšie)
interface Produkt {
  nazov: string;
  cena: string;
  foto: string;
  popis: string;
  opis: string;
  popis2: string;
  galeria: string[];
  plagat: string;
}

// 2. DÁTA PRODUKTOV (Pridaná galeria a opravený opis)
const dataTopanok: { [key: string]: Produkt } = {
  "pro2": {
    nazov: "Urban Classic PRO2",
    cena: "350.00 €",
    foto: "/pro2.png",
    popis: "Naša vlajková loď. Revolučné tlmenie a slovenský dizajn.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Navrhnuté pre maximálny komfort počas celého dňa. Horný diel z prémiovej kože kombinovaný s priedušnou sieťovinou.",
    galeria: ["/pro2.png", "/pro2.png", "/pro2.png"], // Sem daj cesty k detailom
    plagat: "/sekciapro22.png"
  },
  "dinamic": {
    nazov: "Speed Runner X",
    cena: "159.00 €",
    foto: "/dinamic..png",
    popis: "Ľahká bežecká topánka pre mestských prieskumníkov.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Ultraľahká podrážka a anatomicky tvarovaná vložka pre prirodzený pohyb v meste.",
    galeria: ["/dinamic..png", "/dinamic..png", "/dinamic..png"],
    plagat: "/pro2-plagat.jpg"
  },
  "u3": {
    nazov: "U3 Urban Edition",
    cena: "159.00 €",
    foto: "/dinamic..png",
    popis: "Minimalistický look s maximálnou odolnosťou.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Mestská klasika v novom prevedení. Odolná voči každému počasiu.",
    galeria: ["/dinamic..png", "/dinamic..png", "/dinamic..png"],
    plagat: "/pro2-plagat.jpg"
  },
  "retrolow": {
    nazov: "Retro Low Classic",
    cena: "159.00 €",
    foto: "/retrolow..png",
    popis: "Návrat ku koreňom v modernom prevedení.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Inšpirované estetikou 90-tych rokov, vylepšené o moderné technológie spracovania.",
    galeria: ["/retrolow..png", "/retrolow..png", "/retrolow..png"],
    plagat: "/pro2-plagat.jpg"
  }
  // Ak pridáš ďalšie ID, nezabudni im doplniť galériu a opis!
};

export default function ProduktStranka() {
  const params = useParams();
  const id = params.id as string;

  // Vyhľadanie produktu alebo default na pro2
  const produkt: Produkt = dataTopanok[id] || dataTopanok["pro2"];
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];

  return (
    <main className="min-h-screen bg-white pb-20 pt-20">
      
      {/* --- 1. HERO SEKCIÁ (HLAVNÁ FOTKA) --- */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center overflow-hidden ">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl aspect-video"
        >
          <Image 
            src={produkt.foto} 
            alt={produkt.nazov} 
            fill 
            className="object-contain p-10" 
            priority 
          />
        </motion.div>
      </section>

      {/* --- 2. INFO SEKCIÁ (NÁZOV, CENA, VEĽKOSTI) --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* TEXTY */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tighter mb-4">{produkt.nazov}</h1>
            <p className="text-2xl font-light text-zinc-900">{produkt.cena}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">O produkte</h3>
            <p className="text-zinc-600 leading-relaxed text-lg">{produkt.popis}</p>
          </div>

          <div className="pt-10 border-t border-zinc-100">
             <p className="text-zinc-400 text-sm leading-relaxed">{produkt.opis}</p>
          </div>
        </div>

        {/* VÝBER VEĽKOSTI A NÁKUP */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="text-xs font-bold uppercase tracking-widest">Vybrať veľkosť (EU)</h3>
              <span className="text-[10px] border-b border-black cursor-help uppercase font-bold">Size Guide</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-4 text-sm font-bold transition-all border ${
                    selectedSize === size 
                    ? 'bg-black text-white border-black' 
                    : 'border-zinc-200 hover:border-black text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-6 font-bold uppercase tracking-[0.2em] hover:invert transition-all active:scale-[0.98]">
            Pridať do košíka
          </button>

          {/* DOPLNKOVÉ INFO */}
          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-100 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            <div>✓ Doprava zadarmo nad 150€</div>
            <div>✓ Doručenie do 48 hodín</div>
          </div>
        </div>
      </div>

      {/* --- 3. GALÉRIA (SLIDER) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 mt-10 border-t border-zinc-100">
        <h3 className="text-[10px] uppercase tracking-[0.4em] mb-12 text-zinc-400 font-bold text-center">
          Detailný pohľad
        </h3>
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
          {produkt.galeria.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[85vw] md:min-w-[30vw] aspect-[4/5] relative bg-zinc-50 snap-center"
            >
              <Image 
                src={img} 
                alt={`${produkt.nazov} detail ${index + 1}`}
                fill
                className="object-contain p-8 md:p-16"
              />
            </motion.div>
          ))}
        </div>
      </section>

 {/* --- SEKCIÁ PLAGÁT (FULLSCREEN / EDITORIAL) --- */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hiddenmt-20">
        
      

        {/* SAMOTNÝ PLAGÁT */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }} // Spustí sa, keď je 30% v zábere
          className="relative w-[70vw] md:w-[80vw] h-[150vh]  overflow-hidden"
        >
          <Image 
            src={produkt.plagat} 
            alt={`${produkt.nazov} plagát`}
            fill
            className="object-cover transition-transform duration-[2000ms] hover:scale-110" // Jemný zoom na hover
            priority={false} // Nemusí sa načítavať hneď
          />
        </motion.div>
        
        {/* Jemný Noise filter (ak chceš ten brutalistický vzhľad) */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>
      </section>

      <section className="bg-black text-white py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-12">
            STREETWEAR <br/> MEETS LUXURY.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed"> {produkt.popis2}
          </p>
        </div>
      </section>

    <section className="w-full flex justify-center justify-center
           py-10">
  {/* TENTO DIV DRŽÍ VŠETKY TRI POLOŽKY VEDĽA SEBA */}
  <div className=" md:flex-row  md:gap-80 flex flex-row md:grid md:grid-cols-3 grid grid-cols-2  gap-10 text-center   text-[12px]   font-normal ">
    
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
  );
}